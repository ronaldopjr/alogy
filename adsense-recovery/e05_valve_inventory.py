from __future__ import annotations

import csv
import hashlib
import json
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path('.')
PAGE = ROOT / 'blog-calibracao-valvula-controle.html'
INVENTORY = ROOT / 'adsense-recovery' / 'ADSENSE-INVENTORY.csv'
REPORT = ROOT / 'adsense-recovery' / 'E05-PILOT-VALVE-CONTROL-01.md'
EXPECTED_PAGE_SHA256 = '08a88d17d44398152f3d6bf324a0ce872843c6e2d88cd02945105ff628dfd8bb'


class ArticleParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.skip_depth = 0
        self.main_depth = 0
        self.visible: list[str] = []
        self.main_visible: list[str] = []
        self.h1 = 0
        self.h2 = 0
        self.h3 = 0
        self.title = ''
        self.in_title = False
        self.robots = ''
        self.canonical = ''
        self.meta_description = ''
        self.ids: list[str] = []
        self.internal_links: list[str] = []

    @staticmethod
    def attrs_dict(attrs: list[tuple[str, str | None]]) -> dict[str, str]:
        return {str(k).lower(): (v or '') for k, v in attrs}

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        data = self.attrs_dict(attrs)
        if data.get('id'):
            self.ids.append(data['id'])
        if tag in {'script', 'style', 'noscript', 'template', 'svg'}:
            self.skip_depth += 1
        if tag == 'main':
            self.main_depth += 1
        if tag == 'title':
            self.in_title = True
        if tag == 'h1':
            self.h1 += 1
        elif tag == 'h2':
            self.h2 += 1
        elif tag == 'h3':
            self.h3 += 1
        if tag == 'meta' and data.get('name', '').lower() == 'robots':
            self.robots = data.get('content', '').strip()
        if tag == 'meta' and data.get('name', '').lower() == 'description':
            self.meta_description = data.get('content', '').strip()
        if tag == 'link' and 'canonical' in data.get('rel', '').lower().split():
            self.canonical = data.get('href', '').strip()
        if tag == 'a':
            href = data.get('href', '').strip()
            if href and not re.match(r'^(?:https?:|mailto:|tel:|#)', href, flags=re.I):
                self.internal_links.append(href.split('#', 1)[0].split('?', 1)[0])

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag in {'script', 'style', 'noscript', 'template', 'svg'} and self.skip_depth:
            self.skip_depth -= 1
        if tag == 'main' and self.main_depth:
            self.main_depth -= 1
        if tag == 'title':
            self.in_title = False

    def handle_data(self, data: str) -> None:
        text = data.strip()
        if self.in_title and text:
            self.title += text
        if not self.skip_depth and text:
            self.visible.append(text)
            if self.main_depth:
                self.main_visible.append(text)


def word_count(parts: list[str]) -> int:
    text = ' '.join(parts)
    return len(re.findall(r"[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?:[-–—'][A-Za-zÀ-ÖØ-öø-ÿ0-9]+)*", text))


def validate_page(text: str, parser: ArticleParser) -> None:
    digest = hashlib.sha256(text.encode('utf-8')).hexdigest()
    if digest != EXPECTED_PAGE_SHA256:
        raise RuntimeError(f'Conteúdo da página não corresponde ao lote validado: {digest}')
    if parser.h1 != 1:
        raise RuntimeError(f'Esperado um H1; encontrado {parser.h1}')
    if parser.robots.lower() != 'index,follow':
        raise RuntimeError(f'Robots inesperado: {parser.robots}')
    if parser.canonical != 'https://www.alogy.com.br/blog-calibracao-valvula-controle.html':
        raise RuntimeError(f'Canonical inesperado: {parser.canonical}')
    if text.count('pagead2.googlesyndication.com/pagead/js/adsbygoogle.js') != 1:
        raise RuntimeError('Carregador direto do AdSense ausente ou duplicado')
    if 'cursos.html' in text.lower() or re.search(r'>\s*Cursos\s*<', text, flags=re.I):
        raise RuntimeError('Referência legada a Cursos permaneceu')
    if 'hotmart.com' in text.lower() or re.search(r'class=["\'][^"\']*\bhotmart\b', text, flags=re.I):
        raise RuntimeError('Atalho Hotmart permaneceu')
    if text.count('>Serviços</a>') != 2 or text.count('href="industrial.html"') < 3:
        raise RuntimeError('Navegação Serviços/CTA inesperada')
    if text.count('href="/guia/"') != 2:
        raise RuntimeError('Navegação Guia inesperada')
    if len(parser.ids) != len(set(parser.ids)):
        raise RuntimeError('IDs duplicados encontrados')
    if parser.h2 < 10 or parser.h3 < 4:
        raise RuntimeError(f'Estrutura editorial insuficiente: h2={parser.h2}, h3={parser.h3}')
    if word_count(parser.main_visible) < 1300:
        raise RuntimeError('Conteúdo principal abaixo do mínimo interno do piloto')
    if 'JCGM 200:2012' not in text or 'Control Valve Handbook' not in text and 'Guia da válvula de controle' not in text:
        raise RuntimeError('Referências primárias previstas não foram encontradas')
    missing = []
    for href in parser.internal_links:
        if not href or href == '/':
            continue
        candidate = ROOT / href.lstrip('/')
        if href.endswith('/'):
            candidate = ROOT / href.lstrip('/') / 'index.html'
        if not candidate.exists():
            missing.append(href)
    if missing:
        raise RuntimeError(f'Links internos sem arquivo local: {sorted(set(missing))}')
    for payload in re.findall(r'<script type="application/ld\+json">(.*?)</script>', text, flags=re.I | re.S):
        json.loads(payload)


def update_inventory(parser: ArticleParser) -> tuple[int, int]:
    with INVENTORY.open(encoding='utf-8-sig', newline='') as stream:
        reader = csv.DictReader(stream)
        fields = list(reader.fieldnames or [])
        rows = list(reader)

    target = None
    for row in rows:
        if row.get('path') == PAGE.name:
            target = row
            break
    if target is None:
        raise RuntimeError('Página ausente do inventário canônico')

    target.update({
        'robots': parser.robots,
        'canonical': parser.canonical,
        'adsense': 'true',
        'in_sitemap': 'true',
        'visible_words': str(word_count(parser.visible)),
        'main_visible_words': str(word_count(parser.main_visible)),
        'h1_count': str(parser.h1),
        'h2_count': str(parser.h2),
        'h3_count': str(parser.h3),
        'title': parser.title,
        'meta_description': parser.meta_description,
        'audit_evidence': 'E05-PILOT-VALVE-CONTROL-01.md',
        'status': 'keep',
        'priority': 'P1',
        'confidence': 'high',
        'evidence': 'Página piloto aprofundada com fronteira do teste, distinção entre calibração/verificação/ajuste, matriz de subida e descida, diagnóstico sem ajuste prematuro, referências primárias, travas de segurança e CTA comercial compatível com a capacidade confirmada.',
        'next_action': 'Manter indexada; preservar a matriz, os limites, as fontes e a oferta comercial verdadeira; validar periodicamente links/manuais e adicionar autoria ou revisão técnica pessoal somente quando confirmada.'
    })

    if len(rows) != 271:
        raise RuntimeError(f'Inventário deveria ter 271 linhas; tem {len(rows)}')
    indexable = [r for r in rows if r.get('status') != 'verification' and 'noindex' not in r.get('robots', '').lower()]
    noindex = [r for r in rows if r.get('status') != 'verification' and 'noindex' in r.get('robots', '').lower()]
    if len(indexable) != 221 or len(noindex) != 49:
        raise RuntimeError(f'Contagens inesperadas: indexable={len(indexable)}, noindex={len(noindex)}')
    if sum(r.get('in_sitemap') == 'true' for r in rows) != 221:
        raise RuntimeError('Contagem de sitemap inesperada')

    with INVENTORY.open('w', encoding='utf-8', newline='') as stream:
        writer = csv.DictWriter(stream, fieldnames=fields, lineterminator='\n')
        writer.writeheader()
        writer.writerows(rows)

    return word_count(parser.visible), word_count(parser.main_visible)


def write_report(parser: ArticleParser, visible_words: int, main_words: int) -> None:
    report = f'''# E05 — Piloto editorial — válvula de controle — lote 01

Data: 2026-09-14

## Página

`blog-calibracao-valvula-controle.html`

## Objetivo

Transformar uma página curta e genérica em um conteúdo técnico útil, verificável e comercialmente verdadeiro para o leitor que precisa registrar e diagnosticar uma válvula de controle, sem criar tolerância universal, procedimento inseguro ou capacidade metrológica não confirmada.

## Alterações editoriais

- fronteira do teste separando comando, entrada e saída do posicionador, atuador, transmissão mecânica, posição real e efeito no processo;
- distinção entre calibração, verificação e ajuste com base no VIM;
- preparação e registro `as-found`/`as-left`;
- matriz de 0%, 25%, 50%, 75% e 100% em subida e descida, sem critério universal de aceitação;
- diferenciação prudente entre banda morta, histerese, `stiction`/`stick-slip` e repetibilidade;
- sequência de diagnóstico que evita autoajuste, zero ou span antes de localizar a causa;
- explicação de que diagnósticos digitais dependem de fabricante, modelo, versão, licença e instalação;
- referências identificáveis do BIPM/JCGM, Emerson e FieldComm Group;
- CTA para avaliação, inspeção, manutenção, configuração e conferência funcional sob escopo;
- aviso expresso de que manutenção e conferência funcional não são certificado, acreditação ou rastreabilidade.

## Validações antes da publicação

- {visible_words} palavras visíveis e {main_words} palavras no conteúdo principal;
- 1 H1, {parser.h2} H2 e {parser.h3} H3;
- canonical e `index,follow` preservados;
- carregador direto do AdSense preservado uma única vez;
- dois links `Guia`, dois rótulos públicos `Serviços`, sem `Cursos`, Hotmart ou navegação residencial;
- JSON-LD válido, IDs únicos e links internos com arquivos correspondentes;
- renderização local validada em 1200 px e 390 px, sem overflow da página;
- tabela contida em região com rolagem horizontal própria no celular;
- menu móvel abre sem criar rolagem lateral;
- nenhuma fórmula ou JavaScript técnico compartilhado foi alterado.

## Fontes primárias

- BIPM/JCGM — `JCGM 200:2012`, Vocabulário Internacional de Metrologia;
- Emerson — `Control Valve Handbook`, 6ª edição;
- Emerson — diagnóstico para válvulas, atuadores e reguladores;
- FieldComm Group — registros dos posicionadores TROVIS 3730-3 e APV400, usados apenas como exemplos dependentes de modelo.

## Limites preservados

- não foi inventada autoria pessoal, equipe, bancada, padrão calibrado, acreditação ou capacidade de emissão própria de certificado;
- não foi estabelecida tolerância, periodicidade ou regra universal;
- o conteúdo não autoriza movimentação ou desmontagem de válvula sem condição segura e liberação da organização;
- a página não substitui procedimento, manual, análise de risco, documentação metrológica ou validação profissional.

## Inventário

A página passa de `improve/P0` para `keep/P1`, mantendo indexação, canonical, sitemap e AdSense. O inventário canônico conserva 271 linhas, 221 páginas indexáveis e 49 rotas `noindex`.

## Próxima ação

Depois de validar o artefato exato do GitHub Pages, revisar em lote separado `blog-calibracao-instrumentos-industriais.html`, a página-pilar do piloto E05.
'''
    REPORT.write_text(report, encoding='utf-8')


def main() -> None:
    text = PAGE.read_text(encoding='utf-8')
    parser = ArticleParser()
    parser.feed(text)
    validate_page(text, parser)
    visible_words, main_words = update_inventory(parser)
    write_report(parser, visible_words, main_words)
    print(f'validated: visible={visible_words}, main={main_words}, h1={parser.h1}, h2={parser.h2}, h3={parser.h3}')


if __name__ == '__main__':
    main()

from __future__ import annotations

import csv
import html as html_lib
import re
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path('.')
INVENTORY = ROOT / 'adsense-recovery' / 'ADSENSE-INVENTORY.csv'
REPORT = ROOT / 'adsense-recovery' / 'E04-GUIDE-NAVIGATION-01.md'
BASE = 'https://www.alogy.com.br/'
TARGETS = [
    'calculadora-erro-calibracao.html',
    'checklist-comissionamento-hart.html',
    'blog-vazao-normalizada-gases.html',
    'calculadora-massa-tanque-nivel.html',
    'blog-ar-instrumentos-qualidade-ponto-orvalho.html',
]


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.robots = ''
        self.canonical = ''
        self.h1_count = 0
        self.skip_depth = 0
        self.visible_parts: list[str] = []

    @staticmethod
    def attrs_dict(attrs: list[tuple[str, str | None]]) -> dict[str, str]:
        return {str(k).lower(): (v or '') for k, v in attrs}

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        data = self.attrs_dict(attrs)
        if tag in {'script', 'style', 'noscript', 'template', 'svg'}:
            self.skip_depth += 1
        if tag == 'meta' and data.get('name', '').lower() == 'robots':
            self.robots = data.get('content', '').strip()
        if tag == 'link' and 'canonical' in data.get('rel', '').lower().split():
            self.canonical = data.get('href', '').strip()
        if tag == 'h1':
            self.h1_count += 1

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() in {'script', 'style', 'noscript', 'template', 'svg'} and self.skip_depth:
            self.skip_depth -= 1

    def handle_data(self, data: str) -> None:
        if not self.skip_depth and data.strip():
            self.visible_parts.append(data.strip())


def page_url(path: str, previous: dict[str, str]) -> str:
    if previous.get('url'):
        return previous['url']
    if path == 'index.html':
        return BASE
    if path.endswith('/index.html'):
        return BASE + path[:-10]
    return BASE + path


def normalize_url(url: str) -> str:
    return url if url == BASE else url.rstrip('/')


def migrate_page(path: str) -> tuple[int, int]:
    file_path = ROOT / path
    text = file_path.read_text(encoding='utf-8')

    link_pattern = re.compile(
        r'<a(?P<before>[^>]*?)href=(?P<quote>[\"\'])cursos\.html(?P=quote)(?P<after>[^>]*)>\s*Cursos\s*</a>',
        flags=re.IGNORECASE,
    )
    text, guide_count = link_pattern.subn(
        lambda m: f'<a{m.group("before")}href="/guia/"{m.group("after")}>Guia</a>',
        text,
    )

    hotmart_pattern = re.compile(
        r'<a\b(?=[^>]*\bclass=[\"\'][^\"\']*\bhotmart\b[^\"\']*[\"\'])[^>]*>.*?</a>',
        flags=re.IGNORECASE | re.DOTALL,
    )
    text, hotmart_count = hotmart_pattern.subn('', text)

    if guide_count < 2:
        raise RuntimeError(f'{path}: esperadas ao menos 2 ocorrencias de Cursos; encontradas {guide_count}')
    if hotmart_count != 1:
        raise RuntimeError(f'{path}: esperado 1 atalho social Hotmart; encontrado {hotmart_count}')
    if 'cursos.html' in text or re.search(r'>\s*Cursos\s*<', text, flags=re.IGNORECASE):
        raise RuntimeError(f'{path}: referencia legada Cursos permaneceu')
    if 'hotmart.com' in text.lower() or re.search(r'class=[\"\'][^\"\']*\bhotmart\b', text, flags=re.IGNORECASE):
        raise RuntimeError(f'{path}: atalho Hotmart permaneceu')

    file_path.write_text(text, encoding='utf-8')
    return guide_count, hotmart_count


def regenerate_inventory() -> dict[str, int]:
    with INVENTORY.open(encoding='utf-8-sig', newline='') as stream:
        old_rows = list(csv.DictReader(stream))
    fields = list(old_rows[0].keys())
    previous_by_path = {row['path']: row for row in old_rows}

    sitemap_urls: set[str] = set()
    for sitemap in ROOT.glob('sitemap*.xml'):
        raw = sitemap.read_text(encoding='utf-8', errors='replace')
        for loc in re.findall(r'<loc>\s*(.*?)\s*</loc>', raw, flags=re.IGNORECASE | re.DOTALL):
            loc = html_lib.unescape(loc.strip())
            if not loc.lower().endswith('.xml'):
                sitemap_urls.add(normalize_url(loc))

    rows: list[dict[str, str]] = []
    for file_path in sorted(ROOT.rglob('*.html')):
        if any(part.startswith('.') for part in file_path.parts):
            continue
        rel = file_path.as_posix()
        raw = file_path.read_text(encoding='utf-8', errors='replace')
        parser = PageParser()
        parser.feed(raw)
        previous = previous_by_path.get(rel, {})
        url = page_url(rel, previous)
        visible = ' '.join(parser.visible_parts)
        word_count = len(re.findall(r"[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?:[-–—'][A-Za-zÀ-ÖØ-öø-ÿ0-9]+)*", visible))

        row = {field: previous.get(field, '') for field in fields}
        row.update({
            'path': rel,
            'url': url,
            'robots': parser.robots,
            'canonical': parser.canonical,
            'adsense': 'true' if 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' in raw else 'false',
            'in_sitemap': 'true' if normalize_url(url) in sitemap_urls else 'false',
            'visible_words': str(word_count),
            'h1_count': str(parser.h1_count),
        })

        if rel == 'residencial.html':
            row.update({
                'status': 'redirect',
                'priority': 'P2',
                'confidence': 'high',
                'evidence': 'Rota legada consolidada na página de Serviços: noindex,follow, canonical e redirecionamento para industrial.html; removida do sitemap e da navegação pública.',
                'next_action': 'Preservar apenas como redirecionamento legado enquanto houver histórico de acesso; não restaurar a frente ou o rótulo residencial.',
            })
        elif rel == 'cursos.html':
            row.update({
                'status': 'redirect',
                'priority': 'P2',
                'confidence': 'high',
                'evidence': 'Rota legada noindex,follow com canonical e redirecionamento para /guia/.',
                'next_action': 'Preservar como compatibilidade histórica; substituir links internos por /guia/ e rótulo Guia.',
            })
        elif rel.startswith('google') and 'google-site-verification' in raw:
            row.update({
                'status': 'verification',
                'priority': 'P2',
                'confidence': 'high',
                'evidence': 'Arquivo de verificação de propriedade Google; não é conteúdo editorial.',
                'next_action': 'Preservar enquanto necessário à verificação; não incluir em sitemap nem avaliar como página editorial.',
            })
        rows.append(row)

    with INVENTORY.open('w', encoding='utf-8', newline='') as stream:
        writer = csv.DictWriter(stream, fieldnames=fields, lineterminator='\n')
        writer.writeheader()
        writer.writerows(rows)

    indexable = [r for r in rows if 'noindex' not in r['robots'].lower() and r['status'] != 'verification']
    noindex = [r for r in rows if 'noindex' in r['robots'].lower()]
    h1_anomalies = [r['path'] for r in indexable if r['h1_count'] != '1']
    if len(rows) != 271 or len(indexable) != 221 or len(noindex) != 49:
        raise RuntimeError(f'Contagens inesperadas: rows={len(rows)}, indexable={len(indexable)}, noindex={len(noindex)}')
    if h1_anomalies:
        raise RuntimeError(f'H1 anomalo em paginas indexaveis: {h1_anomalies}')
    if sum(r['in_sitemap'] == 'true' for r in rows) != 221:
        raise RuntimeError('Sitemap deveria conter exatamente 221 rotas do inventario')

    return {
        'rows': len(rows),
        'indexable': len(indexable),
        'noindex': len(noindex),
        'adsense': sum(r['adsense'] == 'true' for r in rows),
        'sitemap': sum(r['in_sitemap'] == 'true' for r in rows),
    }


def main() -> None:
    results: list[tuple[str, int, int]] = []
    for target in TARGETS:
        guide_count, hotmart_count = migrate_page(target)
        results.append((target, guide_count, hotmart_count))

    stats = regenerate_inventory()
    report_lines = [
        '# E04 — Navegação Guia e higiene de links — lote 01',
        '',
        'Data: 2026-09-14',
        '',
        '## Escopo',
        '',
        'Migração localizada de `Cursos/cursos.html` para `Guia` e `/guia/` em cinco páginas técnicas indexáveis. O atalho social direto da Hotmart foi removido somente dessas páginas; o conteúdo técnico, fórmulas e JavaScript permaneceram inalterados.',
        '',
        '## Páginas',
        '',
    ]
    for target, guide_count, hotmart_count in results:
        report_lines.append(f'- `{target}`: {guide_count} links de navegação migrados; {hotmart_count} atalho social Hotmart removido.')
    report_lines.extend([
        '',
        '## Inventário canônico',
        '',
        f'- {stats["rows"]} arquivos/rotas inventariados, incluindo a verificação Google.',
        f'- {stats["indexable"]} páginas editoriais indexáveis.',
        f'- {stats["noindex"]} rotas `noindex`.',
        f'- {stats["sitemap"]} URLs presentes nos sitemaps.',
        f'- {stats["adsense"]} páginas com carregador direto do AdSense.',
        '- `residencial.html` registrado como redirect legado para a página única de Serviços.',
        '- `cursos.html` registrado como redirect legado para `/guia/`.',
        '',
        '## Validação',
        '',
        '- Nenhuma referência `cursos.html` ou rótulo `Cursos` permaneceu nas cinco páginas.',
        '- Nenhum link ou classe social Hotmart permaneceu nas cinco páginas.',
        '- Nenhuma fórmula ou lógica JavaScript técnica foi alterada.',
        '- O inventário mantém 221 indexáveis, 49 `noindex`, 221 URLs em sitemap e zero H1 anômalo entre indexáveis.',
        '',
        '## Próxima ação',
        '',
        'Continuar a mesma higiene em outro lote pequeno e, em paralelo, selecionar as duas páginas do piloto editorial E05 pelo inventário atualizado.',
    ])
    REPORT.write_text('\n'.join(report_lines) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()

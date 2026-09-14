from __future__ import annotations

import csv
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path('.')
INVENTORY = ROOT / 'adsense-recovery' / 'ADSENSE-INVENTORY.csv'
REPORT = ROOT / 'adsense-recovery' / 'E04-GUIDE-NAVIGATION-02.md'
TARGETS = [
    'blog-calibracao-instrumentos-industriais.html',
    'blog-erro-total-malha-instrumentacao.html',
    'blog-fat-sat-instrumentacao.html',
    'calculadora-diagnostico-4-20ma-hart.html',
    'checklist-teste-de-loop.html',
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


def parse_page(text: str) -> PageParser:
    parser = PageParser()
    parser.feed(text)
    return parser


def migrate_page(path: str) -> tuple[int, int]:
    file_path = ROOT / path
    text = file_path.read_text(encoding='utf-8')
    before = text

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

    if guide_count != 2:
        raise RuntimeError(f'{path}: esperados 2 links Cursos; encontrados {guide_count}')
    if hotmart_count != 1:
        raise RuntimeError(f'{path}: esperado 1 atalho social Hotmart; encontrado {hotmart_count}')
    if 'cursos.html' in text.lower() or re.search(r'>\s*Cursos\s*<', text, flags=re.IGNORECASE):
        raise RuntimeError(f'{path}: referência legada permaneceu')
    if 'hotmart.com' in text.lower() or re.search(r'class=[\"\'][^\"\']*\bhotmart\b', text, flags=re.IGNORECASE):
        raise RuntimeError(f'{path}: atalho Hotmart permaneceu')
    if len(text) < len(before) - 500:
        raise RuntimeError(f'{path}: redução inesperada de conteúdo')

    file_path.write_text(text, encoding='utf-8')
    return guide_count, hotmart_count


def update_inventory() -> dict[str, int]:
    with INVENTORY.open(encoding='utf-8-sig', newline='') as stream:
        reader = csv.DictReader(stream)
        fields = list(reader.fieldnames or [])
        rows = list(reader)
    by_path = {row['path']: row for row in rows}

    for target in TARGETS:
        row = by_path.get(target)
        if row is None:
            raise RuntimeError(f'{target}: ausente do inventário canônico')
        text = (ROOT / target).read_text(encoding='utf-8')
        parser = parse_page(text)
        visible = ' '.join(parser.visible_parts)
        row['robots'] = parser.robots
        row['canonical'] = parser.canonical
        row['adsense'] = 'true' if 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' in text else 'false'
        row['visible_words'] = str(len(re.findall(r"[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?:[-–—'][A-Za-zÀ-ÖØ-öø-ÿ0-9]+)*", visible)))
        row['h1_count'] = str(parser.h1_count)

    with INVENTORY.open('w', encoding='utf-8', newline='') as stream:
        writer = csv.DictWriter(stream, fieldnames=fields, lineterminator='\n')
        writer.writeheader()
        writer.writerows(rows)

    editorial = [r for r in rows if r.get('status') != 'verification']
    indexable = [r for r in editorial if 'noindex' not in r.get('robots', '').lower()]
    noindex = [r for r in editorial if 'noindex' in r.get('robots', '').lower()]
    if len(rows) != 271 or len(editorial) != 270 or len(indexable) != 221 or len(noindex) != 49:
        raise RuntimeError(f'Contagens inesperadas: rows={len(rows)}, editorial={len(editorial)}, indexable={len(indexable)}, noindex={len(noindex)}')
    if sum(r.get('in_sitemap') == 'true' for r in rows) != 221:
        raise RuntimeError('Inventário deveria manter 221 URLs em sitemap')
    if any(r.get('h1_count') != '1' for r in indexable):
        raise RuntimeError('H1 anômalo encontrado entre páginas indexáveis')

    legacy = []
    legacy_indexable = []
    hotmart = []
    for file_path in sorted(ROOT.rglob('*.html')):
        if any(part.startswith('.') for part in file_path.parts):
            continue
        rel = file_path.as_posix()
        text = file_path.read_text(encoding='utf-8', errors='replace')
        has_legacy = 'cursos.html' in text.lower() or bool(re.search(r'>\s*Cursos\s*<', text, flags=re.IGNORECASE))
        has_hotmart = 'hotmart.com' in text.lower() or bool(re.search(r'class=[\"\'][^\"\']*\bhotmart\b', text, flags=re.IGNORECASE))
        if has_legacy:
            legacy.append(rel)
            row = by_path.get(rel)
            if row and row.get('status') != 'verification' and 'noindex' not in row.get('robots', '').lower():
                legacy_indexable.append(rel)
        if has_hotmart:
            hotmart.append(rel)

    expected = (137, 102, 128)
    actual = (len(legacy), len(legacy_indexable), len(hotmart))
    if actual != expected:
        raise RuntimeError(f'Contagens legadas inesperadas: esperado={expected}, atual={actual}')

    return {
        'rows': len(rows),
        'indexable': len(indexable),
        'noindex': len(noindex),
        'sitemap': sum(r.get('in_sitemap') == 'true' for r in rows),
        'adsense': sum(r.get('adsense') == 'true' for r in rows),
        'legacy': len(legacy),
        'legacy_indexable': len(legacy_indexable),
        'hotmart': len(hotmart),
    }


def main() -> None:
    results: list[tuple[str, int, int]] = []
    for target in TARGETS:
        results.append((target, *migrate_page(target)))
    stats = update_inventory()

    lines = [
        '# E04 — Navegação Guia e higiene de links — lote 02',
        '',
        'Data: 2026-09-14',
        '',
        '## Escopo',
        '',
        'Segundo lote localizado de `Cursos/cursos.html` para `Guia` e `/guia/` em cinco páginas P0 do inventário. O atalho social genérico da Hotmart foi removido somente dessas páginas. Conteúdo técnico, fórmulas e JavaScript permaneceram inalterados.',
        '',
        '## Páginas',
        '',
    ]
    for target, guide_count, hotmart_count in results:
        lines.append(f'- `{target}`: {guide_count} links de navegação migrados; {hotmart_count} atalho social Hotmart removido.')
    lines.extend([
        '',
        '## Inventário e validação',
        '',
        f'- {stats["rows"]} linhas no inventário canônico; {stats["indexable"]} indexáveis; {stats["noindex"]} `noindex`.',
        f'- {stats["sitemap"]} URLs em sitemap e {stats["adsense"]} páginas com carregador direto do AdSense.',
        f'- Restam {stats["legacy"]} páginas com referência legada a Cursos, sendo {stats["legacy_indexable"]} indexáveis.',
        f'- Restam {stats["hotmart"]} páginas com Hotmart, a classificar por contexto.',
        '- Nenhuma referência `cursos.html`, rótulo `Cursos`, URL Hotmart ou classe social Hotmart permaneceu nas cinco páginas.',
        '- Nenhuma fórmula ou lógica JavaScript técnica foi alterada.',
        '',
        '## Próxima ação',
        '',
        'Executar outro lote pequeno somente quando útil e iniciar o piloto editorial E05 nas páginas selecionadas pelo inventário, sem misturar higiene de menu com reescrita técnica.',
    ])
    REPORT.write_text('\n'.join(lines) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()

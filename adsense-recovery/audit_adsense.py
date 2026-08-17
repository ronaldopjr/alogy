#!/usr/bin/env python3
"""Read-only baseline audit for the ALOGY static site.

Run from the repository root. The script never edits site pages. It creates or
refreshes a CSV inventory at the path supplied with --output while preserving
editorial decisions already recorded in that inventory.
"""

from __future__ import annotations

import argparse
import csv
import re
from html import unescape
from pathlib import Path
from urllib.parse import urlparse


ROBOTS_RE = re.compile(r'<meta[^>]+name=["\']robots["\'][^>]*>', re.I)
DESCRIPTION_RE = re.compile(r'<meta[^>]+name=["\']description["\'][^>]*>', re.I)
CANONICAL_RE = re.compile(r'<link[^>]+rel=["\']canonical["\'][^>]*>', re.I)
CONTENT_RE = re.compile(r'content=["\']([^"\']*)["\']', re.I)
HREF_RE = re.compile(r'href=["\']([^"\']*)["\']', re.I)
TITLE_RE = re.compile(r'<title\b[^>]*>(.*?)</title>', re.I | re.S)
MAIN_RE = re.compile(r'<main\b[^>]*>(.*?)</main>', re.I | re.S)

EDITORIAL_FIELDS = ('status', 'priority', 'confidence', 'evidence', 'next_action')
FIELDNAMES = (
    'path', 'url', 'robots', 'canonical', 'adsense', 'in_sitemap',
    'visible_words', 'main_visible_words', 'h1_count', 'h2_count', 'h3_count',
    'title', 'meta_description', 'audit_evidence', *EDITORIAL_FIELDS,
)


def attribute(tag: str, regex: re.Pattern[str]) -> str:
    match = regex.search(tag)
    return unescape(match.group(1)).strip() if match else ''


def visible_text(html: str) -> str:
    html = re.sub(r'<(script|style|noscript)\b[^>]*>.*?</\1>', ' ', html, flags=re.I | re.S)
    html = re.sub(r'<!--.*?-->', ' ', html, flags=re.S)
    html = re.sub(r'<[^>]+>', ' ', html)
    return re.sub(r'\s+', ' ', unescape(html)).strip()


def rendered_markup(html: str) -> str:
    """Return markup that can contribute elements to the initial document.

    HTML strings embedded in scripts (for example printable report templates)
    must not be counted as headings in the initial page.
    """
    html = re.sub(r'<(script|style|noscript)\b[^>]*>.*?</\1>', ' ', html, flags=re.I | re.S)
    return re.sub(r'<!--.*?-->', ' ', html, flags=re.S)


def main_markup(html: str) -> str:
    match = MAIN_RE.search(rendered_markup(html))
    return match.group(1) if match else ''


def sitemap_paths(root: Path) -> set[str]:
    result: set[str] = set()
    for sitemap in root.glob('sitemap*.xml'):
        text = sitemap.read_text(encoding='utf-8', errors='replace')
        for loc in re.findall(r'<loc>\s*(.*?)\s*</loc>', text, flags=re.I | re.S):
            path = urlparse(unescape(loc)).path.lstrip('/')
            result.add(path or 'index.html')
    return result


def existing_editorial_rows(output: Path) -> dict[str, dict[str, str]]:
    if not output.exists():
        return {}
    with output.open(encoding='utf-8', newline='') as handle:
        return {
            row['path']: {field: row.get(field, '') for field in EDITORIAL_FIELDS}
            for row in csv.DictReader(handle)
            if row.get('path')
        }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument('--root', default='.')
    parser.add_argument('--output', default='adsense-recovery/ADSENSE-INVENTORY.csv')
    args = parser.parse_args()

    root = Path(args.root).resolve()
    output = Path(args.output)
    if not output.is_absolute():
        output = root / output
    sitemap = sitemap_paths(root)
    prior = existing_editorial_rows(output)
    rows: list[dict[str, object]] = []

    for path in sorted(root.rglob('*.html')):
        if '.git' in path.parts:
            continue
        rel = path.relative_to(root).as_posix()
        html = path.read_text(encoding='utf-8', errors='replace')
        markup = rendered_markup(html)
        primary = main_markup(html)
        robots_tag = (ROBOTS_RE.search(html) or [''])[0]
        description_tag = (DESCRIPTION_RE.search(html) or [''])[0]
        canonical_tag = (CANONICAL_RE.search(html) or [''])[0]
        robots = attribute(robots_tag, CONTENT_RE) or 'missing'
        canonical = attribute(canonical_tag, HREF_RE)
        noindex = 'noindex' in robots.lower()
        adsense = 'ca-pub-5586837114309500' in html
        in_sitemap = rel in sitemap or (rel == 'index.html' and 'index.html' in sitemap)

        audit_evidence: list[str] = []
        if noindex and adsense:
            audit_evidence.append('adsense_on_noindex')
        if noindex and in_sitemap:
            audit_evidence.append('noindex_in_sitemap')
        if not canonical:
            audit_evidence.append('missing_canonical')
        h1_count = len(re.findall(r'<h1\b', markup, flags=re.I))
        if h1_count != 1:
            audit_evidence.append(f'h1_count={h1_count}')

        editorial = prior.get(rel, {})
        default_status = 'manual-review' if noindex and (adsense or in_sitemap) else 'unclassified'
        title_match = TITLE_RE.search(html)
        rows.append({
            'path': rel,
            'url': canonical,
            'robots': robots,
            'canonical': canonical,
            'adsense': str(adsense).lower(),
            'in_sitemap': str(in_sitemap).lower(),
            'visible_words': len(visible_text(markup).split()),
            'main_visible_words': len(visible_text(primary).split()),
            'h1_count': h1_count,
            'h2_count': len(re.findall(r'<h2\b', markup, flags=re.I)),
            'h3_count': len(re.findall(r'<h3\b', markup, flags=re.I)),
            'title': visible_text(title_match.group(1)) if title_match else '',
            'meta_description': attribute(description_tag, CONTENT_RE),
            'audit_evidence': ';'.join(audit_evidence),
            'status': editorial.get('status') or default_status,
            'priority': editorial.get('priority', ''),
            'confidence': editorial.get('confidence', ''),
            'evidence': editorial.get('evidence', ''),
            'next_action': editorial.get('next_action') or 'classify',
        })

    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open('w', encoding='utf-8', newline='') as handle:
        writer = csv.DictWriter(handle, fieldnames=FIELDNAMES)
        writer.writeheader()
        writer.writerows(rows)

    print(f'Wrote {len(rows)} HTML rows to {output}; preserved {len(prior)} prior editorial rows')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())

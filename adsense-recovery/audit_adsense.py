#!/usr/bin/env python3
"""Read-only baseline audit for the ALOGY static site.

Run from the repository root. The script never edits site pages. It creates a
CSV inventory at the path supplied with --output.
"""

from __future__ import annotations

import argparse
import csv
import re
from html import unescape
from pathlib import Path
from urllib.parse import urlparse


ROBOTS_RE = re.compile(r'<meta[^>]+name=["\']robots["\'][^>]*>', re.I)
CANONICAL_RE = re.compile(r'<link[^>]+rel=["\']canonical["\'][^>]*>', re.I)
CONTENT_RE = re.compile(r'content=["\']([^"\']*)["\']', re.I)
HREF_RE = re.compile(r'href=["\']([^"\']*)["\']', re.I)


def attribute(tag: str, regex: re.Pattern[str]) -> str:
    match = regex.search(tag)
    return unescape(match.group(1)).strip() if match else ""


def visible_text(html: str) -> str:
    html = re.sub(r'<(script|style|noscript)\b[^>]*>.*?</\1>', ' ', html, flags=re.I | re.S)
    html = re.sub(r'<!--.*?-->', ' ', html, flags=re.S)
    html = re.sub(r'<[^>]+>', ' ', html)
    return re.sub(r'\s+', ' ', unescape(html)).strip()


def sitemap_paths(root: Path) -> set[str]:
    result: set[str] = set()
    for sitemap in root.glob('sitemap*.xml'):
        text = sitemap.read_text(encoding='utf-8', errors='replace')
        for loc in re.findall(r'<loc>\s*(.*?)\s*</loc>', text, flags=re.I | re.S):
            path = urlparse(unescape(loc)).path.lstrip('/')
            result.add(path or 'index.html')
    return result


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
    rows: list[dict[str, object]] = []

    for path in sorted(root.rglob('*.html')):
        if '.git' in path.parts:
            continue
        rel = path.relative_to(root).as_posix()
        html = path.read_text(encoding='utf-8', errors='replace')
        robots_tag = (ROBOTS_RE.search(html) or [""])[0]
        canonical_tag = (CANONICAL_RE.search(html) or [""])[0]
        robots = attribute(robots_tag, CONTENT_RE) or 'missing'
        canonical = attribute(canonical_tag, HREF_RE)
        noindex = 'noindex' in robots.lower()
        adsense = 'ca-pub-5586837114309500' in html
        in_sitemap = rel in sitemap or (rel == 'index.html' and 'index.html' in sitemap)
        words = len(visible_text(html).split())
        h1_count = len(re.findall(r'<h1\b', html, flags=re.I))

        evidence: list[str] = []
        status = 'unclassified'
        if noindex and adsense:
            evidence.append('adsense_on_noindex')
            status = 'manual-review'
        if noindex and in_sitemap:
            evidence.append('noindex_in_sitemap')
            status = 'manual-review'
        if not canonical:
            evidence.append('missing_canonical')
        if h1_count != 1:
            evidence.append(f'h1_count={h1_count}')

        rows.append({
            'path': rel,
            'url': canonical,
            'robots': robots,
            'canonical': canonical,
            'adsense': str(adsense).lower(),
            'in_sitemap': str(in_sitemap).lower(),
            'visible_words': words,
            'h1_count': h1_count,
            'status': status,
            'priority': '',
            'confidence': '',
            'evidence': ';'.join(evidence),
            'next_action': 'classify',
        })

    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open('w', encoding='utf-8', newline='') as handle:
        writer = csv.DictWriter(handle, fieldnames=list(rows[0]) if rows else [])
        writer.writeheader()
        writer.writerows(rows)

    print(f'Wrote {len(rows)} HTML rows to {output}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())

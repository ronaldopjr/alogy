# E10-I1 — Consistência de imagens desktop/mobile

Data: 2026-09-16

## Escopo
Auditoria final de trocas de imagem por breakpoint no artefato publicado do GitHub Pages, priorizando home, Guia, Serviços, Blog, artigos e ferramentas.

## Evidência antes da correção
A varredura global do artefato do Pages encontrou apenas um HTML com troca de imagem específica para mobile: `index.html`. A home continha duas tags `<source media="(max-width: 768px)">`, usando `banner1_mobile.webp` e `banner3_mobile.webp` no lugar dos assets desktop.

## Correção
Commit `de07a283b54da6d04332475e562bb0d06cc1f4c9` removeu somente essas duas fontes mobile. Os assets desktop `capa-blog-inspecao-instrumentos-area-classificada.webp` e `banner3.webp` passaram a ser usados em todos os breakpoints, preservando texto, links, alt, dimensões do `<img>`, CSS e JavaScript.

## Validação
- GitHub Pages run `35119165803`: `success`.
- Artefato `10456032386`.
- Digest `sha256:ca58f549903678f2db5db8903d7db75bca67dd45219a509dc5548871e3f295fd`.
- Blob final de `index.html`: `e3024036f87ca0dca751a3df8ee9d8b76f03b55d`.
- Varredura do artefato final: zero HTMLs contendo troca de imagem por `<source media=...>` ou referência `_mobile`.
- `ads.txt` e `robots.txt` continuaram presentes no mesmo artefato.

## Limite de ambiente
A tentativa de teste live em Chromium headless a 360/390 px não foi usada como evidência de conclusão porque o ambiente não resolveu `www.alogy.com.br` (`chrome-error://chromewebdata/`; `curl` também sem DNS). A conclusão de E10-I1 é baseada na consistência do source e no artefato efetivamente publicado; não se declara teste visual live exato de 360/390 px.

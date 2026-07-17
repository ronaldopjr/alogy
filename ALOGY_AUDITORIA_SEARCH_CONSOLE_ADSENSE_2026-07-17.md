# Auditoria Search Console e AdSense — 17/07/2026

## Objetivo

Registrar o diagnóstico técnico usado para priorizar indexação orgânica e preparação do site ALOGY para uma futura revisão do Google AdSense. Este documento não substitui os relatórios autenticados do Search Console ou do AdSense.

## Estado observado

- O sitemap principal continha 390 URLs em um único arquivo.
- Distribuição após classificação:
  - 10 páginas institucionais;
  - 141 URLs do Blog, incluindo o índice;
  - 239 URLs de ferramentas, calculadoras, conversores e checklists.
- O conjunto não possui URLs duplicadas e todas usam HTTPS com o host canônico `www.alogy.com.br`.
- O `robots.txt` permite rastreamento e aponta para `https://www.alogy.com.br/sitemap.xml`.
- O `ads.txt` contém a entrada direta do editor Google informada no site.
- As 23 páginas efetivamente revisadas em 17/07/2026 receberam `lastmod` correspondente. As demais datas não foram alteradas artificialmente.

## Segmentação implantada

O sitemap principal passou a ser um índice com três arquivos:

- `sitemap-institucional.xml`;
- `sitemap-blog.xml`;
- `sitemap-ferramentas.xml`.

Finalidade: permitir acompanhamento separado de descoberta, rastreamento e indexação por tipo de conteúdo. A segmentação organiza o diagnóstico; não garante indexação.

## Sinal editorial relevante para AdSense

Uma varredura dos arquivos HTML encontrou repetição em larga escala:

- 266 páginas ainda contêm ao menos um dos principais blocos padronizados auditados;
- 157 páginas repetem a abertura “Nesta revisão, o conteúdo foi ampliado...”;
- 68 artigos ainda repetem “Este conteúdo foi ampliado para ajudar...”;
- 198 páginas repetem “Como usar esta ferramenta na prática”;
- 198 páginas repetem “Dados que merecem conferência”;
- um mesmo aviso aparece em 157 arquivos;
- cinco parágrafos genéricos aparecem em aproximadamente 78 a 80 artigos.

Essas ocorrências não comprovam isoladamente a causa da reprovação, mas reduzem diferenciação, originalidade percebida e utilidade específica de cada URL. A revisão editorial deve remover o padrão por famílias, preservando somente avisos técnicos compartilhados que sejam realmente necessários.

## Lote editorial de analítica industrial

Quatro artigos estratégicos foram diferenciados em 17/07/2026:

- calibração de analisadores de processo;
- calibração de pHmetro;
- slope de sonda de pH;
- ORP em mV para controle industrial.

Os blocos genéricos foram substituídos por procedimentos, premissas, exemplos e limitações próprios de cada tema. O primeiro lote reduziu de 276 para 272 o conjunto de páginas com os principais padrões auditados e de 78 para 74 a repetição da abertura editorial dos artigos.

Na sequência, os artigos sobre condutividade/TDS e tempo de amostragem de analisadores também foram diferenciados. O total caiu para 270 páginas com os padrões auditados e 72 artigos com a abertura genérica.

O terceiro lote aprofundou dosagem de cloro livre e neutralização de pH. Com isso, restam 268 páginas com os padrões auditados e 70 artigos com a abertura genérica. Os oito artigos materialmente revisados receberam `lastmod` de 17/07/2026 no sitemap do Blog; nenhuma outra data foi alterada.

O quarto lote diferenciou K-factor de vazão por pulsos e resistor shunt 4–20 mA/HART. Foram incluídos exemplos numéricos, limitações de integração, referências primárias e capas reais já licenciadas. Restam 266 páginas com os padrões auditados e 68 artigos com a abertura genérica. Somente essas duas URLs receberam novo `lastmod`.

## Estratégia de correção

1. Preservar páginas institucionais fortes, claras e acessíveis.
2. Priorizar artigos e ferramentas diretamente ligados a instrumentação industrial e automação.
3. Revisar famílias com texto repetido, substituindo blocos genéricos por:
   - aplicação específica;
   - entradas, premissas e limitações reais;
   - exemplo coerente;
   - interpretação do resultado;
   - referência técnica quando necessária;
   - ligação contextual entre artigo, ferramenta e serviço.
4. Comparar páginas com intenção semelhante antes de consolidar, retirar do sitemap ou aplicar canonical.
5. Não remover conteúdo em massa e não quebrar URLs existentes.
6. Atualizar `lastmod` somente quando houver mudança material.
7. Solicitar nova revisão do AdSense somente depois de uma amostra representativa das páginas estar diferenciada e os dados do Search Console mostrarem evolução.

## Fila prioritária

### Search Console

- acompanhar separadamente os três sitemaps;
- verificar amostras de “Detectada, mas não indexada” por família;
- auditar canonicals, status HTTP, links internos e profundidade das URLs prioritárias;
- revisar se páginas fracas devem continuar no sitemap.

### AdSense

- retirar textos editoriais produzidos em massa;
- reforçar autoria organizacional, transparência, navegação e propósito de cada área;
- manter `ads.txt`, políticas, contato e avisos acessíveis;
- equilibrar ferramentas com conteúdo editorial original e útil.

## Referências do Google

- Search Central — sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Search Central — conteúdo útil e centrado nas pessoas: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google AdSense — valor do inventário: https://support.google.com/adsense/answer/10502938

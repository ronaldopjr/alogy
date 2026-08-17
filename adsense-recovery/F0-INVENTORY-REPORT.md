# F0 — Relatório do inventário completo

Data: 13 de agosto de 2026

## Escopo

Auditoria somente leitura de todos os arquivos HTML da branch `agent/adsense-recovery`, comparando meta robots, canonical, identificador do AdSense, presença nos sitemaps, palavras visíveis e quantidade de H1.

## Resultado geral

| Indicador | Resultado |
|---|---:|
| Páginas HTML | 390 |
| `index,follow` | 299 |
| `noindex,nofollow,noarchive` | 88 |
| `noindex,follow` | 2 |
| Sem meta robots | 1 |
| URLs de páginas nos sitemaps | 299 |
| Páginas com identificador AdSense | 87 |
| Páginas sem identificador AdSense | 303 |
| `noindex` com AdSense | 0 |
| `noindex` presente em sitemap | 0 |
| Indexável fora do sitemap | 1 |
| Sem canonical | 1 |
| H1 diferente de 1 | 1 |

## Consistências aprovadas

- As 299 páginas declaradas indexáveis estão representadas nos sitemaps.
- As 90 páginas `noindex` não estão nos sitemaps.
- Nenhuma página `noindex` carrega o identificador do AdSense.
- O total atual coincide com os relatórios internos mais recentes: 390 HTML, 299 indexáveis e 90 `noindex`, mais um arquivo técnico de verificação.

## Anomalias técnicas

### Arquivo antigo de verificação

`google00ce371ffda114a1.html` contém apenas o token de verificação. Não possui canonical, meta robots ou H1, não carrega AdSense e não está no sitemap. O Search Console o classificou como soft 404. A decisão adequada é confirmar se ainda é necessário e, caso contrário, fazer a URL responder 404 ou 410 real. Nenhuma alteração foi aplicada.

### Contagem de H1 reconciliada

A primeira execução contou também trechos `<h1>` existentes dentro de modelos de impressão em JavaScript e produziu 11 falsos positivos. O auditor foi corrigido para analisar apenas o markup renderizável inicial. Todas as 299 páginas editoriais indexáveis possuem exatamente um H1; somente o arquivo técnico antigo de verificação não possui H1.

### Páginas indexáveis com conteúdo visível curto

- `cases.html`: 291 palavras
- `index.html`: 241 palavras
- `industrial.html`: 253 palavras
- `residencial.html`: 190 palavras
- `sobre.html`: 159 palavras

O arquivo antigo de verificação tem duas palavras, mas não é conteúdo editorial. A contagem de palavras serve apenas para triagem; o Google não define um mínimo de palavras para aprovação. As páginas institucionais merecem análise porque confiança, identidade e experiência são especialmente importantes para o AdSense.

## Diferença em relação ao Search Console

O Search Console mostrou 352 páginas indexadas, enquanto o pacote atual possui 299 páginas indexáveis. A diferença de 53 URLs é compatível com reprocessamento pendente de páginas que já estiveram indexadas, especialmente após a introdução de `noindex` no fim de julho. Não há evidência, neste inventário, de que páginas `noindex` continuem sendo promovidas pelos sitemaps atuais.

## Próximo lote

`F1-TECHNICAL-PLAN`: preparar correções técnicas reversíveis para o arquivo de verificação antigo e os redirecionamentos HTML legados, sem aplicar alterações antes da validação do plano.

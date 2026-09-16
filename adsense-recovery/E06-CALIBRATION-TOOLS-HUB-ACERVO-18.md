# E06-18 — Hub de calibração por decisão metrológica

## Página
- `ferramentas-calibracao-instrumentacao.html`
- decisão anterior: `improve/P0/high`
- decisão após revisão: `keep/P1/high`

## Publicação
- commit de conteúdo + sitemap: `c1dc3816a37edf2d5fcb9232d0b20b21fe0e8b5e`
- blob final da página: `4600363743b60bc49b629b33f34e3831c09b8ec7`
- sitemap: `sitemap-institucional.xml`, `lastmod` atualizado para `2026-09-16`
- GitHub Pages run: `35071001842` — `success`
- artefato: `10435724263`
- digest: `sha256:2aa43bc6c7943583609300376af6fa296410a46b1b29fd22a1c6543114bdc8be`

## Mudanças editoriais e navegacionais verificadas
- hub convertido de listagem repetitiva em mapa de decisão por pergunta técnica, dados mínimos, primeiro caminho e limite do cálculo;
- fluxo técnico separa definição, condição encontrada, comparação, intervenção e decisão;
- calibração, verificação e ajuste foram distinguidos de acordo com o vocabulário metrológico;
- exemplo reproduzível: transmissor 0–10 bar, 5,00 bar aplicados e 12,08 mA lidos = 5,05 bar, erro +0,05 bar ou +0,5% do span;
- a declaração de conformidade ficou condicionada a tolerância, incerteza, regra de decisão e condições previstas;
- registro mínimo agora cobre TAG, configuração, procedimento, padrões, pontos, condições, `as-found`, intervenção, `as-left`, incerteza e conclusão;
- rastreabilidade foi apresentada como propriedade do resultado sustentada por cadeia documentada, não como selo automático do instrumento;
- trilhas de transmissores, válvulas, analítica, cartões e temperatura ganharam limites específicos;
- oferta comercial corrigida para revisão, manutenção, configuração, diagnóstico, loop check e conferência funcional;
- calibração, ensaio, rastreabilidade e documentação específica ficaram condicionados aos padrões, recursos e eventual parceiro confirmados na proposta;
- FAQ visível e estruturada responde sobre certificado, TUR, `as-found` e escopo real da ALOGY;
- menu global Guia preservado; nenhum CTA promocional do Guia foi inserido no corpo.

## Métricas do candidato versionado
- 1.397 palavras visíveis;
- 1.352 palavras no `main`;
- 1 H1 / 15 H2 / 3 H3;
- `CollectionPage`, `BreadcrumbList` e `FAQPage` válidos em JSON-LD;
- canonical correto;
- `index,follow` preservado;
- carregador AdSense preservado;
- URL permanece no sitemap uma única vez;
- 39 recursos internos únicos da página conferidos como existentes no repositório;
- menu global Guia preservado em desktop/mobile;
- sem Hotmart ou `cursos.html` no corpo;
- `app.js`, calculadoras, fórmulas e JavaScript técnico não alterados;
- HTML versionado: 26.357 bytes, SHA-256 `3cd8e4308ed4ca5047bae68dd16f16373a963e5f29cd5319c10d3630923e9e59`.

## Fontes primárias consultadas em 16/09/2026
- JCGM/BIPM — VIM 3, item 2.39, definição de calibração e distinção de ajuste;
- JCGM 106:2012 — incerteza, risco de decisão e avaliação da conformidade;
- ILAC G8:09/2019 — regras de decisão e declarações de conformidade;
- NIST Policy on Metrological Traceability — cadeia documentada, responsabilidade pela alegação e adequação ao uso.

## Validação final
- JSON-LD analisado localmente sem erro;
- sitemap XML analisado sem erro;
- os 39 recursos internos referenciados existem na árvore Git;
- cálculo do exemplo refeito: `(12,08 - 4) / 16 × 10 = 5,05 bar`; erro `5,05 - 5,00 = +0,05 bar = +0,5%` do span de 10 bar;
- GitHub Pages concluiu build/deploy com sucesso para o SHA do conteúdo;
- conferência direta no domínio com chave de cache confirmou título novo, H1 novo, data `16/09/2026`, exemplo `+0,05 bar` e FAQ publicada;
- o mecanismo público de leitura textual ainda devolveu uma cópia anterior em cache; por isso esta rodada não declara comparação byte a byte do HTML ao vivo.

## Próxima ação
Selecionar E06-19 entre as páginas remanescentes `improve/P0/high`, excluindo E06-01 a E06-18. Manter páginas de área classificada e cibersegurança OT fora da edição automática e não solicitar nova análise do AdSense. Preservar E10-I1 para perto do encerramento.

# E06-16 — IA industrial: dados, validação e limites de atuação

## Página
- `blog-ia-na-industria.html`
- decisão anterior: `improve/P0/high`
- decisão após revisão: `keep/P1/high`

## Publicação
- commit de conteúdo + sitemap: `29795678a75517c5cba25d6f250b4672a9ae55e3`
- blob final da página: `26a818ca7864c81363b0a196b6dd3d8d5b313446`
- sitemap: `sitemap-blog.xml`, `lastmod` atualizado para `2026-09-16`
- GitHub Pages run: `35045927126` — `success`
- artefato: `10427116945`
- digest: `sha256:aaaa8980367218f67b0cc9e67992d8467a68f2d3b6c25d0d5124a6d697bc0167`

## Mudanças editoriais verificadas
- intenção delimitada por decisão, horizonte, usuário e custo dos erros antes da escolha do algoritmo;
- cadeia sensor → transmissor → PLC/SCADA → historian → modelo mantida e aprofundada;
- qualidade de dados tratada com faixa, unidade, status, timestamps, intervenções, contexto e rótulos;
- exemplo reproduzível: transmissor 0–10 bar, 12,8 mA = 55% = 5,5 bar; escala incorreta 0–16 bar produz 8,8 bar;
- separação entre deriva de medição e drift do modelo;
- critérios de avaliação ligados à decisão, incluindo falsos alarmes, falhas não detectadas, antecedência e desempenho por condição;
- validação temporal, linha de base, bordas operacionais e entradas fora do domínio;
- implantação progressiva em sombra, recomendação supervisionada e atuação restrita;
- monitoramento, fallback, retirada, versionamento e responsabilidade operacional;
- distinção explícita de que a nota NIST de infraestrutura crítica de 2026 é documento em desenvolvimento, não norma concluída;
- perguntas frequentes e dados estruturados FAQ adicionados de forma consistente com o conteúdo visível.

## Métricas do candidato versionado
- 1.893 palavras visíveis;
- 1.845 palavras no `main`;
- 1 H1 / 16 H2 / 0 H3;
- `BlogPosting` e `FAQPage` válidos em JSON-LD;
- canonical correto;
- `index,follow` preservado;
- carregador AdSense preservado;
- URL permanece no sitemap uma única vez;
- menu global Guia preservado em desktop/mobile;
- sem CTA promocional do Guia, Hotmart ou `cursos.html` no corpo;
- nenhum JavaScript técnico, fórmula de ferramenta ou `app.js` alterado.

## Fontes primárias consultadas
- NIST — 2026 Roadmap on Artificial Intelligence and Machine Learning for Smart Manufacturing, publicada em 03/07/2026;
- NIST — Artificial Intelligence for Manufacturing, iniciativa criada em 16/07/2026 e atualizada em 17/07/2026;
- NIST AI 100-1 — Artificial Intelligence Risk Management Framework 1.0;
- NIST — Concept Note: AI RMF Trustworthy AI in Critical Infrastructure Profile, de 07/04/2026.

## Validação final
O GitHub Pages concluiu build/deploy com sucesso para o SHA do conteúdo e gerou o artefato acima. A página publicada respondeu HTTP 200 e foi comparada byte a byte com o candidato validado:

- 24.905 bytes;
- SHA-256 ao vivo `47bec8f225f7a9d340cb8fc3f739e9cf05954971bd7de21e33117b8244a56134`;
- Git blob SHA-1 calculado do HTML servido `26a818ca7864c81363b0a196b6dd3d8d5b313446`;
- blob ao vivo idêntico ao blob final versionado.

## Próxima ação
Selecionar E06-17 entre as páginas remanescentes `improve/P0/high`, excluindo E06-01 a E06-16 e mantendo fora da edição automática páginas que exigem revisão especializada. Não solicitar nova análise do AdSense. Preservar E10-I1 para perto do encerramento.

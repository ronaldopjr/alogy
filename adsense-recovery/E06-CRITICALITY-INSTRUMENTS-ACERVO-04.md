# E06-04 — Criticidade de instrumentos

## Página
`blog-criticidade-instrumentos.html`

## Objetivo
Converter um artigo curto e conceitual em uma página técnica reproduzível para priorização de manutenção, sem transformar uma matriz genérica em decisão de segurança.

## Estado anterior
- decisão editorial: `improve/P0/high`;
- 675 palavras visíveis / 632 no conteúdo principal;
- 1 H1 / 10 H2;
- boa distinção entre consequência e preferência, mas sem matriz reproduzível, faixas demonstrativas, validação, governança ou conjunto suficiente de fontes primárias.

## Alterações do lote
- separação explícita entre função, modo de falha e consequência;
- matriz didática 0–3 para produção, qualidade/conformidade, proteção do ativo e detectabilidade;
- faixas 0–3, 4–7 e 8–12 declaradas como exclusivamente fictícias/demonstrativas;
- funções de segurança/SIS/ESD excluídas da pontuação genérica;
- exemplo reproduzível com TAG fictício TT-101;
- método para validar a matriz antes de uso em massa;
- ligação entre criticidade e estratégia de manutenção sem definir intervalos universais;
- histórico de falhas tratado separadamente de consequência;
- governança, responsáveis, revisão periódica e gatilhos de reavaliação;
- referências primárias públicas confirmadas: ISO 14224:2016, ISO 55000:2024, ISO 55001:2024, IEC 60300-3-11:2009 e série IEC 61511;
- CTA comercial condicionado ao escopo real da ALOGY;
- navegação da página de blog sem link para `/guia/`;
- nenhuma fórmula, calculadora ou JavaScript técnico alterado.

## Validação local do candidato
- HTML: 28.362 bytes;
- SHA-256: `99454180eeec26229d6358a040bd993153e981bb74fce9ae3605f6e78c0ac94c`;
- 2.012 palavras visíveis observadas no artefato final;
- 1.970 palavras no conteúdo principal observadas no artefato final;
- 1 H1 / 17 H2;
- JSON-LD válido: BlogPosting + FAQPage;
- canonical correto;
- carregador AdSense preservado;
- sem Hotmart;
- sem `/guia/`;
- sem rótulos separados de Serviços.

## Fontes públicas verificadas
- ISO 14224:2016: edição 3, confirmada em 2022 e ainda vigente.
- ISO 55000:2024: edição 2, publicada em julho de 2024.
- ISO 55001:2024: edição 2, publicada em julho de 2024.
- IEC 60300-3-11:2009: RCM, edição 2, estabilidade indicada até 2027.
- IEC 61511 Series: referência para SIS no setor de processo; usada apenas para delimitar o que a matriz genérica não pode fazer.

## Publicação
Conteúdo publicado no commit `95ea333e471f7e3d2518363794ca0215585ef6d8`.

## Validação do artefato publicado
- GitHub Pages workflow: `34919359257`;
- conclusão: `success`;
- artefato: `10377550959`;
- digest do artefato: `sha256:91f58c4e5da89430d811513e0c88594265fbb62d083bcfe905b753bc347c29fd`;
- HTML publicado: 28.362 bytes;
- SHA-256 do HTML: `99454180eeec26229d6358a040bd993153e981bb74fce9ae3605f6e78c0ac94c`;
- HTML publicado idêntico byte a byte ao candidato validado: sim;
- 2.012 palavras visíveis / 1.970 no artigo pelo validador final;
- 1 H1 / 17 H2 / 0 H3;
- JSON-LD contém `BlogPosting` + `FAQPage`;
- canonical correto;
- carregador AdSense preservado;
- URL presente exatamente uma vez em `sitemap-blog.xml`;
- sem Hotmart, `/guia/` ou rótulos separados de Serviços.

## Fechamento
Decisão editorial alterada de `improve/P0/high` para `keep/P1/high`. O lote está publicado e validado. Nenhuma solicitação de nova análise foi enviada ao AdSense.

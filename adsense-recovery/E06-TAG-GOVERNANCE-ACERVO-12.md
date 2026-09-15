# E06 — Acervo monetizado — página 12

## Página

`blog-gemeo-digital-tags-instrumentacao.html`

## Objetivo

Transformar um artigo introdutório em conteúdo técnico reproduzível sobre identidade canônica, aliases, qualidade, timestamps e linhagem de dados industriais entre campo, PLC, SCADA, historian e modelos, sem alterar fórmula de ferramenta ou JavaScript técnico compartilhado.

## Decisão editorial

- Antes: `improve/P0/high`
- Depois: `keep/P1/high`

## Conteúdo publicado

Commit de conteúdo: `2e091506da18f788757d1a424fd194228cb763b8`

Principais aprofundamentos:

- distinção entre identidade canônica, alias e amostra;
- contrato mínimo de TAG com origem, variável, unidade, faixa, tipo, transformação, qualidade, tempo, frequência, responsável e vigência;
- exemplo didático ponta a ponta para `PT-204`, canal `AI-07`, PLC, historian e modelo;
- cálculo reproduzível da escala 4–20 mA para 0–1.000 kPa, com 12 mA = 500 kPa;
- diferença entre timestamp da fonte e timestamp de ingestão;
- tratamento de `StatusCode`/qualidade sem substituir estado inválido por zero;
- linhagem estruturada por entidade, atividade e agente segundo o W3C PROV;
- critérios de completude, validade, atualidade, consistência semântica e cobertura de linhagem;
- cenário de mudança de faixa de 0–1.000 para 0–1.600 kPa e revalidação ponta a ponta;
- roteiro de reconciliação entre instrumento, I/O, PLC, SCADA, historian e consumidores;
- limites explícitos entre configuração digital, desempenho metrológico e documentação de calibração;
- autoria organizacional verificável ligada à página Sobre;
- CTA comercial restrito ao posicionamento confirmado da ALOGY.

O `lastmod` da URL em `sitemap-blog.xml` foi atualizado para `2026-09-15` no mesmo commit.

## Fontes primárias verificadas em 15/09/2026

- OPC Foundation — `OPC UA Part 8: Data Access`, versão 1.05: `EngineeringUnits`, `EURange`, `StatusCode` e timestamps.
- W3C — `PROV-DM: The PROV Data Model`: entidades, atividades, agentes, derivação e responsabilidade.
- Industrial Digital Twin Association — `Asset Administration Shell Part 1`, v3.0.2, março de 2025: identificadores, referências, informações do ativo e submodelos.
- NIST — `Digital Twins for Advanced Manufacturing`: interoperabilidade, validação, incerteza e confiança ao longo do ciclo de vida.

## Validação da publicação

GitHub Pages:

- workflow run: `35022471938`
- conclusão: `success`
- build: `success`
- deploy: `success`
- artefato: `10418386243`
- digest do artefato: `sha256:13ec1c4662ebdd2c0ad804ff97fc26fe5b2ea10f7fc094d67251b84d4ee7f05c`

HTML servido pelo domínio:

- HTTP: `200`
- `Last-Modified`: `Tue, 15 Sep 2026 20:55:10 GMT`
- bytes: `24122`
- SHA-256: `5514716528277fdea638bb3ad516fc1af5d35cf22b910d7df6ed3857f17329ca`
- Git blob SHA-1 calculado do HTML servido: `94800b10238135d48b15515d1126c1232c088a48`
- Git blob SHA-1 do commit de conteúdo: `94800b10238135d48b15515d1126c1232c088a48`
- conteúdo servido idêntico byte a byte ao candidato versionado: `sim`
- palavras visíveis, excluindo scripts e estilos: `1769`
- palavras no artigo: `1716`
- H1: `1`
- H2: `15`
- H3: `7`
- JSON-LD: `BlogPosting` + `FAQPage`
- canonical: válido
- carregador direto do AdSense: presente
- ocorrência da URL em `sitemap-blog.xml`: `1`
- menu global Guia: preservado
- CTA/link promocional do Guia no corpo do artigo: ausente
- Hotmart e `cursos.html`: ausentes
- rótulos separados `Serviços Industriais` / `Serviços Residenciais`: ausentes
- destinos internos e imagem de capa confirmados no SHA-base
- cálculo de escala conferido independentemente: 12 mA = 500 kPa na faixa didática
- fórmulas de ferramentas e JavaScript técnico compartilhado: não alterados

## Limites preservados

- nenhum protocolo ou modelo tratado como solução automática de governança;
- nenhum limite universal de qualidade, atualização, tolerância ou intervalo inventado;
- nenhum dado governado tratado automaticamente como Digital Twin validado;
- nenhum registro de configuração apresentado como laudo, certificado ou rastreabilidade;
- nenhuma equipe, case, cliente, bancada, equipamento ou credencial inventado;
- nenhuma alteração em páginas `manual-review/P0`;
- nenhum `noindex` ou pruning em massa;
- nenhuma solicitação de nova análise do AdSense.

## Próximo passo

Selecionar outra página `improve/P0/high` de instrumentação, automação ou elétrica industrial e baixo risco editorial, desconsiderando as páginas 01–12 já concluídas pelos deltas incrementais. Manter `manual-review/P0` intactas e continuar uma página extensa por lote.


# ALOGY — fila operacional atual

> Versão 2026-09-14.16. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

## Regra permanente de navegação comercial

A navegação pública usa **uma única entrada `Serviços`**, apontando para `industrial.html`.

- Não restaurar os rótulos separados `Serviços Industriais` e `Serviços Residenciais`.
- Não usar a antiga frente residencial como posicionamento público da ALOGY.
- `residencial.html` é apenas rota legada `noindex,follow`, com canonical e redirecionamento para `industrial.html`; permanece fora do sitemap.
- Termos técnicos como instrumentação industrial, automação industrial e elétrica industrial continuam naturais no conteúdo e no SEO.

## E02 — busca de ferramentas

**Estado:** CONCLUÍDO.

Busca e responsividade validadas no artefato publicado. PT100 → 1; termo inexistente → 0; limpar → 30; `valvula` → 2. Em 390 px, a largura rolável foi corrigida de 545 px para 390 px.

Commits principais: `eec58b20b6de6d8de827cf1f9f623b2987827bb2` e `cb653d8c001a10849392835922d5e7e8d89fa60e`.

## E03 — oferta comercial verdadeira

**Estado:** CONCLUÍDO NO ESCOPO INICIAL.

Home, página de Serviços, Sobre e CTA 4–20 mA foram publicados e validados sem promessa comercial de calibração/rastreabilidade não comprovada. Permanecem para etapas posteriores a matriz de capacidade C01 e a confirmação de evidências publicáveis.

Commits de site: `e945d6e5e7259e456bde56339084a2b37ff4951a` e `9a4c33175da73b3a53fe7912bca33da5bdcdd8b8`.

## E04 — inventário e higiene técnica

**Estado:** CONCLUÍDO PARA O TRABALHO EDITORIAL. A higiene remanescente continua rastreada e não deve desaparecer do plano.

### Estrutura validada

- 271 HTMLs-fonte;
- 270 páginas/rotas editoriais e 1 verificação Google;
- 221 páginas indexáveis;
- 49 rotas `noindex`;
- 221 URLs em sitemap;
- 0 indexáveis fora do sitemap;
- 0 páginas `noindex` no sitemap;
- 0 indexáveis sem canonical;
- 0 anomalias reais de H1 entre indexáveis;
- 0 duplicidades entre sitemaps;
- 88 páginas com carregador direto do AdSense;
- 268 decisões editoriais anteriores preservadas.

Commit inicial do inventário canônico: `da2f61932a21c00741f418870601aafcb42deba6`.

### Serviços e posicionamento

- 257 arquivos e 1.017 ocorrências de navegação consolidados em uma única entrada **Serviços**.
- `residencial.html` permanece somente como redirect legado.
- A home apresenta **Instrumentista sob demanda** com disponibilidade e escopo sob consulta.
- Nenhuma fórmula ou lógica JavaScript técnica foi alterada.

Commit: `2a047390f543d3a7a0469a3677f17c14fa0dcfeb`. Pages: `34885469337`.

### Cursos → Guia — lote 01

Páginas: `calculadora-erro-calibracao.html`, `checklist-comissionamento-hart.html`, `blog-vazao-normalizada-gases.html`, `calculadora-massa-tanque-nivel.html` e `blog-ar-instrumentos-qualidade-ponto-orvalho.html`.

- 10 links migrados para `/guia/`;
- 5 atalhos sociais genéricos da Hotmart removidos;
- nenhuma fórmula ou lógica JavaScript técnica alterada.

Commit: `181a6ba8336eea2d7f4b9436786b7984e618cf9f`.

### Cursos → Guia — lote 02

Páginas: `blog-calibracao-instrumentos-industriais.html`, `blog-erro-total-malha-instrumentacao.html`, `blog-fat-sat-instrumentacao.html`, `calculadora-diagnostico-4-20ma-hart.html` e `checklist-teste-de-loop.html`.

- mais 10 links migrados;
- mais 5 atalhos sociais genéricos da Hotmart removidos;
- nenhuma fórmula ou lógica JavaScript técnica alterada.

Commit do conteúdo: `cd9fd790999f1a0d1622d2700903c503069465ab`.
Validação: `34887643566`.
Pages: `34887751809`, sucesso; artefato `10365801050`.

### Higiene residual rastreada

- 137 páginas-fonte ainda contêm referência legada a Cursos;
- 102 delas são indexáveis;
- 128 páginas ainda contêm link Hotmart a classificar por contexto.

Esses resíduos não autorizam poda, troca ou remoção em massa. Serão tratados somente quando a página entrar em um lote seguro.

## E05 — piloto editorial

**Estado:** CONCLUÍDO, VALIDADO E PUBLICADO.

Relatórios:

- seleção: `E05-PILOT-SELECTION.md`;
- página 01: `E05-VALVE-CONTROL-PILOT-01.md`;
- página 02: `E05-CALIBRATION-PILLAR-PILOT-02.md`;
- consolidação: `E05-PILOT-CONSOLIDATION.md`.

### Página 01 — válvula de controle

Arquivo: `blog-calibracao-valvula-controle.html`.

- 2.046 palavras visíveis e 1.999 no conteúdo principal;
- 1 H1 e 14 H2;
- JSON-LD `BlogPosting` e `FAQPage` válidos;
- canonical, AdSense e sitemap preservados;
- referências BIPM/JCGM, Emerson e FieldComm Group;
- CTA comercial condicionado ao escopo real;
- decisão: `improve/P0/high` → `keep/P1/high`.

Commits:

- conteúdo: `59dffe7f590d15d3e9d2e341375b0e7e979c9e0c`;
- inventário e relatório: `5c5c3acc32857ea15526f2396271f83de4ef2217`.

Workflows:

- validação: `34889135920`;
- Pages: `34889153902`, sucesso;
- artefato: `10366246367`;
- digest: `sha256:1606ebd5665fa5ed1df60b2c307c1191a7bb2ad8e6a3a0c88af40ac822f3979d`.

### Página 02 — página-pilar de calibração

Arquivo: `blog-calibracao-instrumentos-industriais.html`.

- 2.442 palavras visíveis e 2.397 no conteúdo principal;
- 1 H1 e 18 H2;
- JSON-LD `BlogPosting` e `FAQPage` válidos;
- canonical, AdSense e sitemap preservados;
- referências BIPM/JCGM, ILAC e NIST;
- exemplo fictício `as-found/as-left`, fronteira de medição, incerteza, regra de decisão e rastreabilidade;
- CTA comercial condicionado ao escopo real;
- decisão: `improve/P0/high` → `keep/P1/high`.

Commits:

- conteúdo: `76da655088462ca57846096cadb3ac896840ac4f`;
- inventário e relatório: `ccead3dbcc2839cee7d2bb4b690cca4aeb04154d`.

Workflows:

- validação: `34890160258`, sucesso;
- Pages: `34890176070`, sucesso;
- artefato: `10366407235`;
- digest: `sha256:ebc409b19590693ed4c1d8361fc48169724b5a914611f452aaff2adcf57c10f0`.

O artefato exato implantado foi extraído e inspecionado. Título, seções novas, exemplo, CTA, referências, canonical, AdSense, 1 H1, 18 H2 e os dois JSON-LD foram confirmados. Nenhum vestígio de Cursos ou Hotmart permaneceu.

### Resultado do piloto

As duas páginas selecionadas passaram de `improve/P0/high` para `keep/P1/high`. O padrão de uma página por lote foi aprovado para revisões extensas ou de maior risco técnico.

Nenhuma solicitação de nova análise foi enviada ao AdSense.

## E06 — revisão do acervo monetizado

**Estado:** EM EXECUÇÃO — PRIMEIRA PÁGINA SELECIONADA.

### E06-ACERVO-SELECTION-01

Página: `blog-ar-instrumentos-qualidade-ponto-orvalho.html`.

Estado atual:

- `improve/P0/high`;
- 949 palavras visíveis;
- 903 palavras no conteúdo principal;
- 1 H1 e 8 H2;
- indexável, canônica, presente no sitemap e com AdSense direto.

Motivo: a página é relevante para posicionadores, conversores I/P, solenoides e atuadores, mas precisa identificar fontes e edições, explicar partículas/água/óleo sem prescrever classe universal, diferenciar ponto de orvalho sob pressão, organizar pontos de medição e apresentar diagnóstico reproduzível.

Relatório de seleção: `E06-ACERVO-SELECTION-01.md`.
Commit: `1f48c6442c773c709573fe746ec7999ec733229f`.

### Próxima ação executável

1. Confirmar fontes oficiais e vigentes sobre qualidade de ar comprimido e ponto de orvalho.
2. Revisar somente `blog-ar-instrumentos-qualidade-ponto-orvalho.html`.
3. Preservar canonical, sitemap, AdSense, navegação e estrutura mobile.
4. Não prescrever classe, ponto de orvalho ou frequência universal.
5. Não prometer laboratório, ensaio, certificado, classe ISO ou rastreabilidade não confirmada.
6. Regenerar o inventário após a publicação.
7. Validar o HTML, o build e o artefato exato do GitHub Pages antes de fechar o lote.

Páginas `manual-review/P0` permanecem inalteradas até revisão humana proporcional ao risco. Hubs de ferramentas exigem lote arquitetural separado. Páginas dependentes de autoria pessoal, credenciais ou casos reais aguardam fatos confirmados pelo proprietário.

## E08-W1 — avisos compartilhados

Reproduzir em amostra representativa qualquer classificação genérica de avisos antes de alterar `app.js`. Não mexer no script compartilhado sem defeito reproduzido.

**Estado:** PENDENTE, sem bloqueio para E06.

## E07–E12

Seguir a ordem do plano atual: autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

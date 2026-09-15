# ALOGY — fila operacional atual

> Versão 2026-09-14.21. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

## Regras permanentes

### Navegação comercial

- Usar uma única entrada pública **Serviços**, apontando para `industrial.html`.
- Não restaurar `Serviços Industriais` e `Serviços Residenciais` como abas separadas.
- `residencial.html` permanece somente como legado `noindex,follow`, canonical/redirecionamento para `industrial.html` e fora do sitemap.
- Termos técnicos como instrumentação industrial, automação industrial e elétrica industrial continuam naturais no conteúdo/SEO.

### Guia x blog/ferramentas

- Blog e ferramentas não devem promover nem linkar diretamente o Guia.
- Não inserir `/guia/`, botão Guia ou atalho comercial para o Guia nessas superfícies.
- Remover links legados Guia/Cursos apenas quando a página entrar em lote seguro.
- `cursos.html` permanece apenas como rota histórica `noindex,follow` com canonical/redirecionamento para `/guia/`.

### AdSense e verdade comercial

- Motivo reportado pelo proprietário: **conteúdo de baixo valor**.
- Não solicitar nova análise do AdSense automaticamente.
- Não podar nem aplicar `noindex` em massa.
- Não inventar equipe, cases, clientes, depoimentos, certificações, equipamentos, laboratório, rastreabilidade, prazo, disponibilidade ou capacidade técnica.
- A ALOGY ainda não tem padrão calibrado confirmado para sustentar emissão própria de laudo/certificado de calibração.
- Oferta segura: avaliação, inspeção, diagnóstico, manutenção, configuração e conferência funcional; calibração, ensaio, rastreabilidade ou documentação específica somente quando recursos e parceiros estiverem confirmados na proposta.
- Não alterar fórmula ou JavaScript técnico sem defeito reproduzido e validação proporcional.
- Revisões editoriais extensas: uma página por lote.

## E02 — busca de ferramentas

**Estado:** CONCLUÍDO.

Busca e responsividade validadas no artefato publicado.

Commits principais: `eec58b20b6de6d8de827cf1f9f623b2987827bb2` e `cb653d8c001a10849392835922d5e7e8d89fa60e`.

## E03 — oferta comercial verdadeira

**Estado:** CONCLUÍDO NO ESCOPO INICIAL.

Home, Serviços, Sobre e CTA 4–20 mA publicados sem promessa não comprovada de calibração/rastreabilidade.

Commits principais: `e945d6e5e7259e456bde56339084a2b37ff4951a` e `9a4c33175da73b3a53fe7912bca33da5bdcdd8b8`.

## E04 — inventário e higiene técnica

**Estado:** CONCLUÍDO PARA O TRABALHO EDITORIAL; resíduos continuam rastreados.

Inventário-base:

- 271 HTMLs-fonte;
- 270 páginas/rotas editoriais + 1 verificação Google;
- 221 indexáveis;
- 49 `noindex`;
- 221 URLs em sitemap;
- 0 indexáveis fora do sitemap;
- 0 `noindex` no sitemap;
- 0 indexáveis sem canonical;
- 0 anomalias reais de H1 entre indexáveis;
- 0 duplicidades entre sitemaps;
- 88 páginas com carregador direto do AdSense.

Inventário canônico inicial: `da2f61932a21c00741f418870601aafcb42deba6`.

Consolidação da navegação em **Serviços**: `2a047390f543d3a7a0469a3677f17c14fa0dcfeb`.

Resíduo histórico rastreado no último inventário global: 137 páginas-fonte com referência legada a Cursos, 102 indexáveis e 128 páginas com Hotmart a classificar por contexto. Não tratar em massa.

## E05 — piloto editorial

**Estado:** CONCLUÍDO, VALIDADO E PUBLICADO.

1. `blog-calibracao-valvula-controle.html` → `keep/P1/high`.
2. `blog-calibracao-instrumentos-industriais.html` → `keep/P1/high`.

Consolidação: `a04bb693e8aa3d8835183cd1bf3fadb74b5e594d`.

## E06 — revisão do acervo monetizado

**Estado:** EM EXECUÇÃO — CINCO PÁGINAS REVISADAS, PUBLICADAS E VALIDADAS.

### Página 01 — ar de instrumentos e ponto de orvalho

`blog-ar-instrumentos-qualidade-ponto-orvalho.html`

- `improve/P0/high` → `keep/P1/high`;
- conteúdo: `4c4a51b7fd881a5252995dd00603ee04053daeb8`;
- relatório: `E06-AIR-INSTRUMENT-ACERVO-01.md`;
- delta: `E06-INVENTORY-DELTA-01.csv`;
- Pages: `34914413210`;
- artefato: `10375960376`.

### Página 02 — solenóide e atuador pneumático

`blog-solenoide-atuador-pneumatico-cv.html`

- `improve/P0/high` → `keep/P1/high`;
- conteúdo: `3baa03d6832062d7d0fe24ec4ecae37cf96f0b59`;
- relatório: `E06-SOLENOID-ACTUATOR-ACERVO-02.md`;
- delta: `E06-INVENTORY-DELTA-02.csv`;
- Pages: `34915228002`;
- artefato: `10376455086`.

### Página 03 — hub de Instrumentação Industrial

`blog-instrumentacao-industrial.html`

- `improve/P0/high` → `keep/P1/high`;
- conteúdo: `794c5bd65cd80ce34b30f0ef83c1b422c5584ab5`;
- relatório: `E06-INSTRUMENTATION-HUB-ACERVO-03.md`;
- delta: `E06-INVENTORY-DELTA-03.csv`;
- Pages: `34916655362`;
- artefato: `10376422501`.

### Página 04 — criticidade de instrumentos

`blog-criticidade-instrumentos.html`

- `improve/P0/high` → `keep/P1/high`;
- conteúdo: `95ea333e471f7e3d2518363794ca0215585ef6d8`;
- relatório: `E06-CRITICALITY-INSTRUMENTS-ACERVO-04.md`;
- delta: `E06-INVENTORY-DELTA-04.csv`;
- Pages: `34919359257`;
- artefato: `10377550959`;
- matriz didática não usada para validar SIS/SIL/ESD.

### Página 05 — erro total de malha

`blog-erro-total-malha-instrumentacao.html`

- `improve/P0/high` → `keep/P1/high`;
- 24.461 bytes;
- 1.737 palavras visíveis / 1.695 no artigo;
- 1 H1 / 16 H2 / 4 H3;
- `BlogPosting` + `FAQPage`;
- canonical, AdSense e sitemap preservados;
- URL presente exatamente uma vez em `sitemap-blog.xml`;
- HTML publicado idêntico byte a byte ao candidato validado;
- sem Hotmart, `/guia/` ou rótulos separados de Serviços;
- exemplo 0–200 °C: soma conservadora = 1,20 °C; RSS de triagem ≈ 0,65 °C;
- RSS explicitamente tratado como triagem de engenharia, não como incerteza formal por si só;
- correlação, coeficientes de sensibilidade, covariância e regra de decisão explicados;
- SIS/SIL fora do escopo;
- nenhuma calculadora, fórmula implementada em JS ou script compartilhado alterado.

Conteúdo: `41421244f4e6cce1e11d81fff25d4c79aaf93f2e`.
Blob: `64f476cd8c23142f13c4191a67d4efd78aafcc5f`.
Relatório: `E06-LOOP-ERROR-ACERVO-05.md`, commit `5baf649accae642d90764e36fab5673073120f9b`.
Delta: `E06-INVENTORY-DELTA-05.csv`, commit `ba9cb43f8369ea02637108c37163ffdae491ec9d`.
Pages: `34920747799`, sucesso.
Artefato: `10377956619`.
Digest: `sha256:0113e7e54d026254980c7d656ed0af7fa2871e2d314ab185f7d527dbb78eab65`.
SHA-256 do HTML: `3cf970d83e1b350f7d94a7a6337ea3f0913f1e98c7d7a45886a144c4cc6d48b6`.

## Pendência explícita do inventário

O `ADSENSE-INVENTORY.csv` canônico ainda não incorpora as cinco novas decisões E06.

Fonte incremental até consolidação segura:

- `E06-INVENTORY-DELTA-01.csv`;
- `E06-INVENTORY-DELTA-02.csv`;
- `E06-INVENTORY-DELTA-03.csv`;
- `E06-INVENTORY-DELTA-04.csv`;
- `E06-INVENTORY-DELTA-05.csv`.

Não arriscar truncar o CSV canônico para marcar essa consolidação como concluída.

## Próxima ação executável

1. Ler o SHA atual de `main` antes de qualquer escrita.
2. Selecionar a próxima página `improve/P0/high` por proximidade com Instrumentação Industrial, utilidade real e baixo risco editorial.
3. Priorizar páginas não classificadas como `manual-review/P0`.
4. Pesquisar fontes primárias antes de editar.
5. Revisar uma página extensa por lote.
6. Remover Guia/Cursos somente da página que estiver entrando em lote seguro.
7. Preservar canonical, sitemap, AdSense e navegação `Serviços`.
8. Não alterar calculadoras/JS técnico sem defeito reproduzido.
9. Validar o artefato exato do GitHub Pages.
10. Atualizar `ADSENSE-STATE.json`, esta fila e o MD de continuidade.
11. Consolidar os cinco deltas no inventário canônico somente quando houver mecanismo seguro de substituição integral/patch.
12. Não solicitar nova análise do AdSense.

## E08-W1 — avisos compartilhados

**Estado:** PENDENTE, sem bloqueio para E06.

Antes de alterar `app.js`, reproduzir a classificação genérica de avisos em amostra representativa.

## E07–E12

Após avanço suficiente do acervo:

- E07: autoria/transparência;
- E08: mobile/desempenho/avisos;
- E09: conta/anúncios/privacidade;
- E10: prontidão;
- E11: solicitação somente com autorização explícita;
- E12: acompanhamento da resposta.

Nenhuma solicitação de nova análise foi enviada ao AdSense.

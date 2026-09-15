# ALOGY — fila operacional atual

> Versão 2026-09-14.18. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

## Regra permanente de navegação comercial

A navegação pública usa **uma única entrada `Serviços`**, apontando para `industrial.html`.

- Não restaurar `Serviços Industriais` e `Serviços Residenciais` como abas separadas.
- Não usar a antiga frente residencial como posicionamento público da ALOGY.
- `residencial.html` permanece somente como rota legada `noindex,follow`, com canonical/redirecionamento para `industrial.html` e fora do sitemap.
- Termos como instrumentação industrial, automação industrial e elétrica industrial continuam naturais no conteúdo e no SEO.

## Regras permanentes do projeto AdSense

- Motivo reportado pelo proprietário: **conteúdo de baixo valor**.
- Não solicitar nova análise do AdSense automaticamente.
- Não podar nem aplicar `noindex` em massa.
- Não inventar equipe, cases, clientes, depoimentos, certificações, equipamentos, laboratório, rastreabilidade, prazo, disponibilidade ou capacidade técnica.
- A ALOGY ainda não tem padrão calibrado confirmado para sustentar emissão própria de laudo/certificado de calibração.
- Oferta segura: avaliação, inspeção, manutenção, configuração e conferência funcional; calibração, ensaio, rastreabilidade ou documentação específica somente quando recursos e parceiros estiverem confirmados na proposta.
- Não alterar fórmula ou JavaScript técnico sem defeito reproduzido e validação proporcional.
- Revisões editoriais extensas: preferência por **uma página por lote**.

## E02 — busca de ferramentas

**Estado:** CONCLUÍDO.

Busca e responsividade validadas no artefato publicado. PT100 → 1; termo inexistente → 0; limpar → 30; `valvula` → 2. Overflow mobile corrigido de 545 px para 390 px.

Commits: `eec58b20b6de6d8de827cf1f9f623b2987827bb2` e `cb653d8c001a10849392835922d5e7e8d89fa60e`.

## E03 — oferta comercial verdadeira

**Estado:** CONCLUÍDO NO ESCOPO INICIAL.

Home, Serviços, Sobre e CTA 4–20 mA publicados sem promessa não comprovada de calibração/rastreabilidade.

Commits de site: `e945d6e5e7259e456bde56339084a2b37ff4951a` e `9a4c33175da73b3a53fe7912bca33da5bdcdd8b8`.

## E04 — inventário e higiene técnica

**Estado:** CONCLUÍDO PARA O TRABALHO EDITORIAL; resíduos continuam rastreados.

Estrutura validada:

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

### Serviços

- 257 arquivos e 1.017 ocorrências de navegação consolidados em **Serviços**;
- home com **Instrumentista sob demanda**;
- antiga rota residencial apenas como legado;
- nenhuma fórmula ou lógica técnica alterada.

Commit: `2a047390f543d3a7a0469a3677f17c14fa0dcfeb`.

### Cursos → Guia

Lote 01: commit `181a6ba8336eea2d7f4b9436786b7984e618cf9f`.

Lote 02: conteúdo `cd9fd790999f1a0d1622d2700903c503069465ab`; Pages `34887751809`, artefato `10365801050`.

Resíduo rastreado no último inventário global: 137 páginas-fonte com referência legada a Cursos, 102 indexáveis e 128 páginas com Hotmart a classificar por contexto. Não tratar em massa.

## E05 — piloto editorial

**Estado:** CONCLUÍDO, VALIDADO E PUBLICADO.

### Página 01 — válvula de controle

`blog-calibracao-valvula-controle.html`

- 2.046 palavras visíveis / 1.999 no conteúdo principal;
- 1 H1 / 14 H2;
- `BlogPosting` + `FAQPage`;
- canonical, AdSense e sitemap preservados;
- `improve/P0/high` → `keep/P1/high`.

Conteúdo: `59dffe7f590d15d3e9d2e341375b0e7e979c9e0c`.
Pages: `34889153902`, artefato `10366246367`.

### Página 02 — página-pilar de calibração

`blog-calibracao-instrumentos-industriais.html`

- 2.442 palavras visíveis / 2.397 no conteúdo principal;
- 1 H1 / 18 H2;
- `BlogPosting` + `FAQPage`;
- canonical, AdSense e sitemap preservados;
- `improve/P0/high` → `keep/P1/high`.

Conteúdo: `76da655088462ca57846096cadb3ac896840ac4f`.
Pages: `34890176070`, artefato `10366407235`.

Consolidação: `a04bb693e8aa3d8835183cd1bf3fadb74b5e594d`.

## E06 — revisão do acervo monetizado

**Estado:** EM EXECUÇÃO — DUAS PÁGINAS REVISADAS, PUBLICADAS E VALIDADAS.

### Página 01 — ar de instrumentos e ponto de orvalho

`blog-ar-instrumentos-qualidade-ponto-orvalho.html`

- `improve/P0/high` → `keep/P1/high`;
- artefato: 36.002 bytes;
- ~2.424 palavras visíveis / 2.376 no `main`;
- 1 H1 / 14 H2;
- `BlogPosting` + `FAQPage`;
- canonical, AdSense e sitemap preservados;
- sem Cursos, Hotmart ou rótulos separados de Serviços;
- fontes públicas: ISO 8573-1:2010, ISO 8573-3:1999, Vaisala e ISA7;
- não define classe/ponto de orvalho universal;
- CTA condicionado ao escopo real.

Conteúdo: `4c4a51b7fd881a5252995dd00603ee04053daeb8`.
Relatório: `E06-AIR-INSTRUMENT-ACERVO-01.md`, commit `ade9301300d24ec5a1141cc646eb465633f20c52`.
Delta: `E06-INVENTORY-DELTA-01.csv`, commit `610db63f470c122a14ce4e077d0ce23eba8a7b19`.
Pages: `34914413210`, artefato `10375960376`.

### Página 02 — solenóide e atuador pneumático

`blog-solenoide-atuador-pneumatico-cv.html`

- `improve/P0/high` → `keep/P1/high`;
- artefato: 31.065 bytes;
- 2.428 palavras visíveis / 2.380 no `main`;
- 1 H1 / 14 H2 / 6 H3;
- `BlogPosting` + `FAQPage`;
- canonical, AdSense e sitemap preservados;
- URL presente uma vez em `sitemap-blog.xml`;
- sem Cursos, Hotmart ou rótulos separados de Serviços;
- HTML do artefato idêntico ao candidato validado;
- fontes públicas: Emerson/ASCO e Festo;
- SKU ASCO usado apenas como exemplo específico; nenhum Cv universal;
- alimentação e exaustão analisadas separadamente;
- exemplo fictício de diagnóstico sem criar tolerância universal;
- escopo genérico exclui dimensionamento/validação de ESD, SIS ou shutdown crítico;
- nenhuma fórmula ou JavaScript das calculadoras alterado.

Conteúdo: `3baa03d6832062d7d0fe24ec4ecae37cf96f0b59`.
Blob: `f902c6d5a2246bef7193b32c0a14c5936d58fe19`.
Relatório: `E06-SOLENOID-ACTUATOR-ACERVO-02.md`, commit `212e8e5e6a43649b105399428dddfdca934e5310`.
Delta: `E06-INVENTORY-DELTA-02.csv`, commit `9e9ab916ebe533fc16aeee248bfbe06083ad5d2b`.
Pages: `34915228002`, sucesso.
Artefato: `10376455086`.
Digest: `sha256:6ed4f6cbaea635c7cff767bf16d30671cd00373ea6504689bed60f19ece07147`.
SHA-256 do HTML: `7e9cd3113dca2d1c5d54e6721c75b2921d46658fa73635b62b61a0307e9b30e9`.

### Pendência explícita do inventário

O `ADSENSE-INVENTORY.csv` canônico **ainda não incorpora as duas novas decisões E06**. Os deltas 01 e 02 são a fonte de verdade incremental até uma substituição integral segura do CSV. Não marcar essa consolidação como concluída silenciosamente.

### Próxima ação executável

1. Consolidar `E06-INVENTORY-DELTA-01.csv` e `E06-INVENTORY-DELTA-02.csv` no inventário canônico em checkpoint seguro.
2. Selecionar a próxima página `improve/P0/high` por proximidade com o núcleo de instrumentação e potencial de aprofundamento verificável.
3. Manter páginas `manual-review/P0` inalteradas sem revisão proporcional ao risco.
4. Não alterar calculadoras/JS técnico sem defeito reproduzido.
5. Continuar uma página extensa por lote.
6. Atualizar este arquivo, `ADSENSE-STATE.json` e o MD de continuidade após cada lote.

Nenhuma solicitação de nova análise foi enviada ao AdSense.

## E08-W1 — avisos compartilhados

**Estado:** PENDENTE, sem bloqueio para E06.

Antes de alterar `app.js`, reproduzir a classificação genérica de avisos em amostra representativa. Não mexer no script compartilhado sem defeito reproduzido.

## E07–E12

Após o avanço suficiente do acervo, seguir a ordem do plano: autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

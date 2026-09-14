# ALOGY — fila operacional atual

> Versão 2026-09-14.15. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

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

Home, página de Serviços, Sobre e CTA 4–20 mA foram publicados e validados sem promessa comercial de calibração/rastreabilidade não comprovada. Permanecem para E06 a matriz de capacidade C01 e a confirmação de evidências publicáveis.

Commits de site: `e945d6e5e7259e456bde56339084a2b37ff4951a` e `9a4c33175da73b3a53fe7912bca33da5bdcdd8b8`.

## E04 — inventário e higiene técnica

**Estado:** CONCLUÍDO O SUFICIENTE PARA AVANÇAR AO E05. A higiene remanescente continua rastreada e não deve desaparecer do plano.

### E04-INVENTORY-HYGIENE-01

- `_config.yml` exclui controles, auditorias, relatórios internos, README e testes da publicação. Commit: `ddf9969a2c4f524a0a30b9b73f3f1ac2974ce967`.
- Seis duplicidades entre sitemaps foram removidas sem excluir páginas. Commit: `9f3d7422cb44249bc34abc62002184859d2be13d`.
- O artefato público passou de 344 para 271 HTMLs. Workflow Pages `34879430518`: sucesso.

### E04-SERVICES-NAVIGATION-01

**Estado:** CONCLUÍDO E PUBLICADO.

- 257 arquivos e 1.017 ocorrências de navegação consolidados.
- Todas as páginas públicas mostram apenas **Serviços**, apontando para `industrial.html`.
- `residencial.html` é redirect legado `noindex,follow`, canonical para `industrial.html` e fora do sitemap.
- O quarto banner da home apresenta **Instrumentista sob demanda**.
- Nenhuma fórmula ou lógica JavaScript técnica foi alterada.

Commit: `2a047390f543d3a7a0469a3677f17c14fa0dcfeb`. Pages: `34885469337`.

### E04-INVENTORY-REGENERATION

Estado estrutural confirmado:

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

**Validação semântica dos H1:** nove ocorrências adicionais detectadas por contagem bruta estavam dentro de strings JavaScript que geram documentos independentes de impressão. O parser HTML e o artefato do Pages confirmaram somente um H1 no documento principal de cada página. Nenhuma calculadora ou rotina de impressão foi alterada por esse falso positivo.

### E04-GUIDE-NAVIGATION-01

**Estado:** CONCLUÍDO E PUBLICADO.

Páginas: `calculadora-erro-calibracao.html`, `checklist-comissionamento-hart.html`, `blog-vazao-normalizada-gases.html`, `calculadora-massa-tanque-nivel.html` e `blog-ar-instrumentos-qualidade-ponto-orvalho.html`.

Foram migrados 10 links para `/guia/` e removidos 5 atalhos sociais genéricos da Hotmart. Conteúdo técnico, fórmulas e JavaScript permaneceram inalterados.

Commit: `181a6ba8336eea2d7f4b9436786b7984e618cf9f`.

### E04-GUIDE-NAVIGATION-02

**Estado:** CONCLUÍDO, VALIDADO E PUBLICADO.

Páginas:

- `blog-calibracao-instrumentos-industriais.html`;
- `blog-erro-total-malha-instrumentacao.html`;
- `blog-fat-sat-instrumentacao.html`;
- `calculadora-diagnostico-4-20ma-hart.html`;
- `checklist-teste-de-loop.html`.

Foram migrados mais 10 links e removidos 5 atalhos sociais genéricos da Hotmart. Nenhuma fórmula ou lógica JavaScript técnica foi alterada.

Após o lote:

- restam 137 páginas-fonte com referência legada a Cursos;
- 102 delas são indexáveis;
- restam 128 páginas contendo Hotmart, a classificar por contexto;
- permanecem 221 indexáveis, 49 `noindex`, 221 URLs em sitemap e 88 carregadores diretos do AdSense.

Commit do conteúdo: `cd9fd790999f1a0d1622d2700903c503069465ab`.
Limpeza do workflow: `f5ab4a5b94e881bd4221eee780c78569e27e22d0`.
Validação atômica: `34887643566`.
GitHub Pages: `34887751809`, sucesso; artefato `10365801050`.
Relatório: `E04-GUIDE-NAVIGATION-02.md`.

## E05 — piloto editorial

**Estado:** EM EXECUÇÃO — PRIMEIRA PÁGINA CONCLUÍDA E PUBLICADA.

### Seleção do piloto

1. `blog-calibracao-valvula-controle.html` — **CONCLUÍDA**.
2. `blog-calibracao-instrumentos-industriais.html` — **PRÓXIMA PÁGINA**.

Relatório de seleção: `E05-PILOT-SELECTION.md`.

### E05-VALVE-CONTROL-PILOT-01

**Estado:** CONCLUÍDO, VALIDADO E PUBLICADO.

A página `blog-calibracao-valvula-controle.html` foi ampliada de 509 para **2.046 palavras visíveis**, sendo **1.999 palavras no conteúdo principal**.

Foram incorporados:

- fronteira entre comando, I/P ou posicionador, atuador, haste/eixo, feedback e processo;
- distinção entre verificação funcional, calibração, ajuste e manutenção;
- preparação segura e matriz de cinco pontos em subida e descida;
- exemplo numérico sem inventar tolerância ou aprovação universal;
- diferenciação entre banda morta, histerese, repetibilidade, `stiction` e oscilação;
- sequência de diagnóstico antes de ajustar o posicionador;
- registro `as-found`/`as-left` e limitações do teste;
- critérios prudentes para campo ou recebimento do equipamento;
- CTA comercial verdadeiro para avaliação, inspeção, diagnóstico, manutenção, configuração e conferência funcional sob proposta;
- aviso explícito de que certificado próprio, rastreabilidade ou ensaio formal dependem dos recursos e parceiros confirmados no escopo;
- FAQ visível e estruturado;
- referências oficiais BIPM/JCGM, Emerson e FieldComm Group.

Validação:

- 1 H1 e 14 H2;
- JSON-LD `BlogPosting` e `FAQPage` válidos;
- canonical correto;
- AdSense direto preservado;
- URL mantida no sitemap;
- nenhuma referência a `cursos.html` ou Hotmart;
- nenhuma fórmula ou lógica JavaScript técnica compartilhada alterada;
- decisão editorial alterada de `improve/P0/high` para `keep/P1/high`.

Commits:

- conteúdo: `59dffe7f590d15d3e9d2e341375b0e7e979c9e0c`;
- auditor com normalização de `/guia/`: `18f17dddda3b3d0249caf46202fff9e07acb169a`;
- inventário e relatório: `5c5c3acc32857ea15526f2396271f83de4ef2217`.

Workflows:

- validação e fechamento: `34889135920`, sucesso;
- GitHub Pages: `34889153902`, sucesso;
- artefato exato: `10366246367`, digest `sha256:1606ebd5665fa5ed1df60b2c307c1191a7bb2ad8e6a3a0c88af40ac822f3979d`.

O artefato implantado foi extraído e inspecionado. Título, conteúdo novo, CTA, referências, canonical, AdSense, H1/H2 e os dois JSON-LD foram confirmados. O navegador externo retornou apenas `cache miss` para a URL recém-publicada; não houve falha do repositório, do build ou da implantação.

Relatório: `E05-VALVE-CONTROL-PILOT-01.md`.

### Regras permanentes do piloto

- Revisar uma página por vez.
- Usar fontes oficiais e identificáveis.
- Preservar fórmulas, JavaScript técnico e travas de segurança.
- Não inventar equipe, experiência, bancada, padrão calibrado, rastreabilidade, acreditação ou emissão própria de certificado.
- Não estabelecer tolerância, periodicidade ou critério universal.
- Atualizar o inventário canônico depois de cada página.
- Validar HTML, canonical, H1, links, sitemap, responsividade e artefato publicado antes de avançar.
- Não solicitar nova análise ao AdSense durante o piloto.

### Próxima ação executável

Revisar `blog-calibracao-instrumentos-industriais.html` em lote separado, com:

1. conceitos de calibração, verificação e ajuste alinhados ao VIM;
2. relação clara entre erro observado, incerteza, tolerância e regra de decisão;
3. exemplo fictício completo com condição `as-found`, possível ajuste e condição `as-left`;
4. separação entre calibração em bancada, verificação em campo e teste de loop;
5. arquitetura de links para pressão, temperatura, vazão, nível, válvulas e analisadores;
6. fontes primárias e CTA comercial verdadeiro, sem promessa de certificado ou rastreabilidade não confirmada.

Depois da publicação e validação da página-pilar, consolidar o resultado do piloto E05 e definir o próximo lote editorial pelo inventário.

## E08-W1 — avisos compartilhados

Reproduzir em amostra representativa qualquer classificação genérica de avisos antes de alterar `app.js`. Não mexer no script compartilhado sem defeito reproduzido.

**Estado:** PENDENTE, sem bloqueio para E05.

## E06–E12

Seguir a ordem do plano atual: revisão do acervo, autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

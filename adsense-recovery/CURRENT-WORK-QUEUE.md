# ALOGY — fila operacional atual

> Versão 2026-09-14.14. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

## Regra permanente de navegação comercial

A navegação pública usa **uma única entrada `Serviços`**, apontando para `industrial.html`.

- Não restaurar os rótulos separados `Serviços Industriais` e `Serviços Residenciais`.
- Não usar a antiga frente residencial como posicionamento público da ALOGY.
- `residencial.html` é apenas rota legada `noindex,follow`, com canonical e redirecionamento para `industrial.html`; permanece fora do sitemap.
- Termos técnicos como instrumentação industrial, automação industrial e elétrica industrial continuam naturais no conteúdo e no SEO. A simplificação vale para a aba pública e para o posicionamento comercial consolidado.

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
- 0 duplicidades entre sitemaps;
- 88 páginas com carregador direto do AdSense;
- 268 decisões editoriais anteriores preservadas.

Commit do inventário canônico: `da2f61932a21c00741f418870601aafcb42deba6`.

**Pendência corrigida no controle:** a leitura direta do artefato Pages atual identificou **9 páginas indexáveis com dois elementos `<h1>`**, geralmente por versões de impressão. O campo H1 do CSV precisa ser recalculado globalmente, e as páginas devem ser corrigidas em lotes de até cinco sem alterar fórmulas ou JavaScript:

- `calculadora-atuador-pneumatico.html`;
- `calculadora-dimensionamento-cabos.html`;
- `calculadora-erro-calibracao.html`;
- `calculadora-erro-total-malha-instrumentacao.html`;
- `calculadora-pt100.html`;
- `calculadora-resistor-shunt-sinal-instrumentacao.html`;
- `calculadora-split-range-4-20ma.html`;
- `calculadora-termopar.html`;
- `calculadora-volume-tanque-vertical-horizontal.html`.

Não declarar novamente “zero H1 anômalo” até concluir essa correção e atualizar o inventário.

### E04-GUIDE-NAVIGATION-01

**Estado:** CONCLUÍDO E PUBLICADO.

Páginas: `calculadora-erro-calibracao.html`, `checklist-comissionamento-hart.html`, `blog-vazao-normalizada-gases.html`, `calculadora-massa-tanque-nivel.html` e `blog-ar-instrumentos-qualidade-ponto-orvalho.html`.

Foram migrados 10 links para `/guia/` e removidos 5 atalhos sociais genéricos da Hotmart. Conteúdo técnico, fórmulas e JavaScript permaneceram inalterados.

Commit: `181a6ba8336eea2d7f4b9436786b7984e618cf9f`. Validação: `34886365500`.

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
Árvore publicada/limpeza do workflow: `f5ab4a5b94e881bd4221eee780c78569e27e22d0`.
Validação atômica: `34887643566`.
GitHub Pages: `34887751809`, sucesso; artefato `10365801050`.
Relatório: `E04-GUIDE-NAVIGATION-02.md`.

## E05 — piloto editorial

**Estado:** EM EXECUÇÃO.

### Páginas selecionadas

1. `blog-calibracao-valvula-controle.html` — primeira revisão; página específica ligada a válvulas, atuadores e posicionadores.
2. `blog-calibracao-instrumentos-industriais.html` — segunda revisão; página-pilar de calibração e confiabilidade.

Relatório de seleção: `E05-PILOT-SELECTION.md`.

### Regras do piloto

- Revisar uma página por vez.
- Usar fontes oficiais e identificáveis.
- Preservar fórmulas, JavaScript técnico e travas de segurança.
- Não inventar equipe, experiência, bancada, padrão calibrado, rastreabilidade, acreditação ou emissão própria de certificado.
- Não estabelecer tolerância, periodicidade ou critério universal.
- Atualizar o inventário canônico depois de cada página.
- Validar HTML, canonical, H1, links, sitemap, responsividade e implantação publicada antes de avançar.
- Não solicitar nova análise ao AdSense durante o piloto.

### Próxima ação executável

Revisar `blog-calibracao-valvula-controle.html` com:

1. fronteira clara entre comando, posicionador, atuador, haste/eixo e feedback;
2. matriz de registro em subida e descida;
3. diferenciação prudente entre banda morta, histerese, `stiction` e repetibilidade;
4. sequência de diagnóstico sem ajuste prematuro;
5. referências primárias BIPM/JCGM, Emerson e exemplos registrados pela FieldComm Group;
6. CTA comercial verdadeiro para avaliação, manutenção, configuração e conferência funcional sob escopo.

A correção dos H1 duplicados pode avançar em lote técnico paralelo, sem bloquear a primeira página E05. Depois da publicação e validação da página de válvula, revisar a página-pilar em lote separado.

## E08-W1 — avisos compartilhados

Reproduzir em amostra representativa qualquer classificação genérica de avisos antes de alterar `app.js`. Não mexer no script compartilhado sem defeito reproduzido.

**Estado:** PENDENTE, sem bloqueio para E05.

## E06–E12

Seguir a ordem do plano atual: revisão do acervo, autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

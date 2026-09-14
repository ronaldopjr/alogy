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

**Estado:** CONCLUÍDO PARA AVANÇO AO E05. A higiene remanescente continua apenas em lotes pequenos e oportunos.

### E04-INVENTORY-HYGIENE-01

O artefato anterior tinha 344 HTMLs porque o Jekyll convertia 73 relatórios/controles Markdown internos em HTML público. Esses documentos não eram páginas editoriais da ALOGY.

- `_config.yml` passou a excluir controles, auditorias, relatórios internos, README e testes da publicação. Commit: `ddf9969a2c4f524a0a30b9b73f3f1ac2974ce967`.
- Seis duplicidades entre sitemaps foram removidas sem excluir páginas do conjunto publicado. Commit: `9f3d7422cb44249bc34abc62002184859d2be13d`.
- Workflow Pages `34879430518`: sucesso.

### E04-SERVICES-NAVIGATION-01

**Estado:** CONCLUÍDO E PUBLICADO.

- 257 arquivos atualizados e 1.017 ocorrências de navegação consolidadas.
- Todas as páginas públicas passaram a mostrar apenas **Serviços**, apontando para `industrial.html`.
- `residencial.html` passou a rota legada `noindex,follow`, canonical e redirecionamento para `industrial.html`.
- O quarto banner da home passou a apresentar **Instrumentista sob demanda**, com disponibilidade e escopo sob consulta.
- Nenhuma fórmula ou lógica JavaScript técnica foi alterada.

Commit: `2a047390f543d3a7a0469a3677f17c14fa0dcfeb`.
Workflow Pages: `34885469337`, sucesso.
Relatório: `E04-SERVICES-NAVIGATION-01.md`.

### E04-INVENTORY-REGENERATION

**Estado:** CONCLUÍDO.

O inventário canônico foi reconstruído diretamente dos HTMLs e sitemaps atuais, preservando decisões editoriais das URLs existentes.

Resultado validado:

- 271 HTMLs-fonte;
- 270 páginas/rotas editoriais e 1 arquivo de verificação Google;
- 221 páginas indexáveis;
- 49 rotas `noindex`;
- 221 URLs em sitemap;
- 0 indexáveis fora do sitemap;
- 0 páginas `noindex` no sitemap;
- 0 indexáveis sem canonical;
- 0 anomalias de H1 entre indexáveis;
- 0 duplicidades entre sitemaps;
- 88 páginas com carregador direto do AdSense;
- 268 linhas conservaram decisão editorial anterior.

Commit: `da2f61932a21c00741f418870601aafcb42deba6`.
Relatório: `E04-INVENTORY-REGENERATION.md`.

### E04-GUIDE-NAVIGATION-01

**Estado:** CONCLUÍDO E PUBLICADO.

Páginas:

- `calculadora-erro-calibracao.html`;
- `checklist-comissionamento-hart.html`;
- `blog-vazao-normalizada-gases.html`;
- `calculadora-massa-tanque-nivel.html`;
- `blog-ar-instrumentos-qualidade-ponto-orvalho.html`.

Foram migrados 10 links de menu para `/guia/` e removidos 5 atalhos sociais genéricos da Hotmart. Conteúdo técnico, fórmulas e JavaScript permaneceram inalterados.

Commit: `181a6ba8336eea2d7f4b9436786b7984e618cf9f`.
Relatório: `E04-GUIDE-NAVIGATION-01.md`.

### E04-GUIDE-NAVIGATION-02

**Estado:** CONCLUÍDO, VALIDADO E PUBLICADO.

Páginas:

- `blog-calibracao-instrumentos-industriais.html`;
- `blog-erro-total-malha-instrumentacao.html`;
- `blog-fat-sat-instrumentacao.html`;
- `calculadora-diagnostico-4-20ma-hart.html`;
- `checklist-teste-de-loop.html`.

Foram migrados mais 10 links de menu e removidos 5 atalhos sociais genéricos da Hotmart. Nenhuma fórmula ou lógica JavaScript técnica foi alterada.

Após o lote:

- restam 137 páginas-fonte com referência legada a Cursos;
- 102 delas são indexáveis;
- restam 128 páginas contendo Hotmart, ainda a classificar por contexto;
- permanecem 221 indexáveis, 49 `noindex`, 221 URLs em sitemap e 88 carregadores diretos do AdSense.

Commit do lote: `cd9fd790999f1a0d1622d2700903c503069465ab`.
Limpeza do workflow temporário: `f5ab4a5b94e881bd4221eee780c78569e27e22d0`.
Workflow Pages `34887751809`: sucesso.
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

Depois da publicação e validação, revisar a página-pilar em lote separado.

## E08-W1 — avisos compartilhados

Reproduzir em amostra representativa qualquer classificação genérica de avisos antes de alterar `app.js`. Não mexer no script compartilhado sem defeito reproduzido.

**Estado:** PENDENTE, sem bloqueio para E05.

## E06–E12

Seguir a ordem do plano atual: revisão do acervo, autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

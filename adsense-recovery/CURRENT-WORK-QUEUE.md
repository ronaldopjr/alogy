# ALOGY — fila operacional atual

> Versão 2026-09-15.28. Esta é a única fila executável. Filas anteriores são históricas.

## Regras permanentes

### Navegação comercial

- Usar uma única entrada pública **Serviços** apontando para `industrial.html`.
- Não restaurar `Serviços Industriais` e `Serviços Residenciais` como abas separadas.
- `residencial.html` permanece apenas como rota legada `noindex,follow`, canonical/redirecionamento para `industrial.html` e fora do sitemap.

### Guia x blog/ferramentas

- Artigos do blog e páginas de ferramentas não devem promover nem linkar diretamente o Guia no corpo editorial.
- O link global **Guia** pode permanecer no menu; não inserir `/guia/`, botão promocional, Cursos ou Hotmart no corpo desses lotes.
- Links legados são removidos apenas quando a página entra em lote seguro.

### Verdade comercial e segurança

- Motivo reportado pelo proprietário: **conteúdo de baixo valor**.
- Não solicitar nova análise do AdSense automaticamente.
- Não fazer `noindex` ou pruning em massa.
- Não inventar equipe, cases, clientes, depoimentos, certificações, equipamentos, laboratório, rastreabilidade, prazo ou capacidade técnica.
- A ALOGY ainda não possui padrão calibrado confirmado para sustentar emissão própria de laudo/certificado de calibração.
- Oferta segura: avaliação, inspeção, manutenção, configuração e conferência funcional; calibração, ensaio, rastreabilidade ou documentação específica somente quando recursos e parceiros estiverem confirmados na proposta.
- Não alterar fórmula ou JavaScript técnico sem defeito reproduzido e validação proporcional.
- Não editar automaticamente páginas `manual-review/P0`.
- Revisões editoriais extensas: uma página por lote.
- Nunca usar force push.

## E02–E05

- E02 busca/ferramentas: concluído e validado.
- E03 oferta comercial verdadeira: concluído no escopo inicial.
- E04 inventário/higiene: concluído para trabalho editorial; inventário canônico inicial `da2f61932a21c00741f418870601aafcb42deba6`.
- E05 piloto editorial: concluído com `blog-calibracao-valvula-controle.html` e `blog-calibracao-instrumentos-industriais.html` em `keep/P1/high`.

## E06 — revisão do acervo monetizado

**Estado:** EM EXECUÇÃO — DOZE PÁGINAS REVISADAS, PUBLICADAS E VALIDADAS.

| # | Página | Decisão | Commit de conteúdo |
|---|---|---|---|
| 01 | `blog-ar-instrumentos-qualidade-ponto-orvalho.html` | `keep/P1/high` | `4c4a51b7fd881a5252995dd00603ee04053daeb8` |
| 02 | `blog-solenoide-atuador-pneumatico-cv.html` | `keep/P1/high` | `3baa03d6832062d7d0fe24ec4ecae37cf96f0b59` |
| 03 | `blog-instrumentacao-industrial.html` | `keep/P1/high` | `794c5bd65cd80ce34b30f0ef83c1b422c5584ab5` |
| 04 | `blog-criticidade-instrumentos.html` | `keep/P1/high` | `95ea333e471f7e3d2518363794ca0215585ef6d8` |
| 05 | `blog-erro-total-malha-instrumentacao.html` | `keep/P1/high` | `41421244f4e6cce1e11d81fff25d4c79aaf93f2e` |
| 06 | `blog-fat-sat-instrumentacao.html` | `keep/P1/high` | `c9dc10756d8f5f42ef0388131caccbdee1e4f68c` |
| 07 | `blog-manutencao-preditiva-instrumentacao-sensores.html` | `keep/P1/high` | `3a9c7bb57ec195437bf93eba36fbd8dca3b2af7d` |
| 08 | `blog-massa-tanque-nivel.html` | `keep/P1/high` | `76e0832196a69242387dc35bef6c4051e08f02c0` |
| 09 | `blog-pressao-hidrostatica-densidade.html` | `keep/P1/high` | `e2bbc0c359b99b8e890a732da33c90d704151fc9` |
| 10 | `blog-selo-remoto-capilar-nivel.html` | `keep/P1/high` | `50b9e645ef4d6c5a9f8b2a6684bd547e850c1248` |
| 11 | `blog-potencia-bomba.html` | `keep/P1/high` | `af6f84bbac905b6888c63cf0d7c94da4e0023a5b` |
| 12 | `blog-gemeo-digital-tags-instrumentacao.html` | `keep/P1/high` | `2e091506da18f788757d1a424fd194228cb763b8` |

### Página 08 — massa em tanque por nível

- relatório: `E06-TANK-INVENTORY-ACERVO-08.md`;
- delta: `E06-INVENTORY-DELTA-08.csv`;
- relatório + delta: commit `5406c117d0b51ec952461a70ee31620b8f8d91a3`;
- Pages: run `34978266626`, build/deploy com sucesso;
- artefato: `10399778425`;
- digest: `sha256:0e3d8044e6a36547d311fb6292d8fc34c6e01e339f2c7c6608946f62fb26f669`;
- HTML: 23.639 bytes;
- SHA-256 do HTML: `d02475b3e3709c7a950b009321a94195d67ee3b9aa1b8e23c66c219004511d9f`;
- Git blob do artefato: `d996fce38459743ade60e08e552313cfd13d1d66`, igual ao blob do conteúdo versionado;
- 1.705 palavras visíveis / 1.654 no artigo;
- 1 H1 / 16 H2 / 4 H3;
- `BlogPosting` + `FAQPage`;
- canonical e AdSense preservados;
- sem `/guia/`, Hotmart ou rótulos separados de Serviços;
- nenhuma fórmula, calculadora ou JavaScript técnico compartilhado alterado;
- fontes primárias verificadas: ISO 7507-1:2003, ISO 7507-2:2022, Emerson Rosemount TankMaster e JCGM VIM3.

### Página 09 — pressão hidrostática, densidade e nível

- relatório: `E06-HYDROSTATIC-PRESSURE-DENSITY-ACERVO-09.md`;
- delta: `E06-INVENTORY-DELTA-09.csv`;
- relatório + delta: commit `fd32b44d6bdaae2a73e64372560ccccd6f018605`;
- conteúdo: commit `e2bbc0c359b99b8e890a732da33c90d704151fc9`;
- Pages: run `34984984363`, build/deploy com sucesso;
- artefato: `10403491616`;
- digest: `sha256:a64dc5963f5e2374fdce6a7d14c376d08af0f6b42f430b3ffd1285f8147dadfa`;
- domínio: HTTP 200, 25.075 bytes;
- SHA-256 do HTML servido: `c49a8658f490a6be865957e89a06f707cd6e00cd4c85ee5dcaa3bb349bbf5ccd`;
- Git blob do domínio: `ef5624a989e9e6476742b13894a0015c7aa60cc2`, igual ao blob do conteúdo versionado;
- 1.868 palavras visíveis / 1.851 no artigo;
- 1 H1 / 17 H2 / 4 H3;
- `BlogPosting` + `FAQPage`;
- canonical e AdSense preservados;
- menu global Guia preservado, sem CTA do Guia no corpo; sem Hotmart ou Cursos;
- nenhuma fórmula de calculadora ou JavaScript técnico compartilhado alterado;
- fontes primárias verificadas: Endress+Hauser 2026, Emerson DP Level, Emerson Density Measurement e BIPM SI Brochure 2026.

### Página 10 — selo remoto e capilar em nível DP

- relatório: `E06-REMOTE-SEAL-CAPILLARY-ACERVO-10.md`;
- delta: `E06-INVENTORY-DELTA-10.csv`;
- relatório + delta: commit `984241c40f34edf0528cb1bfbe5a0ebd58c84bd8`;
- conteúdo: commit `50b9e645ef4d6c5a9f8b2a6684bd547e850c1248`;
- Pages: run `34991433678`, build/deploy com sucesso;
- artefato: `10405678002`;
- digest: `sha256:a5adbb627328ee3e36c15364996d5534181762dab4aa104edc1be674e9e3dd2c`;
- domínio: HTTP 200, 25.222 bytes;
- SHA-256 do HTML servido: `0e613a058715d19e181672b32d3e7bf35827aea9231c406346e7296046c86e14`;
- Git blob do domínio: `b2b1e11652270ef4e5a8e6ffd2f1730bcc518a04`, igual ao blob do conteúdo versionado;
- 1.778 palavras visíveis / 1.725 no artigo;
- 1 H1 / 12 H2 / 0 H3;
- `BlogPosting` + `FAQPage`;
- canonical e AdSense preservados;
- menu global Guia preservado, sem CTA do Guia no corpo; sem Hotmart ou Cursos;
- cálculo de LRV/URV/span e ponto intermediário conferido independentemente;
- nenhuma fórmula de calculadora ou JavaScript técnico compartilhado alterado;
- fontes primárias verificadas: Emerson, Yokogawa, WIKA e BIPM.

### Página 11 — potência de motor de bomba

- relatório: `E06-PUMP-MOTOR-POWER-ACERVO-11.md`;
- delta: `E06-INVENTORY-DELTA-11.csv`;
- relatório + delta: commit `87754d133ee2670e1abf637979c7216bea5c87ab`;
- conteúdo: commit `af6f84bbac905b6888c63cf0d7c94da4e0023a5b`;
- Pages: run `34997876058`, build/deploy com sucesso;
- artefato: `10408442738`;
- digest: `sha256:fe9b6225f2edae8c17ef94b652165103ffd4fec32ea3b784ab8e635117e9dc20`;
- domínio: HTTP 200, 22.720 bytes;
- SHA-256 do HTML servido: `ddebae0d07448095da74be153a64471248538c446418fb2059d14cc042f32080`;
- Git blob do domínio: `13cf57b6de1683968a550fedd553058a0c1f2b32`, igual ao blob do conteúdo versionado;
- 1.630 palavras visíveis / 1.577 no artigo;
- 1 H1 / 13 H2 / 0 H3;
- `BlogPosting` + `FAQPage`;
- canonical, sitemap e AdSense preservados;
- menu global Guia preservado, sem CTA do Guia no corpo; sem Hotmart ou Cursos;
- cálculos de potência/corrente e leis de afinidade conferidos independentemente;
- nenhuma calculadora, fórmula ou JavaScript técnico compartilhado alterado;
- fontes primárias verificadas: DOE, Hydraulic Institute, WEG e ABB.

### Página 12 — governança de TAGs industriais

- relatório: `E06-TAG-GOVERNANCE-ACERVO-12.md`;
- delta: `E06-INVENTORY-DELTA-12.csv`;
- relatório + delta: commit `642f051bb70b848ac7db1c20f5cbdf2ba2009e0a`;
- conteúdo: commit `2e091506da18f788757d1a424fd194228cb763b8`;
- Pages: run `35022471938`, build/deploy com sucesso;
- artefato: `10418386243`;
- digest: `sha256:13ec1c4662ebdd2c0ad804ff97fc26fe5b2ea10f7fc094d67251b84d4ee7f05c`;
- domínio: HTTP 200, 24.122 bytes;
- SHA-256 do HTML servido: `5514716528277fdea638bb3ad516fc1af5d35cf22b910d7df6ed3857f17329ca`;
- Git blob do domínio: `94800b10238135d48b15515d1126c1232c088a48`, igual ao blob do conteúdo versionado;
- 1.769 palavras visíveis / 1.716 no artigo;
- 1 H1 / 15 H2 / 7 H3;
- `BlogPosting` + `FAQPage`;
- canonical, sitemap e AdSense preservados;
- menu global Guia preservado, sem CTA do Guia no corpo; sem Hotmart ou Cursos;
- cálculo didático 4–20 mA conferido: 12 mA = 500 kPa em 0–1.000 kPa;
- nenhuma fórmula de ferramenta ou JavaScript técnico compartilhado alterado;
- fontes primárias verificadas: OPC Foundation, W3C PROV, IDTA AAS e NIST.

### Pendência explícita do inventário

O `ADSENSE-INVENTORY.csv` canônico ainda não incorpora as decisões E06. Os arquivos `E06-INVENTORY-DELTA-01.csv` até `E06-INVENTORY-DELTA-12.csv` são a fonte incremental de verdade até existir mecanismo seguro de consolidação integral/patch.

Não substituir o CSV grande de forma parcial nem marcar a fusão como concluída sem validar o arquivo inteiro.

### Próxima ação executável

1. Reler `main`, `ADSENSE-STATE.json` e esta fila antes de qualquer escrita.
2. Selecionar a próxima página `improve/P0/high` por proximidade com Instrumentação Industrial e baixo risco editorial.
3. Priorizar conteúdo de instrumentação, diagnóstico, manutenção, medição e controle sem entrar em `manual-review/P0`.
4. Pesquisar fontes primárias atuais antes de editar.
5. Publicar uma página extensa por lote, validar GitHub Pages e o artefato exato.
6. Criar relatório e novo delta de inventário.
7. Atualizar `ADSENSE-STATE.json`, esta fila e gerar novo MD de continuidade.
8. Não solicitar nova análise do AdSense.

## E08-W1 — avisos compartilhados

Pendente, sem bloqueio para E06. Antes de alterar `app.js`, reproduzir o problema em amostra representativa. Não mexer em script compartilhado sem defeito reproduzido.

## E07–E12

Após avanço suficiente do acervo: autoria/transparência, mobile/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta. E11 continua proibida sem autorização explícita do proprietário.

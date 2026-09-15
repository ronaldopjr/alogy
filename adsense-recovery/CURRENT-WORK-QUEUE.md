# ALOGY — fila operacional atual

> Versão 2026-09-14.23. Esta é a única fila executável. Filas anteriores são históricas.

## Regras permanentes

### Navegação comercial

- Usar uma única entrada pública **Serviços** apontando para `industrial.html`.
- Não restaurar `Serviços Industriais` e `Serviços Residenciais` como abas separadas.
- `residencial.html` permanece apenas como rota legada `noindex,follow`, canonical/redirecionamento para `industrial.html` e fora do sitemap.

### Guia x blog/ferramentas

- Artigos do blog e páginas de ferramentas não devem promover nem linkar diretamente o Guia.
- Não inserir `/guia/`, botão Guia, Cursos ou Hotmart nesses lotes.
- Links legados são removidos apenas quando a página entra em lote seguro.

### Verdade comercial e segurança

- Motivo reportado pelo proprietário: **conteúdo de baixo valor**.
- Não solicitar nova análise do AdSense automaticamente.
- Não fazer `noindex` ou pruning em massa.
- Não inventar equipe, cases, clientes, depoimentos, certificações, equipamentos, laboratório, rastreabilidade, prazo ou capacidade técnica.
- A ALOGY ainda não possui padrão calibrado confirmado para sustentar emissão própria de laudo/certificado de calibração.
- Oferta segura: avaliação, inspeção, manutenção, configuração e conferência funcional; calibração, ensaio, rastreabilidade ou documentação específica somente quando recursos e parceiros forem confirmados na proposta.
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

**Estado:** EM EXECUÇÃO — SETE PÁGINAS REVISADAS, PUBLICADAS E VALIDADAS.

| # | Página | Decisão | Commit de conteúdo |
|---|---|---|---|
| 01 | `blog-ar-instrumentos-qualidade-ponto-orvalho.html` | `keep/P1/high` | `4c4a51b7fd881a5252995dd00603ee04053daeb8` |
| 02 | `blog-solenoide-atuador-pneumatico-cv.html` | `keep/P1/high` | `3baa03d6832062d7d0fe24ec4ecae37cf96f0b59` |
| 03 | `blog-instrumentacao-industrial.html` | `keep/P1/high` | `794c5bd65cd80ce34b30f0ef83c1b422c5584ab5` |
| 04 | `blog-criticidade-instrumentos.html` | `keep/P1/high` | `95ea333e471f7e3d2518363794ca0215585ef6d8` |
| 05 | `blog-erro-total-malha-instrumentacao.html` | `keep/P1/high` | `41421244f4e6cce1e11d81fff25d4c79aaf93f2e` |
| 06 | `blog-fat-sat-instrumentacao.html` | `keep/P1/high` | `c9dc10756d8f5f42ef0388131caccbdee1e4f68c` |
| 07 | `blog-manutencao-preditiva-instrumentacao-sensores.html` | `keep/P1/high` | `3a9c7bb57ec195437bf93eba36fbd8dca3b2af7d` |

### Página 07 — condition monitoring e sensores

- relatório: `E06-CONDITION-MONITORING-ACERVO-07.md`, commit `92f02b8b4e4d5af686d32f3b7df82f1d0ff57eb3`;
- delta: `E06-INVENTORY-DELTA-07.csv`, commit `04b673746dc4c225bfc89fa987c891a407a962c9`;
- Pages: run `34923087323`, sucesso;
- artefato: `10378693305`;
- digest: `sha256:1ba2d81af4cb448572fb693dec76e886e3aea176ceeb8b49bd6cf8e8cdf85d96`;
- HTML: 25.697 bytes;
- SHA-256 do HTML: `21e41b2dcd1dccbef43014a18d43a551ba04f346a661ff4bcd290b8c9badf3f1`;
- 1.907 palavras visíveis / 1.860 no artigo;
- 1 H1 / 15 H2;
- `BlogPosting` + `FAQPage`;
- canonical, AdSense e sitemap preservados;
- HTML publicado idêntico byte a byte ao candidato;
- sem `/guia/`, Hotmart ou rótulos separados de Serviços;
- nenhuma fórmula ou JavaScript técnico compartilhado alterado;
- fontes primárias: ISO 17359:2018 e NIST;
- baseline, qualidade do sinal, contexto operacional, exemplo fictício P-201 e limites de diagnóstico documentados.

### Pendência explícita do inventário

O `ADSENSE-INVENTORY.csv` canônico ainda não incorpora as decisões E06. Os arquivos `E06-INVENTORY-DELTA-01.csv` até `E06-INVENTORY-DELTA-07.csv` são a fonte incremental de verdade até existir mecanismo seguro de consolidação integral/patch.

Não substituir o CSV grande de forma parcial nem marcar a fusão como concluída sem validar o arquivo inteiro.

### Próxima ação executável

1. Reler `main`, `ADSENSE-STATE.json` e esta fila antes de qualquer escrita.
2. Selecionar a próxima página `improve/P0/high` por proximidade com Instrumentação Industrial e baixo risco editorial.
3. Priorizar conteúdo que fortaleça instrumentação, diagnóstico e manutenção sem entrar em `manual-review/P0`.
4. Pesquisar fontes primárias atuais antes de editar.
5. Publicar uma página extensa por lote, validar GitHub Pages e o artefato exato.
6. Criar relatório e novo delta de inventário.
7. Atualizar `ADSENSE-STATE.json`, esta fila e o MD de continuidade.
8. Não solicitar nova análise do AdSense.

## E08-W1 — avisos compartilhados

Pendente, sem bloqueio para E06. Antes de alterar `app.js`, reproduzir o problema em amostra representativa. Não mexer em script compartilhado sem defeito reproduzido.

## E07–E12

Após avanço suficiente do acervo: autoria/transparência, mobile/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta. E11 continua proibida sem autorização explícita do proprietário.

# E02 — correção da busca da central de ferramentas

**Data:** 14/09/2026  
**Repositório:** `ronaldopjr/alogy`  
**SHA de base:** `734559b163b01b3e1bd95d07380cbfd33b241332`  
**Arquivos de site alterados:** `style.css`  
**Commit de publicação:** `eec58b20b6de6d8de827cf1f9f623b2987827bb2`

## Problema reproduzido

O filtro de `ferramentas.html` aplicava `style="display: none"` aos cartões sem correspondência. A regra global `.tools-page .tool-group .tool-card { display:flex!important; }` prevalecia sobre esse estado. Assim, a busca por “PT100” informava um resultado, mas os nove cartões do grupo Instrumentação continuavam renderizados.

## Correção

Foi adicionada uma regra CSS limitada à central de ferramentas para que o estado `display:none` aplicado pelo filtro prevaleça sobre o layout flex. O JavaScript da busca, fórmulas, links, metadados, cards e regras de grade não foram alterados.

O blob original de `style.css` foi reproduzido byte a byte antes da edição (`050c87e5e37ef709f0f7f026bce215c28676a7a4`). A mudança é somente aditiva.

## Validação local

A cascata foi renderizada com o estado real que o filtro aplica aos cartões, em larguras de 1200 px e 390 px.

| Cenário | Antes | Depois | Aceite |
|---|---:|---:|---|
| `PT100` | 9 cartões renderizados | 1 | aprovado |
| termo inexistente | 0 | 0 + mensagem vazia | aprovado |
| limpar busca | 30 | 30 | aprovado |
| `valvula` sem acento | 15 cartões dos grupos correspondentes | 2 cartões com “Válvula” | aprovado |

Também foram confirmados:

- CSS analisado sem erro de sintaxe;
- regra nova não altera as declarações de grade para desktop/tablet/celular;
- todo o conteúdo original de `style.css` permanece na mesma ordem;
- grupos sem correspondência continuam ocultos pela lógica existente.

## Avisos compartilhados

A busca de código desta etapa não retornou ocorrência atual de `inferSeverity` ou `installDynamicReadout`. Como isso não substitui um teste comportamental do `app.js`, a verificação foi registrada como `E08-W1`. Nenhuma alteração foi feita no script compartilhado sem defeito reproduzido.

## Publicação e limite da conferência

A correção está em `main` e o domínio responde com a central atual. O ambiente de leitura web disponível nesta execução não executa a busca JavaScript, portanto o comportamento interativo no domínio ainda não foi marcado como conferido. Isso não invalida os testes locais; apenas mantém a distinção entre código publicado e teste de produção.

**Estado de E02:** `PUBLICADO — FALTA CONFERIR`.

## Próxima ação

Abrir a central no domínio em navegador real e repetir os quatro cenários. Se passarem, marcar E02 como concluída e executar E03: revisar as promessas comerciais de calibração e registrar as capacidades reais sem inventar bancada, equipe, credenciais ou rastreabilidade.

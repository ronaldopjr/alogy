# ALOGY — Dimensionamento de Cabos: disjuntor recomendado na tabela geral

Data: 2026-06-30  
Arquivo alterado: `calculadora-dimensionamento-cabos.html`

## Objetivo

Atender ao ajuste solicitado: colocar o `Disjuntor recomendado` também na tabela geral/comparativa de seções comerciais, sem alterar outras páginas, URLs, fórmulas principais ou estrutura do site.

## Alteração aplicada

Foi adicionada uma nova coluna na tabela `Comparativo de seções comerciais`:

- `Disjuntor recomendado`

Antes a tabela exibia:

- Seção;
- Iz corrigida;
- ΔV;
- Curto;
- Perda anual;
- Status.

Agora exibe:

- Seção;
- Iz corrigida;
- Disjuntor recomendado;
- ΔV;
- Curto;
- Perda anual;
- Status.

## Como o disjuntor aparece na tabela

Para cada seção comercial da tabela, a ferramenta calcula a proteção preliminar usando a função já existente `breakerInfo(I, Iz)`, seguindo a mesma lógica usada no resultado principal:

- se o usuário informou um disjuntor/fusível previsto, a tabela mostra esse valor como informado e verifica se atende preliminarmente;
- se o usuário deixou `0`, a tabela sugere um disjuntor padrão da lista interna;
- se não houver disjuntor padrão que atenda simultaneamente `Ib ≤ In ≤ Iz`, a tabela mostra `revisar`.

## Pequena correção associada

O status de cada linha da tabela agora também considera se o disjuntor daquela linha atende preliminarmente. Assim, uma linha não aparece como `Atende` se a seção passa em corrente/queda/curto, mas não possui proteção preliminar compatível na lista interna.

## O que não foi alterado

- Não alterei `ferramentas.html`.
- Não alterei `sitemap.xml`.
- Não alterei `style.css`.
- Não alterei `app.js`.
- Não alterei blogs.
- Não alterei outras ferramentas.
- Não alterei URL.
- Não alterei os campos do formulário.
- Não removi botões.
- Não removi o botão flutuante `Voltar para Ferramentas`.
- Não removi a coluna `Perda anual`, porque o pedido foi para mexer somente no disjuntor recomendado na tabela geral.

## Avaliação geral da ferramenta após o ajuste

A ferramenta está bem estruturada para pré-dimensionamento orientativo:

- possui modo básico e avançado;
- mantém botões no topo e no final;
- exibe seção pelo cálculo e cabo recomendado;
- aplica premissa de seção mínima por uso;
- mostra disjuntor recomendado no resultado principal;
- agora também mostra disjuntor recomendado na tabela geral;
- mantém relatório técnico e cópia de relatório;
- mantém verificações de corrente, queda, curto-circuito, proteção, PE, neutro, tipo de cabo, método de instalação e partida de motor.

## Pontos de atenção que permanecem

A ferramenta continua sendo de apoio/preliminar. Para projeto real, ainda é necessário validar:

- tabelas oficiais da NBR 5410;
- dados do fabricante do cabo;
- método real de instalação;
- agrupamento real;
- temperatura ambiente;
- curto-circuito disponível;
- curva e capacidade de interrupção da proteção;
- seletividade;
- queda acumulada desde a origem;
- partida de motores;
- responsabilidade técnica.

## Validações feitas

- JavaScript validado com `node --check`.
- Simulação local básica executada.
- Confirmado que a tabela geral passou a conter a coluna `Disjuntor recomendado`.
- Confirmado que o resultado principal continua exibindo `Disjuntor recomendado`.
- Confirmado que o botão flutuante `Voltar para Ferramentas` foi preservado.
- Confirmado que o arquivo alterado é somente `calculadora-dimensionamento-cabos.html`.

## Como subir

Para menor risco, subir somente:

```text
calculadora-dimensionamento-cabos.html
```

Substituir o arquivo existente na raiz do site, junto de `index.html`, `ferramentas.html` e `blog.html`.

O relatório `.md` é apenas para conferência e não precisa ser enviado para produção.

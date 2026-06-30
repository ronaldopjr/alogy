# ALOGY — Revisão de Dimensionamento de Cabos: botões, disjuntor e seção mínima

Data: 2026-06-30  
Arquivo alterado: `calculadora-dimensionamento-cabos.html`

## Objetivo

Revisar a ferramenta de Dimensionamento de Cabos sem alterar a URL e sem mexer nas demais páginas do site.

## Correções aplicadas

- Mantidos os botões principais no topo da ferramenta.
- Adicionados/garantidos no topo: `Imprimir`, `Imprimir relatório`, `Copiar relatório`, `Calcular dimensionamento`, `Limpar` e `Carregar exemplo`.
- Mantidos botões de relatório junto ao resultado.
- Mantidos botões finais no fim da ferramenta para facilitar o uso após revisar os resultados.
- Corrigida a apresentação do `Disjuntor recomendado`, agora com nota explicando quando ele atende preliminarmente `Ib ≤ In ≤ Iz` ou quando precisa revisão.
- Removida da interface a parte de `Economia e relatório ambiental`, conforme solicitado.
- Removidos do relatório técnico os blocos de economia anual e CO₂.
- Incluída a exibição separada de:
  - `Seção pelo cálculo`;
  - `Cabo recomendado`;
  - `Seção mínima por uso`.
- Incluída premissa normativa/prática para recomendar no mínimo `2,5 mm²` em tomadas, força e potência em cobre, mesmo quando o cálculo térmico/queda permitir seção menor.
- Mantida premissa de `1,5 mm²` para iluminação em cobre.
- Mantida triagem diferenciada para comando/instrumentação e alumínio.
- Mantidas as validações de tipo de cabo, método de instalação, partida de motor, curto-circuito, queda de tensão, PE e neutro.

## Observação sobre norma brasileira

A ferramenta continua sendo de pré-dimensionamento. Ela cita caminhos normativos da NBR 5410 de forma orientativa, sem reproduzir tabelas oficiais. A validação final deve ser feita com a norma vigente, tabelas oficiais, catálogo do fabricante, proteção, seletividade, curto-circuito, queda de tensão, instalação real e responsabilidade técnica.

A revisão da NBR 5410 está em andamento/publicação futura conforme fontes públicas do setor. Portanto, a ferramenta foi mantida como apoio alinhado à prática normativa brasileira atual, mas não substitui a consulta oficial à ABNT.

## Validações feitas

- JavaScript validado com `node --check`.
- Simulação local básica executada com `calcCB()`.
- Verificado que `Disjuntor recomendado` aparece no resultado.
- Verificado que `Seção pelo cálculo` e `Cabo recomendado` aparecem separadamente.
- Botão flutuante `Voltar para Ferramentas` preservado.
- Nenhuma URL alterada.
- Nenhum blog alterado.
- Nenhuma outra ferramenta alterada.

## Arquivos alterados

- `calculadora-dimensionamento-cabos.html`

## Como subir

Para menor risco, subir somente:

```text
calculadora-dimensionamento-cabos.html
```

Substituir o arquivo existente na raiz do site, junto de `index.html`, `ferramentas.html` e `blog.html`.

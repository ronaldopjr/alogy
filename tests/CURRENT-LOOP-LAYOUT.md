# Padrão piloto das ferramentas — 4–20 mA

Publicado a pedido do proprietário em 23/09/2026. O piloto afeta somente `calculadora-4-20ma.html` e `4-20ma-calculator.html`.

## Estrutura para as próximas ferramentas

- Área útil de até 1240 px, com margens laterais. Cabeçalho compacto, título e descrição breve.
- Configuração à esquerda; resultado e exploração visual à direita. Abaixo de 760 px, sequência em uma coluna.
- Resultado com unidade explícita, estado da faixa e visualização que acompanha os campos.
- Exemplos dentro de uma seção recolhível, sem consumir uma coluna inteira.
- Navegação de retorno sempre para `ferramentas.html`.
- Barra inferior com retorno e ações; Imprimir e PDF à direita. Contatos pequenos no desktop e disponíveis no rodapé mobile.
- Chamada contextual ao Guia após a calculadora, com acesso à apresentação e à compra. Inglês avisa que o produto é em português.
- Tabela copiável, explicação, fórmulas, exemplo, FAQ, limites e referências abaixo da ferramenta.
- Autoria organizacional e data editorial no final. Não atribuir revisão humana que não ocorreu.

## Implementação

`tool-workbench.css` contém a fundação visual. Não carregar o `app.js` geral neste piloto: ele injeta conteúdo, estilos e ações de outros modelos. Menu e acessibilidade desta página estão em `calculator-4-20ma.js`; o cálculo compartilhado está em `calculator-4-20ma-core.js`.

A faixa é definida pelos valores **em 4 mA** e **em 20 mA**, inclusive quando é decrescente. A amplitude exibida é `abs(URV - LRV)`. O cálculo utiliza a diferença com sinal. Entradas fora da faixa são extrapolação matemática, sem diagnóstico automático de falha. O gráfico nominal não finge que um ponto externo está dentro da escala.

Ao trocar o modo de entrada, preservar o ponto físico. Entradas vazias, texto malformado, intervalo zero e estouro numérico limpam os resultados e desabilitam exportação. Vírgula e ponto decimais são aceitos; agrupamentos de milhar não são inferidos.

Imprimir abre um documento neutro `about:blank`, com título sem marca, sem scripts e recursos de terceiros. PDF usa um instantâneo do cálculo, é gerado no dispositivo e carrega o `pdf-lib` já existente somente quando solicitado. Nenhum dado de cálculo é enviado ao servidor. A impressão manual do navegador também tem uma folha de estilo neutra, mas cabeçalhos e rodapés do navegador continuam sob controle do usuário.

As versões possuem HTML estático próprio, canonical para si mesmas, `lang`, `hreflang` recíproco, descrição, dados estruturados e entrada no sitemap. Não existe redirecionamento automático de idioma. O nome e preço do produto não são inventados; a oferta é consultada na página do Guia/checkout.

## Validação

Rodar `node tests/current-loop.cjs`: formatos numéricos, pontos 4/8/12/16/20 mA, todos os modos, faixas negativas/invertidas, extrapolação, intervalo zero, entradas inválidas, overflow e 200 conversões de ida e volta.

Verificar visualmente desktop e larguras 320/360/390/768 px; teclado no slider, menu mobile, cópia, PDF e impressão; ausência de rolagem horizontal, sobreposição de ações e marca nos relatórios. Testar PDF em português, inglês, faixa invertida e extrapolação. Não chamar a validação de responsividade de teste em aparelho físico.


### Resultado da conferência publicada

- Testes matemáticos e checagem de sintaxe passaram.
- Navegador em desktop e áreas de visualização de 320, 360, 390 e 768 px: sem overflow horizontal no documento. Menu mobile e atalhos de porcentagem operantes.
- Troca de modo preservou 5,5 bar = 12,8 mA = 55%; entrada de 125% identificada como extrapolação; faixa zero apagou resultados/tabela e bloqueou PDF.
- Copiar tabela produziu TSV com as nove linhas e os valores da faixa atual.
- Download real de PDF pela página confirmado; arquivo de uma página, com 8,4 mA = 2,75 bar, sem nome/logo/marca na extração e nos metadados.
- Botão de impressão abriu relatório separado com título neutro em about:blank. Cabeçalhos e rodapés gerados pelo navegador dependem das preferências locais, sem endereço do site na janela do relatório.
- Português e inglês acessíveis em URLs próprias. A página temporária de revisão responsiva foi removida ao concluir a conferência.

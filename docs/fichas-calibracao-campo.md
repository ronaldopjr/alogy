# Fichas de coleta de calibração

Quatro páginas independentes, acessíveis pela central de calibração, pelo catálogo de ferramentas e pelas calculadoras correspondentes:

- `ficha-calibracao-temperatura.html`
- `ficha-calibracao-pressao.html`
- `ficha-calibracao-ph.html`
- `ficha-calibracao-vazao.html`

O fluxo principal é definir pontos, baixar/imprimir uma folha e preencher no campo. O preenchimento digital é opcional. As fichas usam JavaScript e CSS próprios e não dependem do código das calculadoras existentes.

## Comportamento

- De 2 a 50 pontos equidistantes incluindo os extremos; atalhos de 3, 4, 5, 6 e 10 pontos, passo percentual ou lista personalizada. Dez pontos representam nove intervalos; passo de 10% representa onze pontos.
- pH usa os valores dos tampões escolhidos, com identificação/lote, validade, referência documental e temperatura da solução. A lista inicial é um exemplo editável.
- Uma a cinco leituras por ponto; subida, descida ou ambas. As leituras de referência e instrumento começam em branco.
- Temperatura e umidade ambiente inicial/final e horários sempre constam em cada página da folha.
- A4 paisagem, paginação automática, sem logo ou divulgação comercial no documento. O PDF direto e a impressão usam os mesmos elementos de desenho.
- Exportação em branco ou com leituras digitadas. Médias e diferença indicação menos referência consideram apenas pares completos.
- Rascunho local por grandeza, backup JSON, restauração e duplicação para outro TAG. Alterar pontos, unidade ou condição pede confirmação antes de limpar leituras e identificação dos tampões. Alterar somente casas decimais preserva medições.
- Sem cálculo completo de incerteza, decisão automática de conformidade ou certificado. A ficha organiza a coleta de acordo com o procedimento escolhido pelo executante.

`pdf-lib` 1.17.1 está incluído localmente, com sua licença MIT em `assets/fichas/vendor`. É carregado somente ao baixar PDF; não depende de CDN. Dados são processados no aparelho.

## Verificação realizada em 23/09/2026

Execute na raiz do repositório:

```sh
node tests/field-sheets.cjs
node tests/field-sheets-state.cjs
```

Os testes passaram: geração de pontos, entradas inválidas, vírgula decimal, médias sem tratar vazios como zero, exportação em branco/preenchida, 108 cenários de paginação, salvamento imediato, restauração, preservação das leituras ao mudar precisão, limites ambientais, duplicação e proteção dos dados de tampões.

Os quatro PDFs padrão foram gerados pelo código de produção e examinados por extração de texto e renderização. Cada configuração inicial coube em uma folha A4, com campos ambientais e sem ALOGY. A renderização foi conferida com PyMuPDF, pois o Poppler disponível substituiu inadequadamente a fonte Helvetica.

`node tests/tool-calculations.cjs` apresenta falha preexistente em `calibracao-valvula-controle`, campo `valor`. A mesma falha foi reproduzida com os arquivos originais do commit base `3ed4c8b1641bbf4dcdfa90d68856f6a256b4ea21`.

## Verificação visual pendente antes de publicar

Não foi possível executar um navegador neste ambiente: o Playwright está instalado, mas o navegador não está disponível e seu download retornou uma página de indisponibilidade. Os testes de estado usam uma simulação do DOM; não comprovam layout, impressão do navegador ou interação em aparelho real.

Servir a raiz com `python -m http.server 8765` e verificar no navegador:

1. As quatro páginas em 360, 390, 430 e 1366 pixels; confirmar ausência de rolagem horizontal no formulário, abertura das seções e facilidade de preenchimento.
2. Temperatura de 0 a 500, com 4, 5, 6 e 10 pontos. Verificar lista personalizada, faixa negativa e passo de 10%.
3. Digitar leituras, recarregar, baixar/abrir backup e trocar de TAG. Cancelar uma alteração dos pontos e confirmar que os dados permanecem.
4. Abrir a prévia, baixar PDF e imprimir em A4 paisagem. Conferir 5 pontos, 10 pontos e subida/descida com cinco leituras, incluindo observações longas. Desativar cabeçalho/rodapé do navegador.
5. Na ficha de pH, preencher tampões e temperatura da solução. Confirmar que a ficha em branco preserva identificação dos tampões e omite as medições.
6. Confirmar os quatro links no catálogo e na central, incluindo pesquisa/filtros existentes.

A alteração deve permanecer em pull request de rascunho até essa revisão visual.

# Fichas de coleta de calibração

Cinco páginas independentes, acessíveis pela central de calibração, pelo catálogo de ferramentas e pelas calculadoras correspondentes:

- `ficha-calibracao-temperatura.html`
- `ficha-calibracao-pressao.html`
- `ficha-calibracao-ph.html`
- `ficha-calibracao-vazao.html`
- `ficha-calibracao-balanca.html`

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

## Histórico e roteiro de verificação visual

Não foi possível executar um navegador neste ambiente: o Playwright está instalado, mas o navegador não está disponível e seu download retornou uma página de indisponibilidade. Os testes de estado usam uma simulação do DOM; não comprovam layout, impressão do navegador ou interação em aparelho real.

Servir a raiz com `python -m http.server 8765` e verificar no navegador:

1. As quatro páginas em 360, 390, 430 e 1366 pixels; confirmar ausência de rolagem horizontal no formulário, abertura das seções e facilidade de preenchimento.
2. Temperatura de 0 a 500, com 4, 5, 6 e 10 pontos. Verificar lista personalizada, faixa negativa e passo de 10%.
3. Digitar leituras, recarregar, baixar/abrir backup e trocar de TAG. Cancelar uma alteração dos pontos e confirmar que os dados permanecem.
4. Abrir a prévia, baixar PDF e imprimir em A4 paisagem. Conferir 5 pontos, 10 pontos e subida/descida com cinco leituras, incluindo observações longas. Desativar cabeçalho/rodapé do navegador.
5. Na ficha de pH, preencher tampões e temperatura da solução. Confirmar que a ficha em branco preserva identificação dos tampões e omite as medições.
6. Confirmar os quatro links no catálogo e na central, incluindo pesquisa/filtros existentes.

A primeira versão foi publicada por solicitação expressa do proprietário, no PR #45. As limitações da verificação visual foram comunicadas antes da publicação.


## Revisão e balança — 23/09/2026

O proprietário pediu revisão completa, alinhamento ao layout das ferramentas antigas e uma ficha de balança. Este lote mantém o formulário de campo e reaproveita `style.css`, a marcação do cabeçalho preto, menu azul, links, ações de contato e rodapé das calculadoras existentes. Os complementos CSS das fichas são isolados por classe. A navegação móvel inclui estado acessível, fechamento por link, clique externo e Escape. A folha impressa continua neutra, sem marca e com condições ambientais.

Correções incluídas:

- Cartões antigos após alteração de pontos enquanto havia um campo inválido: falha reproduzida no Chrome e coberta por teste de regressão.
- Importação rejeita linhas de pontos inexistentes, sentidos incompatíveis, leituras extras e datas/horários malformados, preservando o rascunho atual.
- Uma aba não sobrescreve silenciosamente o rascunho alterado por outra. Falhas no armazenamento não são seguidas por mensagens falsas de sucesso.
- Listas manuais são ordenadas para subida e descida; “Sequência informada” conserva a ordem digitada.
- PDF informa faixa, datas brasileiras e rótulos pertinentes a cada grandeza; observações preservam parágrafos. Caracteres incompatíveis com a fonte do PDF direto geram orientação para impressão pelo navegador, em vez de substituição silenciosa por interrogações.
- Proteção contra downloads duplicados e melhoria de quebra de textos no formulário.

A ficha de balança oferece indicação por carga, repetibilidade e excentricidade. Capacidade e cargas são validadas; repetibilidade e excentricidade mantêm a carga selecionada e criam uma linha por ciclo/posição, sem preencher leituras automaticamente. Campos de pesos/documentos, tara, zero inicial e retorno ao zero complementam a identificação. Os ensaios são registros independentes: guardar backup antes de trocar o ensaio. Não há aprovação automática, correção automática de zero, incerteza completa ou declaração de verificação legal.

Referência consultada para organizar os tipos de ensaio: [OIML R 76-1, edição 2006, Anexo A](https://www.oiml.org/en/files/pdf_r/r076-1-e06.pdf). As cargas, posições e repetições dependem do procedimento aplicado; os valores da interface são exemplos editáveis.

Validação local: testes de geração e 135 cenários de paginação das cinco áreas; testes de estado, recuperação, conflitos entre abas e modos da balança; PDFs padrão e extensos gerados e conferidos. Os cinco padrões cabem em uma folha; documentos extensos usam continuação com identificação e ambiente em todas as páginas.

Acesso ao Chrome remoto foi obtido para a revisão da interface desktop. A superfície disponível não expõe emulação mobile; a tentativa de abrir um arquivo de ensaio local foi rejeitada pela política de navegação. Não houve contorno desse bloqueio. A revisão de CSS usa os mesmos estilos responsivos existentes no site; interação em aparelho móvel real e impressão física seguem como verificações adicionais.

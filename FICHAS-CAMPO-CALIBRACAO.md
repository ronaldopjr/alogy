# Fichas de campo de calibração

Implementação de 22/09/2026, baseada na proposta de produto revisão 04.

## Entradas

- `ficha-calibracao-temperatura.html`
- `ficha-calibracao-pressao.html`
- `ficha-calibracao-ph.html`
- `ficha-calibracao-vazao.html`

Acesso pela central de ferramentas e pelo hub de calibração. As calculadoras anteriores e seus endereços foram preservados. As páginas de coleta não carregam `app.js`, anúncios nem analytics; dados do serviço ficam no localStorage do próprio navegador ou no backup exportado pelo usuário.

## Comportamento

A preparação exige apenas faixa/unidade/pontos nas grandezas lineares. Quantidade e passo percentual são modos distintos; valores nominais usam a posição não arredondada. Os pontos podem ser editados. pH usa tampões cadastrados, sem gerar referências a partir de percentuais.

As séries preservam canal, sentido e condição antes/depois separados. Cada repetição tem referência e indicação independentes; a referência só é repetida mediante ação do usuário. As médias e diferenças usam pares completos. Campo vazio não vale zero. Correções do padrão são somente registradas: não são aplicadas automaticamente.

A folha preparada para campo omite as medições e observações por ponto, mesmo quando há coleta digital. A exportação preenchida inclui dados brutos e resumos. Todas as páginas, inclusive continuações, repetem identificação, série, unidade e condições ambientais. A impressão usa A4 com margem de 10 mm. O modelo compartilhado alimenta prévia, CSS de impressão e PDF; não há logo ou promoção na folha. A biblioteca PDF local mantém sua licença em `vendor/`.

Rascunho separado por grandeza, retomada explícita, exportação/importação de JSON versionado e duplicação com limpeza dos dados de coleta. Operações que substituem medições pedem confirmação. Falhas de armazenamento aparecem na interface; o backup continua disponível. Não há promessa de funcionamento offline ou certificado/conformidade calculados.

## Verificação

- `node tests/field-sheet-core.cjs`: distribuição de 4/5/6/10 pontos, passo de 10%, faixa negativa, vírgula, entradas inválidas, zero versus vazio e médias pareadas.
- `node tests/field-sheets-browser.cjs`: requer Playwright; aceita `BROWSER_EXECUTABLE_PATH` para Chromium e `QA_OUTPUT` para os arquivos temporários. Exercita as quatro páginas em 360/390/430/1280 px, coleta, impressão/PDF em branco e preenchidos, rascunho, backup, duplicação, séries e falha de armazenamento.
- `node tests/navigation.cjs`: passou após a integração dos atalhos.
- Inspeção visual de telas e PDFs; conferência de A4, cabeçalhos ambientais e ausência de marca nas páginas, inclusive continuações. Temperatura com cinco pontos e três repetições cabe em uma página quando os dados adicionais estão vazios.
- A suíte preexistente `tests/tool-calculations.cjs` falha no teste de campo vazio `valor` da calculadora `calibracao-valvula-controle`. A mesma falha foi reproduzida em uma cópia limpa do commit-base `3ed4c8b1641bbf4dcdfa90d68856f6a256b4ea21`, sem estas mudanças.

A revisão móvel usa emulação de viewport em Chromium; não substitui testes físicos em todos os navegadores de celular. A impressão do navegador requer desativar seus cabeçalhos/rodapés para retirar URL e data automáticos. O botão de PDF não inclui esses elementos.

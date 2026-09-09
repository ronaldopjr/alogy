# Revisão das ferramentas — 09/09/2026

## Escopo e resultado

- Inventário: 222 ferramentas e 7 páginas de categorias vinculadas no diretório.
- Conferência estrutural de todas as ferramentas: arquivos presentes e 222 blocos JavaScript sem erro de sintaxe.
- Revisão funcional aprofundada e correções em 28 calculadoras de instrumentação, calibração, elétrica e automação.
- 692 cenários de entrada inválida rejeitados nas 23 calculadoras que receberam validação compartilhada, além dos cenários numéricos, limites de tolerância, recuperação após erro e bloqueio de cópia inválida.
- Regressões anteriores de 4–20 mA, Pt100, termopares e incerteza: 152 verificações aprovadas no código deste lote.
- Menu, carrossel e formulário continuam passando nos testes existentes. O controle de rotação agora alterna ícones de pausa e reprodução, com nome acessível e descrição ao passar o mouse.
- A verificação estrutural do site não apontou novos links internos quebrados, recursos ausentes ou erros de JSON-LD. Os redirecionamentos e o arquivo de verificação Google mantêm as exceções documentadas na auditoria anterior.

## Correções realizadas

| Grupo | Ferramentas | Correção principal |
|---|---|---|
| Sinais | Conversão de sinais industriais; histerese de pressostato/termostato | Campo vazio não vira zero; escalas sem amplitude são rejeitadas; ação de alta/baixa e unidade da histerese coerentes. |
| Pressão e nível | Pressão hidrostática/densidade; selo remoto/capilar DP | Validação de densidade, gravidade, span e limites; resultados anteriores são limpos quando a entrada é inválida. |
| Temperatura | Emissividade; tempo de resposta de termopoço | Emissividade fora de 0–1 e temperaturas impossíveis são rejeitadas. Termopoço usa τ informado, sem fatores arbitrários de geometria/fluido; t95 = −ln(0,05)τ e t99 = −ln(0,01)τ. |
| Vazão | Rotâmetro | Separa vazão volumétrica de operação e vazão referida às condições de calibração para o mesmo gás ideal, com pressões absolutas e temperaturas em kelvin. |
| Calibração | Indicador/controlador; termostato; pressostato; chaves de nível e fluxo; balança | Validação de entradas e tolerâncias; quantidade de células inteira; erros acima do limite passam a ser explicitamente classificados como fora do limite, sem zona artificial de 25%. |
| Calibração de vazão e nível | Magnético; Coriolis; ultrassônico; totalizador; radar/ultrassônico de nível | Classificação coerente com a tolerância informada. Coriolis usa kg/h e kg. Radar considera também o erro da saída em mA convertido para unidade de nível. |
| Válvula e periodicidade | Calibração de válvula; intervalo por deriva | Impede comando fora da faixa e cópia de resultado antigo. Deriva usa a margem restante a partir do último erro; deriva nula resulta em prazo indeterminado. |
| Automação | UPS 24 Vcc; polling Modbus; transmissão serial; fonte 24 Vcc de painel | Rendimento até 100%; contagens inteiras; leitura FC03/FC04 de 1–125 registros; intervalos RTU considerados. Fonte não indica tamanho insuficiente quando a demanda ultrapassa a tabela. |
| Elétrica | Corrente trifásica; correção de FP; queda de tensão CA; queda de tensão 24 Vcc | Dados inválidos não são substituídos silenciosamente por padrões. Corrente após correção de FP considera o banco selecionado. Sem banco, não há alteração artificial de corrente. |

A validação compartilhada é aplicada explicitamente às páginas revisadas, sem alterar fórmulas das demais ferramentas. As mensagens aparecem junto aos campos; entradas inválidas recebem identificação acessível. As cópias das páginas com essa validação incluem entradas e resultados, em vez de trechos do menu ou conteúdo genérico. O botão de cópia recalcula antes de exportar e informa falha se a área de transferência estiver indisponível.

## Referências consultadas

- [Modbus Serial Line — formato RTU, 11 bits e intervalos entre quadros](https://modbus.org/file/secure/modbusoverseriallegacy.pdf), seções 2.5.1 e 2.5.1.1.
- [Modbus Application Protocol — FC03 e FC04](https://modbus.org/file/secure/modbusprotocolspecification.pdf), seções 6.3 e 6.4.
- [Brooks Instrument — correções em medidores de área variável](https://www.brooksinstrument.com/variable-area-flowmeter-gas-correction-factors). A condição de referência da escala é essencial; o modelo local é simplificado e restrito ao mesmo gás ideal.
- [ILAC-G24:2022 / OIML D 10:2022](https://www.oiml.org/fr/publications/documents/en/files/pdf_d/d010-e22.pdf), sobre revisão de intervalos com histórico, risco e características do equipamento. A projeção local de deriva não é apresentada como fórmula normativa.

## Testes reproduzíveis

```sh
node tests/tool-calculations.cjs
node tests/navigation.cjs
node tests/contact.cjs
```

O teste das calculadoras executa o JavaScript real em ambiente isolado com elementos simulados. Inclui carga nominal, campos vazios, texto inválido, infinito, recuperação, divisão por zero, fronteiras de tolerância, inversão de escala, unidades de massa/vazão, resposta de primeira ordem, estimativas de tempo, capacidade da fonte e cópia.

## Limites desta revisão

A conferência estrutural das 222 ferramentas não equivale à validação técnica de todas as fórmulas. A revisão aprofundada deste lote abrange as 28 calculadoras acima. As demais mantêm o código existente e não receberam certificação de exatidão.

O padrão de celular foi preservado: uma coluna nos formulários abaixo de 760 px, controles de pelo menos 48 px e tabelas com o tratamento responsivo existente. Não houve teste visual em navegador, ensaio em equipamento real nem validação de desempenho em campo. As verificações numéricas cobrem os cenários registrados nos testes, não todas as combinações possíveis.

As fotografias, banners, página do Guia e identidade visual aprovados foram preservados. As ferramentas revisadas que ainda tinham o rótulo antigo de navegação passaram a apontar para “Guia”.

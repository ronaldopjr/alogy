# ALOGY — Etapa 28 — Instrumentação analítica e medidores de processo

## Objetivo

Revisar, de forma conservadora, um lote de ferramentas de instrumentação analítica e medidores de processo, preservando o que já funcionava e aplicando apenas melhorias coerentes de validação, leitura numérica e prevenção de resultados falsos.

Base utilizada:

- `alogy-main-etapa-27-calibracao-metrologia.zip`

## Escopo alterado

Foram alteradas somente páginas individuais de ferramentas:

1. `calculadora-calibracao-phmetro.html`
2. `calculadora-calibracao-transmissor-orp.html`
3. `calculadora-calibracao-condutivimetro.html`
4. `calculadora-slope-sonda-ph.html`
5. `calculadora-orp-mv-percentual.html`
6. `calculadora-condutividade-tds.html`
7. `calculadora-calibracao-medidor-vazao-magnetico.html`
8. `calculadora-calibracao-medidor-vazao-coriolis.html`
9. `calculadora-calibracao-medidor-vazao-ultrassonico.html`
10. `calculadora-calibracao-totalizador-vazao.html`
11. `calculadora-calibracao-radar-ultrassonico-nivel.html`

## Itens preservados

Não foram alterados:

- home;
- página industrial;
- página residencial;
- `ferramentas.html`;
- `app.js`;
- `style.css`;
- URLs;
- categorias;
- SEO;
- blogs.

## Melhorias aplicadas

### 1. Leitura de número no padrão brasileiro

Foi reforçada a leitura numérica para aceitar melhor entradas como:

- `12,5`
- `0,85`
- `1.234,56`

A melhoria foi aplicada dentro das ferramentas do lote, sem criar dependência global e sem alterar a estrutura do site.

### 2. Bloqueio de divisões por zero e dados impossíveis

Foram adicionadas validações para impedir cálculo com dados incoerentes, como:

- dois buffers de pH iguais;
- temperatura menor ou igual a -273,15 °C;
- slope de pH igual ou menor que zero;
- escala ORP com mínimo igual ao máximo;
- condutividade padrão igual a zero;
- leitura de condutividade igual a zero;
- K-factor igual a zero;
- vazão de referência igual a zero;
- volume ou massa de referência igual a zero;
- tempo de ensaio igual a zero;
- altura de tanque igual a zero;
- distância maior que a altura útil do tanque;
- LRV igual a URV.

### 3. Medidor Coriolis — correção de coerência de unidade

Na tabela do medidor Coriolis, a linha de média calculada a partir da totalização estava sendo exibida como se fosse vazão volumétrica em `m³/h`, embora a totalização estivesse em `kg`.

Foi ajustado para:

- `Vazão mássica média pelo total`
- unidade `kg/h`

A lógica do cálculo foi preservada: total dividido pelo tempo em horas.

### 4. Radar/ultrassônico de nível — melhor aproveitamento da corrente medida

A ferramenta já recebia o campo de corrente medida em mA. Nesta etapa, o resultado passou também a mostrar o erro de saída em mA, junto com o erro de nível.

Isso melhora a conferência de campo sem alterar a fórmula principal de conversão distância/nível.

## Fórmulas

As fórmulas principais foram preservadas.

As alterações foram concentradas em:

- parsing numérico;
- validação de entrada;
- prevenção de divisão por zero;
- mensagens de revisão técnica;
- coerência de unidade no Coriolis;
- exibição auxiliar de erro de corrente no radar/ultrassônico.

## Validação executada

- `node --check app.js`: aprovado.
- Verificação de sintaxe dos scripts alterados: 11/11 aprovados.
- Testes numéricos e de validação: 20/20 aprovados.
- Links internos locais nas páginas alteradas: 0 quebrados.

## Resultado

A etapa foi concluída sem alteração em páginas comerciais, categorias, SEO ou estrutura global.

O lote ficou mais robusto contra entradas incoerentes e mais adequado ao uso prático de instrumentação analítica e medidores de processo.

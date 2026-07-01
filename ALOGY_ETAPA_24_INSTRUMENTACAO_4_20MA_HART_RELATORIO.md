# ALOGY — Etapa 24

## Auditoria e melhoria controlada — Instrumentação 4-20 mA e HART

Base utilizada: **Etapa 23 — auditoria de instrumentação**.

Esta etapa manteve foco exclusivo nas ferramentas de instrumentação ligadas a sinais **4-20 mA**, **HART**, escala, carga de malha, raiz quadrada e split range.

## Escopo aplicado

Foram revisadas 7 páginas:

1. `calculadora-4-20ma.html`
2. `calculadora-carga-malha-4-20ma.html`
3. `calculadora-diagnostico-4-20ma-hart.html`
4. `calculadora-malha-4-20ma-hart-completa.html`
5. `calculadora-raiz-quadrada-4-20ma.html`
6. `calculadora-split-range-4-20ma.html`
7. `calculadora-comprimento-cabo-hart.html`

## Regra de segurança adotada

- Não alterar fórmulas que já estavam coerentes.
- Não alterar URLs.
- Não alterar `ferramentas.html`.
- Não alterar home, página industrial ou página residencial.
- Não alterar `app.js`.
- Aplicar melhoria somente quando fosse pequena, segura e coerente.

## Melhorias realizadas

### 1. Entrada numérica no padrão brasileiro

As páginas revisadas passaram a aceitar melhor valores como:

- `12,5`
- `0,85`
- `1.234,56`

Antes, algumas ferramentas usavam `Number()` ou `parseFloat()` diretamente. Isso podia gerar resultado inválido, parcial ou zerado quando o usuário digitava vírgula decimal.

### 2. Campos numéricos convertidos para entrada decimal flexível

Os campos revisados deixaram de depender de `type="number"`, pois esse tipo pode rejeitar vírgula decimal em vários navegadores.

Agora foi mantido `inputmode="decimal"`, permitindo teclado numérico no celular, mas com leitura mais adequada para o padrão brasileiro.

### 3. Validação mais clara em ferramentas HART e 4-20 mA

Foram adicionadas proteções para evitar resultados aparentemente válidos quando os dados não fazem sentido, por exemplo:

- fonte menor ou igual à tensão mínima do transmissor;
- escala com LRV igual ao URV;
- corrente máxima igual ou menor que zero;
- resistência de cabo igual ou menor que zero;
- capacitância máxima menor que capacitância já existente;
- spans de split range iguais a zero;
- vazão máxima igual ou menor que zero em cálculo de raiz quadrada.

### 4. Comprimento máximo de cabo HART

A ferramenta de comprimento de cabo HART passou a tratar melhor dados inválidos e evita divisões por zero ou resultados infinitos quando:

- corrente informada é zero;
- resistência do cabo é zero;
- capacitância do cabo é zero;
- a fonte não possui margem real;
- a capacitância máxima não comporta a capacitância de equipamento/barreira.

### 5. Raiz quadrada 4-20 mA

Foi adicionada validação para vazão máxima maior que zero e leitura com vírgula decimal.

A fórmula principal foi preservada:

```text
%DP = ((mA - 4) / 16) × 100
%Vazão = √(%DP / 100) × 100
Vazão = Vazão máxima × √(%DP / 100)
```

### 6. Split range 4-20 mA

Foi adicionada validação para evitar cálculo com spans nulos ou entradas inválidas.

A lógica principal foi preservada:

```text
Comando % = (sinal - sinal 0%) / (sinal 100% - sinal 0%) × 100
Abertura local = posição do comando dentro da faixa configurada da válvula
```

## Fórmulas alteradas?

Não houve reescrita de fórmula principal.

As fórmulas foram mantidas e receberam apenas:

- melhoria na leitura dos valores;
- validação de entrada;
- prevenção de resultado falso em cenário inválido.

## Validação numérica executada

Foram executados 8 checks numéricos curados:

| Ferramenta | Teste | Resultado |
|---|---|---|
| 4-20 mA linear | 500 em escala 0-1000 = 12 mA / 50% | OK |
| Parser decimal | `1.234,56` = `1234.56` | OK |
| Carga de malha | exemplo 24 V, 12 V, 250 Ω, 100 Ω, 39 Ω/km, 200 m | OK |
| Diagnóstico 4-20 mA/HART | 12 mA = 50%, carga 500 Ω, margem 1 V | OK |
| Malha completa 4-20 mA/HART | LT-101 padrão, corrente normal 12 mA | OK |
| Raiz quadrada | 12 mA = 50% DP = 70,71% vazão | OK |
| Split range | 12 mA com A 0-50% e B 50-100% | OK |
| Comprimento HART | exemplo padrão limitado por capacitância | OK |

## Validação técnica

| Verificação | Resultado |
|---|---:|
| Arquivos HTML alterados | 7 |
| Fórmulas principais reescritas | 0 |
| Validações adicionadas/reforçadas | 5 |
| Checks numéricos executados | 8 |
| Checks numéricos aprovados | 8 |
| Scripts inline verificados com `node --check` | 7 |
| Scripts inline aprovados | 7 |
| `app.js` alterado | Não |
| `app.js` com erro de sintaxe | Não |
| Links internos nas páginas alteradas | 167 |
| Links internos quebrados | 0 |
| Home alterada | Não |
| Página industrial alterada | Não |
| Página residencial alterada | Não |

## Próxima etapa recomendada

A próxima etapa deve continuar no foco definido:

**Etapa 25 — automação, CLP e redes industriais**

Sugestão de primeiro lote:

- `calculadora-escala-clp.html`
- `calculadora-io-clp.html`
- `calculadora-resolucao-cartao-analogico.html`
- `calculadora-modbus.html`
- `calculadora-modbus-polling.html`
- `calculadora-tempo-varredura-modbus-rtu.html`
- `calculadora-ip-rede-industrial.html`
- `calculadora-ups-automacao-clp-instrumentos.html`

Regra recomendada: manter o mesmo padrão desta etapa — revisar, testar e corrigir apenas o que for claro, pontual e seguro.

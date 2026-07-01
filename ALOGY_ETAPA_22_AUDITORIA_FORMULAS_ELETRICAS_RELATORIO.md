# ALOGY — Etapa 22 — Auditoria e correção controlada de fórmulas elétricas críticas

## Base usada

Esta etapa foi executada a partir da **Etapa 21 — teste prático das ferramentas críticas**.

## Escopo

O objetivo foi revisar um lote pequeno de ferramentas elétricas críticas, confirmar coerência de fórmulas e corrigir somente erros claros, evitando alterações amplas que poderiam degradar ferramentas já funcionais.

## Regras adotadas

- Não alterar home, página industrial ou página residencial.
- Não alterar categorias da página `ferramentas.html`.
- Não alterar URLs.
- Não criar ferramentas novas.
- Não reescrever páginas inteiras.
- Corrigir fórmula somente quando o erro fosse objetivo.
- Registrar as correções no relatório.

## Ferramentas auditadas neste lote

1. `calculadora-disjuntor-protecao.html`
2. `calculadora-dimensionamento-cabos.html`
3. `calculadora-queda-de-tensao.html`
4. `calculadora-queda-tensao-24vcc.html`
5. `calculadora-curto-circuito-transformador.html`
6. `calculadora-corrente-partida-motor.html`
7. `calculadora-partida-estrela-triangulo-corrente.html`
8. `calculadora-queda-tensao-partida-motor.html`
9. `calculadora-desequilibrio-tensao-motor.html`
10. `calculadora-kva-transformador-carga.html`
11. `calculadora-thd-distorcao-harmonica.html`
12. `calculadora-correcao-fator-potencia.html`

## Correções aplicadas

### 1. Calculadora de Disjuntor e Proteção Elétrica

Arquivo alterado:

- `calculadora-disjuntor-protecao.html`

#### Problema encontrado

Na opção **Potência ativa (kW)**, a ferramenta calculava corrente dividindo a potência por **FP × rendimento**.

Isso é inadequado quando o campo representa potência ativa elétrica em kW, porque a corrente deve ser calculada por:

```text
Ib = P / (raiz(3) × V × FP)
```

O rendimento deve ser aplicado apenas quando a entrada representa potência mecânica de motor, como CV ou HP.

#### Correção feita

Para entrada em kW:

```text
Antes: Ib = kW × 1000 / (raiz(3) × V × FP × rendimento)
Depois: Ib = kW × 1000 / (raiz(3) × V × FP)
```

Para entrada em CV/HP, o rendimento continua sendo aplicado:

```text
Ib = potência mecânica convertida para kW / rendimento / (raiz(3) × V × FP)
```

#### Ajuste adicional de robustez

O campo de rendimento agora aceita os dois formatos:

```text
0,90
90
```

A ferramenta normaliza automaticamente valores acima de 1,5 como percentual.

Exemplo:

```text
90 → 0,90
```

Também foi ajustado o texto do campo para deixar claro que o rendimento se aplica ao motor.

---

### 2. Calculadora de Corrente de Partida de Motor

Arquivo alterado:

- `calculadora-corrente-partida-motor.html`

#### Ajuste feito

O campo:

```text
Potência do motor (kW)
```

foi ajustado para:

```text
Potência mecânica do motor (kW)
```

#### Motivo

A fórmula da ferramenta já usa rendimento, portanto o valor informado é tratado como potência mecânica do motor. O ajuste evita que o usuário informe potência elétrica por engano.

Nenhuma fórmula foi alterada nesta ferramenta.

---

### 3. Calculadora de Queda de Tensão na Partida de Motor

Arquivo alterado:

- `calculadora-queda-tensao-partida-motor.html`

#### Ajuste feito

O campo de fator de potência na partida foi identificado como informativo na estimativa simplificada por kVA aparente.

O texto da ferramenta foi ajustado para deixar claro que a queda estimada usa:

```text
Scc = Strafo × 100 / Z%
Spartida = raiz(3) × V × Ipartida / 1000
Queda aproximada = Spartida / Scc × 100
```

O fator de potência informado passa a aparecer na observação como dado que deve ser considerado em estudo completo com impedância da rede, mas não foi usado para alterar o critério simplificado da ferramenta.

## Fórmulas auditadas e consideradas coerentes neste lote

| Ferramenta | Status |
|---|---|
| Queda de tensão | Coerente para estimativa por resistência/reatância do cabo |
| Dimensionamento de cabos | Coerente como pré-dimensionamento com critérios térmico, queda, curto e seção mínima |
| Queda 24 Vcc | Coerente para ida e volta em corrente contínua |
| Curto-circuito em transformador | Coerente para estimativa por impedância percentual |
| Corrente de partida de motor | Coerente considerando potência mecânica, rendimento, FP e multiplicador de partida |
| Partida estrela-triângulo | Coerente para estimativa de corrente de linha aproximadamente 1/3 da partida direta |
| Queda de tensão na partida | Coerente como estimativa simplificada por potência de curto-circuito aparente |
| Desequilíbrio de tensão em motor | Coerente para triagem por desvio máximo sobre tensão média |
| kVA de transformador por carga | Coerente para pré-dimensionamento por kW, FP, demanda e margem |
| THD | Coerente para THD por soma quadrática das harmônicas RMS |
| Correção de fator de potência | Coerente por diferença de tangentes entre FP atual e desejado |

## Testes numéricos executados

Foram executados 12 testes de referência registrados no arquivo:

```text
ALOGY_ETAPA_22_AUDITORIA_FORMULAS_ELETRICAS_VALIDACAO.json
```

Exemplos de validação:

| Caso | Resultado esperado |
|---|---:|
| Disjuntor — 10 kW, 380 V, FP 0,80 | 18,99 A |
| Disjuntor — motor 10 CV, FP 0,86, rendimento 90% | 14,44 A |
| Curto em transformador 500 kVA, 380 V, Z 5,5% | 13.812 A |
| Motor 55 kW, partida direta 7x | 739 A de partida |
| Estrela-triângulo In 100 A, 7x | 233 A em estrela |
| THD fundamental 100, harmônicas 5/3/2 | 6,16% |
| Correção FP 100 kW, 0,82 para 0,95 | 36,93 kVAr |

## Validação técnica

| Verificação | Resultado |
|---|---:|
| Ferramentas auditadas | 12 |
| Arquivos HTML alterados | 3 |
| Fórmulas corrigidas | 1 |
| Ajustes de clareza técnica | 2 |
| Home alterada | Não |
| Página industrial alterada | Não |
| Página residencial alterada | Não |
| URLs alteradas | 0 |
| Erro de sintaxe em `app.js` | 0 |
| Erro de sintaxe nos scripts alterados | 0 |
| Testes numéricos com sucesso | 12/12 |

## Arquivos alterados

- `calculadora-disjuntor-protecao.html`
- `calculadora-corrente-partida-motor.html`
- `calculadora-queda-tensao-partida-motor.html`
- `ALOGY_ETAPA_22_AUDITORIA_FORMULAS_ELETRICAS_RELATORIO.md`
- `ALOGY_ETAPA_22_AUDITORIA_FORMULAS_ELETRICAS_VALIDACAO.json`

## Próxima recomendação

A próxima etapa deve continuar em lote pequeno:

**Etapa 23 — auditoria técnica de fórmulas de instrumentação crítica**

Sugestão de ferramentas para o próximo lote:

- malha 4-20 mA HART;
- cabo de instrumentação 24 Vcc;
- fonte 24 Vcc para painel de automação;
- carga de malha 4-20 mA;
- resistor shunt;
- LRV/URV/span;
- raiz quadrada 4-20 mA;
- nível DP;
- placa de orifício/vazão DP;
- Cv/Kv de válvula de controle.

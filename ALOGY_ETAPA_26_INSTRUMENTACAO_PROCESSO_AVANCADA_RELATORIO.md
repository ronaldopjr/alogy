# ALOGY — Etapa 26

## Instrumentação avançada de processo — auditoria e melhorias controladas

Base utilizada: **Etapa 25 — automação, CLP e redes industriais**.

## Objetivo

Dar continuidade ao aperfeiçoamento das ferramentas, com foco em instrumentação de processo avançada:

- nível por pressão hidrostática e DP;
- tanque pressurizado por DP;
- placa de orifício e vazão por DP;
- Cv/Kv de válvulas;
- cavitação e válvulas de controle;
- atuadores pneumáticos e tempo de atuação.

A regra aplicada foi conservadora: **não reescrever fórmulas principais sem erro confirmado**. As melhorias foram aplicadas principalmente em validação de entrada, leitura de número no padrão brasileiro e prevenção de resultado falso quando os dados informados são incoerentes.

## Arquivos alterados

Foram alteradas somente páginas individuais de ferramentas:

1. `calculadora-nivel-dp-tanque-pressurizado.html`
2. `calculadora-nivel-pressao-hidrostatica.html`
3. `calculadora-placa-orificio-vazao-dp.html`
4. `calculadora-placa-orificio-restricao.html`
5. `calculadora-cv-valvula-controle.html`
6. `calculadora-cv-kv-valvula-controle.html`
7. `calculadora-atuador-pneumatico.html`
8. `calculadora-solenoide-atuador-pneumatico.html`
9. `calculadora-tempo-atuacao-valvula.html`

## Arquivos não alterados

Não foram alterados:

- `index.html`;
- `industrial.html`;
- `residencial.html`;
- `ferramentas.html`;
- `app.js`;
- `style.css`;
- páginas de blog;
- categorias;
- URLs.

## Melhorias aplicadas

### 1. Leitura de número no padrão brasileiro

Foi adicionada leitura mais robusta para entradas como:

- `12,5`;
- `0,85`;
- `1.234,56`.

Isso reduz erro em ferramentas nas quais o usuário brasileiro tende a digitar vírgula decimal.

### 2. Nível por DP e pressão hidrostática

Ferramentas envolvidas:

- `calculadora-nivel-dp-tanque-pressurizado.html`;
- `calculadora-nivel-pressao-hidrostatica.html`.

Melhorias:

- parser numérico mais robusto;
- validação de cápsula DP maior que zero;
- alerta para nível normal fora de 0 a 100%;
- alerta para alarmes fora de 0 a 100%;
- proteção contra campos numéricos principais inválidos.

Não houve reescrita da fórmula hidrostática.

### 3. Placa de orifício e vazão por DP

Ferramentas envolvidas:

- `calculadora-placa-orificio-vazao-dp.html`;
- `calculadora-placa-orificio-restricao.html`.

Melhorias:

- parser numérico mais robusto;
- validação de `kappa > 1` em gás/vapor;
- validação para impedir `ΔP` maior ou igual à pressão absoluta de entrada em gás/vapor;
- impedimento de cálculo com diâmetro, vazão, densidade, Cd ou DP incoerentes;
- tratamento de beta igual ou maior que 1 como condição de revisão.

As fórmulas principais de vazão por orifício foram preservadas.

### 4. Cv/Kv e válvulas

Ferramentas envolvidas:

- `calculadora-cv-valvula-controle.html`;
- `calculadora-cv-kv-valvula-controle.html`.

Melhorias:

- parser numérico mais robusto;
- validação de fator Z maior que zero para gás/vapor;
- validação de temperatura acima de -273,15 °C;
- preservação da lógica de cálculo de Cv/Kv já existente.

### 5. Atuadores pneumáticos e tempo de atuação

Ferramentas envolvidas:

- `calculadora-atuador-pneumatico.html`;
- `calculadora-solenoide-atuador-pneumatico.html`;
- `calculadora-tempo-atuacao-valvula.html`.

Melhorias:

- parser numérico mais robusto;
- validação de diâmetro do pistão e pressão maiores que zero;
- validação de haste menor que o pistão para cilindro dupla ação;
- validação de volume/pressão/queda de pressão na ferramenta de solenóide;
- impedimento de cálculo de tempo de atuação com tempo esperado ou medido igual a zero;
- remoção de mascaramento por valores mínimos artificiais onde isso poderia esconder entrada inválida.

## Validação executada

Arquivo de validação gerado:

`ALOGY_ETAPA_26_INSTRUMENTACAO_PROCESSO_AVANCADA_VALIDACAO.json`

Resumo:

| Item | Resultado |
|---|---:|
| Arquivos alterados | 9 |
| Checks numéricos executados | 14 |
| Checks numéricos aprovados | 14 |
| Scripts inline verificados | 9 |
| Scripts inline aprovados | 9 |
| `node --check app.js` | aprovado |
| Links quebrados nas páginas alteradas | 0 |
| `index.html` alterado | não |
| `industrial.html` alterado | não |
| `residencial.html` alterado | não |
| `ferramentas.html` alterado | não |

## Observação técnica

Esta etapa não transforma as ferramentas em substituto de projeto, memorial oficial, laudo, ART ou validação por fabricante. O objetivo foi melhorar a coerência operacional e reduzir erro de uso, preservando as ferramentas que já funcionavam.

## Próxima etapa recomendada

**Etapa 27 — calibração e metrologia de instrumentação**, com foco em:

- erro de calibração;
- incerteza;
- TUR/TAR;
- transmissor de pressão;
- transmissor de temperatura;
- manômetro;
- pressostato;
- transmissor de nível DP;
- transmissor DP para vazão;
- medidores de vazão magnético, coriolis e ultrassônico.

Mesma regra: testar, corrigir apenas erro confirmado e aplicar melhorias pequenas quando forem seguras.

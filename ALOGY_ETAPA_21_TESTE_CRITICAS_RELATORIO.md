# ALOGY — Etapa 21 — Teste prático das ferramentas críticas

## Base usada

Esta etapa foi feita a partir da **Etapa 20 — ajustes editoriais da página de ferramentas**, para manter o foco exclusivamente nas ferramentas.

## Escopo desta etapa

A etapa foi propositalmente limitada para evitar estragar o que já estava funcionando.

Foi permitido:

- testar um lote pequeno de ferramentas críticas;
- revisar coerência básica de resultados;
- validar se as saídas principais aparecem;
- revisar a leitura dinâmica do resultado;
- aplicar apenas correção pontual, se fosse clara e segura.

Não foi permitido:

- alterar fórmulas de cálculo;
- alterar campos;
- alterar unidades;
- alterar URLs;
- alterar `ferramentas.html`;
- alterar home, página industrial ou página residencial;
- mudar layout geral;
- revisar as 232 ferramentas de uma vez.

## Ferramentas testadas neste lote

Foram testadas 12 ferramentas críticas iniciais:

| # | Ferramenta | Arquivo |
|---:|---|---|
| 1 | Queda de tensão | `calculadora-queda-de-tensao.html` |
| 2 | Dimensionamento de cabos | `calculadora-dimensionamento-cabos.html` |
| 3 | Disjuntor de proteção | `calculadora-disjuntor-protecao.html` |
| 4 | Curto-circuito em transformador | `calculadora-curto-circuito-transformador.html` |
| 5 | Cabo de instrumentação 24 Vcc | `calculadora-cabo-instrumentacao-24vcc.html` |
| 6 | Fonte 24 Vcc para painel de automação | `calculadora-fonte-24vcc-painel-automacao.html` |
| 7 | Malha 4-20 mA HART completa | `calculadora-malha-4-20ma-hart-completa.html` |
| 8 | Nível DP em tanque pressurizado | `calculadora-nivel-dp-tanque-pressurizado.html` |
| 9 | Placa de orifício para vazão por DP | `calculadora-placa-orificio-vazao-dp.html` |
| 10 | Cv/Kv de válvula de controle | `calculadora-cv-kv-valvula-controle.html` |
| 11 | Barreira intrínseca em área classificada | `calculadora-barreira-intrinseca-area-classificada.html` |
| 12 | LOPA simplificada | `calculadora-lopa-simplificada.html` |

## Validação de coerência feita

Foram conferidos cálculos amostrais independentes nas ferramentas em que a fórmula principal é mais direta de validar por leitura de código e dados padrão:

| Ferramenta | Conferência feita | Resultado |
|---|---|---|
| Queda de tensão | corrente, queda em V e queda percentual | OK |
| Curto-circuito de transformador | corrente nominal, Icc e MVA de curto | OK |
| Disjuntor de proteção | corrente de projeto Ib | OK |
| Malha 4-20 mA HART | PV para mA e mA para PV | OK |
| LOPA simplificada | PFD total e frequência mitigada | OK |

Resumo dos checks numéricos automatizados:

| Item | Resultado |
|---|---:|
| Ferramentas testadas | 12 |
| Checks numéricos de fórmula | 11 |
| Checks aprovados | 11 |
| Checks reprovados | 0 |

## Ajuste pontual aplicado

Foi encontrado um risco na **leitura dinâmica do resultado**, não na fórmula das ferramentas.

Antes, a função de interpretação dinâmica podia classificar uma frase como esta:

```text
sem alertas críticos
```

como condição ruim, porque a palavra `críticos` continha o termo `critico`, que estava no grupo de palavras de falha.

Isso poderia afetar ferramentas como malha 4-20 mA HART e outras que retornam texto do tipo “sem alertas críticos”.

Foi aplicado um ajuste pequeno em `app.js`:

- frases explicitamente ruins são avaliadas primeiro;
- frases explicitamente boas, como “sem alertas críticos”, “sem alertas”, “dentro do limite”, “conforme” e “aprovado”, são avaliadas antes da lista genérica de palavras críticas;
- a lista genérica continua existindo para capturar casos realmente perigosos.

## O que não foi alterado

- Nenhuma fórmula foi alterada.
- Nenhum campo foi alterado.
- Nenhuma unidade foi alterada.
- Nenhuma URL foi alterada.
- Nenhuma página comercial foi alterada.
- Nenhuma ferramenta foi reescrita.

## Validação técnica

Foi executado:

```bash
node --check app.js
```

Resultado: **sem erro de sintaxe**.

## Conclusão

A etapa confirmou que o caminho correto é seguir em lotes pequenos.

Neste primeiro lote, não foi encontrada necessidade segura de alterar fórmulas. O único ajuste aplicado foi na camada de interpretação dinâmica, pois era um problema claro de classificação textual e não altera cálculo nenhum.

## Próxima recomendação

Seguir para a **Etapa 22 — teste prático das ferramentas elétricas críticas**, ainda em lote pequeno, cobrindo por exemplo:

- dimensionamento de cabos;
- queda de tensão;
- disjuntor;
- curto-circuito;
- corrente de partida;
- partida estrela-triângulo;
- queda na partida;
- desequilíbrio de tensão;
- kVA de transformador;
- THD.

A regra deve continuar a mesma: **testar primeiro, corrigir só o que for claro e pontual**.

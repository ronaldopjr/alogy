# ALOGY — Etapa 23 — Auditoria e melhoria controlada das ferramentas de instrumentação crítica

## Base utilizada

Esta etapa foi executada sobre a base da **Etapa 22 — auditoria de fórmulas elétricas**, mantendo o foco exclusivamente nas ferramentas técnicas.

## Escopo

A etapa foi conduzida de forma conservadora, conforme solicitado:

- não alterar home;
- não alterar página industrial;
- não alterar página residencial;
- não alterar categorias da página de ferramentas;
- não alterar URLs;
- não reescrever ferramentas inteiras;
- não trocar imagens;
- corrigir apenas pontos claros, pontuais e documentados.

## Ferramentas revisadas nesta rodada

O lote revisado nesta etapa priorizou ferramentas de instrumentação crítica e sinais industriais:

1. `calculadora-lrv-urv-span.html`
2. `calculadora-carga-malha-4-20ma.html`
3. `calculadora-diagnostico-4-20ma-hart.html`
4. `calculadora-dp-nivel-tanque-fechado.html`
5. `calculadora-cv-gases-valvula-controle.html`
6. `calculadora-indice-cavitacao-valvula.html`

Também foram mantidas como referência de comparação as ferramentas já cobertas em etapas anteriores, sem nova alteração nesta rodada:

- `calculadora-4-20ma.html`
- `calculadora-malha-4-20ma-hart-completa.html`
- `calculadora-cabo-instrumentacao-24vcc.html`
- `calculadora-fonte-24vcc-painel-automacao.html`
- `calculadora-nivel-dp-tanque-pressurizado.html`
- `calculadora-placa-orificio-vazao-dp.html`
- `calculadora-cv-kv-valvula-controle.html`
- `calculadora-barreira-intrinseca-area-classificada.html`

## Melhorias aplicadas

### 1. Leitura de números com vírgula decimal

Algumas ferramentas antigas usavam `parseFloat()` ou `Number()` diretamente. Isso funcionava bem com ponto decimal, mas podia falhar ou interpretar parcialmente entradas no padrão brasileiro com vírgula decimal.

Exemplo de risco:

```text
12,5
```

Em alguns scripts, isso poderia ser interpretado como `12` ou como valor inválido, dependendo da função usada.

Foi adicionada conversão controlada para aceitar entradas como:

```text
12,5
0,85
1.234,56
```

Sem alterar a fórmula principal.

Ferramentas ajustadas:

| Ferramenta | Ajuste |
|---|---|
| `calculadora-lrv-urv-span.html` | Parser numérico com vírgula decimal |
| `calculadora-carga-malha-4-20ma.html` | Parser numérico com vírgula decimal |
| `calculadora-diagnostico-4-20ma-hart.html` | Parser numérico com vírgula decimal |
| `calculadora-dp-nivel-tanque-fechado.html` | Parser numérico com vírgula decimal |
| `calculadora-cv-gases-valvula-controle.html` | Parser numérico com vírgula decimal |
| `calculadora-indice-cavitacao-valvula.html` | Parser numérico com vírgula decimal |

### 2. Validação de queda de pressão em Cv de gases

Na ferramenta:

```text
calculadora-cv-gases-valvula-controle.html
```

Foi adicionada validação para impedir cálculo quando:

- vazão for menor ou igual a zero;
- pressão de entrada for menor ou igual a zero;
- pressão de saída for menor ou igual a zero;
- `P2 >= P1`;
- gravidade específica do gás for menor ou igual a zero;
- temperatura for fisicamente inválida.

Antes, a ferramenta forçava uma queda mínima com:

```text
ΔP = max(P1 - P2, 0,001)
```

Isso evitava erro matemático, mas podia mascarar entrada fisicamente inválida. Agora, quando não existe queda de pressão real, a ferramenta mostra **Revisar dados** em vez de calcular um Cv artificial.

### 3. Validação de dados na cavitação de válvula

Na ferramenta:

```text
calculadora-indice-cavitacao-valvula.html
```

Foi adicionada validação para impedir falso diagnóstico de baixo risco quando as pressões não fazem sentido.

Agora a ferramenta exige:

- `P1 > P2`;
- `P1 > Pv`;
- pressões absolutas coerentes;
- `FL` entre 0 e 1.

Antes, se `P2 >= P1`, a razão podia ficar negativa e ser classificada como baixo risco. Agora o resultado passa a ser **Revisar dados**.

## O que não foi alterado

Não foram alterados:

- fórmulas principais de 4-20 mA;
- fórmula de carga de malha;
- fórmula de DP por nível;
- fórmula de cavitação quando as entradas são válidas;
- fórmula de Cv de gases quando as entradas são válidas;
- layout geral das páginas;
- categorias;
- SEO;
- arquivos `index.html`, `industrial.html` e `residencial.html`.

## Testes numéricos executados

| Teste | Resultado |
|---|---:|
| Carga de malha 4-20 mA — resistência total | 365,6 Ω |
| Carga de malha 4-20 mA — margem de tensão | 4,69 V |
| LRV/URV — conversão de 12,5 mA | 53,125% |
| DP tanque fechado com perna molhada — nível 50% | 12,000 mA |
| Cv de gases — cenário válido | Cv positivo |
| Cv de gases — P2 maior ou igual a P1 | bloqueado como Revisar dados |
| Cavitação — razão ΔP/ΔP crítico | aproximadamente 0,382 |
| Cavitação — P2 maior ou igual a P1 | bloqueado como Revisar dados |

## Validações técnicas

| Verificação | Resultado |
|---|---:|
| Arquivos HTML alterados | 6 |
| Fórmulas principais reescritas | 0 |
| Validações de entrada adicionadas | 2 |
| Melhorias de entrada decimal | 6 |
| Erro de sintaxe nos scripts alterados | 0 |
| Erro de sintaxe no `app.js` | 0 |
| Home alterada | Não |
| Página industrial alterada | Não |
| Página residencial alterada | Não |

## Arquivos alterados

- `calculadora-lrv-urv-span.html`
- `calculadora-carga-malha-4-20ma.html`
- `calculadora-diagnostico-4-20ma-hart.html`
- `calculadora-dp-nivel-tanque-fechado.html`
- `calculadora-cv-gases-valvula-controle.html`
- `calculadora-indice-cavitacao-valvula.html`

## Arquivos criados

- `ALOGY_ETAPA_23_AUDITORIA_INSTRUMENTACAO_RELATORIO.md`
- `ALOGY_ETAPA_23_AUDITORIA_INSTRUMENTACAO_VALIDACAO.json`

## Conclusão

A etapa corrigiu pontos coerentes sem quebrar o que já funcionava. O principal ganho foi aumentar a robustez das ferramentas para entradas no padrão brasileiro e evitar resultados tecnicamente enganosos quando não há queda de pressão válida em válvulas.

A próxima etapa recomendada é continuar no mesmo ritmo com um novo lote pequeno, focado em **calibração e metrologia**, auditando erro, incerteza, TUR/TAR, transmissor de pressão, transmissor de temperatura e manômetro.

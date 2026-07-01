# ALOGY — Etapa 27 — Calibração e Metrologia de Instrumentação

## Base utilizada

Base de trabalho: **Etapa 26 — instrumentação avançada de processo**.

Esta etapa manteve o foco exclusivo nas ferramentas técnicas. Não houve alteração em home, serviços industriais, serviços residenciais, página de categorias, SEO global, `app.js` ou `style.css`.

## Objetivo

Revisar um lote pequeno de ferramentas de calibração e metrologia, com foco em:

- coerência de cálculo;
- proteção contra divisão por zero;
- validação de dados incoerentes;
- melhor leitura de números no formato brasileiro;
- preservação das fórmulas principais que já funcionavam.

## Ferramentas alteradas

1. `calculadora-erro-calibracao.html`
2. `calculadora-incerteza-calibracao.html`
3. `calculadora-incerteza-calibracao-tur-tar.html`
4. `calculadora-calibracao-transmissor-pressao.html`
5. `calculadora-calibracao-transmissor-temperatura.html`
6. `calculadora-calibracao-manometro.html`
7. `calculadora-calibracao-pressostato.html`
8. `calculadora-calibracao-balanca-industrial.html`

## Melhorias aplicadas

### 1. Leitura de número no padrão brasileiro

Foi adicionada leitura mais robusta para valores digitados no formato brasileiro, como:

```text
12,5
0,85
1.234,56
```

Essa melhoria reduz erro de interpretação em páginas que ainda usavam `parseFloat()` ou `Number()` diretamente.

### 2. Proteção contra span igual a zero

Nas ferramentas de calibração de transmissor de pressão e temperatura, o cálculo usa span da escala.

Antes, se `LRV` e `URV` fossem iguais, poderia ocorrer divisão por zero e resultado artificial.

Agora, quando o span é zero, a ferramenta bloqueia o cálculo e mostra mensagem de verificação.

### 3. Proteção contra capacidade inválida de balança

Na ferramenta de calibração de balança industrial, foi adicionada validação para impedir cálculo com:

- capacidade igual ou menor que zero;
- massa negativa;
- tolerância negativa;
- quantidade de células inválida.

### 4. Proteção em manômetro

Na ferramenta de calibração de manômetro, foi adicionada validação para impedir resultado com:

- fundo de escala igual ou menor que zero;
- classe negativa;
- tolerância adicional negativa.

### 5. Proteção em pressostato

Na ferramenta de calibração de pressostato, foi adicionada validação para impedir avaliação com:

- tolerância igual ou menor que zero;
- repetibilidade negativa.

### 6. Incerteza e TUR/TAR

As ferramentas de incerteza passaram a ler melhor números com vírgula decimal e separador de milhar.

Na ferramenta completa de incerteza/TUR/TAR, a leitura dos pontos de calibração também foi padronizada.

## Fórmulas

Não houve reescrita ampla das fórmulas principais.

Foram mantidas as lógicas existentes e adicionadas proteções para evitar resultado falso quando os dados de entrada não são tecnicamente válidos.

## Testes executados

Foram executados testes de consistência para:

- conversão de número brasileiro;
- transmissor de pressão;
- transmissor de temperatura;
- manômetro;
- pressostato;
- balança industrial;
- erro de calibração;
- incerteza de calibração.

Resultado:

| Verificação | Resultado |
|---|---:|
| Ferramentas alteradas | 8 |
| Checks numéricos executados | 27 |
| Checks aprovados | 27 |
| Scripts verificados | 8 páginas |
| Erros de sintaxe nos scripts alterados | 0 |
| Erro de sintaxe em `app.js` | 0 |
| Home alterada | Não |
| Página industrial alterada | Não |
| Página residencial alterada | Não |
| `ferramentas.html` alterado | Não |
| URLs alteradas | 0 |

## Observação técnica

Esta etapa não transforma as ferramentas em certificado de calibração, laudo ou procedimento metrológico formal.

As ferramentas continuam sendo de apoio técnico/orientativo, exigindo validação conforme procedimento interno, rastreabilidade, critério de aceitação, incerteza do padrão, regra de decisão e responsável técnico quando aplicável.

## Próxima etapa recomendada

Seguir com **Etapa 28 — instrumentação analítica e medidores de processo**, focando em:

- pH;
- ORP;
- condutividade;
- medidores de vazão magnético, coriolis e ultrassônico;
- totalizador de vazão;
- radar/ultrassônico de nível.

A mesma regra deve ser mantida: corrigir cálculo somente quando o erro estiver confirmado e aplicar melhorias pequenas quando forem seguras.

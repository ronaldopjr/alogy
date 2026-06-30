# ALOGY — Reorganização de ferramentas 4-20 mA / 24 Vcc para Instrumentação
## Escopo
- Alteração feita somente em `ferramentas.html`.
- Não foram alteradas fórmulas, lógica JavaScript das calculadoras, URLs, sitemap, páginas de blog ou páginas individuais das ferramentas.
- Objetivo: deixar ferramentas de 4-20 mA, HART, malhas analógicas, 24 Vcc de instrumentos e cabos/fontes de instrumentação dentro da disciplina principal **Instrumentação**.

## Resultado
- Cards totais antes: 240
- Cards totais depois: 240
- Campo de busca preservado: sim
- Links locais quebrados em `ferramentas.html`: 0

## Cards movidos para Instrumentação
| Ferramenta | Arquivo | Origem | Destino | Status |
|---|---|---|---|---|
| Barreira Intrínseca / Área Classificada | `calculadora-barreira-intrinseca-area-classificada.html` | eletrica | instrumentacao | movido |
| Comprimento Máximo de Cabo HART | `calculadora-comprimento-cabo-hart.html` | eletrica | instrumentacao | movido |
| Resistor Shunt 4-20 mA | `calculadora-resistor-shunt-sinal-instrumentacao.html` | eletrica | instrumentacao | movido |
| Cabo de Instrumentação 24 Vcc | `calculadora-cabo-instrumentacao-24vcc.html` | eletrica | instrumentacao | movido |
| Montagem de Instrumentos em Campo | `checklist-montagem-instrumentos-campo.html` | eletrica | instrumentacao | movido |
| Carga de Malha 4-20 mA | `calculadora-carga-malha-4-20ma.html` | eletrica | instrumentacao | movido |
| Malha 4-20 mA / HART Completa | `calculadora-malha-4-20ma-hart-completa.html` | automacao | instrumentacao | movido |
| Fonte 24 Vcc para Painel | `calculadora-fonte-24vcc-painel-automacao.html` | automacao | instrumentacao | movido |
| Placa de Orifício / Vazão DP | `calculadora-placa-orificio-vazao-dp.html` | automacao | instrumentacao | movido |
| Autonomia de Ar de Instrumentos | `calculadora-autonomia-ar-instrumentos.html` | automacao | instrumentacao | movido |
| Erro Total de Malha | `calculadora-erro-total-malha-instrumentacao.html` | automacao | instrumentacao | movido |
| Conversão de Sinais Industriais | `calculadora-conversao-sinais-industriais.html` | automacao | instrumentacao | movido |
| Escala de CLP e Instrumento | `calculadora-escala-clp.html` | automacao | instrumentacao | movido |
| Checklist de Teste de Loop | `checklist-teste-de-loop.html` | automacao | instrumentacao | movido |
| Fonte 24 Vcc para CLP | `calculadora-fonte-24vcc.html` | automacao | instrumentacao | movido |
| Queda de Tensão 24 Vcc | `calculadora-queda-tensao-24vcc.html` | automacao | instrumentacao | movido |
| Bateria UPS 24 Vcc | `calculadora-bateria-ups-24vcc.html` | automacao | instrumentacao | movido |
| Válvula Solenoide / Bobina | `calculadora-consumo-valvula-solenoide-bobina.html` | automacao | instrumentacao | movido |
| Diagnóstico 4-20 mA e HART | `calculadora-diagnostico-4-20ma-hart.html` | informatica | instrumentacao | movido |
| Checklist de Comissionamento HART | `checklist-comissionamento-hart.html` | informatica | instrumentacao | movido |
| Nível Radar/Ultrassônico | `calculadora-nivel-radar-ultrassonico.html` | engenharia | instrumentacao | movido |
| Nível DP de Tanque Pressurizado | `calculadora-nivel-dp-tanque-pressurizado.html` | engenharia | instrumentacao | movido |
| Calculadora 4-20 mA | `calculadora-4-20ma.html` | engenharia | instrumentacao | movido |
| LRV, URV e Span | `calculadora-lrv-urv-span.html` | engenharia | instrumentacao | movido |
| Sinal Pneumático 3-15 psi | `calculadora-sinal-pneumatico-3-15psi.html` | engenharia | instrumentacao | movido |
| Instrumentação e Sinais | `ferramentas-instrumentacao-industrial.html` | calibracao-metrologia | instrumentacao | movido |

## Cards por disciplina após ajuste
| Disciplina | Cards |
|---|---:|
| Instrumentação | 39 |
| Elétrica | 25 |
| Automação | 21 |
| Mecânica | 25 |
| Processos | 29 |
| Informática | 9 |
| Engenharia | 9 |
| Calibração e Metrologia | 68 |
| Manutenção | 15 |

## Observação sobre itens restantes com 4-20 mA / 24 Vcc / HART fora de Instrumentação
Alguns cards ainda podem citar 4-20 mA, 24 Vcc ou HART fora da seção Instrumentação porque o assunto principal deles é calibração, manutenção, checklist geral, processo ou automação. Eles não foram movidos nesta etapa para evitar uma mudança grande demais na organização.

Itens detectados para análise futura:
| Seção | Ferramenta | Arquivo |
|---|---|---|
| automacao | Volume de Tanque Avançado | `calculadora-volume-tanque-vertical-horizontal.html` |
| automacao | Checklist Painel Elétrico Industrial | `checklist-painel-eletrico-industrial.html` |
| informatica | Automação, CLP e Redes | `ferramentas-automacao-clp.html` |
| calibracao-metrologia | Calibração de Transmissor de Pressão | `calculadora-calibracao-transmissor-pressao.html` |
| calibracao-metrologia | Calibração de Transmissor de Nível DP | `calculadora-calibracao-transmissor-nivel-dp.html` |
| calibracao-metrologia | Calibração de Conversor I/P e P/I | `calculadora-calibracao-conversor-ip-pi.html` |
| calibracao-metrologia | Calibração de Transmissor ORP | `calculadora-calibracao-transmissor-orp.html` |
| calibracao-metrologia | Split Range 4-20 mA | `calculadora-split-range-4-20ma.html` |
| calibracao-metrologia | Vazão por Pressão Diferencial | `calculadora-vazao-pressao-diferencial.html` |
| calibracao-metrologia | Pressão Hidrostática por Densidade | `calculadora-pressao-hidrostatica-densidade.html` |
| calibracao-metrologia | Calibração de Válvula de Controle | `calculadora-calibracao-valvula-controle.html` |
| calibracao-metrologia | Manutenção Preventiva de Instrumentos | `checklist-manutencao-preventiva-instrumentos.html` |
| manutencao | Manutenção e Comissionamento | `ferramentas-manutencao-industrial.html` |

## Validação
- `ferramentas.html` abre com as seções de disciplina preservadas.
- A busca foi mantida.
- Não foram criadas/removidas páginas.
- Não houve alteração no `sitemap.xml`.
- O total de cards da página principal permaneceu igual.
- Links locais quebrados em `ferramentas.html`: 0.

## Como aplicar
Substitua apenas o arquivo `ferramentas.html` no servidor.

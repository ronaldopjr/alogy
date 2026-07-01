# ALOGY — Etapa 25

## Auditoria e melhoria controlada — Automação, CLP e Redes Industriais

Base utilizada: `alogy-main-etapa-24-instrumentacao-4-20ma-hart.zip`.

Esta etapa manteve o foco exclusivo nas ferramentas técnicas de automação, CLP, redes industriais, UPS e malhas de controle. Não foram feitas alterações em home, páginas de serviços, página residencial, SEO geral ou página principal de ferramentas.

## Escopo aplicado

Ferramentas revisadas e alteradas:

1. `calculadora-escala-clp.html`
2. `calculadora-io-clp.html`
3. `calculadora-resolucao-clp-analogico.html`
4. `calculadora-modbus.html`
5. `calculadora-modbus-polling.html`
6. `calculadora-tempo-varredura-modbus-rtu.html`
7. `calculadora-ip-rede-industrial.html`
8. `calculadora-ups-automacao-clp-instrumentos.html`
9. `calculadora-bateria-ups-24vcc.html`
10. `calculadora-cabo-profibus-rs485.html`
11. `calculadora-sintonia-pid.html`
12. `calculadora-tempo-resposta-malha-controle.html`

## Critério usado

A regra desta etapa foi: melhorar somente pontos coerentes, claros e seguros, preservando o que já funcionava.

Foram priorizados:

- leitura correta de números no padrão brasileiro;
- bloqueio de cálculo quando o span é zero;
- bloqueio de valores negativos onde não fazem sentido;
- mensagens de revisão em vez de resultado falso;
- validação de prefixo/máscara de rede;
- preservação da lógica principal das ferramentas.

## Melhorias por grupo

### Escala, CLP e cartão analógico

Arquivos:

- `calculadora-escala-clp.html`
- `calculadora-io-clp.html`
- `calculadora-resolucao-clp-analogico.html`

Melhorias:

- entrada com vírgula decimal passou a ser aceita;
- números no formato `1.234,56` passaram a ser tratados corretamente;
- validação de span raw e span de engenharia;
- bloqueio de LRV igual a URV na ferramenta de resolução;
- indicação clara quando os dados precisam ser revisados.

### Modbus e redes industriais

Arquivos:

- `calculadora-modbus.html`
- `calculadora-modbus-polling.html`
- `calculadora-tempo-varredura-modbus-rtu.html`
- `calculadora-ip-rede-industrial.html`
- `calculadora-cabo-profibus-rs485.html`

Melhorias:

- entrada com vírgula decimal em cálculos Modbus e RS-485;
- bloqueio de escala Modbus com raw mínimo igual ao raw máximo;
- bloqueio de escala de engenharia com LRV igual ao URV;
- validação contra baud rate, escravos, registros, gap e comprimento negativos;
- validação mais segura de prefixo IP antes de calcular máscara;
- prefixos fora de 0 a 32 deixam de gerar máscara artificial;
- status de revisão quando comprimento, dispositivos ou repetidores estão incoerentes.

### UPS, baterias e autonomia

Arquivos:

- `calculadora-ups-automacao-clp-instrumentos.html`
- `calculadora-bateria-ups-24vcc.html`

Melhorias:

- entrada com vírgula decimal e formato brasileiro;
- proteção contra cargas negativas;
- validação de autonomia, corrente, DoD, rendimento e derating;
- mensagem de revisão quando percentuais ou dados básicos são incoerentes.

### PID e tempo de resposta de malha

Arquivos:

- `calculadora-sintonia-pid.html`
- `calculadora-tempo-resposta-malha-controle.html`

Melhorias:

- leitura de números no formato brasileiro;
- bloqueio de constantes de tempo negativas;
- bloqueio de cálculo quando a constante equivalente é zero;
- preservação dos métodos de sintonia existentes.

## Fórmulas

Nenhuma fórmula principal foi reescrita nesta etapa.

As melhorias foram de:

- parsing de entrada;
- validação técnica;
- prevenção de resultado inválido;
- mensagens de diagnóstico.

## Validações executadas

Resumo da validação:

| Item | Resultado |
|---|---:|
| Ferramentas alteradas | 12 |
| Fórmulas principais reescritas | 0 |
| Testes numéricos manuais/documentados | 10 |
| Testes numéricos aprovados | 10 |
| Erros de sintaxe em scripts alterados | 0 |
| Erro de sintaxe em `app.js` | 0 |
| Links quebrados nas páginas alteradas | 0 |

Arquivo complementar de validação:

`ALOGY_ETAPA_25_AUTOMACAO_CLP_REDES_VALIDACAO.json`

## Arquivos não alterados

Não foram alterados:

- `index.html`;
- `industrial.html`;
- `residencial.html`;
- `ferramentas.html`;
- `app.js`;
- `style.css`;
- páginas de blog;
- URLs das ferramentas.

## Conclusão

A Etapa 25 melhorou a robustez de ferramentas de automação, CLP, redes industriais, UPS e PID sem alterar a estrutura do site e sem reescrever fórmulas principais. O foco foi evitar erro por entrada no padrão brasileiro e impedir que dados incoerentes gerem resultados falsos ou aparentemente válidos.

## Próxima etapa recomendada

Seguir com uma etapa focada em **instrumentação avançada de processo**, revisando em lote pequeno:

- nível por DP;
- tanque fechado;
- transmissor DP para vazão;
- placa de orifício;
- Cv/Kv de válvulas;
- cavitação;
- atuador pneumático;
- tempo de atuação de válvula.

A regra deve continuar a mesma: corrigir fórmula somente se o erro for confirmado e aplicar melhorias de validação quando forem seguras.

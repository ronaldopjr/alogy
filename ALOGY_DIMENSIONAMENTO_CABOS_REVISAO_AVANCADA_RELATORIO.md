# ALOGY — Revisão Avançada da Ferramenta de Dimensionamento de Cabos

Data: 2026-06-30

Arquivo revisado:

- calculadora-dimensionamento-cabos.html

## Objetivo

Revisar a ferramenta de dimensionamento de cabos sem perder o que já existia, ampliando a ferramenta para ficar mais próxima de um relatório técnico completo, com dois modos de uso: básico e avançado.

## Referência visual/conceitual usada

O modelo enviado pelo usuário no PDF `i867 (1).pdf` apresenta um relatório com solução técnica, solução econômica/ambiental, economia anual, emissão de CO₂, método de referência NBR 5410, aplicação do cabo, tipo de cabo, sistema, tensão, corrente, comprimento, queda de tensão, curto-circuito, temperatura, agrupamento, camadas e critérios de capacidade, curto-circuito e queda de tensão.

## O que foi mantido

- URL original da ferramenta.
- Estrutura visual compatível com o site.
- Tabela comparativa de seções comerciais.
- Cálculo por capacidade de condução de corrente.
- Cálculo por queda de tensão.
- Cálculo por curto-circuito térmico.
- Solução técnica.
- Solução econômica/ambiental.
- Economia anual.
- CO₂ evitado.
- Botão de imprimir página.
- Botão de imprimir relatório sem logo.
- Botão de copiar relatório.
- Exemplo similar ao relatório enviado.
- Avisos de responsabilidade técnica.

## O que foi adicionado

### 1. Abas/modos de cálculo

Foram adicionados dois modos:

- Modo Básico.
- Modo Avançado / Engenharia.

O modo básico oculta campos avançados, mas mantém valores padrão conservadores. O modo avançado exibe todos os critérios.

### 2. Tipo de equipamento/carga

Novo campo:

- Iluminação.
- Tomadas.
- Alimentador.
- Motor elétrico.
- Motor com inversor.
- Motor com soft starter.
- Resistência/aquecimento.
- Transformador.
- Banco de capacitores.
- UPS/nobreak.
- Solar CC.
- Instrumentação/comando.

Esse campo influencia avisos, margem, seção mínima e recomendações do relatório.

### 3. Tipo de cabo/aplicação construtiva

Novo campo:

- Cabo multipolar 0,6/1 kV.
- Cabo unipolar 0,6/1 kV.
- Condutor isolado 450/750 V.
- Cabo flexível 0,6/1 kV.
- Cabo armado 0,6/1 kV.
- Cabo solar CC.
- Cabo para inversor/VFD blindado.
- Cabo de comando/controle.
- Cabo de instrumentação blindado.

O tipo de cabo aplica um fator construtivo orientativo e gera alertas quando a aplicação não parece compatível.

### 4. Tipo de partida de motor

Campos novos:

- Tipo de partida.
- Corrente de partida em múltiplos de In.
- Tempo de partida.
- Queda máxima permitida na partida.

Opções:

- Não considerar partida.
- Partida direta.
- Estrela-triângulo.
- Soft starter.
- Inversor de frequência.
- Compensadora/autotransformador.
- Manual.

A ferramenta agora calcula a queda de tensão na partida quando aplicável.

### 5. Ambiente/condição especial

Novo campo:

- Normal/seco/abrigado.
- Externo com sol/UV.
- Úmido.
- Submersão parcial/intermitente.
- Óleo/produto químico.
- Bandeja industrial com agrupamento relevante.

### 6. Tipo de proteção

Novo campo:

- Disjuntor termomagnético/caixa moldada.
- Fusível gG.
- Fusível aM + relé de sobrecarga.
- Disjuntor motor/relé de sobrecarga.
- Proteção eletrônica ajustável.

### 7. Caminhos normativos mais detalhados

O relatório agora cita caminhos orientativos da NBR 5410 para:

- Capacidade de condução de corrente.
- Métodos A1, A2, B1, B2, C, D, E, F e G.
- Fatores de correção.
- Queda de tensão em regime.
- Queda de tensão na partida.
- Curto-circuito.
- Seção mínima.
- Proteção Ib ≤ In ≤ Iz.
- Condutor PE.
- Neutro.
- Tipo e construção do cabo.

Também cita NBR 7286/NBR 7288 e dados do fabricante quando aplicável a cabos 0,6/1 kV, sem copiar tabelas da norma.

## Validações realizadas

- JavaScript inline sem erro de sintaxe (`node --check`).
- Todos os IDs usados no JavaScript existem no HTML.
- Não foram alterados sitemap, categorias ou URL.
- Não houve remoção de conteúdo existente essencial.

## Observação importante

A ferramenta continua sendo de pré-dimensionamento. Ela não reproduz tabelas oficiais da NBR 5410 e não substitui projeto elétrico. O usuário deve validar as tabelas oficiais, catálogo do fabricante, método real de instalação, curto-circuito, proteção, seletividade, partida de motores, agrupamento, ambiente e responsabilidade técnica.

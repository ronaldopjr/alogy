# ALOGY - Limpeza de redundância dos avisos das ferramentas

## Escopo executado

Etapa focada apenas em verificar e corrigir redundância entre a nova camada padrão de segurança e avisos que já existiam nas páginas de ferramentas.

Não foram alteradas fórmulas, cálculos, categorias, SEO, URLs, títulos ou ferramentas.

## Problema encontrado

A versão anterior da camada de segurança ocultava avisos antigos usando uma regra ampla demais. Isso removia avisos genéricos repetidos, mas também poderia ocultar avisos específicos e úteis de algumas ferramentas críticas, como área classificada, válvulas, fonte 24 Vcc, cabo de instrumentação e UPS.

## Ajuste aplicado

A lógica foi separada em dois tipos:

1. Aviso genérico antigo
   - Exemplo: "Ferramenta orientativa", "Uso orientativo", "Aviso de responsabilidade", "Aviso técnico importante" genérico.
   - Ação: fica oculto pela classe `alogy-safety-replaced`, pois a nova camada padrão já cobre esse conteúdo.

2. Aviso técnico específico da ferramenta
   - Exemplo: área classificada, válvula de controle, fonte 24 Vcc, cabo de instrumentação, Modbus, UPS e checklist NR-10.
   - Ação: permanece visível, pois traz cuidados próprios daquela ferramenta.
   - Em avisos com título "Aviso de segurança e uso correto", o título é apresentado como "Cuidados específicos desta ferramenta" para não parecer repetição do aviso global.

## Resultado da análise estática

- Páginas de ferramentas analisadas: 232
- Avisos genéricos antigos identificados para ocultação: 218
- Avisos técnicos específicos preservados: 8

## Avisos específicos preservados

- `calculadora-barreira-intrinseca-area-classificada.html`
- `calculadora-cabo-instrumentacao-24vcc.html`
- `calculadora-cv-kv-valvula-controle.html`
- `calculadora-fonte-24vcc-painel-automacao.html`
- `calculadora-malha-4-20ma-hart-completa.html`
- `calculadora-tempo-varredura-modbus-rtu.html`
- `calculadora-ups-automacao-clp-instrumentos.html`
- `checklist-nova-nr10.html`

## Arquivos alterados

- `app.js`
- `style.css`
- `ALOGY_LIMPEZA_REDUNDANCIA_AVISOS_RELATORIO.md`

## Validação técnica

- `node --check app.js` executado sem erro de sintaxe.
- A correção continua sem alterar fórmulas ou lógica de cálculo das ferramentas.
- A nova camada padrão permanece global, mas os alertas específicos de cada ferramenta crítica não são mais ocultados automaticamente.

# ALOGY — Etapa 3: Complemento técnico para 10 ferramentas críticas

## Escopo executado

Foi aplicada a primeira rodada de padronização das ferramentas de risco alto, sem alterar fórmulas, categorias, URLs, metadados SEO ou criar ferramentas novas.

A alteração foi feita por camada reutilizável em `app.js`, usando um mapa por URL para inserir um bloco técnico específico nas ferramentas selecionadas.

## Ferramentas contempladas

1. `calculadora-barreira-intrinseca-area-classificada.html`
2. `calculadora-curto-circuito-transformador.html`
3. `calculadora-fonte-24vcc-painel-automacao.html`
4. `calculadora-cabo-instrumentacao-24vcc.html`
5. `calculadora-malha-4-20ma-hart-completa.html`
6. `calculadora-nivel-caldeira-transmissor-dp.html`
7. `calculadora-nivel-dp-tanque-pressurizado.html`
8. `calculadora-placa-orificio-vazao-dp.html`
9. `calculadora-cv-kv-valvula-controle.html`
10. `calculadora-lopa-simplificada.html`

## Blocos adicionados em cada ferramenta

Cada uma das 10 páginas passa a receber um bloco chamado “Complemento técnico” com:

- Premissas específicas;
- Limitações críticas;
- Memória de cálculo principal;
- Exemplo prático de uso;
- Como interpretar o resultado.

## Estratégia usada

Para evitar que o GPT se perca editando muitas páginas manualmente, a orientação foi implementada em uma camada central:

- `CRITICAL_TOOL_GUIDANCE` em `app.js` contém o conteúdo específico por URL;
- `insertCriticalToolGuidance()` injeta o bloco na página correta;
- a inserção acontece após a camada global de segurança quando ela existe;
- se a camada global não existir, o bloco é inserido após o hero da ferramenta;
- a função evita duplicidade usando `.alogy-critical-guidance`.

## O que não foi alterado

- Nenhuma fórmula foi alterada;
- Nenhum cálculo foi reescrito;
- Nenhuma categoria foi alterada;
- Nenhuma ferramenta nova foi criada;
- Nenhuma URL foi alterada;
- Nenhuma meta description, title ou dado estruturado foi alterado;
- Nenhum alerta dinâmico existente foi removido.

## Arquivos alterados

- `app.js`
- `style.css`
- `ALOGY_ETAPA_3_FERRAMENTAS_CRITICAS_RELATORIO.md`

## Validação

- `node --check app.js` executado sem erro de sintaxe.
- Confirmado que as 10 URLs existem no projeto.
- Confirmado que as 10 URLs estão presentes no mapa `CRITICAL_TOOL_GUIDANCE`.

## Próxima etapa recomendada

Após revisar visualmente esse primeiro lote, a próxima etapa deve ser a Etapa 4: melhorar individualmente o resultado das 10 ferramentas críticas, quando necessário, adicionando interpretação mais forte dentro do próprio resultado dinâmico, sem alterar a fórmula de cálculo.

# Correção - Calculadora de Barreira Intrínseca / Área Classificada

Arquivo corrigido: `calculadora-barreira-intrinseca-area-classificada.html`

## O que foi ajustado

- Reforcei a leitura dos campos numéricos para aceitar ponto ou vírgula.
- Adicionei tratamento de erro visível na própria área de resultado caso algum campo não seja lido corretamente.
- Adicionei `type="button"` nos botões para evitar comportamento inesperado em alguns navegadores.
- Corrigi a lógica de porcentagem exibida na tabela de status para evitar formatação duplicada/estranha.
- Adicionei fallback para copiar memorial quando `navigator.clipboard` não estiver disponível.
- Mantive a lógica técnica original de validação Uo/Ui, Io/Ii, Po/Pi, Co/Ci+cabo, Lo/Li+cabo, queda de tensão e HART.

## Validação

- JavaScript validado com `node --check`: OK.
- H1, canonical, SEO e JSON-LD mantidos.
- Não foi alterado `sitemap.xml`, pois a URL já existia.
- Não foram alteradas páginas de categoria, pois a ferramenta já estava integrada.

## Como aplicar

Substitua somente o arquivo `calculadora-barreira-intrinseca-area-classificada.html` no servidor.

# ALOGY - Camada padrão de segurança das ferramentas

## Escopo aplicado

Esta etapa criou uma camada padrão para as ferramentas existentes, sem criar novas ferramentas, sem alterar fórmulas, sem reorganizar categorias e sem mexer em SEO.

## Arquivos alterados

- `app.js`
- `style.css`

## Arquivo criado

- `ALOGY_CAMADA_SEGURANCA_FERRAMENTAS_RELATORIO.md`

## O que foi implementado

### 1. Aviso geral para ferramentas

Todas as páginas de ferramentas carregadas por `app.js` agora recebem uma camada global de aviso orientativo. A camada é aplicada em páginas com nomes iniciados por:

- `calculadora-`
- `checklist-`
- `conversor-`
- `gerador-`

Também funciona em páginas com classes `tools-page` ou `tech-page`.

### 2. Avisos por risco

Foi criado um detector automático de risco com três níveis:

- `low` / risco baixo: conversores e cálculos auxiliares simples.
- `medium` / risco médio: instrumentação, automação, calibração, manutenção, redes, 24 Vcc e processos auxiliares.
- `high` / risco alto: elétrica, área classificada, pressão, vapor, gás, caldeiras, válvulas, bombas, hidráulica, LOPA, SIL e aplicações que podem afetar segurança ou conformidade.

O nível pode ser sobrescrito no futuro com o atributo:

```html
<body data-alogy-risk="high">
```

Valores aceitos:

```html
<body data-alogy-risk="low">
<body data-alogy-risk="medium">
<body data-alogy-risk="high">
```

### 3. Bloco de premissas do cálculo

Criado bloco reutilizável com premissas padrão:

- dados digitados corretos;
- unidades conferidas;
- condições reais podem exigir correções;
- catálogos, procedimentos internos e normas prevalecem sobre estimativas online;
- ferramentas de risco alto recebem alerta adicional sobre margens, redundância, certificações e requisitos legais.

### 4. Bloco de limitações de uso

Criado bloco reutilizável informando que o resultado não deve ser usado isoladamente para:

- liberar intervenção;
- alterar processo;
- comprar equipamento;
- aprovar instalação;
- substituir projeto;
- substituir laudo;
- substituir ART;
- substituir calibração certificada;
- substituir inspeção;
- substituir profissional habilitado.

### 5. Bloco de memória de cálculo

Criado bloco padrão para orientar o usuário a conferir fórmulas, explicações e memoriais existentes na própria página. Quando a ferramenta ainda não exibir todos os passos, o usuário é orientado a tratar o número final como referência preliminar.

### 6. Bloco de resultado orientativo

Criado bloco padrão deixando claro que o resultado deve ser usado como ponto de partida para análise técnica, com conferência de unidade, faixa, tolerância, margem de segurança e condição real de operação.

### 7. Tratamento de avisos antigos

Quando a página já possui um aviso antigo de responsabilidade, uso orientativo ou segurança, o script oculta esse bloco antigo e insere a nova camada padronizada logo depois. Isso evita duplicidade visual e mantém a página mais limpa.

### 8. Padrão visual

Foram adicionados estilos em `style.css` para:

- banner de risco;
- blocos de premissas;
- blocos de limitações;
- bloco de memória de cálculo;
- bloco de resultado orientativo;
- responsividade mobile;
- compatibilidade com impressão.

## Importante

Esta etapa não alterou nenhuma fórmula, função de cálculo, categoria, título SEO, meta description ou estrutura de navegação.

## Próxima etapa recomendada

Classificar manualmente as ferramentas mais críticas e ajustar o risco com `data-alogy-risk` quando necessário. Depois disso, aplicar melhorias específicas por lote: primeiro risco alto, depois risco médio.

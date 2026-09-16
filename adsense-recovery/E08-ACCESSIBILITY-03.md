# E08 — acessibilidade da central de ferramentas · lote 03

Data: 2026-09-16  
Base: `f56597f5c374093ca293fa215885b5eb697d238e`  
Página: `ferramentas.html`

## Defeito reproduzido

No domínio público, 29 dos 30 links de ação dos cartões tinham o mesmo nome acessível: **Abrir ferramenta**. O único texto distinto ainda não oferecia uma convenção uniforme. O título visual do cartão não fazia parte do nome do link, de modo que leitores de tela e listas de links não distinguiam corretamente os destinos.

## Correção

Os 30 links conservam o texto visual existente e receberam `aria-label` contextual, no formato `Abrir ferramenta: <título do cartão>`. Foram produzidos 30 nomes únicos. Nenhum destino, texto editorial, fórmula, ferramenta ou JavaScript foi alterado.

## Validação antes da publicação

- `ferramentas.html`: um `main`, um H1, duas navegações nomeadas e nenhuma imagem sem `alt`;
- busca por “4-20” reduziu a superfície a 4 cartões em 2 grupos;
- após o campo de busca, Tab moveu o foco para **Instrumentação**, com outline visível de 3 px;
- desktop observado: largura de documento igual à largura útil, sem overflow horizontal;
- CSS preserva `min-width:0`/largura máxima para a introdução e muda a grade em 900 px e 620 px;
- o navegador disponível não expôs controle de viewport exato para 360/390 px nem zoom por atalho; essa conferência visual exata permanece pendente e não foi declarada como concluída.

## Calculadora 4–20 mA

A amostra `calculadora-4-20ma.html` não exigiu edição: um `main`, um H1, controles com rótulos, foco visível em teclado, FAQ acionável e sem overflow no desktop observado. O teste 0–10 bar a 12 mA retornou 50,00% e 5,00 bar. Fórmula e JavaScript permaneceram intactos.

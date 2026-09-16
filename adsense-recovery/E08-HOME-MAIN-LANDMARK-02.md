# E08-SEMANTICS-02 — landmark principal da home

Data: 2026-09-16  
Página: `index.html`

## Defeito reproduzido

A home continha dois elementos `main`: um em torno da apresentação institucional e outro em torno do contato. Uma página deve expor um único landmark principal.

## Correção

O primeiro `main` foi mantido e passou a envolver todo o conteúdo principal até o contato. O segundo `main` foi convertido em `div class="container"`.

A alteração foi estritamente semântica. Não houve mudança em:
- texto ou H1;
- campos, ação ou comportamento do formulário;
- CSS;
- fórmulas;
- `app.js`;
- configuração publicitária.

## Validação

Fonte antes/depois:
- aberturas de `main`: 2 → 1;
- fechamentos de `main`: 2 → 1;
- H1: preservado;
- formulário: preservado;
- blob final: `b7a4755755cfc188b8930fc46e4722035b06aa7f`.

Publicação:
- commit: `b2865bbf569a42b811d16abf64fb5eac8722424d`;
- GitHub Pages run: `35104117692`, `success`;
- artefato: `10450070411`;
- digest: `sha256:603cff6dea4b608b9324cdc9ef024e384b4e79161b14ade9f0d07f19e96fdfda`.

Domínio:
- um elemento `main`;
- um H1;
- um formulário;
- `#contato` dentro do landmark principal;
- largura do corpo igual à viewport no desktop observado.

## Próximo escopo

Continuar E08 em `ferramentas.html` e `calculadora-4-20ma.html` com validação responsiva e por teclado. A varredura estática inicial não reproduziu novo defeito: ambas têm um `main`, um H1, navegações nomeadas e imagens com `alt`. Não editar sem reprodução.

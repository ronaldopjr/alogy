# ALOGY — fila operacional atual

> Versão 2026-09-14.2. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

## E02 — busca de ferramentas

**Arquivos iniciais:** `ferramentas.html`; consultar `style.css` para o conflito de prioridade visual.

**Problema reproduzido:** o contador informa um resultado para “PT100”, mas a regra global `.tool-card { display:flex!important; }` impede que o estado aplicado pelo filtro esconda os demais cartões.

**Implementação:** aplicar um estado de ocultação que prevaleça sobre o layout, sem alterar a grade, os tamanhos ou a identidade dos cartões.

**Aceite:**
- “PT100” → 1 cartão realmente visível e contador 1;
- termo inexistente → 0 cartões e mensagem vazia;
- limpar → 30 cartões, ou a contagem atual confirmada;
- busca sem acento encontra texto com acento;
- grupos sem resultados ficam ocultos;
- desktop e celular mantêm a grade e a navegação.

**Estado:** PRÓXIMO.

## E03 — oferta comercial verdadeira

Revisar `industrial.html`, home, `sobre.html`, CTAs e dados estruturados. Retirar ou qualificar oferta de calibração em campo/rastreável não sustentada. Registrar capacidades ainda não confirmadas em C01.

**Estado:** PENDENTE APÓS E02.

## E04 — inventário e higiene técnica

Recalcular inventário de todos os HTMLs, anúncios, canonicals, sitemaps e decisões por URL. Organizar duplicidades de sitemap e links legados `/cursos`/“Cursos” sem nova poda em massa.

**Estado:** PENDENTE.

## E05–E12

Seguir a ordem e os critérios do plano de continuidade atual: piloto editorial, revisão do acervo, autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

# ALOGY — fila operacional atual

> Versão 2026-09-14.4. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

## E02 — busca de ferramentas

**Estado:** PUBLICADO — FALTA CONFERIR NO DOMÍNIO.

**Alteração:** `style.css` passou a dar prioridade ao estado `display:none` aplicado pelo filtro da central, sem alterar o JavaScript, a grade, os tamanhos ou a identidade dos cartões.

**Validação:**
- “PT100” → 1 cartão realmente visível e contador lógico 1;
- termo inexistente → 0 cartões e mensagem vazia;
- limpar → 30 cartões;
- “valvula” encontra os dois cartões com “Válvula” sem exigir acento;
- cenários repetidos em 1200 px e 390 px;
- CSS original preservado, com adição localizada e sem erro de análise.

Relatório: `E02-TOOLS-SEARCH-FIX.md`. Commit de site: `eec58b20b6de6d8de827cf1f9f623b2987827bb2`.

**Conferência pendente:** em navegador real no domínio, repetir PT100, termo inexistente, limpeza e busca sem acento. O leitor web usado nesta execução confirmou a página publicada, mas não executa a interação JavaScript.

## E03 — oferta comercial verdadeira

**Arquivos iniciais:** `industrial.html`, `index.html`, `sobre.html`, CTAs de ferramentas e dados estruturados diretamente afetados.

**Objetivo:** retirar ou qualificar oferta de calibração em campo/rastreável não sustentada; usar revisão, manutenção e conferência funcional somente no alcance confirmado.

**Dependências:** registrar em C01 equipamentos de bancada, funções de medir/gerar/simular, faixas, documentação, modelos/portes atendidos, meios de teste, local de recebimento, profissionais e parceiros. Dado ausente não pode ser inventado.

**Estado:** PENDENTE APÓS A CONFERÊNCIA FINAL DE E02.

## E04 — inventário e higiene técnica

Recalcular inventário de todos os HTMLs, anúncios, canonicals, sitemaps e decisões por URL. Organizar duplicidades de sitemap e links legados `/cursos`/“Cursos” sem nova poda em massa.

**Estado:** PENDENTE.

## E08-W1 — avisos compartilhados

Reproduzir em amostra representativa qualquer classificação genérica de avisos antes de alterar `app.js`. A busca de código desta etapa não localizou `inferSeverity`/`installDynamicReadout`, mas isso não substitui teste comportamental. Manter como verificação rastreada em E08; não mexer no script compartilhado sem defeito reproduzido.

**Estado:** PENDENTE, sem bloqueio para E03.

## E05–E12

Seguir a ordem e os critérios do plano de continuidade atual: piloto editorial, revisão do acervo, autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

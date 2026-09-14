# ALOGY — fila operacional atual

> Versão 2026-09-14.6. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

## E02 — busca de ferramentas

**Estado:** PUBLICADO — FALTA CONFERIR NO DOMÍNIO.

**Alteração:** `style.css` dá prioridade ao estado `display:none` aplicado pelo filtro da central, sem alterar o JavaScript, a grade, os tamanhos ou a identidade dos cartões.

**Validação local:**
- “PT100” → 1 cartão realmente visível e contador lógico 1;
- termo inexistente → 0 cartões e mensagem vazia;
- limpar → 30 cartões;
- “valvula” encontra os dois cartões com “Válvula” sem exigir acento;
- cenários repetidos em 1200 px e 390 px;
- CSS original preservado, com adição localizada e sem erro de análise.

Relatório: `E02-TOOLS-SEARCH-FIX.md`. Commit de site: `eec58b20b6de6d8de827cf1f9f623b2987827bb2`.

**Conferência pendente:** em navegador real no domínio, repetir PT100, termo inexistente, limpeza e busca sem acento. O leitor web confirma a página publicada, mas não executa a interação JavaScript.

## E03 — oferta comercial verdadeira

**Estado:** EM EXECUÇÃO — lote 01 publicado; falta conferir no domínio e revisar os demais pontos do escopo inicial.

### E03-COMMERCIAL-TRUTH-01 — `industrial.html`

- promessa direta de “calibração em campo” removida;
- oferta posicionada em avaliação, inspeção, manutenção, configuração e conferência funcional sob escopo;
- diferença entre manutenção/conferência funcional e certificado de calibração, acreditação ou rastreabilidade explicitada;
- definição prévia de equipamento, modelo, quantidade, falha, local, recursos, testes e documentação exigida;
- oferta de apoio em NR10/NR12 qualificada, sem alegação de conformidade automática;
- ícone social da Hotmart retirado desta página, preservando o link global do Guia no menu.

Commit de site: `e945d6e5e7259e456bde56339084a2b37ff4951a`.
Relatório: `E03-COMMERCIAL-TRUTH-01-REPORT.md`.

**Conferência pendente:** abrir `https://www.alogy.com.br/industrial.html`, confirmar título, conteúdo, navegação, imagens e layout em desktop/celular. O código publicado em `main` foi conferido; a resposta interativa do domínio não foi validada neste ambiente.

### Próximo lote E03

Revisar `index.html`, `sobre.html`, `calculadora-4-20ma.html` e outros CTAs comerciais diretamente relacionados. Manter linguagem geral de avaliação sob consulta enquanto C01 não confirmar bancada, funções, faixas, modelos/portes, meios de teste, local de recebimento, profissionais e parceiros.

## E04 — inventário e higiene técnica

Recalcular inventário de todos os HTMLs, anúncios, canonicals, sitemaps e decisões por URL. Organizar duplicidades de sitemap e links legados `/cursos`/“Cursos” sem nova poda em massa.

**Estado:** PENDENTE.

## E08-W1 — avisos compartilhados

Reproduzir em amostra representativa qualquer classificação genérica de avisos antes de alterar `app.js`. Manter como verificação rastreada em E08; não mexer no script compartilhado sem defeito reproduzido.

**Estado:** PENDENTE, sem bloqueio para E03.

## E05–E12

Seguir a ordem e os critérios do plano de continuidade atual: piloto editorial, revisão do acervo, autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

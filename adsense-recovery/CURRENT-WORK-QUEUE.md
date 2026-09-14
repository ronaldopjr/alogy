# ALOGY — fila operacional atual

> Versão 2026-09-14.7. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

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

**Conferência pendente:** em navegador real no domínio, repetir PT100, termo inexistente, limpeza e busca sem acento.

## E03 — oferta comercial verdadeira

**Estado:** PUBLICADO — FALTA CONFERIR NO DOMÍNIO.

### E03-COMMERCIAL-TRUTH-01 — `industrial.html`

- promessa direta de “calibração em campo” removida;
- oferta posicionada em avaliação, inspeção, manutenção, configuração e conferência funcional sob escopo;
- diferença entre manutenção/conferência funcional e certificado de calibração, acreditação ou rastreabilidade explicitada;
- definição prévia de equipamento, modelo, quantidade, falha, local, recursos, testes e documentação exigida;
- oferta de apoio em NR10/NR12 qualificada, sem alegação de conformidade automática.

Commit de site: `e945d6e5e7259e456bde56339084a2b37ff4951a`.
Relatório: `E03-COMMERCIAL-TRUTH-01-REPORT.md`.

### E03-COMMERCIAL-TRUTH-02 — home, Sobre e CTA 4-20 mA

- home reposicionada para avaliação e manutenção de instrumentação, válvulas, atuadores e posicionadores;
- promessa de calibração removida do banner e dos metadados comerciais;
- página Sobre passou a explicar escopo, limites e avaliação prévia;
- CTA da calculadora 4-20 mA alterado sem tocar em fórmula ou JavaScript técnico;
- links sociais diretos da Hotmart removidos da home e da página Sobre, preservando o menu “Guia”.

Commit de site: `9a4c33175da73b3a53fe7912bca33da5bdcdd8b8`.
Relatório: `E03-COMMERCIAL-TRUTH-02-REPORT.md`.

**Conferência pendente:**
- `https://www.alogy.com.br/`: título, banner 1, CTA, formulário, imagens e responsividade;
- `https://www.alogy.com.br/industrial.html`: título, seções, links, imagens e responsividade;
- `https://www.alogy.com.br/sobre.html`: metadados visíveis, conteúdo, endereço, CTA e responsividade;
- `https://www.alogy.com.br/calculadora-4-20ma.html`: cálculo intacto e novo CTA;
- repetir também os quatro cenários de busca de E02.

As buscas exatas por frases antigas retornaram zero resultados, mas o GitHub marcou a pesquisa como incompleta. O inventário integral de E04 continua obrigatório.

## E04 — inventário e higiene técnica

Recalcular inventário de todos os HTMLs, anúncios, canonicals, sitemaps, CTAs comerciais e decisões por URL. Organizar duplicidades de sitemap e links legados `/cursos`/“Cursos” sem nova poda em massa.

**Estado:** PRÓXIMA ETAPA após a conferência de E02/E03; tarefas de leitura e inventário podem avançar sem alterar páginas.

## E08-W1 — avisos compartilhados

Reproduzir em amostra representativa qualquer classificação genérica de avisos antes de alterar `app.js`. Manter como verificação rastreada em E08; não mexer no script compartilhado sem defeito reproduzido.

**Estado:** PENDENTE, sem bloqueio para E04.

## E05–E12

Seguir a ordem e os critérios do plano de continuidade atual: piloto editorial, revisão do acervo, autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

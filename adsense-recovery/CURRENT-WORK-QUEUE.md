# ALOGY — fila operacional atual

> Versão 2026-09-14.9. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

## E02 — busca de ferramentas

**Estado:** CONCLUÍDO.

A correção original do filtro permanece no commit `eec58b20b6de6d8de827cf1f9f623b2987827bb2`. No gate final foi reproduzido um segundo problema: em 390 px a central tinha `scrollWidth=545` por causa da faixa horizontal dentro de `.tool-page-intro`.

A correção responsiva foi publicada no commit `cb653d8c001a10849392835922d5e7e8d89fa60e`, limitando somente `.tool-page-intro` e `.tool-category-jump` à largura disponível.

**Aceite no artefato exato do GitHub Pages, em 1200 e 390 px:**
- `PT100` → 1 cartão visível;
- termo inexistente → 0 cartões + mensagem vazia;
- limpar → 30 cartões;
- `valvula` → 2 cartões com “Válvula”;
- mobile 390 px → `scrollWidth=390` após a correção;
- desktop sem overflow horizontal.

Workflow Pages `34878751310`: concluído com sucesso para `cb653d8c...`.

## E03 — oferta comercial verdadeira

**Estado:** CONCLUÍDO no escopo inicial; C01 continua como dependência comercial separada.

Publicações:
- `e945d6e5e7259e456bde56339084a2b37ff4951a` — `industrial.html`;
- `9a4c33175da73b3a53fe7912bca33da5bdcdd8b8` — home, Sobre e CTA 4–20 mA.

**Gate do artefato publicado:**
- home, Industrial, Sobre e calculadora 4–20 mA renderizadas em 1200 e 390 px sem overflow horizontal;
- promessa direta antiga de calibração em campo não aparece nas páginas verificadas;
- calculadora 4–20 mA preservou 6 bar em 0–10 bar → 13,600 mA / 60,00%; LRV=URV limpa resultado; 12 bar → 23,200 mA / 120,00% como extrapolação;
- Hotmart social removido das páginas comerciais alteradas.

A oferta continua deliberadamente limitada a avaliação, inspeção, manutenção, configuração e conferência funcional sob escopo. Não anunciar calibração rastreável, acreditação, bancada, equipe ou parceiros não confirmados.

## E04 — inventário e higiene técnica

**Estado:** EM EXECUÇÃO.

Inventário estrutural recalculado no artefato publicado:
- 344 HTMLs totais;
- 270 páginas públicas candidatas;
- 73 HTMLs de relatórios/controles internos;
- 1 HTML de verificação Google;
- 222 páginas públicas indexáveis pela configuração atual;
- 48 páginas públicas com `noindex`;
- 222 URLs únicas nos quatro sitemaps filhos, todas com arquivo público correspondente;
- 6 URLs duplicadas entre sitemap prioritário e complementar;
- 88 páginas indexáveis com carregador direto do AdSense e 0 páginas `noindex` com esse carregador;
- 149 páginas públicas ainda com `cursos.html` ou rótulo `Cursos`;
- 139 páginas públicas ainda contendo link Hotmart;
- 10 páginas públicas com contagem de H1 diferente de 1.

O `ADSENSE-INVENTORY.csv` existente não pode continuar como fonte de verdade sem regeneração: possui 390 linhas, 122 caminhos já inexistentes e não contém 76 HTMLs atuais.

### Próxima ação exata

1. Regenerar `adsense-recovery/ADSENSE-INVENTORY.csv` com as 270 páginas públicas atuais, separando página pública, relatório/controle e verificação.
2. Preservar decisões editoriais anteriores somente quando a URL ainda existe; novas páginas entram como `unclassified`/`a_classificar` até revisão.
3. Deduplicar as seis URLs de sitemap sem excluir as páginas.
4. Tratar `Cursos`/`cursos.html`, Hotmart e H1 em lotes pequenos e validados; não fazer substituição massiva cega.
5. Não iniciar nova poda em massa.

## E08-W1 — avisos compartilhados

Reproduzir em amostra representativa qualquer classificação genérica de avisos antes de alterar `app.js`. Manter como verificação rastreada em E08; não mexer no script compartilhado sem defeito reproduzido.

**Estado:** PENDENTE, sem bloqueio para E04.

## E05–E12

Seguir a ordem e os critérios do plano de continuidade atual: piloto editorial, revisão do acervo, autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

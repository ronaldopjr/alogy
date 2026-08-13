# Registro da recuperação do AdSense

## 2026-08-13 — F1-TECHNICAL-PLAN

- Confirmada a hospedagem em GitHub Pages, build legado, branch `main`, raiz `/`, CNAME `www.alogy.com.br` e HTTPS obrigatório.
- Confirmado que o GitHub Pages não oferece configuração de status HTTP 301 por caminho neste repositório estático.
- Determinado que redirecionar `/index.html` por alteração do próprio arquivo quebraria também a home `/`, pois ambos usam o mesmo recurso no GitHub Pages; mantida a canonical para `/` como solução segura.
- Confirmado que os dois redirects legados já usam `noindex,follow`, canonical para o destino, meta refresh, JavaScript e link manual, sem AdSense e fora dos sitemaps.
- Determinado que os redirects devem permanecer como fallback estático até existir camada de CDN/proxy ou hospedagem com regras HTTP 301.
- Confirmado que `google00ce371ffda114a1.html` é um token de propriedade do Google; sua remoção pode invalidar a propriedade se for o único método ativo.
- Determinado manter o arquivo de verificação por enquanto; ele está fora do sitemap e não carrega AdSense, portanto seu soft 404 histórico não justifica risco de perda da propriedade.
- Nenhuma correção técnica de página foi aplicada porque as alternativas disponíveis seriam neutras ou mais arriscadas na hospedagem atual.
- Nenhuma página do site foi alterada.
- A branch `main` não foi alterada.

## 2026-08-13 — F0-RECONCILE

- Corrigido o auditor para ignorar HTML embutido em scripts ao contar elementos H1.
- Eliminados 11 falsos positivos de H1 duplicado; eram títulos em modelos JavaScript de memória de cálculo/impressão.
- Confirmado que todas as 299 páginas editoriais indexáveis possuem exatamente um H1 renderizado.
- Quantificados padrões editoriais: 60 artigos, 209 calculadoras, 10 checklists, oito hubs e 12 outras páginas indexáveis.
- Apenas 18 das 299 páginas indexáveis apresentam indicação visível de autoria ou revisão no conteúdo.
- 255 páginas usam a organização como autora em JSON-LD; nenhuma usa uma pessoa identificada como autora em JSON-LD.
- Apenas 30 páginas possuem `datePublished` no código estruturado.
- Identificados parágrafos idênticos repetidos em grupos de até 16 páginas e o título “Erros comuns” em 41 páginas indexáveis.
- A repetição de um título isolado não é defeito; os blocos completos repetidos serão usados como sinal de priorização editorial.
- Nenhuma página do site foi alterada.
- A branch `main` não foi alterada.

## 2026-08-13 — F0-INVENTORY

- Inventariadas as 390 páginas HTML da branch de recuperação.
- Confirmadas 299 páginas `index,follow` e 90 páginas `noindex`; existe ainda um arquivo de verificação sem meta robots.
- Confirmadas 299 URLs de páginas nos sitemaps ativos.
- Confirmado que nenhuma página `noindex` está nos sitemaps.
- Confirmado que nenhuma página `noindex` carrega AdSense.
- Identificadas 87 páginas com o identificador do AdSense e 303 sem ele.
- Identificado o arquivo antigo `google00ce371ffda114a1.html`, sem canonical, robots ou H1 e fora dos sitemaps.
- A primeira versão do auditor sinalizou 11 páginas com dois H1; a reconciliação posterior confirmou que os segundos títulos estavam dentro de modelos JavaScript e não eram elementos renderizados.
- Identificadas cinco páginas institucionais indexáveis com menos de 300 palavras visíveis; a contagem é apenas um sinal de triagem, não um critério do Google.
- Nenhuma página do site foi alterada.
- A branch `main` não foi alterada.

## 2026-08-13 — F0-BOOTSTRAP

- Criado o sistema persistente de controle na branch `agent/adsense-recovery`.
- Registrado o baseline conhecido do repositório, AdSense e Search Console.
- Definidos gates de segurança, fases, limites e ações proibidas.
- Criado inventário vazio para preenchimento no lote `F0-INVENTORY`.
- Nenhuma página do site foi alterada.
- A branch `main` não foi alterada.

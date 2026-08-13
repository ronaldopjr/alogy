# Registro da recuperação do AdSense

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

# Registro da recuperação do AdSense

## 2026-08-14 — F2-CLASSIFY-P0-HART-ARTICLES-01

- Classificados exatamente dois artigos monetizados e indexáveis sobre HART definidos pelo estado.
- Comissionamento HART e diagnóstico de falhas de comunicação receberam `keep`, prioridade P1 e confiança alta.
- Os conteúdos são complementares: o primeiro verifica coerência entre dispositivo, corrente e sistema; o segundo aprofunda carga, tensão, cabo, capacitância, ruído e barreiras.
- Ambos usam fontes técnicas primárias e delimitam os riscos de alterações em campo; a autoria pessoal permanece para a F6.
- Nenhum HTML, fórmula, JavaScript, canonical, robots, sitemap ou arquivo publicado foi alterado. Os PDFs confidenciais não foram lidos nem utilizados.
- `main` permaneceu no baseline.

## 2026-08-14 — F2-CLASSIFY-P0-CALIBRATION-ARTICLES-03

- Classificados exatamente os dois artigos monetizados e indexáveis restantes do grupo de calibração.
- Transmissor de temperatura recebeu `keep`, prioridade P1 e confiança alta: distingue fronteiras do teste, inclui método, exemplo, limitações e referências de fabricante.
- Válvula de controle recebeu `improve`, prioridade P0 e confiança alta: o roteiro básico e as travas de segurança são úteis, mas faltam fontes primárias e maior separação entre comando, curso, feedback e comportamento mecânico.
- Nenhum HTML, fórmula, JavaScript, canonical, robots, sitemap ou arquivo publicado foi alterado. Os PDFs confidenciais não foram lidos nem utilizados.
- `main` permaneceu no baseline.

## 2026-08-13 — F2-CLASSIFY-P0-CALIBRATION-ARTICLES-02

- Classificados exatamente cinco artigos monetizados e indexáveis de calibração definidos pelo estado.
- pHmetro, totalizador de vazão, transmissor DP de vazão, transmissor DP de nível e transmissor de pressão receberam `keep`, prioridade P1 e confiança alta.
- Os cinco apresentam métodos e exemplos delimitados, limitações de uso e referências técnicas externas; a lacuna comum de autoria ou revisão pessoal permanece reservada para a F6.
- Nenhum HTML, fórmula, JavaScript, canonical, robots, sitemap ou arquivo publicado foi alterado. Os PDFs confidenciais não foram lidos nem utilizados.
- `main` permaneceu no baseline.

## 2026-08-13 — F2-CLASSIFY-P0-CALIBRATION-ARTICLES-01

- Classificados exatamente cinco artigos monetizados e indexáveis de calibração definidos pelo estado.
- Analisadores de processo, cartão analógico de CLP, conversor I/P–P/I e manômetro receberam `keep`, prioridade P1 e confiança alta: apresentam método, exemplos ou cálculos delimitados, ressalvas e referências técnicas úteis.
- Calibração de instrumentos industriais recebeu `improve`, prioridade P0 e confiança alta: é um hub introdutório ainda genérico, sem exemplo completo, critérios de decisão, tratamento de incerteza ou fontes primárias identificadas.
- A lacuna comum de autoria ou revisão pessoal permanece reservada para a F6.
- Nenhum HTML, fórmula, JavaScript, canonical, robots, sitemap ou arquivo publicado foi alterado. Os PDFs confidenciais não foram lidos nem utilizados.
- `main` permaneceu no baseline.

## 2026-08-13 — F2-CLASSIFY-P0-MONETIZED-ARTICLES-03

- Classificados exatamente cinco artigos monetizados e indexáveis definidos pelo estado.
- ORP, rotâmetro e slope de pH foram classificados como `keep` P1: apresentam método, exemplos delimitados, limitações e referências externas úteis; falta somente autoria/revisão pessoal, tratada na F6.
- SIL/PFD e LOPA foram classificados como `manual-review` P0: ambos tratam segurança funcional e segurança de processo; toda revisão de conteúdo depende de fontes primárias e validação de especialista.
- Nenhum HTML, fórmula, JavaScript, canonical, robots, sitemap ou arquivo publicado foi alterado. Os PDFs confidenciais não foram lidos nem utilizados.
- `main` permaneceu no baseline.

## 2026-08-13 — F2-CLASSIFY-P0-MONETIZED-ARTICLES-02

- Classificados exatamente cinco artigos monetizados e indexáveis definidos pelo estado; todos receberam `improve`, prioridade P0 e confiança alta.
- NPSH e potência de bomba: textos introdutórios sem exemplo numérico, unidades, condições operacionais, curvas de fabricante ou fontes identificadas.
- Solenóide para atuador: faltam método reproduzível para ar comprimido, dados de fabricante, distinção entre alimentação e exaustão e delimitação para funções de segurança.
- Inspeção em área classificada: o checklist é útil, mas a futura edição depende de revisão técnica, fontes normativas confirmadas e escopo por tipo de proteção e inspeção.
- Massa em tanque: há diferenciação inicial entre geometria e densidade, porém faltam cálculo completo, limites metrológicos, referências e revisão pessoal.
- Nenhum HTML, fórmula, JavaScript, canonical, robots, sitemap ou arquivo publicado foi alterado. Os PDFs confidenciais não foram lidos nem utilizados.
- `main` permaneceu no baseline.

## 2026-08-13 — F2-CLASSIFY-P0-MONETIZED-ARTICLES-01

- Classificados exatamente cinco artigos monetizados e indexáveis definidos pelo estado.
- Os cinco receberam `improve`, prioridade P0 e confiança alta.
- Manutenção preditiva: faltam exemplo diagnóstico, critérios de baseline/amostragem, fontes e experiência verificável.
- Cibersegurança OT: tema sensível sem fontes oficiais ou framework identificado; qualquer melhoria exigirá fontes primárias e revisão especializada.
- Gêmeo digital: faltam arquitetura, proveniência e qualidade das TAGs, validação e exemplo reproduzível.
- Selo remoto: a ligação com a calculadora é positiva, mas faltam exemplo numérico, diagrama, premissas, fontes de fabricante e validação de engenharia.
- Ar de instrumentos: a ISO 8573-1 é citada sem edição/classes/fontes; a ferramenta ligada calcula consumo, não qualidade.
- Nenhuma página HTML, fórmula, JavaScript, canonical, robots, sitemap ou arquivo publicado foi alterado.
- Os PDFs confidenciais não foram lidos nem utilizados.
- `main` permaneceu no baseline.

## 2026-08-13 — AUTOMATION-HARDENING

- Adicionado protocolo de concorrência otimista baseado no SHA inicial da branch.
- Cada execução passa a criar no máximo um commit atômico com blobs, árvore e estado no mesmo objeto Git.
- Proibidos commits separados por arquivo para transações de lote.
- A referência só pode avançar com force=false; mudança concorrente ou rejeição interrompe a execução sem mesclar nem repetir.
- O auditor passou a preservar decisões editoriais existentes em reexecuções.
- Separadas métricas do documento e do conteúdo principal; adicionados título, descrição e contagens de H2/H3 para triagem futura.
- O script revisado passou em compilação e teste de regressão com preservação de classificação.
- Nenhuma página do site foi alterada.

## 2026-08-13 — F2-CLASSIFY-P0-INSTITUTIONAL

- Classificadas exatamente cinco páginas institucionais prioritárias: index.html, sobre.html, industrial.html, residencial.html e cases.html.
- Home, Sobre, Industrial e Residencial receberam improve, prioridade P0 e confiança alta.
- Cases recebeu manual-review, prioridade P0 e confiança alta devido a alegações de resultados, locais, marcas e necessidade de confirmar autorização de divulgação.
- Os PDFs anexados não foram lidos nem usados na classificação; permanecem fora de qualquer fluxo automático de publicação.
- Nenhuma página HTML, fórmula, JavaScript, sitemap ou arquivo publicado foi alterado.
- main permaneceu no baseline.

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

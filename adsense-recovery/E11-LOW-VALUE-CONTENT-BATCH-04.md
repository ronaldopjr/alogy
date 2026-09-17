# E11 — Conteúdo de baixo valor · lote 04

Data operacional: 2026-09-16 (America/Sao_Paulo)

## Objetivo

Continuar a recuperação editorial do AdSense somente na superfície ativa do `blog.html`, em lote pequeno de até 3 páginas, sem poda em massa e sem solicitar nova análise do AdSense.

## Reconciliação de concorrência

A execução horária da automação `ALOGY AdSense Contínuo` iniciou este lote antes da retomada manual. O commit `94d3854a1e341b0216d4a781a1538ea269baa529` alterou três artigos ativos e o `sitemap-blog.xml`. Como o lote já estava em andamento, a sessão manual não repetiu a triagem nem abriu novas páginas; revisou o que havia sido publicado, identificou um resíduo objetivo de navegação e concluiu o mesmo lote.

## Páginas selecionadas

As três páginas têm card ativo em `blog.html` e ficaram dentro do limite de 1–3 páginas:

1. `blog-calibracao-cartao-analogico-clp.html`
2. `blog-calibracao-conversor-ip-pi.html`
3. `blog-calibracao-totalizador-vazao.html`

As páginas `blog-inspecao-instrumentos-area-classificada.html` e `blog-ot-cybersecurity-instrumentacao.html` permaneceram fora da edição automática por serem `manual-review/P0`.

## Sinais objetivos tratados

- estrutura editorial anterior mais superficial e pouco orientada a diagnóstico;
- necessidade de distinguir limites de teste e conclusões possíveis;
- necessidade de fontes primárias para valores e comportamentos dependentes de fabricante/modelo;
- navegação legada `Cursos/cursos.html` ainda presente nos três artigos após a primeira publicação do lote;
- Hotmart foi removido pelo commit editorial inicial e não foi reintroduzido.

## Melhorias publicadas no commit editorial inicial

### Cartão analógico CLP/DCS

- separação entre canal isolado, laço completo e teste funcional;
- explicação de `raw`, unidade de engenharia e diagnóstico por camadas;
- exemplo didático 4–20 mA / 0–27.648 com cálculo reproduzível;
- orientação para não transportar limites de um módulo para outro;
- sequência segura de teste, registro `as-found/as-left` e matriz de diagnóstico;
- referências primárias Siemens, Rockwell Automation e JCGM/BIPM.

### Conversor I/P e P/I

- relação linear entre entrada e saída com exemplo 4–20 mA / 3–15 psi;
- ciclo ascendente e descendente em cinco pontos;
- separação entre ensaio direto, ensaio no laço e teste funcional;
- diagnóstico por padrão de erro, suprimento, carga e resposta dinâmica;
- referência ao Fisher 646 somente como exemplo específico, sem universalizar seus números;
- referências Emerson e JCGM/BIPM.

### Totalizador de vazão

- cadeia completa de totalização: referência física, pulsos, K-factor, conversão e apresentação;
- cálculo reproduzível de volume, erro e estimativa de correção do K-factor com ressalvas;
- efeito de resolução, sincronismo, frequência e largura de pulso;
- diagnóstico por padrão de falha e verificação da interface elétrica;
- referências Endress+Hauser e JCGM/BIPM.

## Correção de fechamento da sessão manual

A revisão do HTML final identificou que os três artigos ainda mantinham `Cursos/cursos.html` nos menus desktop e mobile. O resíduo foi corrigido exclusivamente para `Guia` → `/guia/`, preservando todo o conteúdo técnico publicado pela automação.

Commits de fechamento:

- conversor I/P e P/I: `fea12c4cabd08d0a31c75f7b4c79401a89779327`;
- totalizador de vazão: `04e96e74ce96ffbee030c84ca604da8cfb167f3b`;
- cartão analógico: `836f1e2f661a61e86bf6fc88419a38679dc12ec9`.

A comparação entre `94d3854a1e341b0216d4a781a1538ea269baa529` e `836f1e2f661a61e86bf6fc88419a38679dc12ec9` mostrou somente os três arquivos acima, com 3 adições e 3 remoções em cada um, correspondentes à navegação desktop/mobile e sem alteração de conteúdo técnico.

## Sitemap

O próprio commit editorial inicial `94d3854a1e341b0216d4a781a1538ea269baa529` atualizou `sitemap-blog.xml` com `lastmod=2026-09-16` para as três páginas selecionadas. Não foi necessário novo commit de sitemap após a correção de navegação.

## Validação de publicação

- commit final de conteúdo/navegação do lote: `836f1e2f661a61e86bf6fc88419a38679dc12ec9`;
- GitHub Pages run: `35171769423`;
- conclusão: `success`;
- artifact: `10476029994`;
- digest: `sha256:1ab18519a0fc8f42a10c0733cf4d0305097da864c6ed8734decf0420e589f770`.

## Limites preservados

- nenhuma fórmula ou JavaScript das calculadoras foi alterado;
- nenhuma página `manual-review/P0` foi editada;
- nenhuma capacidade comercial, equipe, laboratório, rastreabilidade, certificado, parceiro, cliente ou case foi inventado;
- nenhuma poda/noindex em massa foi feita;
- nenhuma solicitação de revisão do AdSense foi enviada.

## Próximo passo

E11 — lote 05: triar somente os artigos ainda ativos restantes em `blog.html`, excluindo as páginas `manual-review/P0` e evitando reabrir lotes 01–04 sem defeito novo. Selecionar no máximo 1–3 páginas apenas quando houver sinais objetivos combinados de baixo valor ou resíduos editoriais antigos; revisar somente as selecionadas, validar Pages/sitemap e atualizar o mesmo MD canônico. Não solicitar nova análise do AdSense automaticamente.

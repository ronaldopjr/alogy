# E04 — Inventário e higiene técnica — lote 02

Data: 2026-09-14

## Escopo

Revisão do inventário regenerado após a exclusão dos controles internos do GitHub Pages e a deduplicação dos sitemaps.

## Resultado estrutural

- 271 arquivos/rotas HTML no artefato: 270 páginas/rotas do site e 1 arquivo de verificação Google.
- 222 páginas indexáveis; todas estão presentes nos sitemaps.
- 48 rotas `noindex`; nenhuma está nos sitemaps.
- Nenhuma página de conteúdo indexável está sem canonical.
- As divergências de canonical encontradas são aliases/redirects deliberados (`calculadora-bitola-cabo`, `calculadora-incerteza-calibracao`, `calculadora-lrv-urv-span`, `/cursos/`, `cursos.html`) e a forma física `guia/index.html` canonicalizada para `/guia/`.
- A única rota sem canonical é o arquivo de verificação do Google, que não é conteúdo editorial.
- Depois da exclusão dos documentos internos, não existe problema de H1 nas páginas indexáveis. `calculadora-bitola-cabo.html` é um alias `noindex`; o arquivo de verificação Google não precisa de H1.

## Cursos → Guia

O código compartilhado `app.js` já contém `normalizeGuideLinks()`, que normaliza links internos para `/guia/` e troca os rótulos `Curso/Cursos` por `Guia` no DOM. O arquivo legado `cursos.html` também já está `noindex,follow`, canonicalizado para `/guia/` e redireciona o visitante para `/guia/`.

O inventário de fonte ainda encontra 149 HTMLs contendo a marcação antiga e 114 deles são indexáveis. Isso é dívida de higiene do HTML-fonte, mas não é uma navegação quebrada no navegador atual. A limpeza física será feita em lotes pequenos, sem alterar conteúdo técnico ou fórmulas.

## Hotmart

139 páginas ainda contêm link Hotmart, majoritariamente no bloco social legado. Não será feita remoção massiva cega. O link será classificado por contexto e removido onde conflitar com o posicionamento atual; páginas comerciais já corrigidas permanecem sem esse link conforme E03.

## Inventário canônico

O CSV regenerado possui 271 linhas de dados e está validado localmente. O CSV antigo no repositório continua marcado como obsoleto até a substituição integral segura; ele não deve ser usado para decisões de poda.

## Decisão

E04 continua em execução. A higiene estrutural crítica está limpa: documentos internos fora do Pages, sitemaps sem duplicidade, indexáveis cobertos por sitemap, noindex fora de sitemap e canonicals coerentes. Próximo foco: limpar a navegação legada no HTML-fonte em lotes pequenos e depois usar o inventário para selecionar o piloto editorial E05.

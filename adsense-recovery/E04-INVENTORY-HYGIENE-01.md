# E04 — inventário e higiene estrutural — lote 01

Data: 2026-09-14

## Base e método

- Base inicial: `690a057e79766f10a9c1a9ba95e99e33db44a007`.
- Inventário recalculado sobre o artefato exato do GitHub Pages, separando HTML autoral de HTML que o Jekyll gerava a partir de arquivos Markdown internos.
- Nenhuma página técnica foi podada ou recebeu `noindex` neste lote.

## Achado estrutural

O artefato anterior continha 344 HTMLs: 271 arquivos HTML de origem e 73 HTMLs adicionais gerados pelo Jekyll a partir de relatórios/controles `.md`. Esses 73 documentos internos não fazem parte do conteúdo editorial da ALOGY e estavam sendo publicados desnecessariamente.

Foi criado `_config.yml` para excluir `adsense-recovery`, relatórios/auditorias/validações internos, README e testes da saída do GitHub Pages. Commit: `ddf9969a2c4f524a0a30b9b73f3f1ac2974ce967`.

## Sitemap

As seis URLs repetidas entre o sitemap prioritário e o complementar foram removidas apenas do complementar. Nenhuma URL de conteúdo foi excluída do conjunto de sitemaps. Commit: `9f3d7422cb44249bc34abc62002184859d2be13d`.

## Validação do artefato publicado

Workflow Pages `34879430518`: `completed / success` para `9f3d7422cb44249bc34abc62002184859d2be13d`.

Artefato `10362780986`:
- 271 HTMLs totais;
- zero `.md` publicados;
- diretório `adsense-recovery` ausente;
- relatórios/auditorias/JSON/CSV internos amostrados ausentes;
- 226 elementos `<loc>` únicos considerando o sitemap-index e os quatro sitemaps filhos;
- 222 URLs únicas de conteúdo nos sitemaps filhos;
- zero duplicidades de URL entre os sitemaps filhos.

## Universo editorial real

Dos 271 HTMLs de origem:
- 1 é arquivo de verificação do Google, não página editorial;
- 270 são páginas/rotas do site;
- 222 páginas de conteúdo indexáveis estão representadas nos sitemaps;
- 48 rotas estão `noindex`;
- 88 páginas indexáveis carregam diretamente o script do AdSense;
- nenhum `noindex` carrega diretamente o script do AdSense;
- 149 páginas ainda possuem navegação legada `Cursos/cursos.html`;
- 139 páginas ainda contêm link para Hotmart, a classificar por contexto;
- a aparente quantidade alta de H1 incorreto vinha majoritariamente dos HTMLs internos gerados pelo Jekyll; no universo autoral restam apenas o redirect legado `calculadora-bitola-cabo.html` sem H1 e o arquivo de verificação Google, sem impacto editorial equivalente.

## Próxima ação

1. Atualizar o inventário canônico com as 271 rotas/arquivos de origem, preservando classificações editoriais já válidas.
2. Tratar `Cursos/cursos.html` em lotes pequenos, substituindo navegação por `Guia` e `/guia/`, preservando o redirect legado `/cursos/`.
3. Classificar links Hotmart por função antes de remover; não fazer substituição em massa sem verificar contexto.
4. Continuar sem nova poda em massa e sem solicitar revisão ao AdSense.

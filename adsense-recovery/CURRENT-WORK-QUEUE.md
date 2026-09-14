# ALOGY — fila operacional atual

> Versão 2026-09-14.10. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

## E02 — busca de ferramentas

**Estado:** CONCLUÍDO.

Busca e responsividade validadas no artefato publicado. PT100 → 1; termo inexistente → 0; limpar → 30; `valvula` → 2. Em 390 px, a largura rolável foi corrigida de 545 px para 390 px.

Commits principais: `eec58b20b6de6d8de827cf1f9f623b2987827bb2` e `cb653d8c001a10849392835922d5e7e8d89fa60e`.

## E03 — oferta comercial verdadeira

**Estado:** CONCLUÍDO NO ESCOPO INICIAL.

Home, Industrial, Sobre e CTA 4–20 mA foram publicados e validados sem promessa comercial de calibração/rastreabilidade não comprovada. Permanecem para E04/E06 o inventário integral de alegações/CTAs e a matriz de capacidade C01.

Commits de site: `e945d6e5e7259e456bde56339084a2b37ff4951a` e `9a4c33175da73b3a53fe7912bca33da5bdcdd8b8`.

## E04 — inventário e higiene técnica

**Estado:** EM EXECUÇÃO — LOTE E04-INVENTORY-HYGIENE-01 VALIDADO.

### Resultado estrutural

O artefato anterior tinha 344 HTMLs porque o Jekyll convertia 73 relatórios/controles Markdown internos em HTML público. Esses documentos não eram páginas editoriais da ALOGY.

Foi criado `_config.yml` para retirar da publicação `adsense-recovery`, relatórios/auditorias/validações internos, README e testes. Commit: `ddf9969a2c4f524a0a30b9b73f3f1ac2974ce967`.

As seis URLs duplicadas entre sitemaps foram removidas apenas do sitemap complementar. Nenhuma página foi excluída do conjunto de sitemaps. Commit: `9f3d7422cb44249bc34abc62002184859d2be13d`.

Workflow Pages `34879430518`: sucesso. Artefato `10362780986` validado com:
- 271 HTMLs de origem/publicados, dos quais 1 é arquivo de verificação Google;
- zero Markdown publicado e diretório `adsense-recovery` ausente;
- 222 URLs de conteúdo nos sitemaps filhos;
- zero duplicidades entre sitemaps;
- 48 rotas `noindex`;
- 88 páginas indexáveis com carregador direto do AdSense e zero `noindex` com carregador direto;
- 149 páginas ainda com `Cursos/cursos.html`;
- 139 páginas com link Hotmart, ainda a classificar por contexto.

A contagem anterior de H1 problemático estava contaminada pelos HTMLs gerados dos relatórios. No universo autoral, os únicos HTMLs sem exatamente um H1 são um redirect legado `noindex` e o arquivo de verificação Google; isso não justifica uma campanha de edição de H1 nas páginas de conteúdo.

Relatório: `E04-INVENTORY-HYGIENE-01.md`.

### Próximo lote E04

1. Atualizar o inventário canônico a partir das 271 rotas/arquivos de origem; a versão regenerada já foi produzida a partir do artefato exato, mas o CSV do repositório ainda precisa ser substituído.
2. Corrigir `Cursos/cursos.html` em lotes pequenos, começando pelas páginas institucionais/legais e ferramentas já identificadas, usando `Guia` e `/guia/`.
3. Preservar `/cursos/` como redirect legado `noindex` para compatibilidade.
4. Classificar Hotmart por contexto antes de qualquer remoção adicional; não remover em massa.
5. Não fazer nova poda em massa e não solicitar revisão ao AdSense nesta etapa.

## E08-W1 — avisos compartilhados

Reproduzir em amostra representativa qualquer classificação genérica de avisos antes de alterar `app.js`. Não mexer no script compartilhado sem defeito reproduzido.

**Estado:** PENDENTE, sem bloqueio para E04.

## E05–E12

Seguir a ordem do plano atual: piloto editorial, revisão do acervo, autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

# ALOGY — fila operacional atual

> Versão 2026-09-14.13. Esta é a única fila executável. Filas F4/F5 anteriores são históricas.

## Regra permanente de navegação comercial

A navegação pública usa **uma única entrada `Serviços`**, apontando para `industrial.html`.

- Não restaurar os rótulos separados `Serviços Industriais` e `Serviços Residenciais`.
- Não usar a antiga frente residencial como posicionamento público da ALOGY.
- `residencial.html` é apenas rota legada `noindex,follow`, com canonical e redirecionamento para `industrial.html`; permanece fora do sitemap.
- Termos técnicos como instrumentação industrial, automação industrial e elétrica industrial continuam naturais no conteúdo e no SEO. A simplificação vale para a aba pública e para o posicionamento comercial consolidado.

## E02 — busca de ferramentas

**Estado:** CONCLUÍDO.

Busca e responsividade validadas no artefato publicado. PT100 → 1; termo inexistente → 0; limpar → 30; `valvula` → 2. Em 390 px, a largura rolável foi corrigida de 545 px para 390 px.

Commits principais: `eec58b20b6de6d8de827cf1f9f623b2987827bb2` e `cb653d8c001a10849392835922d5e7e8d89fa60e`.

## E03 — oferta comercial verdadeira

**Estado:** CONCLUÍDO NO ESCOPO INICIAL.

Home, página de Serviços, Sobre e CTA 4–20 mA foram publicados e validados sem promessa comercial de calibração/rastreabilidade não comprovada. Permanecem para E04/E06 o inventário integral de alegações/CTAs e a matriz de capacidade C01.

Commits de site: `e945d6e5e7259e456bde56339084a2b37ff4951a` e `9a4c33175da73b3a53fe7912bca33da5bdcdd8b8`.

## E04 — inventário e higiene técnica

**Estado:** EM EXECUÇÃO.

### Lote estrutural E04-INVENTORY-HYGIENE-01

O artefato anterior tinha 344 HTMLs porque o Jekyll convertia 73 relatórios/controles Markdown internos em HTML público. Esses documentos não eram páginas editoriais da ALOGY.

Foi criado `_config.yml` para retirar da publicação `adsense-recovery`, relatórios/auditorias/validações internos, README e testes. Commit: `ddf9969a2c4f524a0a30b9b73f3f1ac2974ce967`.

As seis URLs duplicadas entre sitemaps foram removidas apenas do sitemap complementar. Nenhuma página foi excluída do conjunto de sitemaps. Commit: `9f3d7422cb44249bc34abc62002184859d2be13d`.

Workflow Pages `34879430518`: sucesso. O artefato validado ficou sem relatórios internos publicados e sem duplicidades de sitemap.

### Lote E04-SERVICES-NAVIGATION-01

**Estado:** CONCLUÍDO E PUBLICADO.

- 257 arquivos foram atualizados e 1.017 ocorrências de navegação foram consolidadas.
- Todas as páginas públicas passaram a mostrar apenas **Serviços**, apontando para `industrial.html`.
- A antiga rota `residencial.html` passou a `noindex,follow`, canonical e redirecionamento para `industrial.html`.
- A URL legada foi retirada do sitemap institucional.
- O quarto banner da home passou a apresentar **Instrumentista sob demanda**, com disponibilidade e escopo sob consulta.
- Nenhuma fórmula ou lógica JavaScript técnica foi alterada.

Commit de site: `2a047390f543d3a7a0469a3677f17c14fa0dcfeb`.
Workflow Pages: `34885469337`, concluído com sucesso.
Relatório: `E04-SERVICES-NAVIGATION-01.md`.

### Lote E04-INVENTORY-REGENERATION

**Estado:** CONCLUÍDO.

O inventário antigo de 390 linhas deixou de ser a fonte operacional. `adsense-recovery/ADSENSE-INVENTORY.csv` foi reconstruído diretamente dos HTMLs e sitemaps atuais, preservando as decisões editoriais das URLs que ainda existem.

Resultado validado:
- 271 HTMLs-fonte;
- 270 páginas/rotas editoriais e 1 arquivo de verificação Google;
- 221 páginas indexáveis;
- 49 rotas `noindex`;
- 221 URLs em sitemap;
- 0 indexáveis fora do sitemap;
- 0 páginas `noindex` no sitemap;
- 0 indexáveis sem canonical;
- 0 anomalias de H1 entre indexáveis;
- 0 duplicidades entre sitemaps;
- 88 páginas com carregador direto do AdSense;
- 268 linhas atuais conservaram decisão editorial anterior.

Commit: `da2f61932a21c00741f418870601aafcb42deba6`.
Relatório: `E04-INVENTORY-REGENERATION.md`.

### Lote E04-GUIDE-NAVIGATION-01

**Estado:** CONCLUÍDO E PUBLICADO.

Primeiro lote localizado de `Cursos/cursos.html` para `Guia` e `/guia/`:
- `calculadora-erro-calibracao.html`;
- `checklist-comissionamento-hart.html`;
- `blog-vazao-normalizada-gases.html`;
- `calculadora-massa-tanque-nivel.html`;
- `blog-ar-instrumentos-qualidade-ponto-orvalho.html`.

Em cada página:
- os dois links de menu foram migrados para `/guia/` com rótulo `Guia`;
- o atalho social genérico da Hotmart foi removido;
- conteúdo técnico, fórmulas e JavaScript permaneceram inalterados.

Commit: `181a6ba8336eea2d7f4b9436786b7984e618cf9f`.
Relatório: `E04-GUIDE-NAVIGATION-01.md`.
O inventário permaneceu consistente: 221 indexáveis, 49 `noindex`, 221 URLs em sitemap e zero H1 anômalo entre indexáveis.

### Próximo lote E04

1. Continuar `Cursos/cursos.html` → `Guia` e `/guia/` em outro lote pequeno e validado.
2. Preservar `cursos.html` somente como redirect legado `noindex`.
3. Classificar os links Hotmart restantes por contexto; retirar o ícone social genérico, mas preservar chamadas contextuais legítimas da página do Guia.
4. Selecionar pelo inventário as duas páginas do piloto editorial E05, priorizando páginas `improve` P0 ligadas a instrumentação.
5. Não fazer nova poda em massa e não solicitar revisão ao AdSense nesta etapa.

## E08-W1 — avisos compartilhados

Reproduzir em amostra representativa qualquer classificação genérica de avisos antes de alterar `app.js`. Não mexer no script compartilhado sem defeito reproduzido.

**Estado:** PENDENTE, sem bloqueio para E04.

## E05–E12

Seguir a ordem do plano atual: piloto editorial, revisão do acervo, autoria/transparência, celular/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta.

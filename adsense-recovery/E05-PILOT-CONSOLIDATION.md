# E05 — Consolidação do piloto editorial

Data: 2026-09-14

## Estado

**CONCLUÍDO, VALIDADO E PUBLICADO.**

O piloto editorial foi executado em duas páginas indexáveis, canônicas, presentes no sitemap e monetizadas. As duas estavam classificadas como `improve/P0/high` e passaram a `keep/P1/high` depois da revisão, regeneração do inventário, validação atômica, implantação no GitHub Pages e inspeção do artefato exato publicado.

Nenhuma fórmula, rotina de cálculo ou JavaScript técnico compartilhado foi alterado. Nenhuma solicitação de nova análise foi enviada ao AdSense.

## Página 01 — válvula de controle

Arquivo: `blog-calibracao-valvula-controle.html`

- conteúdo: `59dffe7f590d15d3e9d2e341375b0e7e979c9e0c`;
- inventário e relatório: `5c5c3acc32857ea15526f2396271f83de4ef2217`;
- workflow de validação: `34889135920`;
- GitHub Pages: `34889153902` — sucesso;
- artefato: `10366246367`;
- digest: `sha256:1606ebd5665fa5ed1df60b2c307c1191a7bb2ad8e6a3a0c88af40ac822f3979d`;
- relatório: `E05-VALVE-CONTROL-PILOT-01.md`.

Resultado:

- 2.046 palavras visíveis no auditor;
- 1.999 palavras no conteúdo principal;
- 1 H1 e 14 H2;
- JSON-LD `BlogPosting` e `FAQPage` válidos;
- canonical, AdSense e sitemap preservados;
- referências oficiais BIPM/JCGM, Emerson e FieldComm Group;
- nenhuma referência a `cursos.html` ou Hotmart;
- CTA comercial condicionado ao escopo real da ALOGY;
- decisão editorial: `improve/P0/high` → `keep/P1/high`.

O conteúdo passou a separar comando, posicionador, atuador, mecânica, feedback e processo; distinguir verificação, calibração, ajuste e manutenção; registrar subida, descida, `as-found` e `as-left`; diferenciar banda morta, histerese, repetibilidade, `stiction` e oscilação; e orientar diagnóstico antes de ajuste prematuro.

## Página 02 — página-pilar de calibração

Arquivo: `blog-calibracao-instrumentos-industriais.html`

- conteúdo: `76da655088462ca57846096cadb3ac896840ac4f`;
- inventário e relatório: `ccead3dbcc2839cee7d2bb4b690cca4aeb04154d`;
- workflow de validação: `34890160258`;
- GitHub Pages: `34890176070` — sucesso;
- artefato: `10366407235`;
- digest: `sha256:ebc409b19590693ed4c1d8361fc48169724b5a914611f452aaff2adcf57c10f0`;
- relatório: `E05-CALIBRATION-PILLAR-PILOT-02.md`.

Resultado:

- 2.442 palavras visíveis no auditor;
- 2.397 palavras no conteúdo principal;
- 1 H1 e 18 H2;
- JSON-LD `BlogPosting` e `FAQPage` válidos;
- canonical, AdSense e sitemap preservados;
- referências oficiais BIPM/JCGM, ILAC e NIST;
- nenhuma referência a `cursos.html` ou Hotmart;
- CTA comercial condicionado ao escopo real da ALOGY;
- decisão editorial: `improve/P0/high` → `keep/P1/high`.

O conteúdo passou a distinguir calibração, verificação, ajuste, teste funcional e teste de loop; declarar a fronteira do sistema de medição; separar erro, correção, incerteza, tolerância e regra de decisão; explicar rastreabilidade como propriedade do resultado; comparar bancada e campo; apresentar um exemplo fictício `as-found/as-left`; e organizar a navegação para conteúdos específicos.

## Estrutura preservada após o piloto

- HTMLs-fonte: **271**;
- páginas/rotas editoriais: **270**;
- arquivo de verificação Google: **1**;
- páginas indexáveis: **221**;
- rotas `noindex`: **49**;
- URLs em sitemap: **221**;
- anomalias reais de H1 entre indexáveis: **0**;
- páginas com carregador direto do AdSense: **88**.

A higiene residual de navegação continua rastreada separadamente: 137 páginas-fonte ainda contêm referência legada a Cursos, sendo 102 indexáveis, e 128 páginas ainda contêm link Hotmart a classificar por contexto. Esses resíduos não justificam poda, substituição ou remoção em massa.

## Aprendizados aplicáveis ao acervo

1. Conteúdo substancial precisa combinar utilidade prática, limites, exemplo reproduzível e fonte identificável.
2. Páginas técnicas devem separar resultado, critério e decisão, evitando regras universais.
3. CTAs comerciais devem refletir somente capacidade confirmada; calibração formal, rastreabilidade e certificado dependem de recursos e parceiros definidos no escopo.
4. O inventário precisa ser regenerado após cada lote para evitar decisões baseadas em contagens antigas.
5. A validação deve conferir o HTML inicial e o artefato publicado, sem interpretar strings JavaScript de impressão como conteúdo da página.
6. Uma página por lote foi adequada para revisão editorial extensa e deve continuar como padrão para páginas P0 ou de maior risco técnico.

## Transição para E06

A E06 deve revisar o acervo monetizado pelo inventário canônico, priorizando páginas `improve/P0` que possam ser aprofundadas com fontes primárias e sem dependência de credenciais, experiência ou ensaio ainda não comprovados.

Páginas `manual-review/P0` devem permanecer inalteradas até existir validação humana proporcional ao risco técnico. Não usar a E06 para poda em massa, alteração de fórmulas, mudança do script compartilhado ou solicitação de nova análise ao AdSense.

A autoria, credenciais pessoais, capacidade de bancada, padrões, parceiros, modelos atendidos e evidências de campo continuam dependentes de fatos confirmados pelo proprietário. Não preencher essas lacunas por inferência.

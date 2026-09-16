# E11 — Conteúdo de baixo valor — lote 01

Data: 2026-09-16

## Motivo confirmado

O proprietário confirmou que o motivo exibido pelo AdSense foi somente **“conteúdo de baixo valor”**. A partir desta confirmação, o fluxo deixa de exigir capturas autenticadas do painel como pré-requisito para continuar a recuperação editorial. Estado da conta, CMP, Central de políticas e disponibilidade do botão de revisão continuam sendo um **gate final antes de qualquer solicitação de nova análise**, não um bloqueio para melhorar conteúdo.

Nenhuma solicitação de revisão foi enviada.

## Critério editorial usado

A documentação oficial do Google AdSense orienta que um site precisa oferecer conteúdo suficiente, original, relevante e de alta qualidade, além de boa experiência e navegação. Também alerta contra páginas com pouco valor próprio ou aparência de conteúdo ainda em construção.

Referências oficiais consultadas em 2026-09-16:

- https://support.google.com/adsense/answer/81904?hl=pt-BR
- https://support.google.com/adsense/answer/12176698?hl=en
- https://support.google.com/adsense/answer/7299563?hl=en

O objetivo deste ciclo não é aumentar quantidade de páginas nem quantidade de palavras. É remover sinais objetivos de conteúdo incompleto, genérico, desatualizado ou pouco diferenciado nas rotas realmente expostas ao usuário.

## Superfície ativa

No checkpoint atual, a central pública do Blog expõe 38 ações de artigos e a central de Ferramentas expõe 30 ações de ferramentas. Portanto, a estratégia continua sendo elevar qualidade das páginas ativas em vez de criar volume artificial.

## Lote 01 — `blog-nova-nr10-2026.html`

### Problemas observados antes da correção

- bloco público com a mensagem **“Checklist em revisão técnica”**;
- texto informando que uma ferramenta havia sido retirada do uso público para revisão;
- navegação antiga com `cursos.html`/“Cursos”;
- link social do Hotmart dentro da página editorial;
- fonte secundária onde uma fonte oficial estava disponível;
- texto pouco claro sobre a diferença entre publicação da Portaria e vigência da nova redação da NR-10;
- alegação comercial ampla demais para um conteúdo normativo.

### Alterações publicadas

- removido o estado aparente de conteúdo “em revisão”;
- explicado de forma explícita que a redação anterior permanece indicada pelo MTE como vigente até **31/05/2027** e que a nova redação aprovada pela Portaria MTE nº 737/2026 entra em vigor em **01/06/2027**, ressalvados prazos específicos;
- incluído roteiro prático de preparação e transição, sem transformar a página em checklist de conformidade;
- priorizadas referências oficiais do Ministério do Trabalho e Emprego;
- atualizado `dateModified` para 2026-09-16;
- navegação alinhada ao site atual com **Guia** em `/guia/`;
- removidos `cursos.html` e o link Hotmart desta página;
- escopo comercial restringido a avaliação de demanda e definição de escopo, sem inventar habilitação, laudo, capacidade ou responsabilidade técnica;
- preservado o carregador do AdSense e não houve alteração em fórmulas ou JavaScript técnico.

Fonte oficial da NR-10 consultada:

- https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-10-nr-10

### Publicação e validação

- conteúdo: commit `a54d3aa54c4a0b9cbc2a9f34900ab5eea9d013c3`;
- Pages do conteúdo: run `35139606395`, `success`;
- artifact: `10465210204`;
- digest: `sha256:d857ccf25248e65e73c5b43817a4bf26862045c288e0aea39905c52688d506a4`;
- sitemap: `blog-nova-nr10-2026.html` recebeu `lastmod` `2026-09-16` no commit `b082704285922508a1354dbf1151157a0e36e9a4`;
- Pages após sitemap: run `35139779567`, `success`;
- artifact final: `10465200562`;
- digest final: `sha256:8fe8a00e7b3521904ec2624fb8c5258857e412f1af0e5f62f96418fe1b0f8b86`.

## Próximo lote já triado

### Prioridade 1 — `blog-lopa-simplificada.html`

Sinais objetivos encontrados na versão atual:

- navegação antiga `Cursos` → `cursos.html`;
- link Hotmart na página editorial;
- texto dizendo que a calculadora simplificada foi retirada para revisão;
- lista de “conteúdos relacionados” inclui itens sem relação direta com LOPA, como Cp/Cpk, vibração por frequência e eficiência de compressor;
- item `blog-sil-pfd-didatico.html` aparece duplicado na lista.

### Prioridade 2 — `blog-sil-pfd-didatico.html`

Sinais objetivos encontrados:

- navegação antiga `Cursos` → `cursos.html`;
- link Hotmart na página editorial;
- texto dizendo que a calculadora foi retirada para revisão;
- links relacionados podem ser mais focados em SIF/SIL/LOPA/loop e segurança funcional.

Estas páginas podem ser revisadas editorialmente no próximo lote, preservando a natureza didática e sem transformar o conteúdo em validação de segurança funcional.

## Restrições preservadas

- não editar automaticamente `blog-inspecao-instrumentos-area-classificada.html`;
- não editar automaticamente `blog-ot-cybersecurity-instrumentacao.html`;
- não criar credenciais, experiência, cases, parceiros, equipamentos ou capacidade técnica inexistentes;
- não alterar fórmulas/JavaScript técnico sem defeito reproduzido;
- não fazer pruning/noindex em massa;
- não solicitar nova análise do AdSense automaticamente.

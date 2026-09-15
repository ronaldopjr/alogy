# E06 — revisão do acervo 06: FAT e SAT em instrumentação

## Página

`blog-fat-sat-instrumentacao.html`

## Resultado editorial

- antes: `improve/P0/high`;
- depois: `keep/P1/high`;
- conteúdo publicado: `c9dc10756d8f5f42ef0388131caccbdee1e4f68c`;
- blob do HTML: `c25795af2571fdbcc859dde7cc47ed8e243d14cd`;
- Pages: run `34922216499`, conclusão `success`;
- artefato: `10378157849`;
- digest do artefato: `sha256:54da63bfd243cadd82eea74d9927c619f578f3dfa1d7cb78e19d8148108f6952`;
- SHA-256 do HTML publicado: `cb6f8413f7136a4794527823adbca917bebb5edd5d428e3456fa824894b900c2`.

## Validação do artefato

O HTML extraído do artefato oficial do GitHub Pages é byte a byte idêntico ao candidato validado.

- 24.822 bytes;
- 1.942 palavras visíveis;
- 1.854 palavras no artigo;
- 1 H1;
- 19 H2;
- 0 H3;
- JSON-LD `BlogPosting` + `FAQPage` válidos;
- canonical correto;
- carregador do AdSense preservado;
- uma ocorrência em `sitemap-blog.xml`;
- sem `/guia/`;
- sem `cursos.html`;
- sem Hotmart;
- sem `Serviços Industriais` ou `Serviços Residenciais`;
- nenhuma calculadora, fórmula ou JavaScript técnico compartilhado alterado.

## Melhorias editoriais

A página deixou de ser um checklist genérico e passou a explicar um processo reproduzível de aceitação:

- diferença entre FAT, FIT, SAT e SIT;
- atualização para `IEC 62381:2024`, terceira edição;
- matriz de teste com requisito, pré-condição, método, esperado, obtido e status;
- exemplo fictício de malha FT-101 sem tolerância universal inventada;
- separação entre comando, saída, solenóide, atuador, posição e feedback de válvula;
- testes de alarmes, intertravamentos, redes e integração orientados por requisito;
- controle de versão, backup, punch list e reteste;
- distinção explícita entre item reprovado, não testado e pendente;
- SIS tratado fora do checklist genérico, com referência à IEC 61511;
- CTA comercial limitado às capacidades reais confirmadas da ALOGY.

## Fontes primárias/públicas consultadas

1. IEC 62381:2024 — Automation systems in the process industry — FAT, FIT, SAT e SIT.
2. IEC 61511-1:2016 + AMD1:2017 — versão consolidada da Parte 1 para SIS.
3. Emerson — Startup and Commissioning Service for Measurement Instrumentation.
4. Emerson SIS Project Execution Services — observação de que a validação de SIS vai além do que muitas organizações tratam como SAT.

## Segurança e limites

- Não há tolerância universal de FAT/SAT.
- Critérios de aceite devem vir da especificação, contrato, datasheet, procedimento ou requisito aprovado.
- O artigo não fornece critérios de SIL, PFD, proof test ou aceitação de SIF.
- FAT/SAT genérico não substitui validação de SIS conforme SRS e ciclo de vida aplicável.

## Publicador temporário

O primeiro workflow temporário falhou por erro de indentação YAML antes de criar qualquer job; não alterou a página. O workflow foi corrigido, validou o blob antigo e o SHA-256 do candidato, publicou os bytes exatos e se autoapagou no commit final de conteúdo.

## Próximo passo

Continuar E06 com outra página `improve/P0/high`, priorizando instrumentação industrial e baixo risco editorial. Não solicitar nova análise ao AdSense ainda.

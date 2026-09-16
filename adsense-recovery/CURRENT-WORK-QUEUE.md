# ALOGY — fila operacional atual

> Versão 2026-09-16.47. Esta é a única fila executável. O histórico detalhado permanece no MD canônico de continuidade e nos relatórios `adsense-recovery`.

## Regras permanentes

- Revisão automática de artigo exige link/card ativo no `blog.html`; ferramenta exige link/card ativo no `ferramentas.html`; navegação institucional vigente pode definir rota institucional ativa.
- Arquivo existente, HTTP 200, `index,follow`, sitemap, link residual ou inventário histórico isoladamente não tornam uma URL elegível.
- Não solicitar nova análise do AdSense automaticamente; não fazer `noindex`/pruning em massa; nunca force-push.
- Não inventar equipe, clientes, cases, credenciais, registro, equipamentos, laboratório, acreditação, rastreabilidade, parceiros, resultados ou capacidade.
- Oferta segura: avaliação, inspeção, manutenção, configuração e conferência funcional; calibração/ensaio/rastreabilidade/documentação específica somente quando recursos e parceiros forem confirmados na proposta.
- Não alterar fórmulas ou JavaScript técnico sem defeito reproduzido e validação proporcional.
- Páginas `manual-review/P0` não recebem edição técnica automática.
- O link global **Guia** pode permanecer; não inserir CTA promocional do Guia, Hotmart ou `cursos.html` no corpo de artigos/ferramentas.
- Ao concluir cada lote, atualizar o mesmo MD canônico, disponibilizá-lo ao proprietário e registrar explicitamente o próximo passo.

## E02–E10

**Estado:** CONCLUÍDOS NO ESCOPO AUTOMATIZÁVEL SEGURO.

- Busca/navegação, verdade comercial, inventário/higiene, piloto editorial, superfície ativa segura, transparência organizacional segura e mobile/acessibilidade concluídos.
- Parte pública/não autenticada de AdSense conferida (`ads.txt`, `robots.txt`, publisher, privacidade).
- QA do artefato publicado em 360 × 844 e 390 × 844 para Home, Blog, Ferramentas e Serviços passou sem overflow horizontal do documento/menu.
- U35 validou 18/18 deltas; nenhuma substituição de dados era necessária.
- Nenhuma solicitação de reanálise do AdSense foi enviada.

Relatórios relevantes:
- `E10-FINAL-READINESS-CHECKLIST.md`
- `E10-MOBILE-360-390-ARTIFACT-QA.md`
- `E06-INVENTORY-CONSOLIDATION.md`

## E11 — recuperação editorial por “conteúdo de baixo valor”

**Estado:** ATIVO.

O proprietário confirmou que o único motivo exibido pelo AdSense foi **“conteúdo de baixo valor”**. Isso remove a necessidade de aguardar capturas autenticadas como pré-requisito para continuar o trabalho editorial. A conferência do estado da conta, CMP, Central de políticas e disponibilidade real de revisão fica preservada como gate final antes de qualquer nova solicitação.

A orientação oficial do Google continua sendo usada como critério: conteúdo original, relevante, substancial e útil ao usuário, com navegação clara e sem aparência de página em construção. Não existe meta artificial de palavras ou de quantidade de páginas.

Superfície ativa observada no checkpoint:
- Blog: 38 ações de artigos;
- Ferramentas: 30 ações de ferramentas.

A estratégia é melhorar as páginas ativas com evidência concreta de baixo valor; não aumentar volume.

### Lote 01 — concluído e publicado

Página: `blog-nova-nr10-2026.html`

Correções principais:
- removido “Checklist em revisão técnica” e o sinal de ferramenta retirada para revisão;
- explicado o calendário oficial: redação anterior vigente até 31/05/2027 e nova redação da Portaria MTE nº 737/2026 com vigência em 01/06/2027, conforme MTE;
- incluído roteiro de preparação/transição com limitações claras;
- referências oficiais do MTE priorizadas;
- `dateModified` atualizado;
- navegação alinhada para `Guia` → `/guia/`;
- removidos `cursos.html` e link Hotmart desta página editorial;
- escopo comercial restringido, sem inventar habilitação ou capacidade.

Publicação:
- conteúdo: `a54d3aa54c4a0b9cbc2a9f34900ab5eea9d013c3`;
- Pages conteúdo: `35139606395` — success;
- artifact: `10465210204`;
- sitemap `lastmod`: `b082704285922508a1354dbf1151157a0e36e9a4`;
- Pages final: `35139779567` — success;
- artifact final: `10465200562`;
- digest final: `sha256:8fe8a00e7b3521904ec2624fb8c5258857e412f1af0e5f62f96418fe1b0f8b86`.

Relatório: `E11-LOW-VALUE-CONTENT-BATCH-01.md`.

## Próxima ação executável — E11 lote 02

**Prioridade 1: `blog-lopa-simplificada.html`.** A triagem encontrou navegação antiga `Cursos`, link Hotmart, mensagem de calculadora retirada para revisão, links relacionados fora do tema (Cp/Cpk, vibração e compressor) e duplicação de `blog-sil-pfd-didatico.html`.

**Prioridade 2: `blog-sil-pfd-didatico.html`.** A triagem encontrou navegação antiga `Cursos`, link Hotmart, mensagem de calculadora retirada para revisão e oportunidade de restringir os relacionados ao contexto de SIF/SIL/LOPA/loop/segurança funcional.

Executar revisão editorial segura das duas páginas, preservando o caráter didático e sem tratá-las como validação formal de segurança funcional. Depois validar deploy, atualizar sitemap quando aplicável, atualizar este estado e o mesmo MD canônico.

## Dependências preservadas para antes da revisão final

- conferir estado autenticado real do AdSense/CMP/Central de políticas antes de solicitar nova análise;
- autoria/credenciais somente se confirmadas e autorizadas;
- confirmação de `Desde 2012` antes de usar como evidência;
- evidências/autorização dos projetos em `cases.html` antes de ampliar alegações;
- capacidade real C01-C03;
- revisão especializada de `blog-inspecao-instrumentos-area-classificada.html` e `blog-ot-cybersecurity-instrumentacao.html`.

A automação `ALOGY AdSense Contínuo` permanece pausada; a execução manual autorizada continua lote a lote. **Não solicitar revisão do AdSense automaticamente.**

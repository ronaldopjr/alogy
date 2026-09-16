# ALOGY — fila operacional atual

> Versão 2026-09-16.49. Esta é a única fila executável. O histórico detalhado permanece no MD canônico de continuidade e nos relatórios `adsense-recovery`.

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

O proprietário confirmou que o único motivo exibido pelo AdSense foi **“conteúdo de baixo valor”**. Portanto, capturas autenticadas da conta não bloqueiam a melhoria editorial. Conta/CMP/Central de políticas e disponibilidade real de revisão permanecem como gate final antes de qualquer reenvio.

A estratégia permanece: melhorar páginas ativas com evidência concreta de baixo valor; não criar volume artificial nem perseguir contagem de palavras.

Superfície ativa observada:
- Blog: 38 ações de artigos;
- Ferramentas: 30 ações de ferramentas.

### Lote 01 — concluído

Página: `blog-nova-nr10-2026.html`.

- Conteúdo: `a54d3aa54c4a0b9cbc2a9f34900ab5eea9d013c3`.
- Sitemap: `b082704285922508a1354dbf1151157a0e36e9a4`.
- Pages final: `35139779567` — `success`.
- Artifact: `10465200562`.
- Digest: `sha256:8fe8a00e7b3521904ec2624fb8c5258857e412f1af0e5f62f96418fe1b0f8b86`.
- Relatório: `E11-LOW-VALUE-CONTENT-BATCH-01.md`.

### Lote 02 — concluído

Páginas:
- `blog-lopa-simplificada.html`;
- `blog-sil-pfd-didatico.html`.

Publicação:
- LOPA: `fac8b9df48b48e088f403a01e3fe5e7a3ad1d615`;
- SIL/PFD: `5cffeb23b766b5f2a4aed1f82dbd8a15f8c28d32`;
- sitemap: `a1b97f0ee8a95583aabc98a3046447ddafe7242d`;
- Pages: `35142441204` — `success`;
- artifact: `10466051065`;
- digest: `sha256:06bcd63d8829343b81dd7f4daee9e18e395e93a7e27c16264bdac9c156873202`;
- relatório: `E11-LOW-VALUE-CONTENT-BATCH-02.md`.

### Lote 03 — concluído e publicado

A triagem dos artigos ativos selecionou somente dois casos com sinais objetivos combinados de baixo valor/resíduos editoriais antigos:

1. `blog-dimensionamento-tubo-pneumatico-instrumentacao.html`
   - removidos `Cursos/cursos.html` e Hotmart;
   - conteúdo aprofundado em vazão requerida, pressões, diâmetro interno, comprimento, restrições e resposta dinâmica;
   - retiradas regras genéricas sem origem;
   - referências Festo, SMC e ISO 4414 incluídas;
   - relacionados restringidos ao contexto.

2. `blog-histerese-pressostato-termostato.html`
   - removidos `Cursos/cursos.html` e Hotmart;
   - removidos relacionados fora do tema, como ORP e vazão DP;
   - conteúdo aprofundado em atuação, reset, histerese, repetibilidade, sentido de teste e limitações;
   - referências WIKA incluídas;
   - ressalva explícita para intertravamentos/funções críticas.

Páginas triadas e preservadas por já estarem substanciais:
- `blog-ar-instrumentos-qualidade-ponto-orvalho.html`;
- `blog-calibracao-instrumentos-industriais.html`.

Publicação:
- tubo pneumático: `5484f22b8e4acf5eed03ba567396e0ec90ca5145`;
- histerese: `5cfb0939b49595fc9818c1836b1be78b0e986dc0`;
- sitemap: `aea22737642da267996d793513177c74c2ffde00`;
- Pages final: `35147892933` — `success`;
- artifact: `10468250308`;
- digest: `sha256:282e89f42d3368ecc231fbd54c92e2fe599a92b8c7775f9b79475cf5569d444e`;
- relatório: `E11-LOW-VALUE-CONTENT-BATCH-03.md`.

Nenhuma fórmula de calculadora nem JavaScript técnico foi alterado nos lotes editoriais.

## Próxima ação executável — E11 lote 04

Continuar a **triagem objetiva somente dos artigos ainda ativos no `blog.html`** e selecionar no máximo **1 a 3 páginas** quando houver sinais combinados e verificáveis, como:

- conteúdo superficial, genérico ou pouco diferenciado;
- estrutura antiga que não ajuda o leitor a resolver a dúvida principal;
- navegação `Cursos/cursos.html`, Hotmart ou outro resíduo editorial antigo;
- texto indicando conteúdo/ferramenta em revisão ou página incompleta;
- links relacionados fora do tema ou repetidos;
- ausência de fonte técnica quando uma afirmação depende de norma, fabricante ou referência verificável.

Não editar automaticamente:
- `blog-inspecao-instrumentos-area-classificada.html`;
- `blog-ot-cybersecurity-instrumentacao.html`.

Revisar somente as páginas selecionadas, validar Pages, sincronizar sitemap quando aplicável e atualizar este mesmo estado e MD. Não solicitar revisão do AdSense automaticamente.

## Dependências preservadas para antes da revisão final

- conferir estado autenticado real do AdSense/CMP/Central de políticas antes de solicitar nova análise;
- autoria/credenciais somente se confirmadas e autorizadas;
- confirmação de `Desde 2012` antes de usar como evidência;
- evidências/autorização dos projetos em `cases.html` antes de ampliar alegações;
- capacidade real C01-C03;
- revisão especializada das duas páginas `manual-review/P0`.

A automação `ALOGY AdSense Contínuo` permanece pausada; a execução manual autorizada continua lote a lote. **Não solicitar revisão do AdSense automaticamente.**

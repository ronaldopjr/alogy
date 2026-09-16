# ALOGY — fila operacional atual

> Versão 2026-09-16.48. Esta é a única fila executável. O histórico detalhado permanece no MD canônico de continuidade e nos relatórios `adsense-recovery`.

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

Superfície ativa observada no checkpoint:
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

### Lote 02 — concluído e publicado

Páginas:
- `blog-lopa-simplificada.html`;
- `blog-sil-pfd-didatico.html`.

Correções principais:
- removidos `Cursos` / `cursos.html` e Hotmart das duas páginas editoriais;
- removida linguagem de calculadora/conteúdo retirado para revisão;
- LOPA aprofundado em cenário, evento iniciador, IPL, PFD, documentação, limites e erros de crédito;
- SIL/PFD aprofundado em SIF, SIS, SIL, PFDavg, proof test, arquitetura, elementos da função e ciclo de vida;
- relacionados restritos a conteúdos realmente contextuais;
- referências técnicas direcionadas a CCPS/AIChE, IEC 61511 e IEC 61508;
- capas existentes preservadas;
- nenhum JavaScript técnico ou fórmula de ferramenta existente alterado;
- `lastmod=2026-09-16` sincronizado no sitemap para as duas páginas.

Publicação:
- LOPA: `fac8b9df48b48e088f403a01e3fe5e7a3ad1d615`;
- SIL/PFD: `5cffeb23b766b5f2a4aed1f82dbd8a15f8c28d32`;
- sitemap final: `a1b97f0ee8a95583aabc98a3046447ddafe7242d`;
- Pages final: `35142441204` — `success`;
- artifact: `10466051065`;
- digest: `sha256:06bcd63d8829343b81dd7f4daee9e18e395e93a7e27c16264bdac9c156873202`;
- relatório: `E11-LOW-VALUE-CONTENT-BATCH-02.md`.

## Próxima ação executável — E11 lote 03

Fazer **triagem objetiva dos artigos ativos restantes no `blog.html`** e selecionar somente **1 a 3 páginas** com sinais comprováveis de baixo valor. Critérios de seleção:

- conteúdo superficial, genérico ou pouco diferenciado;
- estrutura antiga que não ajuda o leitor a resolver a dúvida principal;
- navegação `Cursos/cursos.html`, Hotmart ou outros resíduos editoriais antigos;
- texto indicando conteúdo/ferramenta em revisão ou página incompleta;
- links relacionados fora do tema ou repetidos;
- ausência de fonte técnica quando a afirmação depende de norma, fabricante ou referência verificável.

Não editar automaticamente:
- `blog-inspecao-instrumentos-area-classificada.html`;
- `blog-ot-cybersecurity-instrumentacao.html`.

Depois da triagem, revisar somente as páginas selecionadas, validar o Pages, sincronizar sitemap quando aplicável e atualizar este mesmo estado e MD.

## Dependências preservadas para antes da revisão final

- conferir estado autenticado real do AdSense/CMP/Central de políticas antes de solicitar nova análise;
- autoria/credenciais somente se confirmadas e autorizadas;
- confirmação de `Desde 2012` antes de usar como evidência;
- evidências/autorização dos projetos em `cases.html` antes de ampliar alegações;
- capacidade real C01-C03;
- revisão especializada das duas páginas `manual-review/P0`.

A automação `ALOGY AdSense Contínuo` permanece pausada; a execução manual autorizada continua lote a lote. **Não solicitar revisão do AdSense automaticamente.**

# ALOGY — fila operacional atual

> Versão 2026-09-16.51. Esta é a única fila executável. O histórico detalhado permanece no MD canônico de continuidade e nos relatórios `adsense-recovery`.

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

## E11 — recuperação editorial por “conteúdo de baixo valor”

**Estado:** ATIVO.

O proprietário confirmou que o único motivo exibido pelo AdSense foi **“conteúdo de baixo valor”**. Capturas autenticadas da conta não bloqueiam os lotes editoriais; conta/CMP/Central de políticas e disponibilidade real de revisão permanecem como gate final antes de qualquer reenvio.

A estratégia permanece: melhorar somente páginas ativas com evidência concreta de baixo valor; não criar volume artificial nem perseguir contagem de palavras.

Superfície ativa observada no checkpoint: Blog 38 ações de artigos; Ferramentas 30 ações de ferramentas.

### Lotes concluídos

- **Lote 01 — NR-10:** `blog-nova-nr10-2026.html`; Pages `35139779567` success; relatório `E11-LOW-VALUE-CONTENT-BATCH-01.md`.
- **Lote 02 — LOPA + SIL/PFD:** `blog-lopa-simplificada.html` e `blog-sil-pfd-didatico.html`; Pages `35142441204` success; relatório `E11-LOW-VALUE-CONTENT-BATCH-02.md`.
- **Lote 03 — tubo pneumático + histerese:** `blog-dimensionamento-tubo-pneumatico-instrumentacao.html` e `blog-histerese-pressostato-termostato.html`; Pages `35147892933` success; relatório `E11-LOW-VALUE-CONTENT-BATCH-03.md`.

### Lote 04 — concluído e publicado

Páginas ativas selecionadas:

1. `blog-calibracao-cartao-analogico-clp.html`;
2. `blog-calibracao-conversor-ip-pi.html`;
3. `blog-calibracao-totalizador-vazao.html`.

A automação horária iniciou o lote no commit `94d3854a1e341b0216d4a781a1538ea269baa529`, aprofundando os três artigos e sincronizando o sitemap. A retomada manual reconciliou essa mudança, não repetiu a triagem e corrigiu o único resíduo objetivo remanescente: `Cursos/cursos.html` nos menus desktop/mobile das três páginas.

Principais ganhos:
- cartão analógico: canal x laço x teste funcional, raw/engenharia, exemplo 4–20 mA e diagnóstico; referências Siemens, Rockwell e JCGM/BIPM;
- conversor I/P e P/I: relação linear, ciclo ascendente/descendente, diagnóstico, suprimento/carga; referências Emerson Fisher 646 e JCGM/BIPM;
- totalizador: K-factor, pulsos, resolução, sincronismo, diagnóstico e interface elétrica; referências Endress+Hauser e JCGM/BIPM;
- Hotmart removido pelo lote editorial e `Cursos/cursos.html` substituído por `Guia` → `/guia/` nas três páginas;
- nenhuma fórmula ou JavaScript de calculadora alterado;
- `sitemap-blog.xml` com `lastmod=2026-09-16` para as três páginas.

Publicação/validação:
- conteúdo + sitemap inicial: `94d3854a1e341b0216d4a781a1538ea269baa529`;
- navegação conversor: `fea12c4cabd08d0a31c75f7b4c79401a89779327`;
- navegação totalizador: `04e96e74ce96ffbee030c84ca604da8cfb167f3b`;
- navegação cartão: `836f1e2f661a61e86bf6fc88419a38679dc12ec9`;
- Pages final: `35171769423` — `success`;
- artifact: `10476029994`;
- digest: `sha256:1ab18519a0fc8f42a10c0733cf4d0305097da864c6ed8734decf0420e589f770`;
- relatório: `E11-LOW-VALUE-CONTENT-BATCH-04.md`.

## Próxima ação executável — E11 lote 05

Fazer triagem objetiva **somente dos artigos ainda ativos restantes em `blog.html`**. Selecionar no máximo **1 a 3 páginas** apenas quando houver sinais combinados e verificáveis de baixo valor, como conteúdo superficial/genérico, estrutura antiga, `Cursos/cursos.html`, Hotmart, marcador de revisão/incompleto, relacionados fora de contexto ou falta de fonte primária onde tecnicamente necessária.

Não reabrir automaticamente lotes 01–04 sem defeito novo e não editar automaticamente:
- `blog-inspecao-instrumentos-area-classificada.html`;
- `blog-ot-cybersecurity-instrumentacao.html`.

Depois da triagem, revisar somente as selecionadas, validar Pages/sitemap e atualizar este mesmo estado e MD. **Não solicitar revisão do AdSense automaticamente.**

## Dependências preservadas para antes da revisão final

- conferir estado autenticado real do AdSense/CMP/Central de políticas antes de solicitar nova análise;
- autoria/credenciais somente se confirmadas e autorizadas;
- confirmação de `Desde 2012` antes de usar como evidência;
- evidências/autorização dos projetos em `cases.html` antes de ampliar alegações;
- capacidade real C01-C03;
- revisão especializada das duas páginas `manual-review/P0`.

A automação `ALOGY AdSense Contínuo` está **ativa de hora em hora** e deve seguir a próxima ação mais recente deste estado/MD. **Não solicitar revisão do AdSense automaticamente.**

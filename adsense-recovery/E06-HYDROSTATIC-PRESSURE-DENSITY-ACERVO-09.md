# E06 — Acervo monetizado — página 09

## Página

`blog-pressao-hidrostatica-densidade.html`

## Objetivo

Aprofundar um artigo curto sobre pressão hidrostática para transformar a página em conteúdo técnico reproduzível sobre a cadeia pressão → altura → indicação de nível, mantendo foco em instrumentação industrial e diagnóstico sem alterar calculadoras, fórmulas de ferramentas ou JavaScript técnico compartilhado.

## Decisão editorial

- Antes: `improve/P0/high`
- Depois: `keep/P1/high`

## Conteúdo publicado

Commit de conteúdo: `e2bbc0c359b99b8e890a732da33c90d704151fc9`

Principais aprofundamentos:

- equação `p = ρgh` com unidades SI e limites de aplicação;
- exemplo reproduzível: 998 kg/m³ × 9,80665 m/s² × 3,20 m = 31,319 kPa;
- separação entre altura hidrostática, percentual e volume do tanque;
- referência atmosférica em tanque aberto e compensação do espaço de vapor em tanque fechado;
- distinção entre perna seca, perna molhada e selos remotos sem prescrever arranjo universal;
- equação do erro de indicação provocado por densidade configurada diferente da real;
- segundo exemplo: 3,20 m com ρ real de 850 kg/m³ e ρ configurada de 1.000 kg/m³ resulta em aproximadamente 2,72 m indicados;
- influência de temperatura, composição e condição associada à densidade;
- tabela de conferência para cotas, LRV/URV, LP e escala no sistema;
- diagnóstico por camadas e matriz sintoma → hipótese → evidência;
- registro mínimo de condição encontrada e limite entre conferência funcional e calibração rastreável;
- CTA comercial restrito a avaliação, inspeção, manutenção, configuração e conferência funcional sob escopo confirmado.

## Fontes primárias verificadas em 15/09/2026

- Endress+Hauser — `The pressure measuring principle`, página oficial atualizada em 19/01/2026: relação entre coluna líquida, altura, densidade e pressão; diferenças entre pressão absoluta, manométrica, hidrostática e diferencial.
- Emerson — `Rosemount Differential Pressure Level Transmitters and Diaphragm Seal Systems Reference Manual`, manual oficial disponível em 2026: arquiteturas DP, selos e efeitos de instalação.
- Emerson — `Density Measurement Using DP Transmitters`, folha técnica oficial: equações para tanque aberto, tanque fechado, perna seca e coluna de referência.
- BIPM — `The International System of Units (SI Brochure)`, 9ª edição, texto oficial atualizado em 2026: grandezas e unidades SI.

## Validação da publicação

GitHub Pages:

- workflow run: `34984984363`
- conclusão: `success`
- build: `success`
- deploy: `success`
- artefato: `10403491616`
- digest do artefato: `sha256:a64dc5963f5e2374fdce6a7d14c376d08af0f6b42f430b3ffd1285f8147dadfa`

HTML servido pelo domínio:

- HTTP: `200`
- `Last-Modified`: `Tue, 15 Sep 2026 14:56:55 GMT`
- bytes: `25075`
- SHA-256: `c49a8658f490a6be865957e89a06f707cd6e00cd4c85ee5dcaa3bb349bbf5ccd`
- Git blob SHA-1 calculado do HTML servido: `ef5624a989e9e6476742b13894a0015c7aa60cc2`
- Git blob SHA-1 do commit de conteúdo: `ef5624a989e9e6476742b13894a0015c7aa60cc2`
- conteúdo servido idêntico byte a byte ao candidato versionado: `sim`
- palavras visíveis: `1868`
- palavras no artigo: `1851`
- H1: `1`
- H2: `17`
- H3: `4`
- JSON-LD: `BlogPosting` + `FAQPage`
- canonical: válido
- carregador direto do AdSense: presente
- URL permanece no sitemap existente
- menu global Guia: preservado
- CTA/link promocional do Guia no corpo do artigo: ausente
- Hotmart e `cursos.html`: ausentes
- rótulos separados `Serviços Industriais` / `Serviços Residenciais`: ausentes
- links internos do lote: todos os seis destinos e a imagem de capa confirmados no mesmo SHA-base
- fórmulas de calculadoras ou JavaScript técnico compartilhado: não alterados

## Limites preservados

- nenhuma densidade, faixa, tolerância, regra de aceitação ou configuração universal inventada;
- nenhum procedimento de intervenção aplicado sem documentação e segurança da planta;
- nenhum laudo/certificado próprio de calibração prometido;
- nenhuma rastreabilidade/acreditação inventada;
- nenhuma equipe, case, cliente, bancada ou equipamento inventado;
- nenhuma alteração em páginas `manual-review/P0`;
- nenhum `noindex` ou pruning em massa;
- nenhuma solicitação de nova análise do AdSense.

## Próximo passo

Selecionar outra página `improve/P0/high` de instrumentação industrial e baixo risco editorial, desconsiderando as páginas 01–09 já concluídas pelos deltas incrementais. Manter `manual-review/P0` intactas e continuar uma página extensa por lote.

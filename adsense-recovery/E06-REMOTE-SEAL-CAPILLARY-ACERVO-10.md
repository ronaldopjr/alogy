# E06 — Acervo monetizado — página 10

## Página

`blog-selo-remoto-capilar-nivel.html`

## Objetivo

Aprofundar um artigo curto sobre selos remotos e capilares em transmissores DP de nível para transformá-lo em conteúdo técnico reproduzível sobre balanço hidrostático, range, efeito térmico, resposta e diagnóstico, sem alterar a calculadora relacionada, fórmulas de ferramentas ou JavaScript técnico compartilhado.

## Decisão editorial

- Antes: `improve/P0/high`
- Depois: `keep/P1/high`

## Conteúdo publicado

Commit de conteúdo: `50b9e645ef4d6c5a9f8b2a6684bd547e850c1248`

Principais aprofundamentos:

- diagrama próprio e acessível de tanque fechado com selos HP/LP e capilares;
- modelo `DP = ρp·g·h − ρf·g·H`, com premissas e limites declarados;
- dedução de LRV, URV e span para sistema com dois selos;
- exemplo reproduzível de 0–3,00 m, com LRV de −28,243 kPa, URV de −1,765 kPa e span de 26,478 kPa;
- conferência intermediária a 1,80 m, resultando em −12,357 kPa e 60,0%;
- explicação de que faixa negativa pode ser consequência correta da coluna do lado LP;
- distinção entre expansão volumétrica e mudança de densidade do fluido de enchimento;
- limites de sistemas balanceados e alerta contra alteração de capilares sem conferir o projeto;
- fatores de tempo de resposta: volume, comprimento/seção do capilar, viscosidade e temperatura;
- checklist de especificação/instalação e diagnóstico antes de trim;
- autoria organizacional verificável ligada ao escopo editorial do site;
- CTA comercial restrito ao posicionamento confirmado da ALOGY.

## Fontes primárias verificadas em 15/09/2026

- Emerson — `Rosemount Differential Pressure Level Transmitters and Diaphragm Seal Systems Reference Manual`: balanço, sistemas balanceados, efeitos térmicos, seleção e instalação.
- Yokogawa — `Field Instruments Field Guide`: efeitos da variação de volume e densidade do fluido de enchimento sobre o zero.
- WIKA — `Diaphragm seals and diaphragm seal systems`: construção, seleção do fluido, temperatura e fatores que afetam o tempo de resposta.
- BIPM — `The International System of Units (SI Brochure)`: unidades do Sistema Internacional usadas no exemplo.

## Validação da publicação

GitHub Pages:

- workflow run: `34991433678`
- conclusão: `success`
- build: `success`
- deploy: `success`
- artefato: `10405678002`
- digest do artefato: `sha256:a5adbb627328ee3e36c15364996d5534181762dab4aa104edc1be674e9e3dd2c`

HTML servido pelo domínio:

- HTTP: `200`
- `Last-Modified`: `Tue, 15 Sep 2026 15:53:59 GMT`
- bytes: `25222`
- SHA-256: `0e613a058715d19e181672b32d3e7bf35827aea9231c406346e7296046c86e14`
- Git blob SHA-1 calculado do HTML servido: `b2b1e11652270ef4e5a8e6ffd2f1730bcc518a04`
- Git blob SHA-1 do commit de conteúdo: `b2b1e11652270ef4e5a8e6ffd2f1730bcc518a04`
- conteúdo servido idêntico byte a byte ao candidato versionado: `sim`
- palavras visíveis, excluindo scripts e estilos: `1778`
- palavras no artigo: `1725`
- H1: `1`
- H2: `12`
- H3: `0`
- JSON-LD: `BlogPosting` + `FAQPage`
- canonical: válido
- carregador direto do AdSense: presente
- URL permanece no sitemap existente
- menu global Guia: preservado
- CTA/link promocional do Guia no corpo do artigo: ausente
- Hotmart e `cursos.html`: ausentes
- rótulos separados `Serviços Industriais` / `Serviços Residenciais`: ausentes
- oito destinos internos e a imagem de capa confirmados no SHA-base ou no domínio
- cálculo conferido por execução independente em Python
- fórmulas de calculadoras ou JavaScript técnico compartilhado: não alterados

## Limites preservados

- nenhuma densidade, faixa, tolerância, regra de aceitação ou configuração universal inventada;
- nenhuma abertura, corte ou preenchimento de capilar orientado em campo;
- nenhum procedimento de intervenção aplicado sem documentação e segurança da planta;
- nenhum laudo/certificado próprio de calibração prometido;
- nenhuma rastreabilidade/acreditação inventada;
- nenhuma equipe, case, cliente, bancada ou equipamento inventado;
- nenhuma alteração em páginas `manual-review/P0`;
- nenhum `noindex` ou pruning em massa;
- nenhuma solicitação de nova análise do AdSense.

## Próximo passo

Selecionar outra página `improve/P0/high` de instrumentação industrial e baixo risco editorial, desconsiderando as páginas 01–10 já concluídas pelos deltas incrementais. Manter `manual-review/P0` intactas e continuar uma página extensa por lote.


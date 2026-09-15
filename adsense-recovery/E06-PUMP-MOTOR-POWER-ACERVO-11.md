# E06 — Acervo monetizado — página 11

## Página

`blog-potencia-bomba.html`

## Objetivo

Transformar um artigo curto e genérico em conteúdo técnico reproduzível sobre potência hidráulica, potência no eixo, entrada elétrica e corrente trifásica de um conjunto motor-bomba, mantendo o escopo em elétrica/processo industrial e sem alterar a calculadora relacionada, suas fórmulas ou JavaScript.

## Decisão editorial

- Antes: `improve/P0/high`
- Depois: `keep/P1/high`

## Conteúdo publicado

Commit de conteúdo: `af6f84bbac905b6888c63cf0d7c94da4e0023a5b`

Principais aprofundamentos:

- cadeia explícita entre condição hidráulica, potência no eixo, entrada elétrica e corrente;
- equações com unidades SI e conversão de m³/h para m³/s;
- distinção entre potência mecânica nominal de placa e potência elétrica absorvida;
- exemplo reproduzível com 50 m³/h, 35 m, rendimentos de 70%/90%, 380 V e FP 0,85;
- resultados conferidos: 4,767 kW hidráulicos, 6,810 kW no eixo, 7,567 kW de entrada e 13,53 A;
- análise de sensibilidade ao rendimento da bomba;
- limites da altura manométrica e necessidade de dados na mesma condição;
- curva da bomba, curva do sistema, BEP e região de operação;
- leis de afinidade com exemplo de 80% da rotação e limite explícito da aproximação;
- distinção entre corrente de entrada do VFD e corrente entregue ao motor;
- matriz sintoma → hipótese → evidência e lista de dados mínimos;
- autoria organizacional verificável ligada ao escopo editorial do site;
- CTA comercial restrito ao posicionamento confirmado da ALOGY.

## Fontes primárias verificadas em 15/09/2026

- U.S. Department of Energy — `Improving Pumping System Performance: A Sourcebook for Industry`: abordagem de sistema, potência do fluido, curvas e operação.
- U.S. Department of Energy — `Pumping System Assessment Tool User Manual`: vazão, altura, potência, rendimento e dados elétricos para avaliação.
- Hydraulic Institute — `Pump Principles`, atualizado em 19/07/2024: curvas, BEP, NPSH e princípios de bombas rotodinâmicas.
- WEG — `Specification of Electric Motors`: potência trifásica, fator de potência, rendimento e grandezas de placa.
- ABB — `Guide to Variable Speed Drives`: motor, torque, carga e acionamento de velocidade variável.

## Validação da publicação

GitHub Pages:

- workflow run: `34997876058`
- conclusão: `success`
- build: `success`
- deploy: `success`
- artefato: `10408442738`
- digest do artefato: `sha256:fe9b6225f2edae8c17ef94b652165103ffd4fec32ea3b784ab8e635117e9dc20`

HTML servido pelo domínio:

- HTTP: `200`
- `Last-Modified`: `Tue, 15 Sep 2026 16:54:43 GMT`
- bytes: `22720`
- SHA-256: `ddebae0d07448095da74be153a64471248538c446418fb2059d14cc042f32080`
- Git blob SHA-1 calculado do HTML servido: `13cf57b6de1683968a550fedd553058a0c1f2b32`
- Git blob SHA-1 do commit de conteúdo: `13cf57b6de1683968a550fedd553058a0c1f2b32`
- conteúdo servido idêntico byte a byte ao candidato versionado: `sim`
- palavras visíveis, excluindo scripts e estilos: `1630`
- palavras no artigo: `1577`
- H1: `1`
- H2: `13`
- H3: `0`
- JSON-LD: `BlogPosting` + `FAQPage`
- canonical: válido
- carregador direto do AdSense: presente
- ocorrência da URL no sitemap de blog: `1`
- menu global Guia: preservado
- CTA/link promocional do Guia no corpo do artigo: ausente
- Hotmart e `cursos.html`: ausentes
- rótulos separados `Serviços Industriais` / `Serviços Residenciais`: ausentes
- destinos internos e imagem de capa confirmados no SHA-base ou no domínio
- cálculos e leis de afinidade conferidos por execução independente em Python
- calculadora, fórmulas de ferramentas e JavaScript técnico compartilhado: não alterados

## Limites preservados

- nenhum rendimento, fator de serviço, margem, corrente, faixa ou proteção universal inventada;
- nenhuma potência estimada tratada como seleção automática de motor, bomba ou VFD;
- nenhuma corrente estimada usada como ajuste automático de proteção;
- nenhum diagnóstico fechado por um único sintoma;
- nenhuma calibração, laudo/certificado próprio ou rastreabilidade prometidos;
- nenhuma equipe, case, cliente, bancada ou equipamento inventado;
- nenhuma alteração em páginas `manual-review/P0`;
- nenhum `noindex` ou pruning em massa;
- nenhuma solicitação de nova análise do AdSense.

## Próximo passo

Selecionar outra página `improve/P0/high` de instrumentação, automação ou elétrica industrial e baixo risco editorial, desconsiderando as páginas 01–11 já concluídas pelos deltas incrementais. Manter `manual-review/P0` intactas e continuar uma página extensa por lote.


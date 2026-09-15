# E06 — Acervo monetizado — página 13

## Página

`blog-teste-de-loop-instrumentacao.html`

## Objetivo

Transformar um artigo promocional e resumido em conteúdo técnico, verificável e conservador sobre teste de loop entre campo e sistema de controle, sem converter o texto em procedimento para intervenção energizada, sem inventar capacidade comercial e sem alterar calculadoras, fórmulas ou JavaScript compartilhado.

## Decisão editorial

- Antes: `improve/P0/high`
- Depois: `keep/P1/high`

## Conteúdo publicado

Commit de conteúdo e sitemap: `3f4f57c65535bd1e8fb243a6cd70de6282a4111c`

Principais aprofundamentos:

- enquadramento do loop check conforme a IEC 62382:2024;
- distinção entre ponto a ponto, teste de loop, calibração e teste funcional;
- liberação, análise de risco, impacto operacional e limites de escopo antes da aplicação de sinais;
- pacote mínimo de documentos, revisões, identidade, I/O, responsáveis e critérios;
- exemplo reproduzível de 0–10 bar em 4, 8, 12, 16 e 20 mA;
- registro por camada: estímulo, cartão, PLC/DCS, HMI/SCADA e historian;
- sequência de entrada analógica que separa identidade, ponto de injeção, condição inicial, resultados, desvio, reteste e restauração;
- limites adicionais para saídas, válvulas, motores, alarmes, intertravamentos, bypasses e forças;
- explicação condicionada da NAMUR NE 43, sem impor limites a equipamentos que não a adotem;
- formulário mínimo antes/durante/depois e matriz sintoma → hipótese → próxima evidência;
- checklist de restauração e liberação final;
- autoria organizacional verificável ligada à página Sobre;
- CTA comercial restrito à avaliação, manutenção, configuração e conferência funcional sob escopo confirmado.

O CTA promocional do Guia foi removido do corpo do artigo; a navegação global Guia foi preservada. O `lastmod` da URL em `sitemap-blog.xml` foi atualizado para `2026-09-15`.

## Fontes primárias verificadas em 15/09/2026

- IEC — `IEC 62382:2024, Control systems in the process industry — Electrical and instrumentation loop check`, publicada em 14/08/2024: escopo, ciclo de vida, responsabilidades e adaptação do teste à instalação.
- Ministério do Trabalho e Emprego — `NR-10 atualizada em 2026`, página publicada em 06/08/2026 e atualizada em 20/08/2026: campo de aplicação, controle de riscos e condições de desenergização.
- JCGM/BIPM — `VIM 3, item 2.39`: definição de calibração e distinção de ajuste e verificação.
- NAMUR — `NE 43`, edição 2021-07-26: propósito da informação de falha em transmissores digitais com saída analógica.

## Validação da publicação

GitHub Pages:

- workflow run: `35027858568`
- conclusão: `success`
- build: `success`
- deploy: `success`
- artefato: `10420108341`
- digest do artefato: `sha256:18b63a2c976d662a0bf0ac5b305289c1ec0b76f274a874fc2bbfaf8bde7b0676`

HTML servido pelo domínio:

- HTTP: `200`
- `Last-Modified`: `Tue, 15 Sep 2026 21:51:19 GMT`
- bytes: `27611`
- SHA-256: `330112dc656194b1933493d9362958baaf7cdf983bbe688c9d2556c56afd0ec6`
- Git blob SHA-1 calculado do HTML servido: `668df2b0317d4abd89b0183c35394bdd1f8b6acf`
- Git blob SHA-1 do commit de conteúdo: `668df2b0317d4abd89b0183c35394bdd1f8b6acf`
- conteúdo servido idêntico byte a byte ao candidato versionado: `sim`
- palavras visíveis, excluindo scripts e estilos: `1891`
- palavras no artigo: `1838`
- H1: `1`
- H2: `16`
- H3: `3`
- JSON-LD: `BlogPosting` + `FAQPage`
- canonical: válido
- carregador direto do AdSense: presente
- ocorrência da URL em `sitemap-blog.xml`: `1`
- menu global Guia: preservado
- CTA/link promocional do Guia no corpo do artigo: ausente
- Hotmart e `cursos.html`: ausentes
- rótulos separados `Serviços Industriais` / `Serviços Residenciais`: ausentes
- destinos internos e imagens confirmados na base
- tabela linear 4–20 mA recalculada independentemente
- calculadoras, fórmulas e JavaScript técnico compartilhado: não alterados

## Limites preservados

- nenhuma simulação, força, bypass ou atuação tratada como segura sem autorização, análise de risco e procedimento;
- nenhuma quantidade de pontos, tolerância ou critério universal inventado;
- nenhum loop check tratado como calibração, certificado, laudo ou rastreabilidade;
- nenhuma corrente fora da faixa interpretada automaticamente sem confirmar equipamento e configuração;
- nenhuma equipe, case, cliente, bancada, equipamento ou credencial inventado;
- nenhuma alteração em páginas `manual-review/P0`;
- nenhum `noindex` ou pruning em massa;
- nenhuma solicitação de nova análise do AdSense.

## Próximo passo

Selecionar outra página `improve/P0/high` de instrumentação, automação ou elétrica industrial e baixo risco editorial, desconsiderando as páginas 01–13 já concluídas pelos deltas incrementais. Manter `manual-review/P0` intactas e continuar uma página extensa por lote.


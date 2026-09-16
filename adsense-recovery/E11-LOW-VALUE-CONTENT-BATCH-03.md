# E11 — Conteúdo de baixo valor · lote 03

**Data:** 16/09/2026  
**Estado:** CONCLUÍDO E PUBLICADO  
**Escopo:** somente artigos com card/link ativo no `blog.html`; sem edição das páginas `manual-review/P0`.

## Objetivo

Continuar a recuperação editorial após o motivo informado pelo proprietário — **“conteúdo de baixo valor”** — sem aumentar volume artificialmente e sem reescrever páginas que já demonstram profundidade suficiente.

A superfície ativa observada permaneceu em **38 ações de artigos** no `blog.html`. A triagem foi limitada aos artigos realmente expostos nessa página. O lote selecionou apenas dois casos com sinais objetivos e combinados de baixo valor/resíduo editorial antigo.

## Páginas selecionadas

### 1. `blog-dimensionamento-tubo-pneumatico-instrumentacao.html`

Sinais encontrados antes da revisão:
- navegação antiga `Cursos` / `cursos.html`;
- link Hotmart na página editorial;
- conteúdo curto e genérico para uma decisão de engenharia;
- afirmações sobre velocidade e comprimento equivalente sem fonte ou critério aplicável claramente identificado;
- ausência de seção de referências técnicas.

Correções publicadas:
- navegação alinhada para `Guia` → `/guia/`;
- Hotmart removido da página editorial;
- conteúdo reestruturado em torno de vazão requerida, pressão disponível, pressão mínima no ponto de uso, comprimento, **diâmetro interno**, restrições e resposta dinâmica;
- tabela separando variáveis, efeitos e erros comuns;
- roteiro de pré-dimensionamento e diagnóstico de linha instalada;
- removida a ideia de regras universais de velocidade/metros equivalentes sem origem;
- referências públicas de Festo, SMC e ISO 4414 incluídas;
- relacionados limitados a ar de instrumentos e válvula de controle;
- `dateModified` atualizado para `2026-09-16`.

Commit de conteúdo: `5484f22b8e4acf5eed03ba567396e0ec90ca5145`.

### 2. `blog-histerese-pressostato-termostato.html`

Sinais encontrados antes da revisão:
- navegação antiga `Cursos` / `cursos.html`;
- link Hotmart na página editorial;
- texto curto para a dúvida principal;
- links relacionados fora do tema, incluindo ORP e vazão por pressão diferencial;
- referência técnica insuficiente para conceitos de ponto de atuação, reset e diferencial.

Correções publicadas:
- navegação alinhada para `Guia` → `/guia/`;
- Hotmart removido;
- links não relacionados removidos;
- conceitos separados em ponto de atuação, reset, histerese e repetibilidade;
- explicado por que o sentido de aproximação faz parte do resultado;
- roteiro de teste com ciclos, condição as-found/as-left e limitações;
- exemplo de interpretação sem transformar um diferencial isolado em critério universal de aprovação;
- distinção entre pressostato mecânico, eletrônico e termostato;
- ressalva específica para funções de segurança/intertravamento;
- referências públicas de fabricante WIKA incluídas;
- `dateModified` atualizado para `2026-09-16`.

Commit de conteúdo: `5cfb0939b49595fc9818c1836b1be78b0e986dc0`.

## Páginas triadas e preservadas

Durante o lote, páginas já substanciais não foram alteradas apenas por estarem no acervo. Entre as verificadas e preservadas:
- `blog-ar-instrumentos-qualidade-ponto-orvalho.html`;
- `blog-calibracao-instrumentos-industriais.html`.

As páginas abaixo continuam fora de edição técnica automática:
- `blog-inspecao-instrumentos-area-classificada.html`;
- `blog-ot-cybersecurity-instrumentacao.html`.

## Referências técnicas usadas no lote

Dimensionamento pneumático:
- Festo — cálculo de vazão com pressão de entrada, pressão de saída, comprimento e diâmetro interno;
- Festo — seleção e características de tubing pneumático;
- SMC — cálculo de vazão, pressão e perda de pressão em circuitos pneumáticos;
- ISO 4414:2010 — regras gerais e requisitos de segurança para sistemas pneumáticos.

Histerese:
- WIKA Brasil — definição de histerese/diferencial de comutação/dead band como diferença entre ponto de comutação e reset;
- WIKA TS-972 — definição de reset point e switch differential para interruptor de temperatura;
- WIKA PSM02 e PSM-630 — exemplos de diferencial/histerese e não repetibilidade definidos pelo fabricante.

## Sitemap e validação

- `sitemap-blog.xml`: `lastmod=2026-09-16` sincronizado para as duas páginas;
- commit do sitemap: `aea22737642da267996d793513177c74c2ffde00`;
- GitHub Pages run: `35147892933`;
- resultado: `success`;
- artifact: `10468250308`;
- digest: `sha256:282e89f42d3368ecc231fbd54c92e2fe599a92b8c7775f9b79475cf5569d444e`.

## Controles preservados

- nenhuma fórmula de calculadora alterada;
- nenhum JavaScript técnico compartilhado alterado;
- nenhuma capacidade, credencial, laboratório, equipamento, cliente ou case inventado;
- nenhum pruning/noindex em massa;
- nenhuma edição automática das páginas `manual-review/P0`;
- nenhuma solicitação de nova análise do AdSense enviada.

## Próximo passo

Executar o **E11 — lote 04** com a mesma disciplina: triagem dos artigos ativos restantes no `blog.html`, escolhendo no máximo **1 a 3 páginas** somente quando houver sinais objetivos combinados de baixo valor, estrutura editorial antiga, resíduos `Cursos/cursos.html`/Hotmart, links fora de contexto ou ausência de fonte técnica necessária. Preservar as páginas P0 e não solicitar revisão do AdSense automaticamente.

# E06 — Acervo monetizado — página 14

## Página

`calculadora-diagnostico-4-20ma-hart.html`

## Objetivo

Diferenciar a ferramenta de triagem rápida da calculadora completa de malha, aprofundar interpretação, exemplos e sequência de diagnóstico e tornar as limitações verificáveis, preservando integralmente fórmulas, limiares e JavaScript técnico já publicados.

## Decisão editorial

- Antes: `improve/P0/high`
- Depois: `keep/P1/high`

## Conteúdo publicado

Commits de conteúdo:

- revisão editorial: `cd22567ab88ba5a6032b62006d9a7c88cff03864`;
- correção do exemplo numérico após recalcular com a corrente de 22 mA usada pelo próprio código: `225e449cd4b29d59d1066cb430a617babc5c615d`.

Principais aprofundamentos:

- escolha explícita entre esta triagem rápida e a calculadora completa de malha;
- entradas, premissas e significado de cada saída;
- distinção entre conversão linear, status de referência, carga declarada, margem estimada e comunicação HART real;
- alerta contra dupla contagem do resistor de 250 Ω;
- três exemplos reproduzíveis, incluindo 12 mA em 0–10 bar e orçamento de tensão a 22 mA;
- matriz sintoma → hipóteses → evidências → condutas a evitar;
- sequência de verificação em campo sem autorizar abertura de malha ou alteração de parâmetros;
- registro mínimo para tornar a triagem repetível;
- referências primárias e limites de aplicação;
- autoria organizacional vinculada à página Sobre.

A navegação global Guia foi preservada. Não existe CTA promocional do Guia, Cursos ou Hotmart no corpo. A URL já constava uma vez em `sitemap-ferramentas-complementares.xml`, que não usa `lastmod`; o sitemap foi preservado sem alteração.

## Fontes primárias verificadas em 15/09/2026

- IEC — `IEC 60381-1:1982`, sinais analógicos de corrente contínua para sistemas de controle de processo; página oficial com estabilidade indicada até 2026.
- NAMUR — catálogo atual que identifica a `NE 043`, edição de 26/07/2021, sobre níveis de sinal para informação de falha.
- Emerson — manual de referência Rosemount 3051S: exemplo de carga mínima para comunicação e alerta sobre o efeito de mudanças severas da malha.
- FieldComm Group — histórico oficial das especificações HART, consultado para delimitar revisão e interoperabilidade.

## Validação da publicação

GitHub Pages da versão final:

- workflow run: `35033347360`
- conclusão: `success`
- build/deploy: `success`
- artefato: `10422481529`
- digest do artefato: `sha256:4819b7a0b9b305936a9006b16d399b33afe4d24a29edb20975d559e286a9a6bc`

HTML servido pelo domínio:

- HTTP: `200`
- `Last-Modified`: `Tue, 15 Sep 2026 22:56:45 GMT`
- bytes: `35436`
- SHA-256: `009d5cb4f2fb36816972b096a17489276b5b5c082996759810c59693ee6b650a`
- Git blob SHA-1 calculado do HTML servido: `c9ab82a36d0b4f9bf0622534b7938ae91af4745c`
- Git blob SHA-1 do commit final: `c9ab82a36d0b4f9bf0622534b7938ae91af4745c`
- conteúdo servido idêntico byte a byte ao candidato versionado: `sim`
- palavras visíveis, excluindo scripts e estilos: `1946`
- palavras no `main`: `1905`
- H1: `1`
- H2: `13`
- H3: `8`
- JSON-LD: `WebApplication` + `FAQPage`
- canonical: válido
- carregador direto do AdSense: presente
- ocorrência da URL no sitemap complementar: `1`
- menu global Guia: preservado
- CTA/link promocional do Guia no corpo: ausente
- Hotmart e `cursos.html`: ausentes
- JavaScript funcional: hash SHA-256 `e1e0095bf5691898e386304e08a12ed88927cb9781670950b6603385480900e8` antes e depois; byte a byte idêntico
- fórmulas e limiares técnicos: não alterados
- exemplo principal recalculado: 12 mA = 50% = 5 bar; 22 mA × 250 Ω = 5,5 V; tensão necessária 17,5 V; margem 6,5 V com fonte de 24 V

## Limites preservados

- nenhuma indicação de carga resistiva tratada como prova de comunicação HART;
- nenhum limiar NAMUR tratado como configuração universal;
- nenhuma abertura de circuito, alteração de parâmetro ou intervenção tratada como segura sem procedimento e autorização;
- nenhuma capacidade comercial, equipe, equipamento, cliente, case ou credencial inventados;
- nenhuma alteração em páginas `manual-review/P0`;
- nenhum `noindex` ou pruning em massa;
- nenhuma solicitação de nova análise do AdSense.

## Próximo passo

Selecionar outra página `improve/P0/high` de instrumentação, automação ou elétrica industrial e baixo risco editorial para E06-15, desconsiderando as páginas 01–14 e os respectivos deltas. Preservar E10-I1 para perto do encerramento.


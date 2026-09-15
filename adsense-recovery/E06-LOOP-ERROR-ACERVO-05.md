# E06 — Erro total de malha — Acervo 05

**Status:** PASSOU, PUBLICADO E VALIDADO.

Página: `blog-erro-total-malha-instrumentacao.html`

Decisão editorial: `improve/P0/high` → `keep/P1/high`.

## Publicação

- commit de conteúdo: `41421244f4e6cce1e11d81fff25d4c79aaf93f2e`
- GitHub Pages workflow: `34920747799`
- artefato: `10377956619`
- digest do artefato: `sha256:0113e7e54d026254980c7d656ed0af7fa2871e2d314ab185f7d527dbb78eab65`
- HTML publicado: 24.461 bytes
- SHA-256 do HTML: `3cf970d83e1b350f7d94a7a6337ea3f0913f1e98c7d7a45886a144c4cc6d48b6`
- candidato validado e HTML do artefato: idênticos byte a byte

## Validação observada no artefato

- 1.737 palavras visíveis;
- 1.695 palavras no conteúdo do artigo;
- 1 H1;
- 16 H2;
- 4 H3;
- JSON-LD `BlogPosting` + `FAQPage` válidos;
- canonical correto;
- carregador do AdSense preservado;
- URL presente exatamente uma vez em `sitemap-blog.xml`;
- sem `/guia/`;
- sem Hotmart;
- sem `Serviços Industriais` ou `Serviços Residenciais`;
- nenhuma calculadora, fórmula implementada em JavaScript ou script compartilhado foi alterado.

## Escopo da revisão

A revisão transformou o artigo curto em material técnico de triagem de engenharia, preservando as fórmulas editoriais existentes de soma conservadora e RSS, mas delimitando seu uso.

Foram adicionados:

- fronteira explícita da cadeia de medição;
- distinção entre erro observado, limite de especificação e incerteza de medição;
- normalização das contribuições para uma mesma unidade/base;
- explicação de soma conservadora como pior caso simples;
- explicação de RSS como triagem quando a hipótese de não correlação for defensável;
- forma geral da propagação de incerteza com coeficientes de sensibilidade e covariâncias;
- discussão de correlação e causas compartilhadas;
- exemplo completo de malha 0–200 °C;
- soma conservadora do exemplo = 1,20 °C;
- RSS de triagem do exemplo ≈ 0,65 °C;
- distinção entre margem matemática e declaração de conformidade;
- regra de decisão conforme orientação ILAC G8;
- roteiro de campo e tabela de diagnóstico;
- FAQ técnica;
- limite explícito: o conteúdo não valida SIS/SIL nem substitui análise metrológica formal;
- oferta comercial condicionada ao escopo real da ALOGY.

## Fontes públicas verificadas

- JCGM 200:2012 — VIM, BIPM;
- JCGM 100:2008 — GUM, BIPM;
- publicações atuais do JCGM/BIPM, incluindo a família GUM;
- ILAC G8:09/2019 — regras de decisão e declarações de conformidade;
- NIST TN 1297 — combinação de incertezas padrão e covariâncias.

## Limites

O artigo não deve ser usado como orçamento formal de incerteza apenas inserindo limites de datasheet no RSS. Uma avaliação formal exige modelo de medição, natureza de cada entrada, conversão para incerteza padrão quando aplicável, coeficientes de sensibilidade, covariâncias e regra de decisão coerente com o uso do resultado.

Nenhuma solicitação de nova análise foi enviada ao AdSense.

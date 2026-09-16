# E11 — Conteúdo de baixo valor · lote 02

Data: 2026-09-16
Motivo confirmado pelo proprietário: **conteúdo de baixo valor**
Estado: **CONCLUÍDO, PUBLICADO E VALIDADO**

## Escopo

Este lote tratou somente páginas com card/link ativo no `blog.html`:

- `blog-lopa-simplificada.html`;
- `blog-sil-pfd-didatico.html`.

A existência de outros arquivos no repositório, sitemap ou inventário não os tornou automaticamente elegíveis. As páginas `manual-review/P0` permanecem fora da edição técnica automática.

## Evidência encontrada antes da revisão

### `blog-lopa-simplificada.html`

- navegação antiga `Cursos` / `cursos.html`;
- atalho Hotmart na página editorial;
- mensagem de calculadora retirada para revisão;
- relacionados fora do tema (Cp/Cpk, vibração e compressor);
- link duplicado para o artigo SIL/PFD;
- estrutura editorial antiga e pouco explícita sobre cenário, origem de frequências, critérios de IPL e documentação das premissas.

### `blog-sil-pfd-didatico.html`

- navegação antiga `Cursos` / `cursos.html`;
- atalho Hotmart na página editorial;
- mensagem de calculadora retirada para revisão;
- relacionados pouco concentrados no contexto de segurança funcional;
- estrutura editorial antiga, sem separar suficientemente SIF, SIS, SIL, PFDavg, proof test e ciclo de vida.

## Alterações publicadas

### LOPA

O artigo foi reorganizado para responder perguntas técnicas concretas:

- cenário, evento iniciador, consequência e critério de risco;
- frequência iniciadora com unidade, origem e contexto;
- critérios que precisam ser justificados antes de creditar uma salvaguarda como IPL;
- exemplo didático de frequência mitigada, claramente separado de uma aprovação formal de cenário;
- tabela com registros mínimos úteis para auditabilidade da análise;
- erros que podem gerar falsa sensação de redução de risco;
- relação entre LOPA, requisito de redução de risco e segurança funcional;
- referências técnicas direcionadas a CCPS/AIChE e IEC 61511;
- relacionados restritos a SIL/PFD e teste de loop.

Também foram removidos `cursos.html`, rótulo `Cursos`, Hotmart e linguagem de conteúdo/ferramenta retirada para revisão. A capa existente `capa-blog-lopa-simplificada.webp` foi mantida.

Commit de conteúdo: `fac8b9df48b48e088f403a01e3fe5e7a3ad1d615`.

### SIL e PFDavg

O artigo foi reorganizado para separar:

- SIF, SIS e SIL;
- necessidade de especificar a função antes de verificar desempenho;
- papel de PFDavg em modo de baixa demanda;
- influência de falhas perigosas, diagnóstico, arquitetura, dependências, teste de prova, reparo e bypass;
- sensor, lógica, elemento final e suportes como partes da função;
- proof test como cobertura de falhas, e não somente periodicidade;
- ciclo de vida de segurança funcional;
- itens que isoladamente não provam atendimento ao SIL requerido;
- relação entre LOPA e especificação/verificação de uma SIF;
- referências técnicas direcionadas a IEC 61511, IEC 61508 e CCPS/AIChE.

Também foram removidos `cursos.html`, rótulo `Cursos`, Hotmart e linguagem de calculadora retirada para revisão. A capa existente `capa-blog-sil-pfd-didatico.webp` foi mantida.

Commit de conteúdo: `5cffeb23b766b5f2a4aed1f82dbd8a15f8c28d32`.

## Sitemap e publicação

O `sitemap-blog.xml` recebeu `lastmod=2026-09-16` para os dois artigos.

Commit de sitemap: `a1b97f0ee8a95583aabc98a3046447ddafe7242d`.

Validação GitHub Pages do commit final:

- workflow run: `35142441204`;
- conclusão: `success`;
- artefato: `10466051065`;
- digest: `sha256:06bcd63d8829343b81dd7f4daee9e18e395e93a7e27c16264bdac9c156873202`.

## Limites preservados

- nenhuma fórmula de ferramenta existente foi alterada;
- nenhum JavaScript técnico compartilhado foi alterado;
- os exemplos numéricos permanecem explicitamente didáticos;
- nenhuma alegação de certificação, validação SIL, execução de LOPA formal, equipe, equipamento, laboratório ou credencial foi inventada;
- nenhuma solicitação de reanálise do AdSense foi enviada.

## Próxima etapa

**E11 lote 03 — triagem objetiva dos artigos ativos restantes.** Revisar somente cards ativos do `blog.html` e selecionar de 1 a 3 páginas com sinais comprováveis de baixo valor (por exemplo: conteúdo superficial/genérico, estrutura antiga, navegação obsoleta, estado de revisão ou relacionados sem contexto). Não editar automaticamente as duas páginas `manual-review/P0`.

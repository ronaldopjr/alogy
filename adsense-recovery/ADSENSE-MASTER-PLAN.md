# Recuperação do Google AdSense — ALOGY

## Objetivo

Corrigir de forma rastreável e reversível os sinais técnicos e editoriais que podem sustentar a classificação "conteúdo de baixo valor" no domínio `alogy.com.br`.

Este projeto não promete aprovação do AdSense. A decisão pertence ao Google. O objetivo é elevar o site a um padrão técnico, editorial e de confiança compatível com as políticas publicadas.

## Fonte de verdade

- Repositório: `ronaldopjr/alogy`
- Branch de trabalho: `agent/adsense-recovery`
- Branch publicada: `main` — proibido alterar automaticamente
- Estado: `adsense-recovery/ADSENSE-STATE.json`
- Inventário: `adsense-recovery/ADSENSE-INVENTORY.csv`
- Registro: `adsense-recovery/ADSENSE-CHANGELOG.md`
- Bloqueios: `adsense-recovery/ADSENSE-BLOCKERS.md`

## Baseline confirmado

- 390 páginas HTML no repositório.
- 299 páginas declaradas indexáveis na auditoria interna mais recente.
- 90 páginas `noindex` na auditoria interna.
- 352 páginas apareciam indexadas no Search Console nas capturas de agosto de 2026.
- Propriedade do AdSense verificada.
- `ads.txt`, `robots.txt`, canonicals e sitemaps presentes.
- Reprovação vigente: `Conteúdo de baixo valor`.

## Princípios obrigatórios

1. Trabalhar em lotes pequenos, verificáveis e reversíveis.
2. Nunca alterar `main`, fazer merge ou pedir revisão ao AdSense automaticamente.
3. Nunca inventar autoria, experiência, credenciais, fontes, normas, cálculos ou resultados.
4. A ALOGY é importadora e revendedora dos produtos; não deve ser apresentada como fabricante.
5. Não publicar conteúdo, desenhos, tags, valores, layouts ou identificação extraídos dos PDFs fornecidos.
6. Tratar fórmulas, segurança elétrica, processo e engenharia como conteúdo de alto impacto: exigir revisão humana quando houver mudança substancial.
7. Não alterar datas apenas para aparentar atualização.
8. Não aplicar `noindex`, 301, 404/410 ou exclusão em massa sem inventário, justificativa e validação.
9. Não monetizar páginas legais, vazias, redirecionadas, `noindex` ou em revisão.
10. Interromper diante de conflito externo, validação falha ou decisão subjetiva sem evidência suficiente.

## Fases

### F0 — Controle e baseline

- Criar branch, arquivos de estado, inventário, prompt e validador.
- Produzir inventário completo das 390 páginas sem alterar conteúdo.
- Comparar HTML, robots, canonical, AdSense e presença nos sitemaps.

### F1 — Higiene técnica

- Propor tratamento para `/index.html`, verificações antigas e redirects HTML.
- Remover inconsistências entre `noindex`, AdSense e sitemap.
- Preservar URLs e tráfego; toda exclusão exige justificativa.

### F2 — Classificação editorial

- Classificar cada página: `keep`, `improve`, `merge`, `noindex-review`, `redirect`, `remove-candidate` ou `manual-review`.
- Registrar confiança, evidências, sobreposição e prioridade.

### F3 — Piloto supervisionado

- Melhorar de 3 a 5 páginas prioritárias.
- Validar linguagem, método, exemplos, fontes, autoria e experiência.
- Não avançar sem revisão humana do piloto.

### F4 — Núcleo de alto valor

- Trabalhar em 20 a 30 páginas prioritárias em lotes pequenos.
- Incluir valor original, método, premissas, limitações, exemplos e referências confiáveis.

### F5 — Consolidação

- Unificar sobreposições somente com evidência suficiente.
- Criar redirecionamentos em proposta; implementação depende de confirmação da hospedagem.

### F6 — Confiança e transparência

- Melhorar autoria, revisão técnica, Sobre e metodologia editorial usando somente dados confirmados pelo usuário.

### F7 — Auditoria final

- Executar validações completas.
- Gerar relatório e checklist para revisão humana.
- Não solicitar revisão ao Google automaticamente.

## Gates de segurança

Cada lote precisa passar por:

- JSON e CSV legíveis;
- HTML, H1, canonical e robots coerentes;
- nenhum AdSense em `noindex` ou redirecionamento;
- sitemap sem URL `noindex` conhecida;
- nenhum link/recurso local quebrado introduzido;
- nenhuma alteração não planejada em fórmula ou JavaScript;
- diff limitado ao lote declarado;
- changelog e estado atualizados no mesmo commit.

Se qualquer gate falhar, não avançar `ADSENSE-STATE.json`.

## Critério de conclusão

O trabalho termina com auditoria final aprovada e relatório para decisão do usuário. Merge em `main` e solicitação de revisão do AdSense são ações humanas separadas.

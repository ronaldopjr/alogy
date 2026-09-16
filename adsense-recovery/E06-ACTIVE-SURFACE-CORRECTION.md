# E06 — correção da superfície editorial ativa

Data: 2026-09-16  
Estado: concluído para o trabalho automatizável seguro na superfície ativa

## Motivo da correção

A seleção anterior aceitava existência do arquivo, HTTP 200, `index,follow`, sitemap e inventário histórico como sinais suficientes de publicação. O proprietário confirmou que páginas removidas das centrais atuais não devem receber revisão automática.

A regra vigente passa a exigir exposição atual:
- artigo: link/card ativo no `blog.html`;
- ferramenta: link/card ativo no `ferramentas.html`;
- institucional: exposição explícita na navegação atual.

O sitemap e a acessibilidade direta continuam úteis para diagnóstico técnico, mas não definem sozinhos a fila editorial.

## Reconciliação

- 77 destinos HTML únicos aparecem atualmente em `blog.html` e `ferramentas.html`.
- 12 desses destinos coincidem com a classificação histórica `improve/P0/high`.
- Oito já foram tratados em lotes E06 e continuam expostos.
- Duas páginas exigem revisão manual especializada:
  - `blog-inspecao-instrumentos-area-classificada.html`;
  - `blog-ot-cybersecurity-instrumentacao.html`.
- Duas páginas institucionais dependem de fatos verificáveis do proprietário:
  - `industrial.html`;
  - `sobre.html`.
- Dez revisões E06 anteriores estão hoje fora das centrais; permanecem como histórico, sem orientar nova seleção automática.

## Reversão do lote E06-19

A revisão de `ferramentas-processo-vazao-nivel.html` no commit `26c92561da21ef8b97c167d80be69f77d41d4db5` estava fora do escopo ativo e foi revertida integralmente pelo commit `dd4cac5b3f01a360770c788bf3a1e50117be9512`.

Evidências:
- blob restaurado da página: `7d244d903f13b47c77f09bc0330836d9845c3af8`;
- blob restaurado do sitemap: `91d96281bcbc38161af89e53680939959c7a04c6`;
- Pages run `35097729366`: build/deploy `success`;
- artefato `10446583906`;
- digest `sha256:c476ab64dff3992a690aa9b0e353f5c137e638ca235553a20f3a2658df25a918`;
- domínio: título `Instrumentação Industrial: Vazão, Nível e Pressão | ALOGY` e H1 original restaurados;
- expressões adicionadas no lote indevido ausentes no HTML visível;
- nenhum `E06-INVENTORY-DELTA-19.csv` foi adotado.

## Decisão

E06 está encerrado para o trabalho seguro e automatizável na superfície editorial ativa. As páginas manuais permanecem intactas. A próxima etapa é E07, limitada a fatos organizacionais verificáveis. Credenciais pessoais não serão inventadas.

Nenhuma poda em massa, `noindex` em massa, fórmula, JavaScript técnico ou configuração autenticada do AdSense foi alterada.

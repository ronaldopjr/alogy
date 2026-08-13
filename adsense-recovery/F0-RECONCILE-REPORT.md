# F0 — Reconciliação técnica e editorial

Data: 13 de agosto de 2026

## Resultado

A Fase Zero foi concluída sem alteração em nenhuma página do site. O pacote atual está tecnicamente mais consistente do que as capturas históricas do Search Console sugerem. O principal risco para o AdSense permanece editorial, não de indexação.

## Distribuição das 299 páginas indexáveis

| Tipo | Páginas | Com AdSense |
|---|---:|---:|
| Calculadoras | 209 | 15 |
| Artigos | 60 | 60 |
| Checklists | 10 | 2 |
| Hubs de ferramentas | 8 | 8 |
| Institucionais e outras | 12 | 2 |

## Faixas de conteúdo visível

| Faixa | Páginas |
|---|---:|
| Menos de 300 palavras | 5 |
| 300–499 | 112 |
| 500–799 | 108 |
| 800–1.199 | 61 |
| 1.200 ou mais | 13 |

A contagem de palavras não é critério de aprovação. Ela serve somente como triagem para localizar páginas que podem não explicar suficientemente método, premissas, limitações ou experiência.

## Autoria e confiança

- 18 páginas indexáveis apresentam texto visível associado a autor, autoria, revisão ou responsável técnico.
- Nenhuma página identifica uma pessoa como autora no JSON-LD.
- 255 páginas usam `Organization` como autora no JSON-LD.
- 30 páginas possuem `datePublished`.

Isso não prova violação, mas é um sinal relevante em um site com centenas de ferramentas e orientações de engenharia. A correção exigirá dados reais fornecidos pelo responsável; autoria ou credenciais não serão inventadas.

## Repetição editorial

- O título “Erros comuns” aparece em 41 páginas indexáveis.
- Um parágrafo institucional idêntico aparece em 16 páginas.
- Blocos de orientação e limitação idênticos aparecem em grupos de 8 a 13 páginas.
- Existem famílias de ferramentas que compartilham introduções e ressalvas quase iguais.

Títulos recorrentes como “Erros comuns” são naturais. O risco está na combinação de estrutura, parágrafos e chamadas repetidas em grande escala. A classificação editorial futura deve medir o valor exclusivo de cada página, e não apenas penalizar palavras coincidentes.

## Correção de falso positivo

A auditoria inicial contou H1 presentes dentro de strings JavaScript usadas para relatórios impressos. Após excluir scripts da análise, as 299 páginas editoriais indexáveis têm exatamente um H1 renderizável. Nenhuma página precisa ser alterada por esse motivo.

## Fila inicial de remediação

| Prioridade | Grupo | Quantidade/escopo | Ação planejada |
|---|---|---|---|
| P0 | Confiança institucional | Sobre, início, industrial, residencial e casos | Planejar conteúdo factual sobre identidade, experiência e método |
| P0 | Artigos monetizados | 60 | Classificar originalidade, autoria, exemplos, fontes e sobreposição |
| P1 | Hubs monetizados | 8 | Verificar se anúncios convivem com conteúdo editorial suficiente |
| P1 | Ferramentas monetizadas | 15 | Revisar método, premissas, segurança e posição dos anúncios |
| P1 | Arquivo soft 404 | 1 | Confirmar obsolescência e planejar 404/410 real |
| P2 | Checklists monetizados | 2 | Revisar profundidade e autoria |
| P2 | Calculadoras sem anúncios | 194 | Classificar utilidade e sobreposição; não alterar em massa |
| P3 | Páginas `noindex` | 90 | Manter isoladas até revisão específica |

## Próxima fase

F1 começa com plano técnico exato e reversível. As alterações editoriais continuam bloqueadas até o lote piloto supervisionado.

# F2 — Calculadoras de temperatura, lote 02

Data: 16 de agosto de 2026

Nenhuma página do site foi editada. As classificações foram feitas a partir dos dois HTML fixados no SHA inicial da execução.

| Página | Decisão | Prioridade | Motivo central |
|---|---|---|---|
| `calculadora-pt100.html` | `manual-review` | P0 | Curva principal coerente, mas classes de tolerância aplicadas sem controle de faixa de validade. |
| `calculadora-termopar.html` | `manual-review` | P0 | Interpolação linear em tabela reduzida e referências normativas sem edição ou ligação verificável. |

## Verificações técnicas

- A equação PT100 retorna 138,5055 Ω a 100 °C, coerente com o exemplo exibido de 138,505 Ω.
- A inversão resistência–temperatura usa busca numérica na faixa de −200 a 850 °C.
- A ferramenta de termopar usa pontos espaçados em até 110 °C e interpolação linear direta e inversa.
- Ambas geram memória preliminar e se apresentam como apoio para calibração ou diagnóstico, elevando a necessidade de revisão especializada.
- Nenhuma fonte externa está ligada nas páginas, embora IEC 60751 e IEC 60584-1 sejam citadas.

## Gates

- `main` permaneceu no baseline `eab09572d950c7b0072f6183705ba4d779ae472d`.
- Exatamente duas linhas do inventário foram alteradas.
- Ambas as páginas são `index,follow`, estão no sitemap e carregam AdSense.
- Canonicals e um H1 renderizado por página foram confirmados.
- JSON e CSV permanecem válidos; o inventário contém 390 páginas.
- Restam duas páginas monetizadas e indexáveis sem classificação após este lote.
- Nenhum HTML, fórmula, tabela, JavaScript ou recurso publicado foi modificado.
- Os PDFs confidenciais não foram lidos nem utilizados.
- Inventário, relatório, changelog e estado compõem um único commit.

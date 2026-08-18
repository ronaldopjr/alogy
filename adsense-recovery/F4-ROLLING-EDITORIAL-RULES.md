# F4 — Regras rolantes para continuidade editorial

## Objetivo

Manter a recuperação editorial em movimento sem reauditar o site nem ultrapassar a autorização já registrada: editar e publicar somente lotes pequenos de conteúdo editorial seguro, na branch `agent/adsense-recovery`, com pull request limpa para `main`.

## Seleção permitida

Quando `ADSENSE-STATE.json` indicar `F4-QUEUE-REFRESH` ou `observing`, consulte apenas:

- `ADSENSE-STATE.json`;
- `ADSENSE-INVENTORY.csv`;
- `F4-EDITORIAL-QUEUE.md`;
- `ADSENSE-CHANGELOG.md` e os relatórios F4 necessários para não repetir páginas;
- as candidatas que passarem o filtro abaixo.

Uma candidata só é elegível se for `index,follow`, estiver no sitemap, tiver classificação `improve` / `P0` / confiança alta, ainda não estiver concluída na F4 e puder receber valor editorial sem alterar fórmulas, JavaScript técnico, limites de cálculo, dados de cliente ou alegações institucionais.

## Exclusões absolutas

Nunca escolher:

- itens `manual-review`, `merge`, `noindex-review`, redirect ou remoção;
- NR, legislação, área classificada, segurança funcional, LOPA/SIL, intertravamentos, permissivos, alarmes, bypass, liberação operacional, testes em campo, dosagem química, pressão/vácuo perigoso, cibersegurança OT, seleção final de bomba/válvula/atuador ou qualquer tema que peça validação técnica específica;
- home, Sobre, serviços, cases, autoria, credenciais ou alegações de experiência;
- PDFs, desenhos, documentos de cliente e qualquer dado confidencial.

A ausência isolada de autoria ou de uma alegação de “revisão técnica” não torna uma página elegível para essa alegação: ela deve ser removida, nunca preenchida ou inventada.

## Reposição da fila

1. Aplique as exclusões antes de escolher qualquer página.
2. Forme um lote de uma a cinco páginas; prefira temas e formatos diferentes para reduzir repetição.
3. Para cada candidata, descreva no arquivo de fila: escopo editorial, fontes que precisarão ser verificadas, links internos pretendidos e mudanças proibidas.
4. Atualize `F4-EDITORIAL-QUEUE.md` e `ADSENSE-STATE.json` no mesmo commit de controle, defina `status: ready` e indique o novo lote.
5. Não edite páginas no mesmo ciclo que recompõe a fila.
6. Se não houver candidata, registre `status: observing` e uma razão objetiva. Mantenha a automação ativa; na execução seguinte, repita somente esta seleção. Não faça commit vazio.

## Execução e publicação

Cada lote deve obedecer integralmente aos gates de `AUTOMATION-PROMPT.md`: no máximo cinco páginas, uma única H1, canonical e robots preservados, links verificados, JSON legível, sem mudanças em fórmulas ou JavaScript e diff limitado ao lote e aos controles.

A publicação é permitida somente depois de todos os gates, por pull request limpa de `agent/adsense-recovery` para `main`, sem força e com SHA validado. Falha em uma página remove apenas essa página do lote; não autoriza substituí-la por item fora destas regras.

## Ciclo

`lote validado e publicado → F4-QUEUE-REFRESH → recomposição em execução separada → próximo lote`.

Não solicitar nova revisão do AdSense durante este ciclo.

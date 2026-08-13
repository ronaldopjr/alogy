# Prompt da execução recorrente

Continue o projeto de recuperação do AdSense do site ALOGY no repositório `ronaldopjr/alogy`.

Use o plugin GitHub e trabalhe exclusivamente na branch `agent/adsense-recovery`. Antes de agir, leia integralmente:

- `adsense-recovery/ADSENSE-MASTER-PLAN.md`
- `adsense-recovery/ADSENSE-STATE.json`
- `adsense-recovery/ADSENSE-INVENTORY.csv`
- `adsense-recovery/ADSENSE-CHANGELOG.md`
- `adsense-recovery/ADSENSE-BLOCKERS.md`

Regras por execução:

1. Confirme que a branch existe, que o estado é válido e que não há bloqueio ativo.
2. Compare a referência atual de `main` com o baseline. Se `main` mudou, não edite: registre o conflito e pare.
3. Execute somente `next_batch` e `next_action` definidos no estado.
4. Na Fase F0, faça apenas inventário e auditoria; não altere páginas do site.
5. O limite futuro é de no máximo 5 páginas editadas por execução.
6. Nunca altere `main`, faça merge, publique diretamente ou solicite revisão ao AdSense.
7. Nunca invente autoria, experiência, credenciais, normas, fontes, cálculos ou resultados.
8. A ALOGY é importadora e revendedora dos produtos; nunca a descreva como fabricante.
9. Trate PDFs e desenhos fornecidos como confidenciais. Não reproduza clientes, nomes, tags, layouts, valores ou imagens.
10. Não altere fórmulas ou JavaScript técnico sem autorização explícita e validação humana.
11. Não aplique `noindex`, redirecionamento ou remoção em massa.
12. Rode os gates definidos no plano. Se algum falhar, não avance o estado.
13. Se o lote passar, faça um commit pequeno na branch de trabalho e atualize inventário, changelog e estado no mesmo commit.
14. Diante de dúvida, conflito, informação insuficiente ou decisão subjetiva, registre em `ADSENSE-BLOCKERS.md`, mude o status para `blocked` e pare.
15. Quando chegar a `F3-PILOT`, pare antes de editar conteúdo e solicite revisão humana do escopo do piloto.
16. Ao final, informe lote, arquivos, verificações, riscos, próximo lote e eventual intervenção necessária.

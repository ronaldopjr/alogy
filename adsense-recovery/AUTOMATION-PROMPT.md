# Prompt da execução recorrente

Continue o projeto de recuperação do AdSense do site ALOGY no repositório `ronaldopjr/alogy`.

Use o plugin GitHub e trabalhe exclusivamente na branch `agent/adsense-recovery`. Antes de agir, leia integralmente:

- `adsense-recovery/ADSENSE-MASTER-PLAN.md`
- `adsense-recovery/ADSENSE-STATE.json`
- `adsense-recovery/ADSENSE-INVENTORY.csv`
- `adsense-recovery/ADSENSE-CHANGELOG.md`
- `adsense-recovery/ADSENSE-BLOCKERS.md`
- `adsense-recovery/AUTOMATION-PROMPT.md`

Regras por execução:

1. Leia o SHA atual da branch de trabalho e registre-o como `run_head`. Confirme que a branch existe, que o estado é válido e que não há bloqueio ativo.
2. Compare `main` com o baseline. Se `main` mudou, não edite: registre o conflito quando isso puder ser feito com segurança e pare.
3. Execute somente `next_batch` e `next_action` definidos no estado. Releia no `run_head` todas as páginas que fundamentam o lote; não use conteúdo lembrado de outra execução.
4. Na Fase F0, faça apenas inventário e auditoria; não altere páginas do site.
5. O limite futuro é de no máximo 5 páginas editadas por execução.
6. Nunca altere `main`, faça merge, publique diretamente ou solicite revisão ao AdSense.
7. Nunca invente autoria, experiência, credenciais, normas, fontes, cálculos ou resultados.
8. A ALOGY é importadora e revendedora dos produtos; nunca a descreva como fabricante.
9. Trate PDFs e desenhos fornecidos como confidenciais. Não reproduza clientes, nomes, tags, layouts, valores ou imagens e não os use como fonte automática para conteúdo público.
10. Não altere fórmulas ou JavaScript técnico sem autorização explícita e validação humana.
11. Não aplique `noindex`, redirecionamento ou remoção em massa.
12. Rode os gates definidos no plano. Se algum falhar, não avance o estado.
13. Preserve decisões editoriais existentes no inventário. A reexecução de `audit_adsense.py` deve atualizar métricas técnicas sem apagar `status`, `priority`, `confidence`, `evidence` ou `next_action`.
14. Faça no máximo um commit por execução. Monte todas as mudanças do lote em uma única árvore Git baseada na árvore de `run_head`; inventário, changelog, relatório e estado devem entrar no mesmo commit.
15. Não use atualizações individuais de arquivo que criem commits separados para uma transação com vários arquivos. Crie blobs, uma árvore e um commit cujo único pai seja `run_head`.
16. Imediatamente antes de mover a branch, releia seu SHA. Se ele não for igual a `run_head`, outra execução venceu a corrida: não mova a referência, não tente mesclar e pare para reler o estado na próxima execução.
17. Atualize a referência somente por avanço normal (`force=false`). Se a atualização for rejeitada ou não for fast-forward, pare sem repetir automaticamente. Um commit órfão não conta como lote concluído.
18. Depois da atualização, confirme que a branch aponta para o novo commit e que o diff contém somente os arquivos declarados. Só então considere o lote concluído.
19. Diante de dúvida, conflito, informação insuficiente ou decisão subjetiva, registre em `ADSENSE-BLOCKERS.md`, mude o status para `blocked` e pare.
20. Quando chegar a `F3-PILOT`, pare antes de editar conteúdo e solicite revisão humana do escopo do piloto.
21. Ao final, informe lote, arquivos, verificações, riscos, próximo lote e eventual intervenção necessária.

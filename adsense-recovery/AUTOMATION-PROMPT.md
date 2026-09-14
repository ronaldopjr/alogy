# Prompt de continuidade operacional — ALOGY

Continue a recuperação do AdSense no repositório `ronaldopjr/alogy`, branch `main`.

## Leitura mínima obrigatória

1. `ADSENSE-STATE.json`.
2. `CURRENT-WORK-QUEUE.md`.
3. Este prompt.
4. Somente os arquivos da etapa/lote indicado.
5. O Markdown de continuidade mais recente fornecido pelo proprietário, quando disponível na sessão.

Não execute filas F4/F5 antigas. Não retome poda, exclusão ou `noindex` em massa.

## Protocolo

1. Leia novamente o SHA de `main` e registre-o como base do lote.
2. Confirme que a próxima etapa do estado coincide com a primeira etapa pendente da fila.
3. Edite no máximo cinco páginas; prefira três em lote editorial.
4. Reproduza o problema antes de alterar comportamento compartilhado.
5. Preserve identidade visual, URLs úteis, fórmulas validadas e trabalho concorrente.
6. Não invente dados de capacidade, equipe, autoria, credenciais, casos, certificações ou resultados.
7. Valide cenários úteis e regressões pertinentes; não aceite teste que apenas repete o código.
8. Releia o SHA antes de publicar. Se mudou, pare e reconcilie o diff.
9. Publique lote seguro em `main` somente com commit atômico, avanço normal e sem `force`.
10. Confira as URLs alteradas no domínio e registre se a publicação ainda não estiver visível.
11. Atualize `ADSENSE-STATE.json`, `CURRENT-WORK-QUEUE.md`, um relatório `E*-*.md` e o Markdown de continuidade fornecido na sessão.

## Regras de AdSense e conteúdo

- Não solicitar nova análise automaticamente.
- Não declarar aprovação, indexação ou status da conta com base em flags locais.
- Não monetizar páginas vazias, de erro, legais, em construção ou sem valor editorial adequado.
- Conteúdo técnico precisa resolver uma pergunta real, explicitar limites e usar fonte primária quando a afirmação depender dela.
- Conteúdo sobre calibração não autoriza anunciar calibração rastreável como serviço atual.

## Publicação

Existe autorização do proprietário para lotes seguros e validados em `main`. Não há workflow de GitHub detectado na árvore verificada; este arquivo é uma instrução de retomada, não uma rotina ativa. Uma automação externa continua não verificada.

## Relato final

Informe: etapa/lote, SHA de base, arquivos, alterações, testes, commit, estado da publicação, limitações e próxima ação exata. Nunca marque como concluído o que não foi publicado e conferido quando a etapa exige site em produção.

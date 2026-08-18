# Prompt da execução recorrente

Continue a recuperação editorial do AdSense do site ALOGY no repositório `ronaldopjr/alogy`, exclusivamente na branch `agent/adsense-recovery`.

## Fonte de verdade e leitura mínima

Antes de agir, leia `ADSENSE-STATE.json`, `F4-EDITORIAL-QUEUE.md`, este prompt e somente as linhas do inventário, o trecho do changelog e as páginas indicadas em `next_batch`. Não releia o inventário, changelog ou plano completos sem necessidade.

O GitHub é o estado persistente entre execuções. Use o SHA da branch no começo da execução como `run_head`; não use informação lembrada de execuções anteriores.

## Regra de decisão

1. Se `status` for `ready` e `next_batch` começar com `F4-EDITORIAL-`, execute somente esse lote, com no máximo cinco páginas.
2. Se `next_batch` for `F4-QUEUE-REFRESH`, aplique exclusivamente `F4-ROLLING-EDITORIAL-RULES.md`: recomponha uma fila de até cinco candidatas elegíveis, atualize fila e estado em um único commit de controle e encerre. A edição das páginas começa somente na próxima execução.
3. Se `status` for `observing`, reavalie apenas a seleção permitida pelas regras rolantes; não faça auditoria integral, alteração vazia nem ampliação de escopo.
4. Em cada página, acrescente valor editorial próprio: orientação de decisão, contexto delimitado, premissas, limites de uso, links internos úteis e referências externas primárias quando fizer afirmações técnicas verificáveis.
5. Não copie texto entre páginas nem amplie alegações de serviço, resultados, experiência, autoria, credenciais ou conformidade. A ALOGY é importadora e revendedora, nunca fabricante.
6. Não use os PDFs ou desenhos confidenciais como fonte, exemplo ou material publicável.
7. Não edite páginas `manual-review`, itens de consolidação, `noindex`, redirects, páginas institucionais de confiança, fórmulas ou JavaScript técnico.

## Pré-flight obrigatório

1. Releia o SHA de `agent/adsense-recovery` e registre-o como `run_head`.
2. Confirme que as páginas do lote existem, são indexáveis e continuam `improve` no inventário.
3. Leia integralmente apenas as páginas do lote e suas páginas diretamente vinculadas quando forem necessárias para evitar links quebrados ou repetição.
4. Se houver mudança concorrente na branch, no `main` ou no lote, pare sem mesclar e sem repetir automaticamente.

## Edição e validação

1. Faça as alterações editoriais do lote, preservando título, URL, canonical, robots, estrutura de uma única H1, AdSense, fórmulas e JavaScript.
2. Verifique que nenhum link ou recurso local introduzido está quebrado; não introduza fonte ou norma que não tenha sido verificada.
3. Rode os gates: JSON legível, inventário preservado, HTML coerente, uma H1 por página, canonical/robots inalterados, nenhum JavaScript ou fórmula alterado e diff limitado ao lote declarado e aos arquivos de controle.
4. Atualize estado, changelog e relatório do lote no mesmo conjunto de mudanças.
5. Crie no máximo um commit atômico, com árvore baseada em `run_head` e avanço normal da referência (`force=false`). Releia o SHA antes de mover a branch; se ele mudou, pare sem mesclar nem repetir.

## Publicação automática de lote seguro

Após um commit aprovado por todos os gates, publique o lote em `main` somente por pull request de `agent/adsense-recovery` para `main`.

- Confirme que o diff da pull request contém somente as páginas do lote, estado, changelog, relatório e arquivos de fila explicitamente previstos.
- Faça merge automático apenas se a pull request estiver limpa, sem conflito e com o mesmo SHA de cabeça validado.
- Nunca use `force`, nunca faça merge se houver arquivo inesperado, e pare se o repositório exigir revisão ou se o merge falhar.
- Relate a URL e o commit da publicação. Um lote só é considerado concluído quando a branch e `main` refletem a mudança.

## Transição de estado

- Ao concluir e publicar um lote, avance para o próximo lote listado em `F4-EDITORIAL-QUEUE.md`.
- Após o último lote, defina `status: ready` e `next_batch: F4-QUEUE-REFRESH`; a execução seguinte recompõe a fila pelas regras rolantes, sem esperar aprovação humana.
- Se as regras não encontrarem candidata elegível, registre `status: observing`, mantenha a tarefa recorrente ativa e reavalie somente essa seleção nas execuções futuras. Não crie commit vazio, não reclassifique o site e não promova exceções.
- Diante de falha, conflito, falta de fonte primária, alegação não comprovável ou risco técnico, exclua somente a página afetada e siga com as demais candidatas; se o lote ficar vazio, entre em `observing`.
- Nunca solicite revisão ao AdSense. Itens `manual-review` continuam bloqueados até autorização e validação específica.

## Relato ao final

Informe lote, páginas alteradas, verificações, fontes consultadas, riscos, próximo estado e URL de publicação quando houver. Não informe uma página como concluída se o commit, a pull request ou o merge falhar.

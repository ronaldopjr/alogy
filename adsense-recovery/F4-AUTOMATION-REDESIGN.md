# F4 — desenho operacional da automação

## Objetivo

Transformar a execução recorrente em produção editorial verificável e publicação contínua de lotes seguros.

## Ciclo de uma execução

1. Ler estado e fila compactos; confirmar o SHA da branch.
2. Editar somente o lote de até cinco páginas determinado pela fila.
3. Validar HTML, links, H1, canonical, robots e ausência de mudanças em fórmulas ou JavaScript.
4. Atualizar estado, changelog e relatório; criar um único commit atômico por fast-forward.
5. Abrir e integrar automaticamente uma pull request limpa para `main`.

## Preservação e eficácia

- O repositório mantém fila, estado, relatório e commits reversíveis como fonte de verdade.
- A automação não relê o projeto inteiro nem repete classificação, evitando custo e trabalho sem efeito público.
- Somente lotes explícitos, seguros e validados podem alcançar `main`; itens sensíveis permanecem bloqueados.
- PDFs, autoria, credenciais e pedido de revisão ao AdSense continuam fora da publicação automática.

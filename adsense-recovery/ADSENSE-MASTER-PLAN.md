# Recuperação do Google AdSense — ALOGY

> **Controle operacional atual — versão 2026-09-14.4.** Este arquivo substitui as instruções antigas de F4/F5 como fonte de execução. O histórico permanece no Git, mas nenhuma fila antiga deve ser retomada sem conferir `ADSENSE-STATE.json` e `CURRENT-WORK-QUEUE.md`.

## Objetivos

1. Corrigir defeitos de funcionamento e confiança que prejudiquem o leitor.
2. Fortalecer utilidade, autoria, evidências e clareza editorial das páginas monetizáveis.
3. Manter a oferta comercial compatível com a capacidade real da ALOGY.
4. Preparar o site para uma nova análise do AdSense sem prometer aprovação.

## Fonte de verdade

- Repositório: `ronaldopjr/alogy`
- Branch publicada e operacional: `main`
- Estado atual: `adsense-recovery/ADSENSE-STATE.json`
- Fila executável: `adsense-recovery/CURRENT-WORK-QUEUE.md`
- Bloqueios e dependências: `adsense-recovery/ADSENSE-BLOCKERS.md`
- Relatórios por lote: `adsense-recovery/E*-*.md`
- Plano de continuidade externo: o Markdown mais recente fornecido pelo proprietário; quando estiver disponível na sessão, deve ser atualizado no encerramento do lote e devolvido ao proprietário.

Arquivos F4/F5 e relatórios anteriores são históricos. Uma orientação antiga não prevalece sobre o estado e a fila atuais.

## Estado reconciliado em 14/09/2026

- SHA inicial de `main`: `11c4014484abae91dfb4aff037b33a77f9eeb0cd`.
- E00: revisão e plano consolidado — concluído.
- E01: controles reconciliados — concluído no commit `734559b163b01b3e1bd95d07380cbfd33b241332`.
- E02: correção publicada no commit `eec58b20b6de6d8de827cf1f9f623b2987827bb2` e validada localmente; falta conferir a busca interativa no domínio.
- Próxima ação: conferir E02 no domínio em navegador real; passando os quatro cenários, marcar E02 como concluída e iniciar E03.
- Parecer interno: o site ainda não está pronto para solicitar nova análise ao AdSense.
- A poda temática F5 não é mais a próxima ação. Não excluir, desindexar ou remover páginas em massa.

## Ordem operacional

`E02 (conferência no domínio) → E03 → E04 → E05 → E06 → E07 → E08 → E09 → E10 → E11 → E12`

As etapas comerciais C01–C03 podem avançar em paralelo somente com fatos confirmados pelo proprietário.

## Ciclo obrigatório de cada lote

1. Reabrir `main`, registrar o SHA e conferir mudança concorrente.
2. Ler o estado, a fila atual e somente os arquivos do lote.
3. Limitar o lote a cinco páginas; preferir três quando houver revisão editorial.
4. Executar sem inventar dados, equipe, credenciais, capacidade, casos ou certificações.
5. Validar o comportamento útil, metadados e regressões pertinentes.
6. Publicar somente lote seguro e validado, sem `force` e preservando trabalho concorrente.
7. Conferir as URLs alteradas no domínio; distinguir editado, commitado e publicado.
8. Atualizar estado, fila, relatório do lote e o Markdown de continuidade fornecido na sessão.

## Regras que permanecem

- Preservar o foco em Instrumentação, Calibração, Automação e Elétrica.
- Não retomar exclusões ou `noindex` em massa como estratégia de AdSense.
- Conteúdo educativo sobre calibração pode permanecer; a oferta comercial não pode anunciar capacidade rastreável não comprovada.
- Não alterar fórmulas, critérios de segurança ou JavaScript técnico sem reprodução do problema e validação proporcional ao risco.
- Não fabricar autoria, depoimentos, cases, fotos de campo, experiência, registros profissionais, vínculos com fabricantes ou resultados.
- Não solicitar revisão ao AdSense automaticamente.

## Publicação

O proprietário já autorizou a publicação de lotes seguros e validados em `main`. A execução deve usar commit atômico e avanço normal da referência, sem força. Antes de publicar, reler o SHA de `main`; se ele mudou, interromper e reconciliar o diff.

Não foi encontrado workflow em `.github/workflows` na árvore verificada. A branch `agent/adsense-recovery` permanece como histórico de agosto de 2026 e não é a branch operacional atual. Isso não comprova a inexistência de uma automação externa. Este arquivo não cria uma rotina recorrente.

## Critério de conclusão

O projeto só fica pronto para nova análise quando E10 não encontrar problema material conhecido de conteúdo, funcionamento, promessas, publicidade ou política e a conta permitir a ação. A aprovação continua sendo decisão do Google.

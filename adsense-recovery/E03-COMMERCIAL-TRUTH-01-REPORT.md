# E03-COMMERCIAL-TRUTH-01 — oferta industrial compatível com a capacidade confirmada

## Objetivo

Corrigir a página comercial `industrial.html` para que a ALOGY não anuncie calibração em campo, rastreabilidade, acreditação ou documentação metrológica sem recursos e parceiros confirmados.

## Base da execução

- Branch: `main`.
- SHA de início: `332517f28b77d4c57e7cf456b9f81d1e3e995dfa`.
- Fato confirmado pelo proprietário: a ALOGY ainda não possui padrão calibrado confirmado para sustentar emissão própria de laudo de calibração.
- Dependências não confirmadas: funções e faixas da bancada, modelos/portes atendidos, meios de teste, local de recebimento, profissionais disponíveis e parceiros.

## Problema encontrado

A versão anterior de `industrial.html` anunciava “calibração em campo” como parte direta da oferta de Instrumentação Industrial. Metadados sociais e descrição também apresentavam calibração como serviço corrente, sem delimitação de recursos, documentação ou rastreabilidade.

## Alterações realizadas

- Título e descrições passaram a destacar manutenção de instrumentação, automação e elétrica industrial.
- A oferta de instrumentação foi delimitada como avaliação de inspeção, manutenção, configuração e conferência funcional.
- Válvulas de controle, atuadores e posicionadores passaram a constar explicitamente como itens sujeitos a avaliação de modelo, falha, quantidade e meios de teste.
- Foi acrescentada uma seção de escopo prévio com testes, peças, prazo e documentação de entrega.
- A página esclarece que inspeção, manutenção, parametrização e conferência funcional não são certificado de calibração, serviço acreditado ou comprovação de rastreabilidade metrológica.
- Calibração, ensaio ou documentação específica só podem constar da proposta quando recursos e parceiros forem efetivamente confirmados.
- A oferta de NR10/NR12 foi qualificada como apoio em adequações com escopo e responsabilidades definidos, sem alegação automática de conformidade.
- O ícone social da Hotmart foi retirado desta página; o link global “Guia” no menu foi preservado.

## Validação local

- HTML analisado sem erro estrutural detectado pelo parser usado na execução.
- Um H1.
- Canonical preservado em `https://www.alogy.com.br/industrial.html`.
- Um bloco JSON-LD, com JSON válido.
- Nenhuma ocorrência da promessa “calibração em campo”.
- Nenhuma alegação de acreditação ou rastreabilidade da ALOGY.
- Nenhum link social da Hotmart.
- Nenhuma fórmula, JavaScript técnico, sitemap, robots ou URL alterados.

## Limites e pendências

- A página precisa ser conferida no domínio após a publicação.
- C01 continua pendente; portanto, não foram publicados modelos, portes, faixas, prazos, equipe, testes específicos ou parceiro de calibração.
- `index.html`, `sobre.html`, o CTA de `calculadora-4-20ma.html` e outros CTAs comerciais continuam no próximo lote E03.
- A conferência interativa de E02 continua pendente e não foi marcada como concluída.
- Nenhuma solicitação de análise foi enviada ao AdSense.

## Resultado

Lote validado e seguro para publicação. A página fica comercialmente utilizável sem exceder a capacidade comprovada, mas E03 permanece em execução até revisar os demais pontos do escopo inicial.

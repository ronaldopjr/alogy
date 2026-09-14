# E05 — Seleção do piloto editorial do AdSense

Data: 2026-09-14

## Decisão

O piloto editorial será executado em duas páginas, nesta ordem:

1. `blog-calibracao-valvula-controle.html` — página específica de válvulas, atuadores e posicionadores.
2. `blog-calibracao-instrumentos-industriais.html` — página-pilar de calibração e confiabilidade da medição.

A primeira página aproxima conteúdo técnico, intenção comercial e o serviço que a ALOGY pretende desenvolver: avaliação, diagnóstico, manutenção, configuração e conferência funcional de válvulas de controle, atuadores e posicionadores, sempre sob escopo confirmado. A segunda página organiza a arquitetura editorial e distribui autoridade para os conteúdos específicos de calibração e teste de malha.

## Por que estas páginas

As duas páginas são indexáveis, canônicas, estão nos sitemaps, carregam o AdSense diretamente e foram classificadas como `improve`/`P0` no inventário canônico.

### `blog-calibracao-valvula-controle.html`

Estado de partida:

- conteúdo curto para a amplitude do tema;
- apresenta pontos 4–20 mA, subida e descida, condição `as-found`/`as-left`, ação direta/reversa e segurança operacional;
- já separa sinal, posicionador, atuador, haste e posição real, mas ainda sem método completo de registro;
- não possui referências técnicas externas primárias;
- não diferencia com suficiente clareza banda morta, histerese, atrito, `stiction`, repetibilidade e falha de feedback;
- é diretamente relacionada à captação de serviços de manutenção de válvulas, atuadores e posicionadores.

### `blog-calibracao-instrumentos-industriais.html`

Estado de partida:

- funciona como introdução e hub do tema;
- já distingue verificação, calibração e ajuste e apresenta `as-found`/`as-left`;
- precisa consolidar terminologia metrológica, fontes primárias, um exemplo reproduzível e uma arquitetura interna mais clara;
- deve separar resultado de calibração, tolerância, incerteza e regra de decisão sem criar critério universal;
- a data e os metadados precisam refletir a revisão editorial real.

## Critérios de aceite — página de válvula de controle

A revisão deverá:

1. Delimitar o que está sendo verificado: comando, saída pneumática, posicionador, atuador, haste/eixo, feedback e resposta mecânica.
2. Diferenciar conferência funcional, calibração do conjunto, ajuste do posicionador e manutenção mecânica.
3. Incluir uma matriz de registro para 0%, 25%, 50%, 75% e 100% em subida e descida, sem definir tolerância universal.
4. Explicar, em linguagem prudente, banda morta, histerese, `stiction`, repetibilidade e problemas de alimentação pneumática.
5. Organizar uma sequência de diagnóstico que evite ajustar o posicionador antes de localizar a causa.
6. Preservar as travas de segurança e a necessidade de liberação operacional.
7. Adicionar referências oficiais e identificáveis.
8. Usar CTA comercial verdadeiro: avaliação, inspeção, manutenção, configuração e conferência funcional sob proposta; nenhum certificado ou rastreabilidade própria deve ser prometido sem recursos confirmados.
9. Preservar canonical, `index,follow`, um único H1, AdSense e links internos pertinentes.
10. Não alterar fórmulas ou JavaScript técnico compartilhado.

## Critérios de aceite — página-pilar de calibração

A revisão deverá:

1. Alinhar os conceitos de calibração, verificação e ajuste ao VIM, sem reproduzir trechos extensos.
2. Explicar a relação entre erro observado, incerteza, tolerância e regra de decisão.
3. Incluir um exemplo fictício completo, com pontos, condição encontrada, possível ajuste e condição final, sem emitir conclusão universal de conformidade.
4. Separar calibração em bancada, verificação em campo e teste de loop.
5. Melhorar os links para páginas específicas de pressão, temperatura, vazão, nível, válvulas e analisadores.
6. Atualizar metadados e data somente quando a revisão for publicada.
7. Preservar o posicionamento comercial verdadeiro da ALOGY.

## Fontes primárias previstas

- BIPM/JCGM — `JCGM 200:2012`, Vocabulário Internacional de Metrologia: https://www.bipm.org/en/doi/10.59161/jcgm200-2012
- Emerson — `Control Valve Handbook`, 6ª edição: https://www.emerson.com/pt/final-control/catalog/products-and-software/valves/control-valves/control-valve-handbook
- FieldComm Group — registros oficiais de posicionadores HART serão usados apenas como exemplos de recursos dependentes de modelo, nunca como capacidade universal de todo posicionador.

## Ordem de execução

1. Revisar e publicar `blog-calibracao-valvula-controle.html`.
2. Validar escopo, HTML, links, estrutura, implantação e versão publicada.
3. Revisar e publicar `blog-calibracao-instrumentos-industriais.html` em lote separado.
4. Atualizar o inventário canônico após cada página.
5. Não solicitar nova análise ao AdSense durante o piloto.

## Limites

- Não inventar experiência, equipe, bancada, rastreabilidade, acreditação ou capacidade de emissão de certificado.
- Não estabelecer tolerância, periodicidade ou critério universal.
- Não transformar conteúdo educativo em procedimento operacional para intervenção sem liberação.
- Não misturar esta revisão editorial com poda em massa, alteração de fórmulas ou mudança do script compartilhado.

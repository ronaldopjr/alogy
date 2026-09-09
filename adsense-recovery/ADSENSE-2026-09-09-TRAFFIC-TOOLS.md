# AdSense: evidências e melhorias de 09/09/2026

## Diagnóstico e alcance

A captura enviada pelo proprietário mostra verificação de propriedade concluída e reprovação por **conteúdo de baixo valor**. Não informa URLs específicas nem comprova uma causa única. Cliques orgânicos do Search Console não são cliques em anúncios e não asseguram aprovação.

A base analisada corresponde à árvore publicada `0dab5ca4cee5b4555242d0ae394b1c4853762c36` (main `dd6d215`). O lote preserva layout geral, fotos, URLs, sitemap e demais ferramentas. Não solicita revisão no painel, não altera conta AdSense e não declara o site aprovado.

## Configuração conferida no código

- `ads.txt` contém o publisher informado na conta: `pub-5586837114309500`.
- Home contém metatag `google-adsense-account`; `robots.txt` permite rastreamento e aponta o sitemap.
- Política de Privacidade explica publicidade e cookies de terceiros; termos de uso, contato e identificação institucional já existem. Presença desses documentos não equivale a auditoria jurídica.
- Unidades manuais em `app.js` permanecem desativadas. Há também carregadores diretos do AdSense em 86 HTMLs; portanto, a flag do JavaScript **não é um interruptor global** desses scripts. Nenhum deles está em página marcada como noindex nesta auditoria. Não ativamos novos anúncios.
- 392 HTMLs conferidos estruturalmente: 294 páginas de conteúdo indexáveis no sitemap, 97 noindex e um arquivo de verificação do Google. Sem links locais quebrados, assets HTML ausentes ou JSON-LD inválido. Exceções conhecidas de canonical em redirects e `/guia/` são intencionais.

## Melhorias publicáveis neste lote

| Página | Evidência do usuário em 28 dias | Correção e valor entregue |
|---|---:|---|
| Perda de carga em filtro | 6 cliques | Entradas inválidas bloqueadas; troca do rótulo enganoso de saturação por posição no intervalo limpo–alarme; retirada de limiares arbitrários de 60/90%; normalização linear ou quadrática explícita; barras sincronizadas; exemplo e referência Donaldson. |
| Potência de exaustor/ventilador | 6 cliques | Limites físicos de eficiência e FP; barras de potência; distinção entre potência calculada com margem e seleção comercial; corrente com hipótese explícita; exemplo numérico e referência DOE. |
| 4–20 mA | 4 cliques | Gráfico da escala, controle de sinal e diagrama conceitual; faixa invertida e extrapolação identificadas; gráfico limpo quando entrada inválida; escape da unidade em HTML e impressão; correção de uma fórmula textual que omitia dividir o percentual por 100. |

Os desenhos indicam relações conceituais, não ligações de campo. Gráficos usam SVG local, sem bibliotecas externas, animação, novos rastreadores ou chamadas de rede. Valores permanecem em texto; controles usam área de toque de 48 px e o layout se adapta a telas estreitas. Isso não substitui validação visual em navegador.

## O que ainda impede afirmar que a recuperação está concluída

1. **Conteúdo editorial restante:** após este lote, 19 páginas ainda contêm a mesma frase genérica de interpretação (“o resultado indica tendência e ordem de grandeza”). A ocorrência é um sinal de revisão, não prova de infração em todas elas. É preciso avaliar utilidade específica, exemplos, limitações e referências, sem apenas aumentar palavras. O Google não forneceu uma lista exata dos problemas.
2. **Convergência de ferramentas:** os dados mostram tráfego tanto em Cv quanto Cv/Kv. Conferir diferenças reais antes de decidir por consolidação; não remover ou redirecionar cegamente.
3. **Poda anterior e tráfego:** alinhamento de eixos e frequência de defeitos de rolamento receberam cliques na captura, embora constem no lote anterior de noindex. Os períodos e a recência da indexação podem diferir. Não apagar essas URLs, nem retomar poda automática sem reavaliar os dados. Nenhuma mudança de indexação foi feita neste lote.
4. **Validação editorial humana:** experiências de campo, autoria e referências devem ser reais. Não criar depoimentos, certificações ou casos para simular autoridade. Os exemplos novos são contas didáticas, não casos de clientes.

### Próxima prioridade delimitada

Revisar perda de ar comprimido, tempo de residência em tanque e vazão normalizada de gases, que já aparecem no Search Console. Comparar Cv e Cv/Kv antes de alterar sua organização. Não expandir o número de páginas apenas para monetizar. Priorizar utilidade e resultados corretos; gráficos só quando ajudam a interpretar.

### Pedido de revisão

Não marcar “corrigi os problemas” apenas porque houve este commit. Quando a revisão das pendências relevantes estiver concluída e as mudanças estiverem publicadas, o proprietário poderá solicitar nova análise em AdSense → Sites → alogy.com.br → Pedir revisão. A decisão pertence ao Google; não há garantia de aprovação nem necessidade demonstrada de comprar outro domínio.

## Verificação realizada

- Scripts reais de 30 calculadoras executados em DOM simulado, com 740 casos de entrada inválida rejeitados.
- Testes específicos das três integrações: exemplos numéricos, alteração de entradas e barras, slider 4–20 mA, faixa invertida, extrapolação, limpeza de gráficos, recuperação e escape de rótulos.
- Regressões de navegação/carrossel e contato passaram; nenhum formulário foi enviado.
- Auditoria estrutural de 392 HTMLs e `git diff --check`.
- Sem teste visual em navegador, sem ensaio com instrumentos e sem acesso autenticado ao painel AdSense nesta execução.

## Fontes primárias consultadas

- Google: https://support.google.com/adsense/answer/12176698?hl=en
- Google, telas sem conteúdo/baixo valor: https://support.google.com/publisherpolicies/answer/11112688?hl=en
- Google, páginas prontas para AdSense: https://support.google.com/adsense/answer/7299563?hl=en-AU
- DOE, ventiladores: https://www.energy.gov/sites/default/files/2014/05/f16/fan_sourcebook.pdf
- Donaldson, perda de pressão: https://ecatalog.donaldson.com/view/478028566/26/

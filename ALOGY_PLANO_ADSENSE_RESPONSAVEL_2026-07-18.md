# Plano técnico para AdSense responsável — 18/07/2026

## Finalidade

Preparar a ALOGY para receita exclusivamente pelo Google AdSense sem ativar anúncios, solicitar revisão ou alterar configurações externas nesta etapa. O plano preserva a empresa de engenharia como identidade principal e mantém Blog e Ferramentas como áreas subordinadas de conteúdo técnico.

Este documento não autoriza mídia kit, venda direta, patrocínio, publieditorial, afiliados, catálogo pago ou contato comercial com fabricantes.

## Estado verificado no repositório

- 390 arquivos HTML públicos foram encontrados na raiz do site.
- 374 páginas carregam uma única referência ao script assíncrono `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`.
- Não foi encontrado bloco publicitário ativo (`<ins class="adsbygoogle">`) no HTML. O `app.js` contém funções preparatórias que criariam blocos e executariam `adsbygoogle.push(...)`, mas elas permanecem inativas porque `ALOGY_ADS_CONFIG.enabled` está como `false` e os três IDs de slot estão vazios.
- As 16 páginas sem o carregador incluem as páginas institucionais principais, políticas, termos, projetos, cursos, sete calculadoras e o arquivo de verificação do Search Console.
- O `ads.txt` mantém o editor direto `google.com, pub-5586837114309500, DIRECT, f08c47fec0942fa0`.
- Nenhuma métrica de impressão, clique, CTR, RPM, Core Web Vitals ou receita foi inferida a partir desse inventário.

## Auditoria do carregador — 18/07/2026

- Cada uma das 374 páginas identificadas contém exatamente uma referência estática ao carregador; não foram encontradas duplicações na mesma página.
- O carregador está presente mesmo com a infraestrutura de blocos manuais desativada no `app.js`. Esse estado pode servir à vinculação do site ou ao Auto Ads configurado externamente, portanto a ausência de blocos no repositório não autoriza removê-lo.
- Em uma requisição diagnóstica feita em 18/07/2026 às 06:45 BRT, o endereço do carregador respondeu `HTTP 200` e informou `content-length: 198167` bytes e cache privado de uma hora. É uma amostra do recurso naquele instante, não uma medida de transferência para todos os usuários nem evidência de impacto em LCP, INP ou CLS.
- A consulta automatizada ao PageSpeed Insights não produziu relatório porque a API pública respondeu `429 RESOURCE_EXHAUSTED`. Nenhuma pontuação ou métrica foi estimada para preencher essa lacuna.
- Não foi feita alteração no carregador: uma remoção em massa sem confirmar a configuração da conta poderia interromper vinculação, verificação ou Auto Ads, enquanto mantê-lo tem custo de rede que ainda precisa ser medido em navegador e em dados de campo.

Os comentários históricos “Auto Ads” ou “verificação de propriedade” não comprovam que anúncios estejam ativos. O estado externo da conta deve ser conferido no AdSense antes de qualquer implantação.

## Princípios de posicionamento

1. O conteúdo técnico deve continuar sendo o elemento principal da página.
2. Publicidade deve ser identificável e visualmente separada de navegação, formulários, botões, resultados, tabelas e chamadas de serviço.
3. Nenhum bloco deve parecer parte do cálculo, diagnóstico, checklist ou recomendação da ALOGY.
4. Não usar texto que incentive clique, prometa fabricante específico ou relacione anúncio ao resultado técnico.
5. Não criar formatos próprios, banners internos ou espaços para patrocinadores.
6. Não inserir publicidade antes de existir autorização explícita para ativação e revisão do site.

## Áreas candidatas após aprovação

### Artigos do Blog

- Um bloco em fluxo normal após uma seção completa, nunca entre título e introdução.
- Um segundo bloco somente em artigos longos, após conteúdo adicional substancial.
- Evitar posição imediatamente junto de links internos, FAQ, CTA de contato, tabelas ou avisos de segurança.
- Não inserir anúncio em textos curtos apenas para aumentar inventário.

### Ferramentas e calculadoras

- Nunca entre campos, botão de calcular, resultado, explicação do resultado ou botão de copiar.
- Candidato preferencial: depois do resultado, das limitações e da explicação do cálculo, quando já houver separação editorial clara.
- Checklists não devem ter anúncio entre itens nem próximo dos controles “conforme”, “não conforme” ou equivalentes.
- Preservar o uso no celular sem clique acidental e sem deslocamento do resultado durante o carregamento.

### Páginas institucionais

- Página inicial, serviços, Sobre, Projetos, Cursos, Contato, Privacidade e Termos permanecem sem posição publicitária planejada.
- Essa exclusão preserva a apresentação empresarial, a confiança e a clareza entre serviço de engenharia e conteúdo monetizado.

## Estabilidade visual e desempenho

- Carregar o código do AdSense no máximo uma vez por página.
- Qualquer contêiner futuro deve reservar espaço somente quando o bloco for realmente implantado; não publicar vazios visíveis.
- A implementação de dimensões responsivas e espaçamento pertence à frente de interface, após teste comparável em Blog e Ferramentas.
- Medir LCP, INP e CLS em celular e desktop antes e depois da implantação. Usar dados reais do Search Console/CrUX quando disponíveis e teste de laboratório apenas como diagnóstico complementar.
- Meta de referência do Google: LCP até 2,5 s, INP abaixo de 200 ms e CLS abaixo de 0,1 no 75º percentil. Essas metas não são resultados atuais da ALOGY.
- Se o piloto piorar leitura, estabilidade, interação ou tempo de resposta, retirar o bloco e reavaliar antes de ampliar.

## Piloto futuro e reversível

Somente após autorização explícita e situação externa da conta confirmada:

1. Selecionar um artigo longo e uma ferramenta madura de instrumentação, sem alterações concorrentes.
2. Registrar estado anterior com PageSpeed/Lighthouse e, quando disponível, dados de campo.
3. Implantar no máximo um bloco por página, identificado como “Publicidade”.
4. Validar celular, teclado, leitor de tela, rolagem, tabelas, cálculo, cópia e ausência de clique acidental.
5. Comparar resultados antes de ampliar. Não extrapolar desempenho de duas páginas para todo o site.
6. Manter o lote isolado para reversão simples.

## Bloqueios atuais

- Não solicitar revisão nem indexação.
- Não ativar Auto Ads ou formatos de sobreposição.
- Não adicionar blocos manuais enquanto conteúdo genérico e auditorias visuais ainda estiverem em correção.
- Não alterar o carregador existente em massa sem medição e sem confirmar seu papel na vinculação do site à conta.
- Não interpretar a amostra de tamanho do JavaScript como resultado de desempenho; repetir a medição em navegador controlado e consultar CrUX/Search Console quando houver dados.
- Não inventar projeções de tráfego ou receita.

## Validação exigida antes da ativação

- conta, domínio e estado de aprovação conferidos diretamente no AdSense;
- Política de Privacidade e consentimento revisados para a configuração efetivamente usada;
- `ads.txt` validado externamente;
- páginas piloto sem erro de HTML, JSON-LD, canonical ou link interno;
- anúncios claramente separados de ações técnicas;
- métricas reais registradas com data, dispositivo e URL;
- função atual do carregador confirmada na conta (vinculação, verificação, Auto Ads ou apenas código legado);
- aprovação explícita para ativar ou solicitar revisão.

## Referências oficiais

- Google AdSense — Auto ads: https://support.google.com/adsense/answer/9261805
- Google AdSense — políticas de posicionamento: https://support.google.com/adsense/answer/1346295
- Google Search Central — Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- Google — medição com PageSpeed Insights e CrUX: https://developers.google.com/codelabs/chrome-web-vitals-psi-crux

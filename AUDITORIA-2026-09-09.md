# Varredura técnica ALOGY — 9 de setembro de 2026

Base: main `6da40090b151616f41648e1d06184226ca4604fb`.
Escopo: estrutura estática de todo o repositório publicado, navegação compartilhada,
carrossel da home, formulário de contato e regressões das calculadoras prioritárias.
Sem redesign, alteração de preços, troca de fotos ou mudança de fórmulas.

## Inventário e resultados

| Verificação | Resultado |
| --- | --- |
| Arquivos HTML inspecionados | 392, incluindo o arquivo de verificação Google |
| Páginas indexáveis de conteúdo | 294 |
| Arquivos HTML com noindex | 97; decisões existentes preservadas |
| URLs nos sitemaps ligados ao índice principal | 294 |
| XML de sitemaps lidos | Índice principal e quatro mapas associados |
| Blocos JSON-LD analisados | 452, sem erro de sintaxe JSON |
| Links internos e recursos locais declarados no HTML | Nenhum destino inexistente encontrado |
| Âncoras internas e IDs | Nenhuma âncora inexistente ou ID duplicado encontrado |
| Títulos e descrições das páginas indexáveis | Sem duplicação encontrada |
| Imagens declaradas no HTML | Todas com atributo alt e dimensões declaradas |
| JavaScript publicado, externo e inline | 237 blocos com sintaxe válida |
| Regressões prioritárias de instrumentação | 152 verificações existentes aprovadas |

Os avisos brutos de SEO foram conferidos individualmente: quatro páginas de
redirecionamento possuem canonical apontando ao destino por intenção; o canonical
de `guia/index.html` é corretamente `/guia/`; o arquivo de verificação do Google
não é página de conteúdo e não deve receber título, H1 ou marcação adicional.
Não se alteraram esses itens para artificialmente zerar avisos do auditor.

## Correções implementadas

1. Navegação: comparação do caminho completo evita tratar `/guia/` como `/`.
   O destaque dos menus preserva Blog, Ferramentas e Contato e informa a posição
   atual com `aria-current`.
2. Menu mobile: o botão informa expansão e menu controlado; Escape devolve o
   foco ao botão quando o usuário estava navegando dentro do menu.
3. Carrossel: indicadores são botões nativos, operáveis por teclado; os slides
   invisíveis deixam de receber foco; opção Pausar/Retomar; rotação suspensa
   durante foco, hover, aba oculta ou preferência por movimento reduzido.
4. Contato: validação nativa do e-mail antes de enviar; bloqueio de envio
   concorrente; sucesso apenas mediante resposta positiva; erro de resposta
   preserva os campos e mantém a alternativa existente de WhatsApp.
5. Preenchimento assistido de nome, telefone, e-mail e cidade na home.

## Preservação

- Home / Instrumentação Industrial: imagem técnica de inspeção de transmissor.
- Home / Guia: retrato aprovado de Ronaldo, sem alterar a imagem.
- Página `/guia/`: preservada integralmente.
- Serviços residenciais, industriais, artigos, calculadoras, identidade visual,
  preços, checkout e canais de contato: preservados.

## Testes reproduzíveis

```sh
node --check app.js
node --check instrumentation-report.js
node tests/navigation.cjs
node tests/contact.cjs
git diff --check
```

Os testes de contato são simulações locais e não fazem requisições externas.
Os testes de navegação usam objetos simulados, não um navegador real.
As regressões anteriores A1/A2 foram executadas sobre esta versão, abrangendo
4–20 mA, Pt100, termopares e incerteza de calibração.

## Limites e próximos passos justificados

- Esta varredura não é certificação de todas as fórmulas, procedimentos ou normas.
  As outras ferramentas precisam de validação técnica individual com casos de
  referência; não se modificaram seus cálculos por suposição.
- JSON-LD válido não significa elegibilidade garantida a resultados enriquecidos.
- Não foram medidos Core Web Vitals, conversão, posicionamento ou tráfego real.
  Esses indicadores dependem de dados do Search Console/analytics e de campo.
- Não houve teste visual em navegador, checkout real ou envio real de orçamento.
- A checagem de links cobre referências estáticas internas; não comprova todos
  os links externos nem recursos criados dinamicamente.
- A leitura pública da home retornou uma versão anterior e a leitura de `/guia/`
  não foi concluída pelo serviço de pesquisa. Não se inferiu problema de DNS ou
  de implantação a partir disso; publicação em main e disponibilidade no domínio
  são verificações distintas.

## Referências consultadas

- [Google Search Central: links rastreáveis e texto dos links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).
- [FormSubmit: integração AJAX](https://formsubmit.co/ajax-documentation).

Foram priorizadas correções verificáveis, conforme a orientação de preservar o
site existente e evitar novas rodadas de mudanças cosméticas.

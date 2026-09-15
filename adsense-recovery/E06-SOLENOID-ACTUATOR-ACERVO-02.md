# E06 — revisão do acervo monetizado — página 02

Data: 14/09/2026

## Página

`blog-solenoide-atuador-pneumatico-cv.html`

## Decisão

**PASSOU NO LOTE EDITORIAL E06-02.**

A página foi aprofundada sem alterar sua URL, canonical, condição de indexação, presença no sitemap ou carregador do AdSense. O conteúdo foi mantido no campo de entendimento, seleção por documentação de fabricante e diagnóstico de manutenção. Não foi transformado em dimensionador genérico de SOV, atuador, ESD ou SIS.

Classificação proposta após a revisão: `keep/P1/high`.

## Antes

- decisão: `improve/P0/high`;
- 653 palavras visíveis no inventário;
- 604 palavras no conteúdo principal;
- 1 H1;
- 7 H2;
- 6 H3;
- artigo indexável, canônico, monetizado e presente no sitemap.

O inventário identificava como lacunas principais a ausência de método reproduzível, premissas claras para pressão, volume e tempo, separação entre alimentação e exaustão, fontes primárias e limites de segurança.

## Depois — artefato exato do GitHub Pages

Validação executada sobre o artefato implantado do workflow de Pages:

- arquivo: `blog-solenoide-atuador-pneumatico-cv.html`;
- tamanho: 31.065 bytes;
- 2.428 palavras visíveis pelo parser do artefato;
- 2.380 palavras dentro de `main` pelo mesmo parser;
- 1 H1;
- 14 H2;
- 6 H3;
- canonical correto;
- `BlogPosting` válido;
- `FAQPage` válido;
- carregador direto do AdSense preservado;
- URL presente exatamente uma vez em `sitemap-blog.xml`;
- nenhuma referência `cursos.html`;
- nenhum link Hotmart;
- nenhum rótulo público `Serviços Residenciais` ou `Serviços Industriais`;
- arquivo do artefato byte a byte igual ao candidato validado localmente.

## Conteúdo acrescentado ou aprofundado

1. começa pela função pneumática 3/2, 5/2 e posição de retorno;
2. usa um SKU público ASCO 551 somente como exemplo específico de dados por modelo;
3. explica que Cv/Kv descreve capacidade e não determina sozinho o tempo de curso;
4. separa pressão estática de pressão dinâmica;
5. separa alimentação e exaustão no diagnóstico;
6. trata tubing, conexões, controles de fluxo, silencers e acessórios como parte da cadeia;
7. inclui tabela de observação → hipóteses → dados úteis;
8. apresenta sequência de diagnóstico antes da troca de componente;
9. inclui exemplo fictício de abertura em 1,4 s e retorno em 4,8 s apenas para localizar hipótese de restrição, não como critério de aceitação;
10. diferencia quick exhaust de controle de velocidade;
11. separa possíveis causas no atuador e na válvula de processo;
12. inclui checklist de relatório de manutenção;
13. CTA comercial verdadeiro para avaliação, inspeção, diagnóstico, manutenção, configuração e conferência funcional;
14. FAQ e aviso técnico;
15. relaciona as ferramentas existentes sem modificar fórmulas ou JavaScript.

## Referências públicas verificadas

- Emerson / ASCO — `SCG551A001MS.24/DC`: exemplo público por SKU com função NAMUR 3/2–5/2, Cv/Kv e faixa de pressão;
- Festo — válvulas reguladoras de fluxo unidirecional: referência pública para controle de velocidade por restrição de fluxo em entrada ou exaustão;
- Festo — válvulas e terminais de válvulas: referência pública para válvulas direcionais e análise de fluxo/exaustão.

Os números Cv 0,69, Kv 0,60 e faixa 2–10 bar são apresentados somente como dados do SKU ASCO citado. Eles não são convertidos em recomendação universal.

## Limite de segurança

A página declara explicitamente que **não dimensiona funções instrumentadas de segurança, ESD/SIS ou shutdown crítico**. Posição de falha, arquitetura, certificações, tempo de resposta e testes dessas aplicações devem seguir procedimento e documentação aplicáveis.

Também não recomenda remover silencers, quick exhaust, restrições ou outros componentes de uma cadeia crítica para ganhar velocidade de forma improvisada.

## Limites comerciais preservados

A página declara que:

- a ALOGY pode estruturar escopo de avaliação, inspeção, diagnóstico, manutenção, configuração e conferência funcional;
- ensaio formal de vazão, certificação, tempo garantido, SIL, rastreabilidade ou documentação metrológica não são prometidos automaticamente;
- esses itens somente podem entrar no escopo quando critérios, recursos e parceiros necessários estiverem confirmados.

## Publicação

- commit de conteúdo: `3baa03d6832062d7d0fe24ec4ecae37cf96f0b59`;
- blob do HTML: `f902c6d5a2246bef7193b32c0a14c5936d58fe19`;
- GitHub Pages: run `34915228002`, sucesso;
- artefato: `10376455086`;
- digest do artefato: `sha256:6ed4f6cbaea635c7cff767bf16d30671cd00373ea6504689bed60f19ece07147`;
- SHA-256 do HTML publicado: `7e9cd3113dca2d1c5d54e6721c75b2921d46658fa73635b62b61a0307e9b30e9`.

## Inventário

A linha canônica do inventário deve migrar de `improve/P0/high` para `keep/P1/high`, com as métricas e evidências deste relatório. O CSV canônico permanece grande e não deve ser substituído parcialmente. Registrar o delta separado e consolidá-lo em checkpoint seguro junto com o delta E06-01.

## Próxima ação

1. registrar o delta do inventário E06-02;
2. consolidar E06-01 e E06-02 no CSV canônico quando houver método seguro de substituição integral;
3. selecionar a próxima página `improve/P0/high` do acervo monetizado pela proximidade com instrumentação e pelo potencial de aprofundamento verificável;
4. manter páginas `manual-review/P0` inalteradas sem revisão proporcional ao risco;
5. não enviar solicitação de nova análise ao AdSense nesta etapa.

Nenhuma solicitação de nova análise foi enviada ao AdSense.

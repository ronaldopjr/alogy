# ALOGY — fila operacional atual

> Versão 2026-09-16.38. Esta é a única fila executável. O histórico detalhado permanece no MD de continuidade e nos relatórios `adsense-recovery`.

## Regras permanentes

### Superfície editorial ativa
- Revisão automática de artigo exige link/card ativo no `blog.html` atual.
- Revisão automática de ferramenta exige link/card ativo no `ferramentas.html` atual.
- Navegação institucional vigente também pode definir uma página institucional ativa.
- Arquivo existente, HTTP 200, `index,follow`, sitemap, mapa de capas em JavaScript, link residual ou classificação histórica isoladamente **não** tornam uma URL elegível para revisão automática.
- `blog-ia-na-industria.html`, `ferramentas-instrumentacao-industrial.html`, `ferramentas-calibracao-instrumentacao.html` e `ferramentas-processo-vazao-nivel.html` permanecem fora da fila automática enquanto não voltarem à superfície ativa ou o proprietário não autorizar explicitamente.

### Verdade comercial e segurança
- Motivo reportado pelo proprietário: **conteúdo de baixo valor**.
- Não solicitar nova análise do AdSense automaticamente.
- Não fazer `noindex`/pruning em massa.
- Não inventar equipe, clientes, cases, depoimentos, credenciais, registro profissional, equipamentos, laboratório, acreditação, rastreabilidade, parceiros, resultados ou capacidade.
- A ALOGY ainda não possui padrão calibrado confirmado para sustentar emissão própria de laudo/certificado de calibração.
- Oferta segura: avaliação, inspeção, manutenção, configuração e conferência funcional; calibração, ensaio, rastreabilidade ou documentação específica somente quando recursos e parceiros forem confirmados na proposta.
- Não alterar fórmulas ou JavaScript técnico sem defeito reproduzido e validação proporcional.
- Páginas `manual-review/P0` não recebem edição técnica automática.
- Nunca usar force push.

### Guia
- O link global **Guia** pode permanecer no menu.
- Não inserir CTA promocional do Guia, Hotmart ou `cursos.html` no corpo de artigos/ferramentas.

## E02–E06
- E02: concluído e validado.
- E03: oferta comercial inicial corrigida e validada.
- E04: inventário/higiene concluído para trabalho editorial.
- E05: piloto concluído.
- E06: **CONCLUÍDO para o trabalho automatizável seguro na superfície editorial ativa**.
- O lote E06-19 em `ferramentas-processo-vazao-nivel.html` foi revertido por `dd4cac5b3f01a360770c788bf3a1e50117be9512`; nenhum delta 19 foi adotado.
- Os deltas E06-01 a E06-18 continuam históricos/incrementais até consolidação segura do inventário canônico.
- `blog-inspecao-instrumentos-area-classificada.html` e `blog-ot-cybersecurity-instrumentacao.html` permanecem sem edição automática por exigirem revisão especializada proporcional ao risco.

## E07 — autoria, evidências e transparência

**Estado:** CONCLUÍDO NO LIMITE AUTOMATIZÁVEL SEGURO; pendências pessoais/cases aguardam proprietário.

### Publicado
- `sobre.html` recebeu seção de responsabilidade editorial organizacional, método para fontes/premissas, exemplos conferíveis, limites das ferramentas, correções e separação entre conteúdo técnico e escopo comercial.
- Commit: `dd49ac0e35709adbaa31d06dfeda5425124143b9`.
- Pages: `35099511862` — `success`.
- Artefato: `10447711964`; digest `sha256:0d184680f166ebe00a85c8bdbf47ab873c59812a6c813bc519bcfa653205492c`.
- A leitura textual pública ainda apresentou cópia anterior em cache; não declarar equivalência byte a byte do domínio para este lote sem nova evidência.

### AGUARDA PROPRIETÁRIO em E07
- nome e identidade do responsável técnico/editorial, se desejado;
- formação, CREA/registro, experiência e demais credenciais publicáveis;
- confirmação de data de fundação/uso de “Desde 2012” quando esse dado for usado como prova de experiência;
- comprovação/autorização das imagens, escopos e alegações de resultado dos dois projetos em `cases.html`;
- não atribuir revisão pessoal retroativa a páginas sem confirmação real.

## E08 — celular, acessibilidade e desempenho

**PRÓXIMA AÇÃO EXECUTÁVEL**
1. Trabalhar somente na superfície ativa: home, `industrial.html`, `blog.html`, `ferramentas.html`, `sobre.html`, `cases.html`, `/guia/`, um artigo ativo e uma ferramenta ativa representativos.
2. Reproduzir problemas antes de editar; registrar largura/overflow, navegação por teclado, menu móvel, tabelas/formulários e recursos pesados.
3. Preservar fórmulas e JavaScript técnico já validados.
4. `app.js` é grande e compartilhado: medir/identificar impacto antes de qualquer divisão ou refatoração; não reestruturar por suposição.
5. Corrigir somente bloqueios materiais e validar amostra desktop/mobile.
6. Não executar ainda a padronização global de imagens desktop/mobile; essa frente é **E10-I1**, perto do encerramento.

## E09–E10
- E09: verificar o que é possível sem autenticação em anúncios/rastreamento/privacidade; conta AdSense, GSC, Analytics e CMP autenticados dependem de autorização/dados reais.
- E10: revisão final de prontidão e E10-I1 para mesma imagem/mesma cena desktop-mobile com adaptação responsiva.
- E11 (solicitar nova análise) continua proibida sem autorização explícita.

# F5 — Regras de foco temático e desativação reversível

## Foco principal

A ALOGY passa a concentrar conteúdo em automação industrial, instrumentação, calibração/metrologia e elétrica industrial. Conteúdo de processo só permanece quando apoia diretamente medição, controle, automação ou aplicação elétrica. A ALOGY é importadora e revendedora, não fabricante.

## Seleção de lote

- No máximo cinco páginas por lote.
- A página deve estar `index,follow`, constar no sitemap e ser claramente externa ao foco principal.
- Priorizar ferramentas mecânicas, térmicas, residenciais ou processuais sem conexão direta com medição, controle, automação ou elétrica.
- Não selecionar página `manual-review`, sensível, normativa, de segurança, autoria, credenciais, cases ou dados de cliente.
- Não repetir página já desativada.

## Primeira etapa: reversível

Para cada página do lote:

1. Alterar somente robots para `noindex,nofollow,noarchive`.
2. Retirar a URL do sitemap correspondente.
3. Atualizar o inventário para `noindex-review`, fora do sitemap e com razão objetiva.
4. Preservar arquivo, URL, canonical, H1, conteúdo, fórmulas, exemplos, JavaScript e links existentes.
5. Não alterar ou acrescentar AdSense; páginas que já não carregam anúncios devem continuar sem anúncios.

## Etapas posteriores

Remoção de cards, redirect, exclusão do arquivo, resposta 404/410 ou solicitação no Search Console exigem lote separado, dados de tráfego e autorização específica. Não redirecionar para página apenas parcialmente relacionada.

## Publicação

Validar diff, JSON/CSV/XML, contagem de H1, canonical, scripts e fórmulas preservados. Publicar somente por pull request limpa, sem força e com o SHA validado.

Nunca usar PDFs, desenhos ou documentos confidenciais.

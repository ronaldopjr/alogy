# Bloqueios e decisões humanas

## Atualização de 09/09/2026 — avaliação AdSense ainda pendente

A captura recente confirma reprovação por conteúdo de baixo valor. Os dois lotes de ferramentas com gráficos, exemplos e correções não encerram a revisão editorial do site. Há 18 páginas com uma mesma frase genérica de interpretação a avaliar. Consulte `ADSENSE-2026-09-09-TRAFFIC-TOOLS.md` para evidências, testes e prioridades. Não declarar o site pronto nem solicitar nova revisão automaticamente. Os dados de tráfego enviados também exigem reavaliar qualquer próxima poda de URLs.

## Decisões técnicas adiadas sem bloquear a auditoria

- O site está hospedado por GitHub Pages em modo legado, a partir de `main` e da raiz do repositório. Redirecionamentos HTTP 301 por caminho não podem ser configurados nessa camada estática.
- Manter `google00ce371ffda114a1.html` até o usuário confirmar que existe outro método permanente de verificação do Search Console. O arquivo não está no sitemap nem possui AdSense.
- Manter os redirects HTML de `calculadora-incerteza-calibracao.html` e `calculadora-lrv-urv-span.html`. Migrar para 301 somente se for adicionada uma camada de CDN/proxy ou outra hospedagem com regras de resposta HTTP.
- Manter `/index.html` com canonical para `/`. No GitHub Pages, o mesmo `index.html` serve a raiz; transformar o arquivo em redirect também redirecionaria a própria home.

## Decisões que serão necessárias antes da publicação

- Confirmar nome, formação, experiência e credenciais que podem ser exibidos como autoria ou revisão técnica.
- Confirmar quais casos e experiências podem ser publicados de forma anonimizada.
- Se houver futura migração de hospedagem ou uso de CDN/proxy, confirmar o mecanismo disponível para redirecionamentos HTTP 301/404/410.
- A publicação automática só pode incluir lotes `improve` presentes na fila F4, aprovados pelos gates e sem conflito; qualquer outro tipo de página continua bloqueado.
- O pedido de revisão ao AdSense continua exigindo autorização separada.

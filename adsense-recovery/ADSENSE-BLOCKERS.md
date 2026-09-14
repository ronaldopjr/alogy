# Bloqueios, dependências e decisões humanas

## Estado do AdSense

A reprovação por “conteúdo de baixo valor” foi informada pelo proprietário, mas o painel autenticado não foi acessado nesta etapa. O site ainda não está pronto para solicitar nova análise e nenhuma submissão deve ocorrer automaticamente.

## Não bloqueia E02

- Falta de acesso autenticado ao AdSense, Search Console ou Analytics.
- Falta de confirmação da bancada e da autoria.
- A branch histórica `agent/adsense-recovery` estar desatualizada.

A correção da busca de ferramentas pode avançar de forma independente.

## Dependências do proprietário

- Captura atual do AdSense com domínio, motivo, data e disponibilidade de nova análise.
- Exportação do Search Console dos últimos 90 dias por páginas e consultas, desejável para priorização.
- Equipamentos de bancada, funções de medir/gerar/simular, faixas, acessórios e documentos metrológicos.
- Tipos/modelos/portes atendidos, meios de teste, local de recebimento, profissionais disponíveis e parceiros.
- Nome público, formação, experiência, credenciais e evidências que podem ser publicadas.
- Permissão para usar fotos, projetos, clientes ou resultados específicos.

## Decisões que exigem cuidado específico

- Mudança substancial de fórmula, limiar, norma, segurança ou JavaScript técnico.
- Alegação de calibração rastreável, acreditação, registro profissional, equipe, prazo garantido ou cobertura 24 h.
- Consolidação, redirecionamento, exclusão definitiva ou nova desindexação de URLs.
- Solicitação de nova análise ao AdSense.

## Decisões técnicas preservadas

- O site usa GitHub Pages a partir de `main`; não foi encontrado workflow em `.github/workflows` na árvore verificada.
- A ausência de workflow no repositório não comprova a inexistência de automação externa.
- Manter `google00ce371ffda114a1.html` até confirmação de outro método permanente de verificação do Search Console.
- Manter os redirects HTML históricos quando não houver camada capaz de emitir 301 por caminho.
- Manter `/index.html` com canonical para `/`; o mesmo arquivo atende a home no GitHub Pages.
- Não usar `force` nem sobrescrever alteração concorrente.
- Lotes seguros e validados podem ser publicados em `main` dentro da autorização registrada.

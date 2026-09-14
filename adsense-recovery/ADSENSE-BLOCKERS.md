# Bloqueios, dependências e decisões humanas

## Estado do AdSense

A reprovação por “conteúdo de baixo valor” foi informada pelo proprietário, mas o painel autenticado não foi acessado nesta etapa. O site ainda não está pronto para solicitar nova análise e nenhuma submissão deve ocorrer automaticamente.

## Pendências que não bloqueiam correções conservadoras

- Falta de acesso autenticado ao AdSense, Search Console ou Analytics.
- Falta de confirmação completa da bancada, modelos atendidos e autoria.
- Falta da conferência interativa de E02 no domínio no ambiente atual.
- A branch histórica `agent/adsense-recovery` estar desatualizada.

Essas pendências não impedem retirar promessas não sustentadas e publicar uma oferta geral de avaliação sob consulta. Elas impedem acrescentar capacidades, prazos, rastreabilidade, acreditação, equipe ou documentação específica não confirmados.

## Dependências do proprietário para completar E03/C01

- Equipamentos de bancada e funções reais de medir, gerar ou simular.
- Faixas, acessórios, condição e documentos metrológicos dos equipamentos.
- Tipos, fabricantes, modelos e portes de válvulas, atuadores, posicionadores e instrumentos atendidos.
- Alimentação pneumática/elétrica, interfaces, suportes e meios de teste disponíveis.
- Local e condições para recebimento de instrumentos.
- Profissionais disponíveis, experiência publicável e eventuais parceiros de calibração ou ensaio.
- Prazo e região de atendimento que podem ser assumidos comercialmente.

## Outras dependências do projeto

- Captura atual do AdSense com domínio, motivo, data e disponibilidade de nova análise.
- Exportação do Search Console dos últimos 90 dias por páginas e consultas, desejável para priorização.
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

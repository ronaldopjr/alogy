# ALOGY — regra de escopo publicado para E06

> Vigente a partir de 2026-09-16. Esta regra corrige a seleção do acervo editorial após confirmação do proprietário de que páginas removidas das centrais atuais não devem receber revisão automática.

## Regra obrigatória

Uma página só pode entrar automaticamente em E06 se estiver **publicada/exposta na estrutura editorial principal atual**.

### Artigos

Para artigos, a URL precisa aparecer como **link/card ativo no `blog.html` atual**.

Não basta:
- existir como arquivo HTML no repositório;
- responder HTTP 200;
- conter `index,follow`;
- constar no sitemap;
- aparecer apenas em objeto JavaScript de capas/imagens;
- receber link residual de outra página;
- ter sido classificada como `improve/P0/high` em inventário anterior.

### Ferramentas

Para ferramentas, a URL precisa aparecer como **link/card ativo no `ferramentas.html` atual**.

Sub-hubs, rotas antigas e páginas acessíveis somente por URL, sitemap ou links residuais ficam fora da revisão automática até confirmação explícita do proprietário.

## Precedência para seleção

Para decidir se uma página está realmente publicada, a presença nas centrais atuais `blog.html` e `ferramentas.html` prevalece sobre o inventário histórico e sobre o sitemap.

Antes de iniciar cada lote editorial:
1. confirmar a candidata na central correspondente;
2. confirmar que não está em `manual-review/P0` nem em escopo especializado bloqueado;
3. descontar os lotes já concluídos;
4. só então editar.

## Correções de histórico

- `blog-ia-na-industria.html` não aparece como card/link ativo em `blog.html`; o proprietário confirmou que não deve ser tratado como artigo publicado. O trabalho E06-16 permanece apenas como histórico e **não conta como evidência de melhoria do acervo editorial publicado**.
- `ferramentas-instrumentacao-industrial.html` e `ferramentas-calibracao-instrumentacao.html` não aparecem como cards/links ativos na central `ferramentas.html`; não selecionar novamente nem usar como base para continuar revisão de hubs ocultos.
- O commit `26c92561da21ef8b97c167d80be69f77d41d4db5` alterou `ferramentas-processo-vazao-nivel.html`, que também não está exposta na central atual `ferramentas.html`; este lote concorrente deve ser tratado como **fora do escopo ativo**, sem continuidade automática.

## Situação do E06 após aplicação desta regra

As páginas restantes visíveis no `blog.html` que exigem aprofundamento automático seguro foram esgotadas ou já concluídas. As pendências visíveis restantes de maior risco estão classificadas para revisão manual/especializada (por exemplo: pneumática com função de segurança, SIL/LOPA, OT cybersecurity, área classificada e NR-10).

Portanto, não inventar novo lote E06 usando páginas ocultas. Avançar para a próxima etapa segura definida no MD/controles, preservando as páginas `manual-review` sem edição automática.

## SEO e indexação

Esta regra trata **seleção editorial automática**, não autoriza remoção em massa, `noindex` em massa ou poda. Divergências entre central editorial, sitemap e `robots` devem ser registradas e tratadas separadamente, de forma deliberada e proporcional.

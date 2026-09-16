# ALOGY — fila operacional atual

> Versão 2026-09-16.45. Esta é a única fila executável. O histórico detalhado permanece no MD de continuidade e nos relatórios `adsense-recovery`.

## Regras permanentes

- Revisão automática de artigo exige link/card ativo no `blog.html`; ferramenta exige link/card ativo no `ferramentas.html`; navegação institucional vigente pode definir rota institucional ativa.
- Arquivo existente, HTTP 200, `index,follow`, sitemap, link residual ou inventário histórico isoladamente não tornam uma URL elegível.
- Não solicitar nova análise do AdSense automaticamente; não fazer `noindex`/pruning em massa; nunca force-push.
- Não inventar equipe, clientes, cases, credenciais, registro, equipamentos, laboratório, acreditação, rastreabilidade, parceiros, resultados ou capacidade.
- Oferta segura: avaliação, inspeção, manutenção, configuração e conferência funcional; calibração/ensaio/rastreabilidade/documentação específica somente quando recursos e parceiros forem confirmados na proposta.
- Não alterar fórmulas ou JavaScript técnico sem defeito reproduzido e validação proporcional.
- Páginas `manual-review/P0` não recebem edição técnica automática.
- O link global **Guia** pode permanecer; não inserir CTA promocional do Guia, Hotmart ou `cursos.html` no corpo de artigos/ferramentas.

## E02–E07

- E02 busca/navegação: concluído.
- E03 verdade comercial inicial: concluído.
- E04 inventário/higiene: concluído para trabalho editorial; inventário canônico inicial `da2f61932a21c00741f418870601aafcb42deba6`.
- E05 piloto: concluído.
- E06: concluído para o trabalho automatizável seguro na superfície ativa; E06-19 revertido por `dd4cac5b3f01a360770c788bf3a1e50117be9512`.
- E07: transparência organizacional segura concluída; autoria/credenciais pessoais e evidências de `cases.html` aguardam fatos reais.
- `blog-inspecao-instrumentos-area-classificada.html` e `blog-ot-cybersecurity-instrumentacao.html` continuam `manual-review/P0`.

## E08 — celular, acessibilidade e desempenho

**Estado:** CONCLUÍDO; VIEWPORT EXATA DO ARTEFATO PUBLICADO VALIDADA EM 360/390 PX.

- `sobre.html`: `29671d4dc825c8c406d5974b15d3300f2f96d7cc`; Pages `35100866427` success.
- `index.html`: `b2865bbf569a42b811d16abf64fb5eac8722424d`; Pages `35104117692` success.
- `ferramentas.html`: `6576c0e3ddb2a6e7935fb184a34a608ba86e43ab`; Pages `35111374317` success.
- `blog.html`: `a8f8538e648b5378e30a44bd26fcb9befeff6e35`; Pages `35118075529` success.
- Build atual: Pages `35124555723` success; artefato `10458756254`; digest `sha256:2fdd2d916e3b46a38931a7074ab53245b73f50290b92d6a984b716480df94c02`.
- QA exata em 360 × 844 e 390 × 844 para Home, Blog, Ferramentas e Serviços: zero overflow horizontal do documento e zero overflow do menu mobile aberto.
- Blog: 38/38 ações com `aria-label` contextual único.
- Ferramentas: 30/30 ações com `aria-label` único; rolagem horizontal da faixa de categorias é interna e intencional, sem ampliar o documento.
- Relatório: `E10-MOBILE-360-390-ARTIFACT-QA.md`.
- O runtime ainda não permite navegação Chromium/curl direta ao domínio, mas isso deixou de bloquear a validação geométrica exata porque o artefato do Pages publicado com `success` foi renderizado diretamente.

## E09 — anúncios, rastreadores e privacidade

**Estado:** PARTE SEGURA/NÃO AUTENTICADA CONCLUÍDA.

- `ads.txt`: `google.com, pub-5586837114309500, DIRECT, f08c47fec0942fa0`.
- `robots.txt`: `Allow: /` e sitemap `https://www.alogy.com.br/sitemap.xml`.
- Publisher coerente; política de privacidade conferida; unidades manuais em `app.js` desativadas.
- CMP ativa não foi comprovada pelo código do site e exige conferência do painel autenticado.

## E10-I1 — imagens desktop/mobile

**Estado:** CONCLUÍDO E PUBLICADO.

- Commit `de07a283b54da6d04332475e562bb0d06cc1f4c9`.
- Pages `35119165803`: success; artefato `10456032386`.
- Artefato final: zero HTMLs com troca de cena por `<source media=...>` ou `_mobile`.

## U35 — consolidação dos 18 deltas E06

**Estado:** CONCLUÍDA POR VALIDAÇÃO INTEGRAL; NENHUMA ALTERAÇÃO DE DADOS ERA NECESSÁRIA.

- Workflow temporário run `35124110500`: `success`.
- Relatório: `E06-INVENTORY-CONSOLIDATION.md`.
- 18/18 deltas validados.
- 272 linhas físicas e 271 paths únicos preservados.
- SHA-256 antes/depois idêntico: `12e9e0d3e6729a7fd36c0190fad88862ea3500b209046ae67362a43ce0b883fa`.
- Resultado: os 18 deltas já estavam integralmente refletidos no inventário canônico.
- Commit de validação do bot: `c8fb1be75522af7e509494fc483fa4291f9c6e3b`.
- Workflow temporário removido em `6307d0307da65580096d5fd35cbcc260e6af9a8b`.

## E10 — checkpoint final

**Estado:** `AGUARDA PROPRIETÁRIO`.

O escopo automatizável seguro E02–E10 está concluído. A checagem adicional de viewport 360/390 do artefato publicado também passou e não exigiu alteração do site. Não existe próxima ação independente que a automação possa executar com segurança sem novos fatos, revisão especializada ou acesso autenticado.

Relatórios finais:
- `E10-FINAL-READINESS-CHECKLIST.md`;
- `E10-MOBILE-360-390-ARTIFACT-QA.md`.

### Ações que dependem do proprietário

1. Conferir no painel AdSense o estado atual da reprovação, verificação do site, disponibilidade real de nova análise e CMP/Privacidade e mensagens.
2. Fornecer/autorizar identidade, formação, registro e experiência somente se desejar autoria técnica pessoal publicável.
3. Confirmar “Desde 2012” antes de usar a data como evidência de experiência.
4. Fornecer evidências/autorização dos projetos em `cases.html` antes de ampliar alegações.
5. Confirmar C01-C03: capacidade real de bancada, meios de teste, documentação, modelos/portes, profissionais e parceiros.
6. Obter revisão especializada das duas páginas `manual-review/P0` antes de qualquer edição técnica nelas.

## Próxima ação executável

**Nenhuma automaticamente.** E11 só pode começar após autorização explícita do proprietário e conferência do estado real do AdSense. E12 depende de resposta real do Google.

A automação contínua deve permanecer pausada enquanto o estado for `AGUARDA PROPRIETÁRIO`.

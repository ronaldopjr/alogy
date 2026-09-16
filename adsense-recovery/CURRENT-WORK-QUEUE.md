# ALOGY — fila operacional atual

> Versão 2026-09-16.43. Esta é a única fila executável. O histórico detalhado permanece no MD de continuidade e nos relatórios `adsense-recovery`.

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
- E06: concluído para o trabalho automatizável seguro na superfície ativa. O lote E06-19 foi revertido por `dd4cac5b3f01a360770c788bf3a1e50117be9512` e nenhum delta 19 foi adotado.
- E07: transparência organizacional segura concluída em `sobre.html`; autoria/credenciais pessoais e evidências de `cases.html` aguardam dados reais.
- `blog-inspecao-instrumentos-area-classificada.html` e `blog-ot-cybersecurity-instrumentacao.html` continuam `manual-review/P0` e não recebem edição automática.

## E08 — celular, acessibilidade e desempenho

**Estado:** CONCLUÍDO NO LIMITE AUTOMATIZÁVEL DO AMBIENTE; teste visual live exato 360/390 px permanece registrado como limitação de ambiente, não como sucesso.

- E08-01 `sobre.html`: nomes acessíveis de navegação/redes sociais; commit `29671d4dc825c8c406d5974b15d3300f2f96d7cc`; Pages `35100866427` success.
- E08-02 `index.html`: dois `main` → um `main`; commit `b2865bbf569a42b811d16abf64fb5eac8722424d`; Pages `35104117692` success.
- E08-03 `ferramentas.html`: 30 ações com nomes contextuais únicos; `calculadora-4-20ma.html` auditada sem edição; commit `6576c0e3ddb2a6e7935fb184a34a608ba86e43ab`; Pages `35111374317` success.
- E08-04 `blog.html`: 38 links “Ler artigo” recebem `aria-label` contextual; `industrial.html` auditada sem edição. Commit `a8f8538e648b5378e30a44bd26fcb9befeff6e35`; Pages `35118075529` success.
- Limite: Chromium headless e `curl` não resolveram `www.alogy.com.br`; nenhuma equivalência visual live exata de 360/390 px foi alegada.

## E09 — anúncios, rastreadores e privacidade

**Estado:** PARTE SEGURA/NÃO AUTENTICADA CONFERIDA; conta/CMP aguardam proprietário.

- `ads.txt`: `google.com, pub-5586837114309500, DIRECT, f08c47fec0942fa0`.
- `robots.txt`: `Allow: /` e sitemap `https://www.alogy.com.br/sitemap.xml`.
- Publisher coerente entre `ads.txt`, meta `google-adsense-account` da home e cliente observado nos carregadores AdSense.
- Política de Privacidade conferida; `app.js` mantém unidades manuais desativadas.
- A referência “Google CMP / Privacidade e mensagens” é dependência do painel, não prova de CMP ativa.
- **AGUARDA PROPRIETÁRIO:** estado atual da conta, verificação do site, disponibilidade real de reanálise e CMP/Privacidade e mensagens.

## E10-I1 — imagens desktop/mobile

**Estado:** CONCLUÍDO E PUBLICADO.

- Commit `de07a283b54da6d04332475e562bb0d06cc1f4c9` removeu os dois substitutos mobile de cena da home.
- Pages `35119165803`: success; artefato `10456032386`; digest `sha256:ca58f549903678f2db5db8903d7db75bca67dd45219a509dc5548871e3f295fd`.
- Artefato final: zero HTMLs com troca de imagem por `<source media=...>` ou referência `_mobile`.
- Relatório: `E10-I1-RESPONSIVE-ASSET-CONSISTENCY.md`.

## E10 — checklist final de prontidão

**Estado atual:** **NÃO PRONTO PARA SOLICITAR NOVA ANÁLISE**.

- Relatório publicado em `E10-FINAL-READINESS-CHECKLIST.md`, commit `1029e884bbd09b0fe4c6a14f64b705df9a3a2e2b`.
- Nenhuma nova análise do AdSense foi solicitada.
- O inventário canônico `ADSENSE-INVENTORY.csv` não foi modificado nesta tentativa.

### U35 — consolidação integral dos 18 deltas E06

**Estado:** BLOQUEADO TECNICAMENTE ANTES DE QUALQUER ESCRITA.

- Os 18 deltas `E06-INVENTORY-DELTA-01.csv` a `18.csv` existem.
- O inventário canônico grande continua como fonte a preservar.
- O runtime não resolveu GitHub/raw GitHub por DNS.
- O conector GitHub exibiu o CSV canônico de aproximadamente 164 KB truncado; sem leitura integral não é seguro reconstruir ou substituir o arquivo.
- Portanto, nenhum merge parcial foi publicado e `ADSENSE-INVENTORY.csv` permaneceu intacto.

## Próxima ação executável

1. Repetir U35 apenas numa execução em que o `ADSENSE-INVENTORY.csv` canônico completo possa ser lido integralmente.
2. Antes da escrita, validar cabeçalho compatível, uma correspondência canônica única por `path` para cada um dos 18 deltas e contagem/ordem preservadas, salvo as linhas substituídas.
3. Se qualquer pré-condição falhar, abortar antes de escrever; nunca fabricar inventário parcial.
4. Após merge integral bem-sucedido, reconciliar o checklist E10.
5. Não editar as duas páginas `manual-review/P0`, não inventar C01-C03 e não solicitar nova análise do AdSense.

## Dependências não automatizáveis

- Conta AdSense/CMP autenticada, verificação do site e estado real da reanálise.
- Autoria pessoal/credenciais apenas quando confirmadas e autorizadas.
- Confirmação de “Desde 2012” se usada como evidência de experiência.
- Evidências/autorização dos projetos em `cases.html` antes de ampliar alegações.
- C01-C03: capacidade real de bancada, meios de teste, profissionais/parceiros, documentação e fluxo comercial.
- Revisão especializada das duas páginas `manual-review/P0`.

E11 continua proibida sem autorização explícita e E12 depende de resposta real do Google. A automação permanece ativa enquanto U35 continuar sendo trabalho seguro possível em uma execução futura.

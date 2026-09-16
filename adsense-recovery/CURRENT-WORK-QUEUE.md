# ALOGY — fila operacional atual

> Versão 2026-09-16.42. Esta é a única fila executável. O histórico detalhado permanece no MD de continuidade e nos relatórios `adsense-recovery`.

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
- E08-03 `ferramentas.html`: 30 ações com nomes contextuais únicos; `calculadora-4-20ma.html` auditada sem edição e exemplo 12 mA/0–10 bar conferido; commit `6576c0e3ddb2a6e7935fb184a34a608ba86e43ab`; Pages `35111374317` success.
- E08-04 `blog.html`: 38 links “Ler artigo” passam a receber `aria-label` contextual a partir do H3; texto visual e destinos preservados. `industrial.html` auditada sem defeito equivalente e sem edição. Commit `a8f8538e648b5378e30a44bd26fcb9befeff6e35`; Pages `35118075529` success; artefato `10456610676`, digest `sha256:93811e9f58334b9dc710f4cec3a499f6a46851e8b9c1679bee18131a39a6f9d1`.
- Limite: Chromium headless e `curl` do ambiente não resolveram `www.alogy.com.br`; portanto nenhuma equivalência visual live exata de 360/390 px foi alegada.

## E09 — anúncios, rastreadores e privacidade

**Estado:** PARTE SEGURA/NÃO AUTENTICADA CONFERIDA; conta/CMP aguardam proprietário.

- `ads.txt` no source e no artefato: `google.com, pub-5586837114309500, DIRECT, f08c47fec0942fa0`.
- `robots.txt`: `Allow: /` e sitemap `https://www.alogy.com.br/sitemap.xml`.
- Publisher coerente entre `ads.txt`, meta `google-adsense-account` da home e cliente observado nos carregadores AdSense.
- Política de Privacidade descreve FormSubmit, cookies/publicidade, Google e consentimento; página legal não contém carregador direto do AdSense no source auditado.
- `app.js`: unidades manuais continuam desativadas e a indicação “Google CMP / Privacidade e mensagens” é somente dependência do painel; não comprova CMP ativa.
- **AGUARDA PROPRIETÁRIO:** conferir no AdSense o estado atual da reprovação, disponibilidade real de reanálise, verificação do site e CMP/Privacidade e mensagens. Não alterar conta automaticamente.

## E10-I1 — imagens desktop/mobile

**Estado:** CONCLUÍDO E PUBLICADO.

- Varredura global do artefato anterior encontrou apenas `index.html` trocando imagem por breakpoint, em duas tags `<source>`.
- Commit `de07a283b54da6d04332475e562bb0d06cc1f4c9` removeu `banner1_mobile.webp` e `banner3_mobile.webp` como substitutos de cena; os assets desktop passaram a atender todos os breakpoints.
- Pages `35119165803`: success; artefato `10456032386`; digest `sha256:ca58f549903678f2db5db8903d7db75bca67dd45219a509dc5548871e3f295fd`.
- Artefato final: zero HTMLs com troca de imagem por `<source media=...>` ou referência `_mobile`.
- Relatório: `E10-I1-RESPONSIVE-ASSET-CONSISTENCY.md`.

## Próxima ação executável

1. **Consolidar integralmente** `E06-INVENTORY-DELTA-01.csv` a `E06-INVENTORY-DELTA-18.csv` no `ADSENSE-INVENTORY.csv` canônico.
2. O merge só pode ser publicado se o CSV completo estiver disponível, o cabeçalho for preservado, cada `path` dos deltas corresponder de forma única a uma linha canônica e a contagem final permanecer consistente. Não substituir o inventário com conteúdo parcial.
3. Depois do merge, preencher/reconciliar o checklist final E10 e decidir “ainda não pronto” ou “pronto para solicitar” com evidências.
4. Não editar as duas páginas `manual-review/P0`, não inventar dados C01-C03 e não solicitar nova análise do AdSense.
5. Se o merge integral não puder ser executado com segurança no ambiente, registrar o bloqueio técnico precisamente e avançar somente em tarefas independentes seguras; não fabricar um inventário novo incompleto.

## Dependências não automatizáveis já registradas

- Conta AdSense/CMP autenticada e estado real da reanálise.
- Autoria pessoal/credenciais apenas quando confirmadas e autorizadas.
- Evidências/autorização dos dois projetos em `cases.html` antes de ampliar alegações.
- C01-C03: capacidade real de bancada, meios de teste, profissionais/parceiros, documentação e fluxo comercial.
- Revisão especializada das duas páginas `manual-review/P0`.

E11 continua proibida sem autorização explícita e E12 depende de resposta real do Google.

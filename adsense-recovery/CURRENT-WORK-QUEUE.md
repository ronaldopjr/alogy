# ALOGY — fila operacional atual

> Versão 2026-09-15.36. Esta é a única fila executável. Filas anteriores e relatórios por lote permanecem históricos.

## Regras permanentes

### Navegação comercial
- Usar uma única entrada pública **Serviços** apontando para `industrial.html`.
- Não restaurar `Serviços Industriais` e `Serviços Residenciais` como abas separadas.
- `residencial.html` permanece rota legada `noindex,follow`, fora do sitemap e apontando para `industrial.html`.

### Guia x blog/ferramentas
- O link global **Guia** pode permanecer no menu.
- Não inserir CTA promocional do Guia, Hotmart ou `cursos.html` no corpo de artigos e ferramentas.
- Migrar referências legadas apenas quando a página entrar em lote seguro; não fazer substituição cega em massa.

### Verdade comercial e segurança
- Motivo reportado pelo proprietário: **conteúdo de baixo valor**.
- Não solicitar nova análise do AdSense automaticamente.
- Não fazer `noindex` ou pruning em massa.
- Não inventar equipe, cases, clientes, depoimentos, certificações, equipamentos, laboratório, rastreabilidade, prazo ou capacidade técnica.
- A ALOGY ainda não possui padrão calibrado confirmado para sustentar emissão própria de laudo/certificado de calibração.
- Oferta segura: avaliação, inspeção, manutenção, configuração e conferência funcional; calibração, ensaio, rastreabilidade ou documentação específica somente quando recursos e parceiros estiverem confirmados na proposta.
- Não alterar fórmula ou JavaScript técnico sem defeito reproduzido e validação proporcional.
- Não editar automaticamente páginas `manual-review/P0`.
- Revisões editoriais extensas: uma página por lote.
- Nunca usar force push.

## E02–E05
- E02 busca/ferramentas: concluído e validado.
- E03 oferta comercial verdadeira: concluído no escopo inicial.
- E04 inventário/higiene: concluído para trabalho editorial; inventário canônico inicial `da2f61932a21c00741f418870601aafcb42deba6`.
- E05 piloto editorial: concluído com `blog-calibracao-valvula-controle.html` e `blog-calibracao-instrumentos-industriais.html` em `keep/P1/high`.

## E06 — revisão do acervo monetizado

**Estado:** EM EXECUÇÃO — DEZOITO PÁGINAS REVISADAS, PUBLICADAS E VALIDADAS.

| # | Página | Decisão | Commit de conteúdo |
|---|---|---|---|
| 01 | `blog-ar-instrumentos-qualidade-ponto-orvalho.html` | `keep/P1/high` | `4c4a51b7fd881a5252995dd00603ee04053daeb8` |
| 02 | `blog-solenoide-atuador-pneumatico-cv.html` | `keep/P1/high` | `3baa03d6832062d7d0fe24ec4ecae37cf96f0b59` |
| 03 | `blog-instrumentacao-industrial.html` | `keep/P1/high` | `794c5bd65cd80ce34b30f0ef83c1b422c5584ab5` |
| 04 | `blog-criticidade-instrumentos.html` | `keep/P1/high` | `95ea333e471f7e3d2518363794ca0215585ef6d8` |
| 05 | `blog-erro-total-malha-instrumentacao.html` | `keep/P1/high` | `41421244f4e6cce1e11d81fff25d4c79aaf93f2e` |
| 06 | `blog-fat-sat-instrumentacao.html` | `keep/P1/high` | `c9dc10756d8f5f42ef0388131caccbdee1e4f68c` |
| 07 | `blog-manutencao-preditiva-instrumentacao-sensores.html` | `keep/P1/high` | `3a9c7bb57ec195437bf93eba36fbd8dca3b2af7d` |
| 08 | `blog-massa-tanque-nivel.html` | `keep/P1/high` | `76e0832196a69242387dc35bef6c4051e08f02c0` |
| 09 | `blog-pressao-hidrostatica-densidade.html` | `keep/P1/high` | `e2bbc0c359b99b8e890a732da33c90d704151fc9` |
| 10 | `blog-selo-remoto-capilar-nivel.html` | `keep/P1/high` | `50b9e645ef4d6c5a9f8b2a6684bd547e850c1248` |
| 11 | `blog-potencia-bomba.html` | `keep/P1/high` | `af6f84bbac905b6888c63cf0d7c94da4e0023a5b` |
| 12 | `blog-gemeo-digital-tags-instrumentacao.html` | `keep/P1/high` | `2e091506da18f788757d1a424fd194228cb763b8` |
| 13 | `blog-teste-de-loop-instrumentacao.html` | `keep/P1/high` | `3f4f57c65535bd1e8fb243a6cd70de6282a4111c` |
| 14 | `calculadora-diagnostico-4-20ma-hart.html` | `keep/P1/high` | `225e449cd4b29d59d1066cb430a617babc5c615d` |
| 15 | `blog-gemeo-digital-instrumentacao.html` | `keep/P1/high` | `ec20d4e2cb6a08524e725ea19b352e99f95995a2` |
| 16 | `blog-ia-na-industria.html` | `keep/P1/high` | `29795678a75517c5cba25d6f250b4672a9ae55e3` |
| 17 | `ferramentas-instrumentacao-industrial.html` | `keep/P1/high` | `4f6afc59acffcbc00b8f579bae0b90b94f622f6b` |
| 18 | `ferramentas-calibracao-instrumentacao.html` | `keep/P1/high` | `c1dc3816a37edf2d5fcb9232d0b20b21fe0e8b5e` |

### Página 14 — diagnóstico 4–20 mA e HART
- relatório: `E06-HART-TRIAGE-ACERVO-14.md`;
- delta: `E06-INVENTORY-DELTA-14.csv`;
- relatório + delta: commit `19de7722d16cd178aaa39ec7e05fe481d9087dfc`;
- revisão editorial: `cd22567ab88ba5a6032b62006d9a7c88cff03864`;
- correção do exemplo, preservando o código funcional: `225e449cd4b29d59d1066cb430a617babc5c615d`;
- Pages final: run `35033347360`, build/deploy `success`;
- artefato: `10422481529`;
- digest: `sha256:4819b7a0b9b305936a9006b16d399b33afe4d24a29edb20975d559e286a9a6bc`;
- domínio: HTTP 200, 35.436 bytes;
- SHA-256 do HTML servido: `009d5cb4f2fb36816972b096a17489276b5b5c082996759810c59693ee6b650a`;
- Git blob do domínio e conteúdo final: `c9ab82a36d0b4f9bf0622534b7938ae91af4745c`;
- 1.946 palavras visíveis / 1.905 no `main`;
- 1 H1 / 13 H2 / 8 H3;
- `WebApplication` + `FAQPage`;
- canonical, sitemap e AdSense preservados;
- menu global Guia preservado; sem CTA promocional do Guia, Hotmart ou Cursos no corpo;
- JavaScript funcional preservado byte a byte, SHA-256 `e1e0095bf5691898e386304e08a12ed88927cb9781670950b6603385480900e8`;
- fórmulas e limiares técnicos não foram alterados;
- exemplo final conferido: 12 mA = 50% = 5 bar; 22 mA × 250 Ω = 5,5 V; tensão necessária 17,5 V; margem 6,5 V em fonte de 24 V;
- fontes primárias: IEC 60381-1, NAMUR NE 043, Emerson Rosemount 3051S e FieldComm Group.

### Pendência explícita do inventário
O `ADSENSE-INVENTORY.csv` canônico ainda não incorpora as decisões E06. Os arquivos `E06-INVENTORY-DELTA-01.csv` a `E06-INVENTORY-DELTA-18.csv` são a fonte incremental de verdade até existir mecanismo seguro de consolidação integral. Não substituir o CSV grande parcialmente.

### Página 15 — digital twin industrial
- página: `blog-gemeo-digital-instrumentacao.html`;
- conteúdo + sitemap: commit `ec20d4e2cb6a08524e725ea19b352e99f95995a2`;
- relatório + delta: commit `d16a303bc8e8afa06db41e8e7f57d83e5922bd2f`;
- relatório: `E06-DIGITAL-TWIN-ARCHITECTURE-ACERVO-15.md`; delta: `E06-INVENTORY-DELTA-15.csv`;
- blob final: `884c04bbe468d24c8e57fcea15912b8ff4db1b6f`;
- Pages: run `35035590094`, build/deploy `success`;
- artefato `10422164895`, digest `sha256:9e01095214668c0ec4511432770e23270df36fa07a81a4f02ad547092077ea3a`;
- domínio: HTTP 200, 22.615 bytes, SHA-256 `cde4e38ac3bd90d0992ef4b6a0afbb57e4eb30648cbbdef5e8af3504f722c277`;
- Git blob do HTML servido: `884c04bbe468d24c8e57fcea15912b8ff4db1b6f`, igual ao blob final versionado;
- 1.757 palavras visíveis / 1.710 no `main`; 1 H1 / 15 H2;
- arquitetura, sincronização, qualidade/status, contexto, V&V/VVUQ e exemplo 0–5 m / 4–20 mA adicionados;
- fontes primárias NIST e IDTA;
- sem CTA promocional do Guia, Hotmart ou Cursos no corpo; nenhum JS técnico ou fórmula alterado;
- leitura direta posterior do domínio validou equivalência byte a byte do HTML ao vivo.

### Página 16 — IA industrial
- página: `blog-ia-na-industria.html`;
- conteúdo + sitemap: commit `29795678a75517c5cba25d6f250b4672a9ae55e3`;
- relatório + delta: commit `1b255930a04d6cc7ff34667cc5cb771b642a318c`;
- relatório: `E06-INDUSTRIAL-AI-DATA-VALIDATION-ACERVO-16.md`; delta: `E06-INVENTORY-DELTA-16.csv`;
- blob final: `26a818ca7864c81363b0a196b6dd3d8d5b313446`;
- Pages: run `35045927126`, build/deploy `success`;
- artefato `10427116945`, digest `sha256:aaaa8980367218f67b0cc9e67992d8467a68f2d3b6c25d0d5124a6d697bc0167`;
- domínio: HTTP 200, 24.905 bytes, SHA-256 `47bec8f225f7a9d340cb8fc3f739e9cf05954971bd7de21e33117b8244a56134`;
- Git blob do HTML servido: `26a818ca7864c81363b0a196b6dd3d8d5b313446`, igual ao blob final versionado;
- 1.893 palavras visíveis / 1.845 no `main`; 1 H1 / 16 H2;
- exemplo conferido: 12,8 mA = 55% = 5,5 bar em faixa 0–10 bar; escala incorreta 0–16 bar = 8,8 bar;
- qualidade/contexto, validação temporal, métricas, domínio, operação em sombra, supervisão, monitoramento e fallback aprofundados;
- fontes primárias NIST, incluindo roadmap de manufatura e documentos de 2026;
- `BlogPosting` + `FAQPage`; canonical, sitemap e AdSense preservados;
- sem CTA promocional do Guia, Hotmart ou Cursos no corpo; nenhum JS técnico ou fórmula de ferramenta alterado;
- leitura direta do domínio validou equivalência byte a byte do HTML ao vivo.

### Página 17 — hub de ferramentas de instrumentação
- página: `ferramentas-instrumentacao-industrial.html`;
- conteúdo + sitemap: commit `4f6afc59acffcbc00b8f579bae0b90b94f622f6b`;
- relatório + delta: commit `ad46014787ca051d5ccc8e4803e0b331fd8049b1`;
- relatório: `E06-INSTRUMENTATION-TOOLS-HUB-ACERVO-17.md`; delta: `E06-INVENTORY-DELTA-17.csv`;
- blob final: `d96c34d666b3beadcaef04d91298abd3e076d1bf`;
- Pages: run `35049832983`, build/deploy `success`;
- artefato `10427773838`, digest `sha256:0591643b0087be733b73a0548de61e19ee4e2d5c54a2c8bcf5875df3a9137778`;
- domínio: HTTP 200, 24.994 bytes, SHA-256 `e44a8535545f104a1d3facb8cab2cfd615fda124aac50c827cc99b94578233be`;
- Git blob do HTML servido: `d96c34d666b3beadcaef04d91298abd3e076d1bf`, igual ao blob final versionado;
- 1.414 palavras visíveis / 1.367 no `main`; 1 H1 / 12 H2 / 2 H3;
- hub convertido em mapa de decisão por sintoma, dado necessário e primeiro caminho, com 31 destinos internos conferidos;
- exemplos reproduzíveis: 12 mA em 0–10 bar = 50% = 5,0 bar; 50% de curso da válvula não implica 50% de vazão;
- fontes primárias JCGM VIM e Brochura do SI do BIPM;
- posicionamento comercial limitado a revisão, manutenção, configuração, diagnóstico e conferência funcional; calibração, ensaio, rastreabilidade e documentação específica condicionados a recursos e parceiros confirmados na proposta;
- `CollectionPage` + `BreadcrumbList` + `FAQPage`; canonical, sitemap e AdSense preservados;
- menu global Guia preservado; sem CTA promocional do Guia, Hotmart ou Cursos no corpo;
- nenhum JavaScript técnico ou fórmula de ferramenta alterado;
- leitura direta do domínio validou equivalência byte a byte do HTML ao vivo.

### Página 18 — hub de ferramentas de calibração
- página: `ferramentas-calibracao-instrumentacao.html`;
- conteúdo + sitemap: commit `c1dc3816a37edf2d5fcb9232d0b20b21fe0e8b5e`;
- relatório + delta: commit `1ad799821dca041236291b6bbd6a95003fcec9db`;
- relatório: `E06-CALIBRATION-TOOLS-HUB-ACERVO-18.md`; delta: `E06-INVENTORY-DELTA-18.csv`;
- blob final: `4600363743b60bc49b629b33f34e3831c09b8ec7`;
- Pages: run `35071001842`, build/deploy `success`;
- artefato `10435724263`, digest `sha256:2aa43bc6c7943583609300376af6fa296410a46b1b29fd22a1c6543114bdc8be`;
- candidato versionado: 26.357 bytes, SHA-256 `3cd8e4308ed4ca5047bae68dd16f16373a963e5f29cd5319c10d3630923e9e59`;
- 1.397 palavras visíveis / 1.352 no `main`; 1 H1 / 15 H2 / 3 H3;
- hub convertido em mapa por pergunta técnica, dados mínimos, primeiro caminho e limite da conclusão;
- exemplo conferido: 5,00 bar aplicados em transmissor 0–10 bar e 12,08 mA lidos = 5,05 bar, erro +0,05 bar ou +0,5% do span;
- calibração, verificação, ajuste, rastreabilidade, incerteza e decisão de conformidade claramente separados;
- fontes primárias JCGM VIM, JCGM 106, ILAC G8 e NIST;
- oferta corrigida para revisão, manutenção, configuração, diagnóstico, loop check e conferência funcional; calibração, rastreabilidade e documentação específica condicionadas a padrões, recursos e parceiro confirmados;
- `CollectionPage` + `BreadcrumbList` + `FAQPage`; canonical, sitemap e AdSense preservados;
- 39 recursos internos conferidos na árvore;
- menu global Guia preservado; sem CTA promocional do Guia, Hotmart ou Cursos no corpo;
- nenhum JavaScript técnico, fórmula de ferramenta ou `app.js` alterado;
- domínio conferido diretamente com chave de cache: título, H1, data, exemplo e FAQ novos presentes. O leitor público textual ainda devolveu cópia anterior em cache; não declarar equivalência byte a byte nesta rodada.

### Próxima ação executável — E06-19
1. Reler `main`, `ADSENSE-STATE.json` e esta fila antes de qualquer escrita.
2. Selecionar a próxima página `improve/P0/high` segura, excluindo páginas 01–18.
3. Manter `blog-inspecao-instrumentos-area-classificada.html` e `blog-ot-cybersecurity-instrumentacao.html` fora da edição automática, pois exigem revisão especializada.
4. Pesquisar fontes primárias antes de editar.
5. Publicar uma página extensa por lote e validar GitHub Pages; validar domínio quando o fetch estiver disponível.
6. Criar relatório e `E06-INVENTORY-DELTA-19.csv`.
7. Atualizar controles e o mesmo MD de continuidade.
8. Não solicitar nova análise do AdSense.

## E08-W1 — avisos compartilhados
Pendente, sem bloqueio para E06. Antes de alterar `app.js`, reproduzir o problema em amostra representativa. Não mexer em script compartilhado sem defeito reproduzido.

## E10-I1 — Imagens desktop/mobile
Reservada para perto do encerramento. O mobile deve reutilizar a mesma imagem/mesma cena do desktop, com `srcset`/otimização derivados do mesmo asset e adaptação por CSS. Manter asset diferente somente quando houver defeito real de acessibilidade/legibilidade não resolvível por enquadramento responsivo, com exceção documentada.

## E07–E12
Após avanço suficiente do acervo: autoria/transparência, mobile/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta. E11 continua proibida sem autorização explícita do proprietário.

# ALOGY — fila operacional atual

> Versão 2026-09-15.31. Esta é a única fila executável. Filas anteriores e relatórios por lote permanecem históricos.

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

**Estado:** EM EXECUÇÃO — QUATORZE PÁGINAS REVISADAS, PUBLICADAS E VALIDADAS.

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
O `ADSENSE-INVENTORY.csv` canônico ainda não incorpora as decisões E06. Os arquivos `E06-INVENTORY-DELTA-01.csv` a `E06-INVENTORY-DELTA-14.csv` são a fonte incremental de verdade até existir mecanismo seguro de consolidação integral. Não substituir o CSV grande parcialmente.

### Próxima ação executável — E06-15
1. Reler `main`, `ADSENSE-STATE.json` e esta fila antes de qualquer escrita.
2. Selecionar a próxima página `improve/P0/high` de instrumentação, automação ou elétrica industrial e baixo risco, excluindo páginas 01–14.
3. Priorizar diagnóstico, manutenção, medição e controle; manter `manual-review/P0` intactas.
4. Pesquisar fontes primárias atuais antes de editar.
5. Publicar uma página extensa por lote, validar GitHub Pages e o domínio.
6. Criar relatório e `E06-INVENTORY-DELTA-15.csv`.
7. Atualizar `ADSENSE-STATE.json`, esta fila e o mesmo MD de continuidade.
8. Não solicitar nova análise do AdSense.

## E08-W1 — avisos compartilhados
Pendente, sem bloqueio para E06. Antes de alterar `app.js`, reproduzir o problema em amostra representativa. Não mexer em script compartilhado sem defeito reproduzido.

## E10-I1 — imagens desktop/mobile
Reservada para perto do encerramento. O mobile deve reutilizar a mesma imagem/mesma cena do desktop, com `srcset`/otimização derivados do mesmo asset e adaptação por CSS. Manter asset diferente somente quando houver defeito real de acessibilidade/legibilidade não resolvível por enquadramento responsivo, com exceção documentada.

## E07–E12
Após avanço suficiente do acervo: autoria/transparência, mobile/desempenho, conta/anúncios/privacidade, prontidão, solicitação autorizada e acompanhamento da resposta. E11 continua proibida sem autorização explícita do proprietário.

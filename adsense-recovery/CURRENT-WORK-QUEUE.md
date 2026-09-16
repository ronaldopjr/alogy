# ALOGY — fila operacional atual

> Versão 2026-09-16.41. Esta é a única fila executável. O histórico detalhado permanece no MD de continuidade e nos relatórios `adsense-recovery`.

## Regras permanentes

### Superfície editorial ativa
- Revisão automática de artigo exige link/card ativo no `blog.html` atual.
- Revisão automática de ferramenta exige link/card ativo no `ferramentas.html` atual.
- Navegação institucional vigente também pode definir uma página institucional ativa.
- Arquivo existente, HTTP 200, `index,follow`, sitemap, mapa de capas em JavaScript, link residual ou classificação histórica isoladamente **não** tornam uma URL elegível para revisão automática.
- `blog-ia-na-industria.html`, `ferramentas-instrumentacao-industrial.html`, `ferramentas-calibracao-instrumentacao.html` e `ferramentas-processo-vazao-nivel.html` permanecem fora da fila automática enquanto não voltarem à superfície ativa ou o proprietário não autorizar explicitamente.

### Verdade comercial e segurança
- Motivo reportado pelo proprietário: **conteúdo de baixo valor**.
- Não solicitar nova análise do AdSense automaticamente.
- Não fazer `noindex`/pruning em massa.
- Não inventar equipe, clientes, cases, depoimentos, credenciais, registro profissional, equipamentos, laboratório, acreditação, rastreabilidade, parceiros, resultados ou capacidade.
- A ALOGY ainda não possui padrão calibrado confirmado para sustentar emissão própria de laudo/certificado de calibração.
- Oferta segura: avaliação, inspeção, manutenção, configuração e conferência funcional; calibração, ensaio, rastreabilidade ou documentação específica somente quando recursos e parceiros forem confirmados na proposta.
- Não alterar fórmulas ou JavaScript técnico sem defeito reproduzido e validação proporcional.
- Páginas `manual-review/P0` não recebem edição técnica automática.
- Nunca usar force push.

### Guia
- O link global **Guia** pode permanecer no menu.
- Não inserir CTA promocional do Guia, Hotmart ou `cursos.html` no corpo de artigos/ferramentas.

## E02–E06
- E02: concluído e validado.
- E03: oferta comercial inicial corrigida e validada.
- E04: inventário/higiene concluído para trabalho editorial.
- E05: piloto concluído.
- E06: **CONCLUÍDO para o trabalho automatizável seguro na superfície editorial ativa**.
- O lote E06-19 em `ferramentas-processo-vazao-nivel.html` foi revertido por `dd4cac5b3f01a360770c788bf3a1e50117be9512`; nenhum delta 19 foi adotado.
- Os deltas E06-01 a E06-18 continuam históricos/incrementais até consolidação segura do inventário canônico.
- `blog-inspecao-instrumentos-area-classificada.html` e `blog-ot-cybersecurity-instrumentacao.html` permanecem sem edição automática por exigirem revisão especializada proporcional ao risco.

## E07 — autoria, evidências e transparência

**Estado:** CONCLUÍDO NO LIMITE AUTOMATIZÁVEL SEGURO; pendências pessoais/cases aguardam proprietário.

### Publicado
- `sobre.html` recebeu seção de responsabilidade editorial organizacional, método para fontes/premissas, exemplos conferíveis, limites das ferramentas, correções e separação entre conteúdo técnico e escopo comercial.
- Commit: `dd49ac0e35709adbaa31d06dfeda5425124143b9`.
- Pages: `35099511862` — `success`.
- Artefato: `10447711964`; digest `sha256:0d184680f166ebe00a85c8bdbf47ab873c59812a6c813bc519bcfa653205492c`.
- A leitura textual pública ainda apresentou cópia anterior em cache; não declarar equivalência byte a byte do domínio para este lote sem nova evidência.

### AGUARDA PROPRIETÁRIO em E07
- nome e identidade do responsável técnico/editorial, se desejado;
- formação, CREA/registro, experiência e demais credenciais publicáveis;
- confirmação de data de fundação/uso de “Desde 2012” quando esse dado for usado como prova de experiência;
- comprovação/autorização das imagens, escopos e alegações de resultado dos dois projetos em `cases.html`;
- não atribuir revisão pessoal retroativa a páginas sem confirmação real.

## E08 — celular, acessibilidade e desempenho

**Estado:** EM EXECUÇÃO.

### E08-ACCESSIBILITY-01 — `sobre.html`
- Defeito reproduzido na fonte ativa: landmarks de navegação desktop/mobile sem nome acessível e links sociais formados apenas por ícones sem `aria-label`.
- Correção publicada em `29671d4dc825c8c406d5974b15d3300f2f96d7cc`: `aria-label` nos dois `nav`, identificação de “Redes sociais”, nomes acessíveis em LinkedIn/Instagram/Facebook/YouTube/TikTok e ícones sociais decorativos com `aria-hidden`.
- Nenhuma fórmula, calculadora ou `app.js` foi alterado.
- GitHub Pages run `35100866427`: `success`.
- O cache público de busca ainda não expôs o markup novo; não declarar equivalência byte a byte do domínio para este lote sem nova evidência.

### E08-SEMANTICS-02 — `index.html`
- Defeito reproduzido: a home continha dois elementos `main`.
- Correção publicada em `b2865bbf569a42b811d16abf64fb5eac8722424d`: um único `main` passou a envolver o conteúdo principal; o contêiner do contato permaneceu como `div`.
- Texto, H1, formulário, CSS, fórmulas e `app.js` foram preservados.
- Validação de fonte: 2 → 1 aberturas/fechamentos de `main`; um H1 e um formulário preservados.
- GitHub Pages run `35104117692`: `success`; artefato `10450070411`; digest `sha256:603cff6dea4b608b9324cdc9ef024e384b4e79161b14ade9f0d07f19e96fdfda`.
- Domínio validado diretamente: um `main`, um H1, um formulário, `#contato` dentro do conteúdo principal e sem overflow horizontal no desktop observado.

### E08-ACCESSIBILITY-03 — `ferramentas.html` + auditoria de `calculadora-4-20ma.html`
- Defeito reproduzido: 29 de 30 ações dos cartões tinham o mesmo nome acessível “Abrir ferramenta”; o título visual não integrava o nome do link.
- Correção publicada em `6576c0e3ddb2a6e7935fb184a34a608ba86e43ab`: 30 `aria-label` contextuais e únicos, sem trocar destinos ou texto visual.
- Pages `35111374317`: `success`; artefato `10452656669`; digest `sha256:7ba1b6e17bd307c7e95fc9ff63b6b394b0a838974d44fe78b725fe5e8513a482`.
- Domínio: um `main`, um H1, 30 ações rotuladas e 30 nomes únicos; sem overflow horizontal no desktop observado.
- A busca por “4-20” filtrou 4 cartões em 2 grupos e o foco após o campo foi visível.
- `calculadora-4-20ma.html`: sem edição; controles rotulados, foco por teclado visível, FAQ acionável e teste 0–10 bar/12 mA = 50,00%/5,00 bar.
- Fórmulas e JavaScript técnico permaneceram intactos.
- Limite registrado: o navegador disponível não expôs viewport exato de 360/390 px nem zoom por atalho; essa validação visual permanece pendente e não foi declarada concluída.

**PRÓXIMA AÇÃO EXECUTÁVEL**
1. Continuar E08 em `blog.html` e `industrial.html`, reproduzindo teclado, foco, semântica, overflow e desempenho observável antes de editar.
2. Corrigir somente defeito reproduzido e manter o critério da superfície ativa.
3. Preservar fórmulas, JavaScript técnico e `app.js`; não antecipar refatoração especulativa.
4. Manter registrada a pendência visual exata de 360/390 px para `ferramentas.html` e `calculadora-4-20ma.html`; não tratá-la como concluída sem ambiente compatível.
5. Não executar ainda E10-I1.

## E09–E10
- E09: verificar o que é possível sem autenticação em anúncios/rastreamento/privacidade; conta AdSense, GSC, Analytics e CMP autenticados dependem de autorização/dados reais.
- E10: revisão final de prontidão e E10-I1 para mesma imagem/mesma cena desktop-mobile com adaptação responsiva.
- E11 (solicitar nova análise) continua proibida sem autorização explícita.

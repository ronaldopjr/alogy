# F4 — Fila editorial executável

## Regras

- Cada lote contém no máximo cinco páginas `improve` P0.
- O lote só pode alterar as páginas listadas, estado, changelog, relatório e arquivos de fila explicitamente previstos.
- Toda afirmação técnica nova precisa de fonte primária verificável ou linguagem orientativa delimitada, sem prescrição.
- Não alterar fórmulas, JavaScript, canonical, robots, sitemap, páginas `manual-review` ou conteúdo confidencial.
- Lote aprovado pelos gates deve ser publicado em `main` por pull request limpa, sem força e sem arquivos inesperados.

## F4-MAINTENANCE-01 — orientação dos diretórios centrais

1. `blog.html`
   - Escopo editorial: acrescentar uma orientação curta para que a pessoa escolha a categoria e o artigo conforme a pergunta que deseja esclarecer, deixando explícito que os artigos têm finalidade informativa e que decisões de campo ou de segurança não são tratadas pelo diretório.
   - Fontes e links a verificar na edição: somente destinos locais já existentes; priorizar as rotas de instrumentação, calibração, analítica, processo e automação já presentes no site.
   - Mudanças proibidas: cartões e textos técnicos dos artigos, busca, JavaScript, JSON-LD, AdSense, canonical, robots, sitemap, fórmulas, recomendações de campo, autoria, credencial ou dado de cliente.

2. `ferramentas.html`
   - Escopo editorial: organizar a escolha inicial entre diretórios por área e esclarecer que as ferramentas apoiam estudo e triagem, sem substituir dados de projeto, procedimento ou validação da aplicação.
   - Fontes e links a verificar na edição: somente subdiretórios locais já existentes e seus destinos confirmados; não introduzir referência técnica externa nem novo critério de cálculo.
   - Mudanças proibidas: cards, fórmulas, exemplos, JavaScript, busca, JSON-LD, AdSense, canonical, robots, sitemap, critérios técnicos, seleção de equipamento, autoria, credencial ou dado de cliente.

## F4-EDITORIAL-05 — estimativa de massa por nível

1. `blog-massa-tanque-nivel.html`
   - Escopo editorial: organizar a cadeia nível → geometria/tabela nível-volume → volume útil → densidade na condição declarada → estimativa de massa; acrescentar critérios para identificar a origem de cada dado e separar estimativa operacional de medição comercial, fiscal ou de segurança.
   - Fontes a verificar na edição: Vocabulário Internacional de Metrologia do BIPM/JCGM para resultado, rastreabilidade e incerteza; publicação oficial da OIML aplicável a tanques fixos; orientação oficial de unidades SI para coerência entre volume, densidade e massa.
   - Links internos pretendidos: preservar `calculadora-massa-tanque-nivel.html`, `calculadora-volume-cilindro-horizontal-nivel.html`, `calculadora-volume-tanque.html` e `calculadora-dp-nivel-tanque-fechado.html`, deixando claro o papel e o limite de cada ferramenta.
   - Mudanças proibidas: fórmula, exemplo numérico existente, JavaScript, calculadora, tabela de arqueação, compensação fiscal/comercial, regra de conformidade, critério de segurança, seleção de instrumento, canonical, robots, sitemap, autoria, credencial ou dado de cliente.

## F4-EDITORIAL-04 — qualidade e umidade do ar de instrumentos

1. `blog-ar-instrumentos-qualidade-ponto-orvalho.html`
   - Escopo editorial: transformar o texto introdutório em uma sequência de decisão entre requisito da aplicação, classe de pureza, ponto de medição, pressão da amostra, estabilização e registro; distinguir ponto de orvalho sob pressão de comparação em condição atmosférica sem prescrever classe ou valor universal.
   - Fontes a verificar na edição: páginas oficiais da ISO para ISO 8573-1:2010, o trabalho de revisão ISO/AWI 8573-1 e ISO 8573-3:1999; documentação pública do fabricante sobre medição de ponto de orvalho em ar comprimido.
   - Links internos pretendidos: preservar `calculadora-consumo-ar-instrumentos.html` e explicar que consumo não determina pureza nem ponto de orvalho; usar apenas links locais já existentes e confirmados.
   - Mudanças proibidas: classe, setpoint ou critério universal; seleção de secador, sensor ou ponto de instalação final; procedimento de intervenção; alegação de conformidade; fórmula, JavaScript, canonical, robots, sitemap, autoria, credencial ou dado de cliente.

## F4-EDITORIAL-03 — clareza de escopo em ferramenta e artigo

1. `blog-comprimento-correia-polias.html`
   - Diferenciar medida geométrica, comprimento nominal/comercial e verificação de campo; retirar qualquer alegação de revisão técnica não comprovada.
   - Preservar integralmente fórmulas, exemplos numéricos e JavaScript; só citar documentação pública verificável de fabricante, sem recomendar seleção final.

2. `calculadora-diagnostico-4-20ma-hart.html`
   - Diferenciar a função de triagem rápida da calculadora completa de malha 4–20 mA/HART e reduzir repetição editorial.
   - Não alterar fórmulas, limiares, referências configuráveis, JavaScript nem orientar intervenção em campo.

## F4-EDITORIAL-01 — fundamentos e transformação digital industrial

1. `blog-instrumentacao-industrial.html`
   - Transformar o hub genérico em guia de decisão por variável, sinal, diagnóstico e etapa de trabalho.
   - Não inventar cases, serviços executados ou credenciais.
2. `blog-criticidade-instrumentos.html`
   - Delimitar criticidade como apoio à priorização, separando consequência, evidência e decisão de manutenção.
   - Não criar matriz de risco normativa nem critério universal de aceitação.
3. `blog-gemeo-digital-instrumentacao.html`
   - Explicar cadeia de dados, qualidade, atualização e limites de um gêmeo digital com linguagem verificável.
   - Não alegar economia, precisão ou resultado sem fonte e contexto.
4. `blog-ia-na-industria.html`
   - Acrescentar critérios de qualidade de dados, validação, supervisão humana e métricas de avaliação.
   - Não prometer desempenho, implantação ou serviços não comprovados.
5. `blog-industria-5-0.html`
   - Diferenciar o enquadramento de Indústria 5.0, objetivos e limites da automação centrada em pessoas.
   - Usar fontes institucionais verificáveis; não usar tendências como fato operacional universal.

## F4-EDITORIAL-02 — manutenção, calibração e integração de dados

1. `blog-gemeo-digital-tags-instrumentacao.html`
   - Acrescentar exemplo conceitual de ciclo de vida de TAG, proveniência e reconciliação de dados sem usar dados de cliente.
2. `blog-manutencao-preditiva-instrumentacao-sensores.html`
   - Explicar baseline, qualidade de dados, indicadores e limites entre alerta e diagnóstico.
3. `blog-calibracao-instrumentos-industriais.html`
   - Tornar a página um guia de decisão entre verificação, calibração, ajuste, erro, incerteza e registro.
   - Não alterar calculadoras, critérios formais de conformidade ou intervalos prescritos.
4. `ferramentas-manutencao-industrial.html`
   - Reduzir destaque repetido e criar trilhas por planejamento, condição, utilidades e confiabilidade.
5. `ferramentas-processo-vazao-nivel.html`
   - Reduzir destaque repetido e criar trilhas por variável, estimativa, instalação e validação de processo.

## Fora da fila

- Páginas `manual-review`, consolidação/redirect/noindex, páginas institucionais de confiança, fórmulas, JavaScript e PDFs/desenhos confidenciais.
- Qualquer página que exija alegação de experiência, case, conformidade, segurança funcional, legal ou operação crítica.

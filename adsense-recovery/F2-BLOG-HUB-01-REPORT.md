# F2 — Hub editorial do blog, lote 01

## Escopo e decisão

| Página | Decisão | Prioridade | Confiança |
|---|---|---:|---|
| `blog.html` | `keep` | P1 | alta |

`blog.html` é o diretório editorial central do site. A página oferece busca, oito categorias técnicas, 60 links únicos de artigos, 60 entradas `BlogPosting` no JSON-LD e aviso de uso orientativo. Sua função de descoberta é própria e distinta das páginas individuais.

## Verificações do lote

- `robots`: `index,follow`; canonical exata; presença no sitemap e AdSense preservados.
- Um H1 renderizado.
- Busca e oito categorias presentes.
- 60 links únicos de artigos e 60 entradas `BlogPosting`.
- Todos os 60 arquivos de destino existem no SHA analisado.
- Nenhum HTML, JavaScript, fórmula, PDF ou desenho foi alterado ou utilizado.

## Encerramento global da F2

- 390 linhas de páginas no inventário.
- 87 páginas monetizadas, indexáveis e incluídas no sitemap.
- 0 páginas monetizadas/indexáveis sem classificação.
- 0 classificações monetizadas/indexáveis com prioridade, confiança, evidência ou próxima ação ausente.
- Distribuição final: `improve`: 31; `keep`: 38; `manual-review`: 17; `merge`: 1.

## Trava para a F3

A fase seguinte permanece em `waiting_human`. O piloto proposto é limitado a cinco hubs P0 classificados como `improve`:

1. `ferramentas-analitica-industrial.html`
2. `ferramentas-automacao-clp.html`
3. `ferramentas-calibracao-instrumentacao.html`
4. `ferramentas-eletrica-industrial.html`
5. `ferramentas-instrumentacao-industrial.html`

Antes de qualquer edição, é necessário:

- aprovar ou rejeitar esse escopo exato;
- autorizar edições editoriais somente na branch `agent/adsense-recovery`, limitadas à redução de textos repetidos nos cartões e à inclusão de orientação decisória própria;
- decidir se alegações não verificadas de “revisão técnica” devem ser removidas até a confirmação de um revisor, ou fornecer identidade e credenciais confirmadas desse revisor.

Fórmulas e JavaScript técnico ficam fora do escopo. Não há autorização para merge, publicação ou solicitação de nova análise ao AdSense.

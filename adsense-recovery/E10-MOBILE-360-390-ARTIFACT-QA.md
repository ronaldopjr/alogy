# E10 — QA mobile 360/390 do artefato publicado

Data: 2026-09-16

## Escopo

Validação geométrica do build do GitHub Pages associado à `main` `43948d69e49329e029dd835ea80aba75b2b169ed`.

- Pages run: `35124555723` — `success`.
- Artefato: `10458756254` (`github-pages`).
- Digest: `sha256:2fdd2d916e3b46a38931a7074ab53245b73f50290b92d6a984b716480df94c02`.
- Páginas representativas: `index.html`, `blog.html`, `ferramentas.html`, `industrial.html`.
- Viewports: **360 × 844 px** e **390 × 844 px**.
- Menu mobile validado também no estado aberto.

## Método

O runtime continuou sem resolver `www.alogy.com.br` via DNS para Chromium/curl e a política do navegador bloqueou navegação local por `localhost` e `file://`. Para não transformar a limitação do ambiente em falso sucesso, o artefato exato do Pages foi baixado e renderizado como HTML autocontido, preservando o HTML cru e injetando os arquivos locais efetivamente empacotados no build:

- `style-base.css`;
- `style-visuals.css`;
- `style-blog-covers.css`;
- `style.css`;
- `app.js`.

Recursos externos de rede foram suprimidos. Imagens foram neutralizadas somente para impedir requisições externas/locais durante o teste; atributos, containers e regras CSS responsáveis pela geometria permaneceram. Assim, esta execução comprova layout/overflow e comportamento do menu do artefato, não equivalência visual de pixels das fotografias baixadas do domínio.

## Resultado

| Página | 360 px | 390 px | Menu aberto | `main` | `h1` |
|---|---:|---:|---:|---:|---:|
| Home (`index.html`) | sem overflow | sem overflow | sem overflow | 1 | 1 |
| Blog (`blog.html`) | sem overflow | sem overflow | sem overflow | 1 | 1 |
| Ferramentas (`ferramentas.html`) | sem overflow | sem overflow | sem overflow | 1 | 1 |
| Serviços (`industrial.html`) | sem overflow | sem overflow | sem overflow | 1 | 1 |

Em todos os oito cenários, `document.documentElement.scrollWidth` ficou exatamente igual à largura da viewport.

### Controles adicionais

- Header mobile: somente o rótulo público **Serviços**, apontando para `industrial.html`; nenhum `Serviços Industriais`/`Serviços Residenciais` no DOM atual.
- Blog: **38/38** links de artigo com `aria-label` contextual e **38** nomes únicos após execução do `app.js`.
- Ferramentas: **30** ações com `aria-label` e **30** nomes únicos.
- A faixa de categorias de Ferramentas mantém rolagem horizontal interna intencional (`overflow-x:auto`); seus links podem ficar fora da caixa visível, mas não aumentam `scrollWidth` do documento.
- Inspeção visual dos quatro screenshots de 360 px, com menu aberto, não mostrou corte lateral ou sobreposição estrutural do header/menu.

## Conclusão

**PASSOU para a geometria mobile exata do artefato publicado em 360/390 px.**

Nenhuma alteração de HTML, CSS ou JavaScript público foi necessária. A limitação de acesso direto ao domínio permanece apenas como limitação de rede do runtime; ela não impede mais o fechamento do item de viewport exata, pois o artefato da execução Pages concluída com `success` foi validado diretamente.

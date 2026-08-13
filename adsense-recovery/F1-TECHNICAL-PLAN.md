# F1 — Plano técnico de higiene e redirecionamentos

Data: 13 de agosto de 2026

## Infraestrutura confirmada

Os metadados do repositório confirmam:

- hospedagem: GitHub Pages;
- estado: `built`;
- tipo de build: `legacy`;
- fonte: branch `main`, diretório raiz `/`;
- domínio personalizado: `www.alogy.com.br`;
- HTTPS obrigatório;
- certificado aprovado para `www.alogy.com.br` e `alogy.com.br`;
- página 404 personalizada: ausente.

## Decisões por URL

### `/index.html`

O arquivo `index.html` é também o recurso que serve a home `/`. Substituí-lo por meta refresh ou JavaScript para redirecionar `/index.html` faria a própria home executar o mesmo redirecionamento e poderia criar loop ou regressão.

Decisão: não alterar. A canonical atual para `https://www.alogy.com.br/` é segura e coerente com o Search Console, que trata `/index.html` como alternativa canônica.

### `calculadora-incerteza-calibracao.html`

Destino: `calculadora-incerteza-calibracao-tur-tar.html`.

O fallback atual contém:

- `noindex,follow`;
- canonical para o destino;
- meta refresh imediato;
- `window.location.replace`;
- link manual e fallback `noscript`;
- nenhum AdSense;
- ausência nos sitemaps.

Decisão: manter. GitHub Pages não permite declarar 301 por caminho no repositório estático atual. Um 301 real só deve ser aplicado numa camada futura de CDN/proxy ou hospedagem que aceite regras de resposta.

### `calculadora-lrv-urv-span.html`

Destino: `calculadora-4-20ma.html`.

Possui as mesmas proteções do redirect anterior. Decisão: manter pelo mesmo motivo.

### `google00ce371ffda114a1.html`

O conteúdo é exatamente um token de verificação de propriedade do Google. A URL não está no sitemap, não carrega AdSense e não é conteúdo editorial. O Search Console a classificou como soft 404 por ter conteúdo mínimo, comportamento compatível com um arquivo de verificação.

Remover o arquivo antes de confirmar outro método permanente pode causar perda da propriedade correspondente. O benefício de removê-lo para AdSense é desprezível.

Decisão: manter até confirmação humana de outro método de propriedade. Depois da confirmação, a proposta reversível é excluir somente esse arquivo; no GitHub Pages, a URL passará a responder 404. Uma página `404.html` personalizada pode ser criada separadamente para experiência do usuário, mas não é pré-requisito para AdSense.

## Patch futuro exato, condicionado

Nenhum patch de página é recomendado agora. Se as condições futuras forem atendidas:

1. Com outro método de verificação confirmado: excluir apenas `google00ce371ffda114a1.html`.
2. Com CDN/proxy ou nova hospedagem: configurar 301 das duas calculadoras antigas para seus destinos e, opcionalmente, `/index.html` para `/` no nível HTTP.
3. Após cada mudança: verificar status HTTP, destino final, ausência no sitemap e preservação da propriedade do Search Console.

## Gates executados

- `main` permaneceu no baseline `eab09572d950c7b0072f6183705ba4d779ae472d`.
- Branch de trabalho encontrada no estado esperado.
- Hospedagem e origem verificadas pelos metadados do GitHub Pages.
- Arquivos de redirect e verificação lidos diretamente da branch de trabalho.
- Nenhum HTML, CSS, JavaScript, sitemap ou página publicada foi alterado.

## Conclusão

Não há correção técnica segura a aplicar nesses quatro casos dentro da hospedagem atual. O projeto pode avançar para a classificação editorial sem carregar uma dívida técnica capaz de explicar a reprovação por conteúdo de baixo valor.

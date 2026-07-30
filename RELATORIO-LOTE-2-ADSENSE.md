# Lote 2 — Auditoria de segurança AdSense

Data: 29/07/2026

## Resultado

- Arquivos HTML analisados: **390**
- Páginas com AdSense: **86**
- Páginas com `noindex`: **90**
- Páginas de redirecionamento detectadas: **2**
- Páginas `noindex` com AdSense: **0**
- Redirecionamentos com AdSense: **0**
- Páginas monetizadas com menos de 300 palavras visíveis: **0**
- Páginas monetizadas sem canonical: **0**
- Scripts AdSense duplicados na mesma página: **0**

## Decisão do lote

Nenhuma remoção automática de anúncios foi necessária. As páginas em revisão/noindex e as páginas de redirecionamento já não carregam AdSense. Todas as páginas monetizadas analisadas possuem conteúdo visível acima do limite conservador usado nesta auditoria e canonical definida.

O site usa anúncios automáticos. Portanto, posições específicas — principalmente próximas a botões, campos e resultados — também devem ser controladas no painel do AdSense por exclusões de área e revisão em celular. Alterar isso diretamente no HTML sem observar a renderização poderia causar regressões.

## Regras preservadas para os próximos lotes

1. Não inserir AdSense em páginas `noindex`, em revisão, redirecionadas, 404/410 ou legais.
2. Só monetizar páginas indexáveis, canônicas, completas e com conteúdo técnico próprio.
3. Não posicionar anúncios entre rótulo e campo, próximos ao botão Calcular ou confundidos com o resultado.
4. Ao restaurar uma página, conteúdo e revisão vêm antes da retirada do `noindex` e da monetização.
5. Manter Política de Privacidade, Termos de Uso, Sobre e contato acessíveis.

# E03-COMMERCIAL-TRUTH-02 — home, Sobre e CTA 4-20 mA

## Objetivo

Completar o escopo inicial de E03 retirando ou qualificando promessas comerciais de calibração e alinhando home, página Sobre e CTA da calculadora 4-20 mA à capacidade atualmente comprovada.

## Base da execução

- Branch: `main`.
- SHA de início: `152db02f26b9d6bd8fac8c53ff789f4966356685`.
- Commit de publicação: `9a4c33175da73b3a53fe7912bca33da5bdcdd8b8`.
- Fato confirmado pelo proprietário: a ALOGY ainda não possui padrão calibrado confirmado para sustentar emissão própria de laudo de calibração.

## Arquivos alterados

### `index.html`

- O banner principal deixou de anunciar “instalação, calibração” como oferta direta.
- A mensagem principal passou a oferecer avaliação, manutenção, configuração, teste de malha e diagnóstico conforme o escopo.
- Título, description, Open Graph, Twitter e descrição da organização foram alinhados ao foco em instrumentação e manutenção industrial.
- A home passou a solicitar equipamento, modelo, quantidade, falha, cidade/planta e prazo antes da avaliação.
- O link social direto da Hotmart foi retirado; o menu “Guia” foi preservado.
- O residencial permanece disponível, sem ocupar o posicionamento principal.

### `sobre.html`

- A atuação foi delimitada por equipamento, falha, local, recursos e documentação.
- Foi explicitado que inspeção, manutenção, parametrização e conferência funcional não equivalem a certificado de calibração, acreditação ou rastreabilidade automática.
- A página passou a explicar como a demanda é avaliada antes da intervenção.
- Atendimento, visita e eventual recebimento de equipamentos ficaram condicionados à combinação prévia.
- Metadados e dados estruturados foram alinhados a Americana e Região Metropolitana de Campinas.
- O link social direto da Hotmart foi retirado; o menu “Guia” foi preservado.

### `calculadora-4-20ma.html`

- Somente o CTA comercial foi alterado.
- A alegação “atua com teste de loop, calibração, comissionamento e diagnóstico” foi substituída por avaliação de viabilidade para teste de loop, diagnóstico, configuração ou manutenção conforme o escopo.
- Fórmulas, tabelas, exemplos, limiares, conteúdo técnico, CSS e JavaScript da calculadora foram preservados.

## Validação

- O diff do commit contém somente `index.html`, `sobre.html` e `calculadora-4-20ma.html`.
- O arquivo da calculadora tem apenas um hunk de alteração, restrito ao CTA comercial.
- Nenhuma fórmula ou função JavaScript da calculadora foi modificada.
- Os blocos JSON-LD alterados de `index.html` e `sobre.html` foram analisados como JSON válido.
- Blobs confirmados em `main`:
  - `index.html`: `6d530206320c802aa19a805434a4d101a852ec66`;
  - `sobre.html`: `79c2ff679a77da0ffdc3212aee739f16b4e7d31b`;
  - `calculadora-4-20ma.html`: `46e3a9f7f7052ab4b1de9dd4b13b18d03fbc6383`.
- Buscas exatas no código por “calibração em campo”, “atua com teste de loop, calibração” e “calibração rastreável” retornaram zero ocorrências, mas o GitHub marcou os resultados como incompletos; portanto, isso não substitui o inventário integral de E04.

## Limites e pendências

- Home, Sobre, página industrial e calculadora precisam ser conferidas no domínio em desktop e celular.
- E02 também continua aguardando a interação real da busca no domínio.
- C01 continua pendente: não foram publicados modelos, portes, faixas, prazos garantidos, equipe, testes específicos ou parceiro de calibração.
- A revisão ampla de todas as URLs e CTAs será retomada no inventário de E04, sem presumir que a busca de código incompleta cobriu o repositório inteiro.
- Nenhuma solicitação de análise foi enviada ao AdSense.

## Resultado

O escopo inicial de E03 foi publicado no código e ficou coerente com a capacidade atualmente confirmada. A etapa permanece `PUBLICADO — FALTA CONFERIR` até a verificação das páginas no domínio.

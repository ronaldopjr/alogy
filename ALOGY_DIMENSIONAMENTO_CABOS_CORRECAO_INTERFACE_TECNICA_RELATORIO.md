# ALOGY — Correção da Ferramenta de Dimensionamento de Cabos

Data: 2026-06-30  
Arquivo alterado: `calculadora-dimensionamento-cabos.html`  
Base usada: `ALOGY MAIN ultimo.zip`

## Objetivo

Aplicar as duas correções solicitadas na ferramenta de Dimensionamento de Cabos:

1. Correção de interface, botões, impressão e navegação.
2. Correção técnica pontual envolvendo tipo de cabo, método de instalação, compatibilidade construtiva e partida de motor.

Nenhuma URL foi alterada. Nenhuma página de blog foi modificada. Nenhuma ferramenta além de `calculadora-dimensionamento-cabos.html` foi alterada.

## Correções de interface

- Removido botão duplicado `Imprimir página`.
- Padronizado o botão de impressão simples para apenas `Imprimir`.
- Mantido apenas um botão de impressão da página.
- Adicionado botão explícito `Calcular dimensionamento`.
- Adicionado botão `Limpar` para restaurar valores padrão.
- Renomeado `Exemplo similar ao relatório enviado` para `Carregar exemplo`.
- Movidos os botões `Imprimir relatório` e `Copiar relatório` para perto da área de resultado.
- Mantido o botão flutuante único `Voltar para Ferramentas`.
- Mantido o link do botão flutuante para `ferramentas.html`.
- Mantida a tabela comparativa de seções comerciais.

## Correções técnicas pontuais

- Criada verificação de compatibilidade entre:
  - tipo de cabo;
  - tipo construtivo;
  - método de referência A1/A2/B1/B2/C/D/E/F/G;
  - tipo de equipamento/carga;
  - ambiente de instalação.
- A ferramenta agora alerta quando houver conflito provável, por exemplo:
  - cabo multipolar com tipo construtivo unipolar;
  - cabo unipolar com método típico de multipolar;
  - condutor 450/750 V em ambiente externo, solo ou submersão;
  - método F/G sem cabos unipolares;
  - método B1/A1 com cabo multipolar;
  - aplicação solar CC sem sistema CC ou sem cabo solar;
  - inversor sem cabo VFD/blindado;
  - instrumentação/comando 24 Vcc com cabo pouco adequado.
- O campo `Tempo de partida (s)` deixou de ser apenas informativo e passou a entrar em uma verificação térmica orientativa da partida.
- A seleção de seção agora também pode considerar, quando partida de motor estiver ativa:
  - queda de tensão na partida;
  - limite de queda na partida;
  - seção mínima térmica orientativa pela energia I²t da partida.
- O relatório técnico agora inclui tempo de partida e seção mínima orientativa da partida quando aplicável.
- A tabela comparativa agora mostra observação de partida quando a verificação de partida estiver ativa.

## Observações importantes

- A verificação térmica de partida é orientativa e não substitui curva do motor, curva da proteção, dados do fabricante, estudo de partida ou validação por profissional habilitado.
- A base de capacidade de condução continua sendo uma tabela interna simplificada para pré-dimensionamento; o resultado deve ser validado com tabelas oficiais da NBR 5410 e dados do fabricante.
- A ferramenta continua sendo de apoio/preliminar, não um projeto elétrico final.

## Validações feitas

- JavaScript validado com `node --check`.
- Simulação local básica executada para `calcCB()`, `fillCableAppExample()` e `resetCableDefaults()`.
- Contagem de botões:
  - `Imprimir página`: 0 ocorrência.
  - `Imprimir`: 1 botão simples.
  - `Imprimir relatório`: 1 botão.
  - `Copiar relatório`: 1 botão.
  - `Calcular dimensionamento`: 1 botão.
  - `Limpar`: 1 botão.
  - `Carregar exemplo`: 1 botão.
- Botão flutuante `.floating-back-tools`: 1 elemento.
- Referências `getElementById(...)`: sem IDs faltantes.

## Arquivos alterados

- `calculadora-dimensionamento-cabos.html`

## Arquivos não alterados

- `ferramentas.html`
- `sitemap.xml`
- `style.css`
- `app.js`
- páginas de blog
- demais calculadoras/ferramentas

## Como subir

Para menor risco, subir somente o arquivo:

```text
calculadora-dimensionamento-cabos.html
```

Substitua o arquivo existente na raiz do site, na mesma pasta de `index.html`, `ferramentas.html` e `blog.html`.

O relatório `.md` é apenas para conferência e não precisa ser enviado para produção.

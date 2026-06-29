# Revisão da ferramenta de nível de caldeira

Arquivo revisado:

- `calculadora-nivel-caldeira-transmissor-dp.html`

Principais ajustes aplicados:

1. Troca da linguagem principal para tomada superior/inferior, mantendo tomada alta/baixa apenas como apoio de entendimento.
2. Reforço de aviso crítico: a ferramenta não dimensiona intertravamento, SIL, redundância, permissivos ou proteção da caldeira.
3. Correção da estrutura HTML do bloco de entrada, removendo formulário aberto sem fechamento.
4. Validação bloqueante para dados inválidos: 100% menor que 0%, densidades inválidas, raw máximo menor que raw mínimo, elevação superior menor que inferior e pressão acima da MAWP.
5. Validação de consistência entre distância física informada e diferença calculada pelas elevações das tomadas.
6. Validação de sequência de alarmes LLL, LL, HH e HHH.
7. Alerta quando pontos de alarme geram sinal fora da faixa típica 3,8–20,5 mA.
8. Checklist preliminar de comissionamento adicionado.
9. Memorial técnico ampliado com convenção HP/LP versus tomada superior/inferior, distância calculada e checklist mínimo.
10. Ajuste do exemplo de alta pressão para distância física coerente com as elevações.

Validações executadas:

- JSON-LD válido.
- 1 H1 na página.
- Sem links locais quebrados no arquivo revisado.
- Sem imagens locais quebradas no arquivo revisado.
- Sem ocorrências de CREA/CONFEA.
- JavaScript verificado com `node --check` e teste básico de cálculo/bloqueio.

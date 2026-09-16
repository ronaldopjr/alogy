# E06 — consolidação integral do inventário

- Commit de gatilho: `03be4e3760f8793e67f584c8781a0dae2aa755cb`
- Deltas aplicados: `E06-INVENTORY-DELTA-01.csv` a `E06-INVENTORY-DELTA-18.csv`.
- Linhas físicas preservadas: **272**.
- Paths canônicos únicos preservados: **271**.
- Cabeçalho preservado sem alteração.
- Cada um dos 18 paths foi encontrado exatamente uma vez no inventário canônico.
- Cada linha consolidada foi comparada com o respectivo delta após parse CSV.
- SHA-256 antes: `12e9e0d3e6729a7fd36c0190fad88862ea3500b209046ae67362a43ce0b883fa`
- SHA-256 depois: `12e9e0d3e6729a7fd36c0190fad88862ea3500b209046ae67362a43ce0b883fa`

## Paths consolidados

- `blog-ar-instrumentos-qualidade-ponto-orvalho.html` — E06-INVENTORY-DELTA-01.csv
- `blog-criticidade-instrumentos.html` — E06-INVENTORY-DELTA-04.csv
- `blog-erro-total-malha-instrumentacao.html` — E06-INVENTORY-DELTA-05.csv
- `blog-fat-sat-instrumentacao.html` — E06-INVENTORY-DELTA-06.csv
- `blog-gemeo-digital-instrumentacao.html` — E06-INVENTORY-DELTA-15.csv
- `blog-gemeo-digital-tags-instrumentacao.html` — E06-INVENTORY-DELTA-12.csv
- `blog-ia-na-industria.html` — E06-INVENTORY-DELTA-16.csv
- `blog-instrumentacao-industrial.html` — E06-INVENTORY-DELTA-03.csv
- `blog-manutencao-preditiva-instrumentacao-sensores.html` — E06-INVENTORY-DELTA-07.csv
- `blog-massa-tanque-nivel.html` — E06-INVENTORY-DELTA-08.csv
- `blog-potencia-bomba.html` — E06-INVENTORY-DELTA-11.csv
- `blog-pressao-hidrostatica-densidade.html` — E06-INVENTORY-DELTA-09.csv
- `blog-selo-remoto-capilar-nivel.html` — E06-INVENTORY-DELTA-10.csv
- `blog-solenoide-atuador-pneumatico-cv.html` — E06-INVENTORY-DELTA-02.csv
- `blog-teste-de-loop-instrumentacao.html` — E06-INVENTORY-DELTA-13.csv
- `calculadora-diagnostico-4-20ma-hart.html` — E06-INVENTORY-DELTA-14.csv
- `ferramentas-calibracao-instrumentacao.html` — E06-INVENTORY-DELTA-18.csv
- `ferramentas-instrumentacao-industrial.html` — E06-INVENTORY-DELTA-17.csv

## Regra de segurança

A consolidação aborta antes do commit se faltar delta, houver cabeçalho divergente, path ausente/duplicado, contagem de colunas inválida, mudança de contagem de linhas ou divergência entre a linha final e o delta correspondente.

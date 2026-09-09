const assert=require('node:assert/strict');
const {load}=require('./tool-calculations.cjs');
let e=load('vazamento-ar-comprimido');
assert.equal(e.text('q'),'2,52 Nm³/h');assert.equal(e.text('volm'),'1.816,61 Nm³/mês');assert.equal(e.text('custoM'),'R$ 145,33');
assert.match(e.nodes.leakChart.innerHTML,/5 mm/);assert.match(e.nodes.tab.innerHTML,/0,5 mm/);
e.set({qtd:2});e.run();assert.equal(e.text('q'),'5,05 Nm³/h');
e.set({press:0});e.run();assert.equal(e.text('q'),'0 Nm³/h');assert.match(e.text('nota'),/subcrítico/);
e.set({press:7,qtd:1,cd:.97});e.run();assert.equal(e.text('q'),'4,01 Nm³/h');
for(const bad of [{diam:0},{qtd:1.5},{horas:25},{dias:32},{cd:1.1},{temp:-273.15},{diam:'1e308'}]){e.set({diam:1,press:7,qtd:1,horas:24,dias:30,custo:.08,temp:20,cd:.61,...bad});e.run();assert.equal(e.text('q'),'—');assert.equal(e.nodes.tab.innerHTML,'');assert.doesNotMatch(e.nodes.leakChart.innerHTML,/<svg/);}

e=load('tempo-residencia-tanque');
assert.equal(e.text('r1'),'3,2 h');assert.equal(e.text('r2'),'3,2 h');assert.equal(e.text('r3'),'7,5 vezes/dia');assert.match(e.nodes.tankDiagram.innerHTML,/<svg/);
e.set({fator:70});e.run();assert.equal(e.text('r2'),'2,24 h');
for(const bad of [{vol:0},{util:101},{q:0},{fator:0},{vol:'1e308',q:'1e-308'}]){e.set({vol:10,util:80,q:2.5,fator:100,...bad});e.run();assert.equal(e.text('r1'),'—');assert.doesNotMatch(e.nodes.tankDiagram.innerHTML,/<svg/);assert.doesNotMatch(e.nodes.residenceChart.innerHTML,/<svg/);}

e=load('vazao-normalizada-gases');
assert.equal(e.text('gas_qop'),'518,00 m³/h');assert.equal(e.text('gas_qn'),'1.411,28 Nm³/h');assert.equal(e.text('gas_qs'),'1.488,79 Sm³/h');assert.equal(e.text('gas_massa'),'Não calculada (densidade = 0)');assert.match(e.nodes.gasChart.innerHTML,/<svg/);
e.set({gas_dens:.78});assert.equal(e.context.calcularGas(),true);assert.equal(e.text('gas_massa'),'1.100,80 kg/h');
e.set({gas_modo:'n',gas_q:1411.2849289096234,gas_dens:0});assert.equal(e.context.calcularGas(),true);assert.equal(e.text('gas_qop'),'518,00 m³/h');
for(const bad of [{gas_q:''},{gas_p:-2,gas_ptipo:'abs'},{gas_t:-273.15},{gas_zop:0},{gas_dens:-1},{gas_q:'1e308',gas_p:'1e308'}]){e.set({gas_modo:'op',gas_q:518,gas_p:2,gas_ptipo:'g',gas_t:25,gas_patm:1.01325,gas_zop:1,gas_dens:0,gas_tn:0,gas_pn:1.01325,gas_ts:15,gas_ps:1.01325,gas_zn:1,gas_zs:1,...bad});assert.equal(e.context.calcularGas(),false);assert.equal(e.text('gas_qop'),'—');assert.doesNotMatch(e.nodes.gasChart.innerHTML,/<svg/);}
console.log('Batch 2 graphics passed: leak regimes, tank scenarios, gas bases, invalid-state clearing and numerical examples.');

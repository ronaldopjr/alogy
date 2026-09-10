const assert=require('node:assert/strict');
const {load}=require('./tool-calculations.cjs');

let e=load('consumo-ar-comprimido');
assert.equal(e.context.calculateAir(),true);
assert.equal(e.text('mainResult'),'3,45 Nm³/h');
assert.equal(e.text('nlMinResult'),'57,51 NL/min');
assert.match(e.nodes.pneumaticDiagram.innerHTML,/<svg/);
assert.match(e.nodes.airConsumptionChart.innerHTML,/Por hora/);
e.set({mode:'single'});assert.equal(e.context.calculateAir(),true);assert.equal(e.text('mainResult'),'1,88 Nm³/h');
e.set({mode:'knownNlMin',knownNl:100,qty:2,duty:50,extra:0});assert.equal(e.context.calculateAir(),true);assert.equal(e.text('mainResult'),'6,00 Nm³/h');
for(const bad of [{bore:0},{rod:50},{qty:1.5},{duty:101},{hoursDay:25},{daysMonth:32},{pressure:-1},{bore:'1e308'}]){
  e.set({mode:'double',qty:1,bore:50,rod:20,stroke:200,cycles:10,pressure:6,duty:100,extra:15,hoursDay:8,daysMonth:22,cost:.08,compressor:60,...bad});
  assert.equal(e.context.calculateAir(),false);assert.equal(e.text('mainResult'),'—');assert.equal(e.nodes.sensitivityRows.innerHTML,'');assert.doesNotMatch(e.nodes.pneumaticDiagram.innerHTML,/<svg/);
}

e=load('custo-ar-comprimido');
assert.equal(e.context.calc(),true);assert.equal(e.text('kwh'),'4.646,4 kWh');assert.equal(e.text('custo'),'R$ 3.949,44');assert.equal(e.text('perdaCusto'),'R$ 789,89');assert.match(e.nodes.costChart.innerHTML,/Custo total/);
e.set({modo:'power',kw:22,q:'',esp:''});assert.equal(e.context.calc(),true);assert.equal(e.text('kwh'),'7.744 kWh');
for(const bad of [{q:0},{esp:0},{h:25},{d:32},{tarifa:-1},{perda:101},{q:''},{q:'1e308'}]){
  e.set({modo:'flow',q:2,esp:.11,kw:22,h:16,d:22,tarifa:.85,perda:20,...bad});
  assert.equal(e.context.calc(),false);assert.equal(e.text('kwh'),'—');assert.equal(e.nodes.tbl.innerHTML,'');assert.doesNotMatch(e.nodes.costChart.innerHTML,/<svg/);
}
e.set({modo:'power',kw:0,h:16,d:22,tarifa:.85,perda:20});assert.equal(e.context.calc(),false);assert.equal(e.text('kwh'),'—');

e=load('eficiencia-compressor');
assert.equal(e.context.calcComp(),true);assert.equal(e.text('esp'),'6,88 kW/(Nm³/min)');assert.equal(e.text('energiaM'),'19.360,0 kWh');assert.equal(e.text('custoM'),'R$ 16.456,00');assert.equal(e.text('status'),'Dentro da meta informada');assert.match(e.nodes.compressorChart.innerHTML,/Meta informada/);
e.set({meta:6});assert.equal(e.context.calcComp(),true);assert.equal(e.text('status'),'Acima da meta informada');
for(const bad of [{pot:0},{vazao:0},{press:-1},{horas:25},{dias:32},{custo:-1},{meta:0},{pot:''},{pot:'1e308'}]){
  e.set({pot:55,vazao:8,press:7,horas:16,dias:22,custo:.85,meta:7,...bad});
  assert.equal(e.context.calcComp(),false);assert.equal(e.text('esp'),'—');assert.equal(e.nodes.tab.innerHTML,'');assert.doesNotMatch(e.nodes.compressorChart.innerHTML,/<svg/);
}
console.log('Batch 3 graphics passed: pneumatic demand, air cost, compressor specific power and invalid-state clearing.');

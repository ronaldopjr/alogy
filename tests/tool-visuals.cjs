// Execute the actual page scripts against a DOM double, without network or browser.
const assert = require('node:assert/strict');
const {load} = require('./tool-calculations.cjs');
let e=load('perda-carga-filtro');
assert.equal(e.text('r1'),'35 kPa');
assert.equal(e.text('r2'),'41,67 %');
assert.match(e.nodes.filterChart.innerHTML,/35 kPa/);
e.set({q:40});e.run();assert.equal(e.text('r1'),'54,69 kPa');
e.set({exponent:1});e.run();assert.equal(e.text('r1'),'43,75 kPa');
e.set({q:50,dp:70});e.run();assert.equal(e.text('r3'),'Alarme atingido');
e.set({dp:5});e.run();assert.equal(e.text('r3'),'Abaixo da referência limpa');assert.equal(e.text('r2'),'-8,33 %');
for(const bad of [{q:0},{dpalarm:10},{dp:-1},{q:'1e-300',qref:'1e300'}]){
 e.set({q:50,qref:50,dp:35,dpalarm:70,exponent:2,...bad});e.run();
 assert.equal(e.text('r1'),'—');assert.doesNotMatch(e.nodes.filterChart.innerHTML,/<svg/);
}
e=load('potencia-exaustor-ventilador');
assert.equal(e.text('par'),'0,0583 kW');assert.equal(e.text('peixo'),'0,1061 kW');
assert.equal(e.text('corr'),'0,258 A');
const before=e.nodes.fanChart.innerHTML;
e.set({margem:100});e.run();assert.notEqual(e.nodes.fanChart.innerHTML,before);
assert.equal(e.text('par'),'0,0583 kW');
e.set({q:0});e.run();assert.equal(e.text('par'),'0 kW');assert.match(e.nodes.fanChart.innerHTML,/<svg/);
for(const bad of [{ef:101},{fp:1.1},{tensao:0},{margem:-1},{q:'1e308',dp:'1e308'}]){
 e.set({q:1400,dp:150,ef:55,fp:.75,tensao:380,margem:20,...bad});e.run();
 assert.equal(e.text('par'),'—');assert.doesNotMatch(e.nodes.fanChart.innerHTML,/<svg/);
}
e=load('4-20ma');
const trigger=id=>e.nodes[id].events.input.forEach(fn=>fn());
assert.match(e.nodes.signalChart.innerHTML,/500/);
e.set({lrv:0,urv:10,mode:'ma',inputValue:12});trigger('inputValue');
assert.equal(e.text('resEng'),'5,00 °C');assert.match(e.nodes.signalChart.innerHTML,/<circle/);
e.set({signalSweep:20});trigger('signalSweep');assert.equal(e.text('resMa'),'20,000 mA');assert.equal(e.text('resEng'),'10,00 °C');
e.set({lrv:100,urv:0,inputValue:8});trigger('inputValue');assert.equal(e.text('resEng'),'75,00 °C');
e.set({inputValue:24});trigger('inputValue');assert.match(e.nodes.signalChart.innerHTML,/extrapolação/);assert.doesNotMatch(e.nodes.signalChart.innerHTML,/<circle/);
e.set({unit:'<img src=x onerror=alert(1)>',inputValue:12});trigger('unit');
for(const id of ['signalChart','rangeTable','classicGrid'])assert.doesNotMatch(e.nodes[id].innerHTML,/<img/,'escape unit in '+id);
for(const bad of [{lrv:''},{urv:100},{lrv:'-1e308',urv:'1e308'},{urv:1000,inputValue:'1e308',mode:'percent'}]){
 e.set({lrv:100,urv:0,inputValue:12,mode:'ma',...bad});trigger('inputValue');
 assert.equal(e.text('resMa'),'-');assert.doesNotMatch(e.nodes.signalChart.innerHTML,/<svg/);
}
e.set({lrv:0,urv:10,mode:'ma',inputValue:12,unit:'bar'});trigger('inputValue');
assert.equal(e.text('resEng'),'5,00 bar');assert.match(e.nodes.signalChart.innerHTML,/<svg/);
console.log('3 graphic integrations passed: numeric examples, input synchronization, slider, reversed range, extrapolation, invalid recovery and escaped labels.');

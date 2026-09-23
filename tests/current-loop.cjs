const assert = require('node:assert/strict');
const {parseNumber,calculate,table}=require('../calculator-4-20ma-core.js');
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-9,`${actual} != ${expected}`);
for(const [raw,value] of [['8,4',8.4],['8.4',8.4],['−50',-50],['1e3',1000],['.5',.5],['0',0]])assert.equal(parseNumber(raw),value);
for(const raw of ['', ' ', '1,2,3','1.000,5','1,000.5','0x10','1e999','Infinity','4mA','--1'])assert.ok(Number.isNaN(parseNumber(raw)),raw);
const anchor=calculate(0,10,8.4,'ma');near(anchor.eng,2.75);near(anchor.percent,27.5);
for(const [ma,pct,value] of [[4,0,0],[8,25,2.5],[12,50,5],[16,75,7.5],[20,100,10]]){
 const r=calculate(0,10,ma,'ma');near(r.percent,pct);near(r.eng,value);assert.ok(r.inRange);
 near(calculate(0,10,value,'eng').ma,ma);near(calculate(0,10,pct,'percent').ma,ma);
}
near(calculate(-50,150,12,'ma').eng,50);
near(calculate(100,0,8,'ma').eng,75);
assert.equal(calculate(100,0,20,'ma').eng,0);
assert.equal(calculate(0,0,12,'ma').valid,false);
assert.equal(calculate(0,10,NaN,'ma').valid,false);
assert.equal(calculate(-1e308,1e308,12,'ma').valid,false);
assert.equal(calculate(0,10,3,'ma').inRange,false);
assert.equal(calculate(0,10,21,'ma').inRange,false);
near(calculate(0,10,21,'ma').percent,106.25);
near(calculate(0,10,3,'ma').eng,-.625);
near(calculate(0,1e-8,12,'ma').eng,5e-9);
assert.equal(table(0,10).length,9);
assert.equal(table(100,0)[8].eng,0);
for(let i=1;i<=200;i++){
 const lrv=-i*3.75,urv=i%2?i*7.9:-i*8.2,ma=3+i*.095;
 const r=calculate(lrv,urv,ma,'ma');
 near(calculate(lrv,urv,r.eng,'eng').ma,ma);
 near(calculate(lrv,urv,r.percent,'percent').eng,r.eng);
}
console.log('PASS: decimal parsing, endpoints, all conversion modes, reverse/negative ranges, extrapolation, invalid inputs, overflow and 200 round trips.');

const assert=require('node:assert/strict');
const {number,points,summary}=require('../field-sheet-core.js');
assert.equal(number(''),null);assert.equal(number(' -12,5 '),-12.5);assert.equal(number('12abc'),null);assert.equal(number('Infinity'),null);
for(const n of [4,5,6,10]){const ps=points('0','500',n);assert.equal(ps.length,n);assert.equal(ps[0].nominal,0);assert.equal(ps.at(-1).nominal,500);ps.forEach((p,i)=>assert.ok(Math.abs(p.nominal-500*i/(n-1))<1e-10));}
assert.ok(Math.abs(points(0,500,10)[1].nominal-500/9)<1e-10);assert.equal(points(0,500,0,10).length,11);assert.deepEqual(points(-100,100,3).map(p=>p.nominal),[-100,0,100]);assert.equal(points('0,5','1,5',3)[1].nominal,1);assert.throws(()=>points(0,0,5));assert.throws(()=>points(0,10,1));assert.throws(()=>points(0,10,3.5));
assert.deepEqual(summary([{ref:'',ind:''}]),{count:0,incomplete:0});assert.deepEqual(summary([{ref:'1',ind:''}]),{count:0,incomplete:1});assert.deepEqual(summary([{ref:'10',ind:'11'},{ref:'12',ind:'14'},{ref:'',ind:'9'}]),{count:2,incomplete:1,ref:11,ind:12.5,difference:1.5});assert.equal(summary([{ref:'0',ind:'0'}]).count,1);
console.log('field-sheet core: calculations, blank values and paired readings passed');

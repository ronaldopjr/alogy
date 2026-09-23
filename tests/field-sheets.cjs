// Run: node tests/field-sheets.cjs. No browser or external dependency required.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const C = require('../assets/fichas/core.js');
function stateFor(kind) {
  const html = fs.readFileSync(path.join(root, `ficha-calibracao-${kind}.html`), 'utf8');
  const state = {version:1,kind,id:'test',unit:'',settings:{low:'',high:'',mode:kind==='ph'?'manual':'count',count:'5',step:'10',manual:'',repeats:'3',digits:'2'},meta:{},readings:{}};
  for (const match of html.matchAll(/<(input)\b([^>]*)>|<(select|textarea)\b([^>]*)>([\s\S]*?)<\/(?:select|textarea)>/g)) {
    const tag=match[1]||match[3], body=match[5]||'';
    const attrs = Object.fromEntries([...(match[2]||match[4]).matchAll(/([\w-]+)="([^"]*)"/g)].map(m=>[m[1],m[2]]));
    if(!attrs['data-meta']&&!attrs['data-setting'])continue;
    let value=attrs.value??'';
    if(tag==='textarea')value=body;
    if(tag==='select'){const opt=body.match(/<option(?: value="([^"]*)")?[^>]*>([^<]*)/);value=opt?.[1]??opt?.[2]??'';}
    if(attrs.id==='unit')state.unit=value;
    else state[attrs['data-meta']?'meta':'settings'][attrs['data-meta']||attrs['data-setting']]=value;
  }
  return state;
}
function printer(context) {
  const sandbox={FieldSheetsCore:C,document:{createElement:()=>({getContext:()=>context||{measureText:s=>({width:s.length*4.8})}})}};
  sandbox.window=sandbox;
  vm.runInNewContext(fs.readFileSync(path.join(root,'assets/fichas/print.js'),'utf8'),sandbox);
  return sandbox.FieldSheetsPrint;
}
function tests(){
  for(const count of [2,4,5,6,10,50]){
    const p=C.generate(0,500,count);
    assert.equal(p.length,count);assert.equal(p[0].nominal,0);assert.equal(p.at(-1).nominal,500);
    p.forEach((v,i)=>{assert.ok(Math.abs(v.nominal-500*i/(count-1))<1e-9);assert.ok(Math.abs(v.percent-100*i/(count-1))<1e-9);});
  }
  assert.deepEqual(C.generate(-100,100,5).map(p=>p.nominal),[-100,-50,0,50,100]);
  for(const n of [0,1,51,4.5,null])assert.throws(()=>C.generate(0,500,n));
  for(const range of [[0,0],[2,1],[NaN,1]])assert.throws(()=>C.generate(...range,5));
  for(const v of ['', ' ', 'NaN','Infinity','1.000,50','1,000.50','1e2','12abc'])assert.equal(C.number(v),null);
  assert.equal(C.number('-0,25'),-.25);assert.equal(C.number('0'),0);
  assert.equal(C.format(-.0001,2),'0,00');
  const unordered=[{nominal:10,percent:100},{nominal:0,percent:0},{nominal:5,percent:50}];
  assert.deepEqual(C.sequence(unordered,'Subida').map(r=>r.point.nominal),[0,5,10]);
  assert.deepEqual(C.sequence(unordered,'Descida').map(r=>r.point.nominal),[10,5,0]);
  assert.deepEqual(C.sequence(unordered,'Sequência informada').map(r=>r.index),[0,1,2]);
  assert.deepEqual(C.sequence(unordered,'Subida e descida').map(r=>r.index),[1,2,0,0,2,1]);
  const state=stateFor('temperatura');
  const balance=stateFor('balanca');
  assert.deepEqual(C.points(balance.settings,'balanca').map(p=>p.nominal),[0,25,50,75,100]);
  for(const test of ['repetibilidade','excentricidade']){
    const p=C.points({...balance.settings,test,count:'6',testLoad:'20'},'balanca');
    assert.equal(p.length,6);assert.ok(p.every(x=>x.nominal===20&&x.percent===20));
    assert.equal(p[0].label,test==='repetibilidade'?'Repetição 1':'Posição 1');
    assert.throws(()=>C.points({...balance.settings,test,testLoad:'101'},'balanca'));
    assert.throws(()=>C.points({...balance.settings,test,testLoad:'0'},'balanca'));
  }
  assert.throws(()=>C.points({...balance.settings,mode:'manual',manual:'0; 101'},'balanca'));
  assert.throws(()=>C.points({...balance.settings,low:'-1'},'balanca'));
  const stepped=C.points({...state.settings,mode:'step',step:'10'},'temperatura');
  assert.equal(stepped.length,11);assert.equal(stepped[1].nominal,50);
  assert.throws(()=>C.points({...state.settings,mode:'step',step:'30'},'temperatura'));
  assert.deepEqual(C.points({...state.settings,mode:'manual',manual:'0; 12,5\n500'},'temperatura').map(p=>p.nominal),[0,12.5,500]);
  assert.equal(C.summary([{reference:'0',indication:'1'},{reference:'',indication:'9'}]).count,1);
  assert.equal(C.summary([{reference:'0',indication:'1'},{reference:'10',indication:'11'}]).error,1);
  assert.equal(C.summary([{reference:'',indication:''}]).reference,null);
  assert.equal(C.fingerprint(state),C.fingerprint({...state,settings:{...state.settings,digits:'4'}}));
  const P=printer();
  for(const kind of ['temperatura','pressao','ph','vazao','balanca']){
    const s=stateFor(kind),p=C.points(s.settings,kind);
    assert.ok(p.length>=3);
    if(kind==='ph'){assert.deepEqual(p.map(x=>x.nominal),[4.01,7,10.01]);assert.ok(p.every(x=>x.percent===null));}
    for(const count of [5,10,50])for(const repeats of ['1','3','5'])for(const direction of ['Subida','Descida','Subida e descida']){
      if(kind!=='ph')s.settings.count=String(count);
      s.settings.repeats=repeats;s.meta.direction=direction;
      const points=C.points(s.settings,kind),pages=P.make(s,points,kind,kind,false);
      assert.ok(pages.length>0);
      for(const [index,page] of pages.entries()){
        const text=page.filter(c=>c.type==='text').map(c=>c.text).join(' ');
        assert.match(text,/CONDIÇÕES AMBIENTAIS/);assert.match(text,/Umidade/);assert.match(text,/Temperatura/);assert.doesNotMatch(text,/ALOGY|Guia de Instrumentação/i);
        assert.match(text,new RegExp(`Folha ${index+1} de ${pages.length}`));
        for(const command of page){assert.ok(command.y<=584);if(command.type==='rect')assert.ok(command.y+command.height<=568);}
      }
      const labels=pages.flat().filter(c=>c.type==='text'&&c.x===109&&c.size===8&&!c.bold).map(c=>c.text);
      assert.equal(labels.length,points.length*(direction==='Subida e descida'?2:1));
    }
    s.meta.direction=kind==='ph'?'Sequência informada':'Subida';s.settings.count='5';s.settings.repeats='3';
    s.readings[`0:${s.meta.direction}`]={pairs:[{reference:'123,4567',indication:'124,5678',temperature:'22,2'}],note:'Leitura de teste',buffer:'Tampão lote 123'};
    const blank=P.make(s,C.points(s.settings,kind),kind,kind,false).flat().map(c=>c.text||'').join(' ');
    const filled=P.make(s,C.points(s.settings,kind),kind,kind,true).flat().map(c=>c.text||'').join(' ');
    assert.doesNotMatch(blank,/123,4567|Leitura de teste/);assert.match(filled,/123,4567/);assert.match(filled,/Média P/);
    if(kind==='ph')assert.match(blank,/Tampão lote 123/);
    s.meta.date='2026-09-23';s.meta.notes='ΔP registrado\nSegunda linha';
    const unicode=P.make(s,C.points(s.settings,kind),kind,kind,false).flat().filter(c=>c.type==='text').map(c=>c.text).join(' ');
    assert.match(unicode,/23\/09\/2026/);assert.match(unicode,/ΔP registrado/);assert.match(unicode,/Segunda linha/);
    if(kind!=='ph')assert.match(unicode,/Faixa:/);
  }
  console.log('Field sheets: point generation, validation, averages, blank/filled output and 135 pagination scenarios passed.');
}
if(require.main===module)tests();
module.exports={stateFor,printer};

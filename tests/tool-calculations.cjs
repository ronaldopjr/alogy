// Numerical and invalid-input regressions; no browser, network or dependencies.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
function attrs(source) {
  return Object.fromEntries([...source.matchAll(/([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(m=>[m[1],m[2]??m[3]]));
}
function element(a={}) {
  let html='';
  return {
    attrs:a, value:a.value??'', checked:false, hidden:false, style:{}, children:[], events:{},
    get innerHTML(){return html;}, set innerHTML(v){html=String(v);this.children=[];this.onHTML?.(html);},
    get textContent(){return html.replace(/<[^>]*>/g,'');},set textContent(v){html=String(v);this.children=[];},
    get innerText(){return this.textContent;},
    classList:{add(){},remove(){}},
    setAttribute(k,v){a[k]=v;},hasAttribute(k){return k in a;},
    appendChild(n){this.children.push(n);},
    insertAdjacentHTML(where,s){this.innerHTML+=s;},
    addEventListener(k,fn){(this.events[k]??=[]).push(fn);},
    querySelectorAll(){return [];}
  };
}
function load(name) {
  const html=fs.readFileSync(path.join(root,'calculadora-'+name+'.html'),'utf8');
  const nodes={}, controls=[], events={};
  let sandbox;
  function parseNodes(markup){
  for(const m of markup.matchAll(/<(\w+)\b([^>]*)>/g)) {
    const a=attrs(m[2]);
    if(!a.id)continue;
    nodes[a.id]=element(a);
    nodes[a.id].onHTML=parseNodes;
    if(sandbox)sandbox[a.id]=nodes[a.id];
    if(['input','select','textarea'].includes(m[1]))controls.push(nodes[a.id]);
  }
  }
  parseNodes(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,''));
  for(const m of html.matchAll(/<select\b([^>]*)>([\s\S]*?)<\/select>/g)) {
    const id=attrs(m[1]).id, opts=[...m[2].matchAll(/<option\b([^>]*)>([^<]*)/g)];
    const option=opts.find(o=>/\bselected\b/.test(o[1]))??opts[0];
    if(nodes[id]&&option)nodes[id].value=attrs(option[1]).value??option[2].trim();
  }
  const grid=element(),layout=element(),copies=[];
  const document={
    body:layout,
    getElementById:id=>nodes[id]??null,
    createElement:()=>element(),
    querySelector:s=>s==='.calc-grid'?grid:layout,
    querySelectorAll:s=>s.includes('input')?controls:[],
    addEventListener(k,fn){(events[k]??=[]).push(fn);}
  };
  sandbox={...nodes,document,console,alert(){},navigator:{clipboard:{writeText(t){copies.push(t);return Promise.resolve();}}}};
  sandbox.window=sandbox;
  sandbox.addEventListener=document.addEventListener;
  const context=vm.createContext(sandbox);
  if(html.includes('src="tool-visuals.js'))vm.runInContext(fs.readFileSync(path.join(root,'tool-visuals.js'),'utf8'),context);
  if(html.includes('src="tool-validation.js'))vm.runInContext(fs.readFileSync(path.join(root,'tool-validation.js'),'utf8'),context);
  for(const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    if(/\bsrc\s*=|ld\+json/.test(m[1]))continue;
    vm.runInContext(m[2],context,{filename:name});
  }
  for(const cb of events.DOMContentLoaded??[])cb();
  return {nodes,context,controls,grid,copies,
    set(values){for(const [id,v] of Object.entries(values))nodes[id].value=String(v);},
    run(){(context.calcSinais??context.calcCorrente??context.calcFP??context.calcQT??context.calcularFonte24??context.calcular??context.calc)();},
    text(id){return nodes[id].textContent;},
    value(id){return Number(nodes[id].textContent.match(/[+-]?[\d.,]+/)?.[0].replace(/\./g,'').replace(',','.'));}
  };
}
const guarded=['conversao-sinais-industriais','histerese-pressostato-termostato','selo-remoto-capilar-dp','pressao-hidrostatica-densidade','emissividade-termografia','termopoco-tempo-resposta','rotametro-correcao-vazao','calibracao-indicador-controlador','calibracao-termostato','calibracao-chave-nivel','calibracao-chave-fluxo','calibracao-pressostato','calibracao-balanca-industrial','calibracao-valvula-controle','intervalo-calibracao-deriva','bateria-ups-24vcc','modbus-polling','tempo-transmissao-serial-industrial','corrente-trifasica','correcao-fator-potencia','queda-de-tensao','queda-tensao-24vcc','fonte-24vcc-painel-automacao'];
const toleranceTools=['calibracao-medidor-vazao-magnetico','calibracao-radar-ultrassonico-nivel','calibracao-medidor-vazao-coriolis','calibracao-totalizador-vazao','calibracao-medidor-vazao-ultrassonico'];
guarded.push('perda-carga-filtro','potencia-exaustor-ventilador');
let invalidCases=0;
for(const name of guarded){
  const e=load(name);
  assert.ok(e.grid.children.every(n=>n.hidden),name+' defaults valid');
  for(const field of e.controls.filter(n=>n.attrs.type==='number'||n.required)){
    const old=field.value;
    for(const invalid of ['', 'not-a-number', '12abc', 'Infinity']){
      field.value=invalid;e.run();
      assert.ok(e.grid.children.some(n=>!n.hidden&&/Preencha/.test(n.textContent)),name+' field '+field.attrs.id+' rejects '+invalid+' '+JSON.stringify(e.grid.children.map(n=>n.textContent)));
      assert.equal(field.attrs['aria-invalid'],'true');
      invalidCases++;
    }
    field.value=old;e.run();assert.ok(e.grid.children.every(n=>n.hidden),name+' recovery');
  }
}
for(const name of [...guarded,...toleranceTools]){
  const e=load(name);
  assert.ok(!Object.values(e.nodes).some(n=>/NaN|Infinity/.test(n.textContent)),name+' finite defaults');
  const status=e.context.st??e.context.okWarn;
  if(status){
    assert.match(status(0.2,0.2),/Dentro do limite/);
    assert.match(status(0.20001,0.2),/Fora do limite/);
    assert.match(status(0.21,0.2),/Fora do limite/);
  }
}
let e=load('conversao-sinais-industriais');
assert.equal(e.text('pct'),'50,00 %');assert.equal(e.text('eng'),'50,00');
e.set({lrv:100,urv:0,valor:8});e.run();assert.equal(e.text('eng'),'75,00');
e.nodes.inverter.checked=true;e.run();assert.equal(e.text('eng'),'25,00');
e.set({smax:4});e.run();assert.equal(e.text('pct'),'—');assert.equal(e.nodes.eqtab.innerHTML,'');
e.context.copyResumo();assert.equal(e.copies.length,0,'invalid result not copied');
e.set({smax:20});e.context.copyResumo();assert.equal(e.copies.length,1,'copy refreshes current inputs');
e=load('pressao-hidrostatica-densidade');e.set({rho:1000,h:10,g:9.80665,span:98.0665});e.run();
assert.equal(e.text('r3'),'20 mA');assert.equal(e.text('r4'),'100 %');
e.set({span:0});e.run();assert.equal(e.text('r3'),'—');
e=load('selo-remoto-capilar-dp');e.set({rhoFill:1000,dh:1,span:100,rhoProc:1000,cap:0,dt:0,coef:0,lim:2});e.run();
assert.match(e.text('resultado'),/98,07 mbar/);e.set({span:0});e.run();assert.equal(e.text('resultado'),'Dados inválidos');
e=load('rotametro-correcao-vazao');e.set({qind:100,pcal:1,pact:4,tcal:20,tact:20});e.run();
assert.match(e.text('r1'),/^50 /);assert.match(e.text('r4'),/^200 /);
e.set({pact:0});e.run();assert.equal(e.text('r1'),'—');
e=load('emissividade-termografia');e.set({tap:100,tref:20,eps:1});e.run();assert.equal(e.text('r1'),'100.0 °C');
e.set({eps:1.1});e.run();assert.equal(e.text('r1'),'—');
e.set({eps:.1,tap:0,tref:100});e.run();assert.equal(e.text('r1'),'—');
e=load('termopoco-tempo-resposta');e.set({tauBase:10});e.run();assert.match(e.text('r95'),/^30,0 s/);assert.match(e.text('r99'),/^46,1 s/);
e.set({diam:24,vel:3});e.run();assert.match(e.text('rTau'),/^10,0 s/,'do not invent a geometric correction to measured tau');
e=load('intervalo-calibracao-deriva');e.set({e1:.15,e2:.45,meses:12,tol:1,fs:80});e.run();assert.equal(e.text('r2'),'14.0 meses');
e.set({e1:.45});e.run();assert.equal(e.text('r2'),'Indeterminado');
e.set({e2:.9});e.run();assert.equal(e.text('r2'),'0.0 meses');
e.set({meses:0});e.run();assert.equal(e.text('r2'),'—');
e=load('histerese-pressostato-termostato');e.set({tipo:'alta',sp:10,reset:8,atual:9,range:20});e.run();assert.match(e.text('r4'),/histerese/);assert.equal(e.text('r2'),'10 %');
e.set({reset:11});e.run();assert.equal(e.text('r4'),'Dados inválidos');
e=load('calibracao-valvula-controle');e.set({modo:'ma',valor:12,maMin:4,maMax:20,curso:100,real:50,tol:1,acao:'direta'});e.run();
assert.match(e.text('status'),/Aprovado matematicamente/);e.set({maMax:4});e.run();assert.equal(e.text('rMa'),'—');assert.equal(e.nodes.tabela.innerHTML,'');
e.context.copiarResultado();assert.equal(e.copies.length,0);
e=load('calibracao-balanca-industrial');e.set({celulas:2.5});e.run();assert.equal(e.text('r4'),'Dados inválidos');
e=load('calibracao-radar-ultrassonico-nivel');e.set({altura:10,lrv:0,urv:10,distref:5,nivelind:5,ma:20,tol:1});e.run();assert.match(e.text('r4'),/Fora do limite/,'wrong analog output cannot pass on level indication alone');
e=load('calibracao-medidor-vazao-coriolis');e.set({qref:1000,qind:1000,vref:1000,vind:1000,tempo:60,tol:1});e.run();assert.match(e.nodes.tbl.innerHTML,/1\.000,000 kg\/h/);assert.doesNotMatch(e.nodes.tbl.innerHTML,/m³\/h/);
e=load('bateria-ups-24vcc');e.set({corrente:1,aut:1,dod:50,der:0,rend:100});e.run();assert.equal(e.text('ah'),'2 Ah em 24 V');e.set({rend:110});e.run();assert.equal(e.text('ah'),'—');
e=load('modbus-polling');e.set({baud:9600,dev:1,regs:1,bits:11,gap:0});e.run();assert.equal(e.text('bytes'),'15 bytes');assert.equal(e.text('ciclo'),'25 ms');e.set({regs:126});e.run();assert.equal(e.text('ciclo'),'—');e.set({regs:1,dev:1.5});e.run();assert.equal(e.text('ciclo'),'—');
e=load('tempo-transmissao-serial-industrial');e.set({baud:1000,bytes:10,bits:10,msgs:2,gap:0});e.run();assert.equal(e.text('tmsg'),'100 ms');assert.equal(e.text('tciclo'),'200 ms');
e=load('corrente-trifasica');e.set({ct_modo:'kw',ct_valor:Math.sqrt(3)*.38*10,ct_tensao:380,ct_fp:1,ct_rend:90,ct_sistema:'tri'});e.run();assert.equal(e.text('ct_i'),'10,00 A');e.set({ct_fp:0});e.run();assert.equal(e.text('ct_i'),'—');
e=load('correcao-fator-potencia');e.set({fp_p:100,fp_atual:.8,fp_desejado:1,fp_tensao:400,fp_freq:50,fp_meta:'exato',fp_sistema:'tri',fp_ligacao:'delta'});e.run();assert.equal(e.text('r_qc'),'75,00 kVAr');assert.equal(e.text('r_sdepois'),'100,00 kVA');
e.set({fp_atual:.95,fp_desejado:.9});e.run();assert.equal(e.text('r_qc'),'0,00 kVAr');assert.equal(e.text('r_iantes'),e.text('r_idepois'),'no bank means no change in current');
e.set({fp_freq:0});e.run();assert.equal(e.text('r_cap'),'—');e.context.copiarFP();assert.equal(e.copies.length,0);
e=load('queda-de-tensao');e.set({qt_modo:'corrente',qt_valor:10,qt_tensao:100,qt_fp:1,qt_comp:100,qt_limite:4,qt_temp:20,qt_secao:1,qt_x:0,qt_paralelos:1,qt_sistema:'mono',qt_mat:'cu'});e.run();assert.equal(e.text('qt_vdrop'),'34,48 V');e.set({qt_tensao:0});e.run();assert.equal(e.text('qt_vdrop'),'—');
e=load('queda-tensao-24vcc');e.set({tensaoFonte:24,tensaoMin:12,corrente:1,distancia:100,secao:1,temperatura:20,material:.0175,entrada:'A'});e.run();assert.equal(e.text('quedaOut'),'3,50 V');e.set({tensaoMin:25});e.run();assert.equal(e.text('quedaOut'),'—');
e=load('fonte-24vcc-painel-automacao');assert.equal(e.context.nextStd([10,20,100],150),150,'never suggest an undersized last catalogue item');e.set({ma0:200000});e.run();assert.match(e.text('resultadoRapido'),/acima da tabela/);e.set({qtd0:-1});e.run();assert.equal(e.text('resultadoRapido'),'Dados inválidos');e.context.copiarMemorial();assert.equal(e.copies.length,0);
console.log(`30 calculators: defaults, tolerance boundaries and numerical scenarios passed; ${invalidCases} invalid-input cases rejected.`);
module.exports = {load};

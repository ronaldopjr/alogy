// State/event integration without a browser. Visual/mobile checks remain separate.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const {stateFor}=require('./field-sheets.cjs');
const root=path.join(__dirname,'..'),storage=new Map();
function load(kind,options={}){
 const initial=stateFor(kind),html=fs.readFileSync(path.join(root,`ficha-calibracao-${kind}.html`),'utf8'),nodes={},meta=[],settings=[];
 function element(id){return {id,value:'',dataset:{},hidden:false,disabled:false,innerHTML:'',textContent:'',events:{},setAttribute(){},classList:{toggle(){}},closest(){return this;},focus(){},addEventListener(name,fn){this.events[name]=fn;}};}
 for(const match of html.matchAll(/\bid="([^"]+)"/g))nodes[match[1]]=element(match[1]);
 for(const [id,value] of Object.entries(initial.meta)){const n=nodes[id];n.value=value;n.dataset.meta=id;meta.push(n);}
 nodes.unit.value=initial.unit;nodes.unit.dataset.meta='unit';meta.push(nodes.unit);
 for(const [id,value] of Object.entries(initial.settings)){if(!nodes[id])continue;const n=nodes[id];n.value=value;n.dataset.setting=id;settings.push(n);}
 nodes.outputMode.value='blank';
 nodes['sheet-form'].querySelectorAll=s=>s==='[data-meta]'?meta:settings;
 let confirms=0,answer=true;
 const sandbox={console,structuredClone,FieldSheetsCore:require('../assets/fichas/core.js'),setTimeout(){return 1;},clearTimeout(){},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>{if(options.blockStorage)throw Error('Blocked');storage.set(k,v);},removeItem:k=>storage.delete(k)},document:{body:{dataset:{kind,title:kind}},getElementById:id=>nodes[id]||null,querySelectorAll:()=>[],createElement:()=>({getContext:()=>({measureText:s=>({width:s.length*4.8})})})}};
 sandbox.window=sandbox;sandbox.addEventListener=()=>{};sandbox.confirm=()=>{confirms++;return answer;};
 const context=vm.createContext(sandbox);
 for(const file of ['print.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,'assets/fichas',file),'utf8'),context);
 const event=(id,name,arg={})=>nodes[id].events[name]?.(arg);
 return {nodes,event,get confirms(){return confirms;},setAnswer:v=>answer=v,state:()=>JSON.parse(storage.get('alogy-field-sheet-v1-'+kind)),input(id,value){const el=nodes[id];el.value=value;event('sheet-form','input',{target:el});},reading(property,value,index=0){const dataset={row:`${index}:${initial.meta.direction}`};if(['reference','indication','temperature'].includes(property)){dataset.reading=property;dataset.rep='0';}else dataset.property=property;event('sheet-form','input',{target:{value,dataset}});}};
}
(async()=>{
 for(const kind of ['temperatura','pressao','ph','vazao','balanca']){
  const t=load(kind);assert.equal(t.nodes['download-pdf'].disabled,false,kind+' initial export');
  t.reading('reference','12,5');t.reading('indication','12,7');
  assert.equal(Object.values(t.state().readings)[0].pairs[0].indication,'12,7','saved before debounce');
  t.input('digits','4');assert.equal(t.confirms,0);assert.equal(Object.keys(t.state().readings).length,1);
  t.setAnswer(false);t.input('channel','B');assert.equal(t.confirms,1);assert.equal(t.nodes.channel.value,'');
  t.setAnswer(true);t.input('channel','B');assert.equal(Object.keys(t.state().readings).length,0);
  t.reading('reference','invalid');t.nodes.outputMode.value='filled';t.event('outputMode','change');assert.equal(t.nodes['download-pdf'].disabled,true);
  t.nodes.outputMode.value='blank';t.event('outputMode','change');assert.equal(t.nodes['download-pdf'].disabled,false);
  t.input('humidityStart','101');assert.equal(t.nodes['download-pdf'].disabled,true);t.input('humidityStart','50');assert.equal(t.nodes['download-pdf'].disabled,false);
  const restored=load(kind);assert.equal(restored.nodes.humidityStart.value,'50');assert.equal(Object.keys(restored.state().readings).length,1);
  restored.event('duplicate','click');assert.equal(restored.state().meta.humidityStart,'');assert.equal(Object.keys(restored.state().readings).length,0);
  const before=JSON.stringify(restored.state());
  await restored.event('backup-file','change',{target:{files:[{size:100,text:async()=>JSON.stringify({version:1,kind,meta:{},settings:{},readings:{}})}],value:'test'}});
  assert.equal(JSON.stringify(restored.state()),before);assert.match(restored.nodes['save-status'].textContent,/Não foi possível abrir/);
 }
 const ph=load('ph');ph.reading('buffer','Lote 456');ph.setAnswer(false);ph.input('manual','4;7');assert.equal(ph.confirms,1);assert.equal(Object.values(ph.state().readings)[0].buffer,'Lote 456');
 // Reproduce the browser failure: configuration changes while environmental input is invalid.
 storage.clear();const stale=load('temperatura');stale.input('humidityStart','101');stale.input('count','6');stale.input('humidityStart','50');
 assert.equal((stale.nodes['reading-cards'].innerHTML.match(/data-row-card=/g)||[]).length,6);
 assert.match(stale.nodes['reading-cards'].innerHTML,/100,00 °C/);assert.doesNotMatch(stale.nodes['reading-cards'].innerHTML,/125,00 °C/);
 stale.input('high','');assert.equal(stale.nodes['reading-cards'].innerHTML,'');stale.input('high','500');assert.equal((stale.nodes['reading-cards'].innerHTML.match(/data-row-card=/g)||[]).length,6);
 // Invalid backups must leave the existing draft untouched.
 const valid=structuredClone(stale.state());const original=JSON.stringify(valid);
 async function restore(t,data){await t.event('backup-file','change',{target:{files:[{size:1000,text:async()=>JSON.stringify(data)}],value:'test'}});}
 for(const modify of [s=>s.readings['49:Subida']={pairs:[]},s=>s.readings['0:Descida']={pairs:[]},s=>s.readings['0:Subida']={pairs:Array.from({length:4},()=>({}))},s=>s.readings['0:Subida']={pairs:[null]}]){
  const bad=structuredClone(valid);modify(bad);await restore(stale,bad);assert.equal(JSON.stringify(stale.state()),original);assert.match(stale.nodes['save-status'].textContent,/Não foi possível abrir/);
 }
 const one=load('pressao'),two=load('pressao');one.input('tag','PT-101');two.input('tag','PT-202');
 assert.equal(one.state().meta.tag,'PT-101');assert.match(two.nodes['save-status'].textContent,/outra aba/);
 const blocked=load('vazao',{blockStorage:true});await restore(blocked,stateFor('vazao'));assert.match(blocked.nodes['save-status'].textContent,/não conseguiu salvar/);assert.doesNotMatch(blocked.nodes['save-status'].textContent,/Backup aberto e salvo/);
 storage.clear();const scale=load('balanca');scale.input('test','repetibilidade');scale.input('count','6');scale.input('testLoad','25');
 assert.equal(scale.state().settings.repeats,'1');assert.equal(scale.state().meta.direction,'Sequência informada');assert.equal(scale.nodes['download-pdf'].disabled,false);
 assert.equal((scale.nodes['reading-cards'].innerHTML.match(/data-row-card=/g)||[]).length,6);assert.match(scale.nodes['reading-cards'].innerHTML,/Repetição 6 · 25,00 kg/);
 scale.input('test','excentricidade');assert.match(scale.nodes['reading-cards'].innerHTML,/Posição 6/);
 scale.input('testLoad','101');assert.equal(scale.nodes['download-pdf'].disabled,true);scale.input('testLoad','25');assert.equal(scale.nodes['download-pdf'].disabled,false);
 scale.input('zeroStart','abc');assert.equal(scale.nodes['download-pdf'].disabled,true);scale.input('zeroStart','0');assert.equal(scale.nodes['download-pdf'].disabled,false);
 const scaleReloaded=load('balanca');assert.equal(scaleReloaded.nodes.test.value,'excentricidade');assert.equal(scaleReloaded.nodes.repeats.value,'1');
 console.log('Field sheet state: autosave, restore, precision, invalid readings, environmental limits, duplication and pH buffer protection passed for all five areas.');
})();

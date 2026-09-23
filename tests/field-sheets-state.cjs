// State/event integration without a browser. Visual/mobile checks remain separate.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const {stateFor}=require('./field-sheets.cjs');
const root=path.join(__dirname,'..'),storage=new Map();
function load(kind){
 const initial=stateFor(kind),html=fs.readFileSync(path.join(root,`ficha-calibracao-${kind}.html`),'utf8'),nodes={},meta=[],settings=[];
 function element(id){return {id,value:'',dataset:{},hidden:false,disabled:false,innerHTML:'',textContent:'',events:{},setAttribute(){},classList:{toggle(){}},closest(){return this;},focus(){},addEventListener(name,fn){this.events[name]=fn;}};}
 for(const match of html.matchAll(/\bid="([^"]+)"/g))nodes[match[1]]=element(match[1]);
 for(const [id,value] of Object.entries(initial.meta)){const n=nodes[id];n.value=value;n.dataset.meta=id;meta.push(n);}
 nodes.unit.value=initial.unit;nodes.unit.dataset.meta='unit';meta.push(nodes.unit);
 for(const [id,value] of Object.entries(initial.settings)){if(!nodes[id])continue;const n=nodes[id];n.value=value;n.dataset.setting=id;settings.push(n);}
 nodes.outputMode.value='blank';
 nodes['sheet-form'].querySelectorAll=s=>s==='[data-meta]'?meta:settings;
 let confirms=0,answer=true;
 const sandbox={console,structuredClone,FieldSheetsCore:require('../assets/fichas/core.js'),setTimeout(){return 1;},clearTimeout(){},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},document:{body:{dataset:{kind,title:kind}},getElementById:id=>nodes[id]||null,querySelectorAll:()=>[],createElement:()=>({getContext:()=>({measureText:s=>({width:s.length*4.8})})})}};
 sandbox.window=sandbox;sandbox.addEventListener=()=>{};sandbox.confirm=()=>{confirms++;return answer;};
 const context=vm.createContext(sandbox);
 for(const file of ['print.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,'assets/fichas',file),'utf8'),context);
 const event=(id,name,arg={})=>nodes[id].events[name]?.(arg);
 return {nodes,event,get confirms(){return confirms;},setAnswer:v=>answer=v,state:()=>JSON.parse(storage.get('alogy-field-sheet-v1-'+kind)),input(id,value){const el=nodes[id];el.value=value;event('sheet-form','input',{target:el});},reading(property,value,index=0){const dataset={row:`${index}:${initial.meta.direction}`};if(['reference','indication','temperature'].includes(property)){dataset.reading=property;dataset.rep='0';}else dataset.property=property;event('sheet-form','input',{target:{value,dataset}});}};
}
(async()=>{
 for(const kind of ['temperatura','pressao','ph','vazao']){
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
 console.log('Field sheet state: autosave, restore, precision, invalid readings, environmental limits, duplication and pH buffer protection passed for all four areas.');
})();

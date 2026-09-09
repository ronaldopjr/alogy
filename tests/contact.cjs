// Local response simulations only: never sends an email or a network request.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const app=fs.readFileSync(path.join(__dirname,'../app.js'),'utf8');
const src=app.slice(app.indexOf('const FORM_ENDPOINT'),app.indexOf('function enhanceResponsiveToolTables'));
function env(){
  const fields=new Map();let valid=true,calls=0,pending;
  for(const id of ['c_nome','c_email','c_fone','c_cidade','c_assunto','c_msg','formContato','btnEnviar','formSuccess']){
    const classes=new Set();fields.set(id,{value:'teste',dataset:{},disabled:false,innerHTML:'',
      classList:{add:x=>classes.add(x),remove:x=>classes.delete(x),contains:x=>classes.has(x)},
      reportValidity:()=>valid,reset(){for(const [key,f] of fields) if(key.startsWith('c_'))f.value='';}
    });
  }
  const context=vm.createContext({document:{getElementById:id=>fields.get(id)},FormData:class{append(){}},
    fetch:()=>{calls++;return new Promise(resolve=>{pending=resolve;});},alert(){},confirm:()=>false,console:{error(){}},window:{open(){}}});
  vm.runInContext(src,context);
  return {context,fields,valid:v=>{valid=v;},calls:()=>calls,resolve:r=>pending(r)};
}
(async()=>{
  const invalid=env();invalid.valid(false);await invalid.context.enviarFormulario({preventDefault(){}});assert.equal(invalid.calls(),0);
  for(const [success,accepted] of [[true,true],['true',true],[false,false],['false',false],[undefined,false]]){
    const e=env(),submit=()=>e.context.enviarFormulario({preventDefault(){}});
    const job=submit();assert.equal(e.calls(),1);await submit();assert.equal(e.calls(),1);
    e.context.setButtonState();assert.equal(e.fields.get('btnEnviar').disabled,true);
    e.resolve({ok:true,json:async()=>({success})});await job;
    assert.equal(e.fields.get('formSuccess').classList.contains('show'),accepted);
    assert.equal(e.fields.get('formContato').dataset.sending,undefined);
    assert.equal(e.fields.get('c_nome').value,accepted?'':'teste');
  }
  const e=env();const job=e.context.enviarFormulario({preventDefault(){}});
  e.resolve({ok:true,json:async()=>{throw Error('HTML instead of JSON');}});await job;
  assert.equal(e.fields.get('formSuccess').classList.contains('show'),false);
  console.log('Contact form: native validation, duplicate prevention and response simulations passed. No messages sent.');
})().catch(e=>{console.error(e);process.exitCode=1;});

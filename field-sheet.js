(function () {
'use strict';
const C = window.FieldSheetCore;
const type = document.body.dataset.quantity;
const configs = {
 temperatura: {name:'Temperatura',unit:'°C',low:'0',high:'500',help:'Registre o objeto avaliado e a comparação realmente realizada. Simulação elétrica não documenta automaticamente a calibração completa do sensor.',fields:[['object','Objeto avaliado'],['medium','Meio utilizado (banho, bloco, outro)'],['stability','Condição de estabilização']]},
 pressao: {name:'Pressão',unit:'bar',low:'0',high:'10',help:'Informe o tipo de pressão (manométrica, absoluta ou diferencial), o meio e a referência. Registre subida e descida em séries separadas.',fields:[['pressureType','Tipo de pressão'],['medium','Meio / fluido de aplicação'],['connection','Conexão / montagem']]},
 ph: {name:'pH',unit:'pH',low:'',high:'',help:'Use o valor de referência do tampão na temperatura de uso, conforme seu documento. A temperatura da solução é distinta da temperatura ambiente. Registre ajuste e verificação em séries separadas.',fields:[['electrode','Eletrodo / sensor'],['compensation','Compensação de temperatura'],['stability','Estabilização / método']]},
 vazao: {name:'Vazão',unit:'L/min',low:'0',high:'100',help:'Adapte os pontos à faixa realizável. Registre o método e o fluido. Se utilizar volume/massa e tempo, informe os dados e unidades por ponto; não há conversão automática desses valores em vazão.',fields:[['flowMethod','Método de comparação'],['fluid','Fluido / condição'],['setup','Montagem / condição de escoamento']]}
};
const cfg = configs[type];
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36)+Math.random().toString(36).slice(2));
const fmt = (n, d=state.config.decimals) => n === null || n === undefined ? '' : Number(n).toLocaleString('pt-BR',{maximumFractionDigits:Number(d),useGrouping:false});
const key = 'alogy-field-sheet-v1-'+type;
const general = [['company','Empresa / cliente'],['location','Local'],['date','Data','date'],['operator','Profissional responsável'],['tag','TAG'],['description','Descrição do instrumento'],['model','Fabricante / modelo'],['serial','Número de série'],['resolution','Resolução'],['procedure','Método / procedimento'],['revision','Revisão'],['standard','Identificação do padrão'],['certificate','Certificado / referência'],['correction','Correção do padrão / referência já corrigida']];
const environment = [['startTime','Horário inicial','time'],['startTemp','Temperatura ambiente inicial (°C)'],['startHumidity','Umidade relativa inicial (% UR)'],['endTime','Horário final','time'],['endTemp','Temperatura ambiente final (°C)'],['endHumidity','Umidade relativa final (% UR)']];
let state, active=0, cursor=0, pages=[], configValid=true, savedRaw=null;
function blankReading(){return {ref:'',ind:''};}
function makePoint(p){return {...p,id:uid(),buffer:'',lot:'',expiry:'',solutionTemp:'',bufferRef:'',volume:'',mass:'',time:'',note:'',readings:Array.from({length:Number(state?.config.repetitions||3)},blankReading)};}
function initial(){return {version:1,quantity:type,id:uid(),meta:{},config:{low:cfg.low,high:cfg.high,unit:cfg.unit,count:5,step:'25',mode:'count',decimals:2,repetitions:3},runs:[]};}
state=initial();
function newRun(){return {id:uid(),channel:'',direction:'',condition:'',points:(type==='ph'?Array.from({length:3},()=>({nominal:null,percent:null})):C.points(state.config.low,state.config.high,state.config.count)).map(makePoint)};}
state.runs=[newRun()];
function field(id,label,value='',kind='text',attrs=''){return `<label class="field">${esc(label)}<input id="${id}" type="${kind}" value="${esc(value)}" maxlength="160" ${attrs}></label>`;}
function metaFields(list){return list.map(([id,label,kind])=>field('meta-'+id,label,state.meta[id]||'',kind||'text',`data-meta="${id}"`)).join('');}
function notify(text,error=false){$('message').textContent=text;$('message').className=error?'error':'status';}
function persist(){try{localStorage.setItem(key,JSON.stringify(state));$('save-status').textContent='Rascunho salvo neste aparelho · '+new Date().toLocaleTimeString('pt-BR');}catch{$('save-status').textContent='O navegador não conseguiu salvar. Exporte um backup para conservar os dados.';$('save-status').className='error';}}
function hasReadings(){return state.runs.some(r=>r.points.some(p=>p.readings.some(v=>v.ref!==''||v.ind!=='')||p.note));}
function hydrate(){
 $('general-fields').innerHTML=metaFields(general);$('environment-fields').innerHTML=metaFields(environment);$('specific-fields').innerHTML=metaFields(cfg.fields);$('method-help').textContent=cfg.help;
 Object.entries(state.config).forEach(([id,val])=>{if($('cfg-'+id))$('cfg-'+id).value=val;});
 $('meta-notes').value=state.meta.notes||'';
 $('cfg-step').closest('.grid').hidden=state.config.mode!=='step';$('cfg-count').closest('label').hidden=state.config.mode==='step';$('linear-config').hidden=type==='ph';$('ph-help').hidden=type!=='ph';$('ph-add').hidden=type!=='ph';$('cfg-unit').readOnly=type==='ph';
 active=Math.min(active,state.runs.length-1);cursor=0;renderRuns();renderPoints();refreshOutput();
}
function renderRuns(){
 $('run-select').innerHTML=state.runs.map((r,i)=>`<option value="${i}">${i+1}. ${esc([r.channel,r.direction,r.condition].filter(Boolean).join(' · ')||'Série de leituras')}</option>`).join('');$('run-select').value=active;
 ['channel','direction','condition'].forEach(k=>$('run-'+k).value=state.runs[active][k]);
}
function pointExtras(p,i){
 const fields=type==='ph'?[['buffer','Identificação do tampão'],['lot','Lote'],['expiry','Validade','date'],['bufferRef','Referência na temperatura de uso (pH)'],['solutionTemp','Temperatura da solução (°C)']]:type==='vazao'?[['volume','Volume coletado e unidade'],['mass','Massa coletada e unidade'],['time','Tempo e unidade']]:[];
 return fields.length?`<div class="grid">${fields.map(([k,label,kind])=>field(`point-${i}-${k}`,label,p[k],kind||'text',`data-point="${i}" data-extra="${k}"`)).join('')}</div>`:'';
}
function renderPoints(){
 const r=state.runs[active];cursor=Math.min(cursor,r.points.length-1);
 $('points').innerHTML=r.points.map((p,i)=>`<article class="point ${i!==cursor?'mobile-hidden':''}" data-card="${i}"><div class="point-heading"><h3>Ponto ${i+1}${p.percent!==null?' · '+fmt(p.percent,2)+'%':''}</h3><span class="hint">${type==='ph'?'Tampão usado':'Nominal planejado'} · ${esc(state.config.unit)}</span></div>${field('nominal-'+i,type==='ph'?'Valor nominal do tampão (pH)':'Valor nominal ('+state.config.unit+')',p.nominal===null?'':fmt(p.nominal,8),'text',`inputmode="decimal" data-point="${i}" data-extra="nominal"`)}${pointExtras(p,i)}<div class="readings">${p.readings.map((v,j)=>`<div class="reading"><strong>Leitura ${j+1}</strong>${field(`ref-${i}-${j}`,'Referência ('+state.config.unit+')',v.ref,'text',`inputmode="decimal" data-point="${i}" data-reading="${j}" data-value="ref"`)}${field(`ind-${i}-${j}`,'Indicação ('+state.config.unit+')',v.ind,'text',`inputmode="decimal" data-point="${i}" data-reading="${j}" data-value="ind"`)}</div>`).join('')}</div><button type="button" data-repeat="${i}">Repetir referência da leitura 1</button><p class="hint">Só repita quando a mesma referência se aplicar a todas as leituras.</p><label class="field point-note">Observações / horário<input maxlength="160" data-point="${i}" data-extra="note" value="${esc(p.note)}"></label><p id="summary-${i}" class="hint"></p>${type==='ph'?`<button type="button" data-remove="${i}">Excluir tampão</button>`:''}</article>`).join('');
 $('point-counter').textContent=`Ponto ${cursor+1} de ${r.points.length}`;$('prev-point').disabled=cursor===0;$('next-point').disabled=cursor===r.points.length-1;
 renderSummary();
}
function summaryText(p){const s=C.summary(p.readings);return s.count?`${s.count} par(es) completo(s) · Média ref.: ${fmt(s.ref)} · Média ind.: ${fmt(s.ind)} · Diferença (ind. - ref.): ${fmt(s.difference)}${s.incomplete?' · '+s.incomplete+' par(es) incompleto(s)':''}`:`Nenhum par completo${s.incomplete?' · '+s.incomplete+' par(es) incompleto(s)':''}. Campos vazios não são zero.`;}
function renderSummary(){
 const r=state.runs[active];r.points.forEach((p,i)=>{if($('summary-'+i))$('summary-'+i).textContent=summaryText(p);});
 $('overview').innerHTML=`<table><thead><tr><th>Ponto</th><th>Nominal (${esc(state.config.unit)})</th><th>Resumo desta série</th></tr></thead><tbody>${r.points.map((p,i)=>`<tr><td>${i+1}</td><td>${fmt(p.nominal)}</td><td>${esc(summaryText(p))}</td></tr>`).join('')}</tbody></table>`;
}
function confirmReplace(){return !hasReadings()||confirm('Esta mudança substituirá os pontos e apagará leituras e observações de todas as séries. Exporte um backup se precisar conservá-las. Continuar?');}
function configure(){
 const next={...state.config};['low','high','unit','count','step','mode','decimals','repetitions'].forEach(k=>{if($('cfg-'+k))next[k]=$('cfg-'+k).value;});
 try{
 if(!next.unit.trim())throw Error('Informe a unidade.');
 if(!Number.isInteger(Number(next.repetitions))||next.repetitions<1||next.repetitions>10)throw Error('Escolha de 1 a 10 leituras por ponto.');
 let planned=type==='ph'?null:C.points(next.low,next.high,next.count,next.mode==='step'?next.step:undefined);
 const geometry=type!=='ph'&&['low','high','count','step','mode'].some(k=>String(next[k])!==String(state.config[k]));
 const unitChanged=next.unit!==state.config.unit;
 const shrink=Number(next.repetitions)<Number(state.config.repetitions);
 if((geometry||(next.unit!==state.config.unit&&hasReadings()))&&!confirmReplace()){hydrate();return;}
 if(shrink&&state.runs.some(r=>r.points.some(p=>p.readings.slice(Number(next.repetitions)).some(v=>v.ref||v.ind)))&&!confirm('Reduzir as leituras apagará os valores excedentes. Continuar?')){hydrate();return;}
 state.config=next;
 state.runs.forEach(r=>{if(geometry)r.points=planned.map(makePoint);else r.points.forEach(p=>{if(unitChanged){p.note='';p.readings=p.readings.map(blankReading);}p.readings=p.readings.slice(0,Number(next.repetitions));while(p.readings.length<Number(next.repetitions))p.readings.push(blankReading());});});
 configValid=true;$('cfg-step').closest('.grid').hidden=state.config.mode!=='step';$('cfg-count').closest('label').hidden=state.config.mode==='step';$('config-error').textContent='';persist();renderPoints();refreshOutput();
 }catch(e){configValid=false;$('config-error').textContent=e.message;refreshOutput();}
}
// One page model drives both the A4 preview and the downloadable PDF.
function wrap(text,width,size){
 const canvas=wrap.canvas||(wrap.canvas=document.createElement('canvas'));const ctx=canvas.getContext('2d');ctx.font=`${size*96/72}px Arial`;const max=(width-4)*96/25.4;
 const lines=[];for(const paragraph of String(text).split('\n')){let line='';for(const char of paragraph){if(ctx.measureText(line+char).width>max&&line){lines.push(line);line='';}line+=char;}lines.push(line);}return lines;
}
function buildPages(){
 const result=[], filled=$('output-mode').value==='filled';
 for(const [ri,run] of state.runs.entries()){
 let page,y;
 function cell(x,top,w,h,text,size=9,bold=false,border=true){const lines=wrap(text,w,size);page.cells.push({x,y:top,w,h,text,lines,size,bold,border});}
 function row(values,height=7){const w=190/values.length;const h=Math.max(height,...values.map(t=>wrap(t,w,9).length*4+3));if(y+h>264)start(false);values.forEach((v,i)=>cell(i*w,y,w,h,v));y+=h;}
 function start(full=false){page={cells:[]};result.push(page);y=0;row(['FOLHA DE COLETA DE CALIBRAÇÃO - '+cfg.name.toUpperCase()+' | Unidade: '+state.config.unit],10);page.cells.at(-1).bold=true;
 row(['Ficha: '+state.id.slice(0,8)+' | Série '+(ri+1),'TAG: '+(state.meta.tag||'')+' | Data: '+(state.meta.date||'')],9);
 row(['Canal: '+run.channel,'Sentido: '+run.direction,'Condição: '+run.condition],9);
 row(['CONDIÇÕES AMBIENTAIS - temperatura ambiente e umidade relativa'],7);
 row(['Horário inicial: '+(state.meta.startTime||''),'Temp. inicial\n(°C): '+(state.meta.startTemp||''),'UR inicial (%): '+(state.meta.startHumidity||''),'Horário final: '+(state.meta.endTime||''),'Temp. final\n(°C): '+(state.meta.endTemp||''),'UR final (%): '+(state.meta.endHumidity||'')],17);
 if(full){
 row(['Empresa / cliente: '+(state.meta.company||''),'Local: '+(state.meta.location||'')]);
 row(['Responsável: '+(state.meta.operator||''),'Instrumento: '+(state.meta.description||'')]);
 row(['Fabricante / modelo: '+(state.meta.model||''),'Série: '+(state.meta.serial||'')]);
 row(['Faixa: '+(type==='ph'?'Tampões informados':state.config.low+' a '+state.config.high)+' '+state.config.unit+' | Resolução: '+(state.meta.resolution||''),'Procedimento / revisão: '+(state.meta.procedure||'')+' / '+(state.meta.revision||'')]);
 row(['Padrão: '+(state.meta.standard||''),'Certificado / referência: '+(state.meta.certificate||'')]);
 row(['Correção / referência já corrigida: '+(state.meta.correction||'')],9);
 row(cfg.fields.map(([k,label])=>label+': '+(state.meta[k]||'')),10);
 if(state.meta.notes)row(['Observações gerais: '+state.meta.notes],9);
 }
 y+=3;
 }
 start(true);
 for(const [i,p] of run.points.entries()){
 const extra=type==='ph'?`Tampão: ${p.buffer} | Lote: ${p.lot} | Validade: ${p.expiry}\nReferência na temp. de uso (pH): ${p.bufferRef} | Temp. da solução (°C): ${p.solutionTemp}`:type==='vazao'?`Volume: ${filled?p.volume:''} | Massa: ${filled?p.mass:''} | Tempo: ${filled?p.time:''}`:'';
 const extraH=extra?Math.max(10,wrap(extra,190,9).length*4+3):0;
 const summary=filled?summaryText(p):'';
 const note='Ponto '+(i+1)+' - observações / horário: '+(filled?p.note:'');const noteH=Math.max(7,wrap(note,190,9).length*4+3);
 const summaryH=filled&&C.summary(p.readings).count?Math.max(9,wrap(summary,190,9).length*4+3):0;
 let first=true;
 for(let j=0;j<p.readings.length;j+=3){
 const readings=p.readings.slice(j,j+3), groupH=17+(first?extraH:0);
 if(y+groupH+noteH+summaryH>264)start();
 if(first&&extra)row([`Ponto ${i+1} | `+extra],extraH);
 const widths=[12,18,28,...readings.flatMap(()=>[22,22])];
 // Up to three reference/indication pairs across A4: ample handwriting width.
 const scale=190/widths.reduce((a,b)=>a+b,0);
 let x=0;
 const labels=['Pt.','%','Nominal',...readings.flatMap((v,k)=>['Ref. '+(j+k+1),'Ind. '+(j+k+1)])];
 const values=[String(i+1),fmt(p.percent,2),fmt(p.nominal),...readings.flatMap(v=>[filled?v.ref:'',filled?v.ind:''])];
 const valueH=Math.max(10,...values.map((v,k)=>wrap(v,widths[k]*scale,9).length*4+3));
 if(y+7+valueH+noteH+summaryH>264)start();
 labels.forEach((label,k)=>{const w=widths[k]*scale;cell(x,y,w,7,label,9,true);cell(x,y+7,w,valueH,values[k]);x+=w;});
 y+=7+valueH;first=false;
 }
 if(y+noteH+summaryH>264){start();row([`Ponto ${i+1} - observações / resumo (continuação)`],9);}
 row([note],noteH);if(summaryH)row([summary],summaryH);y+=2;

 }
 }
 result.forEach((p,i)=>{p.cells.push({x:0,y:270,w:190,h:6,text:`Registro de coleta | Folha ${i+1} de ${result.length}`,lines:[`Registro de coleta | Folha ${i+1} de ${result.length}`],size:8,bold:false,border:false});});
 return result;
}
function renderSheet(p){return `<section class="sheet">${p.cells.map(c=>`<div class="sheet-cell ${c.border?'border':''}" style="left:${c.x}mm;top:${c.y}mm;width:${c.w}mm;height:${c.h}mm;font-size:${c.size}pt;font-weight:${c.bold?'bold':'normal'}">${c.lines.map((line,i)=>`<span style="top:${1.5+i*4}mm">${esc(line)}</span>`).join('')}</div>`).join('')}</section>`;}
function refreshOutput(){
 ['print','pdf'].forEach(id=>$(id).disabled=!configValid);
 if(!configValid){$('preview').innerHTML='';$('print-root').innerHTML='';$('preview-summary').textContent='Corrija a configuração para atualizar a prévia.';return;}
 pages=buildPages();$('preview').innerHTML=pages.map(renderSheet).join('');$('print-root').innerHTML=pages.map(renderSheet).join('');
 $('preview-summary').innerHTML=`<strong>${pages.length} folha(s) A4</strong><p>${state.runs.length} série(s) · ${state.runs[0].points.length} ponto(s) por série · ${state.config.repetitions} leitura(s) por ponto</p><p>${$('output-mode').value==='blank'?'Referências, indicações e observações por ponto em branco para escrever em campo.':'Inclui os dados registrados e médias de pares completos.'}</p><div class="table-wrap"><table><thead><tr><th>Ponto</th><th>%</th><th>Nominal (${esc(state.config.unit)})</th></tr></thead><tbody>${state.runs[active].points.map((p,i)=>`<tr><td>${i+1}</td><td>${fmt(p.percent,2)}</td><td>${fmt(p.nominal)}</td></tr>`).join('')}</tbody></table></div><p class="hint">O PDF mostra a disposição exata da folha A4.</p>`;
 const nominals=state.runs[active].points.filter(p=>p.nominal!==null).map(p=>fmt(p.nominal));$('rounding-warning').textContent=new Set(nominals).size<nominals.length?'A apresentação contém pontos repetidos. Aumente as casas decimais ou edite os pontos.':'';
}
function download(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),10000);}
async function pdf(){
 try{
 if(!window.PDFLib)throw Error('O gerador de PDF não carregou. Recarregue a página ou use Imprimir ficha e Salvar como PDF.');
 const doc=await PDFLib.PDFDocument.create();const font=await doc.embedFont(PDFLib.StandardFonts.Helvetica);const bold=await doc.embedFont(PDFLib.StandardFonts.HelveticaBold);const mm=72/25.4;
 for(const model of pages){const p=doc.addPage([210*mm,297*mm]);for(const c of model.cells){if(c.border)p.drawRectangle({x:(10+c.x)*mm,y:(297-10-c.y-c.h)*mm,width:c.w*mm,height:c.h*mm,borderWidth:.35,borderColor:PDFLib.rgb(.25,.25,.25)});c.lines.forEach((line,i)=>p.drawText(line,{x:(12+c.x)*mm,y:(297-10-c.y-1.5-i*4)*mm-c.size,font:c.bold?bold:font,size:c.size,color:PDFLib.rgb(0,0,0)}));}}
 download(new Blob([await doc.save()],{type:'application/pdf'}),'ficha-'+type+'-'+state.id.slice(0,8)+'.pdf');notify('PDF pronto.');
 }catch(e){notify('Não foi possível gerar o PDF: '+e.message,true);}
}
function validateBackup(s){
 if(!s||s.version!==1||s.quantity!==type||typeof s.id!=='string'||!s.meta||!s.config||!Array.isArray(s.runs)||s.runs.length<1||s.runs.length>20)throw Error('Backup incompatível com esta área.');
 const allowedMeta=new Set([...general,...environment,...cfg.fields,['notes']].map(f=>f[0]));
 for(const [k,v] of Object.entries(s.meta))if(!allowedMeta.has(k)||typeof v!=='string'||v.length>160)throw Error('Dados cadastrais inválidos no backup.');
 if(typeof s.config.unit!=='string'||!s.config.unit.trim()||s.config.unit.length>20||!Number.isInteger(Number(s.config.decimals))||s.config.decimals<0||s.config.decimals>6||!Number.isInteger(Number(s.config.repetitions))||s.config.repetitions<1||s.config.repetitions>10)throw Error('Configuração inválida no backup.');
 if(type!=='ph')C.points(s.config.low,s.config.high,s.config.count,s.config.mode==='step'?s.config.step:undefined);
 for(const r of s.runs){if(!r||!['channel','direction','condition'].every(k=>typeof r[k]==='string'&&r[k].length<=160)||!Array.isArray(r.points)||r.points.length<1||r.points.length>101)throw Error('Série inválida no backup.');for(const p of r.points){if(!p||!(p.nominal===null||typeof p.nominal==='number'&&Number.isFinite(p.nominal))||!(p.percent===null||typeof p.percent==='number'&&Number.isFinite(p.percent))||!Array.isArray(p.readings)||p.readings.length!==Number(s.config.repetitions))throw Error('Pontos inválidos no backup.');for(const k of ['buffer','lot','expiry','solutionTemp','bufferRef','volume','mass','time','note'])if(typeof p[k]!=='string'||p[k].length>160)throw Error('Campo do ponto inválido.');for(const v of p.readings)if(!v||!['ref','ind'].every(k=>typeof v[k]==='string'&&v[k].length<=160))throw Error('Leitura inválida no backup.');}}
 return s;
}
$('app').addEventListener('input',e=>{
 const t=e.target;
 if(t.dataset.meta){state.meta[t.dataset.meta]=t.value;persist();refreshOutput();}
 if(t.dataset.point!==undefined){const p=state.runs[active].points[Number(t.dataset.point)];
 if(t.dataset.reading!==undefined){t.setAttribute('aria-invalid',t.value!==''&&C.number(t.value)===null);p.readings[Number(t.dataset.reading)][t.dataset.value]=t.value;}
 else if(t.dataset.extra==='nominal'){const n=C.number(t.value);t.setAttribute('aria-invalid',t.value!==''&&n===null);p.nominal=n;p.percent=n!==null&&type!=='ph'?(n-C.number(state.config.low))*100/(C.number(state.config.high)-C.number(state.config.low)):null;}
 else p[t.dataset.extra]=t.value;
 persist();renderSummary();refreshOutput();}
});
$('app').addEventListener('change',e=>{const t=e.target;if(t.id.startsWith('cfg-'))configure();if(t.id.startsWith('run-')&&t.id!=='run-select'){state.runs[active][t.id.slice(4)]=t.value;persist();renderRuns();refreshOutput();}});
$('app').addEventListener('click',e=>{
 const t=e.target.closest('button');if(!t)return;
 if(t.dataset.count){$('cfg-count').value=t.dataset.count;$('cfg-mode').value='count';configure();}
 if(t.dataset.repeat!==undefined){const p=state.runs[active].points[Number(t.dataset.repeat)];if(C.number(p.readings[0].ref)===null){notify('Informe uma referência válida na leitura 1.',true);return;}if(p.readings.slice(1).some(v=>v.ref)&&!confirm('Substituir as referências já digitadas neste ponto?'))return;p.readings.forEach(v=>v.ref=p.readings[0].ref);persist();renderPoints();refreshOutput();}
 if(t.dataset.remove!==undefined){const ps=state.runs[active].points;if(ps.length===1){notify('Mantenha pelo menos um tampão.',true);return;}if(!confirm('Excluir este tampão e suas leituras?'))return;ps.splice(Number(t.dataset.remove),1);persist();renderPoints();refreshOutput();}
});
$('run-select').onchange=()=>{active=Number($('run-select').value);cursor=0;renderRuns();renderPoints();refreshOutput();};
$('add-run').onclick=()=>{if(state.runs.length>=20){notify('Limite de 20 séries por ficha.',true);return;}const r=JSON.parse(JSON.stringify(state.runs[active]));r.id=uid();r.channel='';r.direction='';r.condition='';r.points.forEach(p=>{p.id=uid();p.note='';p.readings=p.readings.map(blankReading);['volume','mass','time','solutionTemp','bufferRef'].forEach(k=>p[k]='');});state.runs.push(r);active=state.runs.length-1;persist();hydrate();notify('Nova série criada sem leituras. Identifique canal, sentido e condição.');};
$('delete-run').onclick=()=>{if(state.runs.length===1){notify('A ficha precisa de uma série.',true);return;}if(confirm('Excluir esta série e todas as suas leituras?')){state.runs.splice(active,1);active=0;persist();hydrate();}};
$('prev-point').onclick=()=>{cursor--;renderPoints();};$('next-point').onclick=()=>{cursor++;renderPoints();};
$('ph-add').onclick=()=>{const ps=state.runs[active].points;if(ps.length>=101)return;ps.push(makePoint({nominal:null,percent:null}));cursor=ps.length-1;persist();renderPoints();refreshOutput();};
$('output-mode').onchange=refreshOutput;$('print').onclick=()=>{refreshOutput();window.print();};$('pdf').onclick=pdf;
$('export').onclick=()=>download(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),'ficha-'+type+'-'+state.id.slice(0,8)+'.json');
$('import').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>2000000)throw Error('O backup ultrapassa 2 MB.');const s=validateBackup(JSON.parse(await file.text()));if(!confirm('Substituir a ficha atual pelo backup?'))return;state=s;active=0;configValid=true;persist();hydrate();notify('Backup restaurado.');}catch(e){notify(e.message,true);}finally{$('import').value='';}};
$('duplicate').onclick=()=>{if(!confirm('Criar nova ficha a partir da configuração? Exporte o backup da atual se precisar preservá-la.'))return;state.id=uid();state.meta={procedure:state.meta.procedure||'',revision:state.meta.revision||''};state.runs.forEach(r=>{r.id=uid();r.points.forEach(p=>{p.id=uid();p.note='';p.readings=p.readings.map(blankReading);['buffer','lot','expiry','solutionTemp','bufferRef','volume','mass','time'].forEach(k=>p[k]='');});});persist();hydrate();notify('Nova identificação criada. Identificação do serviço, condições ambientais e leituras foram limpas.');};
$('new').onclick=()=>{if(!confirm('Apagar a ficha atual e iniciar uma nova?'))return;state=initial();state.runs=[newRun()];active=0;configValid=true;persist();hydrate();$('resume-box').hidden=true;};
$('resume').onclick=()=>{try{state=validateBackup(JSON.parse(savedRaw));configValid=true;hydrate();$('resume-box').hidden=true;persist();notify('Rascunho reaberto.');}catch(e){notify(e.message,true);}};
try{savedRaw=localStorage.getItem(key);if(savedRaw){validateBackup(JSON.parse(savedRaw));$('resume-box').hidden=false;$('save-status').textContent='Há uma ficha salva. Continue o rascunho ou inicie uma nova ficha.';}else $('save-status').textContent='O rascunho será salvo neste aparelho ao preencher.';}catch{$('save-status').textContent='Não foi possível ler o rascunho. Use um backup ou inicie uma nova ficha.';}
// Do not overwrite an existing draft until the user chooses to continue or start anew.
if(savedRaw){$('editor').inert=true;$('resume').addEventListener('click',()=>{$('editor').inert=false;});$('new').addEventListener('click',()=>{if($('resume-box').hidden)$('editor').inert=false;});}
hydrate();
})();

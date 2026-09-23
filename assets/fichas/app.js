(function () {
  'use strict';
  const C=window.FieldSheetsCore, P=window.FieldSheetsPrint, kind=document.body.dataset.kind, title=document.body.dataset.title;
  const $=id=>document.getElementById(id), form=$('sheet-form'), key='alogy-field-sheet-v1-'+kind;
  const metaFields=[...form.querySelectorAll('[data-meta]')], settingsFields=[...form.querySelectorAll('[data-setting]')];
  const uid=()=>window.crypto?.randomUUID?.()||'ficha-'+Date.now()+'-'+Math.random().toString(36).slice(2);
  function capture(){return {version:1,kind,id:uid(),unit:$('unit').value.trim(),settings:{low:'',high:'',mode:kind==='ph'?'manual':'count',count:'5',step:'10',manual:'',repeats:'3',digits:'2',...Object.fromEntries(settingsFields.map(f=>[f.dataset.setting,f.value]))},meta:Object.fromEntries(metaFields.filter(f=>f.id!=='unit').map(f=>[f.dataset.meta,f.value])),readings:{}};}
  const initial=capture(); let state=structuredClone(initial), points=[], pages=[], timer, valid=false;
  const say=message=>{$('save-status').textContent=message;};
  function save(){
    try{localStorage.setItem(key,JSON.stringify(state));say('Rascunho salvo neste aparelho. Baixe um backup para conservar uma cópia.');}
    catch{say('Este navegador não conseguiu salvar o rascunho. Baixe um backup antes de sair.');}
  }
  function populate(){metaFields.forEach(f=>f.value=f.id==='unit'?state.unit:state.meta[f.dataset.meta]||'');settingsFields.forEach(f=>f.value=state.settings[f.dataset.setting]??'');}
  function hasReadings(){return Object.values(state.readings).some(r=>r.note||r.buffer||r.certificate||r.validity||r.pairs?.some(p=>Object.values(p).some(Boolean)));}
  function sanitize(raw){
    if(!raw||raw.version!==1||raw.kind!==kind||typeof raw.settings!=='object'||typeof raw.meta!=='object'||!raw.readings||typeof raw.readings!=='object')throw Error('Backup incompatível. Abra um arquivo desta mesma grandeza e versão.');
    const next=structuredClone(initial);
    function string(v,max){if(typeof v!=='string'||v.length>max)throw Error('Backup inválido: campo inesperado ou muito longo.');return v;}
    next.id=typeof raw.id==='string'&&raw.id.length<=100?raw.id:uid();next.unit=string(raw.unit,120);
    for(const k of Object.keys(next.settings))next.settings[k]=string(raw.settings[k],k==='manual'?1500:30);
    for(const k of Object.keys(next.meta))next.meta[k]=string(raw.meta[k]??'',k==='notes'?1200:120);
    if(!['count','step','manual'].includes(next.settings.mode)||!['1','2','3','4','5'].includes(next.settings.repeats)||!['0','1','2','3','4'].includes(next.settings.digits))throw Error('Configuração inválida no backup.');
    const allowedDirections=kind==='ph'?['Sequência informada','Descida','Subida e descida']:['Subida','Descida','Subida e descida'];
    if(!allowedDirections.includes(next.meta.direction)||!['','Antes do ajuste','Após o ajuste','Sem ajuste'].includes(next.meta.condition))throw Error('Condição ou sentido inválido no backup.');
    if(Object.keys(raw.readings).length>100)throw Error('Backup excede o limite de leituras.');
    for(const [k,r] of Object.entries(raw.readings)){
      if(!/^\d{1,2}:(Subida|Descida|Sequência informada)$/.test(k)||!r||!Array.isArray(r.pairs)||r.pairs.length>5)throw Error('Leituras inválidas no backup.');
      next.readings[k]={pairs:r.pairs.map(p=>({reference:string(p.reference??'',32),indication:string(p.indication??'',32),temperature:string(p.temperature??'',32)})),note:string(r.note??'',160),buffer:string(r.buffer??'',120),certificate:string(r.certificate??'',120),validity:string(r.validity??'',10)};
    }
    return next;
  }
  function sequence(){
    const list=points.map((point,index)=>({point,index,direction:state.meta.direction==='Sequência informada'?'Sequência informada':'Subida'}));
    if(state.meta.direction==='Descida')list.reverse().forEach(r=>r.direction='Descida');
    if(state.meta.direction==='Subida e descida')list.push(...points.map((point,index)=>({point,index,direction:'Descida'})).reverse());
    return list;
  }
  function input(label,value,attrs){return `<label class="field"><span>${C.escape(label)}</span><input value="${C.escape(value)}" ${attrs}></label>`;}
  function renderCards(){
    $('reading-cards').innerHTML=sequence().map(({point,index,direction})=>{
      const k=index+':'+direction, row=state.readings[k]||{pairs:[]};
      const buffer=kind==='ph'?`<div class="form-grid">${input('Tampão / fabricante / lote',row.buffer||'',`data-row="${k}" data-property="buffer" maxlength="120"`)}${input('Certificado / referência do tampão',row.certificate||'',`data-row="${k}" data-property="certificate" maxlength="120"`)}${input('Validade do tampão',row.validity||'',`data-row="${k}" data-property="validity" type="date"`)}</div>`:'';
      const pairs=Array.from({length:Number(state.settings.repeats)},(_,i)=>{
        const pair=row.pairs[i]||{};
        return `<div class="reading-row ${kind==='ph'?'ph':''}"><span class="rep">${i+1}</span>`+['reference','indication',...(kind==='ph'?['temperature']:[])].map(name=>input(name==='reference'?`Referência (${state.unit})`:name==='indication'?`Instrumento (${state.unit})`:'T. solução (°C)',pair[name]||'',`inputmode="decimal" maxlength="32" data-row="${k}" data-rep="${i}" data-reading="${name}" aria-label="Ponto ${index+1}, ${direction}, leitura ${i+1}, ${name==='reference'?'referência':name==='indication'?'instrumento':'temperatura da solução'}"`)).join('')+'</div>';
      }).join('');
      return `<section class="reading-card" data-row-card="${k}"><div class="reading-title">Ponto ${index+1} · ${C.format(point.nominal,Number(state.settings.digits))} ${C.escape(state.unit)} · ${direction}</div>${buffer}${pairs}<div class="reading-summary" data-summary="${k}"></div><label class="field"><span>${kind==='vazao'?'Observações / volume ou massa / tempo de coleta':'Observações do ponto'}</span><textarea data-row="${k}" data-property="note" maxlength="160" rows="2">${C.escape(row.note||'')}</textarea></label></section>`;
    }).join('');
    updateStats();
  }
  function updateStats(){
    document.querySelectorAll('[data-summary]').forEach(node=>{
      const r=state.readings[node.dataset.summary],s=C.summary(r?.pairs||[]),digits=Number(state.settings.digits);
      node.textContent=s.count?`${s.count}/${state.settings.repeats} pares completos · Média P: ${C.format(s.reference,digits)} · Média I: ${C.format(s.indication,digits)} · Diferença I−P: ${C.format(s.error,digits)} ${state.unit}`:'Sem pares completos. Campos em branco não entram nas médias.';
    });
    document.querySelectorAll('[data-reading]').forEach(input=>{
      const invalid=input.value.trim()!==''&&(C.number(input.value)===null||(input.dataset.reading==='temperature'&&C.number(input.value)<-273.15));
      input.setAttribute('aria-invalid',String(invalid));
    });
  }
  function check(){
    points=C.points(state.settings,kind);
    if(!state.unit||state.unit.length>20)throw Error('Informe uma unidade de até 20 caracteres.');
    for(const k of ['tempStart','tempEnd','humidityStart','humidityEnd']){
      const s=state.meta[k];if(!s)continue;const n=C.number(s);
      if(n===null||(k.startsWith('humidity')&&(n<0||n>100))||(k.startsWith('temp')&&n<-273.15))throw Error('Confira as condições ambientais: use temperatura em °C e umidade entre 0 e 100% UR, ou deixe em branco.');
    }
    const labels=points.map(p=>C.format(p.nominal,Number(state.settings.digits)));
    if(new Set(labels).size!==labels.length)throw Error('Há pontos que ficam iguais com este arredondamento. Aumente as casas decimais ou ajuste a lista de pontos.');
    if($('outputMode').value==='filled'){
      for(const r of Object.values(state.readings))for(const p of r.pairs||[])for(const k of ['reference','indication',...(kind==='ph'?['temperature']:[])]){
        if(p[k]?.trim()&&(C.number(p[k])===null||(k==='temperature'&&C.number(p[k])<-273.15)))throw Error('Há uma leitura inválida. Corrija os campos destacados antes de exportar a coleta preenchida.');
      }
    }
  }
  function setMode(){
    const mode=state.settings.mode;
    for(const k of ['count','step'])if($(k))$(k).closest('label').hidden=mode!==(k==='count'?'count':'step');
    $('manual-wrap').hidden=kind!=='ph'&&mode!=='manual';
    document.querySelectorAll('[data-count]').forEach(b=>b.classList.toggle('active',mode==='count'&&b.dataset.count===state.settings.count));
  }
  function render(rebuild=true){
    setMode();
    try{
      check();valid=true;$('form-error').hidden=true;
      $('point-summary').innerHTML=points.map((p,i)=>`<div class="point-chip"><span>${p.percent===null?'Ponto '+(i+1):C.format(p.percent,2)+'%'}</span><strong>${C.format(p.nominal,Number(state.settings.digits))} ${C.escape(state.unit)}</strong></div>`).join('');
      if(rebuild)renderCards();
      pages=P.make(state,points,title,kind,$('outputMode').value==='filled');
      $('preview').innerHTML=pages.map(P.svg).join('');
      $('print-root').innerHTML=pages.map(p=>'<div class="sheet-page">'+P.svg(p)+'</div>').join('');
      $('page-info').textContent=`${points.length} pontos · ${sequence().length} linhas de coleta · ${pages.length} folha(s) A4 em paisagem`;
    }catch(error){valid=false;$('form-error').hidden=false;$('form-error').textContent=error.message;$('point-summary').innerHTML='';$('preview').innerHTML='';$('print-root').innerHTML='';$('page-info').textContent='Confira os dados para preparar a folha.';}
    for(const id of ['download-pdf','print-sheet','preview-toggle'])$(id).disabled=!valid;
  }
  function readForm(){
    const next=capture();next.id=state.id;next.readings=state.readings;
    if(C.fingerprint(next)!==C.fingerprint(state)&&hasReadings()){
      if(!window.confirm('Esta alteração modifica os pontos ou a condição da coleta. Baixe um backup para conservar as leituras. Continuar e limpar as medições atuais?')){populate();return;}
      next.readings={};
    }else if(C.fingerprint(next)!==C.fingerprint(state)){next.readings={};}
    const rebuild=C.fingerprint(next)!==C.fingerprint(state)||next.settings.digits!==state.settings.digits;
    state=next;render(rebuild);save();
  }
  function download(data,type,name){const a=document.createElement('a'),url=URL.createObjectURL(new Blob([data],{type}));a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
  const filename=ext=>'ficha-calibracao-'+kind+(state.meta.tag?'-'+state.meta.tag.replace(/[^a-zA-Z0-9_-]/g,'-').slice(0,40):'')+'.'+ext;
  form.addEventListener('submit',e=>e.preventDefault());
  form.addEventListener('input',event=>{
    const el=event.target;
    if(el.dataset.row){
      const k=el.dataset.row; const row=state.readings[k]??={pairs:[],note:'',buffer:'',certificate:'',validity:''};
      if(el.dataset.reading){const index=Number(el.dataset.rep);while(row.pairs.length<=index)row.pairs.push({reference:'',indication:'',temperature:''});row.pairs[index][el.dataset.reading]=el.value;}
      else row[el.dataset.property]=el.value;
      updateStats();save();clearTimeout(timer);timer=setTimeout(()=>render(false),200);return;
    }
    if(el.dataset.meta||el.dataset.setting){readForm();}
  });
  document.querySelectorAll('[data-count]').forEach(b=>b.addEventListener('click',()=>{$('count').value=b.dataset.count;$('mode').value='count';readForm();}));
  $('edit-points')?.addEventListener('click',()=>{
    try{const p=C.points(state.settings,kind);$('manual').value=p.map(p=>C.format(p.nominal,Math.min(8,Number(state.settings.digits)))).join('; ');$('mode').value='manual';readForm();$('manual').focus();}catch(e){$('form-error').textContent=e.message;$('form-error').hidden=false;}
  });
  $('outputMode').addEventListener('change',()=>render(false));
  $('preview-toggle').addEventListener('click',()=>{$('preview').hidden=!$('preview').hidden;$('preview-toggle').setAttribute('aria-expanded',String(!$('preview').hidden));$('preview-toggle').textContent=$('preview').hidden?'Ver prévia':'Fechar prévia';});
  $('print-sheet').addEventListener('click',()=>{clearTimeout(timer);render(false);if(valid)window.print();});
  window.addEventListener('beforeprint',()=>render(false));
  $('download-pdf').addEventListener('click',async()=>{
    clearTimeout(timer);render(false);if(!valid)return;
    const button=$('download-pdf'),snapshot=pages,name=filename('pdf');button.disabled=true;button.textContent='Preparando PDF…';
    try{download(await P.pdf(snapshot),'application/pdf',name);}catch(e){say(e.message);}finally{button.textContent='Baixar PDF';button.disabled=!valid;}
  });
  $('backup').addEventListener('click',()=>download(JSON.stringify(state,null,2),'application/json',filename('json')));
  $('restore').addEventListener('click',()=>$('backup-file').click());
  $('backup-file').addEventListener('change',async event=>{
    const file=event.target.files[0];if(!file)return;
    try{if(file.size>1024*1024)throw Error('Backup muito grande. O limite é 1 MB.');const next=sanitize(JSON.parse(await file.text()));
      if(!window.confirm('Substituir o rascunho atual pelo backup selecionado?'))return;
      state=next;populate();render();save();say('Backup aberto. Confira a ficha antes de imprimir.');
    }catch(e){say('Não foi possível abrir: '+e.message);}finally{event.target.value='';}
  });
  $('duplicate').addEventListener('click',()=>{
    if(!window.confirm('Criar ficha para outro TAG usando esta configuração? Baixe o backup atual antes de continuar.'))return;
    state.readings={};state.id=uid();for(const k of ['tag','record','serial','date','operator','notes','condition','channel','tempStart','tempEnd','humidityStart','humidityEnd','timeStart','timeEnd'])state.meta[k]='';
    populate();render();save();say('Nova ficha: configuração mantida; identificação específica, condições ambientais e leituras limpas.');
  });
  $('clear').addEventListener('click',()=>{if(!window.confirm('Limpar a ficha deste aparelho? Baixe um backup se precisar conservar os dados.'))return;state=structuredClone(initial);state.id=uid();populate();render();try{localStorage.removeItem(key);say('Ficha limpa. Os dados não foram enviados a um servidor.');}catch{say('Ficha limpa nesta tela. O navegador não permitiu alterar o armazenamento.');}});
  try{const saved=localStorage.getItem(key);if(saved){state=sanitize(JSON.parse(saved));populate();say('Rascunho anterior recuperado neste aparelho. Baixe um backup para guardá-lo.');}}
  catch{say('O rascunho não pôde ser recuperado. Você pode preparar uma ficha nova e baixar um backup.');}
  render();
})();

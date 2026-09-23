/* Uma mesma lista de elementos desenha a prévia, a impressão e o PDF. */
(function () {
  'use strict';
  const C = window.FieldSheetsCore, WIDTH = 841.89, HEIGHT = 595.28;
  const canvas = document.createElement('canvas'), context = canvas.getContext('2d');
  const clean = value => String(value ?? '').normalize('NFC').replace(/[\r\n\t]+/g,' ').replace(/[^\x20-\x7e\u00a0-\u00ff]/g,'?');
  function wrap(value, width, size, bold) {
    context.font = `${bold ? 'bold ' : ''}${size}px Arial`;
    const out = [], text = clean(value); let line = '';
    for (const ch of text) {
      if (context.measureText(line + ch).width > width - 4 && line) { out.push(line.trimEnd()); line = ''; }
      line += ch;
    }
    out.push(line.trimEnd()); return out;
  }
  function make(state, points, title, kind, filled) {
    const pages = [], margin = 24, width = WIDTH - 2 * margin, bottom = HEIGHT - 28;
    let page, y;
    const add = object => page.push(object);
    function text(x, top, value, size = 9, bold = false, maxWidth = width) {
      const lines = wrap(value, maxWidth, size, bold);
      lines.forEach((line, i) => add({type:'text', x, y:top + i * (size + 3), text:line, size, bold}));
      return lines.length * (size + 3);
    }
    function rect(x, top, w, h, shade = false) { add({type:'rect', x, y:top, width:w, height:h, shade}); }
    function field(x, top, w, label, value) {
      const h = Math.max(24, 13 + wrap(value, w - 12, 9).length * 12);
      rect(x, top, w, h); text(x+6, top+9, label, 7, true, w-12);
      if (value) text(x+6, top+21, value, 9, false, w-12);
      return h;
    }
    const m = state.meta, digits = Number(state.settings.digits), reps = Number(state.settings.repeats);
    function newPage() {
      page = []; pages.push(page); y = 24;
      text(margin, y, 'FOLHA DE COLETA DE CALIBRAÇÃO - '+title.toUpperCase(), 14, true); y += 22;
      const groups = [
        [['Registro / ordem de serviço',m.record],['TAG',m.tag]],
        [['Empresa / cliente',m.customer],['Local da calibração',m.location]],
        [['Instrumento / modelo',m.instrument],['Número de série / canal',[m.serial,m.channel].filter(Boolean).join(' / ')]],
        [['Padrão / identificação',m.standard],['Certificado / documento do padrão',m.certificate]],
        [['Método / objeto avaliado',m.method],['Procedimento e revisão',m.procedure]],
        [['Montagem / meio / condições',m.setup],['Critério de estabilização',m.stability]],
        [['Executante / data',[m.operator,m.date].filter(Boolean).join(' / ')],['Condição / sentido',[m.condition,m.direction].filter(Boolean).join(' / ')]]
      ];
      groups.forEach(pair => {
        const heights = pair.map(([label,value]) => Math.max(24, 13 + wrap(value,width/2-12,9).length*12));
        const h = Math.max(...heights);
        pair.forEach(([label,value], i) => { const x=margin+i*width/2; rect(x,y,width/2,h); text(x+6,y+9,label,7,true,width/2-12); if(value)text(x+6,y+21,value,9,false,width/2-12); }); y += h;
      });
      y += 8; text(margin,y,'CONDIÇÕES AMBIENTAIS',9,true); y+=6;
      const env = [['Temperatura inicial (°C)',m.tempStart],['Umidade inicial (% UR)',m.humidityStart],['Horário inicial',m.timeStart],['Temperatura final (°C)',m.tempEnd],['Umidade final (% UR)',m.humidityEnd],['Horário final',m.timeEnd]];
      y+=Math.max(...env.map(([label,value],i)=>field(margin+i*width/6,y,width/6,label,value)))+9;
      y+=text(margin,y,`Unidade: ${state.unit}  |  ${points.length} pontos distintos  |  ${reps} leitura(s) por ponto  |  Resolução: ${m.resolution || '________________'}`,8)+6;
      return y;
    }
    const cols = [36,45,70,...Array(reps*2).fill((width-151-112)/(reps*2)),112];
    const labels = ['Nº','% faixa',`Nominal (${state.unit})`,...Array.from({length:reps},(_,i)=>[`P${i+1} (${state.unit})`,`I${i+1} (${state.unit})`]).flat(),'Observações'];
    function tableHeader() {
      const h=Math.max(25,...labels.map((label,i)=>wrap(label,cols[i]-8,8,true).length*11+7));
      let x=margin; labels.forEach((label,i)=>{rect(x,y,cols[i],h,true);text(x+4,y+11,label,8,true,cols[i]-8);x+=cols[i];});y+=h;
    }
    const sequence = points.map((point,index)=>({point,index,direction:m.direction==='Sequência informada'?'Sequência informada':'Subida'}));
    if(m.direction==='Descida') sequence.reverse().forEach(r=>r.direction='Descida');
    if(m.direction==='Subida e descida') sequence.push(...points.map((point,index)=>({point,index,direction:'Descida'})).reverse());
    newPage(); tableHeader();
    for (const item of sequence) {
      const key = `${item.index}:${item.direction}`, data=state.readings[key]||{pairs:[],note:''};
      const pairs=Array.from({length:reps},(_,i)=>data.pairs[i]||{}), stats=C.summary(pairs);
      const observation=filled ? data.note||'' : '';
      const values=[String(item.index+1),C.format(item.point.percent,2),C.format(item.point.nominal,digits),...pairs.flatMap(p=>filled?[p.reference||'',p.indication||'']:['','']),observation];
      const height=Math.max(kind==='ph'?42:36,...values.map((v,i)=>14+wrap(v,cols[i]-8,8).length*11+(kind==='ph'&&i>=3&&i<3+reps*2&&i%2===1?wrap(`T: ${filled?pairs[(i-3)/2].temperature||'______':'______'} °C`,cols[i]-8,7).length*10:0)));
      const buffer=kind==='ph' ? `Tampão / fabricante / lote: ${data.buffer||'________________________'}  |  Validade: ${data.validity||'__________'}  |  Certificado / referência: ${data.certificate||'________________________'}` : '';
      const bufferHeight=kind==='ph'?Math.max(26,wrap(buffer,width-12,8).length*11+8):0;
      const summaryHeight=filled&&stats.count?18:0;
      if(y+height+bufferHeight+summaryHeight>bottom-24){newPage();tableHeader();}
      if(y+height+bufferHeight+summaryHeight>bottom-24)throw Error('Os dados excedem o espaço da folha. Abrevie os campos de identificação ou as observações do ponto.');
      let x=margin;
      values.forEach((value,i)=>{rect(x,y,cols[i],height);text(x+4,y+14,value,8,false,cols[i]-8);if(kind==='ph'&&i>=3&&i<3+reps*2&&i%2===1){const p=pairs[(i-3)/2],t=`T: ${filled?p.temperature||'______':'______'} °C`;text(x+4,y+height-8-(wrap(t,cols[i]-8,7).length-1)*10,t,7,false,cols[i]-8);} x+=cols[i];});
      text(margin+3,y+height-5,item.direction==='Descida'?'D':item.direction==='Subida'?'S':'',7); y+=height;
      if(bufferHeight){rect(margin,y,width,bufferHeight);text(margin+6,y+12,buffer,8,false,width-12);y+=bufferHeight;}
      if(summaryHeight){text(margin+4,y+12,`${stats.count}/${reps} pares completos - Média P: ${C.format(stats.reference,digits)}  |  Média I: ${C.format(stats.indication,digits)}  |  Diferença I-P: ${C.format(stats.error,digits)} ${state.unit}`,8);y+=summaryHeight;}
    }
    const noteLines=wrap(m.notes||'',width-16,9);
    if(y+42>bottom)newPage();
    text(margin,y+12,'OBSERVAÇÕES GERAIS / CORREÇÕES / REGISTROS ADICIONAIS',8,true);y+=18;
    if(!m.notes){rect(margin,y,width,24);y+=24;}
    else for(const line of noteLines){if(y+17>bottom)newPage();text(margin+4,y+12,line,9);y+=13;}
    pages.forEach((p,i)=>{
      p.push({type:'text',x:margin,y:HEIGHT-12,text:'P = referência; I = instrumento. S = subida; D = descida. Registre apenas as leituras efetivamente realizadas.',size:7,bold:false});
      p.push({type:'text',x:WIDTH-100,y:HEIGHT-12,text:`Folha ${i+1} de ${pages.length}`,size:8,bold:false});
    });
    return pages;
  }
  function svg(page) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label="Folha de coleta para impressão"><rect width="100%" height="100%" fill="white"/>`+page.map(o=>o.type==='text'?`<text x="${o.x}" y="${o.y}" font-size="${o.size}" font-family="Arial,Helvetica,sans-serif" font-weight="${o.bold?'700':'400'}" fill="#111">${C.escape(o.text)}</text>`:`<rect x="${o.x}" y="${o.y}" width="${o.width}" height="${o.height}" fill="${o.shade?'#eceff1':'none'}" stroke="#777" stroke-width="0.5"/>`).join('')+'</svg>';
  }
  let library;
  async function pdf(pages) {
    if(!library) library=new Promise((resolve,reject)=>{
      const script=document.createElement('script');script.src='assets/fichas/vendor/pdf-lib.min.js';script.onload=resolve;script.onerror=()=>{library=null;script.remove();reject(Error('Não foi possível carregar o PDF. Use Imprimir ficha e escolha Salvar como PDF.'));};document.head.appendChild(script);
    });
    await library;
    const {PDFDocument,StandardFonts,rgb}=window.PDFLib;
    const doc=await PDFDocument.create(),normal=await doc.embedFont(StandardFonts.Helvetica),bold=await doc.embedFont(StandardFonts.HelveticaBold);
    doc.setTitle('Folha de coleta de calibração');
    for(const commands of pages){
      const page=doc.addPage([WIDTH,HEIGHT]);
      for(const o of commands){
        if(o.type==='text')page.drawText(o.text,{x:o.x,y:HEIGHT-o.y,size:o.size,font:o.bold?bold:normal,color:rgb(.05,.05,.05)});
        else page.drawRectangle({x:o.x,y:HEIGHT-o.y-o.height,width:o.width,height:o.height,borderWidth:.5,borderColor:rgb(.46,.46,.46),...(o.shade?{color:rgb(.93,.94,.95)}:{})});
      }
    }
    return doc.save();
  }
  window.FieldSheetsPrint={make,svg,pdf};
})();

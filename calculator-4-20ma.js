(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const en = document.body.dataset.language === 'en';
  const locale = en ? 'en-US' : 'pt-BR';
  const c = window.CurrentLoop;
  const t = en ? {
    number: 'Enter valid numbers for LRV, URV and the input. Use one decimal separator.',
    range: 'LRV and URV must be different. A zero-width range cannot be converted.',
    overflow: 'These values exceed the supported numeric range. Check the scale and input.',
    ok: 'Within range · linear conversion', warn: 'Outside the range · mathematical extrapolation, not a fault diagnosis.',
    increasing: 'Increasing range', reversed: 'Reversed range', width: 'Range width',
    current: 'Current', percent: 'Percentage', eng: 'Engineering value', inputCurrent: 'Input current', inputPercent: 'Input percentage', inputEng: 'Engineering input',
    signal: 'Current (mA)', ofRange: 'of range', chartInvalid: 'Enter a valid range and input to display the graph.',
    chartOutside: 'Point outside the graph. The bar is limited to 4–20 mA; the result above shows the extrapolation.',
    copied: 'Copied.', copyFail: 'Copy was unavailable. Select and copy the values directly from the page.',
    pdfLoading: 'Preparing your PDF…', pdfDone: 'PDF generated.', exportFail: 'The PDF could not be generated. Try again or use Print.',
    printFail: 'Allow the report window to open, or download the PDF.', printReady: 'The unbranded report opened in a separate window.',
    title: '4-20 mA conversion report', reportRange: 'Configured range', reportInput: 'Input', reportResult: 'Conversion result',
    table: 'Range reference table', scaled: 'Scaled value', reportNote: 'Linear calculation for reference. Not a measurement or calibration certificate.',
    reportDate: 'Generated', reportPrint: 'Print report', unit: 'Unit', amplitude: 'Range width', reportFormula: 'Value = LRV + ((mA - 4) / 16) x (URV - LRV)',
    reportFormula2: 'Percentage = ((mA - 4) / 16) x 100', noValue: 'No valid calculation to print.',
    menuOpen: 'Open menu', menuClose: 'Close menu'
  } : {
    number: 'Preencha LRV, URV e entrada com números válidos. Use um único separador decimal.',
    range: 'LRV e URV precisam ser diferentes. Não é possível converter uma faixa de amplitude zero.',
    overflow: 'Os valores excedem o limite numérico de cálculo. Confira a faixa e a entrada.',
    ok: 'Dentro da faixa · conversão linear', warn: 'Fora da faixa · extrapolação matemática, sem diagnóstico de falha.',
    increasing: 'Faixa crescente', reversed: 'Faixa invertida', width: 'Amplitude',
    current: 'Corrente', percent: 'Percentual', eng: 'Valor de engenharia', inputCurrent: 'Corrente de entrada', inputPercent: 'Percentual de entrada', inputEng: 'Valor de engenharia de entrada',
    signal: 'Corrente (mA)', ofRange: 'da faixa', chartInvalid: 'Preencha uma faixa e entrada válidas para visualizar o gráfico.',
    chartOutside: 'Ponto fora do gráfico. A barra fica limitada a 4–20 mA; o resultado acima mostra a extrapolação.',
    copied: 'Copiado.', copyFail: 'A cópia não ficou disponível. Selecione e copie os valores diretamente na página.',
    pdfLoading: 'Preparando seu PDF…', pdfDone: 'PDF gerado.', exportFail: 'Não foi possível gerar o PDF. Tente novamente ou use Imprimir.',
    printFail: 'Permita a abertura da janela do relatório ou baixe o PDF.', printReady: 'O relatório sem marca foi aberto em uma janela separada.',
    title: 'Relatório de conversão 4-20 mA', reportRange: 'Faixa configurada', reportInput: 'Entrada', reportResult: 'Resultado da conversão',
    table: 'Tabela da faixa', scaled: 'Valor da faixa', reportNote: 'Cálculo linear para referência. Não é uma medição ou certificado de calibração.',
    reportDate: 'Gerado em', reportPrint: 'Imprimir relatório', unit: 'Unidade', amplitude: 'Amplitude', reportFormula: 'Valor = LRV + ((mA - 4) / 16) x (URV - LRV)',
    reportFormula2: 'Percentual = ((mA - 4) / 16) x 100', noValue: 'Sem cálculo válido para impressão.',
    menuOpen: 'Abrir menu', menuClose: 'Fechar menu'
  };
  const fmt = (number, digits = 4) => {
    if (!Number.isFinite(number)) return '—';
    if (Object.is(number, -0) || number === 0) number = 0;
    const scientific = Math.abs(number) >= 1e9 || (Math.abs(number) > 0 && Math.abs(number) < 1e-4);
    return number.toLocaleString(locale, { maximumFractionDigits: digits, useGrouping: false, ...(scientific ? { notation: 'scientific', maximumFractionDigits: 4 } : {}) });
  };
  const esc = value => String(value).replace(/[&<>"']/g, s => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[s]));
  const withUnit = (n, unit) => fmt(n) + (unit ? ' ' + unit : '');
  let state;
  let announceTimer;
  let messageTimer;
  let exportBusy = false;
  const outputButtons = ['copyResult', 'copyTable', 'printReport', 'downloadPdf'];
  const modeLabel = mode => mode === 'ma' ? t.current : mode === 'percent' ? t.percent : t.eng;

  function graph(result, unit, dark = true, width = 640) {
    const left = 68, right = width - 18, top = 23, bottom = 151;
    const low = Math.min(result.lrv, result.urv), high = Math.max(result.lrv, result.urv);
    const line = dark ? '#2de0bc' : '#086c91', text = dark ? '#c0d3e0' : '#344d5d', grid = dark ? '#39556a' : '#d8e2e9';
    const y = value => bottom - ((value-low)/(high-low))*(bottom-top);
    const x = ma => left + (ma-4)/16*(right-left);
    let svg = '';
    [0, .25, .5, .75, 1].forEach(fraction => {
      const xx = left+fraction*(right-left), yy = bottom-fraction*(bottom-top);
      svg += `<path d="M${left} ${yy}H${right}M${xx} ${top}V${bottom}" fill="none" stroke="${grid}" stroke-width=".7"/>`;
      svg += `<text x="${left-9}" y="${yy+4}" text-anchor="end" fill="${text}" font-size="11">${esc(fmt(low+fraction*(high-low),2))}</text><text x="${xx}" y="174" text-anchor="middle" fill="${text}" font-size="11">${4+fraction*16}</text>`;
    });
    svg += `<text x="${left}" y="12" fill="${text}" font-size="11">${esc(unit || t.eng)}</text><text x="${(left+right)/2}" y="196" text-anchor="middle" fill="${text}" font-size="11">${t.signal}</text>`;
    svg += `<path d="M${left} ${y(result.lrv)}L${right} ${y(result.urv)}" stroke="${line}" stroke-width="3" fill="none"/>`;
    if (result.inRange) {
      svg += `<path d="M${x(result.ma)} ${bottom}V${y(result.eng)}H${left}" fill="none" stroke="${line}" stroke-width="1" stroke-dasharray="4 4" opacity=".6"/><circle cx="${x(result.ma)}" cy="${y(result.eng)}" r="12" fill="${line}" opacity=".15"/><circle cx="${x(result.ma)}" cy="${y(result.eng)}" r="5.5" stroke="${dark?'#fff':'#fff'}" stroke-width="2.5" fill="${line}"/>`;
    }
    return svg;
  }

  function renderGraph() {
    if (!state?.valid) return;
    const width = $('scaleChart').getBoundingClientRect().width < 460 ? 400 : 640;
    $('scaleChart').setAttribute('viewBox', `0 0 ${width} 202`);
    $('chartContent').innerHTML = graph(state, state.unit, true, width);
  }
  function getSummary(result) {
    return `${fmt(result.ma)} mA → ${withUnit(result.eng, result.unit)} · ${fmt(result.percent)}% ${t.ofRange}`;
  }
  function renderTable() {
    const fragment = document.createDocumentFragment();
    c.table(state.lrv, state.urv).forEach(row => {
      const tr = document.createElement('tr');
      if (row.ma % 4 === 0) tr.className = 'key-row';
      [fmt(row.ma)+' mA', fmt(row.percent)+'%', withUnit(row.eng,state.unit)].forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
      });
      fragment.appendChild(tr);
    });
    $('tableBody').replaceChildren(fragment);
  }
  function syncLabel() {
    const mode = $('inputMode').value;
    $('inputLabel').textContent = mode === 'ma' ? t.inputCurrent : mode === 'percent' ? t.inputPercent : t.inputEng;
    $('inputUnit').textContent = mode === 'ma' ? 'mA' : mode === 'percent' ? '%' : $('unit').value.trim();
  }
  function update() {
    syncLabel();
    const lrv = c.parseNumber($('lrv').value), urv = c.parseNumber($('urv').value), input = c.parseNumber($('inputValue').value);
    state = { ...c.calculate(lrv, urv, input, $('inputMode').value), unit: $('unit').value.trim() };
    const identical = lrv === urv;
    for (const [id,value] of [['lrv',lrv],['urv',urv],['inputValue',input]]) {
      $(id).setAttribute('aria-invalid', String(!Number.isFinite(value) || (id !== 'inputValue' && identical)));
    }
    outputButtons.forEach(id => { $(id).disabled = !state.valid || (exportBusy && id === 'downloadPdf'); });
    $('signalSlider').disabled = !state.valid;
    document.querySelectorAll('[data-current]').forEach(b => { b.disabled = !state.valid; b.setAttribute('aria-pressed',String(state.valid && Math.abs(Number(b.dataset.current)-state.ma)<1e-9)); });
    clearTimeout(announceTimer);
    if (!state.valid) {
      ['resultMa','resultPercent','resultEng'].forEach(id => { $(id).textContent = '—'; });
      $('rangeWidth').textContent = t.width + ': —';
      $('rangeDirection').textContent = '—';
      $('resultStatus').textContent = t[state.error];
      $('resultStatus').dataset.state = 'error';
      $('chartContent').replaceChildren();
      $('chartDesc').textContent = t.chartInvalid;
      $('chartCaption').textContent = t.chartInvalid;
      $('tableBody').replaceChildren();
      $('signalSlider').style.setProperty('--fill','0%');
      $('resultAnnouncement').textContent = '';
      $('printFallback').textContent = t.noValue;
      return;
    }
    $('resultMa').textContent = fmt(state.ma);
    $('resultPercent').textContent = fmt(state.percent);
    $('resultEng').textContent = fmt(state.eng);
    $('resultUnit').textContent = state.unit;
    $('rangeWidth').textContent = t.width + ': ' + withUnit(Math.abs(state.delta),state.unit);
    $('rangeDirection').textContent = state.delta < 0 ? t.reversed : t.increasing;
    $('resultStatus').textContent = state.inRange ? t.ok : t.warn;
    $('resultStatus').dataset.state = state.inRange ? 'ok' : 'warn';
    const clipped = Math.max(4, Math.min(20,state.ma));
    $('signalSlider').value = String(clipped);
    $('signalSlider').style.setProperty('--fill',`${Math.max(0,Math.min(100,state.percent))}%`);
    $('signalSlider').setAttribute('aria-valuetext',fmt(clipped)+' mA');
    $('chartDesc').textContent = `${withUnit(state.lrv,state.unit)} / ${withUnit(state.urv,state.unit)}. ${getSummary(state)}. ${state.inRange?'':t.chartOutside}`;
    $('chartCaption').textContent = state.inRange ? getSummary(state) : t.chartOutside;
    renderTable();
    renderGraph();
    announceTimer = setTimeout(() => { $('resultAnnouncement').textContent = getSummary(state); },350);
    $('printFallback').innerHTML = reportHTML(state, false);
  }
  function reportHTML(result, standalone) {
    const chart = `<svg viewBox="0 0 640 202" role="img" aria-label="${esc(getSummary(result))}">${graph(result,result.unit,false)}</svg>`;
    const rows = c.table(result.lrv,result.urv).map(r=>`<tr><td>${fmt(r.ma)} mA</td><td>${fmt(r.percent)}%</td><td>${esc(withUnit(r.eng,result.unit))}</td></tr>`).join('');
    const content = `<h1>${t.title}</h1><p class="date">${t.reportDate}: ${esc(new Date().toLocaleString(locale))}</p><h2>${t.reportRange}</h2><p>LRV (4 mA): <b>${esc(withUnit(result.lrv,result.unit))}</b> &nbsp; | &nbsp; URV (20 mA): <b>${esc(withUnit(result.urv,result.unit))}</b></p><p>${t.amplitude}: ${esc(withUnit(Math.abs(result.delta),result.unit))} · ${result.delta<0?t.reversed:t.increasing}</p><p>${t.reportInput}: ${modeLabel(result.mode)} = ${esc(withUnit(result.input,result.mode==='ma'?'mA':result.mode==='percent'?'%':result.unit))}</p><h2>${t.reportResult}</h2><p class="report-values">${esc(getSummary(result))}</p><p>${result.inRange?t.ok:t.warn}</p>${chart}<h2>${t.table}</h2><table><thead><tr><th>${t.current}</th><th>${t.percent}</th><th>${t.scaled}</th></tr></thead><tbody>${rows}</tbody></table><p class="formula">${t.reportFormula}<br>${t.reportFormula2}</p><p class="note">${t.reportNote}</p>`;
    if (!standalone) return content;
    return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.title}</title><style>@page{size:A4;margin:12mm}*{box-sizing:border-box}body{font:12px/1.4 Arial,sans-serif;color:#182c3a;background:#fff;margin:0 auto;padding:26px;max-width:800px}h1{font-size:24px;margin:0 0 7px}h2{font-size:15px;margin:17px 0 8px}p{margin:6px 0}.date,.note{font-size:10px;color:#526775}.report-values{font-size:18px;font-weight:700}svg{display:block;width:100%;height:175px}table{width:100%;border-collapse:collapse;font-size:11px}th,td{text-align:left;border-bottom:1px solid #d9e2e9;padding:6px 9px}th{background:#eff4f7}.formula{font-size:10px;margin-top:13px}button{padding:10px 18px;cursor:pointer;margin-bottom:20px}@media print{body{padding:0;max-width:none}button{display:none}a{color:inherit;text-decoration:none}}</style></head><body><button type="button" onclick="window.print()">${t.reportPrint}</button>${content}</body></html>`;
  }
  function showMessage(id, text) {
    $(id).textContent = text;
    if (id==='exportStatus') { clearTimeout(messageTimer); messageTimer = setTimeout(() => { $(id).textContent = ''; },8000); }
  }
  async function copy(text) {
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else {
        const area = document.createElement('textarea');
        area.value = text; area.style.position='fixed'; area.style.opacity='0'; document.body.append(area); area.select();
        let ok; try { ok = document.execCommand('copy'); } finally { area.remove(); }
        if (!ok) throw Error('Clipboard unavailable');
      }
      showMessage('copyStatus', t.copied);
    } catch (_) { showMessage('copyStatus',t.copyFail); }
  }
  $('conversionForm').addEventListener('submit',event => event.preventDefault());
  ['lrv','urv','unit','inputValue'].forEach(id => $(id).addEventListener('input',update));
  $('inputMode').addEventListener('change',() => {
    // Changing the input mode preserves the current physical point.
    if (state?.valid) {
      const number = $('inputMode').value === 'ma' ? state.ma : $('inputMode').value === 'percent' ? state.percent : state.eng;
      $('inputValue').value = String(Number(number.toPrecision(14))).replace('.',en?'.':',');
    }
    update();
  });
  const presets = [[0,10,'bar',8.4],[0,100,'°C',12],[-50,150,'°C',12],[0,1000,'L/h',12],[100,0,'%',12]];
  function setPreset(index) {
    const [lrv,urv,unit,current] = presets[index];
    $('lrv').value = String(lrv); $('urv').value = String(urv); $('unit').value = unit; $('inputMode').value = 'ma'; $('inputValue').value = String(current).replace('.',en?'.':','); update();
  }
  document.querySelectorAll('[data-preset]').forEach(button => button.addEventListener('click',()=>setPreset(Number(button.dataset.preset))));
  $('resetExample').addEventListener('click',()=>setPreset(0));
  function setCurrent(current) { $('inputMode').value='ma'; $('inputValue').value=String(current).replace('.',en?'.':','); update(); }
  $('signalSlider').addEventListener('input',event=>setCurrent(event.target.value));
  document.querySelectorAll('[data-current]').forEach(button=>button.addEventListener('click',()=>setCurrent(button.dataset.current)));
  $('copyResult').addEventListener('click',()=>{ if(state.valid) copy(`LRV: ${withUnit(state.lrv,state.unit)} | URV: ${withUnit(state.urv,state.unit)}\n${getSummary(state)}\n${state.inRange?t.ok:t.warn}`); });
  $('copyTable').addEventListener('click',()=>{
    if (state.valid) copy(`${t.current}\t${t.percent}\t${t.scaled}\n`+c.table(state.lrv,state.urv).map(r=>`${fmt(r.ma)} mA\t${fmt(r.percent)}%\t${withUnit(r.eng,state.unit)}`).join('\n'));
  });
  $('printReport').addEventListener('click',() => {
    if (!state.valid) return;
    const report = window.open('about:blank','_blank');
    if (!report) { showMessage('exportStatus',t.printFail); return; }
    report.opener = null;
    report.document.open(); report.document.write(reportHTML({...state},true)); report.document.close();
    report.focus();
    setTimeout(()=>{ try { report.print(); } catch (_) {} },250);
    showMessage('exportStatus',t.printReady);
  });
  let reportModule;
  function loadReportModule() {
    if (window.CurrentLoopReport) return Promise.resolve();
    if (!reportModule) reportModule = new Promise((resolve,reject)=>{
      const script = document.createElement('script'); script.src='calculator-4-20ma-report.js?v=20260923';
      script.onload=()=>window.CurrentLoopReport?resolve():reject(Error('Report module unavailable'));
      script.onerror=()=>{ script.remove(); reportModule=null; reject(Error('Report module unavailable')); };
      document.head.append(script);
    });
    return reportModule;
  }
  $('downloadPdf').addEventListener('click',async()=>{
    if (!state.valid || exportBusy) return;
    const snapshot = {...state};
    exportBusy=true; $('downloadPdf').disabled=true; showMessage('exportStatus',t.pdfLoading);
    try {
      await loadReportModule();
      const bytes = await window.CurrentLoopReport.create(snapshot,{t,locale});
      const url = URL.createObjectURL(new Blob([bytes],{type:'application/pdf'}));
      const link = document.createElement('a'); link.href=url; link.download=en?'4-20mA-conversion.pdf':'conversao-4-20mA.pdf'; document.body.append(link); link.click(); link.remove();
      setTimeout(()=>URL.revokeObjectURL(url),60000); showMessage('exportStatus',t.pdfDone);
    } catch(error) { console.error('PDF export failed',error); showMessage('exportStatus',t.exportFail); }
    finally { exportBusy=false; $('downloadPdf').disabled=!state.valid; }
  });
  const menu = $('mainNav'), toggle = $('menuToggle');
  function closeMenu() { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label',t.menuOpen); }
  toggle.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?t.menuClose:t.menuOpen);});
  document.addEventListener('click',event=>{if(!menu.contains(event.target)&&!toggle.contains(event.target))closeMenu();});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('is-open')){closeMenu();toggle.focus();}});
  window.addEventListener('resize',renderGraph);
  let previousTitle;
  window.addEventListener('beforeprint',()=>{previousTitle=document.title;document.title=t.title;});
  window.addEventListener('afterprint',()=>{if(previousTitle)document.title=previousTitle;});
  update();
})();

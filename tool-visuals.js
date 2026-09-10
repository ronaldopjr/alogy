/* Calculation-linked graphics. No tracking, remote requests or animation. */
(function (root) {
  'use strict';
  const fmt = (n, digits = 2) => n.toLocaleString('pt-BR', {maximumFractionDigits: digits});
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function finite(values) {
    if (!values.every(Number.isFinite)) throw new Error('O resultado excede o limite numérico. Confira as entradas.');
  }
  function filter(v) {
    finite(Object.values(v));
    if (v.dpclean < 0 || v.dp < 0 || v.dpalarm <= v.dpclean || v.q <= 0 || v.qref <= 0 || ![1,2].includes(v.exponent))
      throw new Error('Use DP não negativo, vazões maiores que zero e alarme maior que o DP limpo.');
    const norm = v.dp * Math.pow(v.qref / v.q, v.exponent);
    const percent = (norm - v.dpclean) / (v.dpalarm - v.dpclean) * 100;
    finite([norm, percent]);
    return {norm, percent, status: norm >= v.dpalarm ? 'Alarme atingido' : norm < v.dpclean ? 'Abaixo da referência limpa' : 'Abaixo do alarme'};
  }
  function fan(v) {
    finite(Object.values(v));
    if (v.q < 0 || v.dp < 0 || v.ef <= 0 || v.ef > 100 || v.margem < 0 || v.tensao <= 0 || v.fp <= 0 || v.fp > 1)
      throw new Error('Use vazão e pressão não negativas, rendimento entre 0 e 100% (excluindo zero), margem não negativa, tensão positiva e FP × rendimento entre 0 e 1 (excluindo zero).');
    const air = v.q / 3600 * v.dp / 1000;
    const shaft = air / (v.ef / 100);
    const motor = shaft * (1 + v.margem / 100);
    const current = motor * 1000 / (Math.sqrt(3) * v.tensao * v.fp);
    finite([air, shaft, motor, current]);
    return {air, shaft, motor, current};
  }
  function signal(min, max, ma) {
    finite([min,max,ma,max-min]);
    if (min === max) throw new Error('A faixa não pode ter span zero.');
    const value = min + (ma - 4) / 16 * (max - min);
    finite([value]);
    return {value, percent:(ma-4)/16*100};
  }
  function leak(v) {
    finite(Object.values(v));
    if (v.diam <= 0 || v.press < 0 || v.qtd < 1 || !Number.isInteger(v.qtd) || v.horas < 0 || v.horas > 24 || v.dias < 0 || v.dias > 31 || v.custo < 0 || v.cd <= 0 || v.cd > 1 || v.temp <= -273.15)
      throw new Error('Use diâmetro positivo, pressão e custo não negativos, quantidade inteira, até 24 h/dia, até 31 dias/mês, Cd entre 0 e 1 e temperatura acima do zero absoluto.');
    const gamma=1.4, R=287.05, rhoN=1.293, p2=101325;
    const p1=(v.press+1.01325)*100000, t=v.temp+273.15, area=Math.PI*Math.pow(v.diam/1000,2)/4;
    const ratio=p2/p1, critical=Math.pow(2/(gamma+1),gamma/(gamma-1));
    let mass;
    if (ratio <= critical) mass=v.cd*area*p1*Math.sqrt(gamma/(R*t))*Math.pow(2/(gamma+1),(gamma+1)/(2*(gamma-1)));
    else mass=v.cd*area*p1*Math.sqrt(2*gamma/(R*t*(gamma-1))*(Math.pow(ratio,2/gamma)-Math.pow(ratio,(gamma+1)/gamma)));
    const perLeak=mass/rhoN*3600, flow=perLeak*v.qtd, volume=flow*v.horas*v.dias, monthly=volume*v.custo;
    finite([perLeak,flow,volume,monthly]);
    return {perLeak,flow,volume,monthly,choked:ratio<=critical};
  }
  function residence(v) {
    finite(Object.values(v));
    if (v.vol <= 0 || v.util <= 0 || v.util > 100 || v.q <= 0 || v.scenario <= 0 || v.scenario > 100)
      throw new Error('Use volume e vazão positivos; volume útil e cenário devem estar acima de 0% e até 100%.');
    const useful=v.vol*v.util/100, nominal=useful/v.q, scenario=nominal*v.scenario/100;
    finite([useful,nominal,scenario,24/nominal,24/scenario]);
    return {useful,nominal,scenario,turnovers:24/nominal,scenarioTurnovers:24/scenario};
  }
  function gas(v) {
    const numeric=['q','p','t','patm','zop','dens','tn','pn','ts','ps','zn','zs'];
    finite(numeric.map(k=>v[k]));
    if (!['op','n','s'].includes(v.mode) || !['g','abs'].includes(v.pressureType) || v.q <= 0 || v.patm <= 0 || v.pn <= 0 || v.ps <= 0 || v.t <= -273.15 || v.tn <= -273.15 || v.ts <= -273.15 || v.zop <= 0 || v.zn <= 0 || v.zs <= 0 || v.dens < 0)
      throw new Error('Confira vazão, pressões absolutas, temperaturas acima do zero absoluto, fatores Z positivos e densidade não negativa.');
    const pabs=v.pressureType==='g'?v.p+v.patm:v.p;
    if (pabs <= 0) throw new Error('A pressão absoluta calculada precisa ser maior que zero.');
    const top=v.t+273.15, tn=v.tn+273.15, ts=v.ts+273.15;
    const fn=(pabs/v.pn)*(tn/top)*(v.zn/v.zop), fs=(pabs/v.ps)*(ts/top)*(v.zs/v.zop);
    let qop=v.mode==='op'?v.q:v.mode==='n'?v.q/fn:v.q/fs;
    const qn=qop*fn, qs=qop*fs, mass=v.dens>0?qn*v.dens:NaN;
    finite([pabs,fn,fs,qop,qn,qs,...(v.dens>0?[mass]:[])]);
    return {pabs,fn,fs,qop,qn,qs,mass};
  }
  function airConsumption(v) {
    const common=['qty','duty','extra','hoursDay','daysMonth','cost','compressor'];
    finite(common.map(k=>v[k]));
    if (!['double','single','knownNlMin','knownNm3h'].includes(v.mode) || v.qty < 1 || !Number.isInteger(v.qty) || v.duty < 0 || v.duty > 100 || v.extra < 0 || v.extra > 200 || v.hoursDay < 0 || v.hoursDay > 24 || v.daysMonth < 0 || v.daysMonth > 31 || v.cost < 0 || v.compressor < 0)
      throw new Error('Confira quantidade inteira, uso de 0 a 100%, margem não negativa, até 24 h/dia, até 31 dias/mês, custo e capacidade não negativos.');
    const use=v.duty/100, margin=1+v.extra/100;
    let nlCycle=NaN, nlMin, note;
    if (v.mode==='knownNlMin') {
      finite([v.knownNl]); if (v.knownNl <= 0) throw new Error('Informe consumo conhecido maior que zero.');
      nlMin=v.knownNl*v.qty*use*margin; note='Consumo conhecido em NL/min';
    } else if (v.mode==='knownNm3h') {
      finite([v.knownNm3h]); if (v.knownNm3h <= 0) throw new Error('Informe consumo conhecido maior que zero.');
      nlMin=v.knownNm3h*1000/60*v.qty*use*margin; note='Consumo conhecido em Nm³/h';
    } else {
      finite([v.bore,v.rod,v.stroke,v.cycles,v.pressure]);
      if (v.bore <= 0 || v.rod < 0 || v.rod >= v.bore || v.stroke <= 0 || v.cycles < 0 || v.pressure < 0)
        throw new Error('Use diâmetro e curso positivos, haste menor que o pistão, ciclos e pressão não negativos.');
      const bore=v.bore/1000, rod=v.rod/1000, stroke=v.stroke/1000;
      const advance=Math.PI*bore*bore/4*stroke;
      const retract=v.mode==='double'?Math.PI*(bore*bore-rod*rod)/4*stroke:0;
      // Isothermal free-air approximation at the same reference temperature, Pn = 1.01325 bar(a).
      nlCycle=(advance+retract)*1000*((v.pressure+1.01325)/1.01325)*margin;
      nlMin=nlCycle*v.cycles*v.qty*use;
      note=v.mode==='double'?'Cilindro de dupla ação':'Cilindro de simples ação';
    }
    const nm3h=nlMin*60/1000, cubicFeetMin=nm3h*35.3146667/60;
    const day=nm3h*v.hoursDay, month=day*v.daysMonth, monthlyCost=month*v.cost;
    const capacity=v.compressor>0?nm3h/v.compressor*100:NaN;
    finite([nlMin,nm3h,cubicFeetMin,day,month,monthlyCost,...(v.compressor>0?[capacity]:[])]);
    return {nlCycle,nlMin,nm3h,cubicFeetMin,day,month,monthlyCost,capacity,note};
  }
  function airCost(v) {
    finite(['h','d','tariff','loss'].map(k=>v[k]));
    if (!['flow','power'].includes(v.mode) || v.h < 0 || v.h > 24 || v.d < 0 || v.d > 31 || v.tariff < 0 || v.loss < 0 || v.loss > 100)
      throw new Error('Use até 24 h/dia e 31 dias/mês, tarifa não negativa e perdas de 0 a 100%.');
    if (v.mode==='flow') { finite([v.q,v.esp]); if (v.q <= 0 || v.esp <= 0) throw new Error('Informe vazão e consumo específico maiores que zero.'); }
    else { finite([v.kw]); if (v.kw <= 0) throw new Error('Informe potência média medida maior que zero.'); }
    const hours=v.h*v.d;
    const energy=v.mode==='flow'?v.q*60*hours*v.esp:v.kw*hours;
    const cost=energy*v.tariff, lossCost=cost*v.loss/100;
    finite([hours,energy,cost,lossCost]);
    return {hours,energy,cost,lossCost,annualCost:cost*12,annualLossCost:lossCost*12};
  }
  function compressorSpecific(v) {
    finite(['power','flow','pressure','hours','days','tariff','target'].map(k=>v[k]));
    if (v.power <= 0 || v.flow <= 0 || v.pressure < 0 || v.hours < 0 || v.hours > 24 || v.days < 0 || v.days > 31 || v.tariff < 0 || v.target <= 0)
      throw new Error('Use potência, vazão e meta positivas; pressão e tarifa não negativas; até 24 h/dia e 31 dias/mês.');
    const specific=v.power/v.flow, energy=v.power*v.hours*v.days, cost=energy*v.tariff;
    finite([specific,energy,cost]);
    return {specific,energy,cost,difference:(specific/v.target-1)*100,status:specific<=v.target?'Dentro da meta informada':'Acima da meta informada'};
  }
  function clear(id, message = 'Preencha entradas válidas para visualizar o gráfico.') {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '<p class="visual-empty">' + esc(message) + '</p>';
  }
  function bars(id, rows, unit, title) {
    const el = document.getElementById(id);
    if (!el) return;
    finite(rows.map(r => r.value));
    const max = Math.max(...rows.map(r => r.value), 1e-12);
    // Values remain readable outside SVG, including on narrow phones and in print.
    el.innerHTML = '<div class="visual-bars" role="group" aria-label="' + esc(title) + '">' + rows.map((r,i) =>
      '<div class="visual-row"><div><span>'+esc(r.label)+'</span><strong>'+esc(fmt(r.value,3)+' '+unit)+'</strong></div>'+
      '<svg viewBox="0 0 300 16" aria-hidden="true" focusable="false"><rect width="300" height="16" rx="5" fill="#e5edf3"/><rect width="'+(r.value/max*300)+'" height="16" rx="5" fill="'+(i===1?'#006bb1':'#526679')+'"/></svg></div>'
    ).join('')+'</div>';
  }
  function line(id, min, max, ma, unit) {
    const el = document.getElementById(id);
    if (!el) return;
    const result = signal(min,max,ma);
    // Extrapolation is stated in text; never pretend a clipped point is in range.
    const inside = ma >= 4 && ma <= 20;
    const y = v => 170 - (v - Math.min(min,max)) / Math.abs(max-min) * 130;
    const point = inside ? '<circle cx="'+(50+(ma-4)/16*270)+'" cy="'+y(result.value)+'" r="6" fill="#b74700" stroke="#fff" stroke-width="2"/>' : '';
    el.innerHTML = '<svg viewBox="0 0 350 220" role="img" aria-label="'+esc('Escala linear: 4 mA = '+fmt(min)+'; 20 mA = '+fmt(max)+' '+unit)+'">'+
      '<path d="M50 30V170H320" fill="none" stroke="#526679"/>'+
      '<path d="M50 '+y(min)+'L320 '+y(max)+'" stroke="#006bb1" stroke-width="3" fill="none"/>'+point+
      '<text x="50" y="193">4</text><text x="180" y="193">12</text><text x="307" y="193">20</text><text x="160" y="216">Sinal (mA)</text>'+
      '<text x="54" y="23">'+esc(fmt(Math.max(min,max))+' '+unit)+'</text><text x="54" y="157">'+esc(fmt(Math.min(min,max))+' '+unit)+'</text></svg>'+
      '<p class="visual-summary">'+esc(fmt(ma,3)+' mA → '+fmt(result.value,3)+' '+unit+' ('+fmt(result.percent)+'% do span). '+(inside?'O ponto acompanha sua entrada.':'Fora de 4–20 mA: extrapolação matemática; ponto não exibido na escala nominal.'))+'</p>';
  }
  function tank(id, result, fillPercent) {
    const el=document.getElementById(id); if(!el)return;
    const fill=Math.max(8,Math.min(120,fillPercent*1.2)), y=165-fill;
    el.innerHTML='<svg viewBox="0 0 360 220" role="img" aria-label="Tanque com '+esc(fmt(fillPercent))+' por cento de volume útil">'+
      '<defs><clipPath id="alogyTankClip"><rect x="95" y="35" width="170" height="130" rx="18"/></clipPath></defs><path d="M95 35V165Q95 185 115 185H245Q265 185 265 165V35" fill="none" stroke="#17384f" stroke-width="5"/>'+
      '<rect x="95" y="'+y+'" width="170" height="'+fill+'" fill="#2c78b9" opacity=".8" clip-path="url(#alogyTankClip)"/><path d="M25 75H92M268 145H335" stroke="#006bb1" stroke-width="5" marker-end="url(#none)"/>'+
      '<text x="20" y="63">Entrada</text><text x="282" y="135">Saída</text><text x="125" y="207">Volume útil: '+esc(fmt(result.useful))+' m³</text></svg>'+
      '<p class="visual-summary">Tempo nominal: '+esc(fmt(result.nominal))+' h · Cenário informado: '+esc(fmt(result.scenario))+' h.</p>';
  }
  function pneumatic(id, result, mode) {
    const el=document.getElementById(id); if(!el)return;
    const double=mode==='double';
    el.innerHTML='<svg viewBox="0 0 520 210" role="img" aria-label="Esquema funcional de cilindro pneumático e consumo calculado">'+
      '<path d="M35 105H120M400 105H490" stroke="#006bb1" stroke-width="7"/><rect x="120" y="45" width="280" height="120" rx="12" fill="#fff" stroke="#17384f" stroke-width="5"/>'+
      '<path d="M270 48V162M270 105H455" stroke="#17384f" stroke-width="7"/><path d="M54 83L85 105 54 127M466 83L492 105 466 127" fill="none" stroke="#006bb1" stroke-width="6"/>'+
      '<text x="135" y="82">Avanço</text><text x="298" y="82">'+(double?'Retorno':'Retorno por mola/carga')+'</text><text x="154" y="196">'+esc(fmt(result.nlMin))+' NL/min · '+esc(fmt(result.nm3h))+' Nm³/h</text></svg>'+
      '<p class="visual-summary">O desenho acompanha o tipo selecionado. O cálculo geométrico considera '+(double?'as duas câmaras por ciclo':'apenas o curso alimentado')+'.</p>';
  }
  root.ToolVisuals = {filter, fan, signal, leak, residence, gas, airConsumption, airCost, compressorSpecific, bars, line, tank, pneumatic, clear, fmt, esc};
})(typeof window === 'undefined' ? globalThis : window);

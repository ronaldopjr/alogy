/* Fichas de campo: funções puras, compartilhadas pela interface e pelos testes. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FieldSheetsCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function number(value) {
    const s = String(value ?? '').trim();
    if (!/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)$/.test(s)) return null;
    const n = Number(s.replace(',', '.'));
    return Number.isFinite(n) && Math.abs(n) <= 1e12 ? n : null;
  }
  function generate(low, high, count) {
    if (!Number.isFinite(low) || !Number.isFinite(high) || high <= low) throw Error('Informe uma faixa crescente: o limite superior deve ser maior que o inferior.');
    if (!Number.isInteger(count) || count < 2 || count > 50) throw Error('Escolha de 2 a 50 pontos, incluindo os extremos.');
    return Array.from({length: count}, (_, i) => ({nominal: i === count - 1 ? high : low + (high - low) * i / (count - 1), percent: 100 * i / (count - 1)}));
  }
  function points(settings, kind) {
    const low = number(settings.low), high = number(settings.high);
    if(kind==='balanca'){
      if(high===null||high<=0||low===null||low<0||low>=high)throw Error('Informe capacidade positiva e carga inicial entre zero e a capacidade.');
      if(!['cargas','repetibilidade','excentricidade'].includes(settings.test))throw Error('Escolha o ensaio da balança.');
      if(settings.test!=='cargas'){
        const load=number(settings.testLoad);
        if(load===null||load<=0||load>high)throw Error('A carga do ensaio deve ser positiva e não pode exceder a capacidade da balança.');
        return generate(0,1,number(settings.count)).map((_,i)=>({nominal:load,percent:100*load/high,label:(settings.test==='repetibilidade'?'Repetição ':'Posição ')+(i+1)}));
      }
    }
    if (kind === 'ph' || settings.mode === 'manual') {
      const tokens = String(settings.manual).split(/[;\n]/).map(s => s.trim()).filter(Boolean);
      if (!tokens.length || tokens.length > 50) throw Error('Informe de 1 a 50 pontos, separados por ponto e vírgula ou por linha.');
      return tokens.map(s => {
        const nominal = number(s);
        if (nominal === null) throw Error('Ponto inválido: use números e vírgula ou ponto decimal, sem separador de milhar.');
        if(kind==='balanca'&&(nominal<0||nominal>high))throw Error('As cargas devem ficar entre zero e a capacidade da balança.');
        return {nominal, percent: kind === 'ph' || low === null || high === null || high <= low ? null : 100 * (nominal - low) / (high - low)};
      });
    }
    if (low === null || high === null) throw Error('Preencha os dois limites da faixa. Use vírgula ou ponto decimal, sem separador de milhar.');
    if (settings.mode === 'step') {
      const step = number(settings.step);
      if (step === null || step <= 0 || step > 100 || 100 / step > 49 || Math.abs(100 / step - Math.round(100 / step)) > 1e-8) throw Error('Use um passo que divida 100% em intervalos iguais, com até 50 pontos (ex.: 10, 20 ou 25%).');
      return generate(low, high, Math.round(100 / step) + 1);
    }
    return generate(low, high, number(settings.count));
  }
  function format(n, digits = 2) {
    return n === null || n === undefined ? '' : (Math.abs(n) < .5 * 10 ** -digits ? 0 : n).toLocaleString('pt-BR', {useGrouping: false, minimumFractionDigits: digits, maximumFractionDigits: digits});
  }
  function summary(pairs) {
    const valid = pairs.map(p => [number(p.reference), number(p.indication)]).filter(p => p.every(n => n !== null));
    if (!valid.length) return {count: 0, reference: null, indication: null, error: null};
    const mean = j => valid.reduce((s, p) => s + p[j], 0) / valid.length;
    return {count: valid.length, reference: mean(0), indication: mean(1), error: mean(1) - mean(0)};
  }
  function escape(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function fingerprint(state) {
    const {digits, ...settings} = state.settings;
    return JSON.stringify({settings, unit: state.unit, condition: state.meta.condition, direction: state.meta.direction, channel: state.meta.channel, method: state.meta.method});
  }
  function sequence(points, direction) {
    const list=points.map((point,index)=>({point,index,direction:direction==='Sequência informada'?direction:'Subida'}));
    if(direction==='Sequência informada')return list;
    list.sort((a,b)=>a.point.nominal-b.point.nominal);
    if(direction==='Descida')return list.reverse().map(r=>({...r,direction:'Descida'}));
    return direction==='Subida e descida'?list.concat(list.slice().reverse().map(r=>({...r,direction:'Descida'}))):list;
  }
  return {number, generate, points, format, summary, escape, fingerprint, sequence};
});

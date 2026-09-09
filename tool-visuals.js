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
  root.ToolVisuals = {filter, fan, signal, bars, line, clear, fmt, esc};
})(typeof window === 'undefined' ? globalThis : window);

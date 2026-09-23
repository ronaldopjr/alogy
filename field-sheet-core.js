(function (root) {
  'use strict';
  const number = value => {
    const s = String(value ?? '').trim();
    if (!/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)$/.test(s)) return null;
    const n = Number(s.replace(',', '.'));
    return Number.isFinite(n) ? n : null;
  };
  function points(lower, upper, count, step) {
    const a = number(lower), b = number(upper);
    if (a === null || b === null || b <= a) throw Error('Informe uma faixa válida, com limite superior maior que o inferior. Faixas negativas são aceitas.');
    let ratios;
    if (step !== undefined) {
      const s = number(step);
      if (s === null || s < 1 || s > 100) throw Error('Informe um passo entre 1 e 100%.');
      ratios = Array.from({length: Math.ceil(100 / s)}, (_, i) => i * s / 100).concat(1);
    } else {
      const n = number(count);
      if (!Number.isInteger(n) || n < 2 || n > 101) throw Error('Escolha de 2 a 101 pontos.');
      ratios = Array.from({length: n}, (_, i) => i / (n - 1));
    }
    return ratios.map(r => ({percent: r * 100, nominal: a + (b - a) * r}));
  }
  function summary(readings) {
    const pairs = readings.map(r => [number(r.ref), number(r.ind)]).filter(p => p.every(n => n !== null));
    const incomplete = readings.filter(r => (number(r.ref) === null) !== (number(r.ind) === null)).length;
    if (!pairs.length) return {count: 0, incomplete};
    const ref = pairs.reduce((s, p) => s + p[0], 0) / pairs.length;
    const ind = pairs.reduce((s, p) => s + p[1], 0) / pairs.length;
    return {count: pairs.length, incomplete, ref, ind, difference: ind - ref};
  }
  const api = {number, points, summary};
  if (typeof module !== 'undefined') module.exports = api;
  root.FieldSheetCore = api;
})(typeof window === 'undefined' ? globalThis : window);

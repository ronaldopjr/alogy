/* Linear scale math; shared by both language versions and exports. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CurrentLoop = api;
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';
  function parseNumber(value) {
    const raw = String(value ?? '').trim().replace(/\u2212/g, '-');
    // One decimal separator; never silently guess thousands grouping.
    if (!/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[+-]?\d+)?$/i.test(raw)) return NaN;
    const number = Number(raw.replace(',', '.'));
    return Number.isFinite(number) ? number : NaN;
  }
  function calculate(lrv, urv, input, mode) {
    const delta = urv - lrv;
    if (![lrv, urv, input, delta].every(Number.isFinite)) return { valid: false, error: 'number' };
    if (delta === 0) return { valid: false, error: 'range' };
    if (!['ma', 'percent', 'eng'].includes(mode)) return { valid: false, error: 'number' };
    const fraction = mode === 'ma' ? (input - 4) / 16 : mode === 'percent' ? input / 100 : (input - lrv) / delta;
    const ma = mode === 'ma' ? input : 4 + 16 * fraction;
    const percent = mode === 'percent' ? input : fraction * 100;
    const eng = mode === 'eng' ? input : lrv + fraction * delta;
    if (![ma, percent, eng].every(Number.isFinite)) return { valid: false, error: 'overflow' };
    return { valid: true, lrv, urv, delta, input, mode, ma, percent, eng, inRange: fraction >= 0 && fraction <= 1 };
  }
  function table(lrv, urv) {
    return Array.from({ length: 9 }, (_, i) => calculate(lrv, urv, 4 + i * 2, 'ma'));
  }
  return { parseNumber, calculate, table };
});

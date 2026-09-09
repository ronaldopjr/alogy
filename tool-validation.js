/* Validation shared by the calculators reviewed in September 2026. */
(function (root) {
  'use strict';
  function number(id) {
    const raw = String(document.getElementById(id)?.value ?? '').trim();
    if (!raw) return NaN;
    const compact = raw.replace(/\s/g, '');
    const normalized = compact.includes(',') ? compact.replace(/\./g, '').replace(',', '.') : compact;
    if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(normalized)) return NaN;
    const value = Number(normalized);
    return Number.isFinite(value) ? value : NaN;
  }

  function install(config) {
    const original = root[config.calculate];
    if (typeof original !== 'function') throw new Error('Missing calculator: ' + config.calculate);
    let valid = false;
    let errorBox;
    function message(text, success = false) {
      if (!errorBox) {
        errorBox = document.createElement('p');
        errorBox.className = 'calc-note tool-validation-error';
        errorBox.setAttribute('role', 'status');
        errorBox.setAttribute('aria-live', 'polite');
        const anchor = document.querySelector('.calc-grid') || document.querySelector('main');
        if (anchor) anchor.appendChild(errorBox);
      }
      errorBox.hidden = !text;
      errorBox.className = success ? 'calc-note tool-copy-success' : 'calc-note tool-validation-error';
      errorBox.textContent = text;
    }
    function clear(text) {
      valid = false;
      for (const id of config.outputs || []) {
        const el = document.getElementById(id);
        if (el) el.textContent = '—';
      }
      for (const id of config.tables || []) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
      }
      for (const id of config.bars || []) {
        const el = document.getElementById(id);
        if (el) el.style.width = '0%';
      }
      if (config.status) {
        const el = document.getElementById(config.status);
        if (el) { el.textContent = 'Dados inválidos'; el.classList.remove('status-ok', 'pill-ok', 'status-good', 'good', 'ok'); el.classList.add('tool-invalid-result'); }
      }
      message(text);
      return false;
    }
    root[config.calculate] = function (...args) {
      const values = {};
      const missing = [];
      for (const id of config.fields) {
        values[id] = number(id);
        const bad = !Number.isFinite(values[id]);
        document.getElementById(id)?.setAttribute('aria-invalid', String(bad));
        if (bad) missing.push(id);
      }
      if (missing.length) return clear('Preencha os campos destacados com números válidos. Campo vazio não equivale a zero.');
      const problem = config.check ? config.check(values) : '';
      if (problem) return clear(problem);
      valid = false;
      if (config.status) document.getElementById(config.status)?.classList.remove('tool-invalid-result');
      original.apply(this, args);
      valid = true;
      message('');
      return true;
    };
    function summary() {
      const lines = [document.querySelector('h1')?.textContent?.trim() || document.title || 'Ferramenta ALOGY', '', 'Entradas:'];
      for (const id of config.fields) {
        const el = document.getElementById(id);
        const label = el?.labels?.[0]?.textContent?.trim() || id;
        lines.push(label + ': ' + (el?.value ?? ''));
      }
      lines.push('', 'Resultados:');
      for (const id of [...(config.outputs || []), config.status].filter(Boolean)) {
        const el = document.getElementById(id);
        if (!el) continue;
        const label = el.closest?.('.result-box')?.querySelector('span')?.textContent?.trim();
        lines.push((label ? label + ': ' : '') + (el.innerText || el.textContent).trim());
      }
      for (const id of config.tables || []) {
        const el = document.getElementById(id);
        if (!el) continue;
        lines.push('');
        const rows = el.querySelectorAll('tr');
        if (rows.length) rows.forEach(row => lines.push(Array.from(row.querySelectorAll('th,td'), cell => cell.textContent.trim()).join('\t')));
        else lines.push(el.innerText || el.textContent);
      }
      lines.push('', 'Apoio técnico preliminar — confira os dados e os limites de aplicação da ferramenta.');
      return lines.join('\n');
    }
    for (const name of config.copy || []) {
      const copy = root[name];
      if (typeof copy !== 'function') continue;
      root[name] = async function () {
        // Recalculate before copying so an edited input cannot export an old result.
        if (!root[config.calculate]() || !valid) return;
        try {
          if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
          await navigator.clipboard.writeText(summary());
          message('Entradas e resultados copiados.', true);
        } catch (_) {
          message('Não foi possível copiar automaticamente. Selecione os resultados para copiá-los manualmente.');
        }
      };
    }
    for (const id of config.fields) {
      const el = document.getElementById(id);
      if (!el) continue;
      el.required = true;
      if (!el.hasAttribute('inputmode')) el.setAttribute('inputmode', 'decimal');
    }
    if (config.auto) {
      document.querySelectorAll('main input, main select').forEach(el => {
        el.addEventListener('input', root[config.calculate]);
      });
    }
  }
  root.ToolCalc = { number, install };
})(window);

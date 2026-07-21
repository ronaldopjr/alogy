(function () {
  'use strict';

  const JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  let loaderPromise = null;

  function loadJsPdf() {
    if (window.jspdf && window.jspdf.jsPDF) return Promise.resolve(window.jspdf.jsPDF);
    if (loaderPromise) return loaderPromise;

    loaderPromise = new Promise((resolve, reject) => {
      const fail = (message) => {
        loaderPromise = null;
        reject(new Error(message));
      };
      const existing = document.querySelector('script[data-alogy-jspdf]');
      if (existing) {
        existing.addEventListener('load', () => {
          if (!window.jspdf || !window.jspdf.jsPDF) {
            fail('A biblioteca de PDF foi carregada, mas não ficou disponível.');
            return;
          }
          resolve(window.jspdf.jsPDF);
        }, { once: true });
        existing.addEventListener('error', () => fail('Não foi possível carregar o gerador de PDF.'), { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = JSPDF_URL;
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.referrerPolicy = 'no-referrer';
      script.dataset.alogyJspdf = 'true';
      script.addEventListener('load', () => {
        if (!window.jspdf || !window.jspdf.jsPDF) {
          script.remove();
          fail('A biblioteca de PDF foi carregada, mas não ficou disponível.');
          return;
        }
        resolve(window.jspdf.jsPDF);
      }, { once: true });
      script.addEventListener('error', () => {
        script.remove();
        fail('Não foi possível carregar o gerador de PDF.');
      }, { once: true });
      document.head.appendChild(script);
    });

    return loaderPromise;
  }

  function safeFilename(value) {
    const fallback = 'relatorio-instrumentacao.pdf';
    if (!value || typeof value !== 'string') return fallback;
    const normalized = value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9._-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    return normalized.toLowerCase().endsWith('.pdf') ? normalized : normalized + '.pdf';
  }

  function normalizeSections(sections) {
    if (!Array.isArray(sections)) return [];
    return sections
      .filter((section) => section && typeof section === 'object')
      .map((section) => ({
        title: String(section.title || 'Seção'),
        lines: Array.isArray(section.lines)
          ? section.lines.map((line) => String(line == null ? '' : line)).filter(Boolean)
          : []
      }));
  }

  function addFooter(doc, pageNumber) {
    const pageHeight = doc.internal.pageSize.getHeight();
    doc.setDrawColor(210, 220, 230);
    doc.line(18, pageHeight - 15, 192, pageHeight - 15);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(90, 105, 120);
    doc.text('ALOGY Engenharia - relatório orientativo', 18, pageHeight - 9);
    doc.text('Página ' + pageNumber, 192, pageHeight - 9, { align: 'right' });
  }

  async function generatePdf(config, filename) {
    const jsPDF = await loadJsPdf();
    const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const left = 18;
    const right = 18;
    const maxWidth = pageWidth - left - right;
    const bottomLimit = pageHeight - 23;
    let y = 20;
    let pageNumber = 1;

    function ensureSpace(required) {
      if (y + required <= bottomLimit) return;
      addFooter(doc, pageNumber);
      doc.addPage();
      pageNumber += 1;
      y = 20;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(17);
    doc.setTextColor(11, 58, 98);
    const titleLines = doc.splitTextToSize(String(config.title || 'Relatório técnico'), maxWidth);
    doc.text(titleLines, left, y);
    y += titleLines.length * 7 + 2;

    if (config.subtitle) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);
      doc.setTextColor(55, 70, 85);
      const subtitleLines = doc.splitTextToSize(String(config.subtitle), maxWidth);
      doc.text(subtitleLines, left, y);
      y += subtitleLines.length * 5 + 2;
    }

    if (config.generatedAt) {
      doc.setFontSize(9);
      doc.setTextColor(90, 105, 120);
      doc.text('Gerado em: ' + String(config.generatedAt), left, y);
      y += 7;
    }

    doc.setDrawColor(0, 107, 177);
    doc.setLineWidth(0.6);
    doc.line(left, y, pageWidth - right, y);
    y += 8;

    normalizeSections(config.sections).forEach((section) => {
      ensureSpace(14);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(11, 58, 98);
      const headingLines = doc.splitTextToSize(section.title, maxWidth);
      doc.text(headingLines, left, y);
      y += headingLines.length * 5.5 + 2;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(35, 50, 65);

      const lines = section.lines.length ? section.lines : ['Não informado.'];
      lines.forEach((line) => {
        const textLines = doc.splitTextToSize('- ' + line, maxWidth);
        ensureSpace(textLines.length * 4.8 + 2);
        doc.text(textLines, left, y);
        y += textLines.length * 4.8 + 1.5;
      });
      y += 4;
    });

    addFooter(doc, pageNumber);
    doc.save(filename);
    return pageNumber;
  }

  function notifyError(error) {
    console.error('[ALOGY] Falha ao gerar relatório PDF:', error);
    window.dispatchEvent(new CustomEvent('alogy:report-error', {
      detail: { message: error && error.message ? error.message : 'Falha ao gerar o relatório PDF.' }
    }));
  }

  function downloadPdf(options) {
    const config = options || {};
    const filename = safeFilename(config.filename);
    generatePdf(config, filename).catch(notifyError);
    return { filename };
  }

  window.InstrumentationReport = Object.freeze({ downloadPdf });
})();
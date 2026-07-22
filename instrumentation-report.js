(function () {
  'use strict';

  const JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  const DOCUMENT_NOTICE = 'SIMULAÇÃO ORIENTATIVA — NÃO É LAUDO, PROJETO, CERTIFICADO, PARECER TÉCNICO OU ART';
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
          if (!window.jspdf || !window.jspdf.jsPDF) return fail('A biblioteca de PDF foi carregada, mas não ficou disponível.');
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
          return fail('A biblioteca de PDF foi carregada, mas não ficou disponível.');
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
    const fallback = 'memoria-calculo-preliminar.pdf';
    if (!value || typeof value !== 'string') return fallback;
    const normalized = value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9._-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    return normalized.toLowerCase().endsWith('.pdf') ? normalized : normalized + '.pdf';
  }

  function normalizeTitle(value) {
    const title = String(value || 'Memória de cálculo preliminar');
    return title
      .replace(/relatório técnico/gi, 'Memória de cálculo preliminar')
      .replace(/relatório orientativo/gi, 'Memória preliminar orientativa');
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

  function sourceUrl(config) {
    return String(config.sourceUrl || window.location.href || 'https://www.alogy.com.br/');
  }

  function documentVersion(config) {
    return String(config.version || document.querySelector('meta[name="alogy-tool-version"]')?.content || document.lastModified || 'versão não informada');
  }

  function addPageNotice(doc) {
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFillColor(245, 247, 249);
    doc.setDrawColor(145, 155, 165);
    doc.roundedRect(18, 10, pageWidth - 36, 10, 1.5, 1.5, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.6);
    doc.setTextColor(65, 75, 85);
    doc.text(DOCUMENT_NOTICE, pageWidth / 2, 16.2, { align: 'center' });
  }

  function addFooter(doc, pageNumber, config) {
    const pageHeight = doc.internal.pageSize.getHeight();
    doc.setDrawColor(210, 220, 230);
    doc.line(18, pageHeight - 17, 192, pageHeight - 17);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(90, 105, 120);
    doc.text('ALOGY Engenharia — memória preliminar orientativa', 18, pageHeight - 11.5);
    doc.text('Página ' + pageNumber, 192, pageHeight - 11.5, { align: 'right' });
    const url = doc.splitTextToSize(sourceUrl(config), 145)[0];
    doc.text(url, 18, pageHeight - 7.3);
  }

  async function generatePdf(config, filename) {
    const jsPDF = await loadJsPdf();
    const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const left = 18;
    const right = 18;
    const maxWidth = pageWidth - left - right;
    const bottomLimit = pageHeight - 25;
    let y = 28;
    let pageNumber = 1;

    addPageNotice(doc);

    function ensureSpace(required) {
      if (y + required <= bottomLimit) return;
      addFooter(doc, pageNumber, config);
      doc.addPage();
      pageNumber += 1;
      addPageNotice(doc);
      y = 28;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(17);
    doc.setTextColor(11, 58, 98);
    const titleLines = doc.splitTextToSize(normalizeTitle(config.title), maxWidth);
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

    doc.setFontSize(8.7);
    doc.setTextColor(90, 105, 120);
    doc.text('Gerado em: ' + String(config.generatedAt || new Date().toLocaleString('pt-BR')), left, y);
    y += 4.6;
    doc.text('Versão da página: ' + documentVersion(config), left, y);
    y += 4.6;
    const sourceLines = doc.splitTextToSize('Origem: ' + sourceUrl(config), maxWidth);
    doc.text(sourceLines, left, y);
    y += sourceLines.length * 4.2 + 3;

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

    ensureSpace(34);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(11, 58, 98);
    doc.text('Natureza e limitações do documento', left, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.2);
    doc.setTextColor(35, 50, 65);
    const mandatory = [
      'Documento gerado automaticamente a partir dos dados informados pelo usuário.',
      'Não constitui projeto, laudo, certificado, parecer técnico, declaração de conformidade ou ART.',
      'Não substitui normas, documentação de fabricante, inspeção, medição em campo ou validação por profissional habilitado.',
      'Antes de aplicar o resultado, confira entradas, unidades, premissas, limites e condições reais da instalação.'
    ];
    mandatory.forEach((line) => {
      const lines = doc.splitTextToSize('- ' + line, maxWidth);
      ensureSpace(lines.length * 4.7 + 2);
      doc.text(lines, left, y);
      y += lines.length * 4.7 + 1.2;
    });

    addFooter(doc, pageNumber, config);
    doc.save(filename);
    return pageNumber;
  }

  function notifyError(error) {
    console.error('[ALOGY] Falha ao gerar memória PDF:', error);
    window.dispatchEvent(new CustomEvent('alogy:report-error', {
      detail: { message: error && error.message ? error.message : 'Falha ao gerar a memória PDF.' }
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

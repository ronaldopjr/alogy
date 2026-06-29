/* =========================
   MENU MOBILE (abrir/fechar)
========================= */
function openMobileMenu(){
  const menu = document.querySelector('nav.mobile');
  if(menu) menu.classList.add('show');
}
function closeMobileMenu(){
  const menu = document.querySelector('nav.mobile');
  if(menu) menu.classList.remove('show');
}
function toggleMobileMenu(){
  const menu = document.querySelector('nav.mobile');
  if(!menu) return;
  menu.classList.toggle('show');
}

/* ✅ Fecha o menu ao clicar em qualquer link do menu mobile */
function bindMobileMenuAutoClose(){
  const menu = document.querySelector('nav.mobile');
  if(!menu) return;
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
}

/* ✅ Fecha o menu ao clicar fora dele */
function bindMobileMenuClickOutside(){
  document.addEventListener('click', (e) => {
    const menu = document.querySelector('nav.mobile');
    const btn = document.querySelector('.menu-toggle');
    if(!menu || !btn) return;

    const clickedInsideMenu = menu.contains(e.target);
    const clickedButton = btn.contains(e.target);

    if(!clickedInsideMenu && !clickedButton){
      closeMobileMenu();
    }
  });
}

/* ✅ Fecha ao apertar ESC */
function bindMobileMenuEscClose(){
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeMobileMenu();
  });
}

/* =========================
   ✅ MENU ATIVO AUTOMÁTICO
   Desktop + Mobile
   (Atualiza com hashchange #contato)
========================= */
function setActiveNav(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const hash = window.location.hash || '';
  const links = document.querySelectorAll('nav.desktop a, nav.mobile a');

  links.forEach(a => a.classList.remove('active'));

  const currentIsIndex = (path === '' || path === 'index.html');
  const currentIsBlogPost = path.startsWith('blog-') && path.endsWith('.html');
  const currentIsToolPage = path === 'ferramentas.html' || path.startsWith('ferramentas-') || path.startsWith('calculadora-') || path.startsWith('conversor-') || path.startsWith('checklist-');

  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    const [hrefPathRaw, hrefHashRaw] = href.split('#');

    const hrefPath = (hrefPathRaw || '').split('/').pop();
    const hrefHash = hrefHashRaw ? `#${hrefHashRaw}` : '';

    // Home + #contato => marca somente Contato ativo
    if(currentIsIndex && hash === '#contato'){
      if(hrefHash === '#contato') a.classList.add('active');
      return;
    }

    // Posts do blog => marca o menu Blog ativo
    if(currentIsBlogPost && hrefPath === 'blog.html'){
      a.classList.add('active');
      return;
    }

    // Ferramentas e calculadoras => marca o menu Ferramentas ativo
    if(currentIsToolPage && hrefPath === 'ferramentas.html'){
      a.classList.add('active');
      return;
    }

    // Páginas normais: industrial, residencial, cases, cursos, blog, sobre
    if(hrefPath && hrefPath === path && hrefHash === ''){
      a.classList.add('active');
    }
  });
}
window.addEventListener('hashchange', setActiveNav);

/* =========================
   BANNER SLIDER (home)
========================= */
let currentSlide = 0;
let sliderTimer = null;

function getSlides(){
  return Array.from(document.querySelectorAll('.slide'));
}
function getDots(){
  return Array.from(document.querySelectorAll('.dot'));
}

function showSlide(index){
  const slides = getSlides();
  const dots = getDots();
  if(!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function nextSlide(){ showSlide(currentSlide + 1); }
function prevSlide(){ showSlide(currentSlide - 1); }

function startAuto(){
  stopAuto();
  sliderTimer = setInterval(nextSlide, 6500);
}
function stopAuto(){
  if(sliderTimer) clearInterval(sliderTimer);
  sliderTimer = null;
}

function initBanner(){
  const banner = document.querySelector('.banner');
  if(!banner) return;

  document.querySelectorAll('.dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = Number(dot.getAttribute('data-idx'));
      showSlide(idx);
      startAuto();
    });
  });

  const btnPrev = document.querySelector('.banner-nav.prev');
  const btnNext = document.querySelector('.banner-nav.next');

  if(btnPrev) btnPrev.addEventListener('click', () => { prevSlide(); startAuto(); });
  if(btnNext) btnNext.addEventListener('click', () => { nextSlide(); startAuto(); });

  banner.addEventListener('mouseenter', stopAuto);
  banner.addEventListener('mouseleave', startAuto);

  // Swipe no mobile
  let startX = 0, endX = 0;

  banner.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, {passive:true});

  banner.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  }, {passive:true});

  banner.addEventListener('touchend', () => {
    const diff = endX - startX;
    if(Math.abs(diff) > 40){
      if(diff > 0) prevSlide();
      else nextSlide();
      startAuto();
    }
    startX = 0;
    endX = 0;
  });

  showSlide(0);
  startAuto();
}

/* =========================
   FORM (home) - FormSubmit
========================= */
const FORM_ENDPOINT = "https://formsubmit.co/ajax/contato@alogy.com.br";

function $(id){
  return document.getElementById(id);
}

function phoneMask(v){
  v = (v || "").replace(/\D/g,'').slice(0,11);

  if(v.length <= 10){
    return v
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }

  return v
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
}

function setButtonState(){
  const form = $("formContato");
  if(!form) return;

  const nome = $("c_nome")?.value.trim();
  const email = $("c_email")?.value.trim();
  const fone = $("c_fone")?.value.trim();
  const cidade = $("c_cidade")?.value.trim();
  const assunto = $("c_assunto")?.value.trim();
  const msg = $("c_msg")?.value.trim();

  const allFilled = !!(nome && email && fone && cidade && assunto && msg);
  const btn = $("btnEnviar");
  if(btn) btn.disabled = !allFilled;
}

async function enviarFormulario(e){
  e.preventDefault();

  const btn = $("btnEnviar");
  const success = $("formSuccess");

  const nome = $("c_nome")?.value.trim();
  const email = $("c_email")?.value.trim();
  const fone = $("c_fone")?.value.trim();
  const cidade = $("c_cidade")?.value.trim();
  const assunto = $("c_assunto")?.value.trim();
  const msg = $("c_msg")?.value.trim();

  if(!(nome && email && fone && cidade && assunto && msg)){
    alert("Preencha todos os campos para enviar.");
    return;
  }

  const subject = `FORMULARIO - ${assunto}`;

  if(success) success.classList.remove("show");

  if(btn){
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Enviando...`;
  }

  try{
    const payload = new FormData();
    payload.append("Nome", nome);
    payload.append("Telefone", fone);
    payload.append("E-mail", email);
    payload.append("Cidade/Local", cidade);
    payload.append("Assunto", assunto);
    payload.append("Mensagem", msg);

    payload.append("_subject", subject);
    payload.append("_template", "box");
    payload.append("_captcha", "true");
    payload.append("_replyto", email);

    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: payload,
      headers: { "Accept": "application/json" }
    });

    const json = await res.json().catch(() => null);

    if(!res.ok || (json && json.success === false)){
      throw new Error("Falha ao enviar.");
    }

    if(success) success.classList.add("show");

    $("formContato")?.reset();
    setButtonState();

  }catch(err){
    console.error("Erro no formulário:", err);

    const abrirWhatsapp = confirm(
      "Não foi possível enviar pelo formulário. Isso pode acontecer em redes corporativas com bloqueio de segurança.\n\nDeseja enviar sua solicitação pelo WhatsApp?"
    );

    if(abrirWhatsapp){
      const texto = encodeURIComponent(
        "Olá! Vim pelo site ALOGY. Não consegui enviar o formulário e gostaria de atendimento."
      );

      window.open(
        `https://wa.me/5519981442448?text=${texto}`,
        "_blank"
      );
    }

    setButtonState();

  }finally{
    if(btn){
      btn.innerHTML = `<i class="fas fa-paper-plane"></i> Enviar`;
      setButtonState();
    }
  }
}


/* =========================
   TABELAS RESPONSIVAS DAS FERRAMENTAS
   (remove barra interna e transforma linhas em cards no mobile)
========================= */
function enhanceResponsiveToolTables(){
  document.querySelectorAll('.calc-table').forEach((table) => {
    const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
    table.querySelectorAll('tbody tr').forEach((tr) => {
      Array.from(tr.children).forEach((td, idx) => {
        if(headers[idx]){
          td.setAttribute('data-label', headers[idx]);
        }
      });
    });
  });
}


function observeResponsiveToolTables(){
  const tables = document.querySelectorAll('.calc-table');
  if(!tables.length) return;

  let timer = null;
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(enhanceResponsiveToolTables, 60);
  };

  tables.forEach((table) => {
    const body = table.querySelector('tbody');
    if(!body) return;
    const observer = new MutationObserver(schedule);
    observer.observe(body, {childList:true, subtree:true});
  });
}


/* =========================
   ESPAÇOS PARA GOOGLE ADSENSE
   Ferramentas + calculadoras/checklists
   
   Status inicial: DESATIVADO.
   Quando o AdSense aprovar o site, basta informar o cliente e os slots abaixo
   ou pedir para a ALOGY/ChatGPT gerar o arquivo com seus IDs reais.
========================= */
const ALOGY_ADS_CONFIG = {
  enabled: false,
  adClient: "ca-pub-5586837114309500", // ID do editor AdSense
  desktopLeftSlot: "", // ID do bloco lateral esquerdo
  desktopRightSlot: "", // ID do bloco lateral direito
  mobileSlot: "" // ID do bloco horizontal responsivo para celular
};

function isAlogyToolArea(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return document.body?.classList.contains('tools-page') && (
    path === 'ferramentas.html' ||
    path.startsWith('ferramentas-') ||
    path.startsWith('calculadora-') ||
    path.startsWith('conversor-') ||
    path.startsWith('checklist-')
  );
}

function hasAdsenseData(slot){
  return !!(ALOGY_ADS_CONFIG.enabled && ALOGY_ADS_CONFIG.adClient && slot);
}

function loadAlogyAdsenseScript(){
  if(!ALOGY_ADS_CONFIG.enabled || !ALOGY_ADS_CONFIG.adClient) return;
  if(document.querySelector('script[data-alogy-adsense="true"]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.setAttribute('data-alogy-adsense', 'true');
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(ALOGY_ADS_CONFIG.adClient)}`;
  document.head.appendChild(script);
}

function createAlogyAdUnit(slot, type){
  const wrap = document.createElement(type === 'mobile' ? 'div' : 'aside');
  wrap.className = type === 'mobile' ? 'alogy-mobile-ad no-print' : `alogy-ad-rail alogy-ad-${type} no-print`;
  wrap.setAttribute('aria-label', 'Publicidade');

  const label = document.createElement('div');
  label.className = 'alogy-ad-label';
  label.textContent = 'Publicidade';

  const slotBox = document.createElement('div');
  slotBox.className = type === 'mobile' ? 'alogy-ad-slot alogy-ad-slot-mobile' : 'alogy-ad-slot alogy-ad-slot-vertical';

  const ins = document.createElement('ins');
  ins.className = 'adsbygoogle';
  ins.style.display = 'block';
  ins.setAttribute('data-ad-client', ALOGY_ADS_CONFIG.adClient);
  ins.setAttribute('data-ad-slot', slot);
  ins.setAttribute('data-full-width-responsive', 'true');

  if(type === 'mobile'){
    ins.setAttribute('data-ad-format', 'auto');
  }else{
    ins.style.width = '160px';
    ins.style.height = '600px';
  }

  slotBox.appendChild(ins);
  wrap.appendChild(label);
  wrap.appendChild(slotBox);
  return wrap;
}

function pushAlogyAds(){
  if(!ALOGY_ADS_CONFIG.enabled) return;
  window.adsbygoogle = window.adsbygoogle || [];
  document.querySelectorAll('.alogy-ad-slot ins.adsbygoogle:not([data-alogy-pushed="true"])').forEach((ins) => {
    try{
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      ins.setAttribute('data-alogy-pushed', 'true');
    }catch(err){
      console.warn('AdSense ainda não disponível:', err);
    }
  });
}

function insertAlogyMobileAd(main){
  if(!hasAdsenseData(ALOGY_ADS_CONFIG.mobileSlot)) return;
  if(main.querySelector('.alogy-mobile-ad')) return;

  const mobileAd = createAlogyAdUnit(ALOGY_ADS_CONFIG.mobileSlot, 'mobile');
  const disclaimer = main.querySelector('.calc-card[aria-label*="Aviso"], .calc-card[aria-label*="aviso"]');
  const hero = main.querySelector('.tools-hero, .tool-page-intro');
  const ref = disclaimer || hero;

  if(ref && ref.parentNode === main){
    ref.insertAdjacentElement('afterend', mobileAd);
  }else{
    main.insertBefore(mobileAd, main.firstElementChild?.nextSibling || main.firstChild);
  }
}

function initAlogyAdsLayout(){
  if(!isAlogyToolArea()) return;

  const main = document.querySelector('main.container');
  if(!main || main.dataset.alogyAdsReady === 'true') return;

  const desktopLeft = hasAdsenseData(ALOGY_ADS_CONFIG.desktopLeftSlot);
  const desktopRight = hasAdsenseData(ALOGY_ADS_CONFIG.desktopRightSlot);
  const mobile = hasAdsenseData(ALOGY_ADS_CONFIG.mobileSlot);

  // Enquanto não houver ID real do AdSense, nada aparece e o layout atual fica preservado.
  if(!desktopLeft && !desktopRight && !mobile) return;

  loadAlogyAdsenseScript();
  main.dataset.alogyAdsReady = 'true';

  if(desktopLeft || desktopRight){
    const wrapper = document.createElement('div');
    wrapper.className = 'alogy-ad-layout no-print';

    const content = document.createElement('div');
    content.className = 'alogy-ad-main';

    main.parentNode.insertBefore(wrapper, main);

    if(desktopLeft){
      wrapper.appendChild(createAlogyAdUnit(ALOGY_ADS_CONFIG.desktopLeftSlot, 'left'));
    }else{
      const spacer = document.createElement('div');
      spacer.className = 'alogy-ad-rail alogy-ad-spacer';
      wrapper.appendChild(spacer);
    }

    content.appendChild(main);
    wrapper.appendChild(content);

    if(desktopRight){
      wrapper.appendChild(createAlogyAdUnit(ALOGY_ADS_CONFIG.desktopRightSlot, 'right'));
    }else{
      const spacer = document.createElement('div');
      spacer.className = 'alogy-ad-rail alogy-ad-spacer';
      wrapper.appendChild(spacer);
    }
  }

  insertAlogyMobileAd(main);
  setTimeout(pushAlogyAds, 700);
}

function ensurePrivacyFooterLink(){
  document.querySelectorAll('footer').forEach((footer) => {
    let line = footer.querySelector('.footer-legal-links');
    if(!line){
      line = document.createElement('p');
      line.className = 'footer-legal-links no-print';
      footer.appendChild(line);
    }

    const links = [];
    if(!footer.querySelector('a[href="politica-de-privacidade.html"]')){
      links.push('<a href="politica-de-privacidade.html">Política de Privacidade e Cookies</a>');
    }
    if(!footer.querySelector('a[href="termos-de-uso-ferramentas.html"]')){
      links.push('<a href="termos-de-uso-ferramentas.html">Termos de Uso das Ferramentas</a>');
    }

    if(links.length){
      const current = line.innerHTML.trim();
      line.innerHTML = current ? `${current} · ${links.join(' · ')}` : links.join(' · ');
    }
  });
}

/* =========================
   INIT
========================= */
document.addEventListener('DOMContentLoaded', () => {
  // menu ativo
  setActiveNav();

  // banner (só home)
  initBanner();

  // menu mobile premium
  bindMobileMenuAutoClose();
  bindMobileMenuClickOutside();
  bindMobileMenuEscClose();

  // espaços preparados para anúncios nas ferramentas
  initAlogyAdsLayout();

  // link de política de privacidade/cookies no rodapé
  ensurePrivacyFooterLink();

  // tabelas responsivas das ferramentas
  enhanceResponsiveToolTables();
  observeResponsiveToolTables();

  // form (só home)
  const fone = $("c_fone");
  if(fone){
    fone.addEventListener("input", () => {
      fone.value = phoneMask(fone.value);
      setButtonState();
    });
  }

  ["c_nome","c_email","c_cidade","c_assunto","c_msg"].forEach((id) => {
    const el = $(id);
    if(el) el.addEventListener("input", setButtonState);
  });

  setButtonState();
});

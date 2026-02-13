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

  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    const [hrefPathRaw, hrefHashRaw] = href.split('#');

    const hrefPath = (hrefPathRaw || '').split('/').pop();
    const hrefHash = hrefHashRaw ? `#${hrefHashRaw}` : '';

    // HOME + #contato => marca Contato (href="#contato" ou "index.html#contato")
    if(currentIsIndex && hash === '#contato' && hrefHash === '#contato'){
  a.classList.add('active');
  return;
}

// Se você estiver no index e o link for "index.html#contato", também marca
if(currentIsIndex && hash === '#contato' && (hrefPath === 'index.html') && hrefHash === '#contato'){
  a.classList.add('active');
  return;
}

    // páginas normais (industrial.html, residencial.html, sobre.html, cases.html)
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
    if(!res.ok || (json && json.success === false)) throw new Error("Falha ao enviar.");

    if(success) success.classList.add("show");
    $("formContato")?.reset();
    setButtonState();

  }catch(err){
    alert("Não foi possível enviar agora. Tente novamente em instantes.");
    setButtonState();

  }finally{
    if(btn){
      btn.innerHTML = `<i class="fas fa-paper-plane"></i> Enviar`;
      setButtonState();
    }
  }
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

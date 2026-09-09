// Run: node tests/navigation.cjs (no browser or external dependencies).
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
const prefix = source.slice(0, source.indexOf('const FORM_ENDPOINT'));
function node(attrs = {}) {
  const classes = new Set();
  return {
    attrs, events: {}, id: '', textContent: '', inert: false,
    classList: {
      add: x => classes.add(x), remove: x => classes.delete(x), contains: x => classes.has(x),
      toggle(x, force) { const on = force === undefined ? !classes.has(x) : force; if(on) classes.add(x); else classes.delete(x); return on; }
    },
    getAttribute: x => attrs[x], setAttribute: (x,v) => { attrs[x] = v; },
    removeAttribute: x => { delete attrs[x]; },
    addEventListener(type, fn) { this.events[type] = fn; },
    contains() { return false; }, matches() { return false; }, focus() { this.focused = true; }
  };
}
const links = ['/', '/guia/', '/blog.html', '/ferramentas.html', '/industrial.html', '/#contato', 'https://example.com/'].map(href => node({href}));
const slides = Array.from({length:5}, () => node());
const dots = slides.map((_,i) => node({'data-idx':String(i)}));
const menu=node(), toggle=node(), banner=node(), pause=node();
let focusWithin=false, hovering=false, reduced=false, timers=0;
banner.contains = target => target === 'inside' || (target === 'focus' && focusWithin);
banner.matches = () => hovering;
banner.querySelector = () => pause;
const document = {
  hidden:false, activeElement:null, events:{},
  querySelector(selector) { return ({'nav.mobile':menu,'.menu-toggle':toggle,'.banner':banner})[selector] || null; },
  querySelectorAll(selector) { return ({'nav.desktop a, nav.mobile a':links,'.slide':slides,'.dot':dots})[selector] || []; },
  addEventListener(type, fn) { this.events[type] = fn; }
};
const window={location:new URL('https://www.alogy.com.br/'),addEventListener(){},matchMedia(){return {matches:reduced,addEventListener(){}};}};
const context = vm.createContext({document,window,URL,setTimeout:fn=>fn(),setInterval:()=>++timers,clearInterval(){}});
vm.runInContext(prefix,context);
const scenarios = [
  ['/', ['/']], ['/index.html', ['/']], ['/guia/', ['/guia/']],
  ['/guia/index.html', ['/guia/']], ['/#contato', ['/#contato']],
  ['/index.html#contato', ['/#contato']], ['/industrial.html', ['/industrial.html']],
  ['/blog-calibracao-transmissor-pressao.html', ['/blog.html']],
  ['/calculadora-4-20ma.html', ['/ferramentas.html']],
  ['/ferramentas-instrumentacao.html', ['/ferramentas.html']]
];
for(const [url, expected] of scenarios){
  window.location = new URL(url,'https://www.alogy.com.br/');
  context.setActiveNav();
  assert.deepEqual(links.filter(n=>n.classList.contains('active')).map(n=>n.attrs.href),expected,url);
  assert.deepEqual(links.filter(n=>n.attrs['aria-current']).map(n=>n.attrs.href),expected,url+' aria-current');
}
context.syncMobileMenuState();
assert.equal(toggle.attrs['aria-expanded'],'false');
assert.equal(toggle.attrs['aria-controls'],menu.id);
context.openMobileMenu();assert.equal(toggle.attrs['aria-expanded'],'true');
context.toggleMobileMenu();assert.equal(toggle.attrs['aria-expanded'],'false');
context.openMobileMenu();context.bindMobileMenuEscClose();
menu.contains=()=>true;document.events.keydown({key:'Escape'});
assert.equal(toggle.focused,true);assert.equal(toggle.attrs['aria-expanded'],'false');
context.initBanner();
context.showSlide(2);
assert.equal(slides[2].inert,false);assert.equal(slides[1].inert,true);
assert.equal(slides[1].attrs.tabindex,'-1');assert.equal(slides[2].attrs.tabindex,'0');
assert.equal(dots[2].attrs['aria-pressed'],'true');assert.equal(dots[1].attrs['aria-pressed'],'false');
// Tap, not swipe: stay on the current slide.
banner.events.touchstart({touches:[{clientX:100}]});banner.events.touchend();
assert.equal(slides[2].classList.contains('active'),true);
banner.events.touchstart({touches:[{clientX:100}]});banner.events.touchmove({touches:[{clientX:20}]});banner.events.touchend();
assert.equal(slides[3].classList.contains('active'),true);
let before=timers;reduced=true;context.startAuto();assert.equal(timers,before);
reduced=false;document.hidden=true;context.startAuto();assert.equal(timers,before);
document.hidden=false;hovering=true;context.startAuto();assert.equal(timers,before);
hovering=false;document.activeElement='focus';focusWithin=true;context.startAuto();assert.equal(timers,before);
focusWithin=false;document.activeElement=null;
pause.events.click();assert.equal(pause.attrs['aria-pressed'],'true');assert.equal(timers,before);
assert.match(pause.innerHTML,/fa-play/);assert.match(pause.attrs['aria-label'],/Retomar/);
pause.events.click();assert.equal(pause.attrs['aria-pressed'],'false');assert.ok(timers>before);
assert.match(pause.innerHTML,/fa-pause/);assert.match(pause.attrs['aria-label'],/Pausar/);
console.log('Navigation, mobile menu, carousel, tap/swipe and automatic-rotation safeguards: passed.');

// Usa a marcação e os estilos de navegação já presentes nas ferramentas ALOGY.
(() => {
  const menu=document.querySelector('nav.mobile'),button=document.querySelector('.menu-toggle');
  if(!menu||!button)return;
  function setOpen(open){menu.classList.toggle('show',open);button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');}
  button.addEventListener('click',()=>setOpen(!menu.classList.contains('show')));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
  document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!button.contains(e.target))setOpen(false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){const focused=menu.contains(document.activeElement);setOpen(false);if(focused)button.focus();}});
})();


(function(){
 const root=document.documentElement;
 try{const saved=localStorage.getItem('zevalios-theme');if(saved)root.dataset.theme=saved}catch(e){}
 const theme=document.querySelector('[data-theme-toggle]');
 if(theme){const sync=()=>theme.setAttribute('aria-pressed',root.dataset.theme==='dark'?'true':'false');sync();theme.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('zevalios-theme',root.dataset.theme)}catch(e){}sync()})}
 const menu=document.querySelector('[data-menu-toggle]'),links=document.querySelector('[data-nav-links]');
 if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu')});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}
 document.querySelectorAll('[data-current-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const buttons=document.querySelectorAll('[data-state-button]');
 buttons.forEach(btn=>btn.addEventListener('click',()=>{const state=btn.dataset.stateButton;buttons.forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',b===btn?'true':'false')});document.querySelectorAll('[data-state-panel]').forEach(p=>p.hidden=p.dataset.statePanel!==state)}));
 const reveal=document.querySelectorAll('[data-reveal]');
 if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});reveal.forEach(x=>io.observe(x))}else reveal.forEach(x=>x.classList.add('visible'));
})();

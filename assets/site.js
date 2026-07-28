
document.documentElement.classList.add('js');
const menu=document.querySelector('.menu'),links=document.querySelector('.navlinks');
if(menu&&links){menu.addEventListener('click',()=>{const o=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(o))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});items.forEach(i=>obs.observe(i))}else items.forEach(i=>i.classList.add('visible'));
document.querySelectorAll('[data-year]').forEach(n=>n.textContent=new Date().getFullYear());

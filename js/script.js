(function(){
"use strict";
var root=document.documentElement;
var THEME_KEY="zevalios-theme";
var NOTICE_KEY="zevalios-storage-notice";

function safeGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function safeSet(k,v){try{localStorage.setItem(k,v);}catch(e){}}
function applyTheme(theme){
  root.setAttribute("data-theme",theme);
  var t=document.getElementById("themeToggle");
  if(t)t.setAttribute("aria-pressed",String(theme==="light"));
}
function initTheme(){
  var saved=safeGet(THEME_KEY);
  if(saved==="light"||saved==="dark")applyTheme(saved);
  else applyTheme(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");
}
function toggleTheme(){
  var next=root.getAttribute("data-theme")==="light"?"dark":"light";
  applyTheme(next);
  safeSet(THEME_KEY,next);
}

initTheme();

document.addEventListener("DOMContentLoaded",function(){
  var toggle=document.getElementById("themeToggle");
  if(toggle)toggle.addEventListener("click",toggleTheme);

  var nav=document.getElementById("siteNav");
  var topBtn=document.getElementById("scrollTop");
  function onScroll(){
    if(nav)nav.classList.toggle("is-scrolled",window.scrollY>12);
    if(topBtn)topBtn.classList.toggle("is-visible",window.scrollY>500);
  }
  document.addEventListener("scroll",onScroll,{passive:true});
  onScroll();
  if(topBtn)topBtn.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});

  var burger=document.getElementById("hamburger");
  var links=document.getElementById("navLinks");
  if(burger&&links){
    burger.addEventListener("click",function(){
      var open=links.classList.toggle("is-open");
      burger.classList.toggle("is-open",open);
      burger.setAttribute("aria-expanded",String(open));
    });
    links.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click",function(){
        links.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded","false");
      });
    });
  }

  document.querySelectorAll("#year").forEach(function(el){el.textContent=new Date().getFullYear();});

  document.querySelectorAll("[data-scroll-contact]").forEach(function(link){
    link.addEventListener("click",function(event){
      var target=document.getElementById("contact");
      if(target){
        event.preventDefault();
        target.scrollIntoView({behavior:"smooth",block:"start"});
        if(history.replaceState)history.replaceState(null,"","#contact");
      }
    });
  });

  var banner=document.getElementById("cookieBanner");
  var modal=document.getElementById("cookieModal");
  function openModal(){
    if(modal){modal.hidden=false;document.body.style.overflow="hidden";}
  }
  function closeModal(){
    if(modal){modal.hidden=true;document.body.style.overflow="";}
  }
  function dismissNotice(){
    safeSet(NOTICE_KEY,JSON.stringify({dismissed:true,expires:Date.now()+15552000000}));
    if(banner)banner.hidden=true;
  }

  var raw=safeGet(NOTICE_KEY);
  var valid=false;
  if(raw){
    try{
      var stored=JSON.parse(raw);
      valid=Boolean(stored&&stored.dismissed&&stored.expires>Date.now());
    }catch(e){}
  }
  if(banner&&!valid)banner.hidden=false;

  document.querySelectorAll("[data-cookie-dismiss]").forEach(function(button){
    button.addEventListener("click",dismissNotice);
  });
  document.querySelectorAll("[data-cookie-settings]").forEach(function(button){
    button.addEventListener("click",openModal);
  });
  document.querySelectorAll("[data-cookie-close]").forEach(function(button){
    button.addEventListener("click",closeModal);
  });
  document.addEventListener("keydown",function(event){if(event.key==="Escape")closeModal();});
});
})();

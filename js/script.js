(function(){
"use strict";
var root=document.documentElement;
var THEME_KEY="zevalios-theme";
var COOKIE_KEY="zevalios-cookie-choice";
function safeGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function safeSet(k,v){try{localStorage.setItem(k,v);}catch(e){}}
function applyTheme(theme){root.setAttribute("data-theme",theme);var t=document.getElementById("themeToggle");if(t)t.setAttribute("aria-pressed",String(theme==="light"));}
function initTheme(){var s=safeGet(THEME_KEY);if(s==="light"||s==="dark")applyTheme(s);else applyTheme(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");}
function toggleTheme(){var n=root.getAttribute("data-theme")==="light"?"dark":"light";applyTheme(n);safeSet(THEME_KEY,n);}
initTheme();
document.addEventListener("DOMContentLoaded",function(){
 var toggle=document.getElementById("themeToggle");if(toggle)toggle.addEventListener("click",toggleTheme);
 var nav=document.getElementById("siteNav"),topBtn=document.getElementById("scrollTop");
 function onScroll(){if(nav)nav.classList.toggle("is-scrolled",window.scrollY>12);if(topBtn)topBtn.classList.toggle("is-visible",window.scrollY>500);}document.addEventListener("scroll",onScroll,{passive:true});onScroll();
 if(topBtn)topBtn.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});
 var burger=document.getElementById("hamburger"),links=document.getElementById("navLinks");if(burger&&links){burger.addEventListener("click",function(){var o=links.classList.toggle("is-open");burger.classList.toggle("is-open",o);burger.setAttribute("aria-expanded",String(o));});links.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){links.classList.remove("is-open");burger.classList.remove("is-open");burger.setAttribute("aria-expanded","false");});});}
 document.querySelectorAll("#year").forEach(function(el){el.textContent=new Date().getFullYear();});
 var banner=document.getElementById("cookieBanner"),modal=document.getElementById("cookieModal");
 function openModal(){if(modal){modal.hidden=false;document.body.style.overflow="hidden";}}
 function closeModal(){if(modal){modal.hidden=true;document.body.style.overflow="";}}
 function saveChoice(v){safeSet(COOKIE_KEY,JSON.stringify({choice:v,expires:Date.now()+15552000000}));if(banner)banner.hidden=true;closeModal();}
 var raw=safeGet(COOKIE_KEY),valid=false;if(raw){try{var o=JSON.parse(raw);valid=o&&o.expires>Date.now();}catch(e){}}if(banner&&!valid)banner.hidden=false;
 document.querySelectorAll("[data-cookie-accept]").forEach(function(b){b.addEventListener("click",function(){saveChoice("necessary");});});
 document.querySelectorAll("[data-cookie-reject]").forEach(function(b){b.addEventListener("click",function(){saveChoice("rejected-optional");});});
 document.querySelectorAll("[data-cookie-save]").forEach(function(b){b.addEventListener("click",function(){saveChoice("necessary");});});
 document.querySelectorAll("[data-cookie-settings]").forEach(function(b){b.addEventListener("click",openModal);});
 document.querySelectorAll("[data-cookie-close]").forEach(function(b){b.addEventListener("click",closeModal);});
 document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal();});
});
})();
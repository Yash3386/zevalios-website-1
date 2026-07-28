(function(){
  const root = document.documentElement;
  const themeKey = 'zevalios-theme';
  const consentKey = 'zevalios-cookie-choice';

  function setTheme(theme){
    root.setAttribute('data-theme', theme);
    try{localStorage.setItem(themeKey, theme);}catch(e){}
    document.querySelectorAll('[data-theme-choice]').forEach(function(btn){
      const active = btn.dataset.themeChoice === theme;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setConsent(choice){
    try{localStorage.setItem(consentKey, choice);}catch(e){}
    const banner = document.querySelector('[data-cookie-banner]');
    if(banner) banner.hidden = true;
    document.documentElement.setAttribute('data-cookie-consent', choice);
  }

  function initConsent(){
    const banner = document.querySelector('[data-cookie-banner]');
    if(!banner) return;
    let choice = null;
    try{choice = localStorage.getItem(consentKey);}catch(e){}
    if(choice === 'accepted' || choice === 'rejected'){
      banner.hidden = true;
      document.documentElement.setAttribute('data-cookie-consent', choice);
    }else{
      banner.hidden = false;
    }
    const accept = banner.querySelector('[data-cookie-accept]');
    const reject = banner.querySelector('[data-cookie-reject]');
    if(accept) accept.addEventListener('click', function(){setConsent('accepted');});
    if(reject) reject.addEventListener('click', function(){setConsent('rejected');});
  }

  function init(){
    let initial = 'light';
    try{initial = localStorage.getItem(themeKey) || 'light';}catch(e){}
    setTheme(initial);
    document.querySelectorAll('[data-theme-choice]').forEach(function(btn){
      btn.addEventListener('click', function(){setTheme(btn.dataset.themeChoice);});
    });

    const menuButton = document.querySelector('[data-menu-button]');
    const nav = document.querySelector('[data-main-nav]');
    if(menuButton && nav){
      menuButton.addEventListener('click', function(){
        const open = nav.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.querySelectorAll('a').forEach(function(link){
        link.addEventListener('click', function(){
          nav.classList.remove('is-open');
          menuButton.setAttribute('aria-expanded','false');
        });
      });
    }
    initConsent();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
(function(){
  function applyTheme(theme){
    document.documentElement.setAttribute('data-zev-theme', theme);
    try{localStorage.setItem('zevalios-theme', theme);}catch(e){}
    document.querySelectorAll('.zev-theme-option').forEach(function(btn){
      var active = btn.getAttribute('data-theme')===theme;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }
  function init(){
    var theme = document.documentElement.getAttribute('data-zev-theme') || 'light';
    document.querySelectorAll('.zev-theme-option').forEach(function(btn){
      btn.addEventListener('click', function(){applyTheme(btn.getAttribute('data-theme'));});
    });
    applyTheme(theme);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
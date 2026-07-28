
(function(){
  const key = 'zevalios-theme';
  const root = document.documentElement;
  const toggle = () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(key, next); } catch (e) {}
    document.querySelectorAll('[data-theme-label]').forEach(el => {
      el.textContent = next === 'dark' ? 'Day mode' : 'Night mode';
    });
  };
  let theme = 'light';
  try { theme = localStorage.getItem(key) || 'light'; } catch (e) {}
  root.setAttribute('data-theme', theme);
  window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', toggle));
    document.querySelectorAll('[data-theme-label]').forEach(el => {
      el.textContent = theme === 'dark' ? 'Day mode' : 'Night mode';
    });
  });
})();

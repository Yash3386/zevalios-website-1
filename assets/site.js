(() => {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-list');
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();

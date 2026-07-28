document.documentElement.classList.add('js');

(function () {
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem('zevalios-theme'); } catch (error) { saved = null; }
  const preferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.dataset.theme = saved || preferred;

  const themeButton = document.querySelector('[data-theme-toggle]');
  if (themeButton) {
    const updateLabel = () => {
      const dark = root.dataset.theme === 'dark';
      themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      themeButton.setAttribute('aria-pressed', String(dark));
    };
    updateLabel();
    themeButton.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('zevalios-theme', root.dataset.theme); } catch (error) { /* Preference remains active for this page. */ }
      updateLabel();
    });
  }

  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-nav-links]');
  if (menuButton && menu) {
    const closeMenu = () => {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    };
    menuButton.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  const lab = document.querySelector('[data-workflow-lab]');
  if (lab) {
    const buttons = lab.querySelectorAll('[data-mode]');
    const caption = lab.querySelector('[data-lab-caption]');
    const captions = {
      fragmented: 'Unowned handoffs, missing evidence and manual intervention slow conversion to cash.',
      controlled: 'Ownership, evidence, triggers and escalation create a visible route from commitment to cash.'
    };
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const mode = button.dataset.mode;
        lab.dataset.mode = mode;
        buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        if (caption) caption.textContent = captions[mode];
      });
    });
  }

  const year = document.querySelectorAll('[data-current-year]');
  year.forEach((node) => { node.textContent = String(new Date().getFullYear()); });

  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();

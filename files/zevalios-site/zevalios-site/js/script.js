(function(){
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "zevalios-theme";

  /* ---------- Theme toggle (day / night) ---------- */
  function applyTheme(theme){
    root.setAttribute("data-theme", theme);
    var toggle = document.getElementById("themeToggle");
    if (toggle) toggle.setAttribute("aria-pressed", theme === "light");
  }

  function initTheme(){
    var stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch(e) {}

    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
    } else {
      var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
      applyTheme(prefersLight ? "light" : "dark");
    }
  }

  function toggleTheme(){
    var current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    var next = current === "light" ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch(e) {}
  }

  initTheme();

  document.addEventListener("DOMContentLoaded", function(){
    var toggle = document.getElementById("themeToggle");
    if (toggle) toggle.addEventListener("click", toggleTheme);

    /* ---------- Nav scroll state ---------- */
    var nav = document.getElementById("siteNav");
    var scrollTopBtn = document.getElementById("scrollTop");
    function onScroll(){
      var scrolled = window.scrollY > 12;
      if (nav) nav.classList.toggle("is-scrolled", scrolled);
      if (scrollTopBtn) scrollTopBtn.classList.toggle("is-visible", window.scrollY > 500);
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (scrollTopBtn){
      scrollTopBtn.addEventListener("click", function(){
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    /* ---------- Mobile menu ---------- */
    var hamburger = document.getElementById("hamburger");
    var navLinks = document.getElementById("navLinks");
    if (hamburger && navLinks){
      hamburger.addEventListener("click", function(){
        var isOpen = navLinks.classList.toggle("is-open");
        hamburger.classList.toggle("is-open", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen);
      });
      navLinks.querySelectorAll("a").forEach(function(link){
        link.addEventListener("click", function(){
          navLinks.classList.remove("is-open");
          hamburger.classList.remove("is-open");
          hamburger.setAttribute("aria-expanded", "false");
        });
      });
    }

    /* ---------- Footer year ---------- */
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Contact form (Netlify Forms native submit; friendly fallback message) ---------- */
    var form = document.querySelector(".contact__form");
    var note = document.getElementById("formNote");
    if (form && note){
      form.addEventListener("submit", function(e){
        // Let Netlify handle real submissions (form has data-netlify="true").
        // If this file is opened outside Netlify (e.g. plain preview), avoid
        // navigating to a 404 and show a friendly inline message instead.
        var isNetlifyHost = /\.netlify\.app$/.test(window.location.hostname) || window.location.hostname.indexOf("netlify") !== -1;
        if (!isNetlifyHost && window.location.protocol !== "https:" ) {
          e.preventDefault();
          note.textContent = "Thanks — this form will send once the site is live on Netlify.";
          form.reset();
        }
      });
    }
  });
})();

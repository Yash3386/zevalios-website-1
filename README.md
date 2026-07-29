# Zevalios website

A static one-page site for Zevalios (Revenue & Operational Performance), styled in the spirit of the Elite X template, with a day/night theme toggle in the nav (styled after the Evolux toggle).

## What's inside
```
index.html        the whole page
css/style.css      styles + light/dark theme tokens
js/script.js        theme toggle, nav/menu behaviour, form handling
assets/             logo, favicon and founder photo (optimized for web)
netlify.toml         Netlify build/publish config + security headers
```

No build step — it's plain HTML/CSS/JS, so it deploys as-is.

## Deploy to Netlify (pick one)

**A. Drag and drop (fastest)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `zevalios-site` folder onto the page.
3. Netlify gives you a live `*.netlify.app` URL immediately. You can rename the site and add a custom domain later in **Site settings → Domain management**.

**B. Netlify CLI**
```bash
npm install -g netlify-cli
cd zevalios-site
netlify deploy          # preview
netlify deploy --prod   # go live
```

**C. Git-based (auto-deploys on every push)**
1. Push this folder to a GitHub/GitLab repo.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command: leave blank. Publish directory: `.` (already set in `netlify.toml`).

## The contact form
The form in the Contact section uses **Netlify Forms** (`data-netlify="true"`), so once it's live on Netlify, submissions appear automatically under **Site → Forms** — no backend needed. It also has a honeypot field for basic spam protection. If you'd rather route submissions to email, add a `Forms → Notifications` rule in the Netlify dashboard.

## Customizing
- **Colors, type, spacing:** all defined as CSS variables at the top of `css/style.css` (separate tokens for `[data-theme="dark"]` and `[data-theme="light"]`).
- **Copy:** all text lives directly in `index.html`, taken from the Zevalios pitch one-pager.
- **Images:** swap files in `/assets` and keep the same filenames, or update the `src` paths in `index.html`.

# Zevalios website

Original, production-oriented static website for GitHub and Netlify.

## Architecture

- Semantic HTML, one central CSS file and minimal vanilla JavaScript.
- No framework, package manager, build command, analytics script, advertising pixel or external font request.
- Netlify contact form with honeypot protection and a success redirect.
- Light/dark interface preference stored only in the visitor's browser local storage.
- Original workflow diagrams and interaction code.

## File tree

```text
index.html
services.html
approach.html
about.html
contact.html
privacy.html
cookies.html
terms.html
disclaimer.html
success.html
404.html
netlify.toml
robots.txt
sitemap.xml
site.webmanifest
assets/
  css/styles.css
  js/main.js
  images/og-card.png
  images/zevalios-emblem.svg
  icons/favicon.svg
  icons/apple-touch-icon.png
```

## Important brand-asset step

The owner-supplied brand assets are now integrated: `assets/images/zevalios-embossed-icon.png` for the navigation brand mark, `assets/images/zevalios-logo.png` for the footer wordmark, and `assets/images/yash-signature.png` for founder sign-off sections.

The live wordmark remains text so it stays sharp on high-density screens.

## Local preview

From the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub and Netlify deployment

1. Create a private GitHub repository.
2. Upload every item in this folder to the repository root.
3. In Netlify, choose **Add new project** and import the GitHub repository.
4. Leave the build command blank.
5. Set the publish directory to `.`.
6. Deploy.
7. In **Forms**, confirm that `workflow-discussion` was detected.
8. Configure form notifications to `yash@zevalios.com`.
9. Add `zevalios.com` in Domain management and follow Netlify's Domain Name System instructions.
10. Set the apex domain as primary and verify HTTPS.

## Launch checks that require an owner decision

- Replace the temporary emblem with the final approved asset.
- Confirm that the privacy-controller description remains correct. It currently identifies Yashwantt Ramnarain as operating under the Zevalios name; update it if a company becomes the controller before launch.
- Confirm the telephone number and email aliases.
- Review the privacy notice against the final email, hosting, customer-relationship-management and retention configuration.
- Execute or confirm the applicable Netlify data-processing terms for the selected account.
- Test the Netlify form on the deployed production URL.
- Test at 320, 390, 768, 1024 and 1440 pixel widths.

## Content updates

- Core visual tokens: `assets/css/styles.css` under `:root`.
- Behaviour: `assets/js/main.js`.
- Page copy: the relevant HTML file.
- Contact form: `contact.html`.
- Legal documents: `privacy.html`, `cookies.html`, `terms.html` and `disclaimer.html`.

## Security

`netlify.toml` applies a Content Security Policy, clickjacking protection, transport security, restricted browser permissions and cache rules. Re-test the policy before adding any third-party script, embedded media, external font or analytics service.

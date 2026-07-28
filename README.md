# Zevalios website

Production-ready static website for **zevalios.com**. It uses plain HTML, CSS and minimal JavaScript, so there is no build dependency and it can be deployed immediately to Netlify.

## Included

- Home, Services, Approach, About, Contact and Privacy pages
- Responsive mobile navigation
- Netlify contact form with honeypot protection
- Success page and custom 404 page
- Sitemap, robots file, social metadata and structured data
- Security headers and canonical redirect from `www` to the apex domain
- Original Zevalios brand assets supplied by the owner

## Fastest deployment today

1. Create a Netlify account.
2. Choose **Add new project → Deploy manually**.
3. Drag the contents of this folder, or drag the ZIP after extracting it.
4. Netlify will issue a temporary `*.netlify.app` address.
5. Open **Forms** in the Netlify dashboard and verify that the `fit-call` form was detected.
6. Set form-notification emails to `yash@zevalios.com` after that mailbox is active.
7. Add `zevalios.com` under **Domain management** and follow Netlify's DNS instructions.
8. Set `zevalios.com` as the primary domain and verify HTTPS.

## Better long-term deployment

1. Create a private GitHub repository.
2. Upload every file in this folder to the repository root.
3. In Netlify, choose **Import an existing project** and connect the repository.
4. Build command: leave empty.
5. Publish directory: `.`
6. Every approved GitHub change will redeploy automatically.

## Email identity used by the site

- Primary founder mailbox: `yash@zevalios.com`
- Public alias: `hello@zevalios.com`
- Privacy alias: `privacy@zevalios.com`
- Suggested additional aliases: `invoices@zevalios.com`, `dmarc@zevalios.com`

Change all occurrences before launch if another address is selected:

```bash
find . -type f -name "*.html" -o -name "*.md" | xargs sed -i 's/yash@zevalios.com/NEW@zevalios.com/g'
```

## Required pre-publication checks

- Confirm the email address and telephone number.
- Review the privacy notice against the final provider configuration and retention practice.
- Confirm that publishing the founder operating-impact example is authorised and accurately worded.
- Test the contact form on the Netlify production URL.
- Test desktop, iPhone and Android layouts.
- Confirm Google Workspace SPF, DKIM and DMARC before outreach.
- Remove `assets/pitch-reference.png` from the public deployment if it is not needed; it is included only as an internal design reference and is not linked from any page.

## No third-party trackers

The website intentionally contains no Google Analytics, advertising pixel, external font, embedded social feed or cookie banner. Essential Netlify infrastructure may still process technical information required to serve and secure the website.

## Favicon assets

The website includes a favicon set derived from the Zevalios horse–Z logo:

- `assets/favicon.ico`
- `assets/favicon-16.png`
- `assets/favicon-32.png`
- `assets/favicon-48.png`
- `assets/apple-touch-icon.png`
- `assets/icon-192.png`
- `assets/icon-512.png`

The required `<link>` elements are already included in every HTML page.

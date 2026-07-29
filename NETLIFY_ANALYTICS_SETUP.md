# Private website analytics — recommended setup

This package intentionally does not include a public or hidden `/analytics` webpage. A static HTML page cannot securely protect traffic data, and a secret URL is not authentication.

Use **Netlify Web Analytics** inside the authenticated Netlify account instead:

1. Open the Zevalios site in Netlify.
2. Go to **Logs & Metrics → Analytics**.
3. Select **Enable Analytics**.
4. Keep account multi-factor authentication enabled and restrict team access.

The private dashboard can show pageviews, unique-visitor estimates, top locations, top pages, referral sources, bandwidth and common 404 requests. It does not identify visitors by name. Netlify derives the metrics from CDN server logs without adding a client-side analytics script or analytics cookies.

The website Privacy Policy, Cookies Policy and storage notice already disclose this optional server-side measurement. No code change is required when Netlify Web Analytics is enabled.

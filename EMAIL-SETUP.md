# Domain and Google Workspace launch checklist

This checklist assumes `zevalios.com` is registered with an independent registrar and email is purchased directly from Google Workspace.

## 1. Secure the domain

- Register `zevalios.com` in the Zevalios owner's name.
- Use an established personal email—not the new Zevalios mailbox—as the registrar recovery address.
- Enable an authenticator-app form of two-factor authentication.
- Enable registrar lock, WHOIS privacy, automatic renewal and DNSSEC if supported.
- Store recovery codes and the renewal date outside the registrar account.

## 2. Create the Google Workspace account

- Select Google Workspace **Business Starter** for one user.
- Create the primary user as `yash@zevalios.com`.
- Use an established personal address as the Workspace recovery contact.
- Complete Google's domain-verification step by adding the TXT record shown in the Admin console to the registrar's DNS panel.

Do not copy a verification token from a generic guide; use the unique token issued inside the Google Admin console.

## 3. Activate Gmail

In the Google Admin console, choose the Gmail activation workflow. Add the exact MX record or records shown by Google to the domain's DNS panel and remove conflicting mail MX records.

DNS changes can take time to propagate. Do not send outreach until the Admin console confirms Gmail activation and test messages work in both directions.

## 4. Add free aliases

Under the user's account in Google Admin, add:

- `hello@zevalios.com`
- `privacy@zevalios.com`
- `invoices@zevalios.com`
- `dmarc@zevalios.com`

These should deliver to the primary `yash@zevalios.com` mailbox and normally do not require extra user licences.

## 5. Configure authentication

### SPF

Add a single SPF TXT record authorising Google. The commonly used Google value is:

`v=spf1 include:_spf.google.com ~all`

Do not create multiple SPF records. Merge other authorised senders into one record if added later.

### DKIM

In Google Admin, generate a 2048-bit DKIM key for `zevalios.com`. Google will display a DNS host name and TXT value. Add them exactly, wait for propagation, then start authentication in the Admin console.

### DMARC

After SPF and DKIM pass, add a monitoring policy:

`v=DMARC1; p=none; rua=mailto:dmarc@zevalios.com; adkim=s; aspf=s; pct=100`

Review reports and later move gradually to `p=quarantine` and then `p=reject` once every legitimate sender is authenticated.

## 6. Set founder identity

Recommended display name:

**Yashwantt Ramnarain | Founder, Zevalios**

Recommended signature:

```
Yashwantt Ramnarain
Founder | Zevalios
Revenue & Operational Performance
M: +353 85 143 8294
E: yash@zevalios.com
W: zevalios.com
Smarter Flow. Stronger Results.
```

Use a simple text signature initially. Avoid large image signatures that increase spam risk and render inconsistently.

## 7. Warm the new domain before outreach

- Send and receive genuine one-to-one messages with established contacts.
- Complete several normal replies before sending prospecting emails.
- Start with a small number of individually researched prospects.
- Avoid identical mass emails, shortened links, large attachments and aggressive sending volume.
- Test delivery to Gmail, Outlook and another business mailbox.

## 8. Netlify form notifications

After deployment:

- Open **Netlify → Forms → fit-call → Form notifications**.
- Add `yash@zevalios.com` as the notification recipient.
- Submit a live test form and confirm delivery.

## Launch minimum

The website and email are commercially ready only when all six are true:

1. `https://zevalios.com` loads with a valid certificate.
2. `https://www.zevalios.com` redirects to the apex domain.
3. `yash@zevalios.com` sends and receives.
4. SPF passes.
5. DKIM passes.
6. The live contact form reaches the mailbox.

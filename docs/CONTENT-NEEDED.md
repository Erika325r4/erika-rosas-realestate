# Content Needed Before Launch

This is the punch list of everything Erika (or her brokerage) must supply
before this site goes live. Nothing below is fabricated on the site —
every item currently shows a clearly labeled placeholder.

## Branding

- [ ] Logo (SVG or high-res PNG, transparent background)
- [ ] Final brand color approval (currently using the palette from the
      master prompt: navy `#17324D`, coastal blue `#2F6F8F`, sand
      `#E8DDCB`, cream `#F8F5EF`, gold `#B8955A`, charcoal `#252A2E`)
- [ ] Favicon / app icon

## Brokerage & Compliance

- [ ] Brokerage name (`src/content/site.ts` → `brokerageName`)
- [ ] Brokerage office address (`brokerageAddress`)
- [ ] Brokerage logo, if required by MLS rules
- [ ] Equal Housing Opportunity logo file (text disclosure is already in
      the footer and Terms page; add the logo graphic when supplied)
- [ ] REALTOR® marks — only add if Erika holds an active REALTOR®
      membership authorizing use
- [ ] MLS/IDX attribution language (exact wording from the MLS agreement)
- [ ] Final privacy policy, terms of use, and accessibility statement —
      current drafts at `/privacy`, `/terms`, `/accessibility` are
      placeholders and must be reviewed by a qualified professional
- [ ] Approved SMS consent language (for the contact/valuation forms)
- [ ] Approved email consent / unsubscribe language

## Photography

- [ ] Professional headshot of Erika (used in `about/AboutErika.tsx`,
      `/about`)
- [ ] Real listing photography for any live properties (replaces
      `PlaceholderImage` in `PropertyCard`, `PropertyGallery`)
- [ ] Area/lifestyle photography for the 10 service-area pages (replaces
      `PlaceholderImage` in `AreaHero`)
- [ ] Blog post header images

## Listings Data

- [ ] IDX/MLS provider selection and account details — see
      docs/IDX-INTEGRATION.md
- [ ] Confirmation that all current demo listings in
      `src/content/properties.ts` should be removed once live data is
      connected

## Reviews

- [ ] At least 3–5 genuine, attributable client testimonials (name +
      quote, with permission to publish) — see `src/content/testimonials.ts`,
      currently all placeholders marked "VERIFIED REVIEW REQUIRED"

## Accounts & Integrations

- [ ] Email or CRM destination for form submissions — see
      docs/FORM-INTEGRATION.md
- [ ] Analytics provider (GA4, Plausible, etc.) and a cookie-consent plan
      — see docs/DEPLOYMENT.md
- [ ] Social profile URLs (`src/content/site.ts` → `socialLinks`)
- [ ] Production domain name and DNS access

## Editorial Review

- [ ] Every claim marked `EDITOR REVIEW REQUIRED` in
      `src/content/articles.ts` (3 draft blog posts)
- [ ] Every area page currently has `contentReviewed: false` in
      `src/content/areas.ts` — confirm local specifics (commute times,
      insurance notes, etc.) before flipping to `true`
- [ ] Spanish copy on `/resources/spanish` — written in-house, needs a
      fluent-speaker review pass before launch

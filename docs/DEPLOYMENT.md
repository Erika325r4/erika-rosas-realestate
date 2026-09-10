# Deployment

## Recommended host

Vercel is the simplest path for a Next.js App Router site (same team
that builds Next.js; zero-config deploys, preview URLs per PR, edge
network). Any Node.js host that supports Next.js 16 works too.

## Before the first deploy

1. Work through `docs/CONTENT-NEEDED.md` — at minimum, replace the
   brokerage placeholders in `src/content/site.ts` and finalize
   `/privacy`, `/terms`, and `/accessibility`.
2. Copy `.env.example` to `.env.local` (for local dev) and configure the
   same variables in your host's environment settings for production.
   Set `NEXT_PUBLIC_SITE_URL` to the real production domain — it drives
   canonical URLs, the sitemap, and Open Graph tags.
3. Wire up form delivery — see `docs/FORM-INTEGRATION.md`. Ship without
   this only if you're comfortable leads aren't reaching anyone yet.
4. Decide on an IDX/MLS provider (or launch with demo listings clearly
   marked, and connect IDX afterward) — see `docs/IDX-INTEGRATION.md`.

## Build & verify locally

```bash
npm run lint
npx tsc --noEmit
npm run test
npm run build
npm run start
npm run test:e2e
```

All of the above should pass before deploying. `npm run test:e2e` starts
its own production build and server on port 3100 — see
`playwright.config.ts`.

## Analytics

No analytics script is installed. `src/lib/analytics.ts` is a safe
no-op abstraction (`trackEvent(...)` just logs to the console in
development) — call sites throughout the app already call it for key
events (`phone_click`, `property_search`, `contact_submit`, etc.), so
turning on real tracking is a change to one file, not a hunt through the
codebase.

To turn it on:

1. Choose a provider (GA4, Plausible, Fathom, etc.) and confirm a
   cookie-consent approach appropriate for your traffic (a simple
   consent banner if you collect any identifying analytics).
2. Add `NEXT_PUBLIC_ANALYTICS_ID` to your environment.
3. Load the provider's script in `src/app/layout.tsx` via `next/script`,
   gated on consent if required.
4. Implement the body of `trackEvent` in `src/lib/analytics.ts` to
   forward to that provider — no other file needs to change.
5. Update the Privacy Policy's "Cookies & Analytics" section
   (`src/app/privacy/page.tsx`) to describe what's actually collected.

## Security headers

Add production security headers (CSP, `X-Frame-Options`,
`Referrer-Policy`, etc.) via `next.config.ts`'s `headers()` function
once the final set of external script/image origins is known (email
provider, analytics, IDX photo host, etc.) — adding a strict CSP before
those origins are finalized tends to cause more churn than value.

## Caching

Most pages are statically generated at build time (see the route list
printed by `npm run build`) — `/`, `/about`, `/property-types/*`,
`/resources/*`, `/blog/*`, `/areas/*`, legal pages. `/search`,
`/properties`, and the three `/api/*` routes are dynamic by necessity
(query params / mutations). No further caching configuration is needed
until real, frequently-changing IDX data is connected — revisit
`fetch` cache options in the new `PropertyProvider` implementation at
that point.

# Erika Rosas — Northeast Florida Real Estate

A fast, mobile-first real estate website for Erika Rosas, built with
Next.js App Router, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20+ (developed and tested against Node 24)
- npm (the project uses npm; do not mix in yarn/pnpm lockfiles)

## Installation

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local` as needed — see the comments in `.env.example` and
`docs/FORM-INTEGRATION.md` / `docs/DEPLOYMENT.md`. The site runs
locally with no environment variables set at all; they're only needed
for real form delivery, analytics, and IDX data.

## Local development

```bash
npm run dev
```

Opens at `http://localhost:3000`.

## Testing

```bash
npm run lint          # ESLint
npx tsc --noEmit       # TypeScript
npm run test           # Vitest unit tests (formatting, filtering, validation, metadata)
npm run test:e2e       # Playwright end-to-end tests (builds + starts a prod server on :3100)
```

`npm run test:e2e` uses Chromium only — see the comment in
`playwright.config.ts` for why WebKit is currently excluded in this
environment, and how to re-add it once that's resolved elsewhere.

## Production build

```bash
npm run build
npm run start
```

## Content editing

See `docs/WEBSITE-ADMIN.md` for a non-technical guide to editing
listings, articles, service areas, testimonials, navigation, and brand
colors — everything lives in `src/content/*.ts` as plain data files.

## Environment variables

See `.env.example` for the full list. Nothing is required for local
development; production needs at least `NEXT_PUBLIC_SITE_URL` and
whichever form-delivery variables you choose (see
`docs/FORM-INTEGRATION.md`).

## Project structure

```
src/
  app/                 Routes (Next.js App Router)
  components/          UI components, grouped by area (layout, home, forms, properties, areas, blog, shared)
  content/             Editable data: site info, navigation, properties, areas, articles, testimonials, FAQs
  lib/                 Formatting, Zod schemas, metadata/structured-data builders, the property-provider abstraction, form/analytics helpers
  types/                TypeScript types for Property, Area, Article, and lead/form data
tests/
  unit/                Vitest unit tests
  e2e/                 Playwright end-to-end tests
docs/                  Handoff documentation (this file's companions)
```

## Current limitations (read before launch)

This is a complete, working site — but several things are intentionally
left as clearly-labeled placeholders pending real content, credentials,
or legal review. Full punch list: **`docs/CONTENT-NEEDED.md`**.

In short:

- **Listings are demonstration data.** Every property in
  `src/content/properties.ts` is flagged `isDemo: true` and badged in
  the UI. See `docs/IDX-INTEGRATION.md` to connect a real feed.
- **Forms don't deliver anywhere yet.** Submissions are validated,
  sanitized, rate-limited, and logged (redacted) server-side, but no
  email/CRM destination is connected. See `docs/FORM-INTEGRATION.md`.
- **No analytics is installed.** `src/lib/analytics.ts` is a
  console-only no-op until a provider and consent plan are chosen. See
  `docs/DEPLOYMENT.md`.
- **All photography is an original placeholder graphic** (see
  `src/components/shared/PlaceholderImage.tsx`) — nothing is downloaded
  or scraped from another site. Real headshots, listing photos, and
  area photography are needed before launch.
- **Testimonials are placeholders** marked "Verified Review Required" —
  no review is fabricated.
- **Legal pages (`/privacy`, `/terms`, `/accessibility`) are drafts**
  and need review by a qualified professional, along with SMS/email
  consent language and brokerage/MLS attribution details.
- **Three blog articles are drafts** with inline `EDITOR REVIEW
REQUIRED` markers on any claim that needs fact-checking before
  publication.
- **Spanish page copy** (`/resources/spanish`) was written in-house and
  needs a fluent-speaker review pass.

## Attribution & brand voice guardrails

A few decisions were deliberate constraints, not oversights — worth
knowing before "fixing" them:

- No sales volume, homes-sold counts, review totals, rankings, or
  awards appear anywhere. The Trust Bar (`src/content/site.ts` →
  `trustStatements`) only lists claims that are actually verifiable.
- Area pages avoid any claim about school quality, crime, safety, or
  "who should live here" — Fair Housing–safe by construction. Don't add
  copy like that without legal review.
- Nothing promises a specific sale price, timeline, or approval outcome
  anywhere on the site (home value page, sell page, marketing plan).

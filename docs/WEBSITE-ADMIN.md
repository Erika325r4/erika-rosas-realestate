# Website Admin Guide

A non-technical guide to editing this site's content. Everything below
is a plain-text or TypeScript-array edit in `src/content/` — no build
tooling knowledge required beyond finding the file and editing text
between quotes.

## Business info (phone, email, tagline, license)

Edit **one file**: `src/content/site.ts`. Every page pulls from here, so
a phone number update in this file updates it everywhere on the site.

## Featured / active listings

Edit `src/content/properties.ts`. It's an array — copy an existing
`{ ... }` block, change the values, and add a comma. Set `price`,
`bedrooms`, `bathrooms`, etc. to `null` if unknown (the card will show
"Contact for Price" instead of a number). Set `featured: true` to have
a listing appear in the homepage's Featured Listings section.

Once a real IDX/MLS feed is connected (see `docs/IDX-INTEGRATION.md`),
this file is no longer the source of listings — don't edit it at that
point; listings will come from the live feed automatically.

## Blog articles

Edit `src/content/articles.ts`. Each article is a `{ ... }` block with
a `body` array — each string in that array becomes one paragraph.
Set `reviewed: true` only after a human has fact-checked the article
(this removes the "Editor Review Required" warning banner from the
article page).

## Service areas

Edit `src/content/areas.ts`. Each area has `faqs`, `buyerConsiderations`,
`sellerConsiderations`, etc. as arrays of strings — add or remove items
freely. Set `contentReviewed: true` once Erika has confirmed the
specifics for that town (this removes the review-pending note from the
area page).

## Testimonials

Edit `src/content/testimonials.ts`. Replace `quote` and `name` with a
real, permission-granted review, and set `verified: true` — this
removes the red "Verified Review Required" placeholder styling and
shows it as a normal testimonial.

## Navigation menus

Edit `src/content/navigation.ts` — `mainNavigation` is the header/mobile
menu, `footerNavigation` is the footer's link columns.

## Social links

Edit `src/content/site.ts` → `socialLinks` array. It's empty by default
(so the footer's social icon row doesn't render at all); add
`{ label: "Instagram", href: "https://instagram.com/..." }` entries to
populate it.

## Colors and fonts

Brand colors live in `src/app/globals.css` in the `@theme { ... }`
block at the top — change a hex value there and it updates everywhere
that color is used (`bg-navy`, `text-gold`, etc. throughout the
components). Fonts are loaded in `src/app/layout.tsx` via `next/font`
(Playfair Display for headings, Inter for body text).

## After making a content edit

If you're comfortable with a terminal:

```bash
npm run dev
```

opens a local preview at `http://localhost:3000` that updates as you
save files. When ready to publish, whoever manages deployment runs
`npm run build` and deploys per `docs/DEPLOYMENT.md` — most hosts
(Vercel included) do this automatically on every push to the main
branch once connected.

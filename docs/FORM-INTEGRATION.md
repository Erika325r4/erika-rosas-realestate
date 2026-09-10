# Form Integration

There are three lead-capture forms — Contact, Home Valuation, and
Property Alerts — each backed by its own API route:

| Form            | Component                                    | API Route                              |
| --------------- | -------------------------------------------- | -------------------------------------- |
| Contact         | `src/components/forms/ContactForm.tsx`       | `src/app/api/contact/route.ts`         |
| Home Valuation  | `src/components/forms/ValuationForm.tsx`     | `src/app/api/valuation/route.ts`       |
| Property Alerts | `src/components/forms/PropertyAlertForm.tsx` | `src/app/api/property-alerts/route.ts` |

## Current behavior (as shipped)

Every route already:

- Validates the request body against a Zod schema (`src/lib/schemas.ts`)
  on the **server**, not just the client.
- Rejects a filled honeypot field (`companyWebsite`) as a likely bot,
  acknowledging success without processing it.
- Rate-limits by IP using an **in-memory** counter
  (`src/lib/forms.ts` → `isRateLimited`).
- Sanitizes free-text fields (`sanitizeText`).
- Logs a **redacted** version of the lead (email/phone masked) to the
  server console — never the full submission, and nothing is written to
  the repository or a database.
- Returns `{ ok: true }` to the client, which shows a success message.

**No email, CRM, or form provider is connected yet.** A submitted lead
is validated and acknowledged, but not delivered anywhere a human will
see it. Do not tell Erika or a client that submitting a form reaches
her until one of the options below is wired up.

## Wiring up real delivery

Pick one path per route (or mix — e.g. contact form to email, valuation
form to a CRM):

### Option A — Transactional email

1. Choose a provider (Resend, Postmark, SendGrid all work well with
   Next.js Route Handlers).
2. Add `EMAIL_PROVIDER_API_KEY` and `LEAD_NOTIFICATION_EMAIL` to
   `.env.local`.
3. In each route's `// TODO(forms):` comment, call the provider's SDK to
   send a formatted email of `lead` to `LEAD_NOTIFICATION_EMAIL`.

### Option B — CRM webhook

1. Get a webhook URL from Erika's CRM (many real estate CRMs — Follow Up
   Boss, kvCORE, LionDesk, etc. — accept a generic lead webhook).
2. Add `CRM_WEBHOOK_URL` and `CRM_WEBHOOK_SECRET` to `.env.local`.
3. `POST` the `lead` object (map fields to whatever shape the CRM
   expects) at the `// TODO(forms):` marker in each route.

## Rate limiting in production

The shipped rate limiter (`src/lib/forms.ts`) is in-memory and resets on
every deploy or server restart, and doesn't share state across multiple
server instances. That's fine for local development and low-traffic
early launch, but before meaningful traffic:

1. Provision a durable store — Upstash Redis and Vercel KV both have
   generous free tiers and work well from a Next.js Route Handler.
2. Add `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` (or your
   store's equivalents) to `.env.local`.
3. Replace the body of `isRateLimited` in `src/lib/forms.ts` with a call
   to the durable store, keeping the same function signature so no call
   sites need to change.

## Consent language

Each form's consent checkbox currently uses placeholder wording
("I agree to be contacted..."). Replace it with Erika's brokerage's
approved SMS/email consent language before launch — see
`docs/CONTENT-NEEDED.md`.

## Spanish contact form

`/resources/spanish` currently embeds the same `ContactForm` used
elsewhere (English labels). Once Spanish copy is reviewed (see
`docs/CONTENT-NEEDED.md`), either add a `locale` prop to `ContactForm`
to swap labels, or build a small `ContactFormEs` variant — both are
reasonable; the underlying `contactFormSchema` and API route don't need
to change either way.

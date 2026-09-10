/**
 * Form submission helpers shared by every API route: input sanitization,
 * a rate-limit abstraction, and safe logging. See docs/FORM-INTEGRATION.md
 * for what needs to change to go live (email/CRM delivery, a real rate
 * limit store).
 */

/** Strips tags and collapses whitespace. Run on every free-text field before storing or forwarding it. */
export function sanitizeText(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * In-memory rate limiter, keyed by client IP. Good enough for a single
 * server instance in development; resets on every deploy/restart. Replace
 * with a durable store (Upstash Redis, Vercel KV, etc.) before production
 * — see docs/FORM-INTEGRATION.md.
 */
const submissionLog = new Map<string, number[]>();

export function isRateLimited(
  key: string,
  { windowMs = 60_000, maxRequests = 5 }: { windowMs?: number; maxRequests?: number } = {},
): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(key) ?? []).filter((t) => now - t < windowMs);
  timestamps.push(now);
  submissionLog.set(key, timestamps);
  return timestamps.length > maxRequests;
}

/** True when the honeypot field was filled in — meaning the submission is very likely automated. */
export function isBotSubmission(companyWebsite: string | undefined): boolean {
  return Boolean(companyWebsite && companyWebsite.length > 0);
}

/**
 * Never log a lead's full personal details. Use this for server logs so we
 * can see submission volume/category without persisting PII in log
 * transports.
 */
export function redactLeadForLogging<T extends { email?: string; phone?: string }>(
  lead: T,
): Record<string, unknown> {
  const { email, phone, ...rest } = lead;
  return {
    ...rest,
    email: email ? `${email.slice(0, 2)}***` : undefined,
    phone: phone ? "***-***-****" : undefined,
  };
}

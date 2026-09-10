import { NextResponse, type NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import { sanitizeText, isRateLimited, isBotSubmission, redactLeadForLogging } from "@/lib/forms";

/**
 * No email/CRM/form provider is connected yet — see docs/FORM-INTEGRATION.md
 * for exactly what to wire up before this goes live. Until then, valid
 * submissions are validated, sanitized, rate-limited, and logged
 * (redacted) server-side, then acknowledged to the client. Nothing is
 * persisted to the repository or a database.
 */
export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(`contact:${ip}`)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  if (isBotSubmission(parsed.data.companyWebsite)) {
    // Acknowledge success without processing — don't tip off bots.
    return NextResponse.json({ ok: true });
  }

  const lead = {
    ...parsed.data,
    fullName: sanitizeText(parsed.data.fullName),
    message: sanitizeText(parsed.data.message),
  };

  console.log("[contact] new lead:", redactLeadForLogging(lead));

  // TODO(forms): forward `lead` to the chosen email/CRM destination here.

  return NextResponse.json({ ok: true });
}

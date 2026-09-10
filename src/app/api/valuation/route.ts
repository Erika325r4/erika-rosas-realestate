import { NextResponse, type NextRequest } from "next/server";
import { valuationFormSchema } from "@/lib/schemas";
import { sanitizeText, isRateLimited, isBotSubmission, redactLeadForLogging } from "@/lib/forms";

/** See docs/FORM-INTEGRATION.md — no email/CRM destination connected yet. */
export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(`valuation:${ip}`)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = valuationFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  if (isBotSubmission(parsed.data.companyWebsite)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    ...parsed.data,
    fullName: sanitizeText(parsed.data.fullName),
    propertyAddress: sanitizeText(parsed.data.propertyAddress),
    importantUpdates: sanitizeText(parsed.data.importantUpdates ?? ""),
    additionalMessage: sanitizeText(parsed.data.additionalMessage ?? ""),
  };

  console.log("[valuation] new lead:", redactLeadForLogging(lead));

  // TODO(forms): forward `lead` to the chosen email/CRM destination here.
  // Never claim or return an automated value estimate — this is a request
  // for Erika's personal review, not an instant valuation.

  return NextResponse.json({ ok: true });
}

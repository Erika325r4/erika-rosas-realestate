import { NextResponse, type NextRequest } from "next/server";
import { propertyAlertFormSchema } from "@/lib/schemas";
import { sanitizeText, isRateLimited, isBotSubmission, redactLeadForLogging } from "@/lib/forms";

/** See docs/FORM-INTEGRATION.md — no email/CRM destination connected yet. */
export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(`property-alerts:${ip}`)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = propertyAlertFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  if (isBotSubmission(parsed.data.companyWebsite)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    ...parsed.data,
    fullName: sanitizeText(parsed.data.fullName),
    city: sanitizeText(parsed.data.city),
  };

  console.log("[property-alerts] new subscriber:", redactLeadForLogging(lead));

  // TODO(forms): forward `lead` to the chosen email/CRM destination here.

  return NextResponse.json({ ok: true });
}

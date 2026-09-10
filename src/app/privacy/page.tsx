import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}'s Northeast Florida real estate website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container narrow>
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy" }]} />
      <h1 className="text-4xl font-bold text-navy">Privacy Policy</h1>
      <p className="mt-4 text-sm text-charcoal/60">
        LEGAL PLACEHOLDER — this page must be reviewed and finalized by a qualified professional
        before launch. See docs/CONTENT-NEEDED.md.
      </p>

      <div className="mt-8 flex flex-col gap-6 text-sm text-charcoal/85">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">Information We Collect</h2>
          <p>
            When you submit a form on this site (contact, home valuation, or property alerts), we
            collect the information you provide: name, email, phone number, property address (where
            applicable), and any message you include.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">How We Use It</h2>
          <p>
            Submitted information is used to respond to your inquiry and, where you&rsquo;ve
            consented, to follow up by phone, text, or email about real estate services.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">SMS Consent</h2>
          <p>
            VERIFICATION REQUIRED — insert approved SMS/text-messaging consent language here,
            including opt-out instructions, before launch.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">Email Consent</h2>
          <p>
            VERIFICATION REQUIRED — insert approved email consent and unsubscribe language here
            before launch.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">Cookies &amp; Analytics</h2>
          <p>
            This site does not currently run analytics tracking. If analytics is added later, this
            section must be updated with the provider, what is collected, and how visitors can opt
            out — see docs/DEPLOYMENT.md.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">Contact</h2>
          <p>Questions about this policy can be directed to {site.email}.</p>
        </section>
      </div>
    </Container>
  );
}

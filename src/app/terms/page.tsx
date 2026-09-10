import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms of use for ${site.name}'s Northeast Florida real estate website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container narrow>
      <Breadcrumbs items={[{ name: "Terms of Use", href: "/terms" }]} />
      <h1 className="text-4xl font-bold text-navy">Terms of Use</h1>
      <p className="mt-4 text-sm text-charcoal/60">
        LEGAL PLACEHOLDER — this page must be reviewed and finalized by a qualified professional
        before launch. See docs/CONTENT-NEEDED.md.
      </p>

      <div className="mt-8 flex flex-col gap-6 text-sm text-charcoal/85">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">Demonstration Property Data</h2>
          <p>
            Property listings shown on this site are demonstration data pending an authorized
            MLS/IDX data license. They do not represent real, currently available properties unless
            explicitly noted otherwise.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">No Guarantee of Outcome</h2>
          <p>
            Nothing on this site is a guarantee of a specific sale price, purchase price, appraisal
            value, financing approval, or transaction timeline.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">Equal Housing Opportunity</h2>
          <p>
            {site.name} provides real estate services in accordance with the Fair Housing Act and
            does not discriminate on the basis of race, color, religion, sex, disability, familial
            status, or national origin.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">Brokerage &amp; License</h2>
          <p>
            Brokerage: VERIFICATION REQUIRED. {site.license}. IDX/MLS attribution language will be
            added here once a data license is in place — see docs/IDX-INTEGRATION.md.
          </p>
        </section>
      </div>
    </Container>
  );
}

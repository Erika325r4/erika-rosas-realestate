import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallTextButtons } from "@/components/shared/CallTextButtons";

export const metadata: Metadata = buildMetadata({
  title: "Military and VA Buyers",
  description:
    "VA transaction knowledge and relocation-timing coordination for military families moving to or from Northeast Florida.",
  path: "/resources/military-va",
});

export default function MilitaryVaPage() {
  return (
    <Container narrow>
      <Breadcrumbs
        items={[
          { name: "Resources", href: "/resources" },
          { name: "Military and VA Buyers", href: "/resources/military-va" },
        ]}
      />
      <h1 className="text-4xl font-bold text-navy">Military and VA Buyers</h1>
      <p className="mt-4 text-charcoal/80">
        Erika works with VA financing regularly and understands how military relocation timing — PCS
        orders, report dates, and deployment schedules — affects a home search and closing timeline.
      </p>
      <div className="mt-6">
        <CallTextButtons />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold text-navy">VA Financing</h2>
          <p className="mt-1 text-sm text-charcoal/80">
            Familiarity with VA loan eligibility, funding fee considerations, and property
            requirements — your VA lender confirms final eligibility and numbers.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-navy">Relocation Timing</h2>
          <p className="mt-1 text-sm text-charcoal/80">
            Coordinating a home search and closing around PCS orders, report dates, and
            remote/virtual showing needs when you can&rsquo;t be here in person for every step.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-navy">Inspections & Appraisal</h2>
          <p className="mt-1 text-sm text-charcoal/80">
            Coordinating VA-required inspections and appraisal considerations, and helping structure
            requests when an appraisal comes in under contract price.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-navy">Contract-to-Closing Support</h2>
          <p className="mt-1 text-sm text-charcoal/80">
            Keeping every VA-specific deadline on track through closing day.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-navy/10 bg-sand/40 p-4 text-xs text-charcoal/70">
        Erika Rosas is an independent Realtor. This page is not affiliated with, endorsed by, or
        sponsored by the U.S. Department of Veterans Affairs, the U.S. Department of Defense, or any
        branch of the U.S. military.
      </div>
    </Container>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallTextButtons } from "@/components/shared/CallTextButtons";

export const metadata: Metadata = buildMetadata({
  title: "Divorce Property Support",
  description:
    "Calm, professional real estate coordination for homeowners and family-law professionals navigating a property sale during divorce.",
  path: "/resources/divorce-property-support",
});

const services = [
  "Neutral, professional communication with all parties involved",
  "Property information gathering (documents, condition, access)",
  "Market analysis to inform pricing conversations",
  "Showing coordination that works around multiple parties' schedules",
  "Repair and vendor coordination when preparation is needed",
  "Offer documentation shared clearly with all relevant parties",
  "Closing-timeline coordination",
];

export default function DivorcePropertySupportPage() {
  return (
    <Container narrow>
      <Breadcrumbs
        items={[
          { name: "Resources", href: "/resources" },
          { name: "Divorce Property Support", href: "/resources/divorce-property-support" },
        ]}
      />
      <h1 className="text-4xl font-bold text-navy">Divorce Property Support</h1>
      <p className="mt-4 text-charcoal/80">
        Selling a shared property during a divorce is a real estate process with more moving parts.
        Erika provides clear, professional, and neutral coordination throughout — the same real
        estate services she provides any client, handled with extra care for communication.
      </p>
      <div className="mt-6">
        <CallTextButtons />
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-navy/10 bg-white p-5">
          <h2 className="text-lg font-semibold text-navy">I Am a Homeowner</h2>
          <p className="mt-2 text-sm text-charcoal/80">
            If you and a co-owner need to sell a shared property, Erika can walk you through what
            the process looks like, what documentation is typically needed, and how showings and
            offers are handled when more than one owner is involved.
          </p>
        </div>
        <div className="rounded-xl border border-navy/10 bg-white p-5">
          <h2 className="text-lg font-semibold text-navy">I Am a Family-Law Professional</h2>
          <p className="mt-2 text-sm text-charcoal/80">
            If you&rsquo;re an attorney or mediator working with clients who need a property sold or
            valued as part of a case, Erika can coordinate directly with you and your client on
            market analysis, listing logistics, and closing timelines.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold text-navy">What This Includes</h2>
        <ul className="flex flex-col gap-2">
          {services.map((service) => (
            <li key={service} className="text-sm text-charcoal/80">
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-xl border border-navy/10 bg-sand/40 p-4 text-xs text-charcoal/70">
        Erika Rosas provides real estate services only — not legal, tax, or financial advice. This
        page describes general real estate coordination and is not a substitute for guidance from an
        attorney or financial professional. Erika&rsquo;s duties as a real estate licensee are
        governed by her brokerage agreement and Florida law; nothing on this page overrides or is
        intended to override those obligations. Content pending legal review.
      </div>
    </Container>
  );
}

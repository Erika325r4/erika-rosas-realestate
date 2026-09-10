import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallTextButtons } from "@/components/shared/CallTextButtons";
import { homeBuyerFaqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Buyer Guide",
  description:
    "A practical guide to buying a home in Northeast Florida, from pre-approval to closing.",
  path: "/resources/buyer-guide",
});

const steps = [
  {
    title: "1. Get Pre-Approved",
    body: "Talk to a lender before touring homes seriously so you know a realistic budget and financing type (FHA, VA, USDA, or conventional).",
  },
  {
    title: "2. Build a Shortlist",
    body: "Narrow to two or three target neighborhoods based on commute, budget, and lifestyle rather than touring everything at once.",
  },
  {
    title: "3. Tour & Compare",
    body: "See homes in person and compare condition, updates, and price against recent comparable sales.",
  },
  {
    title: "4. Make an Offer",
    body: "Structure a competitive offer with the contingencies that make sense for your situation.",
  },
  {
    title: "5. Inspection & Appraisal",
    body: "Coordinate inspections and be ready to navigate any appraisal gap conversations.",
  },
  {
    title: "6. Close",
    body: "Track every deadline — title, insurance, final walkthrough — through to closing day.",
  },
];

export default function BuyerGuidePage() {
  return (
    <Container narrow>
      <Breadcrumbs
        items={[
          { name: "Resources", href: "/resources" },
          { name: "Buyer Guide", href: "/resources/buyer-guide" },
        ]}
      />
      <h1 className="text-4xl font-bold text-navy">Buyer Guide</h1>
      <p className="mt-4 text-charcoal/80">
        A practical, step-by-step look at buying a home in Northeast Florida.
      </p>
      <div className="mt-6">
        <CallTextButtons />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {steps.map((step) => (
          <div key={step.title}>
            <h2 className="text-lg font-semibold text-navy">{step.title}</h2>
            <p className="mt-1 text-sm text-charcoal/80">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-navy">FAQs</h2>
        <div className="flex flex-col gap-3">
          {homeBuyerFaqs.map((faq) => (
            <details key={faq.question} className="rounded-xl border border-navy/10 bg-white p-4">
              <summary className="cursor-pointer text-sm font-semibold text-navy">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-charcoal/80">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Container>
  );
}

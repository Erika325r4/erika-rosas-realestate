import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallTextButtons } from "@/components/shared/CallTextButtons";
import { homeSellerFaqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Seller Guide",
  description: "A practical guide to selling a home in Northeast Florida, from pricing to closing.",
  path: "/resources/seller-guide",
});

const steps = [
  {
    title: "1. Pricing Strategy",
    body: "A comparative market analysis based on recent, comparable sales in your specific neighborhood.",
  },
  {
    title: "2. Prepare the Property",
    body: "Documentation, small repairs, and presentation — the items with the biggest effect relative to their cost.",
  },
  {
    title: "3. Market",
    body: "Professional photography, MLS exposure, and promotion across major real estate websites and social channels.",
  },
  {
    title: "4. Show & Gather Feedback",
    body: "Coordinated showings, with buyer feedback reviewed to catch anything worth adjusting.",
  },
  {
    title: "5. Review Offers",
    body: "A clear walkthrough of each offer's terms and net proceeds, not just the headline price.",
  },
  {
    title: "6. Close",
    body: "Contract-to-closing support to keep inspection, appraisal, and title deadlines on track.",
  },
];

export default function SellerGuidePage() {
  return (
    <Container narrow>
      <Breadcrumbs
        items={[
          { name: "Resources", href: "/resources" },
          { name: "Seller Guide", href: "/resources/seller-guide" },
        ]}
      />
      <h1 className="text-4xl font-bold text-navy">Seller Guide</h1>
      <p className="mt-4 text-charcoal/80">
        A practical, step-by-step look at selling a home in Northeast Florida.
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

      <p className="mt-8 text-sm text-charcoal/70">
        No agent can guarantee a specific sale price, a specific time to sell, or multiple offers —
        market conditions and buyer behavior vary.
      </p>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-navy">FAQs</h2>
        <div className="flex flex-col gap-3">
          {homeSellerFaqs.map((faq) => (
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

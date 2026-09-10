import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallTextButtons } from "@/components/shared/CallTextButtons";
import { marketingPlanItems } from "@/components/home/MarketingPlan";
import { ValuationForm } from "@/components/forms/ValuationForm";
import { homeSellerFaqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Sell With Erika",
  description:
    "A personalized pricing strategy, preparation plan, and marketing plan for selling your Northeast Florida home.",
  path: "/sell",
});

const process = [
  {
    title: "Personal Pricing Strategy",
    description:
      "A comparative market analysis based on recent, comparable sales in your specific neighborhood — not citywide averages.",
  },
  {
    title: "Preparation Plan",
    description:
      "A short, practical list of what's worth doing (and what isn't) before your home goes live.",
  },
  {
    title: "Marketing Plan",
    description:
      "Professional photography, MLS exposure, major real estate website syndication, and social/email promotion.",
  },
  {
    title: "Showing Management",
    description:
      "Coordinated showings and buyer-feedback review so you know what's working and what needs adjusting.",
  },
  {
    title: "Offer Review",
    description:
      "A clear walkthrough of each offer's terms, contingencies, and net proceeds — not just the headline price.",
  },
  {
    title: "Closing Coordination",
    description:
      "Contract-to-closing support, keeping inspection, appraisal, and title deadlines on track.",
  },
];

export default function SellPage() {
  return (
    <Container>
      <Breadcrumbs items={[{ name: "Sell With Erika", href: "/sell" }]} />

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <div>
          <h1 className="text-4xl font-bold text-navy">Sell With Erika</h1>
          <p className="mt-4 max-w-prose text-charcoal/80">
            Selling a home, land, or manufactured home in Northeast Florida takes more than a sign
            in the yard. Here&rsquo;s the process Erika uses to price, prepare, market, and close
            your sale.
          </p>
          <div className="mt-6">
            <CallTextButtons />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {process.map((step) => (
              <div key={step.title} className="rounded-xl border border-navy/10 bg-white p-5">
                <h2 className="text-base font-semibold text-navy">{step.title}</h2>
                <p className="mt-1 text-sm text-charcoal/75">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="valuation" className="rounded-2xl border border-navy/10 bg-white p-6">
          <h2 className="text-lg font-semibold text-navy">Start With a Home Value Review</h2>
          <p className="mt-1 mb-4 text-sm text-charcoal/70">
            No instant automated estimate — Erika personally reviews your property and the local
            market.
          </p>
          <ValuationForm />
        </div>
      </div>

      <div className="mt-16">
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {marketingPlanItems.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-coastal" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <h2 className="mb-4 text-2xl font-bold text-navy">Seller FAQs</h2>
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

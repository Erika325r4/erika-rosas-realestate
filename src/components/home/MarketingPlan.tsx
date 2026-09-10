import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";

export const marketingPlanItems = [
  "Personalized pricing strategy",
  "Comparable-sales analysis",
  "Property preparation guidance",
  "Professional photography",
  "Drone photography when appropriate",
  "Virtual tour or floor-plan options",
  "MLS exposure",
  "Major real estate website exposure",
  "Social media marketing",
  "Email promotion",
  "Showing coordination",
  "Buyer-feedback review",
  "Offer analysis",
  "Contract-to-closing support",
];

export function MarketingPlan() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Selling With Erika"
          title="A Marketing Plan Built Around Your Property"
          description="Every listing gets a plan tailored to its price point, condition, and target buyer — not a one-size-fits-all checklist."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {marketingPlanItems.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-coastal" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-(--container-prose) text-sm text-charcoal/70">
          No agent can guarantee a specific sale price, a specific time to sell, multiple offers, or
          any other outcome — market conditions and buyer behavior vary. What Erika can guarantee is
          a clear plan and consistent communication throughout.
        </p>
        <div className="mt-6">
          <Button href="/sell" variant="secondary">
            See the Full Seller Process
          </Button>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Trees, Warehouse, Hammer, TrendingUp, Scale, Shield } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const services = [
  {
    title: "Land & Acreage",
    description: "Rural parcels, road access, well/septic feasibility, and boundary due diligence.",
    href: "/property-types/land-acreage",
    icon: Trees,
  },
  {
    title: "Manufactured Homes",
    description:
      "Title, foundation, and financing questions specific to manufactured and mobile homes.",
    href: "/property-types/manufactured-homes",
    icon: Warehouse,
  },
  {
    title: "New Construction",
    description: "Builder contracts, incentives, and outside-financing comparisons.",
    href: "/property-types/new-construction",
    icon: Hammer,
  },
  {
    title: "Investment Properties",
    description: "Single-family and multi-unit purchases for investor clients.",
    href: "/property-types/investment-properties",
    icon: TrendingUp,
  },
  {
    title: "Divorce Property Support",
    description: "Neutral, professional coordination for homeowners and family-law professionals.",
    href: "/resources/divorce-property-support",
    icon: Scale,
  },
  {
    title: "Military & VA Buyers",
    description:
      "VA transaction knowledge and relocation-timing coordination for military families.",
    href: "/resources/military-va",
    icon: Shield,
  },
];

export function SpecializedServices() {
  return (
    <section className="bg-sand/30 py-16">
      <Container>
        <SectionHeading
          eyebrow="Beyond a Standard Sale"
          title="Specialized Real Estate Services"
          description="Property types and situations that benefit from specific, hands-on experience."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="flex flex-col gap-2 rounded-xl border border-navy/10 bg-white p-5 transition-colors hover:border-gold"
              >
                <Icon className="h-5 w-5 text-coastal" aria-hidden="true" />
                <h3 className="text-base font-semibold text-navy">{service.title}</h3>
                <p className="text-sm text-charcoal/75">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

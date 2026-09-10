import Link from "next/link";
import { KeyRound, Tag, Truck, HeartHandshake, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const paths = [
  {
    title: "Buy a Home",
    description:
      "Find the right Northeast Florida home with financing, area, and process guidance from start to close.",
    href: "/search",
    icon: KeyRound,
  },
  {
    title: "Sell a Home",
    description:
      "Get a personalized pricing and marketing plan built around your property and timeline.",
    href: "/sell",
    icon: Tag,
  },
  {
    title: "Relocate",
    description:
      "Moving to Northeast Florida from out of state or overseas? Start with a shortlist built around your priorities.",
    href: "/resources/relocation",
    icon: Truck,
  },
  {
    title: "Specialized Property Help",
    description:
      "Land, manufactured homes, new construction, investment property, and divorce-related coordination.",
    href: "/property-types",
    icon: HeartHandshake,
  },
];

export function ClientPaths() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Where Would You Like to Start?" align="center" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <Link
                key={path.href}
                href={path.href}
                className="group flex flex-col gap-3 rounded-2xl border border-navy/10 bg-white p-6 transition-colors hover:border-gold hover:bg-sand/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-navy group-hover:bg-gold/20">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-navy">{path.title}</h3>
                <p className="text-sm text-charcoal/75">{path.description}</p>
                <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-coastal">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

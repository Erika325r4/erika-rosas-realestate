import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Tag,
  Shield,
  Truck,
  Scale,
  Newspaper,
  Languages,
  ArrowRight,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const resources = [
  {
    title: "Buyer Guide",
    href: "/resources/buyer-guide",
    icon: BookOpen,
    description: "What to expect from search to closing.",
  },
  {
    title: "Seller Guide",
    href: "/resources/seller-guide",
    icon: Tag,
    description: "Pricing, preparation, and marketing basics.",
  },
  {
    title: "Military and VA Buyers",
    href: "/resources/military-va",
    icon: Shield,
    description: "VA transaction and relocation-timing guidance.",
  },
  {
    title: "Relocation Guide",
    href: "/resources/relocation",
    icon: Truck,
    description: "Moving to Northeast Florida from out of state.",
  },
  {
    title: "Divorce Property Support",
    href: "/resources/divorce-property-support",
    icon: Scale,
    description: "Neutral, professional property coordination.",
  },
  {
    title: "Spanish Resources",
    href: "/resources/spanish",
    icon: Languages,
    description: "Recursos en español.",
  },
  {
    title: "Blog",
    href: "/blog",
    icon: Newspaper,
    description: "Guides and local market articles.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description:
    "Guides for Northeast Florida buyers, sellers, veterans, relocating families, and Spanish-speaking clients.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <Container>
      <Breadcrumbs items={[{ name: "Resources", href: "/resources" }]} />
      <h1 className="text-4xl font-bold text-navy">Resources</h1>
      <p className="mt-4 max-w-prose text-charcoal/80">
        Guides for every kind of Northeast Florida real estate situation.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <Link
              key={resource.href}
              href={resource.href}
              className="group flex flex-col gap-3 rounded-2xl border border-navy/10 bg-white p-6 hover:border-gold"
            >
              <Icon className="h-6 w-6 text-coastal" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-navy">{resource.title}</h2>
              <p className="text-sm text-charcoal/75">{resource.description}</p>
              <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-coastal">
                Read more
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
  );
}

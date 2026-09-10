import type { Metadata } from "next";
import Link from "next/link";
import { Trees, Warehouse, Hammer, TrendingUp, Home, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const types = [
  {
    title: "Homes",
    href: "/property-types/homes",
    icon: Home,
    description: "Single-family homes across Northeast Florida.",
  },
  {
    title: "Land and Acreage",
    href: "/property-types/land-acreage",
    icon: Trees,
    description: "Rural parcels, acreage, and unimproved land.",
  },
  {
    title: "Manufactured Homes",
    href: "/property-types/manufactured-homes",
    icon: Warehouse,
    description: "Manufactured and mobile homes, with or without land.",
  },
  {
    title: "New Construction",
    href: "/property-types/new-construction",
    icon: Hammer,
    description: "Builder communities and new-build homes.",
  },
  {
    title: "Investment Properties",
    href: "/property-types/investment-properties",
    icon: TrendingUp,
    description: "Single-family and multi-unit investment purchases.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Property Types",
  description:
    "Homes, land and acreage, manufactured homes, new construction, and investment properties across Northeast Florida.",
  path: "/property-types",
});

export default function PropertyTypesPage() {
  return (
    <Container>
      <Breadcrumbs items={[{ name: "Property Types", href: "/property-types" }]} />
      <h1 className="text-4xl font-bold text-navy">Property Types</h1>
      <p className="mt-4 max-w-prose text-charcoal/80">
        Every property type comes with its own questions. Pick the one closest to what you&rsquo;re
        looking for.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {types.map((type) => {
          const Icon = type.icon;
          return (
            <Link
              key={type.href}
              href={type.href}
              className="group flex flex-col gap-3 rounded-2xl border border-navy/10 bg-white p-6 hover:border-gold"
            >
              <Icon className="h-6 w-6 text-coastal" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-navy">{type.title}</h2>
              <p className="text-sm text-charcoal/75">{type.description}</p>
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
  );
}

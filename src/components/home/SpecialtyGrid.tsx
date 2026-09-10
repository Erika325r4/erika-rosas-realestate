import Link from "next/link";
import {
  Home,
  Tag,
  Calculator,
  Shield,
  Truck,
  Trees,
  Warehouse,
  Hammer,
  TrendingUp,
  Scale,
  Languages,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const specialties = [
  { label: "Home Buyers", href: "/search", icon: Home },
  { label: "Home Sellers", href: "/sell", icon: Tag },
  { label: "Home Valuations", href: "/home-value", icon: Calculator },
  { label: "Veterans & Military Families", href: "/resources/military-va", icon: Shield },
  { label: "Relocation Clients", href: "/resources/relocation", icon: Truck },
  { label: "Land & Acreage", href: "/property-types/land-acreage", icon: Trees },
  { label: "Manufactured Homes", href: "/property-types/manufactured-homes", icon: Warehouse },
  { label: "New Construction", href: "/property-types/new-construction", icon: Hammer },
  {
    label: "Investment Properties",
    href: "/property-types/investment-properties",
    icon: TrendingUp,
  },
  {
    label: "Divorce-Related Property Coordination",
    href: "/resources/divorce-property-support",
    icon: Scale,
  },
  { label: "English & Spanish Assistance", href: "/resources/spanish", icon: Languages },
];

export function SpecialtyGrid() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Who Erika Works With"
          title="Clients and Specialties"
          description="Two decades of experience across the situations Northeast Florida buyers and sellers actually run into."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="tap-target flex items-center gap-3 rounded-xl border border-navy/10 px-4 py-3 text-sm font-medium text-charcoal transition-colors hover:border-gold hover:bg-sand/30"
                >
                  <Icon className="h-4 w-4 shrink-0 text-coastal" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

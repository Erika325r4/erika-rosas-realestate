import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { areas } from "@/content/areas";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { AreaGrid } from "@/components/areas/AreaGrid";

export const metadata: Metadata = buildMetadata({
  title: "Areas Served",
  description:
    "Erika Rosas serves Jacksonville, Lake City, Live Oak, Branford, Fort White, Macclenny, Hilliard, Fernandina Beach, St. Augustine, Palatka, and surrounding Northeast Florida communities.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <Container>
      <Breadcrumbs items={[{ name: "Areas Served", href: "/areas" }]} />
      <h1 className="text-4xl font-bold text-navy">Areas Served</h1>
      <p className="mt-4 max-w-prose text-charcoal/80">
        Coverage across Northeast Florida — select an area to learn more about the local market.
      </p>
      <div className="mt-8">
        <AreaGrid areas={areas} />
      </div>
    </Container>
  );
}

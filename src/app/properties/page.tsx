import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { propertyProvider } from "@/lib/property-provider";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { PropertyDisclaimer } from "@/components/properties/PropertyDisclaimer";

export const metadata: Metadata = buildMetadata({
  title: "All Listings",
  description:
    "Browse all current demonstration listings across Northeast Florida — homes, land, and manufactured homes.",
  path: "/properties",
});

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const all = await propertyProvider.getProperties();
  const filtered = status ? all.filter((property) => property.status === status) : all;

  return (
    <Container>
      <Breadcrumbs items={[{ name: "Listings", href: "/properties" }]} />
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">
        {status === "sold" ? "Recently Sold Listings" : "All Listings"}
      </h1>
      <div className="mt-4 mb-6">
        <PropertyDisclaimer />
      </div>
      <PropertyGrid properties={filtered} />
    </Container>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { buildMetadata } from "@/lib/metadata";
import { propertyProvider } from "@/lib/property-provider";
import type { PropertyFilters as PropertyFiltersType, PropertyType } from "@/types/property";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { PropertyDisclaimer } from "@/components/properties/PropertyDisclaimer";
import { PropertyAlertForm } from "@/components/forms/PropertyAlertForm";

export const metadata: Metadata = buildMetadata({
  title: "Search Northeast Florida Homes",
  description:
    "Search homes, land, manufactured homes, and new construction across Jacksonville, Lake City, St. Augustine, and Northeast Florida.",
  path: "/search",
});

const validPropertyTypes: PropertyType[] = [
  "home",
  "land",
  "manufactured",
  "new-construction",
  "investment",
];

function toNumber(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

async function SearchResults({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const get = (key: string) => {
    const value = searchParams[key];
    return Array.isArray(value) ? value[0] : value;
  };

  const propertyTypeParam = get("propertyType");
  const filters: PropertyFiltersType = {
    city: get("city"),
    minPrice: toNumber(get("minPrice")),
    maxPrice: toNumber(get("maxPrice")),
    bedrooms: toNumber(get("bedrooms")),
    bathrooms: toNumber(get("bathrooms")),
    propertyType: validPropertyTypes.includes(propertyTypeParam as PropertyType)
      ? (propertyTypeParam as PropertyType)
      : undefined,
    minAcreage: toNumber(get("minAcreage")),
    manufacturedHome: get("manufacturedHome") === "true",
    newConstruction: get("newConstruction") === "true",
    waterfront: get("waterfront") === "true",
    noHoa: get("noHoa") === "true",
  };

  const results = await propertyProvider.getProperties(filters);

  return (
    <>
      <p className="mb-4 text-sm font-medium text-charcoal/70">
        {results.length} demonstration listings found
      </p>
      <PropertyGrid properties={results} />
    </>
  );
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <Container>
      <Breadcrumbs items={[{ name: "Search Homes", href: "/search" }]} />
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">Search Northeast Florida Homes</h1>
      <div className="mt-4">
        <PropertyDisclaimer />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
        <aside className="flex flex-col gap-6">
          <Suspense fallback={<p className="text-sm text-charcoal/60">Loading filters...</p>}>
            <PropertyFilters />
          </Suspense>
          <PropertyAlertForm />
        </aside>
        <div>
          <Suspense fallback={<p className="text-sm text-charcoal/60">Loading listings...</p>}>
            <SearchResults searchParams={resolvedSearchParams} />
          </Suspense>
        </div>
      </div>
    </Container>
  );
}

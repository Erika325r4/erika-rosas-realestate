import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { PropertyDisclaimer } from "@/components/properties/PropertyDisclaimer";
import { propertyProvider } from "@/lib/property-provider";

export async function FeaturedProperties() {
  const featured = await propertyProvider.getFeaturedProperties();

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured Listings"
            title="Homes, Land, and Manufactured Homes"
            description="A sample of what's available. Ask Erika about current inventory in your target area."
          />
          <Button href="/properties" variant="outline">
            View All Listings
          </Button>
        </div>
        <div className="mt-8 mb-6">
          <PropertyDisclaimer />
        </div>
        <PropertyGrid properties={featured} />
        <p className="mt-6 text-center text-sm text-charcoal/70">
          Looking for recently sold homes?{" "}
          <Link
            href="/properties?status=sold"
            className="font-semibold text-coastal hover:underline"
          >
            See recently sold demonstration listings
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}

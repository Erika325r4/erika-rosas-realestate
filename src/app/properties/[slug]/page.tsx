import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { propertyProvider } from "@/lib/property-provider";
import { properties } from "@/content/properties";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PropertyGallery } from "@/components/properties/PropertyGallery";
import { PropertyFacts } from "@/components/properties/PropertyFacts";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { PropertyDisclaimer } from "@/components/properties/PropertyDisclaimer";
import { Button } from "@/components/shared/Button";
import { CallTextButtons } from "@/components/shared/CallTextButtons";

type Params = { slug: string };

export async function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const property = await propertyProvider.getPropertyBySlug(slug);
  if (!property)
    return buildMetadata({
      title: "Listing Not Found",
      description: "This listing could not be found.",
      path: `/properties/${slug}`,
      noIndex: true,
    });

  return buildMetadata({
    title: `${property.address}, ${property.city}, ${property.state}`,
    description: property.description,
    path: `/properties/${property.slug}`,
  });
}

export default async function PropertyDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const property = await propertyProvider.getPropertyBySlug(slug);
  if (!property) notFound();

  const similar = await propertyProvider.getSimilarProperties(property);

  return (
    <Container>
      <Breadcrumbs
        items={[
          { name: "Listings", href: "/properties" },
          { name: `${property.address}, ${property.city}`, href: `/properties/${property.slug}` },
        ]}
      />
      <div className="mb-4">
        <PropertyDisclaimer />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <PropertyGallery property={property} />
          <h1 className="mt-6 text-3xl font-bold text-navy">
            {property.address}, {property.city}, {property.state} {property.zipCode}
          </h1>
          <div className="mt-4">
            <PropertyFacts property={property} />
          </div>
          <p className="mt-6 max-w-(--container-prose) text-charcoal/80">{property.description}</p>
          {property.listingAttribution ? (
            <p className="mt-4 text-xs text-charcoal/50">{property.listingAttribution}</p>
          ) : null}
        </div>

        <aside className="flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6">
          <h2 className="text-lg font-semibold text-navy">Interested in this property?</h2>
          <Button href="/contact" variant="primary">
            Ask a Question
          </Button>
          <CallTextButtons />
        </aside>
      </div>

      {similar.length > 0 ? (
        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-bold text-navy">Similar Properties</h2>
          <PropertyGrid properties={similar} />
        </div>
      ) : null}
    </Container>
  );
}

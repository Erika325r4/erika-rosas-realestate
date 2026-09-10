import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { getAreaBySlug, areas } from "@/content/areas";
import { propertyProvider } from "@/lib/property-provider";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { AreaHero } from "@/components/areas/AreaHero";
import { AreaFAQ } from "@/components/areas/AreaFAQ";
import { AreaGrid } from "@/components/areas/AreaGrid";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { PropertyDisclaimer } from "@/components/properties/PropertyDisclaimer";
import { ContactForm } from "@/components/forms/ContactForm";

type Params = { slug: string };

export async function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area)
    return buildMetadata({
      title: "Area Not Found",
      description: "This area could not be found.",
      path: `/areas/${slug}`,
      noIndex: true,
    });
  return buildMetadata({
    title: area.seoTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const [properties, nearbyAreas] = await Promise.all([
    propertyProvider.getPropertiesByArea(area.name),
    Promise.resolve(areas.filter((candidate) => area.nearbyAreaSlugs.includes(candidate.slug))),
  ]);

  return (
    <>
      <AreaHero area={area} />
      <Container>
        <Breadcrumbs
          items={[
            { name: "Areas Served", href: "/areas" },
            { name: area.name, href: `/areas/${area.slug}` },
          ]}
        />

        <p className="max-w-prose text-charcoal/80">{area.lifestyle}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-bold text-navy">Common Property Types</h2>
            <ul className="flex flex-wrap gap-2">
              {area.commonPropertyTypes.map((type) => (
                <li
                  key={type}
                  className="rounded-full bg-sand/60 px-3 py-1 text-xs font-medium text-navy"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="mb-3 text-xl font-bold text-navy">Buyer Considerations</h2>
              <ul className="flex flex-col gap-2">
                {area.buyerConsiderations.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-coastal"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-bold text-navy">Seller Considerations</h2>
              <ul className="flex flex-col gap-2">
                {area.sellerConsiderations.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-coastal"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-bold text-navy">Available Properties in {area.name}</h2>
          <div className="mb-4">
            <PropertyDisclaimer />
          </div>
          <PropertyGrid
            properties={properties}
            emptyMessage={`No demonstration listings in ${area.name} right now — contact Erika for current availability.`}
          />
        </div>

        {area.faqs.length > 0 ? (
          <div className="mt-14">
            <h2 className="mb-4 text-2xl font-bold text-navy">{area.name} FAQs</h2>
            <AreaFAQ faqs={area.faqs} />
          </div>
        ) : null}

        {nearbyAreas.length > 0 ? (
          <div className="mt-14">
            <h2 className="mb-4 text-2xl font-bold text-navy">Nearby Areas</h2>
            <AreaGrid areas={nearbyAreas} />
          </div>
        ) : null}

        <div className="mt-14 mb-14 rounded-2xl border border-navy/10 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-navy">Ask About {area.name}</h2>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}

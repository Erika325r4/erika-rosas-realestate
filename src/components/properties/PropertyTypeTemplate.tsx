import { CheckCircle2 } from "lucide-react";
import type { PropertyType } from "@/types/property";
import { propertyProvider } from "@/lib/property-provider";
import { areas } from "@/content/areas";
import type { Faq } from "@/content/faqs";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallTextButtons } from "@/components/shared/CallTextButtons";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { PropertyDisclaimer } from "@/components/properties/PropertyDisclaimer";
import { AreaGrid } from "@/components/areas/AreaGrid";
import { ContactForm } from "@/components/forms/ContactForm";

export interface PropertyTypeTemplateProps {
  title: string;
  breadcrumbLabel: string;
  slug: string;
  intro: string;
  concerns: string[];
  experience: string;
  process: { title: string; description: string }[];
  faqs: Faq[];
  propertyType: PropertyType;
  relatedAreaSlugs: string[];
  placeholderVariant?: "home" | "land" | "manufactured";
}

export async function PropertyTypeTemplate({
  title,
  breadcrumbLabel,
  slug,
  intro,
  concerns,
  experience,
  process,
  faqs,
  propertyType,
  relatedAreaSlugs,
  placeholderVariant = "home",
}: PropertyTypeTemplateProps) {
  const relevantProperties = await propertyProvider.getProperties({ propertyType });
  const relatedAreas = areas.filter((area) => relatedAreaSlugs.includes(area.slug));

  return (
    <Container>
      <Breadcrumbs
        items={[
          { name: "Property Types", href: "/property-types" },
          { name: breadcrumbLabel, href: `/property-types/${slug}` },
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl font-bold text-navy">{title}</h1>
          <p className="mt-4 max-w-prose text-charcoal/80">{intro}</p>
          <div className="mt-6">
            <CallTextButtons />
          </div>
        </div>
        <PlaceholderImage
          variant={placeholderVariant}
          label={`${title} placeholder illustration`}
          aspect="aspect-[5/4]"
        />
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-navy">Common Questions Buyers Ask</h2>
          <ul className="flex flex-col gap-3">
            {concerns.map((concern) => (
              <li key={concern} className="flex items-start gap-2 text-sm text-charcoal">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-coastal" aria-hidden="true" />
                {concern}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold text-navy">Erika&rsquo;s Experience Here</h2>
          <p className="text-sm text-charcoal/80">{experience}</p>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="mb-4 text-2xl font-bold text-navy">Process</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step) => (
            <div key={step.title} className="rounded-xl border border-navy/10 bg-white p-5">
              <h3 className="text-base font-semibold text-navy">{step.title}</h3>
              <p className="mt-1 text-sm text-charcoal/75">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-navy">Relevant Listings</h2>
        </div>
        <div className="mt-4 mb-4">
          <PropertyDisclaimer />
        </div>
        <PropertyGrid
          properties={relevantProperties}
          emptyMessage="No demonstration listings of this type right now — contact Erika for current availability."
        />
      </div>

      {relatedAreas.length > 0 ? (
        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-bold text-navy">Related Areas</h2>
          <AreaGrid areas={relatedAreas} />
        </div>
      ) : null}

      {faqs.length > 0 ? (
        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-bold text-navy">FAQs</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-navy/10 bg-white p-4">
                <summary className="cursor-pointer text-sm font-semibold text-navy">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm text-charcoal/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-14 mb-14 rounded-2xl border border-navy/10 bg-white p-6">
        <h2 className="mb-4 text-2xl font-bold text-navy">Ask a Question</h2>
        <ContactForm />
      </div>
    </Container>
  );
}

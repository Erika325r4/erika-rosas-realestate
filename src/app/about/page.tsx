import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { about, trustStatements, specialties } from "@/content/site";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { CallTextButtons } from "@/components/shared/CallTextButtons";
import { JsonLd } from "@/components/shared/JsonLd";
import { personSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "About Erika Rosas",
  description:
    "Meet Erika Rosas, a Northeast Florida Realtor with over 20 years of real estate, mortgage, and construction experience.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container>
      <JsonLd data={personSchema()} />
      <Breadcrumbs items={[{ name: "About Erika", href: "/about" }]} />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <PlaceholderImage
          variant="portrait"
          label="Professional headshot of Erika Rosas — approved photo pending"
          aspect="aspect-[4/5]"
        />
        <div>
          <p className="text-sm font-semibold tracking-wide text-coastal uppercase">
            {about.supportingLine}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-navy">{about.headline}</h1>
          <div className="mt-4 flex flex-col gap-3 text-charcoal/80">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6">
            <CallTextButtons />
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-navy">Credentials</h2>
          <ul className="flex flex-col gap-3">
            {trustStatements.map((statement) => (
              <li key={statement} className="flex items-start gap-2 text-sm text-charcoal">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-coastal" aria-hidden="true" />
                {statement}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold text-navy">Who Erika Works With</h2>
          <ul className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <li
                key={specialty}
                className="rounded-full bg-sand/60 px-3 py-1 text-xs font-medium text-navy"
              >
                {specialty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

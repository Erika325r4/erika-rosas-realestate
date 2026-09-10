import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { site, serviceAreas } from "@/content/site";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Erika",
  description:
    "Get in touch with Erika Rosas about buying, selling, or any Northeast Florida real estate question.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h1 className="text-4xl font-bold text-navy">Contact Erika</h1>
          <p className="mt-4 text-charcoal/80">
            Buying, selling, relocating, or just have a question about Northeast Florida real estate
            — reach out any way that works for you.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm">
            <a
              href={site.telHref}
              className="tap-target flex items-center gap-2 font-medium text-navy hover:text-coastal"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="tap-target flex items-center gap-2 font-medium text-navy hover:text-coastal"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
            </a>
            <p className="flex items-start gap-2 text-charcoal/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Serving {serviceAreas.join(", ")}, and surrounding Northeast Florida communities.
            </p>
          </div>
          <p className="mt-6 text-xs text-charcoal/50">{site.license}</p>
        </div>

        <div className="rounded-2xl border border-navy/10 bg-white p-6">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}

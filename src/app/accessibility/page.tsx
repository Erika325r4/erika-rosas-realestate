import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description: "Accessibility statement for Erika Rosas's Northeast Florida real estate website.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <Container narrow>
      <Breadcrumbs items={[{ name: "Accessibility Statement", href: "/accessibility" }]} />
      <h1 className="text-4xl font-bold text-navy">Accessibility Statement</h1>

      <div className="mt-8 flex flex-col gap-6 text-sm text-charcoal/85">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">Our Commitment</h2>
          <p>
            This site is built with accessibility in mind, including semantic landmarks, keyboard
            navigation, visible focus states, accessible forms, descriptive image alt text, and
            support for reduced-motion preferences.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">Ongoing Work</h2>
          <p>
            Accessibility is an ongoing effort. If you encounter a barrier using this site, please
            let us know so we can address it.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-navy">Contact</h2>
          <p>
            Report an accessibility issue by phone at {site.phoneDisplay} or by email at{" "}
            {site.email}.
          </p>
        </section>
      </div>
    </Container>
  );
}

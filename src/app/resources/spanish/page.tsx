import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallTextButtons } from "@/components/shared/CallTextButtons";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Recursos en Español",
  description:
    "Erika Rosas ofrece servicios de bienes raíces en español para compradores y vendedores en el noreste de Florida.",
  path: "/resources/spanish",
});

export default function SpanishResourcesPage() {
  return (
    <Container narrow>
      <Breadcrumbs
        items={[
          { name: "Resources", href: "/resources" },
          { name: "Spanish Resources", href: "/resources/spanish" },
        ]}
      />
      <h1 className="text-4xl font-bold text-navy">Recursos en Español</h1>
      <p className="mt-4 text-charcoal/80">
        Erika habla español y ofrece ayuda directa a compradores y vendedores en el noreste de
        Florida, desde la primera pregunta hasta el cierre.
      </p>
      <div className="mt-6">
        <CallTextButtons />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold text-navy">Para Compradores</h2>
          <p className="mt-1 text-sm text-charcoal/80">
            Ayuda para entender el proceso de compra, opciones de financiamiento (FHA, VA, USDA, y
            convencional), y qué esperar en cada paso.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-navy">Para Vendedores</h2>
          <p className="mt-1 text-sm text-charcoal/80">
            Una estrategia de precio personalizada y un plan de mercadeo claro, explicado en español
            de principio a fin.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-navy">Financiamiento</h2>
          <p className="mt-1 text-sm text-charcoal/80">
            Conocimiento de préstamos FHA, VA, USDA, y convencionales, explicado en términos claros.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-navy/10 bg-white p-6">
        <h2 className="mb-1 text-lg font-semibold text-navy">Contacto</h2>
        <p className="mb-4 text-xs text-charcoal/60">
          EDITOR REVIEW REQUIRED: this page&rsquo;s Spanish copy and the form below (currently in
          English) should be reviewed by a fluent Spanish speaker before launch — see
          docs/CONTENT-NEEDED.md.
        </p>
        <ContactForm />
      </div>
    </Container>
  );
}

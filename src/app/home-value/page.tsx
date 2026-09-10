import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ValuationForm } from "@/components/forms/ValuationForm";
import { CallTextButtons } from "@/components/shared/CallTextButtons";

export const metadata: Metadata = buildMetadata({
  title: "What Is My Home Worth?",
  description: "Request a personal home value review from Erika Rosas — not an automated estimate.",
  path: "/home-value",
});

export default function HomeValuePage() {
  return (
    <Container narrow>
      <Breadcrumbs items={[{ name: "Home Value", href: "/home-value" }]} />
      <h1 className="text-4xl font-bold text-navy">
        What Could Your Northeast Florida Home Sell For?
      </h1>
      <p className="mt-4 text-charcoal/80">
        Online estimates can miss updates, land, condition, and local details. Erika will personally
        review your property and the nearby market and follow up with a real conversation — not an
        algorithm.
      </p>
      <div className="mt-6">
        <CallTextButtons />
      </div>
      <div className="mt-10 rounded-2xl border border-navy/10 bg-white p-6">
        <ValuationForm />
      </div>
    </Container>
  );
}

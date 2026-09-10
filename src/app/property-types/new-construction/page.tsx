import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PropertyTypeTemplate } from "@/components/properties/PropertyTypeTemplate";
import { newConstructionFaqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "New Construction",
  description: "New construction homes and builder communities across Northeast Florida.",
  path: "/property-types/new-construction",
});

export default function NewConstructionPage() {
  return (
    <PropertyTypeTemplate
      title="New Construction"
      breadcrumbLabel="New Construction"
      slug="new-construction"
      propertyType="new-construction"
      placeholderVariant="home"
      intro="New construction communities are active across parts of Northeast Florida, particularly around Jacksonville, St. Augustine, and Macclenny."
      concerns={[
        "Should I use the builder's preferred lender, or shop outside financing?",
        "What does the builder warranty actually cover?",
        "Are HOA fees and future phases of the community already finalized?",
      ]}
      experience="Erika helps buyers compare builder incentives against outside financing and walks through what a builder contract does — and doesn't — guarantee."
      process={[
        {
          title: "Compare Communities",
          description: "Shortlist builder communities that fit your budget and area preference.",
        },
        {
          title: "Financing Comparison",
          description: "Compare the builder's preferred lender against outside financing.",
        },
        {
          title: "Contract Review",
          description: "Walk through the builder contract, warranty, and any HOA documents.",
        },
        {
          title: "Walkthrough & Close",
          description: "Final walkthrough before closing, with any punch-list items documented.",
        },
      ]}
      faqs={newConstructionFaqs}
      relatedAreaSlugs={["jacksonville", "macclenny", "st-augustine"]}
    />
  );
}

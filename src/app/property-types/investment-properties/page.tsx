import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PropertyTypeTemplate } from "@/components/properties/PropertyTypeTemplate";
import { investmentPropertyFaqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Investment Properties",
  description:
    "Single-family and multi-unit investment property purchases across Northeast Florida.",
  path: "/property-types/investment-properties",
});

export default function InvestmentPropertiesPage() {
  return (
    <PropertyTypeTemplate
      title="Investment Properties"
      breadcrumbLabel="Investment Properties"
      slug="investment-properties"
      propertyType="investment"
      placeholderVariant="home"
      intro="Single-family and multi-unit properties for investor clients across Northeast Florida."
      concerns={[
        "What is the current rent roll and lease status, if occupied?",
        "What financing is available for a non-owner-occupied purchase?",
        "What condition items should factor into an offer price?",
      ]}
      experience="Investment property purchases, including multi-unit properties, are a regular part of Erika's work — including coordinating inspections around existing tenants."
      process={[
        {
          title: "Define Criteria",
          description: "Clarify target property type, area, and return expectations.",
        },
        {
          title: "Underwrite",
          description: "Review rent roll, expenses, and condition to evaluate an offer price.",
        },
        {
          title: "Offer & Inspect",
          description: "Structure an offer and coordinate inspections, including occupied units.",
        },
        { title: "Close", description: "Finalize financing and close on the property." },
      ]}
      faqs={investmentPropertyFaqs}
      relatedAreaSlugs={["jacksonville"]}
    />
  );
}

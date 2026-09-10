import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PropertyTypeTemplate } from "@/components/properties/PropertyTypeTemplate";
import { landAcreageFaqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Land and Acreage",
  description:
    "Land and acreage for sale across Branford, Live Oak, Fort White, and rural Northeast Florida.",
  path: "/property-types/land-acreage",
});

export default function LandAcreagePage() {
  return (
    <PropertyTypeTemplate
      title="Land and Acreage"
      breadcrumbLabel="Land and Acreage"
      slug="land-acreage"
      propertyType="land"
      placeholderVariant="land"
      intro="Rural parcels, acreage, and unimproved land across Northeast Florida's more rural communities — Branford, Live Oak, Fort White, and beyond."
      concerns={[
        "Does the parcel have legal road access and any easements?",
        "Is the site suitable for a well and septic system?",
        "What is the flood zone status, and are there any zoning restrictions on use?",
      ]}
      experience="Land and acreage transactions come with their own due-diligence checklist. Erika helps buyers work through access, utility feasibility, and documentation before they're deep into a contract."
      process={[
        {
          title: "Define Use",
          description: "Clarify intended use — residential, agricultural, recreational — up front.",
        },
        {
          title: "Due Diligence",
          description: "Confirm access, easements, well/septic feasibility, and flood zone status.",
        },
        {
          title: "Offer & Survey",
          description: "Structure an offer and order a survey if boundaries need confirming.",
        },
        { title: "Close", description: "Finalize title work and close on the parcel." },
      ]}
      faqs={landAcreageFaqs}
      relatedAreaSlugs={["branford", "live-oak", "fort-white"]}
    />
  );
}

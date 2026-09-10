import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PropertyTypeTemplate } from "@/components/properties/PropertyTypeTemplate";
import { manufacturedHomeFaqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Manufactured Homes",
  description: "Manufactured and mobile homes, with or without land, across Northeast Florida.",
  path: "/property-types/manufactured-homes",
});

export default function ManufacturedHomesPage() {
  return (
    <PropertyTypeTemplate
      title="Manufactured Homes"
      breadcrumbLabel="Manufactured Homes"
      slug="manufactured-homes"
      propertyType="manufactured"
      placeholderVariant="manufactured"
      intro="Manufactured and mobile homes, on their own lot or with acreage, are common across Hilliard, Branford, Live Oak, and other rural Northeast Florida communities."
      concerns={[
        "Has the home's title been retired to real property?",
        "Is the home financeable with FHA, VA, or conventional loans given its age and foundation?",
        "Does the site have well and septic systems, and are they in working order?",
      ]}
      experience="Erika has worked manufactured-home sales from both the lending side and the sales side, which helps catch title and foundation-certification issues early rather than at the closing table."
      process={[
        {
          title: "Confirm Title Status",
          description: "Determine whether the home's title has been retired to real property.",
        },
        {
          title: "Financing Check",
          description: "Confirm financing eligibility based on the home's age and foundation.",
        },
        {
          title: "Inspections",
          description:
            "Coordinate foundation/engineering certification, well, and septic inspections.",
        },
        { title: "Close", description: "Finalize financing and title work through closing." },
      ]}
      faqs={manufacturedHomeFaqs}
      relatedAreaSlugs={["hilliard", "branford", "live-oak"]}
    />
  );
}

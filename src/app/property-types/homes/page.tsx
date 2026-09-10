import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PropertyTypeTemplate } from "@/components/properties/PropertyTypeTemplate";
import { homeBuyerFaqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Homes for Sale",
  description:
    "Single-family homes for sale across Jacksonville, Lake City, St. Augustine, and Northeast Florida.",
  path: "/property-types/homes",
});

export default function HomesPage() {
  return (
    <PropertyTypeTemplate
      title="Homes"
      breadcrumbLabel="Homes"
      slug="homes"
      propertyType="home"
      placeholderVariant="home"
      intro="Single-family homes across Northeast Florida — in-town neighborhoods, suburban subdivisions, and everything in between."
      concerns={[
        "How does the home compare to recent, similar sales nearby?",
        "What financing options fit my situation — FHA, VA, USDA, or conventional?",
        "What should I expect from inspection and appraisal timelines?",
      ]}
      experience="Erika's background spans mortgage consulting and loan processing as well as sales, which helps buyers and sellers understand financing timelines and requirements before they become a surprise mid-contract."
      process={[
        {
          title: "Get Pre-Approved",
          description: "Understand your realistic budget before touring homes seriously.",
        },
        {
          title: "Tour & Compare",
          description: "See homes in person and compare them against recent comparable sales.",
        },
        {
          title: "Offer & Negotiate",
          description: "Structure a competitive offer and negotiate terms, not just price.",
        },
        {
          title: "Inspection & Appraisal",
          description: "Coordinate inspections and manage any appraisal gap conversations.",
        },
        { title: "Close", description: "Track every deadline through to closing day." },
      ]}
      faqs={homeBuyerFaqs}
      relatedAreaSlugs={["jacksonville", "lake-city", "st-augustine"]}
    />
  );
}

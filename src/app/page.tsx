import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { PropertySearchBar } from "@/components/home/PropertySearchBar";
import { ClientPaths } from "@/components/home/ClientPaths";
import { SpecialtyGrid } from "@/components/home/SpecialtyGrid";
import { TrustBar } from "@/components/home/TrustBar";
import { AboutErika } from "@/components/home/AboutErika";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { MarketingPlan } from "@/components/home/MarketingPlan";
import { HomeValuationCTA } from "@/components/home/HomeValuationCTA";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { SpecializedServices } from "@/components/home/SpecializedServices";
import { RecentArticles } from "@/components/home/RecentArticles";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Northeast Florida Real Estate Agent",
  description:
    "Erika Rosas helps buyers, sellers, veterans, investors, and relocating families throughout Northeast Florida — Jacksonville, Lake City, St. Augustine, and beyond.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropertySearchBar />
      <ClientPaths />
      <SpecialtyGrid />
      <TrustBar />
      <AboutErika />
      <FeaturedProperties />
      <MarketingPlan />
      <HomeValuationCTA />
      <Testimonials />
      <ServiceAreas />
      <SpecializedServices />
      <RecentArticles />
      <FinalCTA />
    </>
  );
}

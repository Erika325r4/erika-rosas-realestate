import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { areas } from "@/content/areas";
import { articles } from "@/content/articles";
import { properties } from "@/content/properties";

const staticRoutes = [
  "/",
  "/search",
  "/sell",
  "/home-value",
  "/about",
  "/contact",
  "/properties",
  "/property-types",
  "/property-types/homes",
  "/property-types/land-acreage",
  "/property-types/manufactured-homes",
  "/property-types/new-construction",
  "/property-types/investment-properties",
  "/areas",
  "/resources",
  "/resources/buyer-guide",
  "/resources/seller-guide",
  "/resources/military-va",
  "/resources/relocation",
  "/resources/divorce-property-support",
  "/resources/spanish",
  "/blog",
  "/privacy",
  "/terms",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: new URL(path, site.siteUrl).toString(),
    lastModified: now,
  }));

  const areaEntries: MetadataRoute.Sitemap = areas.map((area) => ({
    url: new URL(`/areas/${area.slug}`, site.siteUrl).toString(),
    lastModified: now,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: new URL(`/blog/${article.slug}`, site.siteUrl).toString(),
    lastModified: new Date(article.updatedDate ?? article.publishedDate),
  }));

  const propertyEntries: MetadataRoute.Sitemap = properties.map((property) => ({
    url: new URL(`/properties/${property.slug}`, site.siteUrl).toString(),
    lastModified: now,
  }));

  return [...staticEntries, ...areaEntries, ...articleEntries, ...propertyEntries];
}

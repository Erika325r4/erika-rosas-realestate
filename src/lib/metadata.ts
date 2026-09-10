import type { Metadata } from "next";
import { site } from "@/content/site";

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
}

/**
 * Builds a consistent Metadata object for a public page: title, unique
 * description, canonical URL, Open Graph data, and a Twitter card.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = "/images/branding/og-default.jpg",
  imageAlt = `${site.name} — ${site.role}`,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = new URL(path, site.siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function canonicalUrl(path: string): string {
  return new URL(path, site.siteUrl).toString();
}

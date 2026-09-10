import { site } from "@/content/site";
import type { Article } from "@/types/article";
import type { AreaFAQ } from "@/types/area";

/**
 * JSON-LD builders. Each returns a plain object ready to JSON.stringify
 * into a <script type="application/ld+json"> tag via
 * components/shared/JsonLd.tsx. Only call the ones that apply to a given
 * page — never emit schema for data you don't actually have (e.g. no
 * review aggregate schema without real, eligible reviews).
 */

export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.name,
    description: site.role,
    telephone: site.phoneDisplay,
    email: site.email,
    url: site.siteUrl,
    areaServed: "Northeast Florida",
    knowsLanguage: [...site.languages],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    telephone: site.phoneDisplay,
    email: site.email,
    url: site.siteUrl,
    areaServed: "Northeast Florida",
    priceRange: "$$",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    telephone: site.phoneDisplay,
    email: site.email,
    url: site.siteUrl,
    knowsLanguage: [...site.languages],
  };
}

export function breadcrumbListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(article: Article, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate ?? article.publishedDate,
    author: { "@type": "Person", name: article.author },
    image: new URL(article.image, site.siteUrl).toString(),
    mainEntityOfPage: url,
  };
}

export function faqPageSchema(faqs: AreaFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

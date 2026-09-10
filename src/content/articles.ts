import type { Article } from "@/types/article";

/**
 * DRAFT ARTICLES — every claim not directly attributable to Erika's own
 * documented experience is marked EDITOR REVIEW REQUIRED inline. Do not
 * publish without a human review pass. See docs/CONTENT-NEEDED.md.
 */
export const articles: Article[] = [
  {
    title: "Moving to Northeast Florida: A Starting Guide",
    slug: "moving-to-northeast-florida-starting-guide",
    description:
      "A practical starting point for buyers relocating to Jacksonville, Lake City, St. Augustine, and the surrounding Northeast Florida communities.",
    publishedDate: "2026-01-15",
    updatedDate: null,
    author: "Erika Rosas",
    category: "moving-to-northeast-florida",
    image: "/images/blog/placeholder.svg",
    imageAlt: "Original placeholder illustration for a Northeast Florida relocation guide",
    relatedArea: "jacksonville",
    relatedPropertyType: null,
    reviewed: false,
    sources: [],
    body: [
      "Northeast Florida covers a lot of ground — from the urban core and suburbs of Jacksonville out to smaller, more rural communities like Lake City, Live Oak, and Branford. The right fit depends less on the region as a whole and more on which specific town matches your commute, budget, and lifestyle.",
      "Start by narrowing your search to two or three towns rather than the whole region. Commute distance to work, school zoning (EDITOR REVIEW REQUIRED — confirm current district boundaries before publishing), and whether you want in-town walkability versus acreage are usually the deciding factors.",
      "Property insurance costs vary meaningfully by location, especially near the coast. Get a homeowner's insurance quote on any property you're seriously considering before you're deep into a contract — coastal and flood-zone properties in particular can carry higher premiums than inland homes (EDITOR REVIEW REQUIRED — confirm current carrier availability and typical premium ranges before publishing).",
      "If you're relocating from out of state, a short pre-visit trip to tour two or three towns in person — even a long weekend — tends to save time later by ruling areas in or out before you're working against a closing deadline.",
      "Erika works with a number of relocating families each year and can put together a shortlist of neighborhoods based on your commute, budget, and priorities before you book a flight.",
    ],
  },
  {
    title: "Buying a Manufactured Home With Land in Florida",
    slug: "buying-manufactured-home-with-land-florida",
    description:
      "What to know before buying a manufactured or mobile home on acreage in Florida, from financing to title questions.",
    publishedDate: "2026-01-22",
    updatedDate: null,
    author: "Erika Rosas",
    category: "manufactured-homes",
    image: "/images/blog/placeholder.svg",
    imageAlt: "Original placeholder illustration for a manufactured home buying guide",
    relatedArea: "hilliard",
    relatedPropertyType: "manufactured-homes",
    reviewed: false,
    sources: [],
    body: [
      "Manufactured and mobile homes on acreage are common across Northeast Florida's more rural communities — Branford, Hilliard, Fort White, and Live Oak among them. Financing and title work for these properties differ from a typical stick-built home, so it's worth understanding the basics before you start touring.",
      "Financing options include FHA, VA, USDA, and conventional loans, but eligibility depends on factors like the home's age, foundation type, and whether the title has been retired to real property (EDITOR REVIEW REQUIRED — confirm current lender-specific requirements before publishing, since they change and vary by lender).",
      "Ask early whether the home's title has been retired — meaning it's treated as real property rather than personal property (like a vehicle title). This affects financing options and how the sale is structured.",
      "A foundation/engineering certification is commonly required for FHA and VA financing on manufactured homes. Budget time for this inspection in your contract timeline.",
      "Well and septic inspections are standard on rural manufactured-home purchases, since municipal water and sewer usually aren't available outside city limits.",
      "Erika has worked manufactured-home transactions from the financing side and the sales side, which helps catch title and foundation issues early rather than at the closing table.",
    ],
  },
  {
    title: "What Northeast Florida Sellers Should Prepare Before Listing",
    slug: "northeast-florida-sellers-preparation-checklist",
    description:
      "A practical pre-listing checklist for Northeast Florida sellers, covering pricing, preparation, and documentation.",
    publishedDate: "2026-01-29",
    updatedDate: null,
    author: "Erika Rosas",
    category: "selling",
    image: "/images/blog/placeholder.svg",
    imageAlt: "Original placeholder illustration for a seller preparation checklist",
    relatedArea: null,
    relatedPropertyType: null,
    reviewed: false,
    sources: [],
    body: [
      "Before a home goes on the market, a short preparation window can make a meaningful difference in how it shows and how quickly offers come in. Here's what's worth doing first.",
      "Pull together documentation early: survey, well/septic permits if applicable, any permits for additions or major repairs, and HOA documents if relevant. Buyers and their lenders will ask for these, and having them ready avoids delays later.",
      "A pricing strategy should be based on recent, comparable sales in the immediate neighborhood — not citywide averages, which can be misleading for pricing a specific property (EDITOR REVIEW REQUIRED before publishing: do not state or imply a specific expected sale price or timeline without a current comparative market analysis).",
      "Small preparation items — decluttering, a deep clean, fixing obvious deferred maintenance, and improving curb appeal — tend to have an outsized effect on first impressions relative to their cost.",
      "For land and acreage listings, make sure boundaries, access, and any easements are documented clearly, since these questions come up early with serious buyers.",
      "Erika builds a property-specific marketing and pricing plan for each listing rather than applying a one-size-fits-all approach — see the Sell With Erika page for what that process looks like.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

import type { Area } from "@/types/area";

/**
 * Service-area content. County names are public record and safe to state
 * as fact. Lifestyle/consideration copy is original and general-purpose —
 * every area still has contentReviewed: false until Erika confirms the
 * specifics for that market. See docs/CONTENT-NEEDED.md.
 */
export const areas: Area[] = [
  {
    name: "Jacksonville",
    slug: "jacksonville",
    county: "Duval County",
    introduction:
      "Jacksonville is Florida's largest city by land area, spanning riverfront neighborhoods, suburban subdivisions, and everything in between. It's a common landing point for relocating families, military households, and first-time buyers looking for variety in one metro area.",
    lifestyle:
      "Expect a wide range of neighborhood styles — from established urban-core streets to newer planned communities — along with proximity to the St. Johns River and a short drive to the Atlantic coast.",
    commonPropertyTypes: [
      "Single-family homes",
      "Townhomes",
      "New construction",
      "Investment properties",
    ],
    buyerConsiderations: [
      "Neighborhoods vary widely block to block — a showing tour matters more here than in smaller towns.",
      "Flood zone and insurance costs can differ significantly by neighborhood; confirm before writing an offer.",
      "Commute times vary a lot depending on which side of the river and which bridge/highway you rely on.",
    ],
    sellerConsiderations: [
      "Comparable sales should be pulled from the immediate neighborhood, not the city as a whole.",
      "Buyer pools differ between urban-core, suburban, and new-construction-adjacent listings.",
    ],
    image: "/images/areas/placeholder.svg",
    imageAlt: "Original placeholder illustration for Jacksonville, Florida",
    nearbyAreaSlugs: ["st-augustine", "hilliard", "fernandina-beach"],
    faqs: [
      {
        question: "Is Jacksonville a good fit for a relocation timeline under 60 days?",
        answer:
          "It can be — Jacksonville has enough inventory variety that a compressed search is workable, but narrowing target neighborhoods early makes the biggest difference. Erika can help build a shortlist before you arrive.",
      },
    ],
    seoTitle: "Jacksonville, FL Real Estate | Erika Rosas",
    metaDescription:
      "Buying or selling in Jacksonville, FL? Erika Rosas offers local Northeast Florida real estate guidance for Duval County neighborhoods.",
    contentReviewed: false,
  },
  {
    name: "Lake City",
    slug: "lake-city",
    county: "Columbia County",
    introduction:
      "Lake City sits at the crossroads of I-75 and I-10, making it a practical home base for commuters, remote workers, and buyers who want small-town pace without giving up highway access.",
    lifestyle:
      "A mix of in-town neighborhoods and outlying acreage properties, with several lakes in the immediate area and a shorter commute to Gainesville than most of Northeast Florida.",
    commonPropertyTypes: ["Single-family homes", "Land and acreage", "Manufactured homes"],
    buyerConsiderations: [
      "Rural properties outside city limits are more likely to rely on well and septic systems — budget for inspections on both.",
      "Highway proximity is a plus for commuters but worth checking against a specific address, since it varies by neighborhood.",
    ],
    sellerConsiderations: [
      "Acreage and manufactured-home listings often draw a different buyer pool than in-town homes — pricing and marketing should reflect that.",
    ],
    image: "/images/areas/placeholder.svg",
    imageAlt: "Original placeholder illustration for Lake City, Florida",
    nearbyAreaSlugs: ["live-oak", "fort-white", "branford"],
    faqs: [
      {
        question: "Are well and septic systems common in Lake City?",
        answer:
          "Outside city limits, yes — it's common on acreage and rural properties. Erika can help coordinate the inspections buyers typically want for both systems before closing.",
      },
    ],
    seoTitle: "Lake City, FL Real Estate | Erika Rosas",
    metaDescription:
      "Homes, land, and manufactured homes in Lake City, FL. Erika Rosas provides local Columbia County real estate guidance.",
    contentReviewed: false,
  },
  {
    name: "Live Oak",
    slug: "live-oak",
    county: "Suwannee County",
    introduction:
      "Live Oak is the Suwannee County seat, known for its rural character and proximity to the Suwannee River. It draws buyers looking for acreage, agricultural use, or a quieter pace outside a larger metro.",
    lifestyle:
      "Primarily rural and agricultural, with river access nearby and a smaller in-town core.",
    commonPropertyTypes: ["Land and acreage", "Manufactured homes", "Single-family homes"],
    buyerConsiderations: [
      "Agricultural exemptions, easements, and road access can all affect a parcel — these should be confirmed during due diligence.",
      "Flood zone status matters for property near the Suwannee River.",
    ],
    sellerConsiderations: [
      "Acreage listings benefit from clear documentation of boundaries, access, and any existing exemptions.",
    ],
    image: "/images/areas/placeholder.svg",
    imageAlt: "Original placeholder illustration for Live Oak, Florida",
    nearbyAreaSlugs: ["branford", "lake-city", "fort-white"],
    faqs: [
      {
        question: "Does Erika handle land and acreage transactions in Live Oak?",
        answer:
          "Yes — land, acreage, and manufactured-home transactions are a regular part of Erika's work in this part of Northeast Florida.",
      },
    ],
    seoTitle: "Live Oak, FL Real Estate | Erika Rosas",
    metaDescription:
      "Land, acreage, and homes in Live Oak, FL. Erika Rosas provides local Suwannee County real estate guidance.",
    contentReviewed: false,
  },
  {
    name: "Branford",
    slug: "branford",
    county: "Suwannee County",
    introduction:
      "Branford sits along the Suwannee River near the Ichetucknee River, and is best known regionally for spring-fed water access and a rural, low-density setting.",
    lifestyle:
      "Cabin-style and manufactured homes on acreage are common, along with river-access communities.",
    commonPropertyTypes: ["Land and acreage", "Manufactured homes", "Cabin-style homes"],
    buyerConsiderations: [
      "River-access and river-adjacent properties should be checked for flood zone status and any HOA river-access rules.",
      "Many properties are on well and septic — plan for both inspections.",
    ],
    sellerConsiderations: [
      "River access and acreage are strong selling points here and should be featured clearly in marketing.",
    ],
    image: "/images/areas/placeholder.svg",
    imageAlt: "Original placeholder illustration for Branford, Florida",
    nearbyAreaSlugs: ["live-oak", "fort-white", "lake-city"],
    faqs: [
      {
        question: "Are there active listings near the Ichetucknee River right now?",
        answer:
          "Availability changes regularly — contact Erika for the current picture of river-access listings in and around Branford.",
      },
    ],
    seoTitle: "Branford, FL Real Estate | Erika Rosas",
    metaDescription:
      "River-access acreage and manufactured homes in Branford, FL. Erika Rosas provides local Suwannee County real estate guidance.",
    contentReviewed: false,
  },
  {
    name: "Fort White",
    slug: "fort-white",
    county: "Columbia County",
    introduction:
      "Fort White is a small, rural community near the Santa Fe and Ichetucknee Rivers, popular with buyers looking for acreage and a slower pace within reach of Lake City and Gainesville.",
    lifestyle:
      "Mostly rural residential and agricultural, with larger lot sizes than in-town Lake City.",
    commonPropertyTypes: ["Land and acreage", "Single-family homes on acreage"],
    buyerConsiderations: [
      "Confirm well, septic, and road-access details early — some rural parcels are on private or easement roads.",
      "Acreage-heavy listings can take longer to show and compare than in-town homes; build extra time into a search timeline.",
    ],
    sellerConsiderations: [
      "Fencing, outbuildings, and usable cleared acreage are frequently a deciding factor for buyers here.",
    ],
    image: "/images/areas/placeholder.svg",
    imageAlt: "Original placeholder illustration for Fort White, Florida",
    nearbyAreaSlugs: ["lake-city", "branford", "live-oak"],
    faqs: [
      {
        question: "Is Fort White a good fit for buyers wanting space for animals or a hobby farm?",
        answer:
          "It's a common reason buyers look at Fort White specifically. Erika can help evaluate acreage, fencing, and outbuilding condition as part of a showing.",
      },
    ],
    seoTitle: "Fort White, FL Real Estate | Erika Rosas",
    metaDescription:
      "Rural acreage and homes in Fort White, FL. Erika Rosas provides local Columbia County real estate guidance.",
    contentReviewed: false,
  },
  {
    name: "Macclenny",
    slug: "macclenny",
    county: "Baker County",
    introduction:
      "Macclenny is the Baker County seat, offering a smaller-town alternative within commuting distance of Jacksonville along I-10.",
    lifestyle:
      "A mix of in-town neighborhoods and outlying rural properties, with a shorter commute into Jacksonville than most of the surrounding counties.",
    commonPropertyTypes: ["Single-family homes", "New construction", "Land and acreage"],
    buyerConsiderations: [
      "Commute time into Jacksonville varies by exact location — worth timing a test drive before committing.",
      "New construction inventory changes month to month; ask about current builder activity.",
    ],
    sellerConsiderations: [
      "Buyers here often compare Macclenny directly to nearby Jacksonville suburbs on price and commute.",
    ],
    image: "/images/areas/placeholder.svg",
    imageAlt: "Original placeholder illustration for Macclenny, Florida",
    nearbyAreaSlugs: ["hilliard", "jacksonville"],
    faqs: [
      {
        question: "Is Macclenny a reasonable commute to Jacksonville?",
        answer:
          "Many residents commute into Jacksonville along I-10; actual drive time depends on the specific neighborhood and time of day, so it's worth test-driving the route yourself.",
      },
    ],
    seoTitle: "Macclenny, FL Real Estate | Erika Rosas",
    metaDescription:
      "Homes, new construction, and acreage in Macclenny, FL. Erika Rosas provides local Baker County real estate guidance.",
    contentReviewed: false,
  },
  {
    name: "Hilliard",
    slug: "hilliard",
    county: "Nassau County",
    introduction:
      "Hilliard is a small, rural Nassau County town near the Georgia border, appealing to buyers who want acreage and low density while staying within reach of Jacksonville.",
    lifestyle:
      "Predominantly rural residential, with manufactured homes and acreage properties common.",
    commonPropertyTypes: ["Manufactured homes", "Land and acreage", "Single-family homes"],
    buyerConsiderations: [
      "Many properties rely on well and septic systems; plan inspections for both.",
      "Confirm zoning if you're planning agricultural or livestock use.",
    ],
    sellerConsiderations: [
      "Acreage, fencing, and outbuildings are typically strong selling points in this market.",
    ],
    image: "/images/areas/placeholder.svg",
    imageAlt: "Original placeholder illustration for Hilliard, Florida",
    nearbyAreaSlugs: ["fernandina-beach", "jacksonville", "macclenny"],
    faqs: [
      {
        question: "Does Erika work with manufactured-home buyers in Hilliard?",
        answer:
          "Yes — manufactured and mobile home sales, including land-and-home packages, are part of Erika's regular work in this area.",
      },
    ],
    seoTitle: "Hilliard, FL Real Estate | Erika Rosas",
    metaDescription:
      "Manufactured homes, acreage, and rural properties in Hilliard, FL. Erika Rosas provides local Nassau County real estate guidance.",
    contentReviewed: false,
  },
  {
    name: "Fernandina Beach",
    slug: "fernandina-beach",
    county: "Nassau County",
    introduction:
      "Fernandina Beach, on Amelia Island, combines a historic downtown with coastal and waterfront properties along the Atlantic and the Amelia River.",
    lifestyle:
      "Coastal and historic-district living, with a mix of beachside, riverfront, and in-town homes.",
    commonPropertyTypes: ["Single-family homes", "Waterfront properties", "Condominiums"],
    buyerConsiderations: [
      "Flood insurance and windstorm coverage are a meaningful cost factor for coastal and waterfront addresses — get quotes before writing an offer.",
      "Historic-district properties may carry additional renovation or exterior-modification rules; confirm before assuming a remodel scope.",
    ],
    sellerConsiderations: [
      "Coastal and waterfront listings should highlight flood-zone status transparently and accurately in marketing.",
    ],
    image: "/images/areas/placeholder.svg",
    imageAlt: "Original placeholder illustration for Fernandina Beach, Florida",
    nearbyAreaSlugs: ["hilliard", "jacksonville"],
    faqs: [
      {
        question: "Are insurance costs higher in Fernandina Beach than inland areas?",
        answer:
          "Coastal and waterfront properties generally carry higher flood and windstorm insurance costs than inland Northeast Florida homes. Get a quote early in your search so it's factored into your budget.",
      },
    ],
    seoTitle: "Fernandina Beach, FL Real Estate | Erika Rosas",
    metaDescription:
      "Coastal and waterfront homes on Amelia Island. Erika Rosas provides local Fernandina Beach, FL real estate guidance.",
    contentReviewed: false,
  },
  {
    name: "St. Augustine",
    slug: "st-augustine",
    county: "St. Johns County",
    introduction:
      "St. Augustine is one of the oldest cities in the country, offering a historic downtown alongside newer coastal and suburban neighborhoods throughout St. Johns County.",
    lifestyle:
      "A wide range of settings — historic-district homes, coastal properties, and newer planned communities — all within one metro area.",
    commonPropertyTypes: ["Single-family homes", "New construction", "Waterfront properties"],
    buyerConsiderations: [
      "Flood zone and insurance costs vary significantly between historic-district, coastal, and inland St. Johns County addresses.",
      "New construction communities are common here; confirm builder warranty and HOA terms before comparing to resale homes.",
    ],
    sellerConsiderations: [
      "St. Johns County draws relocation buyers year-round, which can widen the pool for well-priced, well-presented listings.",
    ],
    image: "/images/areas/placeholder.svg",
    imageAlt: "Original placeholder illustration for St. Augustine, Florida",
    nearbyAreaSlugs: ["jacksonville", "palatka"],
    faqs: [
      {
        question: "Is St. Augustine a common relocation destination?",
        answer:
          "It draws a steady stream of relocation buyers thanks to its schools, coastal access, and historic character. Erika can help structure a remote or short-timeline search.",
      },
    ],
    seoTitle: "St. Augustine, FL Real Estate | Erika Rosas",
    metaDescription:
      "Historic, coastal, and new-construction homes in St. Augustine, FL. Erika Rosas provides local St. Johns County real estate guidance.",
    contentReviewed: false,
  },
  {
    name: "Palatka",
    slug: "palatka",
    county: "Putnam County",
    introduction:
      "Palatka sits along the St. Johns River in Putnam County, offering riverfront and in-town properties at a different price point than the coastal counties to the east.",
    lifestyle:
      "A mix of riverfront, in-town, and outlying rural properties, with a historic downtown core.",
    commonPropertyTypes: ["Single-family homes", "Waterfront properties", "Land and acreage"],
    buyerConsiderations: [
      "Riverfront properties should be checked for flood zone status and any applicable setback or seawall requirements.",
      "Rural parcels outside town may be on well and septic — confirm before assuming municipal service.",
    ],
    sellerConsiderations: [
      "River access and lot size are typically strong selling points for Palatka-area listings.",
    ],
    image: "/images/areas/placeholder.svg",
    imageAlt: "Original placeholder illustration for Palatka, Florida",
    nearbyAreaSlugs: ["st-augustine"],
    faqs: [
      {
        question: "Are there riverfront listings available in Palatka?",
        answer:
          "Availability changes regularly — contact Erika for a current view of riverfront and near-river listings around Palatka.",
      },
    ],
    seoTitle: "Palatka, FL Real Estate | Erika Rosas",
    metaDescription:
      "Riverfront and rural homes in Palatka, FL. Erika Rosas provides local Putnam County real estate guidance.",
    contentReviewed: false,
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}

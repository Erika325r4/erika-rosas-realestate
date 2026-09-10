/**
 * Single source of truth for Erika's business information.
 * Import from here everywhere — never hard-code phone, email, license,
 * or tagline in a component.
 */

export const site = {
  name: "Erika Rosas",
  role: "Northeast Florida Real Estate Agent",
  tagline: "Less Stress. More Strategy. Real Results.",
  phoneDisplay: "904-305-4448",
  telHref: "tel:+19043054448",
  smsHref: "sms:+19043054448",
  email: "ErikaRosasNEFL@gmail.com",
  emailHref: "mailto:ErikaRosasNEFL@gmail.com",
  license: "Florida Real Estate License #3552521",
  languages: ["English", "Spanish"] as const,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.erikarosasrealestate.com",

  // Placeholders — see docs/CONTENT-NEEDED.md. Must be supplied before launch.
  brokerageName: "VERIFICATION REQUIRED",
  brokerageAddress: "VERIFICATION REQUIRED",
  brokerageLogoSrc: null as string | null,
} as const;

/** Social profile URLs. Empty until Erika supplies approved profile links — see docs/CONTENT-NEEDED.md. */
export const socialLinks: { label: string; href: string }[] = [];

export const about = {
  headline: "Meet Erika Rosas",
  supportingLine: "Real Estate Knowledge From Application to Closing",
  bio: [
    "Erika is a full-time Northeast Florida Realtor with more than 20 years of experience across residential sales, home valuations, mortgage consulting, loan processing, construction management, manufactured and mobile home sales, and Florida real estate closings.",
    "She holds a bachelor's degree in Finance and Business Management. She understands FHA, VA, USDA, and Conventional financing and is an AI Certified Real Estate Professional.",
    "Clients get a Realtor who has sat on the lending side of the table, the construction side of the table, and the closing table itself — so fewer surprises show up on the way to yours.",
  ],
} as const;

export const specialties = [
  "Home buyers",
  "Home sellers",
  "Home valuations",
  "Veterans and military families",
  "Relocation clients",
  "Land and acreage",
  "Manufactured homes",
  "New construction",
  "Investment properties",
  "Divorce-related property coordination",
  "English and Spanish assistance",
] as const;

export const serviceAreas = [
  "Jacksonville",
  "Lake City",
  "Live Oak",
  "Branford",
  "Fort White",
  "Macclenny",
  "Hilliard",
  "Fernandina Beach",
  "St. Augustine",
  "Palatka",
] as const;

/** Trust bar statements — verified only. Never add a claim not on this list. */
export const trustStatements = [
  "20+ Years of Real Estate and Mortgage Experience",
  "Bachelor's Degree in Finance and Business Management",
  "FHA, VA, USDA, and Conventional Knowledge",
  "English and Spanish Service",
  "AI Certified Real Estate Professional",
] as const;

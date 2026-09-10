export type TestimonialCategory =
  "seller" | "buyer" | "veteran" | "relocation" | "land-manufactured";

export interface Testimonial {
  quote: string;
  name: string;
  category: TestimonialCategory;
  /** Must stay false until a genuine, attributable review is supplied and verified. */
  verified: boolean;
}

/**
 * PLACEHOLDER TESTIMONIALS — VERIFIED REVIEW REQUIRED.
 * None of these are real reviews. Do not publish this page until every
 * entry below is replaced with a genuine, attributable client review, or
 * remove the section entirely. See docs/CONTENT-NEEDED.md.
 */
export const testimonials: Testimonial[] = [
  {
    quote: "VERIFIED REVIEW REQUIRED — placeholder seller testimonial goes here.",
    name: "VERIFIED REVIEW REQUIRED",
    category: "seller",
    verified: false,
  },
  {
    quote: "VERIFIED REVIEW REQUIRED — placeholder buyer testimonial goes here.",
    name: "VERIFIED REVIEW REQUIRED",
    category: "buyer",
    verified: false,
  },
  {
    quote: "VERIFIED REVIEW REQUIRED — placeholder veteran/military testimonial goes here.",
    name: "VERIFIED REVIEW REQUIRED",
    category: "veteran",
    verified: false,
  },
  {
    quote: "VERIFIED REVIEW REQUIRED — placeholder relocation testimonial goes here.",
    name: "VERIFIED REVIEW REQUIRED",
    category: "relocation",
    verified: false,
  },
  {
    quote: "VERIFIED REVIEW REQUIRED — placeholder land/manufactured-home testimonial goes here.",
    name: "VERIFIED REVIEW REQUIRED",
    category: "land-manufactured",
    verified: false,
  },
];

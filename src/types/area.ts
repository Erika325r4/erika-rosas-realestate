export interface AreaFAQ {
  question: string;
  answer: string;
}

export interface Area {
  name: string;
  slug: string;
  county: string;
  introduction: string;
  lifestyle: string;
  commonPropertyTypes: string[];
  buyerConsiderations: string[];
  sellerConsiderations: string[];
  image: string;
  imageAlt: string;
  nearbyAreaSlugs: string[];
  faqs: AreaFAQ[];
  seoTitle: string;
  metaDescription: string;
  /** True until Erika/local research confirms every fact on the page. */
  contentReviewed: boolean;
}

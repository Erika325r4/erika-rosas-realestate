export type ArticleCategory =
  | "moving-to-northeast-florida"
  | "selling"
  | "va-buying"
  | "manufactured-homes"
  | "land-and-acreage"
  | "wells-septic-surveys"
  | "home-valuations"
  | "new-construction"
  | "insurance"
  | "divorce-property"
  | "market-updates";

export interface Article {
  title: string;
  slug: string;
  description: string;
  publishedDate: string; // ISO 8601
  updatedDate: string | null; // ISO 8601
  author: string;
  category: ArticleCategory;
  image: string;
  imageAlt: string;
  /** Ordered array of paragraph strings — simple typed content, no MDX runtime required. */
  body: string[];
  relatedArea: string | null; // area slug
  relatedPropertyType: string | null; // property type slug
  /** False until a human has fact-checked every claim in the article. */
  reviewed: boolean;
  sources: string[];
}

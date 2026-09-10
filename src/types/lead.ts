export type ContactMethod = "phone" | "text" | "email";

export type ContactInterest =
  | "buying"
  | "selling"
  | "home-valuation"
  | "relocation"
  | "va-military"
  | "land-acreage"
  | "manufactured-home"
  | "new-construction"
  | "investment-property"
  | "divorce-property"
  | "spanish-assistance"
  | "other";

export interface ContactLead {
  fullName: string;
  email: string;
  phone: string;
  interest: ContactInterest;
  preferredContactMethod: ContactMethod;
  message: string;
  consent: boolean;
  /** Honeypot field — must stay empty. Presence of a value flags a bot. */
  companyWebsite?: string;
}

export type SellingTimeline =
  "immediately" | "1-3-months" | "3-6-months" | "6-12-months" | "just-researching";

export type ValuationPropertyType =
  "single-family" | "manufactured" | "land" | "multi-family" | "other";

export interface ValuationLead {
  propertyAddress: string;
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod: ContactMethod;
  sellingTimeline: SellingTimeline;
  propertyType: ValuationPropertyType;
  importantUpdates: string;
  additionalMessage: string;
  consent: boolean;
  companyWebsite?: string;
}

export interface PropertyAlertLead {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  minPrice: number | null;
  maxPrice: number | null;
  propertyType: string | null;
  consent: boolean;
  companyWebsite?: string;
}

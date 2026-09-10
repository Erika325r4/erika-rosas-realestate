export type PropertyStatus = "active" | "pending" | "sold" | "coming-soon";

export type PropertyType = "home" | "land" | "manufactured" | "new-construction" | "investment";

export interface Property {
  id: string;
  slug: string;
  status: PropertyStatus;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  squareFeet: number | null;
  acreage: number | null;
  propertyType: PropertyType;
  image: string;
  altText: string;
  featured: boolean;
  description: string;
  latitude: number | null;
  longitude: number | null;
  /** MLS/IDX attribution string, required once live data is connected. */
  listingAttribution: string | null;
  /** Demonstration listings must be flagged so the UI can badge them clearly. */
  isDemo: boolean;
}

export interface PropertyFilters {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: PropertyType;
  minAcreage?: number;
  manufacturedHome?: boolean;
  newConstruction?: boolean;
  waterfront?: boolean;
  noHoa?: boolean;
}

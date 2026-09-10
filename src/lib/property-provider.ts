import { properties as demoProperties } from "@/content/properties";
import type { Property, PropertyFilters } from "@/types/property";

/**
 * Data-access abstraction for property listings. The rest of the app only
 * ever imports `propertyProvider` from this file — never `content/properties`
 * directly outside this module. That means swapping the demo data source
 * for a real IDX/MLS feed later is a one-file change. See
 * docs/IDX-INTEGRATION.md for the replacement steps.
 */
export interface PropertyProvider {
  getFeaturedProperties(): Promise<Property[]>;
  getProperties(filters?: PropertyFilters): Promise<Property[]>;
  getPropertyBySlug(slug: string): Promise<Property | undefined>;
  getPropertiesByArea(city: string): Promise<Property[]>;
  getSimilarProperties(property: Property, limit?: number): Promise<Property[]>;
}

class DemoPropertyProvider implements PropertyProvider {
  private readonly data: Property[] = demoProperties;

  async getFeaturedProperties(): Promise<Property[]> {
    return this.data.filter((property) => property.featured);
  }

  async getProperties(filters: PropertyFilters = {}): Promise<Property[]> {
    return this.data.filter((property) => {
      if (filters.city && property.city.toLowerCase() !== filters.city.toLowerCase()) {
        return false;
      }
      if (
        filters.minPrice != null &&
        (property.price == null || property.price < filters.minPrice)
      ) {
        return false;
      }
      if (
        filters.maxPrice != null &&
        (property.price == null || property.price > filters.maxPrice)
      ) {
        return false;
      }
      if (
        filters.bedrooms != null &&
        (property.bedrooms == null || property.bedrooms < filters.bedrooms)
      ) {
        return false;
      }
      if (
        filters.bathrooms != null &&
        (property.bathrooms == null || property.bathrooms < filters.bathrooms)
      ) {
        return false;
      }
      if (filters.propertyType && property.propertyType !== filters.propertyType) {
        return false;
      }
      if (
        filters.minAcreage != null &&
        (property.acreage == null || property.acreage < filters.minAcreage)
      ) {
        return false;
      }
      if (filters.manufacturedHome && property.propertyType !== "manufactured") {
        return false;
      }
      if (filters.newConstruction && property.propertyType !== "new-construction") {
        return false;
      }
      // waterfront/noHoa are not yet modeled in demo data; reserved for the live IDX feed.
      return true;
    });
  }

  async getPropertyBySlug(slug: string): Promise<Property | undefined> {
    return this.data.find((property) => property.slug === slug);
  }

  async getPropertiesByArea(city: string): Promise<Property[]> {
    return this.data.filter((property) => property.city.toLowerCase() === city.toLowerCase());
  }

  async getSimilarProperties(property: Property, limit = 3): Promise<Property[]> {
    return this.data
      .filter(
        (candidate) =>
          candidate.id !== property.id && candidate.propertyType === property.propertyType,
      )
      .slice(0, limit);
  }
}

export const propertyProvider: PropertyProvider = new DemoPropertyProvider();

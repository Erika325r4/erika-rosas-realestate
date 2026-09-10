import { describe, expect, it } from "vitest";
import { propertyProvider } from "@/lib/property-provider";

describe("propertyProvider.getProperties filtering", () => {
  it("returns all demo properties with no filters", async () => {
    const results = await propertyProvider.getProperties();
    expect(results.length).toBeGreaterThan(0);
  });

  it("filters by city case-insensitively", async () => {
    const results = await propertyProvider.getProperties({ city: "jacksonville" });
    expect(results.length).toBeGreaterThan(0);
    for (const property of results) {
      expect(property.city.toLowerCase()).toBe("jacksonville");
    }
  });

  it("filters by property type", async () => {
    const results = await propertyProvider.getProperties({ propertyType: "land" });
    expect(results.length).toBeGreaterThan(0);
    for (const property of results) {
      expect(property.propertyType).toBe("land");
    }
  });

  it("filters by maxPrice, excluding properties with an unknown price", async () => {
    const results = await propertyProvider.getProperties({ maxPrice: 260000 });
    for (const property of results) {
      expect(property.price).not.toBeNull();
      expect(property.price as number).toBeLessThanOrEqual(260000);
    }
  });

  it("filters by minimum bedrooms", async () => {
    const results = await propertyProvider.getProperties({ bedrooms: 4 });
    for (const property of results) {
      expect(property.bedrooms).not.toBeNull();
      expect(property.bedrooms as number).toBeGreaterThanOrEqual(4);
    }
  });

  it("returns an empty array when no property matches", async () => {
    const results = await propertyProvider.getProperties({ minPrice: 10_000_000 });
    expect(results).toEqual([]);
  });
});

describe("propertyProvider.getFeaturedProperties", () => {
  it("only returns properties flagged as featured", async () => {
    const results = await propertyProvider.getFeaturedProperties();
    expect(results.length).toBeGreaterThan(0);
    for (const property of results) {
      expect(property.featured).toBe(true);
    }
  });
});

describe("propertyProvider.getPropertyBySlug", () => {
  it("returns undefined for an unknown slug", async () => {
    const result = await propertyProvider.getPropertyBySlug("does-not-exist");
    expect(result).toBeUndefined();
  });
});

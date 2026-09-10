# IDX / MLS Integration

Property data currently comes from `src/content/properties.ts` — a
hard-coded array of clearly labeled demonstration listings. Every
listing has `isDemo: true` and the UI badges it accordingly. **No code
on this site scrapes Zillow, Realtor.com, Homes.com, another agent's
site, or an MLS.** Replacing the demo data with a real, authorized IDX
feed is a scoped, single-file change by design.

## The abstraction

Every part of the app reads property data through one interface:

```ts
// src/lib/property-provider.ts
export interface PropertyProvider {
  getFeaturedProperties(): Promise<Property[]>;
  getProperties(filters?: PropertyFilters): Promise<Property[]>;
  getPropertyBySlug(slug: string): Promise<Property | undefined>;
  getPropertiesByArea(city: string): Promise<Property[]>;
  getSimilarProperties(property: Property, limit?: number): Promise<Property[]>;
}
```

Pages and components (`FeaturedProperties`, `/search`, `/properties`,
`/properties/[slug]`, the property-type template, area pages) all call
`propertyProvider.getX(...)` — never `content/properties` directly. That
means swapping the data source is a change to **one file**.

## Steps to go live

1. **Choose an authorized IDX/MLS provider** for Erika's MLS (e.g.
   SimplyRETS, Bridge Interactive/BAIR, Spark API, or a vendor your MLS
   already sanctions). Get API credentials and confirm display rules
   (required attribution text, photo usage rules, refresh frequency).

2. **Add credentials** to `.env.local` (see `.env.example`):

   ```
   IDX_PROVIDER=your-provider
   IDX_API_KEY=...
   IDX_ACCOUNT_ID=...
   ```

3. **Implement a new provider class** in `src/lib/property-provider.ts`
   (or a new file imported from there) that implements
   `PropertyProvider` by calling the IDX API and mapping its response
   shape onto the existing `Property` type (`src/types/property.ts`).
   Keep `isDemo: false` and populate `listingAttribution` with the
   MLS-required disclaimer text for each listing.

4. **Swap the export**:

   ```ts
   // export const propertyProvider: PropertyProvider = new DemoPropertyProvider();
   export const propertyProvider: PropertyProvider = new IdxPropertyProvider();
   ```

5. **Remove the demo notice** — delete or conditionally hide
   `<PropertyDisclaimer />` (`src/components/properties/PropertyDisclaimer.tsx`)
   once live data is connected, and delete the "Demo Listing" badge
   logic in `PropertyCard.tsx`.

6. **Update `docs/CONTENT-NEEDED.md`** — check off the IDX/MLS item and
   record the provider, account details location, and required
   attribution text your MLS agreement specifies.

7. **Re-run tests.** `tests/unit/property-filtering.test.ts` exercises
   the provider interface against the demo data; update or add cases if
   your IDX provider's filtering semantics differ (e.g. server-side vs.
   client-side filtering, pagination).

## Photos

Real listing photos should replace `PlaceholderImage` in
`PropertyCard.tsx` and `PropertyGallery.tsx` — swap in `next/image` with
the photo URLs your IDX provider returns, respecting any hot-linking
restrictions in your MLS agreement (some require re-hosting images
rather than linking directly to MLS-hosted URLs).

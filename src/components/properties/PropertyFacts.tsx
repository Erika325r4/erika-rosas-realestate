import type { Property } from "@/types/property";
import { formatCurrency, formatAcreage, formatNumber } from "@/lib/formatting";

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-navy/10 p-3 text-center">
      <p className="text-xs font-medium tracking-wide text-charcoal/60 uppercase">{label}</p>
      <p className="mt-1 text-base font-semibold text-navy">{value}</p>
    </div>
  );
}

export function PropertyFacts({ property }: { property: Property }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <Fact
        label="Price"
        value={property.price != null ? formatCurrency(property.price) : "Contact for Price"}
      />
      <Fact label="Beds" value={property.bedrooms != null ? String(property.bedrooms) : "—"} />
      <Fact label="Baths" value={property.bathrooms != null ? String(property.bathrooms) : "—"} />
      <Fact
        label="Sq Ft"
        value={property.squareFeet != null ? formatNumber(property.squareFeet) : "—"}
      />
      <Fact
        label="Acreage"
        value={property.acreage != null ? formatAcreage(property.acreage) : "—"}
      />
      <Fact label="Type" value={property.propertyType.replace("-", " ")} />
      <Fact label="Status" value={property.status.replace("-", " ")} />
      <Fact label="Zip" value={property.zipCode} />
    </div>
  );
}

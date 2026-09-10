import type { Property } from "@/types/property";
import { PropertyCard } from "./PropertyCard";

export function PropertyGrid({
  properties,
  emptyMessage = "No properties match these filters yet.",
}: {
  properties: Property[];
  emptyMessage?: string;
}) {
  if (properties.length === 0) {
    return (
      <p className="rounded-xl border border-navy/10 bg-white p-8 text-center text-sm text-charcoal/70">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

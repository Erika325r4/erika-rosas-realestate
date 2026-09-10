import Link from "next/link";
import { BedDouble, Bath, Ruler, Trees } from "lucide-react";
import type { Property } from "@/types/property";
import { formatCurrency, formatAcreage, formatNumber } from "@/lib/formatting";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

const statusLabels: Record<Property["status"], string> = {
  active: "Active",
  pending: "Pending",
  sold: "Sold",
  "coming-soon": "Coming Soon",
};

const placeholderVariant = (type: Property["propertyType"]) =>
  type === "land" ? "land" : type === "manufactured" ? "manufactured" : "home";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative">
        <PlaceholderImage
          variant={placeholderVariant(property.propertyType)}
          label={property.altText}
          aspect="aspect-[4/3]"
          className="rounded-none"
        />
        <span className="absolute top-3 left-3 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
          {statusLabels[property.status]}
        </span>
        {property.isDemo ? (
          <span className="absolute top-3 right-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
            Demo Listing
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xl font-bold text-navy">
          {property.price != null ? formatCurrency(property.price) : "Contact for Price"}
        </p>
        <p className="text-sm font-medium text-charcoal">
          {property.address}, {property.city}, {property.state} {property.zipCode}
        </p>
        <div className="mt-1 flex flex-wrap gap-3 text-xs text-charcoal/70">
          {property.bedrooms != null ? (
            <span className="flex items-center gap-1">
              <BedDouble className="h-3.5 w-3.5" aria-hidden="true" /> {property.bedrooms} bd
            </span>
          ) : null}
          {property.bathrooms != null ? (
            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" aria-hidden="true" /> {property.bathrooms} ba
            </span>
          ) : null}
          {property.squareFeet != null ? (
            <span className="flex items-center gap-1">
              <Ruler className="h-3.5 w-3.5" aria-hidden="true" />{" "}
              {formatNumber(property.squareFeet)} sqft
            </span>
          ) : null}
          {property.acreage != null ? (
            <span className="flex items-center gap-1">
              <Trees className="h-3.5 w-3.5" aria-hidden="true" /> {formatAcreage(property.acreage)}
            </span>
          ) : null}
        </div>
        <span className="mt-2 text-sm font-semibold text-coastal group-hover:underline">
          View Details
        </span>
      </div>
    </Link>
  );
}

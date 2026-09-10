import type { Property } from "@/types/property";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

export function PropertyGallery({ property }: { property: Property }) {
  const variant =
    property.propertyType === "land"
      ? "land"
      : property.propertyType === "manufactured"
        ? "manufactured"
        : "home";

  return (
    <div className="flex flex-col gap-2">
      <PlaceholderImage variant={variant} label={property.altText} aspect="aspect-[16/10]" />
      <p className="text-xs text-charcoal/60">
        Photo gallery placeholder. Real photography and additional angles will appear here once
        connected to a live IDX feed — see docs/IDX-INTEGRATION.md.
      </p>
    </div>
  );
}

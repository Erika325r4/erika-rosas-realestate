import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { Area } from "@/types/area";

export function AreaCard({ area }: { area: Area }) {
  return (
    <Link
      href={`/areas/${area.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-navy/10 bg-white p-5 transition-colors hover:border-gold hover:bg-sand/30"
    >
      <span className="flex items-center gap-2 text-sm font-semibold text-navy">
        <MapPin className="h-4 w-4 text-coastal" aria-hidden="true" />
        {area.name}
      </span>
      <span className="text-xs text-charcoal/60">{area.county}</span>
      <span className="mt-auto flex items-center gap-1 text-xs font-semibold text-coastal">
        Explore area
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

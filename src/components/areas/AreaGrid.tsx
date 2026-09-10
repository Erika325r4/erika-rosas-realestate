import type { Area } from "@/types/area";
import { AreaCard } from "./AreaCard";

export function AreaGrid({ areas }: { areas: Area[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {areas.map((area) => (
        <AreaCard key={area.slug} area={area} />
      ))}
    </div>
  );
}

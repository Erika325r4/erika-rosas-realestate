import { Info } from "lucide-react";

export function PropertyDisclaimer() {
  return (
    <p className="flex items-start gap-2 rounded-xl border border-coastal/30 bg-coastal/5 p-4 text-sm text-navy">
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      Property search demonstration. Live MLS data connection pending.
    </p>
  );
}

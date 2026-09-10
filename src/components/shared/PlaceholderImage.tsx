import { Home, Trees, MapPin, User, Newspaper } from "lucide-react";

export type PlaceholderVariant = "home" | "land" | "manufactured" | "map" | "portrait" | "article";

const icons: Record<PlaceholderVariant, typeof Home> = {
  home: Home,
  land: Trees,
  manufactured: Home,
  map: MapPin,
  portrait: User,
  article: Newspaper,
};

/**
 * Original, code-drawn placeholder graphic — never a downloaded or
 * scraped photo. Used everywhere real photography hasn't been supplied
 * yet. See docs/CONTENT-NEEDED.md for what Erika needs to provide.
 */
export function PlaceholderImage({
  variant = "home",
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  variant?: PlaceholderVariant;
  label: string;
  className?: string;
  aspect?: string;
}) {
  const Icon = icons[variant];

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-sand to-cream ${className}`}
    >
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <pattern id={`grid-${variant}`} width="28" height="28" patternUnits="userSpaceOnUse">
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="var(--color-navy)"
                strokeOpacity="0.06"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${variant})`} />
        </svg>
      </div>
      <div className="relative flex flex-col items-center gap-2 text-navy/50">
        <Icon className="h-10 w-10" aria-hidden="true" strokeWidth={1.5} />
        <span className="px-4 text-center text-xs font-medium tracking-wide uppercase">
          Photo Coming Soon
        </span>
      </div>
    </div>
  );
}

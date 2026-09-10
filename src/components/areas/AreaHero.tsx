import type { Area } from "@/types/area";
import { Container } from "@/components/shared/Container";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { CallTextButtons } from "@/components/shared/CallTextButtons";

export function AreaHero({ area }: { area: Area }) {
  return (
    <section className="bg-sand/40 py-12">
      <Container className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-wide text-coastal uppercase">
            {area.county}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-navy">{area.name} Real Estate</h1>
          <p className="mt-4 max-w-prose text-charcoal/80">{area.introduction}</p>
          <div className="mt-6">
            <CallTextButtons />
          </div>
          {!area.contentReviewed ? (
            <p className="mt-4 text-xs text-charcoal/50">
              Local content requires review — this page&rsquo;s specifics are pending Erika&rsquo;s
              confirmation.
            </p>
          ) : null}
        </div>
        <PlaceholderImage variant="map" label={area.imageAlt} aspect="aspect-[5/4]" />
      </Container>
    </section>
  );
}

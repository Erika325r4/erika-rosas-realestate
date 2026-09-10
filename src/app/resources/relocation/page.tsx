import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallTextButtons } from "@/components/shared/CallTextButtons";
import { AreaGrid } from "@/components/areas/AreaGrid";
import { areas } from "@/content/areas";

export const metadata: Metadata = buildMetadata({
  title: "Relocation Guide",
  description:
    "Moving to Northeast Florida? A practical starting guide for out-of-state and remote buyers.",
  path: "/resources/relocation",
});

export default function RelocationPage() {
  return (
    <Container narrow>
      <Breadcrumbs
        items={[
          { name: "Resources", href: "/resources" },
          { name: "Relocation Guide", href: "/resources/relocation" },
        ]}
      />
      <h1 className="text-4xl font-bold text-navy">Relocation Guide</h1>
      <p className="mt-4 text-charcoal/80">
        Moving to Northeast Florida from out of state, overseas, or elsewhere in Florida? Erika
        helps relocating families build a shortlist and a plan before they&rsquo;re working against
        a moving date.
      </p>
      <div className="mt-6">
        <CallTextButtons />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold text-navy">Narrow It Down Early</h2>
          <p className="mt-1 text-sm text-charcoal/80">
            Northeast Florida spans everything from Jacksonville&rsquo;s urban core to small rural
            towns. Picking two or three target areas early saves time later.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-navy">Virtual Touring</h2>
          <p className="mt-1 text-sm text-charcoal/80">
            Video walkthroughs and virtual consultations for buyers who can&rsquo;t tour in person
            before deciding.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-navy">Timeline Coordination</h2>
          <p className="mt-1 text-sm text-charcoal/80">
            Coordinating closing and move-in dates around your actual relocation timeline, whatever
            it looks like.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-navy">Explore Areas</h2>
        <AreaGrid areas={areas.slice(0, 6)} />
      </div>
    </Container>
  );
}

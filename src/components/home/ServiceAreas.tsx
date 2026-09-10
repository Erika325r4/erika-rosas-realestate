import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { AreaGrid } from "@/components/areas/AreaGrid";
import { areas } from "@/content/areas";

export function ServiceAreas() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Coverage Area"
            title="Areas Served Across Northeast Florida"
            description="From Jacksonville to Lake City, Fernandina Beach to Palatka."
          />
          <Button href="/areas" variant="outline">
            View All Areas
          </Button>
        </div>
        <div className="mt-8">
          <AreaGrid areas={areas} />
        </div>
      </Container>
    </section>
  );
}

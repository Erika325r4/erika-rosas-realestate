import { site } from "@/content/site";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { CallTextButtons } from "@/components/shared/CallTextButtons";

export function FinalCTA() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-5 rounded-3xl bg-gold/15 px-6 py-14 text-center">
        <h2 className="max-w-(--container-prose) text-3xl font-bold text-balance text-navy sm:text-4xl">
          {site.tagline}
        </h2>
        <p className="max-w-(--container-prose) text-charcoal/80">
          Whether you&rsquo;re buying, selling, relocating, or exploring a specialized property,
          Erika is ready to help you take the next step in Northeast Florida real estate.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Contact Erika
          </Button>
          <CallTextButtons size="lg" />
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export function HomeValuationCTA() {
  return (
    <section className="bg-navy py-16 text-white">
      <Container className="flex flex-col items-center gap-5 text-center">
        <h2 className="max-w-(--container-prose) text-3xl font-bold text-balance sm:text-4xl">
          What Could Your Northeast Florida Home Sell For?
        </h2>
        <p className="max-w-(--container-prose) text-white/80">
          Online estimates can miss updates, land, condition, and local details. Erika will
          personally review your property and the nearby market.
        </p>
        <Button href="/home-value" variant="primary" size="lg">
          Request My Personal Home Value Review
        </Button>
      </Container>
    </section>
  );
}

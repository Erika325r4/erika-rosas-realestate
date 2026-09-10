import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { CallTextButtons } from "@/components/shared/CallTextButtons";

export default function NotFound() {
  return (
    <Container narrow className="py-24 text-center">
      <h1 className="text-4xl font-bold text-navy">Page Not Found</h1>
      <p className="mt-4 text-charcoal/80">
        The page you&rsquo;re looking for may have moved. Try searching for a home, or reach out
        directly.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button href="/search" variant="primary">
          Search Homes
        </Button>
        <CallTextButtons />
      </div>
    </Container>
  );
}

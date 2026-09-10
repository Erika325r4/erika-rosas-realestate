import { Home as HomeIcon } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { CallTextButtons } from "@/components/shared/CallTextButtons";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

export function Hero() {
  return (
    <section className="bg-linear-to-b from-sand/60 to-cream py-14 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold tracking-wide text-navy uppercase">
            <HomeIcon className="h-3.5 w-3.5" aria-hidden="true" /> Northeast Florida
          </p>
          <h1 className="text-4xl font-bold text-balance text-navy sm:text-5xl">
            Northeast Florida Real Estate With More Knowledge, Care, and Strategy
          </h1>
          <p className="mt-5 max-w-prose text-lg text-charcoal/80">
            Helping buyers, sellers, veterans, investors, and relocating families make smart real
            estate moves throughout Northeast Florida.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/search" size="lg" variant="primary">
              Search Northeast Florida Homes
            </Button>
            <Button href="/home-value" size="lg" variant="outline">
              Find Out What My Home May Sell For
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <CallTextButtons />
            <span className="text-sm font-medium text-coastal">Hablo Español</span>
          </div>
        </div>

        <PlaceholderImage
          variant="home"
          label="Placeholder image of a Northeast Florida home — approved photography pending"
          aspect="aspect-[5/4]"
          className="shadow-lg"
        />
      </Container>
    </section>
  );
}

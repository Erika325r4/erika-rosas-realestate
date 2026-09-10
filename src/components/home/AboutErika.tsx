import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { about } from "@/content/site";
import { Container } from "@/components/shared/Container";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { CallTextButtons } from "@/components/shared/CallTextButtons";

export function AboutErika() {
  return (
    <section className="py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <PlaceholderImage
          variant="portrait"
          label="Professional headshot of Erika Rosas — approved photo pending"
          aspect="aspect-[4/5]"
          className="mx-auto max-w-sm"
        />
        <div>
          <p className="mb-2 text-sm font-semibold tracking-wide text-coastal uppercase">
            {about.supportingLine}
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">{about.headline}</h2>
          <div className="mt-4 flex flex-col gap-3 text-base text-charcoal/80">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-coastal"
            >
              Meet Erika
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <CallTextButtons />
          </div>
        </div>
      </Container>
    </section>
  );
}

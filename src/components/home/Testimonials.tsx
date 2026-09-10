import { AlertTriangle } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading eyebrow="Client Experience" title="What Clients Say" align="center" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className="flex flex-col gap-3 rounded-2xl border-2 border-dashed border-error/40 bg-error/5 p-5"
            >
              <figcaption className="flex items-center gap-2 text-xs font-semibold text-error">
                <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                {testimonial.verified ? "Verified Review" : "Verified Review Required"}
              </figcaption>
              <blockquote className="text-sm text-charcoal/80 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

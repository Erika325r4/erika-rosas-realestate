import { CheckCircle2 } from "lucide-react";
import { trustStatements } from "@/content/site";
import { Container } from "@/components/shared/Container";

export function TrustBar() {
  return (
    <section className="bg-sand/40 py-10">
      <Container>
        <ul className="flex flex-col flex-wrap justify-center gap-x-8 gap-y-4 sm:flex-row sm:text-center">
          {trustStatements.map((statement) => (
            <li key={statement} className="flex items-center gap-2 text-sm font-medium text-navy">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-coastal" aria-hidden="true" />
              {statement}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

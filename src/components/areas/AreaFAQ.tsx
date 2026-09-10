import type { AreaFAQ as AreaFAQItem } from "@/types/area";
import { JsonLd } from "@/components/shared/JsonLd";
import { faqPageSchema } from "@/lib/structured-data";

export function AreaFAQ({ faqs }: { faqs: AreaFAQItem[] }) {
  if (faqs.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <JsonLd data={faqPageSchema(faqs)} />
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-xl border border-navy/10 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold text-navy">
            {faq.question}
          </summary>
          <p className="mt-2 text-sm text-charcoal/80">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

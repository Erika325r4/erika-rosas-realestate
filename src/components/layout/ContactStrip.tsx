import { Phone, MessageSquareText, Mail } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/shared/Container";

/** Compact quick-contact band — drop into any page where a persistent contact prompt helps (e.g. above the footer). */
export function ContactStrip() {
  return (
    <div className="border-y border-navy/10 bg-sand/50 py-6">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm font-medium text-navy">
          Questions about buying, selling, or Northeast Florida real estate? Reach Erika directly.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-navy">
          <a href={site.telHref} className="tap-target flex items-center gap-2 hover:text-coastal">
            <Phone className="h-4 w-4" aria-hidden="true" /> {site.phoneDisplay}
          </a>
          <a href={site.smsHref} className="tap-target flex items-center gap-2 hover:text-coastal">
            <MessageSquareText className="h-4 w-4" aria-hidden="true" /> Text
          </a>
          <a
            href={site.emailHref}
            className="tap-target flex items-center gap-2 hover:text-coastal"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> Email
          </a>
        </div>
      </Container>
    </div>
  );
}

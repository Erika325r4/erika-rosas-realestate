import { site } from "@/content/site";
import { Container } from "@/components/shared/Container";

export function AnnouncementBar() {
  return (
    <div className="bg-navy py-2 text-white">
      <Container className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center text-xs font-medium sm:justify-between sm:text-sm">
        <p>
          Serving Jacksonville, Lake City, St. Augustine &amp; Northeast Florida · Hablo Español
        </p>
        <a href={site.telHref} className="tap-target flex items-center text-gold hover:text-white">
          {site.phoneDisplay}
        </a>
      </Container>
    </div>
  );
}

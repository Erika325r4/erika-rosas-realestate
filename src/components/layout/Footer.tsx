import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { site } from "@/content/site";
import { footerNavigation } from "@/content/navigation";
import { Container } from "@/components/shared/Container";
import { SocialLinks } from "@/components/shared/SocialLinks";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold tracking-wide text-white uppercase">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="tap-target flex items-center text-sm text-white/75 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-xl font-bold">{site.name}</p>
          <p className="mt-1 text-sm text-white/75">{site.role}</p>
          <p className="mt-4 max-w-xs text-sm text-white/75">{site.tagline}</p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a
              href={site.telHref}
              className="tap-target flex items-center gap-2 text-white/90 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="tap-target flex items-center gap-2 text-white/90 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
            </a>
          </div>
          <SocialLinks className="mt-5" />
        </div>

        <FooterColumn title="Explore" links={[...footerNavigation.explore]} />
        <FooterColumn title="Property Types" links={[...footerNavigation.propertyTypes]} />
        <FooterColumn title="Resources" links={[...footerNavigation.resources]} />
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. {site.license}. Equal Housing
            Opportunity.
          </p>
          <div className="flex flex-wrap gap-4">
            {footerNavigation.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="mt-3 text-[11px] leading-relaxed text-white/45">
          <p>
            Brokerage: {site.brokerageName}. Property search results shown on this site are
            demonstration data pending an authorized MLS/IDX data license — see the notice on the
            Search Homes page. Information deemed reliable but not guaranteed.
          </p>
        </Container>
      </div>
    </footer>
  );
}

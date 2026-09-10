import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { site } from "@/content/site";
import { mainNavigation } from "@/content/navigation";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/95 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-xl font-bold text-navy">{site.name}</span>
          <span className="text-xs font-medium tracking-wide text-coastal">{site.role}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((link) =>
            link.children ? (
              <details key={link.href} className="group relative">
                <summary className="tap-target flex cursor-pointer list-none items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-charcoal hover:text-navy [&::-webkit-details-marker]:hidden">
                  {link.label}
                  <ChevronDown
                    className="h-4 w-4 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <ul className="absolute left-0 z-50 mt-1 w-64 rounded-xl border border-navy/10 bg-white p-2 shadow-lg">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-charcoal hover:bg-sand/60 hover:text-navy"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="tap-target flex items-center rounded-md px-3 py-2 text-sm font-medium text-charcoal hover:text-navy"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/home-value" variant="outline" size="md">
            What Is My Home Worth?
          </Button>
          <Button
            href={site.telHref}
            variant="primary"
            size="md"
            icon={<Phone className="h-4 w-4" aria-hidden="true" />}
          >
            Call or Text
          </Button>
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}

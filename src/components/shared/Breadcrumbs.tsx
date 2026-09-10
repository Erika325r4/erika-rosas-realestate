import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbListSchema } from "@/lib/structured-data";
import { canonicalUrl } from "@/lib/metadata";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const withHome: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];
  const schema = breadcrumbListSchema(
    withHome.map((item) => ({ name: item.name, url: canonicalUrl(item.href) })),
  );

  return (
    <nav aria-label="Breadcrumb" className="py-4 text-sm text-charcoal/70">
      <JsonLd data={schema} />
      <ol className="flex flex-wrap items-center gap-1">
        {withHome.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === withHome.length - 1 ? (
              <span aria-current="page" className="font-medium text-navy">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-navy hover:underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

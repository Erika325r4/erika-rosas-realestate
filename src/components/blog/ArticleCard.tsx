import Link from "next/link";
import { AlertCircle } from "lucide-react";
import type { Article } from "@/types/article";
import { formatDate } from "@/lib/formatting";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition-shadow hover:shadow-lg"
    >
      <PlaceholderImage
        variant="article"
        label={article.imageAlt}
        aspect="aspect-[16/9]"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        {!article.reviewed ? (
          <span className="flex items-center gap-1 text-xs font-semibold text-error">
            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> Editor Review Required
          </span>
        ) : null}
        <p className="text-xs font-medium text-charcoal/60">{formatDate(article.publishedDate)}</p>
        <h3 className="text-lg font-semibold text-navy group-hover:text-coastal">
          {article.title}
        </h3>
        <p className="text-sm text-charcoal/75">{article.description}</p>
      </div>
    </Link>
  );
}

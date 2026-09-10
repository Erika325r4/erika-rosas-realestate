import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { buildMetadata, canonicalUrl } from "@/lib/metadata";
import { getArticleBySlug, articles } from "@/content/articles";
import { formatDate } from "@/lib/formatting";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { JsonLd } from "@/components/shared/JsonLd";
import { articleSchema } from "@/lib/structured-data";
import { CallTextButtons } from "@/components/shared/CallTextButtons";

type Params = { slug: string };

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article)
    return buildMetadata({
      title: "Article Not Found",
      description: "This article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <Container narrow>
      <JsonLd data={articleSchema(article, canonicalUrl(`/blog/${article.slug}`))} />
      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          { name: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      {!article.reviewed ? (
        <div className="mb-6 flex items-center gap-2 rounded-lg bg-error/10 p-3 text-sm font-medium text-error">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Editor Review Required — this draft has not yet been fact-checked for publication.
        </div>
      ) : null}

      <p className="text-xs font-medium text-charcoal/60">
        {formatDate(article.publishedDate)} · {article.author}
      </p>
      <h1 className="mt-2 text-4xl font-bold text-navy">{article.title}</h1>

      <div className="mt-6">
        <PlaceholderImage variant="article" label={article.imageAlt} aspect="aspect-[16/9]" />
      </div>

      <div className="mt-8 flex flex-col gap-4 text-charcoal/85">
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10">
        <CallTextButtons />
      </div>
    </Container>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { articles } from "@/content/articles";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ArticleGrid } from "@/components/blog/ArticleGrid";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Guides and local market articles for Northeast Florida buyers and sellers.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  );

  return (
    <Container>
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
      <h1 className="text-4xl font-bold text-navy">Blog</h1>
      <p className="mt-4 max-w-prose text-charcoal/80">
        Practical guides for Northeast Florida buyers, sellers, and relocating families.
      </p>
      <div className="mt-8">
        <ArticleGrid articles={sorted} />
      </div>
    </Container>
  );
}

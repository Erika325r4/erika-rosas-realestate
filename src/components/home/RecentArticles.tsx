import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { ArticleGrid } from "@/components/blog/ArticleGrid";
import { articles } from "@/content/articles";

export function RecentArticles() {
  const recent = [...articles]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3);

  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Guides & Local Insight" title="Recent Articles" />
          <Button href="/blog" variant="outline">
            Visit the Blog
          </Button>
        </div>
        <div className="mt-8">
          <ArticleGrid articles={recent} />
        </div>
      </Container>
    </section>
  );
}

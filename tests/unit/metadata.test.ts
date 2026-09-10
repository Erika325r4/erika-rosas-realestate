import { describe, expect, it } from "vitest";
import { buildMetadata, canonicalUrl } from "@/lib/metadata";
import { site } from "@/content/site";

describe("canonicalUrl", () => {
  it("resolves a relative path against the site URL", () => {
    expect(canonicalUrl("/about")).toBe(new URL("/about", site.siteUrl).toString());
  });
});

describe("buildMetadata", () => {
  it("sets the title and description verbatim", () => {
    const metadata = buildMetadata({
      title: "Test Title",
      description: "Test description.",
      path: "/test",
    });
    expect(metadata.title).toBe("Test Title");
    expect(metadata.description).toBe("Test description.");
  });

  it("sets a canonical alternate URL from the path", () => {
    const metadata = buildMetadata({ title: "Test", description: "Test.", path: "/test-page" });
    expect(metadata.alternates?.canonical).toBe(new URL("/test-page", site.siteUrl).toString());
  });

  it("allows indexing by default", () => {
    const metadata = buildMetadata({ title: "Test", description: "Test.", path: "/test" });
    expect(metadata.robots).toEqual({ index: true, follow: true });
  });

  it("disables indexing when noIndex is set", () => {
    const metadata = buildMetadata({
      title: "Test",
      description: "Test.",
      path: "/test",
      noIndex: true,
    });
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it("mirrors the title and description into openGraph and twitter", () => {
    const metadata = buildMetadata({
      title: "Shared Title",
      description: "Shared description.",
      path: "/shared",
    });
    expect(metadata.openGraph?.title).toBe("Shared Title");
    expect(metadata.twitter?.title).toBe("Shared Title");
  });
});

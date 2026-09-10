import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/search",
  "/sell",
  "/home-value",
  "/about",
  "/contact",
  "/properties",
  "/property-types",
  "/property-types/homes",
  "/property-types/land-acreage",
  "/property-types/manufactured-homes",
  "/property-types/new-construction",
  "/property-types/investment-properties",
  "/areas",
  "/areas/jacksonville",
  "/resources",
  "/resources/buyer-guide",
  "/resources/seller-guide",
  "/resources/military-va",
  "/resources/relocation",
  "/resources/divorce-property-support",
  "/resources/spanish",
  "/blog",
  "/blog/moving-to-northeast-florida-starting-guide",
  "/privacy",
  "/terms",
  "/accessibility",
];

for (const route of routes) {
  test(`GET ${route} does not 404`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status(), `${route} returned ${response?.status()}`).toBeLessThan(400);
    await expect(page.locator("h1").first()).toBeVisible();
  });
}

test("an unknown route renders the custom not-found page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Page Not Found" })).toBeVisible();
});

test("sitemap.xml and robots.txt are reachable", async ({ page }) => {
  const sitemap = await page.goto("/sitemap.xml");
  expect(sitemap?.status()).toBe(200);
  const robots = await page.goto("/robots.txt");
  expect(robots?.status()).toBe(200);
});

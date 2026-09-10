import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads with the expected headline and primary CTAs", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Northeast Florida Real Estate",
    );
    await expect(page.getByRole("link", { name: "Search Northeast Florida Homes" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Find Out What My Home May Sell For/ }),
    ).toBeVisible();
  });

  test("call and text links use the correct href", async ({ page }) => {
    await page.goto("/");
    const callLink = page.locator('a[href^="tel:"]').first();
    await expect(callLink).toHaveAttribute("href", "tel:+19043054448");
    const textLink = page.locator('a[href^="sms:"]').first();
    await expect(textLink).toHaveAttribute("href", "sms:+19043054448");
  });
});

test.describe("Desktop navigation", () => {
  test("top-level nav links navigate to the right page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About Erika" }).first().click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Meet Erika Rosas");
  });

  test("Property Types dropdown opens and links to a subpage", async ({ page }) => {
    await page.goto("/");
    const primaryNav = page.getByRole("navigation", { name: "Primary" });
    await primaryNav.locator("summary", { hasText: "Property Types" }).click();
    await primaryNav.getByRole("link", { name: "Land and Acreage" }).click();
    await expect(page).toHaveURL(/\/property-types\/land-acreage$/);
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens, lists links, and closes on Escape", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Open menu" });
    await trigger.click();

    const panel = page.getByRole("dialog", { name: "Mobile navigation" });
    await expect(panel).toBeVisible();
    await expect(panel.getByRole("link", { name: "Home", exact: true })).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(panel).toBeHidden();
  });

  test("locks body scroll while open", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe("hidden");
  });
});

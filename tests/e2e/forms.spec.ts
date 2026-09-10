import { test, expect } from "@playwright/test";

test.describe("Contact form validation", () => {
  test("shows field errors on an empty submit", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByText("Enter your full name.")).toBeVisible();
    await expect(page.getByText("Enter a valid email address.")).toBeVisible();
    await expect(page.getByText("Please confirm you agree to be contacted.")).toBeVisible();
  });

  test("submits successfully with valid data", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel("Full Name").fill("Test Visitor");
    await page.getByLabel("Email", { exact: true }).fill("test-visitor@example.com");
    await page.getByLabel("Phone", { exact: true }).fill("904-305-4448");
    await page
      .getByLabel("Message", { exact: true })
      .fill("I'd like more information about a listing.");
    await page.getByLabel(/I agree to be contacted/).check();
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByText(/your request was received/i)).toBeVisible();
  });
});

test.describe("Home value form", () => {
  test("requires a property address before submitting", async ({ page }) => {
    await page.goto("/home-value");
    await page.getByRole("button", { name: /Request My Personal Home Value Review/ }).click();
    await expect(page.getByText("Enter the property address.")).toBeVisible();
  });
});

test.describe("Property search filters", () => {
  test("updates the URL query string when applied", async ({ page }) => {
    await page.goto("/search");
    const filterForm = page.getByRole("form", { name: "Filter listings" });
    await filterForm.getByLabel("City").selectOption("Lake City");
    await filterForm.getByRole("button", { name: "Apply Filters" }).click();
    await expect(page).toHaveURL(/city=Lake\+?City|city=Lake%20City/);
  });

  test("homepage search bar routes to /search with query params", async ({ page }) => {
    await page.goto("/");
    const bar = page
      .locator("form")
      .filter({ has: page.getByRole("button", { name: "Search Homes" }) });
    await bar.getByLabel("City").selectOption("Jacksonville");
    await bar.getByRole("button", { name: "Search Homes" }).click();
    await expect(page).toHaveURL(/\/search\?city=Jacksonville/);
  });
});

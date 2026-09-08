import { expect, test } from "@playwright/test";

const draftPath = "/insights/the-business-stays-yours";

for (const width of [320, 390, 768, 1440]) {
  test(`MACS Insights public index is usable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width >= 768 ? 1000 : 844 });
    await page.goto("/insights");
    await expect(page.getByRole("heading", { level: 1, name: /Ideas for businesses/i })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
}

test("unapproved editorial previews are not publicly accessible", async ({ page }) => {
  await page.goto("/insights");
  await expect(page.getByRole("link", { name: /The Business Stays Yours/i })).toHaveCount(0);
  const response = await page.goto(draftPath);
  expect(response?.status()).toBe(404);
  const manifest = await page.request.get("/.well-known/editorial.json");
  expect(manifest.ok()).toBe(true);
  const data = await manifest.json();
  expect(data.articles.some((article: { slug: string }) => article.slug === "the-business-stays-yours")).toBe(false);
});

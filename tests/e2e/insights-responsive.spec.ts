import { expect, test } from "@playwright/test";

const articlePath = "/insights/the-business-stays-yours";
const widths = [320, 375, 390, 430, 768, 1440] as const;

for (const width of widths) {
  test(`MACS Insights article is usable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width >= 768 ? 1000 : 844 });
    await page.goto(articlePath);

    await expect(page.getByRole("heading", { level: 1, name: "The Business Stays Yours" })).toBeVisible();
    await expect(page.getByRole("link", { name: /MACS Insights/i })).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);

    const backSize = await page.getByRole("link", { name: /MACS Insights/i }).boundingBox();
    expect(backSize?.height ?? 0).toBeGreaterThanOrEqual(44);

    await page.screenshot({
      path: `test-results/insights/article-${width}.png`,
      fullPage: true,
    });
  });
}

test("MACS Insights index preserves hierarchy and no horizontal overflow on phone", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/insights");
  await expect(page.getByRole("heading", { level: 1, name: /Ideas for businesses/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /The Business Stays Yours/i })).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
  await page.screenshot({ path: "test-results/insights/index-390.png", fullPage: true });
});

test("MACS Insights respects reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(articlePath);
  const cta = page.getByRole("link", { name: /See how MACS works/i });
  await expect(cta).toBeVisible();
  const transitionSeconds = await cta.evaluate((element) => Number.parseFloat(getComputedStyle(element).transitionDuration));
  expect(transitionSeconds).toBeLessThanOrEqual(0.001);
});

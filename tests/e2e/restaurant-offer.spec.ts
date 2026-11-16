import { expect, test } from "@playwright/test";

for (const width of [320, 390, 768, 1440]) {
  test(`restaurant offer at ${width}px has one clear action and no overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/restaurants");
    await expect(page.getByRole("heading", { level: 1, name: /more than views/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /start small/i })).toBeVisible();
    await expect(page.getByText("$750", { exact: true })).toBeVisible();
    const mainActions = page.getByRole("link", { name: /tell us about your restaurant/i });
    await expect(mainActions.first()).toHaveAttribute("href", "/apply");
    const dimensions = await page.evaluate(() => ({
      body: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
    }));
    expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport + 1);
  });
}

test("restaurant offer supports keyboard disclosure and uses existing intake", async ({ page }) => {
  await page.goto("/restaurants");
  const firstQuestion = page.getByText("Do I need a large influencer?", { exact: true });
  await firstQuestion.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByText(/evaluate local relevance/i)).toBeVisible();
  await page.getByRole("link", { name: /tell us about your restaurant/i }).first().click();
  await expect(page).toHaveURL(/\/apply$/);
});

test("restaurant marketing service is discoverable through Programs", async ({ page }) => {
  await page.goto("/programs");
  await expect(page.getByRole("link", { name: /explore restaurant growth/i })).toHaveAttribute("href", "/restaurants");
});

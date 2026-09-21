import { expect, test } from "@playwright/test";

test("homepage scroll motion responds to native scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const heroLayer = page.locator(".editorial-hero__motion-layer");
  const firstScene = page.locator(".reveal").first();

  await expect(heroLayer).toBeVisible();
  await expect(firstScene).toBeVisible();

  const heroBefore = await heroLayer.evaluate((node) => getComputedStyle(node).transform);
  const sceneBefore = await firstScene.evaluate((node) => getComputedStyle(node).transform);

  await page.evaluate(() => window.scrollTo({ top: 720, behavior: "instant" }));
  await page.waitForTimeout(650);

  const heroAfter = await heroLayer.evaluate((node) => getComputedStyle(node).transform);
  const sceneAfter = await firstScene.evaluate((node) => getComputedStyle(node).transform);

  expect(heroAfter).not.toBe(heroBefore);
  expect(sceneAfter).not.toBe(sceneBefore);
  await expect(page.locator("body")).toHaveCSS("overflow-y", /auto|visible/);
});

test("reduced motion keeps scroll scenes static and readable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const heroLayer = page.locator(".editorial-hero__motion-layer");
  const firstScene = page.locator(".reveal").first();

  const heroBefore = await heroLayer.evaluate((node) => getComputedStyle(node).transform);
  const sceneBefore = await firstScene.evaluate((node) => getComputedStyle(node).transform);
  await expect(firstScene).toHaveCSS("opacity", "1");

  await page.evaluate(() => window.scrollTo({ top: 720, behavior: "instant" }));
  await page.waitForTimeout(250);

  const heroAfter = await heroLayer.evaluate((node) => getComputedStyle(node).transform);
  const sceneAfter = await firstScene.evaluate((node) => getComputedStyle(node).transform);

  expect(heroAfter).toBe(heroBefore);
  expect(sceneAfter).toBe(sceneBefore);
  await expect(firstScene).toHaveCSS("opacity", "1");
});

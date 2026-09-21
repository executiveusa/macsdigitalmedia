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


test("living header changes state with scroll direction", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const header = page.locator(".editorial-header");
  await expect(header).toHaveAttribute("data-scroll-mode", "top");

  await page.evaluate(() => window.scrollTo({ top: 620, behavior: "instant" }));
  await page.waitForTimeout(220);
  await expect(header).toHaveAttribute("data-scroll-mode", /down|up/);

  await page.evaluate(() => window.scrollTo({ top: 220, behavior: "instant" }));
  await page.waitForTimeout(220);
  await expect(header).toHaveAttribute("data-scroll-mode", "up");
});

test("primary controls provide pressed-state visual feedback", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menu = page.getByRole("button", { name: /^menu$/i });
  const before = await menu.evaluate((node) => getComputedStyle(node).transform);
  await menu.dispatchEvent("pointerdown");
  await page.waitForTimeout(80);
  const pressed = await menu.evaluate((node) => getComputedStyle(node).transform);

  expect(pressed).not.toBe(before);
  await menu.dispatchEvent("pointerup");
});

test("accessibility drawer enters as a spatial spring", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const trigger = page.getByRole("button", { name: /^accessibility$/i });
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();

  const drawer = page.locator(".accessibility-drawer__panel");
  await expect(drawer).toBeVisible();
  await expect(drawer).toHaveCSS("opacity", "1");
  const transform = await drawer.evaluate((node) => getComputedStyle(node).transform);
  expect(transform === "none" || transform.includes("matrix")).toBeTruthy();
});

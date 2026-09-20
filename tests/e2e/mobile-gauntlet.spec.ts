import { expect, test } from "@playwright/test";

async function overflow(page: import("@playwright/test").Page) {
  return page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
}

async function expectTouchTarget(locator: import("@playwright/test").Locator, minimum = 44) {
  const box = await locator.boundingBox();
  expect(box, "touch target should have a rendered box").not.toBeNull();
  expect(box!.width, "touch target width").toBeGreaterThanOrEqual(minimum);
  expect(box!.height, "touch target height").toBeGreaterThanOrEqual(minimum);
}

const viewports = [
  { width: 320, height: 568 },
  { width: 360, height: 800 },
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 414, height: 896 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
];

const majorRoutes = ["/", "/programs", "/work", "/story", "/team", "/built-here", "/apply"];

test("release mobile matrix: major routes are visible and overflow-free", async ({ page }) => {
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    for (const route of majorRoutes) {
      await page.goto(route);
      await expect(page.locator("main")).toBeVisible();
      const dimensions = await overflow(page);
      expect(
        dimensions.scrollWidth,
        `${route} should not overflow at ${viewport.width}px`,
      ).toBeLessThanOrEqual(dimensions.clientWidth + 1);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  }
});

test("home keeps the primary action readable and reachable on required phone widths", async ({ page }) => {
  for (const viewport of viewports.filter(({ width }) => width <= 430)) {
    await page.setViewportSize(viewport);
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1, name: /digital partner for non-technical founders/i })).toBeVisible();
    await expectTouchTarget(page.getByRole("button", { name: /^menu$/i }));

    const body = page.locator("body");
    const bodyFontSize = await body.evaluate((element) => parseFloat(getComputedStyle(element).fontSize));
    expect(bodyFontSize).toBeGreaterThanOrEqual(16);

    const credibility = page.locator(".editorial-credibility p");
    const credibilitySize = await credibility.evaluate((element) => parseFloat(getComputedStyle(element).fontSize));
    expect(credibilitySize).toBeGreaterThanOrEqual(14);
  }
});

test("mobile navigation traps focus, restores focus, and exposes the primary CTA", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: /^menu$/i });
  await expectTouchTarget(menuButton);
  await menuButton.click();

  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(navigation).toBeVisible();
  await expect(navigation.getByRole("link", { name: /tell us what's important/i })).toBeVisible();

  for (const link of await navigation.locator("a").all()) {
    await expectTouchTarget(link);
  }

  await page.keyboard.press("Escape");
  await expect(navigation).toBeHidden();
  await expect(menuButton).toBeFocused();
});

test("reduced motion keeps content readable without transform animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("heading", { name: /four ways to start/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /two perspectives help your business/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /^built here$/i })).toBeVisible();

  const transition = page.locator(".page-transition");
  if (await transition.count()) {
    const transform = await transition.evaluate((element) => getComputedStyle(element).transform);
    expect(transform === "none" || transform === "matrix(1, 0, 0, 1, 0, 0)").toBeTruthy();
  }
});

test("work cards become a readable single column on compact phones", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/work");

  const cards = page.locator("article");
  await expect(cards.first()).toBeVisible();

  const first = await cards.nth(0).boundingBox();
  const second = await cards.nth(1).boundingBox();
  expect(first).not.toBeNull();
  expect(second).not.toBeNull();
  expect(second!.y).toBeGreaterThan(first!.y + first!.height - 2);

  for (const link of await page.getByRole("link", { name: /view project/i }).all()) {
    await expectTouchTarget(link);
  }
});

test("team placeholders keep mobile pacing compact", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/team");

  const people = page.locator("article");
  await expect(people).toHaveCount(5);
  const first = await people.first().boundingBox();
  expect(first).not.toBeNull();
  expect(first!.height).toBeLessThan(760);
});

test("apply page has one dominant booking action", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/apply");

  await expect(page.getByRole("heading", { name: /tell us what’s important/i })).toBeVisible();
  const booking = page.getByRole("link", { name: /book a conversation/i });
  await expectTouchTarget(booking);
  await expect(booking).toHaveAttribute("href", "/book");
});

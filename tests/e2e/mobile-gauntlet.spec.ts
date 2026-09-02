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

const phoneViewports = [
  { width: 320, height: 740 },
  { width: 360, height: 800 },
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 414, height: 896 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
];

test("mobile Collins gate: readable, reachable and overflow-free across required phone widths", async ({ page }) => {
  for (const viewport of phoneViewports) {
    await page.setViewportSize(viewport);
    await page.goto("/");

    const dimensions = await overflow(page);
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: /tell us what's stuck/i }).first()).toBeVisible();
    await expectTouchTarget(page.getByRole("button", { name: /^menu$/i }));
    await expectTouchTarget(page.getByRole("link", { name: /tell us what's stuck/i }).first());

    const bodyCopy = page.locator(".editorial-hero__line");
    const fontSize = await bodyCopy.evaluate((element) => parseFloat(getComputedStyle(element).fontSize));
    const lineHeight = await bodyCopy.evaluate((element) => parseFloat(getComputedStyle(element).lineHeight));
    expect(fontSize).toBeGreaterThanOrEqual(16);
    expect(lineHeight).toBeGreaterThanOrEqual(fontSize * 1.45);
  }
});

test("mobile navigation has phone-sized targets, visible focus and a contained layout", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: /^menu$/i });
  await menuButton.click();

  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(navigation).toBeVisible();

  for (const link of await navigation.locator("a").all()) {
    await expectTouchTarget(link);
  }

  await page.keyboard.press("Tab");
  const focusedOutline = await page.locator(":focus").evaluate((element) => getComputedStyle(element).outlineStyle);
  expect(focusedOutline).not.toBe("none");

  const dimensions = await overflow(page);
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);

  await page.screenshot({ path: "test-results/mobile-gauntlet-menu-390.png", fullPage: true });
});

test("motion gauntlet: editorial sections never wait on scroll reveals", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const reveals = page.locator(".reveal");
  await expect(reveals.first()).toBeVisible();

  const states = await reveals.evaluateAll((elements) =>
    elements.map((element) => {
      const style = getComputedStyle(element);
      return { opacity: style.opacity, transform: style.transform };
    }),
  );

  for (const state of states) {
    expect(state.opacity).toBe("1");
    expect(state.transform === "none" || state.transform === "matrix(1, 0, 0, 1, 0, 0)").toBeTruthy();
  }
});

test("reduced motion preserves the full mobile page without transform animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByText("ASC3ND", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /one watches what has to last/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /one accountable technology partner/i })).toBeVisible();

  const transition = page.locator(".page-transition");
  const transform = await transition.evaluate((element) => getComputedStyle(element).transform);
  expect(transform === "none" || transform === "matrix(1, 0, 0, 1, 0, 0)").toBeTruthy();

  await page.screenshot({ path: "test-results/mobile-gauntlet-reduced-motion-390.png", fullPage: true });
});

test("mobile art direction keeps proof and founder media compact enough to preserve pacing", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const workMedia = await page.locator(".editorial-work__media").boundingBox();
  const storyMedia = await page.locator(".editorial-story__media").boundingBox();

  expect(workMedia).not.toBeNull();
  expect(storyMedia).not.toBeNull();
  expect(workMedia!.height / workMedia!.width).toBeLessThan(0.9);
  expect(storyMedia!.height / storyMedia!.width).toBeLessThan(1.35);

  await page.screenshot({ path: "test-results/mobile-gauntlet-home-390.png", fullPage: true });
});

import { expect, test } from "@playwright/test";

const heroVideoUrl =
  "https://www.macsdigitalmedia.com/wp-content/uploads/2025/04/6015791_Business_Office_1280x720.webm";

test("homepage passes the primary Krug trunk test at 1280 by 720", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/");

  const hero = page.locator(".hero");
  const primaryActions = page.getByLabel("Primary actions");
  const servicePrinciples = page.getByLabel("Service principles");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Your organization does not need another chatbot",
  );
  await expect(page.locator(".hero__lede")).toBeVisible();
  await expect(
    primaryActions.getByRole("link", { name: /apply for a washington founding spot/i }),
  ).toBeVisible();
  await expect(primaryActions.getByRole("link", { name: /see the system work/i })).toBeVisible();
  await expect(servicePrinciples.getByText("Human approval where it matters", { exact: true })).toBeVisible();
  await expect(servicePrinciples.getByText("Client-owned deployment", { exact: true })).toBeVisible();

  const heroBox = await hero.boundingBox();
  const actionsBox = await primaryActions.boundingBox();
  expect(heroBox).not.toBeNull();
  expect(actionsBox).not.toBeNull();
  expect(heroBox?.height ?? 0).toBeGreaterThanOrEqual(720 - 84);
  expect((actionsBox?.y ?? 721) + (actionsBox?.height ?? 0)).toBeLessThanOrEqual(720);

  await page.screenshot({ path: "test-results/home-desktop.png", fullPage: true });
});

test("full-page hero uses the approved MACS office video and exposes playback control", async ({ page }) => {
  await page.goto("/");

  const video = page.locator("video.hero__video");
  await expect(video).toBeAttached();
  await expect(video.locator("source")).toHaveAttribute("src", heroVideoUrl);
  await expect(video).toHaveCSS("object-fit", "cover");
  await video.evaluate((element: HTMLVideoElement) => element.pause());

  const control = page.getByRole("button", { name: /play background video/i });
  await expect(control).toBeVisible();
  await control.click();
  await expect(page.getByRole("button", { name: /pause background video/i })).toBeVisible();
});

test("reduced-motion mode removes the autoplaying background", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.locator("video.hero__video")).toBeHidden();
  await expect(page.getByRole("button", { name: /background video/i })).toHaveCount(0);
});

test("mobile navigation and full-page hero work without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menu = page.getByRole("button", { name: /^menu$/i });
  await expect(menu).toBeVisible();
  await menu.click();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await page.getByRole("button", { name: /close menu/i }).click();

  const heroBox = await page.locator(".hero").boundingBox();
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(heroBox).not.toBeNull();
  expect(heroBox?.height ?? 0).toBeGreaterThanOrEqual(844 - 76);
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);

  await page.screenshot({ path: "test-results/home-mobile-viewport.png" });
  await page.screenshot({ path: "test-results/home-mobile.png", fullPage: true });
});

test("founding application preserves native required-field validation", async ({ page }) => {
  await page.goto("/apply");

  await page.getByRole("button", { name: /submit founding application/i }).click();

  const nameField = page.getByLabel("Your name");
  await expect(nameField).toBeFocused();
  expect(await nameField.evaluate((input: HTMLInputElement) => input.validity.valueMissing)).toBe(true);
  await expect(page.getByText(/your application was received/i)).toHaveCount(0);
});

import { expect, test } from "@playwright/test";

async function expectNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
}

test("homepage passes the current Krug trunk test at 1280 by 720", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Make the business feel whole again");
  await expect(page.getByText(/father-and-son team for the parts that stopped working together/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /see if we're a fit/i }).first()).toBeVisible();
  await expect(page.getByText(/Pacific Northwest · Father \+ son · Selective 90-day engagements/i)).toBeVisible();
  await expect(page.locator(".editorial-hero__image")).toBeVisible();
  await expectNoHorizontalOverflow(page);

  await page.screenshot({ path: "test-results/desktop-1280-full.png", fullPage: true });
  await page.screenshot({ path: "test-results/desktop-1280-hero.png" });
});

test("homepage tells the six-beat story with real founder and work proof", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /four situations we step into/i })).toBeVisible();
  await expect(page.getByText("Reset", { exact: true })).toBeVisible();
  await expect(page.getByText("Momentum", { exact: true })).toBeVisible();
  await expect(page.getByText("Scale", { exact: true })).toBeVisible();
  await expect(page.getByText("Launch", { exact: true })).toBeVisible();
  await expect(page.getByText("ASC3ND", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /one watches what has to last/i })).toBeVisible();
  await expect(page.getByText("Agent MAXX", { exact: true })).toBeVisible();
  await expect(page.getByText("Buffer Blaster", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: /small number of businesses at a time/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /Stacy and Stavarai of MACS Digital Media together by the waterfront/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /Stacy and Stavarai, the father-and-son team behind MACS Digital Media/i })).toBeVisible();
});

test("founding launch legacy route remains available during brownfield transformation", async ({ page }) => {
  await page.goto("/founding-launch");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expectNoHorizontalOverflow(page);
});

test("editorial hero uses approved founder media instead of generic background video", async ({ page }) => {
  await page.goto("/");

  const image = page.locator(".editorial-hero__image");
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute("src", /stacy-stavarai-waterfront/);
  await expect(page.locator("video.hero__video")).toHaveCount(0);
  await expect(page.getByRole("button", { name: /background video/i })).toHaveCount(0);
});

test("mobile homepage keeps the primary action and founder story clear", async ({ page }) => {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 430, height: 932 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: /see if we're a fit/i }).first()).toBeVisible();
    await expect(page.locator(".editorial-hero__image")).toBeVisible();
    await expectNoHorizontalOverflow(page);
  }
});

test("reduced-motion mode keeps the complete static experience", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator(".editorial-hero__image")).toBeVisible();
  await expect(page.getByRole("button", { name: /background video/i })).toHaveCount(0);
  await page.screenshot({ path: "test-results/reduced-motion.png", fullPage: true });
});

test("editorial menu keeps language switching and removes the unimplemented theme choice", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /^menu$/i }).click();
  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(navigation).toBeVisible();

  const languageButtons = navigation.locator(".language-toggle button");
  await languageButtons.nth(1).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "es-MX");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Haz que el negocio vuelva a sentirse completo");
  await expect(page.locator(".theme-toggle")).toHaveCount(0);
  await page.screenshot({ path: "test-results/language-spanish.png", fullPage: true });
});

test("mobile navigation closes with Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menu = page.getByRole("button", { name: /^menu$/i });
  await expect(menu).toBeVisible();
  await menu.click();

  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(navigation).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(navigation).toHaveCount(0);
  await expect(menu).toBeFocused();
  await expectNoHorizontalOverflow(page);

  await page.screenshot({ path: "test-results/mobile-390.png", fullPage: true });
});

test("key breakpoints avoid horizontal overflow", async ({ page }) => {
  const viewports = [
    { width: 360, height: 800 },
    { width: 390, height: 844 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await expectNoHorizontalOverflow(page);
    await page.screenshot({
      path: `test-results/breakpoint-${viewport.width}.png`,
      fullPage: viewport.width <= 768,
    });
  }
});

test("Phase 5 design lab exposes three divergent noindex prototype territories", async ({ page }) => {
  const territories = [
    ["long-view", /the long view/i],
    ["two-clocks", /one watches what has to last/i],
    ["confluence", /two currents\. one accountable team/i],
  ] as const;

  for (const [slug, heading] of territories) {
    await page.goto(`/design-lab/${slug}`);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/i);
    await expectNoHorizontalOverflow(page);
    await page.screenshot({ path: `test-results/design-${slug}-1440.png`, fullPage: true });
  }
});

test("founding application provides persistent inline validation", async ({ page }) => {
  await page.goto("/apply");
  await page.getByRole("button", { name: /submit founding application/i }).click();

  const nameField = page.getByLabel("Your name");
  await expect(nameField).toBeFocused();
  await expect(nameField).toHaveAttribute("aria-invalid", "true");
  await expect(page.getByText("Correct the highlighted fields before submitting.")).toBeVisible();
  await expect(page.locator("#name-error")).toContainText("This field is required");
  await expect(page.getByText(/your application was received/i)).toHaveCount(0);

  await page.screenshot({ path: "test-results/form-error.png", fullPage: true });
});

test("Supabase health check fails safely when deployment secrets are absent", async ({ request }) => {
  const response = await request.get("/api/health/supabase");
  const body = await response.json();

  expect(response.status()).toBe(503);
  expect(body).toEqual({ ok: false, service: "supabase", status: "unavailable" });
  expect(JSON.stringify(body)).not.toContain("SUPABASE");
  expect(JSON.stringify(body)).not.toContain("http");
});

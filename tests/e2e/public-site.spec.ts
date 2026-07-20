import { expect, test } from "@playwright/test";

const heroVideoUrl =
  "https://www.macsdigitalmedia.com/wp-content/uploads/2025/04/6015791_Business_Office_1280x720.webm";

async function expectNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
}

test("homepage passes the primary Krug trunk test at 1280 by 720", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/");

  const hero = page.locator(".hero");
  const primaryActions = page.getByLabel("Primary actions");
  const servicePrinciples = page.getByLabel("Service principles");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Own the AI system",
  );
  await expect(page.locator(".hero__lede")).toContainText("In 90 days");
  await expect(
    primaryActions.getByRole("link", { name: /apply for a founding installation/i }),
  ).toBeVisible();
  await expect(primaryActions.getByRole("link", { name: /watch inquiry become follow-up/i })).toBeVisible();
  await expect(servicePrinciples.getByText("Human approval where it matters", { exact: true })).toBeVisible();
  await expect(servicePrinciples.getByText("Documented ownership handoff", { exact: true })).toBeVisible();

  const heroBox = await hero.boundingBox();
  expect(heroBox).not.toBeNull();
  expect(heroBox?.height ?? 0).toBeGreaterThanOrEqual(720 - 84);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({ path: "test-results/desktop-1280-full.png", fullPage: true });
  await page.screenshot({ path: "test-results/desktop-1280-hero.png" });
});

test("homepage makes the outcome, founder story, scope, and guarantee visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /important work is being lost/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /powerful technology should create capability/i })).toBeVisible();
  await expect(page.getByText(/began in a Pacific Northwest basement/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: /two agreed workflows must pass/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /what remains outside the founding scope/i })).toBeVisible();
});

test("founding launch defines scope and client responsibilities", async ({ page }) => {
  await page.goto("/founding-launch");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Install two working AI workflows");
  await expect(page.locator("dt").filter({ hasText: /^One workflow$/ })).toBeVisible();
  await expect(page.locator("dt").filter({ hasText: /^One supported connection$/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /client participation required/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /outside the standardized founding installation/i })).toBeVisible();
});

test("hero keeps branded media in normal and degraded states", async ({ page }) => {
  await page.goto("/");

  const poster = page.locator(".hero__poster");
  const video = page.locator("video.hero__video");

  await expect(poster).toBeVisible();
  await expect(video).toBeAttached();
  await expect(video).toHaveAttribute("poster", "/media/macs-hero-poster.svg");
  await expect(video.locator("source")).toHaveAttribute("src", heroVideoUrl);
  await expect(video).toHaveCSS("object-fit", "cover");
  await expect(page.getByRole("button", { name: /play background video|pause background video/i })).toBeVisible();
});

test("mobile hero separates copy from video at 390 and 430 pixels", async ({ page }) => {
  for (const width of [390, 430]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 932 });
    await page.goto("/");

    const heroContent = page.locator(".hero__content");
    const video = page.locator("video.hero__video");
    const actions = page.getByLabel("Primary actions");
    const primaryAction = actions.getByRole("link", { name: /apply for a founding installation/i });

    const contentBox = await heroContent.boundingBox();
    const videoBox = await video.boundingBox();
    const actionsBox = await actions.boundingBox();
    const primaryActionBox = await primaryAction.boundingBox();

    expect(contentBox).not.toBeNull();
    expect(videoBox).not.toBeNull();
    expect(actionsBox).not.toBeNull();
    expect(primaryActionBox).not.toBeNull();
    expect((videoBox?.y ?? 0)).toBeGreaterThanOrEqual((contentBox?.y ?? 0) + (contentBox?.height ?? 0) - 1);
    expect(videoBox?.width ?? 0).toBeGreaterThanOrEqual(width - 2);
    expect(Math.abs((primaryActionBox?.width ?? 0) - (actionsBox?.width ?? 0))).toBeLessThanOrEqual(1);

    await expect(page.locator(".hero__overlay")).toBeHidden();
    await expect(video).toHaveCSS("aspect-ratio", "16 / 9");
    await expect(video).toHaveCSS("object-fit", "cover");
    await expect(video).toHaveCSS("object-position", "40% 50%");
    await expect(page.getByRole("button", { name: /play background video|pause background video/i })).toBeVisible();
    await expectNoHorizontalOverflow(page);
  }
});

test("reduced-motion mode keeps the static hero identity and removes playback controls", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.locator(".hero__poster")).toBeVisible();
  await expect(page.locator("video.hero__video")).toHaveCSS("opacity", "0");
  await expect(page.getByRole("button", { name: /background video/i })).toHaveCount(0);
  await page.screenshot({ path: "test-results/reduced-motion.png" });
});

test("language and theme controls persist clear interface states", async ({ page }) => {
  await page.goto("/");

  const languageButtons = page.locator(".language-toggle button");
  await languageButtons.nth(1).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "es-MX");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Sé dueño del sistema de IA",
  );
  await expect(page.getByText(/comenzó en un sótano del noroeste del Pacífico/i)).toBeVisible();
  await page.screenshot({ path: "test-results/theme-language-spanish.png" });

  const themeToggle = page.locator(".theme-toggle");
  await themeToggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.screenshot({ path: "test-results/theme-light.png", fullPage: true });

  await themeToggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.screenshot({ path: "test-results/theme-dark.png", fullPage: true });

  await languageButtons.nth(0).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
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

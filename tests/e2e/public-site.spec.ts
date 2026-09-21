import { expect, test, type Page } from "@playwright/test";

const viewports = [
  { width: 320, height: 568 },
  { width: 360, height: 800 },
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 414, height: 896 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1440, height: 900 },
] as const;

const publicRoutes = [
  "/",
  "/programs",
  "/work",
  "/story",
  "/team",
  "/built-here",
  "/apply",
  "/book",
  "/privacy",
] as const;

const productRoutes = [
  "/work/buffer-blaster",
  "/work/pare",
  "/work/posta-studio",
  "/work/foundry-fleet",
] as const;

async function expectNoHorizontalOverflow(page: Page) {
  const result = await page.evaluate(() => {
    const clientWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    const offenders = Array.from(document.querySelectorAll<HTMLElement>("body *"))
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName.toLowerCase(),
          id: element.id,
          className: typeof element.className === "string" ? element.className : "",
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
        };
      })
      .filter((item) => item.right > clientWidth + 1 || item.left < -1)
      .sort((a, b) => Math.max(b.right - clientWidth, -b.left) - Math.max(a.right - clientWidth, -a.left))
      .slice(0, 12);

    return { scrollWidth, clientWidth, offenders };
  });

  expect(
    result.scrollWidth,
    `Horizontal overflow: viewport=${result.clientWidth}, scrollWidth=${result.scrollWidth}, offenders=${JSON.stringify(result.offenders)}`,
  ).toBeLessThanOrEqual(result.clientWidth + 1);
}

async function expectRuntimeClean(page: Page, route: string) {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  const onConsole = (message: import("@playwright/test").ConsoleMessage) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  };
  const onPageError = (error: Error) => pageErrors.push(error.message);

  page.on("console", onConsole);
  page.on("pageerror", onPageError);
  await page.goto(route, { waitUntil: "networkidle" });

  expect(pageErrors, `${route} page errors`).toEqual([]);
  expect(consoleErrors, `${route} console errors`).toEqual([]);

  page.off("console", onConsole);
  page.off("pageerror", onPageError);
}

function safeSlug(route: string) {
  return route === "/" ? "home" : route.replace(/^\//, "").replaceAll("/", "--");
}

test("homepage passes the reduced Krug trunk test", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: /a digital partner for non-technical founders/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /tell us what's important/i }).first(),
  ).toBeVisible();
  await expect(page.getByText(/Father \+ son · Built in the Pacific Northwest/i)).toBeVisible();
  await expect(page.locator(".editorial-hero__image")).toBeVisible();
  await expectNoHorizontalOverflow(page);
});

test("homepage presents the approved four-way architecture and current Built Here products", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /four ways to start/i })).toBeVisible();

  const approvedPrograms = ["Reset", "Momentum", "Scale", "Launch"] as const;
  for (const name of approvedPrograms) {
    await expect(page.getByText(name, { exact: true }).first()).toBeVisible();
  }

  await expect(page.getByRole("heading", { name: /^built here$/i })).toBeVisible();
  for (const product of ["Buffer Blaster", "PARÉ", "Posta Studio", "Foundry"]) {
    await expect(page.getByText(product, { exact: true }).first()).toBeVisible();
  }
});

test("work and Built Here pages use current product positioning", async ({ page }) => {
  await page.goto("/work");

  await expect(page.getByRole("heading", { name: "Selected Work", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Built Here", exact: true })).toBeVisible();
  await expect(page.getByText("A content engine for your social media.", { exact: true })).toBeVisible();
  await expect(page.getByText("Design high-level products without the AI slop problem.", { exact: true })).toBeVisible();
  await expect(page.getByText("Automate your entire social media presence.", { exact: true })).toBeVisible();
  await expect(page.getByText("Give your AI agent its own computer.", { exact: true })).toBeVisible();

  await page.goto("/built-here");
  await expect(page.getByText("A content engine for your social media.", { exact: true })).toBeVisible();
  await expect(page.getByText("Design high-level products without the AI slop problem.", { exact: true })).toBeVisible();
  await expect(page.getByText("Automate your entire social media presence.", { exact: true })).toBeVisible();
  await expect(page.getByText("Give your AI agent its own computer.", { exact: true })).toBeVisible();
});

test("Built Here product pages protect screenshot framing", async ({ page }) => {
  for (const route of productRoutes) {
    await page.goto(route);
    const hero = page.locator(".editorial-case-study-hero__media");
    await expect(hero).toBeVisible();
    await expect(hero).toHaveCSS("background-size", "contain");
    await expectNoHorizontalOverflow(page);
  }
});

test("team roles are visible and readable", async ({ page }) => {
  await page.goto("/team");

  const roles = [
    "Founder & Client Relations",
    "eCommerce & Shopify Expert",
    "Digital Project Management / Social Media Strategist",
    "DevOps & Agentic SEO",
    "Systems Thinking / Automations",
  ] as const;

  for (const role of roles) {
    const element = page.getByText(role, { exact: true });
    await expect(element).toBeVisible();
    const size = await element.evaluate((node) => Number.parseFloat(getComputedStyle(node).fontSize));
    expect(size).toBeGreaterThanOrEqual(15);
  }
});

test("simplified intake keeps labels, mobile-safe controls and local validation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/apply");

  await expect(page.getByRole("heading", { level: 1, name: /tell us what’s important/i })).toBeVisible();

  for (const label of [
    "Your name",
    "Email",
    "What do you need help with?",
    "What’s most important right now?",
    "Website or existing setup Optional",
    "Timing",
  ]) {
    await expect(page.getByLabel(label, { exact: false })).toBeVisible();
  }

  const controls = page.locator(".application-form input:not([type=hidden]), .application-form select, .application-form textarea");
  const count = await controls.count();
  for (let index = 0; index < count; index += 1) {
    const control = controls.nth(index);
    if (!(await control.isVisible())) continue;
    const fontSize = await control.evaluate((node) => Number.parseFloat(getComputedStyle(node).fontSize));
    expect(fontSize).toBeGreaterThanOrEqual(16);
  }

  await page.getByRole("button", { name: /send it/i }).click();
  await expect(page.getByText(/review the highlighted fields/i)).toBeVisible();
  await expect(page.locator("#name")).toBeFocused();
  await expectNoHorizontalOverflow(page);
});

test("accessibility is a footer drawer with focus containment and return", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const trigger = page.getByRole("button", { name: /^accessibility$/i });
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();

  const dialog = page.getByRole("dialog", { name: /we want everyone to be able to use our website/i });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("button", { name: /^close$/i })).toBeFocused();

  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("link", { name: /macsdigitalmedia@gmail.com/i })).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expectNoHorizontalOverflow(page);
});

test("standalone accessibility route is retired", async ({ page }) => {
  const response = await page.goto("/accessibility");
  expect(response?.status()).toBe(404);
});

test("mobile navigation closes with Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menu = page.getByRole("button", { name: /^menu$/i });
  await menu.click();

  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(navigation).toBeVisible();
  await expect(navigation.getByRole("link", { name: /tell us what's important/i })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(navigation).toHaveCount(0);
  await expect(menu).toBeFocused();
  await expectNoHorizontalOverflow(page);
});

test("all primary public routes pass the full viewport overflow matrix", async ({ page }) => {
  for (const route of publicRoutes) {
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto(route);
      await expectNoHorizontalOverflow(page);
    }
  }
});

test("key routes have no browser runtime errors", async ({ page }) => {
  for (const route of [...publicRoutes, ...productRoutes]) {
    await expectRuntimeClean(page, route);
  }
});

test("visual review artifacts cover phone, tablet and desktop", async ({ page }) => {
  test.setTimeout(120_000);

  const proofViewports = [
    { width: 390, height: 844, label: "phone" },
    { width: 768, height: 1024, label: "tablet" },
    { width: 1440, height: 900, label: "desktop" },
  ] as const;

  for (const route of [...publicRoutes, ...productRoutes]) {
    for (const viewport of proofViewports) {
      await page.setViewportSize(viewport);
      await page.goto(route, { waitUntil: "load" });
      await expectNoHorizontalOverflow(page);
      await page.screenshot({
        path: `test-results/visual/${viewport.label}/${safeSlug(route)}.png`,
        fullPage: true,
      });
    }
  }
});

test("reduced-motion mode keeps the complete static experience", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator(".editorial-hero__image")).toBeVisible();
  await expect(page.getByRole("heading", { name: /four ways to start/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /^built here$/i })).toBeVisible();
});

test("book route degrades to verified email when no booking URL is configured", async ({ page }) => {
  await page.goto("/book");

  await expect(page.getByRole("heading", { name: /book a conversation/i })).toBeVisible();
  await expect(page.getByText(/we’ll figure out the best next step together/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /email macs/i })).toHaveAttribute(
    "href",
    "mailto:macsdigitalmedia@gmail.com",
  );
});

test("retired public routes return 404", async ({ page }) => {
  for (const route of ["/notes", "/demos", "/maxx", "/website-rescue", "/small-business"]) {
    const response = await page.goto(route);
    expect(response?.status(), `${route} should be retired`).toBe(404);
  }
});

test("retired founding launch route still points to Programs", async ({ page }) => {
  await page.goto("/founding-launch");
  await expect(page).toHaveURL(/\/programs$/);
  await expect(page.getByRole("heading", { level: 1, name: /four ways to start/i })).toBeVisible();
  await expectNoHorizontalOverflow(page);
});

test("Phase 5 design lab remains noindex", async ({ page }) => {
  for (const slug of ["long-view", "two-clocks", "confluence"]) {
    await page.goto(`/design-lab/${slug}`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/i);
    await expectNoHorizontalOverflow(page);
  }
});

test("Supabase health check fails safely when deployment secrets are absent", async ({ request }) => {
  const response = await request.get("/api/health/supabase");
  const body = await response.json();

  expect(response.status()).toBe(503);
  expect(body).toEqual({ ok: false, service: "supabase", status: "unavailable" });
  expect(JSON.stringify(body)).not.toContain("SUPABASE");
  expect(JSON.stringify(body)).not.toContain("http");
});

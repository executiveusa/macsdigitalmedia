import { expect, test } from "@playwright/test";

async function expectNoHorizontalOverflow(page: import("@playwright/test").Page) {
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

test("homepage passes the reduced Krug trunk test", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: /a digital partner for non-technical founders/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /tell us what's important/i }).first(),
  ).toBeVisible();
  await expect(
    page.getByText(/Father \+ son · Built in the Pacific Northwest/i),
  ).toBeVisible();
  await expect(page.locator(".editorial-hero__image")).toBeVisible();
  await expectNoHorizontalOverflow(page);
});

test("homepage presents the approved four-way architecture and reduced proof path", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /four ways to start/i })).toBeVisible();

  const approvedPrograms = [
    ["Reset", "Simplify what got complicated."],
    ["Momentum", "Stay visible. Build in public."],
    ["Scale", "The idea is working. Grow without complexity."],
    ["Launch", "Bring your next idea or project to market."],
  ] as const;

  for (const [name, line] of approvedPrograms) {
    await expect(page.getByText(name, { exact: true }).first()).toBeVisible();
    await expect(page.getByText(line, { exact: true }).first()).toBeVisible();
  }

  await expect(page.getByRole("heading", { name: /start with what matters most/i })).toBeVisible();
  await expect(page.getByText("We stay involved as you grow.", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: /see the work/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /two perspectives help your business/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /^built here$/i })).toBeVisible();

  for (const product of ["Buffer Blaster", "PARÉ", "Posta Studio", "Foundry"]) {
    await expect(page.getByText(product, { exact: true }).first()).toBeVisible();
  }
});

test("work page separates collaborations from Built Here without retired projects", async ({ page }) => {
  await page.goto("/work");

  await expect(page.getByRole("heading", { name: "Selected Work", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Built Here", exact: true })).toBeVisible();

  for (const name of ["Taste of Nawlins × MACS", "ASC3ND × MACS", "Buffer Blaster", "PARÉ", "Posta Studio", "Foundry"]) {
    await expect(page.getByText(name, { exact: true }).first()).toBeVisible();
  }

  await expect(page.getByText(/Sweet/i)).toHaveCount(0);
  await expect(page.getByText(/Fish On/i)).toHaveCount(0);

  await page.goto("/work/asc3nd");
  await expect(page.getByRole("heading", { level: 1, name: "ASC3ND" })).toBeVisible();
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

test("editorial hero uses approved founder media", async ({ page }) => {
  await page.goto("/");

  const image = page.locator(".editorial-hero__image");
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute("src", /stacy-stavarai-waterfront/);
  await expect(page.locator("video.hero__video")).toHaveCount(0);
});

test("mobile homepage keeps the primary action and founder story clear", async ({ page }) => {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 430, height: 932 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("link", { name: /tell us what's important/i }).first(),
    ).toBeVisible();
    await expect(page.locator(".editorial-hero__image")).toBeVisible();
    await expectNoHorizontalOverflow(page);
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

test("editorial menu keeps language switching and no theme control", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /^menu$/i }).click();
  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(navigation).toBeVisible();

  const languageButtons = navigation.locator(".language-toggle button");
  await languageButtons.nth(1).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "es-MX");
  await expect(page.locator(".theme-toggle")).toHaveCount(0);
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

test("key breakpoints avoid horizontal overflow", async ({ page }) => {
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
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await expectNoHorizontalOverflow(page);
  }
});

test("Phase 5 design lab remains noindex", async ({ page }) => {
  for (const slug of ["long-view", "two-clocks", "confluence"]) {
    await page.goto(`/design-lab/${slug}`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/i);
    await expectNoHorizontalOverflow(page);
  }
});

test("apply page is reduced to one booking action", async ({ page }) => {
  await page.goto("/apply");

  await expect(
    page.getByRole("heading", { level: 1, name: /tell us what’s important/i }),
  ).toBeVisible();
  const booking = page.getByRole("link", { name: /book a conversation/i });
  await expect(booking).toHaveAttribute("href", "/book");
});

test("book route degrades to verified email when no booking URL is configured", async ({ page }) => {
  await page.goto("/book");

  await expect(page.getByRole("heading", { name: /book a conversation/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /email macs/i })).toHaveAttribute(
    "href",
    "mailto:macsdigitalmedia@gmail.com",
  );
});

test("Supabase health check fails safely when deployment secrets are absent", async ({ request }) => {
  const response = await request.get("/api/health/supabase");
  const body = await response.json();

  expect(response.status()).toBe(503);
  expect(body).toEqual({ ok: false, service: "supabase", status: "unavailable" });
  expect(JSON.stringify(body)).not.toContain("SUPABASE");
  expect(JSON.stringify(body)).not.toContain("http");
});

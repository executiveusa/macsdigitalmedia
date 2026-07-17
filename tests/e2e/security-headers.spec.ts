import { expect, test } from "@playwright/test";

test("public routes return the baseline security headers", async ({ request }) => {
  const response = await request.get("/");

  expect(response.ok()).toBe(true);
  expect(response.headers()["strict-transport-security"]).toBe(
    "max-age=63072000; includeSubDomains; preload",
  );
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
  expect(response.headers()["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(response.headers()["permissions-policy"]).toBe(
    "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  );
});

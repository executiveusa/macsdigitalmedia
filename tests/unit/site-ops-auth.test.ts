import assert from "node:assert/strict";
import test from "node:test";

import {
  isAuthorizedSiteAgent,
  readAgentId,
  readBearerToken,
  readIdempotencyKey,
  safeTokenEqual,
} from "../../lib/site-ops-auth.ts";

const validToken = "a".repeat(64);

test("constant-time token comparison accepts only the configured token", () => {
  assert.equal(safeTokenEqual(validToken, validToken), true);
  assert.equal(safeTokenEqual("b".repeat(64), validToken), false);
  assert.equal(safeTokenEqual("", validToken), false);
  assert.equal(safeTokenEqual(validToken, "short"), false);
});

test("bearer parser is case-insensitive and trims the token", () => {
  assert.equal(readBearerToken(new Headers({ authorization: `bearer   ${validToken}  ` })), validToken);
  assert.equal(readBearerToken(new Headers()), "");
  assert.equal(readBearerToken(new Headers({ authorization: `Basic ${validToken}` })), "");
});

test("authorization can be evaluated without reading global process state", () => {
  const authorizedHeaders = new Headers({ authorization: `Bearer ${validToken}` });
  const unauthorizedHeaders = new Headers({ authorization: `Bearer ${"b".repeat(64)}` });

  assert.equal(isAuthorizedSiteAgent(authorizedHeaders, validToken), true);
  assert.equal(isAuthorizedSiteAgent(unauthorizedHeaders, validToken), false);
  assert.equal(isAuthorizedSiteAgent(new Headers(), validToken), false);
});

test("idempotency keys require a bounded safe character set", () => {
  assert.equal(
    readIdempotencyKey(new Headers({ "idempotency-key": "ZTE-20260716-0001:announcement" })),
    "ZTE-20260716-0001:announcement",
  );
  assert.equal(readIdempotencyKey(new Headers({ "idempotency-key": "too-short" })), null);
  assert.equal(readIdempotencyKey(new Headers({ "idempotency-key": "unsafe key with spaces" })), null);
  assert.equal(readIdempotencyKey(new Headers()), null);
});

test("agent identity uses safe values and falls back to Agent-MAXX", () => {
  assert.equal(readAgentId(new Headers({ "x-agent-id": "MAXX.production-01" })), "MAXX.production-01");
  assert.equal(readAgentId(new Headers({ "x-agent-id": "bad agent id" })), "Agent-MAXX");
  assert.equal(readAgentId(new Headers()), "Agent-MAXX");
});

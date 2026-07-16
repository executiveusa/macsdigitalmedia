import { createHash, timingSafeEqual } from "node:crypto";

const idempotencyPattern = /^[A-Za-z0-9._:-]{16,128}$/;
const agentIdPattern = /^[A-Za-z0-9._:-]{2,80}$/;

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

export function safeTokenEqual(candidate: string, expected: string) {
  if (!candidate || !expected || expected.length < 32) return false;
  return timingSafeEqual(digest(candidate), digest(expected));
}

export function readBearerToken(headers: Headers) {
  const authorization = headers.get("authorization") || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || "";
}

export function isAuthorizedSiteAgent(headers: Headers, expectedToken = process.env.SITE_AGENT_TOKEN || "") {
  return safeTokenEqual(readBearerToken(headers), expectedToken);
}

export function readIdempotencyKey(headers: Headers) {
  const value = headers.get("idempotency-key")?.trim() || "";
  return idempotencyPattern.test(value) ? value : null;
}

export function readAgentId(headers: Headers) {
  const value = headers.get("x-agent-id")?.trim() || "Agent-MAXX";
  return agentIdPattern.test(value) ? value : "Agent-MAXX";
}

import assert from "node:assert/strict"; import test from "node:test";
import { isAuthorizedSiteAgent, readAgentId, readBearerToken, readIdempotencyKey, safeTokenEqual } from "../../lib/site-ops-auth.ts";
const validToken="a".repeat(64);
test("constant-time token comparison",()=>{assert.equal(safeTokenEqual(validToken,validToken),true);assert.equal(safeTokenEqual("b".repeat(64),validToken),false);assert.equal(safeTokenEqual("",validToken),false);assert.equal(safeTokenEqual(validToken,"short"),false)});
test("bearer parser",()=>{assert.equal(readBearerToken(new Headers({authorization:`bearer   ${validToken}  `})),validToken);assert.equal(readBearerToken(new Headers()),"");assert.equal(readBearerToken(new Headers({authorization:`Basic ${validToken}`})),"")});
test("authorization",()=>{assert.equal(isAuthorizedSiteAgent(new Headers({authorization:`Bearer ${validToken}`}),validToken),true);assert.equal(isAuthorizedSiteAgent(new Headers({authorization:`Bearer ${"b".repeat(64)}`}),validToken),false)});
test("idempotency",()=>{assert.equal(readIdempotencyKey(new Headers({"idempotency-key":"ZTE-20260716-0001:announcement"})),"ZTE-20260716-0001:announcement");assert.equal(readIdempotencyKey(new Headers({"idempotency-key":"too-short"})),null)});
test("agent identity",()=>{assert.equal(readAgentId(new Headers({"x-agent-id":"MAXX.production-01"})),"MAXX.production-01");assert.equal(readAgentId(new Headers({"x-agent-id":"bad agent id"})),"Agent-MAXX")});

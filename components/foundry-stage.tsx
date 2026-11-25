"use client";

import { m, useReducedMotion } from "framer-motion";
import { useState } from "react";

type AppView = "browser" | "terminal" | "approvals";

type QueueItem = {
  id: string;
  label: string;
  detail: string;
  status: "pending" | "approved";
};

const initialQueue: QueueItem[] = [
  {
    id: "ads",
    label: "Pause 2 wasted search terms",
    detail: "Matched stop-loss rule: $0 conversions after 40 clicks",
    status: "pending",
  },
  {
    id: "lead",
    label: "Send 60-second lead reply draft",
    detail: "New Seattle roof inspection inquiry from web form",
    status: "pending",
  },
  {
    id: "llms",
    label: "Publish refreshed /llms.txt",
    detail: "Synced updated service areas and verified contact email",
    status: "approved",
  },
];

const pillars = [
  {
    title: "Private Client VM",
    body: "Runs on your own isolated machine, never a shared multi-tenant bot farm.",
  },
  {
    title: "Real Browser Execution",
    body: "Navigates dashboards, audits live sites, and fills forms like a trained operator.",
  },
  {
    title: "Human Takeover Anytime",
    body: "Watch the live screen and step in with one click whenever you want control.",
  },
  {
    title: "Hard Approval Gates",
    body: "Spending money, sending outreach, or publishing changes always waits for your sign-off.",
  },
  {
    title: "Model-Agnostic",
    body: "Connects to Gemini, Claude, OpenAI, or open models without single-vendor lock-in.",
  },
  {
    title: "Installed & Owned by You",
    body: "MACS configures every workflow around your SOPs and hands you full ownership.",
  },
];

export function FoundryStage() {
  const reduceMotion = useReducedMotion();
  const [activeApp, setActiveApp] = useState<AppView>("browser");
  const [queue, setQueue] = useState<QueueItem[]>(initialQueue);

  const toggleItem = (id: string) => {
    setQueue((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "approved" ? "pending" : "approved" }
          : item,
      ),
    );
  };

  return (
    <div className="foundry-showcase">
      <div className="foundry-desktop" role="region" aria-label="Interactive Foundry operator desktop preview">
        <div className="foundry-topbar">
          <div className="foundry-topbar__left">
            <span className="foundry-topbar__mark" aria-hidden="true">■</span>
            <span className="foundry-topbar__title">Foundry OS</span>
            <span className="foundry-topbar__vm">client-vm-seattle-01</span>
          </div>
          <div className="foundry-topbar__right">
            <span className="foundry-topbar__gate">Human Gate: Active</span>
            <span className="foundry-topbar__preview-tag">Interactive Preview</span>
          </div>
        </div>

        <div className="foundry-canvas">
          <div className="foundry-sidebar" role="tablist" aria-label="Foundry desktop applications">
            <button
              type="button"
              role="tab"
              aria-selected={activeApp === "browser"}
              className={`foundry-icon-btn${activeApp === "browser" ? " is-active" : ""}`}
              onClick={() => setActiveApp("browser")}
            >
              <span className="foundry-icon-btn__glyph" aria-hidden="true">🌐</span>
              <span>Browser</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeApp === "terminal"}
              className={`foundry-icon-btn${activeApp === "terminal" ? " is-active" : ""}`}
              onClick={() => setActiveApp("terminal")}
            >
              <span className="foundry-icon-btn__glyph" aria-hidden="true">&gt;_</span>
              <span>Terminal</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeApp === "approvals"}
              className={`foundry-icon-btn${activeApp === "approvals" ? " is-active" : ""}`}
              onClick={() => setActiveApp("approvals")}
            >
              <span className="foundry-icon-btn__glyph" aria-hidden="true">✓</span>
              <span>Approvals</span>
            </button>
          </div>

          <div className="foundry-window-area">
            {activeApp === "browser" ? (
              <div className="foundry-window">
                <div className="foundry-window__chrome">
                  <div className="foundry-window__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="foundry-window__url">https://client-dashboard.local/ads-health</div>
                  <span className="foundry-human-tag">
                    <span aria-hidden="true">↖</span> Human Takeover Ready
                  </span>
                </div>
                <div className="foundry-browser-body">
                  <div className="foundry-browser-head">
                    <div>
                      <p className="foundry-browser-kicker">Autonomous Daily Check</p>
                      <h3>Seattle Service Campaign · Live Guardrail Audit</h3>
                    </div>
                    <span className="foundry-status-pill foundry-status-pill--ok">Isolated VM · Clean</span>
                  </div>
                  <div className="foundry-metrics">
                    <div className="foundry-metric">
                      <span>Lead Response</span>
                      <strong>&lt; 60 sec</strong>
                    </div>
                    <div className="foundry-metric">
                      <span>Wasted Terms Flagged</span>
                      <strong>2 queued</strong>
                    </div>
                    <div className="foundry-metric">
                      <span>Unapproved Spend</span>
                      <strong>$0 (Locked)</strong>
                    </div>
                  </div>
                  <div className="foundry-browser-footer">
                    <span>Operator paused at human approval gate. Click Approvals to review queued actions.</span>
                    <button
                      type="button"
                      className="foundry-inline-action"
                      onClick={() => setActiveApp("approvals")}
                    >
                      Open Approval Queue →
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {activeApp === "terminal" ? (
              <div className="foundry-window foundry-window--terminal">
                <div className="foundry-window__chrome">
                  <div className="foundry-window__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="foundry-window__url">foundry@client-vm-seattle-01:~</div>
                  <span className="foundry-human-tag">Isolated Shell</span>
                </div>
                <pre className="foundry-terminal-body">
{`$ foundry status --workspace client-owned
VM:       client-vm-seattle-01 (running · private network)
Browser:  Chromium 134 headless + live takeover enabled
Policy:   DRAFT_AND_QUEUE_ONLY (spend & outreach gated)

$ foundry run daily-ads-audit --mode safe
[ok] Checked 14 search terms against stop-loss rules
[ok] Flagged 2 zero-conversion terms -> queued for human review
[ok] Verified landing page load & mobile form submission
[hold] Waiting for owner approval in Approvals tab...`}
                </pre>
              </div>
            ) : null}

            {activeApp === "approvals" ? (
              <div className="foundry-window">
                <div className="foundry-window__chrome">
                  <div className="foundry-window__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="foundry-window__url">foundry://approvals/queue</div>
                  <span className="foundry-human-tag">Click to Toggle</span>
                </div>
                <div className="foundry-approvals-body">
                  {queue.map((item) => (
                    <div className="foundry-approval-row" key={item.id}>
                      <div>
                        <strong>{item.label}</strong>
                        <p>{item.detail}</p>
                      </div>
                      <button
                        type="button"
                        className={`foundry-approve-btn${item.status === "approved" ? " is-approved" : ""}`}
                        onClick={() => toggleItem(item.id)}
                      >
                        {item.status === "approved" ? "✓ Approved" : "Approve"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <m.div
              className="foundry-cursor-badge"
              aria-hidden="true"
              animate={reduceMotion ? undefined : { x: [0, 10, 0], y: [0, -6, 0] }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
              }
            >
              ↖ Human
            </m.div>
          </div>
        </div>
      </div>

      <div className="foundry-pillars" aria-label="Foundry core capabilities">
        {pillars.map((pillar) => (
          <div className="foundry-pillar" key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

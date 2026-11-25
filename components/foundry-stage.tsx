"use client";

import { m, useReducedMotion } from "framer-motion";
import { useState } from "react";

type AppView = "daily" | "activity" | "approvals";

type QueueItem = {
  id: string;
  label: string;
  detail: string;
  status: "pending" | "approved";
};

const initialQueue: QueueItem[] = [
  {
    id: "ads",
    label: "Pause 2 ads wasting money",
    detail: "Spent $64 this week with zero phone calls or form leads",
    status: "pending",
  },
  {
    id: "lead",
    label: "Text back Maria about her quote",
    detail: "Friendly reply drafted 42 seconds after she submitted your form",
    status: "pending",
  },
  {
    id: "recap",
    label: "Send Friday leads recap email",
    detail: "Plain-English summary of this week's calls, bookings, and ad spend",
    status: "approved",
  },
];

const activityFeed = [
  {
    time: "8:02 AM",
    status: "Done",
    text: "Checked your Google and Meta ads. Spotted 2 search terms wasting budget and queued them for your review.",
  },
  {
    time: "9:15 AM",
    status: "Done",
    text: "Saw a new quote request from Maria while you were on a job. Drafted a helpful reply in 42 seconds.",
  },
  {
    time: "11:30 AM",
    status: "Done",
    text: "Updated your customer sheet with 3 new inquiries and checked that your website contact form works on mobile.",
  },
  {
    time: "Now",
    status: "Waiting",
    text: "Paused before spending money or texting any customer. Open Your Approvals to give the thumbs-up.",
  },
];

const pillars = [
  {
    title: "Its Own Private Computer",
    body: "Your helper works on a separate computer just for your business, never mixed with other companies.",
  },
  {
    title: "Handles the Boring Click-Work",
    body: "Checks ad accounts, replies to new leads, updates spreadsheets, and fills repetitive forms automatically.",
  },
  {
    title: "Watch Live or Jump In",
    body: "Look at the screen anytime and take over with one click, just like looking over a teammate's shoulder.",
  },
  {
    title: "Asks Before Spending or Sending",
    body: "Drafts the work and waits for your thumbs-up before spending a dollar or texting a customer.",
  },
  {
    title: "Always Uses the Best AI",
    body: "Upgrades cleanly as AI gets smarter, so your business is never stuck on outdated software.",
  },
  {
    title: "Set Up Once. Yours to Keep.",
    body: "MACS sets it up around how you already work, and you keep full ownership and control.",
  },
];

export function FoundryStage() {
  const reduceMotion = useReducedMotion();
  const [activeApp, setActiveApp] = useState<AppView>("daily");
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
      <div
        className="foundry-desktop"
        role="region"
        aria-label="Interactive Foundry helper computer preview"
      >
        <div className="foundry-topbar">
          <div className="foundry-topbar__left">
            <span className="foundry-topbar__mark" aria-hidden="true">■</span>
            <span className="foundry-topbar__title">Foundry</span>
            <span className="foundry-topbar__vm">Your Private Work Computer</span>
          </div>
          <div className="foundry-topbar__right">
            <span className="foundry-topbar__gate">Asks Before Sending</span>
            <span className="foundry-topbar__preview-tag">Interactive Preview</span>
          </div>
        </div>

        <div className="foundry-canvas">
          <div className="foundry-sidebar" role="tablist" aria-label="Foundry helper views">
            <button
              type="button"
              role="tab"
              aria-selected={activeApp === "daily"}
              className={`foundry-icon-btn${activeApp === "daily" ? " is-active" : ""}`}
              onClick={() => setActiveApp("daily")}
            >
              <span className="foundry-icon-btn__glyph" aria-hidden="true">☀️</span>
              <span>Daily Check</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeApp === "activity"}
              className={`foundry-icon-btn${activeApp === "activity" ? " is-active" : ""}`}
              onClick={() => setActiveApp("activity")}
            >
              <span className="foundry-icon-btn__glyph" aria-hidden="true">📋</span>
              <span>Activity</span>
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
            {activeApp === "daily" ? (
              <div className="foundry-window">
                <div className="foundry-window__chrome">
                  <div className="foundry-window__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="foundry-window__url">Morning Business Check · Ads & Leads</div>
                  <span className="foundry-human-tag">
                    <span aria-hidden="true">↖</span> You Stay in Charge
                  </span>
                </div>
                <div className="foundry-browser-body">
                  <div className="foundry-browser-head">
                    <div>
                      <p className="foundry-browser-kicker">What Your Helper Checked Today</p>
                      <h3>Ad Spend, Website Forms &amp; New Customer Leads</h3>
                    </div>
                    <span className="foundry-status-pill foundry-status-pill--ok">
                      All Healthy · Waiting on You
                    </span>
                  </div>
                  <div className="foundry-metrics">
                    <div className="foundry-metric">
                      <span>Lead Reply Speed</span>
                      <strong>Under 60 sec</strong>
                    </div>
                    <div className="foundry-metric">
                      <span>Wasted Ads Caught</span>
                      <strong>2 ready to pause</strong>
                    </div>
                    <div className="foundry-metric">
                      <span>Spent Without Asking</span>
                      <strong>$0 (Locked)</strong>
                    </div>
                  </div>
                  <div className="foundry-browser-footer">
                    <span>
                      Nothing changes until you say yes. Click Approvals to review what is waiting.
                    </span>
                    <button
                      type="button"
                      className="foundry-inline-action"
                      onClick={() => setActiveApp("approvals")}
                    >
                      Review Approvals →
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {activeApp === "activity" ? (
              <div className="foundry-window">
                <div className="foundry-window__chrome">
                  <div className="foundry-window__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="foundry-window__url">Today&apos;s Work Log · Plain English</div>
                  <span className="foundry-human-tag">No Tech Jargon</span>
                </div>
                <div className="foundry-approvals-body">
                  {activityFeed.map((item) => (
                    <div className="foundry-approval-row" key={item.time}>
                      <div>
                        <strong>
                          {item.time} · {item.status}
                        </strong>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                  <div className="foundry-window__url">Your Approvals · Click to Try</div>
                  <span className="foundry-human-tag">One-Click Control</span>
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
              ↖ Owner
            </m.div>
          </div>
        </div>
      </div>

      <div className="foundry-pillars" aria-label="What Foundry handles for your business">
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

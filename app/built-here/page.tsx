import type { Metadata } from "next";
import Link from "next/link";
import { RollingTextLink } from "@/components/motion";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Built Here",
  description:
    "In-house AI and creative systems built by MACS Digital Media and installed for customers.",
};

export default async function BuiltHerePage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const items = [
    {
      id: "buffer-blaster",
      name: "Buffer Blaster",
      line: "A content engine for your social media and UGC ads.",
      support:
        "Turns real voice notes, job-site photos, and offers into ready-to-approve posts and ad variations without paying recurring SaaS fees.",
      href: "/work/buffer-blaster",
    },
    {
      id: "pare",
      name: "PARÉ",
      line: "High-craft product and web design without the AI slop problem.",
      support:
        "Our internal design review and component discipline that audits layout, mobile usability, contrast, and security before any client site goes live.",
      href: "/work/pare",
    },
    {
      id: "posta-studio",
      name: "Posta Studio",
      line: "Automated social publishing installed around your brand.",
      support:
        "Schedules, formats, and distributes approved creative across channels so your business stays visible every week with minimal owner time.",
      href: "/work/posta-studio",
    },
    {
      id: "foundry",
      name: "Foundry",
      line: "Give your AI operator its own private computer.",
      support:
        "Client-owned agent infrastructure for 60-second lead capture, inbox triage, and automated reporting with strict human approval gates.",
      href: "/work/foundry-fleet",
    },
  ] as const;

  return (
    <div className="editorial-page editorial-page--blue">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <div>
            <h1>{es ? "Hecho aquí." : "Built Here."}</h1>
            <p>
              {es
                ? "Sistemas propios que construimos internamente e instalamos bajo propiedad total de cada cliente."
                : "Systems we build in-house, then install and configure under your ownership so you stop renting fragile SaaS stacks."}
            </p>
          </div>
        </header>

        {items.map((item) => (
          <section className="editorial-built-detail" id={item.id} key={item.id}>
            <h2>{item.name}</h2>
            <div>
              <p>
                <strong>{item.line}</strong>
              </p>
              <p>{item.support}</p>
              <p style={{ marginTop: "0.9rem" }}>
                <Link className="macs-underline-cta" href={item.href}>
                  <span>{es ? "Ver producto" : "View product"}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </p>
            </div>
          </section>
        ))}

        <div style={{ marginTop: "3rem" }}>
          <RollingTextLink
            href="/apply"
            label={es ? "Cuéntanos qué es importante" : "Tell us what's important"}
            className="macs-btn macs-btn--primary"
          />
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Built Here",
  description: "Products built by MACS Digital Media.",
};

export default async function BuiltHerePage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const items = [
    {
      id: "buffer-blaster",
      name: "Buffer Blaster",
      line: "A content engine for your social media.",
      support: "Create UGC ads and media at scale without expensive lock-in subscriptions. Pay once, we install it, and you own it.",
      href: "/work/buffer-blaster",
    },
    {
      id: "pare",
      name: "PARÉ",
      line: "Design high-level products without the AI slop problem.",
      href: "/work/pare",
    },
    {
      id: "posta-studio",
      name: "Posta Studio",
      line: "Automate your entire social media presence.",
      href: "/work/posta-studio",
    },
    {
      id: "foundry",
      name: "Foundry",
      line: "Give your AI agent its own computer.",
      href: "/work/foundry-fleet",
    },
  ] as const;

  return (
    <div className="editorial-page editorial-page--blue">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <h1>{es ? "Hecho aquí" : "Built Here"}</h1>
        </header>

        {items.map((item, index) => (
          <Reveal intensity="strong" key={item.id}>
          <section className="editorial-built-detail" id={item.id}>
            <span className="editorial-built__index">{String(index + 1).padStart(2, "0")}</span>
            <h2>{item.name}</h2>
            <div>
              <p><strong>{item.line}</strong></p>
              {"support" in item ? <p>{item.support}</p> : null}
              <p>
                <Link className="editorial-link editorial-link--light" href={item.href}>
                  View project <span aria-hidden="true">↗</span>
                </Link>
              </p>
            </div>
          </section>
          </Reveal>
        ))}

        <Link className="editorial-link editorial-link--light" href="/apply">
          {es ? "Cuéntanos qué es importante" : "Tell us what's important"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}

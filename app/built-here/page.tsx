import type { Metadata } from "next";
import Link from "next/link";
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
      line: "Own the system. Keep creating.",
      support: "An open-source alternative to Buffer, built for businesses that want more control and fewer recurring subscriptions.",
      href: "/work/buffer-blaster",
    },
    {
      id: "pare",
      name: "PARÉ",
      line: "Design without designers.",
      href: "/work/pare",
    },
    {
      id: "posta-studio",
      name: "Posta Studio",
      line: "One calendar. Every channel.",
      href: "/work/posta-studio",
    },
    {
      id: "foundry",
      name: "Foundry",
      line: "Virtual computers for your AI agents.",
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
          <section className="editorial-built-detail" id={item.id} key={item.id}>
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
        ))}

        <Link className="editorial-link editorial-link--light" href="/apply">
          {es ? "Cuéntanos qué es importante" : "Tell us what's important"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}

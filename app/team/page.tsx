import type { Metadata } from "next";
import { RollingTextLink } from "@/components/motion";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the senior Seattle father-and-son team and specialists behind MACS Digital Media.",
};

const people = [
  {
    name: "Stacy McSwain",
    role: "Founder & Client Relations",
    focus:
      "Leads client strategy, plain-English alignment, and long-term ownership so every engagement stays tied to real business goals.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_33irX78ICVwRYWpFZ5l6a5vZbf5/hf_20260924_075446_e562bcfc-005d-42e7-a103-01f56e03f6c4.png",
    imagePosition: "50% 25%",
  },
  {
    name: "Stavarai McSwain",
    role: "Co-Founder · eCommerce & Shopify",
    focus:
      "Runs modern storefront builds, conversion UX, and hands-on operator perspective shaped by running PostaTees.",
    image: "/team/stavarai.jpg",
    imagePosition: "50% 15%",
  },
  {
    name: "Ivette",
    role: "Digital Project Management & Social Strategy",
    focus:
      "Keeps weekly content calendars, client communication, and brand voice moving on schedule without owner bottlenecks.",
    image:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_33irX78ICVwRYWpFZ5l6a5vZbf5/3efe9721-ff61-40dd-bb77-ae11fa385f25.jpg",
    imagePosition: "50% 25%",
  },
  {
    name: "Akash",
    role: "Performance Marketing · Google & Meta Ads",
    focus:
      "Builds and optimizes paid acquisition campaigns with strict stop-loss guardrails and clear cost-per-lead accountability.",
    image: "/team/akash.jpg",
    imagePosition: "50% 25%",
  },
  {
    name: "Jeremy",
    role: "Systems Architecture & AI Automations",
    focus:
      "Installs client-owned AI workflows, 60-second lead follow-up, and clean operational plumbing behind the scenes.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_33irX78ICVwRYWpFZ5l6a5vZbf5/hf_20260924_075933_350b1e07-44bc-4bac-a252-95d4fcf359ba.png",
    imagePosition: "50% 25%",
  },
];

export default async function TeamPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return (
    <div className="macs-team-page">
      <div className="editorial-shell">
        <header className="macs-team-intro">
          <h1>{es ? "Conoce al equipo." : "Meet the team."}</h1>
          <p>
            {es
              ? "Un equipo compacto y senior basado en Seattle. Hablas directo con las personas que diseñan, lanzan y miden tu crecimiento."
              : "A tight, senior Seattle team. You work directly with the people who design your site, manage your ad spend, and build your automations."}
          </p>
        </header>

        <section className="macs-team-grid" aria-label="MACS team roster">
          {people.map((person) => (
            <article className="macs-team-card" key={person.name}>
              <div
                className="macs-team-card__photo"
                role="img"
                aria-label={`${person.name}, ${person.role}`}
                style={{
                  backgroundImage: `url("${person.image}")`,
                  backgroundPosition: person.imagePosition,
                }}
              />
              <div className="macs-team-card__body">
                <h2>{person.name}</h2>
                <p className="macs-team-card__role">{person.role}</p>
                <p className="macs-team-card__focus">{person.focus}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="macs-team-cta">
          <p style={{ margin: 0, maxWidth: "36rem" }}>
            {es
              ? "¿Listo para trabajar con un solo equipo responsable?"
              : "Want one accountable team handling your site, ads, and lead follow-up?"}
          </p>
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

import type { Metadata } from "next";
import styles from "./team.module.css";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Meet the MACS Digital Media team.",
};

const people = [
  {
    index: "",
    name: "Stacy McSwain",
    initials: "ST",
    role: "Founder & Client Relations",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_33irX78ICVwRYWpFZ5l6a5vZbf5/hf_20260924_075446_e562bcfc-005d-42e7-a103-01f56e03f6c4.png",
    imagePosition: "50% 30%",
  },
  { index: "", name: "Stavarai", initials: "ST", role: "eCommerce & Shopify Expert" },
  {
    index: "03",
    name: "Ivette",
    initials: "IV",
    role: "Digital Project Management / Social Media Strategist",
    image:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_33irX78ICVwRYWpFZ5l6a5vZbf5/3efe9721-ff61-40dd-bb77-ae11fa385f25.jpg",
    imagePosition: "50% 28%",
  },
  { index: "04", name: "Akash", initials: "AK", role: "DevOps & Agentic SEO" },
  {
    index: "05",
    name: "Jeremy",
    initials: "JE",
    role: "Systems Thinking / Automations",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_33irX78ICVwRYWpFZ5l6a5vZbf5/hf_20260924_075933_350b1e07-44bc-4bac-a252-95d4fcf359ba.png",
    imagePosition: "50% 30%",
  },
];

export default function TeamPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="team-title">
        <div className={styles.heroCopy}>
          <h1 id="team-title">Meet the team</h1>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <video
            className={styles.heroVideo}
            src="https://d2ol7oe51mr4n9.cloudfront.net/user_33irX78ICVwRYWpFZ5l6a5vZbf5/63822dfb-7370-4b4a-ba36-ce52884a9001.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <div className={styles.shell}>
        <section className={styles.people} aria-label="MACS team roster">
          {people.map((person) => (
            <article className={styles.person} key={person.name}>
              <div
                className={styles.portrait}
                data-initials={person.initials}
                data-has-photo={person.image ? "true" : undefined}
                aria-hidden="true"
                style={
                  person.image
                    ? {
                        backgroundImage: `url("${person.image}")`,
                        backgroundPosition: person.imagePosition,
                      }
                    : undefined
                }
              />
              <div className={styles.copy}>
                {person.index ? <span className={styles.index}>{person.index}</span> : null}
                <div className={styles.identity}>
                  <h2 className={styles.personName}>{person.name}</h2>
                  {person.role ? <p className={styles.role}>{person.role}</p> : null}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

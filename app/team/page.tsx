import type { Metadata } from "next";
import styles from "./team.module.css";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Meet the MACS Digital Media team.",
};

const people = [
  { index: "01", name: "Stacy McSwain", initials: "ST", role: "Founder & Client Relations" },
  { index: "02", name: "Stavarai", initials: "ST", role: "eCommerce & Shopify Expert" },
  { index: "03", name: "Ivette", initials: "IV", role: "Digital Project Management / Social Media Strategist" },
  { index: "04", name: "Akash", initials: "AK", role: "DevOps & Agentic SEO" },
  { index: "05", name: "Jeremy", initials: "JE", role: "Systems Thinking / Automations" },
];

export default function TeamPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="team-title">
        <div className={styles.heroCopy}>
          <h1 id="team-title">Meet the team</h1>
        </div>
        <div className={styles.heroVisual} aria-label="Team photo placeholder">
          <span className={styles.heroMark}>Team photo / video</span>
        </div>
      </section>

      <div className={styles.shell}>
        <section className={styles.people} aria-label="MACS team roster">
          {people.map((person) => (
            <article className={styles.person} key={person.name}>
              <div
                className={styles.portrait}
                data-initials={person.initials}
                aria-label={`${person.name} photo placeholder`}
              />
              <div className={styles.copy}>
                <span className={styles.index}>{person.index}</span>
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

import type { Metadata } from "next";
import styles from "./team.module.css";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Meet the MACS Digital Media team.",
};

const people = [
  {
    index: "01",
    name: "Stacy",
    initials: "ST",
    role: "Founder / Strategy",
    statement: "Long-term vision, strategy and client direction.",
    owns: "Strategy",
    proof: "Work",
  },
  {
    index: "02",
    name: "Stavari",
    initials: "ST",
    role: "Product / Commerce",
    statement: "Product, commerce and development.",
    owns: "Product",
    proof: "Posta Studio",
  },
  {
    index: "03",
    name: "Ivette",
    initials: "IV",
    role: "Role",
    statement: "Bio",
    owns: "Role",
    proof: "Work",
  },
  {
    index: "04",
    name: "Akash",
    initials: "AK",
    role: "Role",
    statement: "Bio",
    owns: "Role",
    proof: "Work",
  },
  {
    index: "05",
    name: "Jeremy",
    initials: "JE",
    role: "Role",
    statement: "Bio",
    owns: "Role",
    proof: "Work",
  },
];

export default function TeamWireframePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="team-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Meet the team</p>
          <h1 id="team-title">Everybody plays a position.</h1>
          <p className={styles.heroLead}>Different positions. One team.</p>
        </div>
        <div className={styles.heroVisual} aria-label="Team photo placeholder">
          <span className={styles.heroMark}>Team photo / video</span>
        </div>
      </section>

      <div className={styles.shell}>
        <section className={styles.rosterIntro} aria-labelledby="roster-title">
          <p className={styles.kicker}>Team</p>
          <h2 id="roster-title">Who does what.</h2>
        </section>

        <section className={styles.people} aria-label="MACS team roster">
          {people.map((person) => (
            <article className={styles.person} key={person.name}>
              <div className={styles.portrait} data-initials={person.initials} aria-label={`${person.name} photo placeholder`} />
              <div className={styles.copy}>
                <span className={styles.index}>{person.index}</span>
                <div className={styles.identity}>
                  <h2 className={styles.personName}>{person.name}</h2>
                  <p className={styles.role}>{person.role}</p>
                  <p className={styles.statement}>{person.statement}</p>
                </div>
                <div className={styles.meta}>
                  <div className={styles.metaBlock}>
                    <span>Position</span>
                    <strong>{person.owns}</strong>
                  </div>
                  <div className={styles.metaBlock}>
                    <span>Work</span>
                    <strong>{person.proof}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      <section className={styles.closer}>
        <div className={styles.shell}>
          <p className={styles.kicker}>MACS</p>
          <h2>Different positions. One team.</h2>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import styles from "./team.module.css";

export const metadata: Metadata = {
  title: "Meet the Team Wireframe",
  description: "Editorial wireframe for the MACS Digital Media team page.",
};

const people = [
  {
    index: "01",
    name: "Stacy",
    initials: "SM",
    role: "Founder / Strategy",
    statement: "Protects the long view—what has to last, what the owner needs to control, and what the work is actually supposed to change.",
    owns: "Vision · Strategy · Client direction",
    proof: "Founder story / related work",
  },
  {
    index: "02",
    name: "Stavari",
    initials: "SM",
    role: "Product / Commerce",
    statement: "Stays closest to creators, ecommerce, product behavior and what customers are responding to now.",
    owns: "Product · Commerce · Development",
    proof: "Posta Studio / PostaTees",
  },
  {
    index: "03",
    name: "Yvette",
    initials: "YM",
    role: "Position to confirm",
    statement: "This is where Yvette’s real position, point of view and the part of the work she owns will live—one clear sentence, not a résumé paragraph.",
    owns: "Role / responsibilities placeholder",
    proof: "Related project / profile placeholder",
  },
  {
    index: "04",
    name: "Akash",
    initials: "AK",
    role: "Position to confirm",
    statement: "Akash gets a distinct role statement and proof connection so visitors understand immediately what he contributes to the team.",
    owns: "Role / responsibilities placeholder",
    proof: "Related project / profile placeholder",
  },
  {
    index: "05",
    name: "Jeremy",
    initials: "JR",
    role: "Position to confirm",
    statement: "Jeremy’s section will focus on the position he plays, what he owns, and the work that makes that contribution visible.",
    owns: "Role / responsibilities placeholder",
    proof: "Related project / profile placeholder",
  },
];

export default function TeamWireframePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="team-wireframe-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Meet the team / wireframe</p>
          <h1 id="team-wireframe-title">Everybody plays a position.</h1>
          <p className={styles.heroLead}>
            Strategy, product, design, development, content and operations—different positions, one accountable team.
          </p>
        </div>
        <div className={styles.heroVisual} aria-label="Group portrait or short team film placeholder">
          <span className={styles.heroMark}>Group portrait / short film placeholder</span>
        </div>
      </section>

      <div className={styles.shell}>
        <section className={styles.rosterIntro} aria-labelledby="roster-title">
          <p className={styles.kicker}>The roster</p>
          <h2 id="roster-title">Not job titles. The position each person plays.</h2>
        </section>

        <section className={styles.people} aria-label="MACS team roster">
          {people.map((person) => (
            <article className={styles.person} key={person.name}>
              <div className={styles.portrait} data-initials={person.initials} aria-label={`${person.name} portrait or film placeholder`} />
              <div className={styles.copy}>
                <span className={styles.index}>{person.index}</span>
                <div className={styles.identity}>
                  <h2 className={styles.personName}>{person.name}</h2>
                  <p className={styles.role}>{person.role}</p>
                  <p className={styles.statement}>{person.statement}</p>
                </div>
                <div className={styles.meta}>
                  <div className={styles.metaBlock}>
                    <span>What they own</span>
                    <strong>{person.owns}</strong>
                  </div>
                  <div className={styles.metaBlock}>
                    <span>Proof / related work</span>
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
          <p className={styles.kicker}>One team</p>
          <h2>Different positions. Shared outcome.</h2>
          <p>
            Final version: connect each person to the work they helped create, their real social profile, and the part of the client journey they own.
          </p>
        </div>
      </section>
    </div>
  );
}

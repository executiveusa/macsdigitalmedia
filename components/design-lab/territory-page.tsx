import Image from "next/image";
import Link from "next/link";
import { editorialHome } from "@/lib/editorial-home";
import { designTerritories, territoryOrder, type DesignTerritoryKey } from "@/lib/design-territories";
import type { Locale } from "@/lib/i18n";

export function TerritoryPage({ territoryKey, locale }: { territoryKey: DesignTerritoryKey; locale: Locale }) {
  const territory = designTerritories[territoryKey];
  const home = editorialHome[locale];

  return (
    <div className={`design-territory ${territory.className}`}>
      <aside className="design-lab-bar" aria-label="Phase 5 design territory navigation">
        <Link href="/design-lab" className="design-lab-bar__home">Phase 05</Link>
        <span className="design-lab-bar__label">{territory.category}</span>
        <nav className="design-lab-bar__nav" aria-label="Creative territories">
          {territoryOrder.map((key) => (
            <Link key={key} href={`/design-lab/${key}`} aria-current={key === territoryKey ? "page" : undefined}>
              {designTerritories[key].name}
            </Link>
          ))}
        </nav>
      </aside>

      <section className="territory-hero" aria-labelledby={`${territoryKey}-title`}>
        <div className="territory-hero__copy">
          <p className="territory-kicker">MACS Digital Media · {territory.name}</p>
          <h1 id={`${territoryKey}-title`}>{territory.governingIdea}</h1>
          <p className="territory-deck">{territory.thesis}</p>
          <Link href="/apply" className="territory-action">{home.primaryCta} <span aria-hidden="true">→</span></Link>
        </div>
        <figure className="territory-hero__founders">
          <Image
            src="/media/founders/stacy-stavarai-waterfront.webp"
            alt="Stacy and Stavarai together at the waterfront"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </figure>
        <figure className="territory-hero__art" aria-label={territory.artAlt}>
          <Image src={territory.art} alt={territory.artAlt} fill sizes="(max-width: 900px) 100vw, 42vw" />
        </figure>
        <p className="territory-signal">{territory.signal}</p>
      </section>

      <section className="territory-programs" aria-labelledby={`${territoryKey}-programs`}>
        <header className="territory-section-heading">
          <p className="territory-kicker">{home.programsLabel}</p>
          <h2 id={`${territoryKey}-programs`}>{home.programsTitle}</h2>
        </header>
        <div className="territory-program-list">
          {home.programs.map((program, index) => (
            <Link href={program.href} className="territory-program" key={program.name}>
              <span className="territory-program__index">0{index + 1}</span>
              <strong>{program.name}</strong>
              <span>{program.line}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="territory-work" aria-labelledby={`${territoryKey}-work`}>
        <header className="territory-section-heading territory-section-heading--work">
          <p className="territory-kicker">{home.workLabel}</p>
          <h2 id={`${territoryKey}-work`}>{home.workTitle}</h2>
        </header>
        <a className="territory-work__feature" href="https://asc3nd.org" target="_blank" rel="noreferrer">
          <div className="territory-work__media" role="img" aria-label="ASC3ND website project reference" />
          <div className="territory-work__caption">
            <strong>{home.asc3ndTitle}</strong>
            <span>{home.asc3ndLine}</span>
            <span aria-hidden="true">↗</span>
          </div>
        </a>
        <Link href="/work" className="territory-action territory-action--quiet">{home.workCta} <span aria-hidden="true">→</span></Link>
      </section>

      <section className="territory-story" aria-labelledby={`${territoryKey}-story`}>
        <div className="territory-story__portrait">
          <Image
            src="/media/founders/stacy-stavarai-portrait.webp"
            alt="Stacy and Stavarai, the father-and-son team behind MACS Digital Media"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="territory-story__copy">
          <p className="territory-kicker">{home.storyLabel}</p>
          <h2 id={`${territoryKey}-story`}>{home.storyTitle}</h2>
          <p>{home.storyLine}</p>
          <Link href="/story" className="territory-action">{home.storyCta} <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="territory-built" aria-labelledby={`${territoryKey}-built`}>
        <header className="territory-section-heading">
          <p className="territory-kicker">{home.builtLabel}</p>
          <h2 id={`${territoryKey}-built`}>{home.builtTitle}</h2>
        </header>
        <div className="territory-built__grid">
          {home.builtItems.map((item, index) => (
            <Link href={item.href} key={item.name} className="territory-built__item">
              <span>0{index + 1}</span>
              <strong>{item.name}</strong>
              <p>{item.line}</p>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="territory-fit" aria-labelledby={`${territoryKey}-fit`}>
        <p className="territory-kicker">{home.fitLabel}</p>
        <h2 id={`${territoryKey}-fit`}>{home.fitTitle}</h2>
        <p>{home.fitLine}</p>
        <Link href="/apply" className="territory-action territory-action--fit">{home.fitCta} <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  );
}

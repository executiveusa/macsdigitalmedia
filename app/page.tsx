import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { businessFirstCopy } from "@/lib/business-first-copy";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = businessFirstCopy[locale];
  return { title: copy.metadataTitle, description: copy.metadataDescription };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MACS Digital Media",
  url: "https://www.macsdigitalmedia.com",
  logo: "https://www.macsdigitalmedia.com/logo.png",
  description: "Business-first digital transformation for Washington organizations.",
  areaServed: { "@type": "State", name: "Washington" },
};

const checkupSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MAX Digital Checkup",
  provider: { "@type": "Organization", name: "MACS Digital Media" },
  areaServed: "Washington, USA",
  serviceType: "Business and digital operations diagnostic",
  description: "A business-first diagnostic that identifies the highest-value digital or operational problem before implementation begins.",
  offers: { "@type": "Offer", price: "750", priceCurrency: "USD" },
};

export default async function HomePage() {
  const locale = await getServerLocale();
  const copy = businessFirstCopy[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, checkupSchema]) }}
      />

      <section className="bf-hero" aria-labelledby="hero-title">
        <div className="shell bf-hero__grid">
          <div className="bf-hero__copy">
            <Reveal>
              <p className="bf-kicker">{copy.hero.eyebrow}</p>
              <h1 id="hero-title" className="bf-display bf-display--hero">{copy.hero.title}</h1>
              <p className="bf-hero__lede">{copy.hero.lede}</p>
              <div className="bf-actions">
                <Link className="bf-button bf-button--ink" href="/apply">{copy.hero.primaryCta}</Link>
                <a className="bf-text-link" href="#method">{copy.hero.secondaryCta}<span aria-hidden="true">↘</span></a>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <figure className="bf-hero__portrait">
              <Image
                src="/media/founders/stacy-stavarai-portrait.webp"
                alt={locale === "es-MX" ? "Stacy y Stavarai, fundadores de MACS Digital Media" : "Stacy and Stavarai, founders of MACS Digital Media"}
                width={1152}
                height={1536}
                priority
                sizes="(max-width: 820px) 100vw, 42vw"
              />
              <figcaption>MACS Digital Media · Washington</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bf-marquee" aria-label={locale === "es-MX" ? "Principio MACS" : "MACS principle"}>
        <div className="bf-marquee__track">
          <span>BUSINESS FIRST</span><i>•</i><span>PROOF BEFORE CLAIMS</span><i>•</i><span>BUILD ONLY WHAT EARNS ITS PLACE</span>
        </div>
      </section>

      <Reveal>
        <section className="bf-section bf-tension" id="what-we-fix" aria-labelledby="tension-title">
          <div className="shell">
            <div className="bf-split-heading">
              <p className="bf-kicker bf-kicker--ink">{copy.tension.eyebrow}</p>
              <div>
                <h2 id="tension-title" className="bf-display bf-display--section">{copy.tension.title}</h2>
                <p className="bf-intro">{copy.tension.intro}</p>
              </div>
            </div>
            <div className="bf-losses">
              {copy.tension.losses.map((loss, index) => (
                <p key={loss}><span>{String(index + 1).padStart(2, "0")}</span>{loss}</p>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bf-section bf-belief" aria-labelledby="belief-title">
          <div className="shell bf-belief__inner">
            <p className="bf-kicker">{copy.belief.eyebrow}</p>
            <h2 id="belief-title" className="bf-display bf-display--statement">
              {copy.belief.title}<em>{copy.belief.accent}</em>
            </h2>
            <p className="bf-belief__body">{copy.belief.body}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bf-section bf-method" id="method" aria-labelledby="method-title">
          <div className="shell">
            <div className="bf-split-heading">
              <p className="bf-kicker bf-kicker--ink">{copy.method.eyebrow}</p>
              <div>
                <h2 id="method-title" className="bf-display bf-display--section">{copy.method.title}</h2>
                <p className="bf-intro">{copy.method.intro}</p>
              </div>
            </div>
            <ol className="bf-method__list">
              {copy.method.steps.map(([name, question], index) => (
                <li key={name}>
                  <span className="bf-method__number">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{name}</strong>
                  <p>{question}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bf-section bf-checkup" id="checkup" aria-labelledby="checkup-title">
          <div className="shell bf-checkup__grid">
            <div>
              <p className="bf-kicker">{copy.checkup.eyebrow}</p>
              <h2 id="checkup-title" className="bf-display bf-display--section">{copy.checkup.title}</h2>
              <p className="bf-intro bf-intro--light">{copy.checkup.body}</p>
            </div>
            <div className="bf-checkup__offer">
              <div className="bf-price">
                <span>MAX Digital Checkup</span>
                <strong>{copy.checkup.price}</strong>
                <p>{copy.checkup.priceNote}</p>
              </div>
              <ul className="bf-checkup__list">
                {copy.checkup.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link className="bf-button bf-button--paper" href="/apply">{copy.checkup.cta}</Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bf-section bf-ladder" aria-labelledby="ladder-title">
          <div className="shell">
            <div className="bf-split-heading">
              <p className="bf-kicker bf-kicker--ink">{copy.ladder.eyebrow}</p>
              <div>
                <h2 id="ladder-title" className="bf-display bf-display--section">{copy.ladder.title}</h2>
                <p className="bf-intro">{copy.ladder.intro}</p>
              </div>
            </div>
            <div className="bf-ladder__steps">
              {copy.ladder.steps.map(([label, title, body]) => (
                <article key={label}>
                  <p className="bf-kicker bf-kicker--ink">{label}</p>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bf-section bf-founders" id="about" aria-labelledby="founders-title">
          <div className="shell bf-founders__grid">
            <figure className="bf-founders__image">
              <Image
                src="/media/founders/stacy-stavarai-waterfront.webp"
                alt={locale === "es-MX" ? "Stacy y Stavarai juntos en Washington" : "Stacy and Stavarai together in Washington"}
                width={1152}
                height={1536}
                sizes="(max-width: 820px) 100vw, 48vw"
              />
            </figure>
            <div className="bf-founders__copy">
              <p className="bf-kicker">{copy.founders.eyebrow}</p>
              <h2 id="founders-title" className="bf-display bf-display--section">{copy.founders.title}</h2>
              <p className="bf-intro bf-intro--light">{copy.founders.body}</p>
              <div className="bf-founder-names">
                <p><strong>Stacy</strong><span>{copy.founders.stacy}</span></p>
                <p><strong>Stavarai</strong><span>{copy.founders.stavarai}</span></p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bf-section bf-capability" aria-labelledby="capability-title">
          <div className="shell">
            <p className="bf-kicker bf-kicker--ink">{copy.capability.eyebrow}</p>
            <h2 id="capability-title" className="bf-display bf-display--section">{copy.capability.title}</h2>
            <p className="bf-intro">{copy.capability.body}</p>
            <div className="bf-capability__lines">
              {copy.capability.lines.map((line) => <p key={line}>{line}</p>)}
            </div>
            <p className="bf-capability__closer">{copy.capability.closer}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bf-section bf-technology" aria-labelledby="technology-title">
          <div className="shell bf-technology__grid">
            <div>
              <p className="bf-kicker">{copy.technology.eyebrow}</p>
              <h2 id="technology-title" className="bf-display bf-display--section">{copy.technology.title}</h2>
            </div>
            <div>
              <p className="bf-intro bf-intro--light">{copy.technology.body}</p>
              <div className="bf-principles">
                {copy.technology.principles.map(([title, body]) => (
                  <article key={title}><h3>{title}</h3><p>{body}</p></article>
                ))}
              </div>
              <Link className="bf-text-link bf-text-link--light" href="/maxx">{locale === "es-MX" ? "Conoce MAXX" : "Meet MAXX"}<span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bf-section bf-sovereignty" aria-labelledby="sovereignty-title">
          <div className="shell">
            <p className="bf-kicker bf-kicker--ink">{copy.sovereignty.eyebrow}</p>
            <h2 id="sovereignty-title" className="bf-display bf-display--statement bf-display--ink">{copy.sovereignty.title}</h2>
            <p className="bf-intro">{copy.sovereignty.body}</p>
            <ul className="bf-sovereignty__list">
              {copy.sovereignty.lines.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bf-section bf-proof" aria-labelledby="proof-title">
          <div className="shell bf-proof__grid">
            <div>
              <p className="bf-kicker">{copy.proof.eyebrow}</p>
              <h2 id="proof-title" className="bf-display bf-display--section">{copy.proof.title}</h2>
              <p className="bf-intro bf-intro--light">{copy.proof.body}</p>
            </div>
            <div className="bf-proof__labels" aria-label={locale === "es-MX" ? "Contrato de prueba" : "Proof contract"}>
              {copy.proof.labels.map((label, index) => <p key={label}><span>{String(index + 1).padStart(2, "0")}</span>{label}</p>)}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bf-section bf-final" aria-labelledby="final-title">
          <div className="shell bf-final__inner">
            <p className="bf-kicker bf-kicker--ink">{copy.final.eyebrow}</p>
            <h2 id="final-title" className="bf-display bf-display--statement bf-display--ink">{copy.final.title}</h2>
            <p className="bf-intro">{copy.final.body}</p>
            <Link className="bf-button bf-button--ink" href="/apply">{copy.final.cta}</Link>
          </div>
        </section>
      </Reveal>
    </>
  );
}

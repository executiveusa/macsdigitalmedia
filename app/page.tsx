import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroCopyMotion, HeroParallax, Reveal } from "@/components/motion";
import { editorialHome } from "@/lib/editorial-home";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const home = editorialHome[locale];
  return { title: home.metadataTitle, description: home.metadataDescription };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MACS Digital Media",
  url: "https://www.macsdigitalmedia.com",
  logo: "https://www.macsdigitalmedia.com/logo.png",
  description:
    "A Pacific Northwest father-and-son digital partner for non-technical founders.",
  areaServed: { "@type": "State", name: "Washington" },
};

const HERO_IMAGE = "/media/founders/stacy-stavarai-waterfront-graded.webp";

export default async function HomePage() {
  const locale = await getServerLocale();
  const home = editorialHome[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="editorial-hero" aria-labelledby="editorial-hero-title">
        <div className="editorial-hero__media">
          <HeroParallax>
            <Image
              className="editorial-hero__image"
              src={HERO_IMAGE}
              alt="Stacy and Stavarai of MACS Digital Media together by the waterfront"
              fill
              priority
              sizes="(max-width: 760px) 110vw, 62vw"
            />
            <div className="editorial-hero__veil" aria-hidden="true" />
          </HeroParallax>
        </div>
        <div className="editorial-hero__panel">
          <HeroCopyMotion>
            <div className="editorial-hero__content">
              <p className="editorial-kicker">MACS Digital Media</p>
              <h1 id="editorial-hero-title">{home.heroTitle}</h1>
              {home.heroLine ? <p className="editorial-hero__line">{home.heroLine}</p> : null}
              <Link className="editorial-link editorial-link--light" href="/apply">
                {home.primaryCta} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </HeroCopyMotion>
        </div>
      </section>

      <section className="editorial-credibility" aria-label={home.credibility}>
        <div className="editorial-shell"><p>{home.credibility}</p></div>
      </section>

      <Reveal intensity="strong">
        <section className="editorial-section editorial-programs" aria-labelledby="programs-title">
          <div className="editorial-shell">
            <div className="editorial-heading editorial-heading--programs">
              <h2 id="programs-title">{home.programsTitle}</h2>
            </div>
            <div className="editorial-rows">
              {home.programs.map((program) => (
                <Link className="editorial-row" href={program.href} key={program.name}>
                  <span className="editorial-row__name">{program.name}</span>
                  <span className="editorial-row__line">{program.line}</span>
                  <span className="editorial-row__arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal intensity="soft">
        <section className="editorial-partnership-bridge" aria-labelledby="partnership-bridge-title">
          <div className="editorial-shell editorial-partnership-bridge__inner">
            <div>
              <h2 id="partnership-bridge-title">{home.partnershipBridgeTitle}</h2>
              <p>{home.partnershipBridgeLine}</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal intensity="strong">
        <section className="editorial-section editorial-work" aria-labelledby="work-title">
          <div className="editorial-shell">
            <div className="editorial-heading editorial-heading--split">
              <p className="editorial-kicker">{home.workLabel}</p>
              <h2 id="work-title">{home.workTitle}</h2>
            </div>
            <Link className="editorial-work__feature" href="/work/asc3nd" aria-label={`${home.asc3ndTitle}: ${home.asc3ndLine}`}>
              <span
                className="editorial-work__media"
                aria-hidden="true"
                style={{ backgroundImage: "url(/work/asc3nd-hero.webp)" }}
              />
              <span className="editorial-work__caption">
                <strong>{home.asc3ndTitle}</strong>
                <span>{home.asc3ndLine}</span>
                <span aria-hidden="true">↗</span>
              </span>
            </Link>
            <Link className="editorial-link" href="/work">
              {home.workCta} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal intensity="strong">
        <section className="editorial-section editorial-story" aria-labelledby="story-title">
          <div className="editorial-shell editorial-story__grid">
            <div className="editorial-story__media">
              <Image
                src="/media/founders/stacy-stavarai-portrait.webp"
                alt="Stacy and Stavarai, the father-and-son team behind MACS Digital Media"
                fill
                sizes="(max-width: 800px) 100vw, 54vw"
              />
            </div>
            <div className="editorial-story__copy">
              <p className="editorial-kicker">{home.storyLabel}</p>
              <h2 id="story-title">{home.storyTitle}</h2>
              <p>{home.storyLine}</p>
              <Link className="editorial-link" href="/story">
                {home.storyCta} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal intensity="strong">
        <section className="editorial-section editorial-built" aria-labelledby="built-title">
          <div className="editorial-shell">
            <div className="editorial-heading editorial-heading--wide">
              <h2 id="built-title">{home.builtTitle}</h2>
            </div>
            <div className="editorial-built__grid">
              {home.builtItems.map((item, index) => (
                <Link className="editorial-built__item" href={item.href} key={item.name}>
                  <span className="editorial-built__index">0{index + 1}</span>
                  <strong>{item.name}</strong>
                  <span>{item.line}</span>
                  <span className="editorial-built__arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
            <Link className="editorial-link" href="/built-here">
              {home.builtCta} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal intensity="standard">
        <section className="editorial-fit" aria-labelledby="fit-title">
          <div className="editorial-shell editorial-fit__inner">
            <h2 id="fit-title">{home.fitTitle}</h2>
            <Link className="editorial-link editorial-link--light" href="/apply">
              {home.fitCta} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  );
}

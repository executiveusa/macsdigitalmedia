import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RollingTextLink } from "@/components/motion";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why Stacy and Stavarai built MACS Digital Media around ownership, relationships, and two generations of operator experience in Seattle.",
};

export default async function StoryPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return (
    <div className="editorial-page">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <div>
            <h1>
              {es
                ? "Dos perspectivas. Mejores resultados."
                : "Two perspectives. Better outcomes."}
            </h1>
            <p>
              {es
                ? "Un estudio familiar de padre e hijo en Seattle. Uno cuida lo que tiene que durar; el otro vive de cerca lo que gana atención hoy."
                : "A Seattle father-and-son studio. One brings the long view of business ownership. The other stays close to what wins attention and sales right now."}
            </p>
          </div>
        </header>

        <Reveal intensity="strong">
          <div
            className="editorial-story__media"
            style={{ marginBottom: "clamp(4rem, 8vw, 7rem)" }}
          >
            <Image
              src="/media/founders/stacy-stavarai-waterfront.webp"
              alt="Stacy and Stavarai of MACS Digital Media together in the Pacific Northwest"
              fill
              priority
              sizes="100vw"
            />
          </div>
        </Reveal>

        <div className="editorial-story-long">
          <Reveal intensity="strong">
            <section className="editorial-story-long__chapter">
              <div>
                <h2>{es ? "Conoce a Stacy" : "Meet Stacy"}</h2>
                {es ? (
                  <p>
                    Stacy llegó a MACS desde el lado del dueño. Software rentado, proveedores distintos y partes del negocio arregladas por separado dejan al dueño pagando por muchas cosas sin sentir que alguien cuida el resultado completo. Por eso nuestra regla es simple: siempre entiendes y conservas lo que construimos.
                  </p>
                ) : (
                  <>
                    <p>
                      <strong>Built from the owner’s side of the problem.</strong>{" "}
                      Paying separate freelancers for a website, ads, and social media leaves owners holding the bag when nothing connects. MACS exists so one partner owns the outcome and you keep every asset.
                    </p>
                    <blockquote>
                      <p>
                        “MACS started from solving the same problems for ourselves that we now solve for clients.”
                      </p>
                      <footer>Stacy McSwain</footer>
                    </blockquote>
                  </>
                )}
              </div>
            </section>
          </Reveal>

          <Reveal intensity="strong">
            <section className="editorial-story-long__chapter">
              <div>
                <h2>{es ? "Conoce a Stavarai" : "Meet Stavarai"}</h2>
                {es ? (
                  <p>
                    Stavarai aporta la perspectiva de una generación que vive de cerca el contenido, UGC, comercio electrónico y comportamiento real en móvil. También opera PostaTees, así que sus decisiones vienen de manejar un negocio real.
                  </p>
                ) : (
                  <>
                    <p>
                      <strong>Operator speed for modern buyers.</strong> Running PostaTees from a young age means Stavarai builds from real customer behavior, Shopify conversion, and short-form attention instead of textbook agency slides.
                    </p>
                    <blockquote>
                      <p>
                        “Operating PostaTees from a young age has allowed me to stay current with what’s relevant and profitable for my clients.”
                      </p>
                      <footer>Stavarai McSwain</footer>
                    </blockquote>
                  </>
                )}
              </div>
            </section>
          </Reveal>
        </div>

        <div
          style={{
            marginTop: "clamp(3.5rem, 7vw, 6rem)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <RollingTextLink
            href="/apply"
            label={es ? "Cuéntanos qué es importante" : "Tell us what's important"}
            className="macs-btn macs-btn--primary"
          />
          <Link className="macs-underline-cta macs-underline-cta--dark" href="/team">
            <span>{es ? "Conoce al equipo" : "Meet the team"}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

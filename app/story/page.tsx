import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Why Stacy and Stavarai built MACS Digital Media around ownership, relationships and two different views of what a business needs.",
};

export default async function StoryPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return (
    <div className="editorial-page">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <p className="editorial-kicker">{es ? "Padre + hijo" : "Father + son"}</p>
          <div>
            <h1>{es ? "Dos maneras de mirar el mismo negocio." : "Two perspectives. Better outcomes."}</h1>
            {es ? <p>Una cuida lo que tiene que durar. La otra se mantiene cerca de lo que está cambiando.</p> : null}
          </div>
        </header>

        <div className="editorial-story__media" style={{ marginBottom: "clamp(5rem, 10vw, 9rem)" }}>
          <Image
            src="/media/founders/stacy-stavarai-waterfront.webp"
            alt="Stacy and Stavarai of MACS Digital Media together by the waterfront"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="editorial-story-long">
          <section className="editorial-story-long__chapter">
            <p className="editorial-kicker">{es ? "01 · Stacy" : "01"}</p>
            <div>
              <h2>{es ? "El problema no era una sola herramienta." : "Meet Stacy"}</h2>
              {es ? (
                <p>Stacy llegó a MACS desde el lado del dueño. Software rentado, proveedores distintos y partes del negocio arregladas por separado pueden dejar al dueño pagando por muchas cosas sin sentir que alguien está cuidando el resultado completo. Esa experiencia se convirtió en una regla: el cliente debe poder entender, conservar y mover lo que construimos.</p>
              ) : (
                <>
                  <p><strong>Built from the owner’s side of the problem.</strong></p>
                  <blockquote>
                    <p>“MACS started from solving the same problems for ourselves, we now solve for clients.”</p>
                    <footer>— Stacy</footer>
                  </blockquote>
                </>
              )}
            </div>
          </section>

          <section className="editorial-story-long__chapter">
            <p className="editorial-kicker">{es ? "02 · Stavarai" : "02"}</p>
            <div>
              <h2>{es ? "Lo que dura también tiene que seguir siendo actual." : "Meet Stavarai"}</h2>
              {es ? (
                <p>Stavarai aporta la perspectiva de una generación que vive más cerca del contenido, UGC, comercio y comportamiento de clientes en el teléfono. También es dueño de PostaTees, así que esa mirada no viene solo de observar tendencias: viene de operar un negocio.</p>
              ) : (
                <blockquote>
                  <p>“Operating PostaTees from a young age has allowed me to stay current with what’s relevant and profitable for my clients.”</p>
                  <footer>— Stavarai</footer>
                </blockquote>
              )}
            </div>
          </section>
        </div>

        <div style={{ marginTop: "clamp(5rem, 10vw, 9rem)", display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          <Link className="editorial-link" href="/team">
            {es ? "Conoce al equipo" : "Meet the team"} <span aria-hidden="true">↗</span>
          </Link>
          <Link className="editorial-link" href="/apply">
            {es ? "Veamos si encajamos" : "Tell us what's important"} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Why Stacy and Stavarai built MACS Digital Media around ownership, simplicity and staying current.",
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
            <h1>{es ? "Dos maneras de mirar el mismo negocio." : "Two ways of looking at the same challenges."}</h1>
            <p>{es ? "Uno cuida lo que tiene que durar. El otro se mantiene cerca de lo que está cambiando." : "See what has to last. Stay close to what is changing."}</p>
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
            <p className="editorial-kicker">01 · Stacy</p>
            <div>
              <h2>{es ? "El problema nunca fue una sola herramienta." : "The problem was never one tool."}</h2>
              <p>{es ? "MACS nació al resolver los mismos problemas dentro de los negocios de Stacy: demasiadas suscripciones, demasiados proveedores y nadie responsable por el resultado completo." : "MACS came from solving problems inside Stacy's own businesses—too many subscriptions, too many vendors and nobody responsible for the whole result."}</p>
              <p>{es ? "De ahí salió una regla: lo que construimos debe seguir siendo entendible y tuyo." : "That became the rule: what we build should remain understandable and yours."}</p>
            </div>
          </section>

          <section className="editorial-story-long__chapter">
            <p className="editorial-kicker">02 · Stavarai</p>
            <div>
              <h2>{es ? "Lo que dura también tiene que seguir siendo actual." : "What lasts still has to stay current."}</h2>
              <p>{es ? "Stavarai se mantiene cerca del contenido, el comercio y de cómo se comportan los clientes ahora. Esa perspectiva viene de operar eCommerce, no solo de mirar tendencias." : "Stavarai stays close to content, commerce and how customers behave now. That perspective comes from running eCommerce, not just watching trends."}</p>
            </div>
          </section>

          <section className="editorial-story-long__chapter">
            <p className="editorial-kicker">03 · MACS</p>
            <div>
              <h2>{es ? "El negocio se queda tuyo." : "The business stays yours."}</h2>
              <p>{es ? "Usamos nuestra tecnología y las mejores herramientas externas cuando tienen sentido. Te quedas porque la relación funciona, no porque salir sea difícil." : "We use our technology and the best outside tools when they make sense. You stay because the relationship works—not because leaving is difficult."}</p>
            </div>
          </section>
        </div>

        <div style={{ marginTop: "clamp(5rem, 10vw, 9rem)" }}>
          <Link className="editorial-link" href="/apply">
            {es ? "Cuéntanos qué es importante" : "Tell us what's important"} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

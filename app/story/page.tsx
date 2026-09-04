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
            <h1>{es ? "Dos maneras de mirar el mismo negocio." : "Two ways of looking at the same challenges."}</h1>
            <p>{es ? "Una cuida lo que tiene que durar. La otra se mantiene cerca de lo que está cambiando." : "See what has to last. Stay close to what is changing."}</p>
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
            <p className="editorial-kicker">{es ? "01 · Stacy" : "01 · Meet Stacy"}</p>
            <div>
              <h2>{es ? "El problema no era una sola herramienta." : "The problem was never one tool."}</h2>
              <p>{es ? "Stacy llegó a MACS desde el lado del dueño. Software rentado, proveedores distintos y partes del negocio arregladas por separado pueden dejar al dueño pagando por muchas cosas sin sentir que alguien está cuidando el resultado completo. Esa experiencia se convirtió en una regla: el cliente debe poder entender, conservar y mover lo que construimos." : "Thank you for considering MACS Digital Media. MACS Digital Media was born from the journey to solve my own problems and in-house challenges. Expensive software subscriptions, separate vendors, disconnected freelancers and isolated fixes left me paying for a lot of activity without anyone being accountable for the whole result. That experience became a rule once MACS was built: the client should be able to understand and own their data, and use whatever we build without being technical, locked into a subscription or having to understand every little detail about AI and digital marketing."}</p>
            </div>
          </section>

          <section className="editorial-story-long__chapter">
            <p className="editorial-kicker">{es ? "02 · Stavarai" : "02 · Meet Stavarai"}</p>
            <div>
              <h2>{es ? "Lo que dura también tiene que seguir siendo actual." : "What lasts still has to stay current."}</h2>
              <p>{es ? "Stavarai aporta la perspectiva de una generación que vive más cerca del contenido, UGC, comercio y comportamiento de clientes en el teléfono. También es dueño de PostaTees, así que esa mirada no viene solo de observar tendencias: viene de operar un negocio." : "Stavarai brings the perspective of a generation living closer to trending content, UGC, eCommerce and how customers behave on a phone. He also owns PostaTees, so that perspective does not come only from watching trends. It comes from running a real eCommerce business at scale and working professionally with eCommerce clients on a daily basis."}</p>
            </div>
          </section>

          <section className="editorial-story-long__chapter">
            <p className="editorial-kicker">03 · MACS</p>
            <div>
              <h2>{es ? "El negocio se queda tuyo." : "The business stays yours."}</h2>
              <p>{es ? "Juntos, MACS combina la disciplina de lo que debe sobrevivir años con la atención a lo que está funcionando ahora. Usamos tecnología propia y de terceros detrás del trabajo, pero no queremos que el cliente se quede por estar atrapado. Queremos que se quede porque la relación sigue valiendo." : "Together, MACS combines the discipline of what should survive for years with attention to what is working now. We use our own and third-party technology behind the work, but we do not want a client to stay because leaving is painful. We want them to stay because the relationship keeps earning its place in your vision."}</p>
            </div>
          </section>
        </div>

        <div style={{ marginTop: "clamp(5rem, 10vw, 9rem)" }}>
          <Link className="editorial-link" href="/apply">
            {es ? "Veamos si encajamos" : "Tell us what's important"} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

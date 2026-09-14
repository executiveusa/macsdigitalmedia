import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";
import styles from "./demos.module.css";

export const metadata: Metadata = {
  title: "Demos",
  description:
    "Live builds you can open right now, plus spec demos from the MACS Digital Media content pipeline. Live work is labeled live; spec work is labeled spec.",
};

const DEMO_VIDEOS = {
  scuffReset: "https://video-exports.thepaulieffect.com/ugc-samples/v3/proof-b-ecomm-scuffreset-r2.mp4",
  pristine: "https://video-exports.thepaulieffect.com/ugc-samples/v3/proof-c-local-pristine-r2.mp4",
} as const;

export default async function DemosPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const liveBuilds = es
    ? [
        {
          kicker: "Trabajo de cliente",
          name: "ASC3ND",
          line: "La puerta de entrada pública de una organización juvenil sin fines de lucro - mentoría, habilidades para la vida y oportunidad comunitaria.",
          href: "https://asc3nd-org.netlify.app/",
          img: "/demos/asc3nd.webp",
        },
        {
          kicker: "Sitio de producto",
          name: "Pare’",
          line: "Un diario de estudio en forma de recorrido - el paso de revisión y reparación en nuestro propio flujo de construcción.",
          href: "https://pauli-para.netlify.app/",
          img: "/demos/pare.webp",
        },
        {
          kicker: "Sitio de producto",
          name: "Buffer Blaster",
          line: "Infraestructura creativa privada para convertir la verdad de un producto en UGC comprobable. Registro de beta en vivo.",
          href: "https://bufferblaster.netlify.app/",
          img: "/demos/buffer-blaster.webp",
        },
      ]
    : [
        {
          kicker: "Client site",
          name: "ASC3ND",
          line: "A youth nonprofit's public front door - trusted guidance, life skills, and community opportunity.",
          href: "https://asc3nd-org.netlify.app/",
          img: "/demos/asc3nd.webp",
        },
        {
          kicker: "Product site",
          name: "Pare’",
          line: "A scroll-driven studio journal - the review-and-repair step in our own build workflow.",
          href: "https://pauli-para.netlify.app/",
          img: "/demos/pare.webp",
        },
        {
          kicker: "Product site",
          name: "Buffer Blaster",
          line: "Private creative infrastructure for turning product truth into testable UGC. Live beta signup.",
          href: "https://bufferblaster.netlify.app/",
          img: "/demos/buffer-blaster.webp",
        },
      ];

  const specVideos = es
    ? [
        {
          kicker: "Demo de muestra · E-commerce",
          title: "ScuffReset - spot de producto de 28 segundos",
          body: "Un anuncio estilo UGC para un kit de limpieza de tenis de ejemplo, producido de principio a fin por nuestro pipeline: gancho, presentador, video del producto, subtítulos y llamado a la acción.",
          src: DEMO_VIDEOS.scuffReset,
          poster: "/demos/scuffreset-poster.webp",
          variant: "dark",
          label: "Demo de muestra ScuffReset, anuncio vertical de 28 segundos",
        },
        {
          kicker: "Demo de muestra · Servicio local",
          title: "Pristine - spot local de 25 segundos",
          body: "Un anuncio estilo UGC para un servicio de limpieza de colonia de ejemplo. El mismo pipeline y el mismo operador, hecho para mostrar lo que un negocio pequeño puede poner frente a sus clientes locales.",
          src: DEMO_VIDEOS.pristine,
          poster: "/demos/pristine-poster.webp",
          variant: "light",
          label: "Demo de muestra Pristine, anuncio vertical de 25 segundos",
        },
      ]
    : [
        {
          kicker: "Spec demo · E-commerce",
          title: "ScuffReset - a 28-second product spot",
          body: "A UGC-style ad for a sample sneaker-cleaning kit, produced end to end by our pipeline: hook, presenter, product footage, captions and call to action.",
          src: DEMO_VIDEOS.scuffReset,
          poster: "/demos/scuffreset-poster.webp",
          variant: "dark",
          label: "ScuffReset spec demo, a 28-second vertical ad",
        },
        {
          kicker: "Spec demo · Local service",
          title: "Pristine - a 25-second local spot",
          body: "A UGC-style ad for a sample neighborhood cleaning service. Same pipeline, same operator - built to show what a small business can put in front of local customers.",
          src: DEMO_VIDEOS.pristine,
          poster: "/demos/pristine-poster.webp",
          variant: "light",
          label: "Pristine spec demo, a 25-second vertical ad",
        },
      ];

  return (
    <div className="editorial-page editorial-page--white">
      <div className="editorial-shell">
        <header className={`editorial-page__intro ${styles.introTight}`}>
          <p className="editorial-kicker">{es ? "Demos" : "Demos"}</p>
          <div>
            <h1>{es ? "Mira el trabajo antes de creer la propuesta." : "Watch the work before you believe the pitch."}</h1>
            <p>
              {es
                ? "Construcciones en vivo que puedes abrir ahora mismo, más piezas de muestra de nuestro pipeline de contenido. Lo en vivo se etiqueta en vivo; lo de muestra se etiqueta de muestra."
                : "Live builds you can open right now, plus spec pieces from our content pipeline. Live work is labeled live; spec work is labeled spec."}
            </p>
          </div>
        </header>

        <section aria-labelledby="spec-demos-title">
          <div className={styles.sectionHeading}>
            <p className="editorial-kicker">{es ? "Piezas de muestra" : "Spec pieces"}</p>
            <h2 id="spec-demos-title">{es ? "Anuncios producidos por nuestro pipeline." : "Ads produced by our pipeline."}</h2>
          </div>
          <div className={styles.grid}>
            {specVideos.map((demo) => (
              <article className={`${styles.card} ${demo.variant === "dark" ? styles.cardDark : styles.cardLight}`} key={demo.title}>
                <div className={styles.media}>
                  <video
                    className={styles.video}
                    src={demo.src}
                    poster={demo.poster}
                    autoPlay
                    muted
                    loop
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={demo.label}
                  />
                </div>
                <div className={styles.copy}>
                  <p className="editorial-kicker">{demo.kicker}</p>
                  <h3>{demo.title}</h3>
                  <p>{demo.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="live-builds-title">
          <div className={styles.sectionHeading}>
            <p className="editorial-kicker">{es ? "En vivo ahora" : "Live right now"}</p>
            <h2 id="live-builds-title">{es ? "Abre una construcción real." : "Open a real build."}</h2>
          </div>
          <div className={styles.liveGrid}>
            {liveBuilds.map((build) => (
              <a className={styles.liveCard} href={build.href} target="_blank" rel="noreferrer" key={build.name}>
                <span className={styles.liveMedia} aria-hidden="true">
                  <img src={build.img} alt="" loading="lazy" width={480} height={659} />
                </span>
                <span className={styles.liveCopy}>
                  <span className="editorial-kicker">{build.kicker}</span>
                  <span className={styles.liveName}>{build.name}</span>
                  <span className={styles.liveLine}>{build.line}</span>
                  <span className={styles.liveOpen}>{es ? "Abrir en vivo" : "Open it live"} <span aria-hidden="true">↗</span></span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <p className={styles.note}>
          {es
            ? "Lo que estás viendo en las piezas de muestra: presentadores asistidos por IA y video generado, ensamblado y revisado por nuestro equipo. Etiquetamos el trabajo de muestra como trabajo de muestra."
            : "In the spec pieces you are watching: AI-assisted presenters and generated footage, assembled and reviewed by our team. We label spec work as spec work."}
        </p>

        <Link className="editorial-link editorial-link--light" href="/apply">
          {es ? "Cuéntanos qué está atorado" : "Tell us what's important"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}

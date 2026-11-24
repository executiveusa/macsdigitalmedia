import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { RollingTextLink } from "@/components/motion";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return {
    title: es ? "Empezar la conversación" : "Book a conversation",
    description: es
      ? "Habla con MACS Digital Media en Seattle sobre sitio web, anuncios y automatización."
      : "Talk with MACS Digital Media in Seattle about your website, ads, and lead capture.",
  };
}

export default async function BookPage() {
  const bookingUrl =
    process.env.BOOKING_URL ?? process.env.NEXT_PUBLIC_BOOKING_URL;

  if (bookingUrl) {
    redirect(bookingUrl);
  }

  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return (
    <section className="section application-page" aria-labelledby="booking-title">
      <div className="shell application-layout">
        <div className="macs-book-card">
          <h1 id="booking-title">
            {es ? "Empezar la conversación." : "Book a conversation."}
          </h1>
          <p>
            {es
              ? "Cuéntanos en qué estás trabajando y juntos veremos cuál es el mejor siguiente paso, sin presión ni discursos largos."
              : "Tell us what you are working on and we will map the highest-leverage next step together, with zero hard pitch."}
          </p>

          <div className="macs-book-actions">
            <RollingTextLink
              href="/apply"
              label={es ? "Cuéntanos qué es importante" : "Tell us what's important"}
              className="macs-btn macs-btn--primary"
            />
            <a
              className="macs-underline-cta macs-underline-cta--dark"
              href="mailto:info@macsdigitalmedia.com"
            >
              <span>info@macsdigitalmedia.com</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="macs-next-steps">
            <h2>{es ? "Qué pasa en una llamada de 15 minutos" : "What happens on a 15-minute fit call"}</h2>
            <ol>
              <li>
                {es
                  ? "Revisamos tu sitio actual, anuncios o captura de clientes en tiempo real."
                  : "We review your current website, ads, or lead follow-up together in plain English."}
              </li>
              <li>
                {es
                  ? "Identificamos el cambio más rápido y rentable para los próximos 14 días."
                  : "We pinpoint the single highest-ROI fix for the next 14 days."}
              </li>
              <li>
                {es
                  ? "Si encajamos, te enviamos un plan claro por escrito. Si no, te llevas las ideas gratis."
                  : "If it is a fit, we send a clear written plan. If not, you keep the recommendations free."}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

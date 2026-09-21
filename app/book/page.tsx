import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return {
    title: es ? "Empezar la conversación" : "Book a conversation",
    description: es
      ? "Habla con MACS Digital Media."
      : "Talk with MACS Digital Media.",
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
        <div>
          <h1 id="booking-title">
            {es ? "Empezar la conversación" : "Book a conversation."}
          </h1>
          <p>
            {es
              ? "Cuéntanos en qué estás trabajando y juntos veremos cuál es el mejor siguiente paso."
              : "Tell us what you’re working on and we’ll figure out the best next step together."}
          </p>
          <div className="route-cta">
            <a
              className="button button--primary"
              href="mailto:macsdigitalmedia@gmail.com"
            >
              {es ? "Escribir a MACS" : "Email MACS"}{" "}
              <span className="button-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Notes",
  description: "What MACS Digital Media is seeing, testing and learning.",
};

export default async function NotesPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const notes = es
    ? [
        ["Home Team", "Qué modelos pequeños realmente pueden manejar trabajo de negocio.", "/built-here#home-team"],
        ["Propiedad", "Por qué una relación debe seguir porque funciona, no porque salir sea difícil.", "/story"],
        ["Contenido", "Cómo mantenemos el contenido en movimiento sin convertir al dueño en el departamento de contenido.", "/built-here#buffer-blaster"],
      ]
    : [
        ["Home Team", "What smaller models can actually handle in real business work.", "/built-here#home-team"],
        ["Ownership", "Why a relationship should continue because it works, not because leaving is painful.", "/story"],
        ["Content", "How we keep content moving without making the owner the content department.", "/built-here#buffer-blaster"],
      ];

  return (
    <div className="editorial-page">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <div>
            <h1>{es ? "Lo que estamos viendo, probando y aprendiendo." : "What we're seeing, testing and learning."}</h1>
          </div>
        </header>

        <div className="editorial-notes-list">
          {notes.map(([name, line, href]) => (
            <Link className="editorial-note" href={href} key={name}>
              <span className="editorial-kicker">{name}</span>
              <strong>{line}</strong>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

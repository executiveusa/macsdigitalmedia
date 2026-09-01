import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes from MACS Digital Media on ownership, business systems, content and the technology the team is actually testing.",
};

export default async function NotesPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const notes = es
    ? [
        ["Home Team AI", "Qué modelos pequeños y abiertos realmente pueden hacer trabajo de negocio antes de que agreguemos más infraestructura.", "/built-here#home-team"],
        ["Propiedad", "Por qué una relación debe seguir porque funciona, no porque salir sea difícil.", "/story"],
        ["Contenido", "Cómo usamos herramientas internas para producir y aprender más sin convertir al dueño en creador de contenido de tiempo completo.", "/built-here#buffer-blaster"],
      ]
    : [
        ["Home Team AI", "What smaller and open models can actually do for business work before we add more infrastructure.", "/built-here#home-team"],
        ["Ownership", "Why a relationship should continue because it works, not because leaving is painful.", "/story"],
        ["Content", "How we use internal tools to produce and learn more without turning the owner into a full-time content creator.", "/built-here#buffer-blaster"],
      ];

  return (
    <div className="editorial-page">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <p className="editorial-kicker">{es ? "Notas" : "Notes"}</p>
          <div>
            <h1>{es ? "Lo que estamos viendo, probando y aprendiendo." : "What we're seeing, testing and learning."}</h1>
            <p>{es ? "Menos publicaciones por publicar. Más notas que salen del trabajo real." : "Fewer posts for the sake of posting. More notes that come out of real work."}</p>
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

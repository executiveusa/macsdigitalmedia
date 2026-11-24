"use client";

import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export type ProgramDetail = {
  id: string;
  name: string;
  headline: string;
  summary: string;
  bestIf: string;
  timeline: string;
  deliverables: string[];
  youKeep: string;
};

export function ProgramExplorer({
  programs,
  es,
}: {
  programs: ProgramDetail[];
  es: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<string>("all");

  const tabs = [
    { id: "all", label: es ? "Todos (4)" : "All programs (4)" },
    ...programs.map((p) => ({ id: p.id, label: p.name })),
  ];

  const visible = selected === "all" ? programs : programs.filter((p) => p.id === selected);

  return (
    <div>
      <div
        className="macs-segmented"
        role="tablist"
        aria-label={es ? "Filtrar programas" : "Filter programs"}
      >
        {tabs.map((tab) => {
          const isActive = selected === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className="macs-segmented__btn"
              onClick={() => setSelected(tab.id)}
            >
              {isActive ? (
                <m.span
                  layoutId="macs-program-segmented-pill"
                  className="macs-segmented__pill"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 460, damping: 36 }
                  }
                />
              ) : null}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div>
        {visible.map((program) => (
          <section className="macs-program-card" id={program.id} key={program.id}>
            <div>
              <p className="macs-program-card__name">{program.name}</p>
            </div>
            <div>
              <h2 className="macs-program-card__title">{program.headline}</h2>
              <p className="macs-program-card__summary">{program.summary}</p>
              <ul className="macs-program-card__list">
                {program.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <dl className="macs-program-card__meta">
              <div>
                <dt>{es ? "Ideal si" : "Best if"}</dt>
                <dd>{program.bestIf}</dd>
              </div>
              <div>
                <dt>{es ? "Ritmo típico" : "Typical pace"}</dt>
                <dd>{program.timeline}</dd>
              </div>
              <div>
                <dt>{es ? "Te quedas con" : "You own"}</dt>
                <dd>{program.youKeep}</dd>
              </div>
              <div>
                <Link
                  className="macs-btn macs-btn--dark"
                  href={`/apply?program=${program.id}`}
                >
                  {es ? `Empezar con ${program.name}` : `Start with ${program.name}`}{" "}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}

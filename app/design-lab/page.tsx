import Image from "next/image";
import Link from "next/link";
import { designTerritories, territoryOrder } from "@/lib/design-territories";

export const metadata = {
  title: "Phase 05 Design Lab | MACS Digital Media",
  robots: { index: false, follow: false },
};

export default function DesignLabPage() {
  return (
    <div className="design-lab-index">
      <header className="design-lab-index__intro">
        <p>MACS Digital Media · Phase 05</p>
        <h1>Three directions. One story.</h1>
        <div>
          <p>The design protocol requires materially different restrained, expressive and experimental territories before a final direction is selected.</p>
          <p>Each uses the same six-beat architecture and real MACS proof. The difference is how the brand behaves visually.</p>
        </div>
      </header>

      <div className="design-lab-index__grid">
        {territoryOrder.map((key) => {
          const territory = designTerritories[key];
          return (
            <Link href={`/design-lab/${key}`} key={key} className={`design-lab-card ${territory.className}`}>
              <div className="design-lab-card__art">
                <Image src={territory.art} alt={territory.artAlt} fill sizes="(max-width: 800px) 100vw, 33vw" />
              </div>
              <span>{territory.category}</span>
              <h2>{territory.name}</h2>
              <p>{territory.governingIdea}</p>
              <strong>Open prototype →</strong>
            </Link>
          );
        })}
      </div>

      <footer className="design-lab-index__note">
        <p>These routes are prototype evidence, not production selection. A final territory still requires owner approval.</p>
        <Link href="/">Return to current rebuild →</Link>
      </footer>
    </div>
  );
}

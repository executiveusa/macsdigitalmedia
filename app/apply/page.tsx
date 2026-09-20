import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tell us what's important",
  description: "Book a conversation with MACS Digital Media.",
};

export default function ApplyPage() {
  return (
    <section className="section application-page" aria-labelledby="application-title">
      <div className="shell application-layout">
        <div>
          <h1 id="application-title">Tell us what’s important.</h1>
          <div className="route-cta">
            <Link className="button button--primary" href="/book">
              Book a conversation <span className="button-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

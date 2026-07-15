import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How MACS Digital Media handles website and founding application information.",
};

export default function PrivacyPage() {
  return (
    <article className="content-page">
      <header className="content-page__hero">
        <div className="shell">
          <p className="eyebrow eyebrow--dark">Privacy</p>
          <h1>What we collect, why we collect it, and how we limit access.</h1>
          <p className="content-page__lede">Last updated July 15, 2026.</p>
        </div>
      </header>

      <div className="shell content-page__body legal-copy">
        <h2>Founding application information</h2>
        <p>
          The application collects your name, work email, optional phone number, organization details, Washington service area, staffing range, and the operational problems and outcomes you describe. Do not submit passwords, credentials, medical records, financial account information, or private client records.
        </p>

        <h2>Why MACS uses this information</h2>
        <p>
          MACS uses application information to assess fit for the Washington Founding Launch, contact qualified applicants, prepare a discovery conversation, prevent abusive submissions, and maintain an internal application record.
        </p>

        <h2>Storage and access</h2>
        <p>
          Application records are stored in a private Supabase database table. The public website cannot read submitted applications. Database access is limited to authorized server-side systems and authorized MACS reviewers. Service-role credentials remain server-side and are never sent to the browser.
        </p>

        <h2>Abuse prevention</h2>
        <p>
          MACS generates a one-way request fingerprint from connection and browser information to limit repeated automated submissions. The raw IP address is not stored in the application table. The fingerprint is not used for advertising or cross-site tracking.
        </p>

        <h2>Sharing</h2>
        <p>
          MACS does not sell founding application information. Information may be processed by infrastructure providers required to operate the site and database. Public testimonials, logos, screenshots, interviews, and named case studies require separate written consent.
        </p>

        <h2>Retention and requests</h2>
        <p>
          Application information is retained while MACS evaluates the application, communicates with the applicant, or maintains a reasonable business record. Applicants may request correction or deletion by contacting MACS through the contact method provided during follow-up.
        </p>

        <h2>Changes</h2>
        <p>
          This notice may be updated as the application, notification, and client onboarding systems mature. Material changes will be reflected by a new update date on this page.
        </p>
      </div>
    </article>
  );
}

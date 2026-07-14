import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <img
            src="/logo.png"
            alt="MACS Digital Media"
            width={500}
            height={378}
            className="footer-logo"
          />
          <p className="site-footer__statement">
            Managed, client-owned AI operating systems for Washington organizations.
          </p>
        </div>
        <div>
          <h2 className="site-footer__heading">Explore</h2>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <Link href="/#what-we-build">What we build</Link>
            <Link href="/#system-work">See the system work</Link>
            <Link href="/#founding-offer">Founding offer</Link>
            <Link href="/apply">Apply</Link>
          </nav>
        </div>
        <div>
          <h2 className="site-footer__heading">Operating principle</h2>
          <p className="site-footer__statement">
            Human approval where it matters. Clear activity history. No required long-term lock-in.
          </p>
        </div>
      </div>
      <div className="shell site-footer__legal">
        <span>© {new Date().getFullYear()} MACS Digital Media</span>
        <span>Washington, USA</span>
      </div>
    </footer>
  );
}

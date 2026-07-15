import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import "./ms01.css";
import "./ms01-nav.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.macsdigitalmedia.com"),
  title: {
    default: "MACS Digital Media | Managed AI Operating Systems",
    template: "%s | MACS Digital Media",
  },
  description:
    "MACS Digital Media installs and manages client-owned AI operating systems for Washington nonprofits, social-purpose organizations, and small businesses.",
  openGraph: {
    title: "MACS Digital Media",
    description: "Managed AI operating systems for Washington organizations.",
    type: "website",
    url: "https://www.macsdigitalmedia.com",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 378,
        alt: "MACS Digital Media",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { MotionRoot, PageTransition } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePreferencesProvider } from "@/components/site-preferences";
import { siteCopy } from "@/lib/i18n";
import { getServerPreferences } from "@/lib/server-preferences";
import "./globals.css";
import "./ms01.css";
import "./ms01-nav.css";
import "./hero-usability.css";
import "./polish.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.macsdigitalmedia.com"),
  title: {
    default: "MACS Digital Media | Client-Owned AI Operating Systems",
    template: "%s | MACS Digital Media",
  },
  description:
    "MACS Digital Media designs and installs managed, client-owned AI operating systems for Washington nonprofits, social-purpose organizations, and small businesses.",
  openGraph: {
    title: "MACS Digital Media",
    description: "Client-owned AI operating systems for Washington organizations.",
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

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const preferences = await getServerPreferences();
  const common = siteCopy[preferences.locale].common;

  return (
    <html
      lang={preferences.locale}
      data-locale={preferences.locale}
      data-theme={preferences.theme}
      suppressHydrationWarning
    >
      <body>
        <SitePreferencesProvider
          initialLocale={preferences.locale}
          initialTheme={preferences.theme}
        >
          <MotionRoot>
            <a className="skip-link" href="#main-content">
              {common.skip}
            </a>
            <SiteHeader />
            <main id="main-content">
              <PageTransition>{children}</PageTransition>
            </main>
            <SiteFooter />
          </MotionRoot>
        </SitePreferencesProvider>
      </body>
    </html>
  );
}

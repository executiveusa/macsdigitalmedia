import type { Metadata } from "next";
import { MotionRoot, PageTransition } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePreferencesProvider } from "@/components/site-preferences";
import { siteCopy } from "@/lib/i18n";
import { offerCopy } from "@/lib/offer-copy";
import { getServerPreferences } from "@/lib/server-preferences";
import "./globals.css";
import "./ms01.css";
import "./ms01-nav.css";
import "./hero-usability.css";
import "./polish.css";
import "./theme-compat.css";
import "./offer.css";

export async function generateMetadata(): Promise<Metadata> {
  const preferences = await getServerPreferences();
  const home = offerCopy[preferences.locale].home;

  return {
    metadataBase: new URL("https://www.macsdigitalmedia.com"),
    title: {
      default: home.metadataTitle,
      template: "%s | MACS Digital Media",
    },
    description: home.metadataDescription,
    openGraph: {
      title: home.metadataTitle,
      description: home.metadataDescription,
      type: "website",
      url: "https://www.macsdigitalmedia.com",
      locale: preferences.locale === "es-MX" ? "es_MX" : "en_US",
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
}

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

import { TerritoryPage } from "@/components/design-lab/territory-page";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata = { title: "Confluence — Phase 05 | MACS Digital Media", robots: { index: false, follow: false } };

export default async function ConfluencePrototype() {
  return <TerritoryPage territoryKey="confluence" locale={await getServerLocale()} />;
}

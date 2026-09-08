import { TerritoryPage } from "@/components/design-lab/territory-page";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata = { title: "Long View — Phase 05 | MACS Digital Media", robots: { index: false, follow: false } };

export default async function LongViewPrototype() {
  return <TerritoryPage territoryKey="long-view" locale={await getServerLocale()} />;
}

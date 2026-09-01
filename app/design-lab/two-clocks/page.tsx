import { TerritoryPage } from "@/components/design-lab/territory-page";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata = { title: "Two Clocks — Phase 05 | MACS Digital Media", robots: { index: false, follow: false } };

export default async function TwoClocksPrototype() {
  return <TerritoryPage territoryKey="two-clocks" locale={await getServerLocale()} />;
}

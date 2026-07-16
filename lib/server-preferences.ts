import "server-only";

import { cookies } from "next/headers";
import {
  DEFAULT_LOCALE,
  DEFAULT_THEME,
  normalizeLocale,
  normalizeTheme,
  type Locale,
  type ThemePreference,
} from "@/lib/i18n";

export type ServerPreferences = {
  locale: Locale;
  theme: ThemePreference;
};

export async function getServerPreferences(): Promise<ServerPreferences> {
  try {
    const cookieStore = await cookies();

    return {
      locale: normalizeLocale(cookieStore.get("macs-locale")?.value),
      theme: normalizeTheme(cookieStore.get("macs-theme")?.value),
    };
  } catch {
    return { locale: DEFAULT_LOCALE, theme: DEFAULT_THEME };
  }
}

export async function getServerLocale(): Promise<Locale> {
  return (await getServerPreferences()).locale;
}

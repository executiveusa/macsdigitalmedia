"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  useTransition,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  siteCopy,
  type Locale,
  type ThemePreference,
} from "@/lib/i18n";

type ResolvedTheme = "light" | "dark";

type PreferencesContextValue = {
  locale: Locale;
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  copy: (typeof siteCopy)[Locale];
  setLocale: (locale: Locale) => void;
  setTheme: (theme: ThemePreference) => void;
  pendingLocaleChange: boolean;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function persistCookie(name: string, value: string) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
}

function subscribeToSystemTheme(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getSystemThemeSnapshot(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getSystemThemeServerSnapshot(): ResolvedTheme {
  return "light";
}

export function SitePreferencesProvider({
  initialLocale,
  initialTheme,
  children,
}: {
  initialLocale: Locale;
  initialTheme: ThemePreference;
  children: ReactNode;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [theme, setThemeState] = useState<ThemePreference>(initialTheme);
  const systemTheme = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemThemeSnapshot,
    getSystemThemeServerSnapshot,
  );
  const [pendingLocaleChange, startLocaleTransition] = useTransition();

  const resolvedTheme: ResolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.resolvedTheme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
  }, [resolvedTheme, theme]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === locale) return;

      setLocaleState(nextLocale);
      window.localStorage.setItem("macs-locale", nextLocale);
      persistCookie("macs-locale", nextLocale);
      startLocaleTransition(() => router.refresh());
    },
    [locale, router],
  );

  const setTheme = useCallback((nextTheme: ThemePreference) => {
    setThemeState(nextTheme);
    window.localStorage.setItem("macs-theme", nextTheme);
    persistCookie("macs-theme", nextTheme);
  }, []);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      locale,
      theme,
      resolvedTheme,
      copy: siteCopy[locale],
      setLocale,
      setTheme,
      pendingLocaleChange,
    }),
    [locale, pendingLocaleChange, resolvedTheme, setLocale, setTheme, theme],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function useSitePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("useSitePreferences must be used inside SitePreferencesProvider.");
  }

  return context;
}

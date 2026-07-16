"use client";

import { useSitePreferences } from "@/components/site-preferences";
import type { ThemePreference } from "@/lib/i18n";

const themes: ThemePreference[] = ["system", "light", "dark"];

function ThemeIcon({ theme }: { theme: ThemePreference }) {
  if (theme === "light") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  if (theme === "dark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 14.2A8.4 8.4 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function PreferenceControls() {
  const { locale, setLocale, theme, setTheme, copy, pendingLocaleChange } = useSitePreferences();
  const common = copy.common;

  const themeLabel =
    theme === "light"
      ? common.themeLightLabel
      : theme === "dark"
        ? common.themeDarkLabel
        : common.themeSystemLabel;

  function cycleTheme() {
    const index = themes.indexOf(theme);
    setTheme(themes[(index + 1) % themes.length]);
  }

  return (
    <div className="preference-controls" aria-label={`${common.languageControl}; ${common.themeControl}`}>
      <div className="language-toggle" role="group" aria-label={common.languageControl}>
        <button
          type="button"
          aria-pressed={locale === "en"}
          disabled={pendingLocaleChange}
          onClick={() => setLocale("en")}
        >
          EN
          <span className="sr-only">{common.english}</span>
        </button>
        <button
          type="button"
          aria-pressed={locale === "es-MX"}
          disabled={pendingLocaleChange}
          onClick={() => setLocale("es-MX")}
        >
          ES
          <span className="sr-only">{common.spanish}</span>
        </button>
      </div>

      <button
        className="theme-toggle"
        type="button"
        aria-label={themeLabel}
        title={themeLabel}
        onClick={cycleTheme}
      >
        <ThemeIcon theme={theme} />
        <span className="theme-toggle__label">
          {theme === "light" ? common.lightTheme : theme === "dark" ? common.darkTheme : common.systemTheme}
        </span>
      </button>
    </div>
  );
}

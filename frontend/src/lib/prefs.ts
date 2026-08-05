export type Theme = 'dark' | 'light';
export type Locale = 'es' | 'en';

const THEME_KEY = 'portfolio-theme';
const LOCALE_KEY = 'portfolio-locale';

export function getStoredTheme(): Theme {
  const value = localStorage.getItem(THEME_KEY);
  return value === 'light' ? 'light' : 'dark';
}

export function getStoredLocale(): Locale {
  const value = localStorage.getItem(LOCALE_KEY);
  return value === 'en' ? 'en' : 'es';
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

export function applyLocale(locale: Locale) {
  document.documentElement.lang = locale;
  localStorage.setItem(LOCALE_KEY, locale);
}

export function initPrefs() {
  applyTheme(getStoredTheme());
  applyLocale(getStoredLocale());
}

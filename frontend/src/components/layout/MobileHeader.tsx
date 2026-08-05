import { Moon, Sun } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';
import { useTheme } from '../../contexts/ThemeContext';
import { PROFILE } from '../../data/profile';

function FlagEs({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="24" height="16" rx="2" fill="#C60B1E" />
      <rect y="4" width="24" height="8" fill="#FFC400" />
    </svg>
  );
}

function FlagEn({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="24" height="16" rx="2" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="2.5" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="4" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2.2" />
    </svg>
  );
}

export function MobileHeader() {
  const { locale, toggleLocale, t } = useLocale();
  const { theme, toggleTheme } = useTheme();

  const scrollHome = () => {
    document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="mobile-header" aria-label="Cabecera">
      <button type="button" className="mobile-header-brand" onClick={scrollHome}>
        <span className="mobile-header-name">{PROFILE.name.split(' ')[0]}</span>
        <span className="mobile-header-role">{t.hero.role.split('(')[0].trim()}</span>
      </button>

      <div className="mobile-header-actions">
        <button
          type="button"
          className="mobile-icon-btn"
          onClick={toggleLocale}
          aria-label={locale === 'es' ? t.sidebar.switchToEn : t.sidebar.switchToEs}
        >
          {locale === 'es' ? (
            <FlagEs className="h-3 w-[1.15rem] rounded-[2px]" />
          ) : (
            <FlagEn className="h-3 w-[1.15rem] rounded-[2px]" />
          )}
        </button>
        <button
          type="button"
          className="mobile-icon-btn"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t.sidebar.lightMode : t.sidebar.darkMode}
        >
          {theme === 'dark' ? (
            <Sun className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.75} />
          ) : (
            <Moon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.75} />
          )}
        </button>
      </div>
    </header>
  );
}

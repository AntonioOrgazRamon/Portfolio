import { Home, Moon, Sun, User, Layers, Mail } from 'lucide-react';
import { ProjectsSidebarMenu } from './ProjectsSidebarMenu';
import type { ReactNode } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import { useTheme } from '../../contexts/ThemeContext';

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

interface SidebarButtonProps {
  label: string;
  onClick: () => void;
  children: ReactNode;
}

function SidebarButton({ label, onClick, children }: SidebarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="sidebar-btn group relative cursor-pointer"
      aria-label={label}
      title={label}
    >
      {children}
      <span className="sidebar-tooltip">{label}</span>
    </button>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Sidebar() {
  const { locale, toggleLocale, t } = useLocale();
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="sidebar desktop-sidebar" aria-label="Navegación">
      <nav className="sidebar-nav">
        <div className="sidebar-group">
          <SidebarButton label={t.sidebar.home} onClick={() => scrollToSection('inicio')}>
            <Home className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
          </SidebarButton>
          <SidebarButton label={t.sidebar.about} onClick={() => scrollToSection('sobre-mi')}>
            <User className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
          </SidebarButton>
          <SidebarButton label={t.sidebar.stack} onClick={() => scrollToSection('tecnologias')}>
            <Layers className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
          </SidebarButton>
          <ProjectsSidebarMenu />
          <SidebarButton label={t.sidebar.contact} onClick={() => scrollToSection('contacto')}>
            <Mail className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
          </SidebarButton>
        </div>

        <div className="sidebar-divider" aria-hidden />

        <div className="sidebar-group">
          <SidebarButton
            label={locale === 'es' ? t.sidebar.switchToEn : t.sidebar.switchToEs}
            onClick={toggleLocale}
          >
            {locale === 'es' ? (
              <FlagEs className="h-3.5 w-5 rounded-[2px] shadow-sm" />
            ) : (
              <FlagEn className="h-3.5 w-5 rounded-[2px] shadow-sm" />
            )}
          </SidebarButton>

          <SidebarButton
            label={theme === 'dark' ? t.sidebar.lightMode : t.sidebar.darkMode}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <Sun className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
            ) : (
              <Moon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
            )}
          </SidebarButton>
        </div>
      </nav>
    </aside>
  );
}

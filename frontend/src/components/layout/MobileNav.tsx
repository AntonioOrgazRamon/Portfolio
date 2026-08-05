import { Briefcase, Home, Layers, Mail, User } from 'lucide-react';
import { useActiveSection, type ActiveSection } from '../../hooks/useActiveSection';
import { useLocale } from '../../contexts/LocaleContext';

const NAV: { id: ActiveSection; icon: typeof Home; labelKey: keyof typeof labels }[] = [
  { id: 'inicio', icon: Home, labelKey: 'home' },
  { id: 'sobre-mi', icon: User, labelKey: 'about' },
  { id: 'tecnologias', icon: Layers, labelKey: 'stack' },
  { id: 'proyectos', icon: Briefcase, labelKey: 'projects' },
  { id: 'contacto', icon: Mail, labelKey: 'contact' },
];

const labels = {
  home: 'home',
  about: 'about',
  stack: 'stack',
  projects: 'projects',
  contact: 'contact',
} as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function MobileNav() {
  const active = useActiveSection();
  const { t } = useLocale();

  const labelMap = {
    home: t.sidebar.home,
    about: t.sidebar.about,
    stack: t.sidebar.stack,
    projects: t.sidebar.projects,
    contact: t.sidebar.contact,
  };

  return (
    <nav className="mobile-nav" aria-label="Navegación principal">
      <div className="mobile-nav-inner">
        {NAV.map(({ id, icon: Icon, labelKey }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              className={`mobile-nav-item${isActive ? ' is-active' : ''}`}
              onClick={() => scrollTo(id)}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="mobile-nav-icon" strokeWidth={isActive ? 2 : 1.65} />
              <span className="mobile-nav-label">{labelMap[labelKey]}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

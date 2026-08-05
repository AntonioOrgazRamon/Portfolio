import { Briefcase } from 'lucide-react';
import { useCallback, useRef, useState, type CSSProperties } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import { PROJECTS } from '../../data/projects';

const PROJECT_ABBR: Record<string, string> = {
  nakedcode: 'NK',
  atlas: 'At',
  nexus: 'Nx',
  blackjack: 'BJ',
};

function scrollToProject(id: string) {
  document.getElementById(`proyecto-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function ProjectsSidebarMenu() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  }, []);

  const scrollToFirst = useCallback(() => {
    scrollToProject(PROJECTS[0].id);
  }, []);

  const handleProjectClick = useCallback((id: string) => {
    scrollToProject(id);
    setOpen(false);
  }, []);

  return (
    <div
      className={`sidebar-projects${open ? ' is-open' : ''}`}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocusCapture={openMenu}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="sidebar-btn sidebar-projects-trigger group relative cursor-pointer"
        aria-label={t.sidebar.projects}
        aria-haspopup="menu"
        aria-expanded={open}
        title={t.sidebar.projects}
        onClick={scrollToFirst}
      >
        <Briefcase className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
        <span className="sidebar-tooltip">{t.sidebar.projects}</span>
      </button>

      <div
        className="sidebar-projects-panel"
        role="menu"
        aria-label={t.sidebar.projects}
        aria-hidden={!open}
        inert={open ? undefined : true}
      >
        {PROJECTS.map((project, index) => (
          <button
            key={project.id}
            type="button"
            role="menuitem"
            tabIndex={open ? 0 : -1}
            className="sidebar-btn sidebar-projects-item group relative cursor-pointer"
            style={{ '--item-index': index } as CSSProperties}
            aria-label={t.projects.items[project.id].title}
            title={t.projects.items[project.id].title}
            onClick={() => handleProjectClick(project.id)}
          >
            <span className="sidebar-projects-abbr">{PROJECT_ABBR[project.id]}</span>
            <span className="sidebar-tooltip">{t.projects.items[project.id].title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

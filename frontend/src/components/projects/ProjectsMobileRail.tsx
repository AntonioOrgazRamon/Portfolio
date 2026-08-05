import { useLocalizedProjects } from '../../hooks/useLocalizedProjects';
import { useLocale } from '../../contexts/LocaleContext';

function scrollToProject(id: string) {
  document.getElementById(`proyecto-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function ProjectsMobileRail() {
  const projects = useLocalizedProjects();
  const { t } = useLocale();

  return (
    <div className="projects-rail" aria-label={t.sidebar.projects}>
      <div className="projects-rail-track" data-reveal-group>
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            data-reveal-item
            className={`projects-rail-pill projects-rail-pill--${project.variant}`}
            onClick={() => scrollToProject(project.id)}
          >
            <span className="projects-rail-accent">{project.copy.accentLabel}</span>
            <span className="projects-rail-title">{project.copy.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

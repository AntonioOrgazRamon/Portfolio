import { useLocalizedProjects } from '../../hooks/useLocalizedProjects';
import { useLocale } from '../../contexts/LocaleContext';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionShell } from '../ui/SectionShell';
import { ProjectCard } from './ProjectCard';
import { ProjectsMobileRail } from './ProjectsMobileRail';

export function ProjectsSection() {
  const projects = useLocalizedProjects();
  const { t } = useLocale();

  return (
    <SectionShell id="proyectos" wide>
      <SectionHeading
        label={t.projects.label}
        title={t.projects.title}
        description={t.projects.description}
        className="section-heading-spacing"
      />

      <ProjectsMobileRail />

      <div className="projects-list">
        {projects.map((project, i) => (
          <div key={project.id} id={`proyecto-${project.id}`} className="project-item scroll-mt-32 lg:scroll-mt-28">
            {i > 0 && <div className="project-divider" data-reveal aria-hidden />}
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

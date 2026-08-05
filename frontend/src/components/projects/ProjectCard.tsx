import { ExternalLink } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';
import type { LocalizedProject } from '../../hooks/useLocalizedProjects';
import { GitHubIcon } from '../ui/SocialIcons';
import { StatusBadge } from '../ui/StatusBadge';
import { ProjectExpandableText } from './ProjectExpandableText';
import { ProjectGallery } from './ProjectGallery';
import { ProjectMobileGallery } from './ProjectMobileGallery';
import { TechStackIcons } from './TechStackIcons';

interface ProjectCardProps {
  project: LocalizedProject;
}

function ProjectActions({ project, title }: { project: LocalizedProject; title: string }) {
  const { t } = useLocale();

  return (
    <div className="project-actions">
      {project.productionUrl ? (
        <a
          href={project.productionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-btn project-touch-target"
          aria-label={`${t.projects.viewProduction} ${title}`}
        >
          <ExternalLink className="h-5 w-5" strokeWidth={1.5} />
        </a>
      ) : (
        <span className="project-link-btn project-link-btn--disabled project-touch-target" aria-hidden>
          <ExternalLink className="h-5 w-5" strokeWidth={1.5} />
        </span>
      )}
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-btn project-touch-target"
          aria-label={`${t.projects.viewRepository} ${title}`}
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
      ) : (
        <span
          className="project-link-btn project-link-btn--disabled project-touch-target"
          title={t.projects.privateRepo}
          aria-label={t.projects.privateRepo}
        >
          <GitHubIcon className="h-5 w-5" />
        </span>
      )}
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLocale();
  const { copy } = project;
  const variant = project.variant;

  return (
    <article className={`project-card project-card--${variant}`} data-project-block>
      {/* Mobile + tablet */}
      <div className="project-layout-mobile">
        <header className="project-mobile-header" data-project-part>
          <div className="project-mobile-meta">
            <span className={`project-accent project-accent--${variant}`}>{copy.accentLabel}</span>
            <StatusBadge status={project.status} label={t.projects.status[project.status]} />
          </div>

          <div className="project-mobile-title-row">
            <h3 data-read-text data-read-tone="heading" className="project-mobile-title">
              {copy.title}
            </h3>
            <ProjectActions project={project} title={copy.title} />
          </div>

          <p data-read-text className="project-mobile-tagline">
            {copy.tagline}
          </p>
          <p className="project-mobile-status">{copy.statusDescription}</p>
        </header>

        <div data-project-part>
          <ProjectMobileGallery items={project.gallery} variant={variant} />
        </div>

        <div className="project-mobile-body" data-project-part>
          <ProjectExpandableText
            paragraphs={copy.paragraphs}
            variant={variant === 'experimental' ? 'minimal' : 'default'}
          />
          <TechStackIcons slugs={project.techSlugs} className="project-mobile-stack" />
        </div>
      </div>

      {/* Desktop */}
      <div className="project-layout-desktop">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-4" data-project-part>
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} label={t.projects.status[project.status]} />
              <span className="text-xs text-[var(--color-muted-dim)]">{copy.statusDescription}</span>
            </div>

            <h3 className="group cursor-default font-heading text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight">
              <span
                data-read-text
                data-read-tone="heading"
                className="transition-colors duration-300 group-hover:text-[var(--color-text-bright)]"
              >
                {copy.title}
              </span>
              <span className="mt-1 block h-px w-0 bg-[var(--color-muted)] transition-all duration-400 group-hover:w-full" />
            </h3>
          </div>
          <ProjectActions project={project} title={copy.title} />
        </header>

        <div className="project-desktop-grid items-stretch gap-10">
          <div className="project-desktop-copy" data-project-part>
            <div className="space-y-4">
              {copy.paragraphs.map((paragraph, i) => (
                <p key={i} data-read-text className="text-[0.9375rem] leading-[1.85] md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <TechStackIcons slugs={project.techSlugs} className="project-desktop-stack" />
          </div>
          <div className="project-media" data-project-part>
            <ProjectGallery items={project.gallery} />
          </div>
        </div>
      </div>
    </article>
  );
}

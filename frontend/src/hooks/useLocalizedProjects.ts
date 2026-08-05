import { useMemo } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import { PROJECTS, type Project, type ProjectMedia } from '../data/projects';
import type { ProjectCaseStudyCopy } from '../data/i18n';

export interface LocalizedProject extends Project {
  copy: ProjectCaseStudyCopy;
  gallery: (ProjectMedia & { alt: string })[];
}

export function useLocalizedProjects(): LocalizedProject[] {
  const { t } = useLocale();

  return useMemo(
    () =>
      PROJECTS.map((project) => {
        const copy = t.projects.items[project.id];
        return {
          ...project,
          copy,
          gallery: project.gallery.map((item, i) => ({
            ...item,
            alt: copy.galleryAlts[i] ?? item.alt ?? '',
          })),
        };
      }),
    [t],
  );
}

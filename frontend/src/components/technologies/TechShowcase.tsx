import { useLocale } from '../../contexts/LocaleContext';
import { TECH_CATEGORIES } from '../../data/techStack';
import { TechStackIcons } from '../projects/TechStackIcons';

export function TechShowcase() {
  const { t } = useLocale();

  return (
    <div className="tech-showcase space-y-12 md:space-y-14">
      {TECH_CATEGORIES.map((category) => (
        <div key={category.id} data-reveal className="tech-showcase-category">
          <div className="mb-2 flex items-center gap-4">
            <h3 className="label-mono shrink-0 text-[var(--color-text)]">
              {t.technologies.categories[category.id]}
            </h3>
            <span className="section-divider flex-1" aria-hidden />
          </div>
          <p className="mb-5 text-sm" data-read-text>
            {t.technologies.categoryNotes[category.id]}
          </p>
          <TechStackIcons slugs={category.slugs} className="tech-showcase-icons mt-0" />
        </div>
      ))}
    </div>
  );
}

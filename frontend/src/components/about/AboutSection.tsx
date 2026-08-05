import { useLocale } from '../../contexts/LocaleContext';
import { ProjectExpandableText } from '../projects/ProjectExpandableText';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionShell } from '../ui/SectionShell';

export function AboutSection() {
  const { t } = useLocale();

  return (
    <SectionShell id="sobre-mi">
      <SectionHeading
        label={t.about.label}
        title={t.about.title}
        description={t.about.description}
        className="section-heading-spacing"
      />

      <div className="about-mobile-only">
        <ProjectExpandableText paragraphs={t.about.paragraphs} />
      </div>

      <div className="about-desktop-only space-y-6">
        {t.about.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            data-read-text
            data-read-tone={i === 0 ? 'lead' : undefined}
            className={i === 0 ? 'text-lead' : 'text-[0.975rem] leading-[1.8] md:text-base'}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="about-highlights mt-10" data-reveal-group>
        {t.about.highlights.map((item) => (
          <li key={item} data-reveal-item data-read-text>
            {item}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

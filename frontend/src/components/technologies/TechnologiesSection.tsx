import { useLocale } from '../../contexts/LocaleContext';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionShell } from '../ui/SectionShell';
import { TechShowcase } from './TechShowcase';

export function TechnologiesSection() {
  const { t } = useLocale();

  return (
    <SectionShell id="tecnologias">
      <SectionHeading
        label={t.technologies.label}
        title={t.technologies.title}
        description={t.technologies.description}
        className="section-heading-spacing mb-16 md:mb-20"
      />

      <TechShowcase />
    </SectionShell>
  );
}

import { useLocale } from '../../contexts/LocaleContext';
import { PROFILE } from '../../data/profile';
import { CtaLinks } from '../ui/CtaLinks';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionShell } from '../ui/SectionShell';

export function ContactSection() {
  const { t } = useLocale();

  return (
    <SectionShell id="contacto">
      <SectionHeading
        label={t.contact.label}
        title={t.contact.title}
        description={t.contact.description}
        className="section-heading-spacing mb-10 md:mb-12"
      />

      <div data-reveal className="contact-card">
        <p
          data-read-text
          data-read-tone="heading"
          className="font-heading text-xl font-semibold"
        >
          {PROFILE.name}
        </p>
        <p data-read-text className="mt-2 text-sm">
          {t.hero.role}
        </p>
        <p data-read-text className="mt-6 text-sm leading-relaxed">
          {t.contact.availability}
        </p>
        <div className="contact-cta-row mt-8" data-reveal-group>
          <CtaLinks variant="contact" />
        </div>
      </div>
    </SectionShell>
  );
}

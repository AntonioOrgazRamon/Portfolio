import { useLocale } from '../../contexts/LocaleContext';
import { PROFILE } from '../../data/profile';
import { CtaLinks } from '../ui/CtaLinks';
import { SectionShell } from '../ui/SectionShell';

export function HeroSection() {
  const { t } = useLocale();

  return (
    <SectionShell id="inicio" className="hero-shell !pb-20 md:!pb-24">
      <div className="hero-inner relative">
        <p data-hero-item className="label-mono label-accent mb-6">
          {t.hero.label}
        </p>

        <h1
          data-hero-item
          data-read-text
          data-read-tone="heading"
          className="font-heading text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
        >
          {PROFILE.name}
        </h1>

        <p data-hero-item data-read-text className="hero-role mt-4 text-lg md:text-xl">
          {t.hero.role}
        </p>

        <p
          data-hero-item
          data-read-text
          data-read-tone="lead"
          className="hero-headline text-lead mt-6 max-w-2xl"
        >
          {t.hero.headline}
        </p>

        <p
          data-hero-item
          data-read-text
          className="hero-subline mt-4 max-w-2xl text-[0.9375rem] leading-relaxed md:text-base"
        >
          {t.hero.subline}
        </p>

        <div data-hero-item className="hero-cta-row mt-10">
          <CtaLinks variant="hero" />
        </div>
      </div>
    </SectionShell>
  );
}

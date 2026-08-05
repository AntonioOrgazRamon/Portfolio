import { Download, Mail } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';
import { hasContactLink, PROFILE } from '../../data/profile';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

type CtaVariant = 'primary' | 'secondary' | 'ghost';

interface CtaLinksProps {
  variant?: 'hero' | 'contact';
  className?: string;
}

function ctaClass(variant: CtaVariant) {
  const base =
    'cta-btn data-reveal-item inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  if (variant === 'primary') {
    return `${base} bg-[var(--color-text-bright)] text-[var(--color-bg)] hover:opacity-90`;
  }
  if (variant === 'secondary') {
    return `${base} border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-accent-soft)]`;
  }
  return `${base} cta-btn--ghost text-[var(--color-muted)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-text)]`;
}

export function CtaLinks({ variant = 'hero', className = '' }: CtaLinksProps) {
  const { t } = useLocale();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (variant === 'hero') {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        <button type="button" onClick={() => scrollTo('proyectos')} className={ctaClass('primary')}>
          {t.hero.ctaProjects}
        </button>
        <button type="button" onClick={() => scrollTo('contacto')} className={ctaClass('secondary')}>
          {t.hero.ctaContact}
        </button>
        {hasContactLink(PROFILE.github) && (
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClass('ghost')}
          >
            <GitHubIcon className="h-4 w-4" />
            {t.hero.ctaGithub}
          </a>
        )}
        {hasContactLink(PROFILE.linkedin) && (
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClass('ghost')}
          >
            <LinkedInIcon className="h-4 w-4" />
            {t.hero.ctaLinkedin}
          </a>
        )}
        {hasContactLink(PROFILE.email) && (
          <a href={`mailto:${PROFILE.email}`} className={ctaClass('ghost')}>
            <Mail className="h-4 w-4" strokeWidth={1.75} />
            {t.hero.ctaEmail}
          </a>
        )}
        {hasContactLink(PROFILE.cvUrl) && (
          <a href={PROFILE.cvUrl} download={PROFILE.cvDownloadName} className={ctaClass('ghost')}>
            <Download className="h-4 w-4" strokeWidth={1.75} />
            {t.hero.ctaCv}
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`} data-reveal-group>
      {hasContactLink(PROFILE.email) ? (
        <a href={`mailto:${PROFILE.email}`} className={ctaClass('primary')}>
          <Mail className="h-4 w-4" strokeWidth={1.75} />
          {t.contact.email}
        </a>
      ) : (
        <p className="text-sm text-[var(--color-muted-dim)]">{t.contact.configureLinks}</p>
      )}
      {hasContactLink(PROFILE.github) && (
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClass('secondary')}
        >
          <GitHubIcon className="h-4 w-4" />
          {t.contact.github}
        </a>
      )}
      {hasContactLink(PROFILE.linkedin) && (
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClass('secondary')}
        >
          <LinkedInIcon className="h-4 w-4" />
          {t.contact.linkedin}
        </a>
      )}
      {hasContactLink(PROFILE.cvUrl) && (
        <a href={PROFILE.cvUrl} download={PROFILE.cvDownloadName} className={ctaClass('secondary')}>
          <Download className="h-4 w-4" strokeWidth={1.75} />
          {t.contact.cv}
        </a>
      )}
    </div>
  );
}

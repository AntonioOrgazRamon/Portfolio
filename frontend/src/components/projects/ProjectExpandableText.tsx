import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import { useLocale } from '../../contexts/LocaleContext';

interface ProjectExpandableTextProps {
  paragraphs: string[];
  variant?: 'default' | 'minimal';
}

export function ProjectExpandableText({ paragraphs, variant = 'default' }: ProjectExpandableTextProps) {
  const { t } = useLocale();
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  if (paragraphs.length === 0) return null;

  const [lead, ...rest] = paragraphs;
  const hasMore = rest.length > 0;

  return (
    <div className={`project-expandable project-expandable--${variant}`} data-reveal>
      <p data-read-text className="project-expandable-lead">
        {lead}
      </p>

      {hasMore && (
        <>
          <div
            id={panelId}
            className="project-expandable-panel"
            data-open={expanded}
            aria-hidden={!expanded}
          >
            <div className="project-expandable-inner">
              {rest.map((paragraph, i) => (
                <p key={i} data-read-text className="project-expandable-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="project-expandable-trigger"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((v) => !v)}
          >
            <span>{expanded ? t.mobile.readLess : t.mobile.readMore}</span>
            <ChevronDown className={`project-expandable-icon${expanded ? ' is-open' : ''}`} strokeWidth={2} />
          </button>
        </>
      )}
    </div>
  );
}

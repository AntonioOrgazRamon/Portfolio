import { useState } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import type { ProjectMedia } from '../../data/projects';
import { MediaLightbox } from './MediaLightbox';

interface ProjectMobileGalleryProps {
  items: ProjectMedia[];
  variant: string;
}

export function ProjectMobileGallery({ items, variant }: ProjectMobileGalleryProps) {
  const { t } = useLocale();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <div className={`project-mobile-gallery project-mobile-gallery--${variant}`}>
      <p className="project-mobile-gallery-hint">{t.mobile.swipeGallery}</p>
      <div className="project-mobile-gallery-track" role="list">
        {items.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            type="button"
            className="project-mobile-gallery-slide"
            role="listitem"
            aria-label={item.alt ?? `Preview ${i + 1}`}
            onClick={() => setLightboxIndex(i)}
          >
            <img src={item.src} alt="" loading="lazy" className="project-mobile-gallery-img" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <MediaLightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}

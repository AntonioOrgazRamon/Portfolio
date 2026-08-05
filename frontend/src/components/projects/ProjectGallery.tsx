import { useState } from 'react';
import { Expand, Play } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';
import { useGalleryScrollReveal } from '../../hooks/useGalleryScrollReveal';
import type { ProjectMedia } from '../../data/projects';
import { MediaLightbox } from './MediaLightbox';

interface ProjectGalleryProps {
  items: ProjectMedia[];
}

function GalleryTile({
  item,
  onOpen,
  className = '',
  viewLabel,
}: {
  item: ProjectMedia;
  onOpen: () => void;
  className?: string;
  viewLabel: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      data-gallery-tile
      onClick={onOpen}
      className={`gallery-tile ${className}`}
      aria-label={`${viewLabel} ${item.alt ?? ''}`}
    >
      <span className="gallery-tile-media">
        {!failed && item.type === 'video' ? (
          <video
            src={item.src}
            poster={item.poster}
            muted
            loop
            playsInline
            autoPlay
            className="gallery-tile-img"
            onError={() => setFailed(true)}
          />
        ) : !failed ? (
          <img
            src={item.src}
            alt=""
            loading="lazy"
            className="gallery-tile-img"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="gallery-tile-fallback">{item.alt ?? 'Preview'}</span>
        )}
      </span>

      <span className="gallery-tile-overlay" aria-hidden />
      <span className="gallery-tile-icon" aria-hidden>
        {item.type === 'video' ? (
          <Play className="h-7 w-7 text-white" fill="white" strokeWidth={1} />
        ) : (
          <Expand className="h-5 w-5 text-white" strokeWidth={2} />
        )}
      </span>
    </button>
  );
}

export function ProjectGallery({ items }: ProjectGalleryProps) {
  const { t } = useLocale();
  const galleryRef = useGalleryScrollReveal<HTMLDivElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const count = items.length;

  if (count === 0) return null;

  const gridClass =
    count === 2 ? 'gallery-grid-2' : count >= 3 ? 'gallery-grid-3' : 'gallery-grid-1';

  return (
    <div ref={galleryRef} className="project-gallery">
      <div className={gridClass}>
        {items.map((item, i) => (
          <GalleryTile
            key={`${item.src}-${i}`}
            item={item}
            viewLabel={t.lightbox.view}
            onOpen={() => setLightboxIndex(i)}
            className={count >= 3 && i === 0 ? 'gallery-featured' : ''}
          />
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

import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';
import type { ProjectMedia } from '../../data/projects';

interface MediaLightboxProps {
  items: ProjectMedia[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function MediaLightbox({ items, index, onClose, onNavigate }: MediaLightboxProps) {
  const { t } = useLocale();
  const item = items[index];
  const total = items.length;

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + total) % total);
  }, [index, onNavigate, total]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % total);
  }, [index, onNavigate, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goPrev, goNext]);

  if (!item) return null;

  return createPortal(
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label={item.alt ?? 'Media'}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label={t.lightbox.close}>
        <X className="h-5 w-5" />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            className="lightbox-nav lightbox-nav-prev"
            onClick={goPrev}
            aria-label={t.lightbox.previous}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-nav-next"
            onClick={goNext}
            aria-label={t.lightbox.next}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div className="lightbox-content">
        <div className="lightbox-media">
          {item.type === 'video' ? (
            <video
              src={item.src}
              poster={item.poster}
              controls
              autoPlay
              className="lightbox-media-inner"
            />
          ) : (
            <img src={item.src} alt={item.alt ?? ''} className="lightbox-media-inner" />
          )}
        </div>
        {item.alt && (
          <p className="lightbox-caption">
            {item.alt}
            {total > 1 && (
              <span className="lightbox-counter">
                {index + 1}/{total}
              </span>
            )}
          </p>
        )}
      </div>
    </div>,
    document.body,
  );
}

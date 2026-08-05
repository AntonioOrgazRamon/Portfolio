import { useState } from 'react';
import { techIconUrl, techLabel, techLightTile } from '../../data/techIcons';
import type { Theme } from '../../lib/prefs';

interface TechIconProps {
  slug: string;
  theme: Theme;
  size?: 'sm' | 'md';
  showLabel?: boolean;
  className?: string;
}

export function TechIcon({
  slug,
  theme,
  size = 'sm',
  showLabel = false,
  className = '',
}: TechIconProps) {
  const [failed, setFailed] = useState(false);
  const label = techLabel(slug);
  const lightTile = techLightTile(slug);

  const boxClass =
    size === 'md'
      ? 'h-11 w-11 rounded-xl p-2'
      : 'h-10 w-10 rounded-lg p-1.5';

  const imgClass =
    size === 'md'
      ? lightTile
        ? 'h-7 w-7'
        : 'h-6 w-6'
      : lightTile
        ? 'h-8 w-8'
        : 'h-7 w-7';

  if (failed) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[10px] font-medium text-[var(--color-muted)] ${boxClass} ${className}`}
        title={label}
      >
        {label.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  const tile = (
    <div
      className={`group relative flex shrink-0 items-center justify-center border transition-all duration-200 hover:border-[var(--color-border-hover)] ${
        lightTile
          ? 'border-[var(--color-border)] bg-white hover:bg-white'
          : 'border-[var(--color-border)] bg-[var(--color-bg-elevated)]/90 hover:bg-[var(--color-surface-solid)]'
      } ${boxClass} ${className}`}
      title={showLabel ? undefined : label}
    >
      <img
        src={techIconUrl(slug, theme)}
        alt=""
        width={28}
        height={28}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className={`shrink-0 object-contain transition-transform duration-200 ease-out group-hover:scale-105 ${imgClass}`}
        onError={() => setFailed(true)}
      />
      {!showLabel && (
        <span
          className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded px-2 py-0.5 text-[10px] text-[var(--color-muted)] opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100"
          aria-hidden
        >
          {label}
        </span>
      )}
    </div>
  );

  if (!showLabel) return tile;

  return (
    <div className="flex min-w-0 items-center gap-3">
      {tile}
      <span className="truncate text-sm font-medium text-[var(--color-text)]">{label}</span>
    </div>
  );
}

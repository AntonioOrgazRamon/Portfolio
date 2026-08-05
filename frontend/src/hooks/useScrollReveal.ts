import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isCompactViewport = () => window.matchMedia('(max-width: 1023px)').matches;

export function useScrollReveal<T extends HTMLElement>(
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    individual?: boolean;
  },
) {
  const ref = useRef<T>(null);
  const { y = 20, duration = 0.55, stagger = 0.05, individual = false } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll('[data-reveal]');
    const items = targets.length > 0 ? Array.from(targets) : [el];
    const compact = isCompactViewport();

    if (prefersReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0, clearProps: 'transform,opacity' });
      return;
    }

    const ctx = gsap.context(() => {
      const revealY = compact ? Math.min(y, 14) : y;
      const revealDuration = compact ? Math.min(duration, 0.42) : duration;

      if (individual) {
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: revealY, force3D: true },
            {
              opacity: 1,
              y: 0,
              duration: revealDuration,
              ease: 'power2.out',
              force3D: true,
              scrollTrigger: {
                trigger: item,
                start: compact ? 'top 94%' : 'top 92%',
                once: true,
              },
            },
          );
        });
      } else {
        gsap.fromTo(
          items,
          { opacity: 0, y: revealY, force3D: true },
          {
            opacity: 1,
            y: 0,
            duration: revealDuration,
            stagger: items.length > 1 ? (compact ? stagger * 0.6 : stagger) : 0,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: el,
              start: compact ? 'top 92%' : 'top 88%',
              once: true,
            },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, [y, duration, stagger, individual]);

  return ref;
}

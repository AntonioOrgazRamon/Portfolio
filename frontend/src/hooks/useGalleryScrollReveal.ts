import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useGalleryScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const tiles = Array.from(root.querySelectorAll<HTMLElement>('[data-gallery-tile]'));
    if (tiles.length === 0) return;

    if (prefersReducedMotion()) {
      gsap.set(tiles, { opacity: 1, y: 0, clearProps: 'transform,opacity' });
      return;
    }

    gsap.set(tiles, { opacity: 0, y: 28, force3D: true });

    const ctx = gsap.context(() => {
      gsap.to(tiles, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: root,
          start: 'top 86%',
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return ref;
}

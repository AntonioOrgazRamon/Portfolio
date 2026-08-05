import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isCompactViewport = () => window.matchMedia('(max-width: 1023px)').matches;

function markReadComplete(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[data-read-text]').forEach((block) => {
    block.style.setProperty('--read-p', '1');
    block.classList.add('is-read-complete');
  });
}

function setupReadOnScroll(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[data-read-text]').forEach((block) => {
    if (block.closest('#inicio')) return;

    block.style.setProperty('--read-p', '0');
    block.classList.remove('is-bold');

    const setProgress = gsap.quickSetter(block, '--read-p');
    let isBold = false;

    ScrollTrigger.create({
      trigger: block,
      start: 'top 88%',
      end: 'bottom 62%',
      scrub: true,
      fastScrollEnd: true,
      onUpdate: (self) => {
        setProgress(self.progress.toFixed(4));

        const nextBold = self.progress > 0.72;
        if (nextBold !== isBold) {
          block.classList.toggle('is-bold', nextBold);
          isBold = nextBold;
        }
      },
    });
  });
}

export function usePageMotion(rootRef: RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const compact = isCompactViewport();

    if (prefersReducedMotion()) {
      gsap.set(
        root.querySelectorAll(
          '[data-reveal], [data-reveal-item], [data-project-part], [data-hero-item], [data-read-text]',
        ),
        { opacity: 1, y: 0, clearProps: 'transform,opacity' },
      );
      markReadComplete(root);
      return;
    }

    const revealY = compact ? 14 : 22;
    const revealDuration = compact ? 0.42 : 0.55;
    const revealStagger = compact ? 0.045 : 0.065;

    const ctx = gsap.context(() => {
      const heroItems = root.querySelectorAll<HTMLElement>('#inicio [data-hero-item]');
      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          { opacity: 0, y: compact ? 16 : 28, force3D: true },
          {
            opacity: 1,
            y: 0,
            duration: compact ? 0.55 : 0.72,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.1,
            force3D: true,
            onComplete: () => {
              root.querySelectorAll<HTMLElement>('#inicio [data-read-text]').forEach((block) => {
                block.style.setProperty('--read-p', '1');
                block.classList.add('is-read-complete');
              });
            },
          },
        );
      }

      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        if (el.closest('#inicio')) return;

        gsap.fromTo(
          el,
          { opacity: 0, y: revealY, force3D: true },
          {
            opacity: 1,
            y: 0,
            duration: revealDuration,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: el,
              start: compact ? 'top 94%' : 'top 90%',
              once: true,
            },
          },
        );
      });

      root.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('[data-reveal-item]');
        if (!items.length) return;

        gsap.fromTo(
          items,
          { opacity: 0, y: compact ? 10 : 18, force3D: true },
          {
            opacity: 1,
            y: 0,
            duration: revealDuration * 0.92,
            stagger: revealStagger,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: group,
              start: compact ? 'top 93%' : 'top 88%',
              once: true,
            },
          },
        );
      });

      root.querySelectorAll<HTMLElement>('[data-project-block]').forEach((block) => {
        const parts = block.querySelectorAll<HTMLElement>('[data-project-part]');
        if (!parts.length) return;

        gsap.fromTo(
          parts,
          { opacity: 0, y: compact ? 12 : 20, force3D: true },
          {
            opacity: 1,
            y: 0,
            duration: revealDuration,
            stagger: 0.09,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: block,
              start: compact ? 'top 92%' : 'top 86%',
              once: true,
            },
          },
        );
      });

      if (!compact) {
        setupReadOnScroll(root);
      } else {
        root.querySelectorAll<HTMLElement>('[data-read-text]').forEach((block) => {
          gsap.fromTo(
            block,
            { opacity: 0.4, y: 8, force3D: true },
            {
              opacity: 1,
              y: 0,
              duration: 0.48,
              ease: 'power2.out',
              force3D: true,
              scrollTrigger: {
                trigger: block,
                start: 'top 93%',
                once: true,
              },
            },
          );
        });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, root);

    return () => ctx.revert();
  }, deps);
}

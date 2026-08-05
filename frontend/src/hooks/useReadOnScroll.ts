import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isCompactViewport = () => window.matchMedia('(max-width: 1023px)').matches;

function markComplete(blocks: HTMLElement[]) {
  blocks.forEach((block) => {
    block.style.setProperty('--read-p', '1');
    block.classList.add('is-read-complete', 'is-bold');
  });
}

export function useReadOnScroll(
  rootRef: RefObject<HTMLElement | null>,
  deps: unknown[] = [],
) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const blocks = Array.from(root.querySelectorAll<HTMLElement>('[data-read-text]'));
    if (blocks.length === 0) return;

    if (prefersReducedMotion() || isCompactViewport()) {
      markComplete(blocks);
      return;
    }

    const ctx = gsap.context(() => {
      blocks.forEach((block) => {
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
    }, root);

    return () => ctx.revert();
  }, deps);
}

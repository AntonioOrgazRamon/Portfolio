import { useEffect, useState } from 'react';

const SECTION_IDS = ['inicio', 'sobre-mi', 'tecnologias', 'proyectos', 'contacto'] as const;
export type ActiveSection = (typeof SECTION_IDS)[number];

export function useActiveSection() {
  const [active, setActive] = useState<ActiveSection>('inicio');

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0]?.target.id as ActiveSection | undefined;
        if (top && SECTION_IDS.includes(top)) {
          setActive(top);
        }
      },
      {
        rootMargin: '-42% 0px -42% 0px',
        threshold: [0, 0.12, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

import type { ReactNode, RefObject } from 'react';

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
  innerRef?: RefObject<HTMLElement | null>;
  wide?: boolean;
}

export function SectionShell({ id, children, className = '', innerRef, wide = false }: SectionShellProps) {
  return (
    <section
      id={id}
      ref={innerRef}
      className={`section-shell relative mx-auto w-full ${wide ? 'section-shell--wide' : 'section-shell--standard'} px-5 py-20 sm:px-8 sm:py-24 lg:px-12 ${className}`.trim()}
    >
      {children}
    </section>
  );
}

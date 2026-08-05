import { useEffect, useRef } from 'react';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { HeroSection } from './components/hero/HeroSection';
import { MobileHeader } from './components/layout/MobileHeader';
import { MobileNav } from './components/layout/MobileNav';
import { Sidebar } from './components/layout/Sidebar';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { TechnologiesSection } from './components/technologies/TechnologiesSection';
import { PageGrid } from './components/ui/PageGrid';
import { useDocumentMeta } from './hooks/useDocumentMeta';
import { usePageMotion } from './hooks/usePageMotion';
import { useTouchDevice } from './hooks/useTouchDevice';
import { useLocale } from './contexts/LocaleContext';

export default function App() {
  const { t, locale } = useLocale();
  const { isMobileLayout } = useTouchDevice();
  const mainRef = useRef<HTMLElement>(null);
  useDocumentMeta();
  usePageMotion(mainRef, [locale, isMobileLayout]);

  useEffect(() => {
    if (isMobileLayout) return;

    const root = document.documentElement;
    let frame = 0;
    let lastX = 0;
    let lastY = 0;

    const applyGridGlow = () => {
      frame = 0;
      root.style.setProperty('--grid-x', `${lastX}px`);
      root.style.setProperty('--grid-y', `${lastY}px`);
      root.style.setProperty('--grid-glow', '1');
    };

    const updateGridGlow = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(applyGridGlow);
    };

    const clearGridGlow = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
      root.style.setProperty('--grid-glow', '0');
    };

    window.addEventListener('pointermove', updateGridGlow, { passive: true });
    window.addEventListener('pointerleave', clearGridGlow);

    return () => {
      window.removeEventListener('pointermove', updateGridGlow);
      window.removeEventListener('pointerleave', clearGridGlow);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isMobileLayout]);

  return (
    <>
      <a href="#inicio" className="skip-link">
        {t.skipToContent}
      </a>
      <PageGrid />
      <MobileHeader />
      <Sidebar />
      <main
        ref={mainRef}
        className={`page-ambient page-main relative z-[1] min-h-screen${isMobileLayout ? ' is-touch-layout' : ''}`}
      >
        <HeroSection />
        <div className="section-divider mx-auto max-w-3xl px-5 sm:px-8 lg:px-12" data-reveal aria-hidden />
        <AboutSection />
        <div className="section-divider mx-auto max-w-3xl px-5 sm:px-8 lg:px-12" data-reveal aria-hidden />
        <TechnologiesSection />
        <div className="section-divider mx-auto max-w-3xl px-5 sm:px-8 lg:px-12" data-reveal aria-hidden />
        <ProjectsSection />
        <div className="section-divider mx-auto max-w-3xl px-5 sm:px-8 lg:px-12" data-reveal aria-hidden />
        <ContactSection />
      </main>
      <MobileNav />
    </>
  );
}

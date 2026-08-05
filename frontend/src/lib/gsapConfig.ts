import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let initialized = false;

/** Sync GSAP to the display refresh rate (120 Hz on high-refresh panels). */
export function initGsapPerformance() {
  if (initialized) return;
  initialized = true;

  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.fps(-1);
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });
}

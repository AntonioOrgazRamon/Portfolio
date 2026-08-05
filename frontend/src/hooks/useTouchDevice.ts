import { useEffect, useState } from 'react';

export function useTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const touchMq = window.matchMedia('(pointer: coarse)');
    const compactMq = window.matchMedia('(max-width: 1023px)');

    const sync = () => {
      setIsTouch(touchMq.matches);
      setIsCompact(compactMq.matches);
    };

    sync();
    touchMq.addEventListener('change', sync);
    compactMq.addEventListener('change', sync);
    return () => {
      touchMq.removeEventListener('change', sync);
      compactMq.removeEventListener('change', sync);
    };
  }, []);

  return { isTouch, isCompact, isMobileLayout: isCompact };
}

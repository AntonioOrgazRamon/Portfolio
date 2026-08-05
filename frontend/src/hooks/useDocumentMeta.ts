import { useEffect } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import { PROFILE } from '../data/profile';

export function useDocumentMeta() {
  const { t, locale } = useLocale();

  useEffect(() => {
    document.title = t.meta.title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('description', t.meta.description);
    setMeta('og:title', t.meta.ogTitle, true);
    setMeta('og:description', t.meta.ogDescription, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', PROFILE.portfolioUrl, true);
    setLink('canonical', PROFILE.portfolioUrl);
    document.documentElement.lang = locale;
  }, [t, locale]);
}

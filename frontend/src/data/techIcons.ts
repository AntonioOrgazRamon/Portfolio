import type { Theme } from '../lib/prefs';

const DEVICON_CDN =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const BASE = import.meta.env.BASE_URL;

interface TechIconConfig {
  label: string;
  icon?: string;
  variant?: string;
  lightVariant?: string;
  simpleicons?: string;
  simpleiconsColor?: string;
  src?: string;
  /** Light background tile (e.g. Playwright) */
  lightTile?: boolean;
}

export const TECH_ICONS: Record<string, TechIconConfig> = {
  typescript: { label: 'TypeScript', icon: 'typescript', variant: 'original' },
  nodedotjs: { label: 'Node.js', icon: 'nodejs', variant: 'original' },
  express: {
    label: 'Express',
    icon: 'express',
    variant: 'original',
    lightVariant: 'original-wordmark',
  },
  react: { label: 'React', icon: 'react', variant: 'original' },
  angular: { label: 'Angular', icon: 'angular', variant: 'original' },
  prisma: { label: 'Prisma ORM', icon: 'prisma', variant: 'original' },
  mysql: { label: 'MySQL', icon: 'mysql', variant: 'original' },
  vite: { label: 'Vite', icon: 'vite', variant: 'original' },
  google: { label: 'Google APIs', icon: 'googlecloud', variant: 'original' },
  playwright: {
    label: 'Playwright',
    icon: 'playwright',
    src: `${BASE}tech/playwright.svg`,
    lightTile: true,
  },
  docker: { label: 'Docker', icon: 'docker', variant: 'original' },
  tailwindcss: { label: 'TailwindCSS', icon: 'tailwindcss', variant: 'original' },
  git: { label: 'Git', icon: 'git', variant: 'original' },
  github: { label: 'GitHub', icon: 'github', variant: 'original' },
  html5: { label: 'HTML5', icon: 'html5', variant: 'original' },
  css: { label: 'CSS3', icon: 'css3', variant: 'original' },
  postman: { label: 'Postman', icon: 'postman', variant: 'original' },
  restapi: { label: 'REST APIs', src: `${BASE}tech/restapi.svg` },
  jwt: { label: 'JWT', src: `${BASE}tech/jwt.svg` },
  oauth: { label: 'OAuth 2.0', simpleicons: 'openid', simpleiconsColor: 'F78C40' },
  gsap: { label: 'GSAP', simpleicons: 'gsap', simpleiconsColor: '88CE02' },
  framermotion: { label: 'Framer Motion', simpleicons: 'framer', simpleiconsColor: '0055FF' },
  xampp: { label: 'XAMPP', simpleicons: 'xampp', simpleiconsColor: 'FB7A24' },
};

export function techIconUrl(slug: string, theme: Theme = 'dark'): string {
  const config = TECH_ICONS[slug];
  if (!config) {
    return `https://cdn.simpleicons.org/${slug}`;
  }

  if (config.src) {
    return config.src;
  }

  if (config.simpleicons) {
    const color = config.simpleiconsColor ?? 'FFFFFF';
    return `https://cdn.simpleicons.org/${config.simpleicons}/${color}`;
  }

  if (!config.icon) {
    return `https://cdn.simpleicons.org/${slug}`;
  }

  const variant =
    theme === 'light' && config.lightVariant
      ? config.lightVariant
      : (config.variant ?? 'original');

  return `${DEVICON_CDN}/${config.icon}/${config.icon}-${variant}.svg`;
}

export function techLabel(slug: string): string {
  return TECH_ICONS[slug]?.label ?? slug;
}

export function techLightTile(slug: string): boolean {
  return TECH_ICONS[slug]?.lightTile ?? false;
}

export type ProjectStatus = 'production' | 'private' | 'development' | 'demo';

export type ProjectVariant = 'architecture' | 'product' | 'workflow' | 'experimental';

export interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
}

export interface Project {
  id: string;
  variant: ProjectVariant;
  status: ProjectStatus;
  repoUrl: string | null;
  productionUrl: string | null;
  gallery: ProjectMedia[];
  techSlugs: string[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'nakedcode',
    variant: 'product',
    featured: true,
    status: 'production',
    repoUrl: null,
    productionUrl: 'https://lapeatonal.nakedcode.es/',
    gallery: [
      { type: 'image', src: '/projects/nakedcode-menu.svg' },
      { type: 'image', src: '/projects/nakedcode-reservations.svg' },
      { type: 'image', src: '/projects/nakedcode-analytics.svg' },
    ],
    techSlugs: ['typescript', 'nodedotjs', 'angular', 'mysql', 'restapi', 'postman'],
  },
  {
    id: 'atlas',
    variant: 'architecture',
    status: 'development',
    repoUrl: null,
    productionUrl: null,
    gallery: [
      { type: 'image', src: '/projects/atlas-dashboard.svg' },
      { type: 'image', src: '/projects/atlas-recommendations.svg' },
      { type: 'image', src: '/projects/atlas-pipeline.svg' },
    ],
    techSlugs: ['typescript', 'nodedotjs', 'express', 'react', 'prisma', 'mysql', 'jwt', 'oauth'],
  },
  {
    id: 'nexus',
    variant: 'workflow',
    status: 'private',
    repoUrl: null,
    productionUrl: null,
    gallery: [
      { type: 'image', src: '/projects/nexus-pipeline.svg' },
      { type: 'image', src: '/projects/nexus-proposals.svg' },
      { type: 'image', src: '/projects/nexus-capture.svg' },
    ],
    techSlugs: [
      'typescript',
      'nodedotjs',
      'express',
      'react',
      'vite',
      'prisma',
      'mysql',
      'playwright',
      'google',
    ],
  },
  {
    id: 'blackjack',
    variant: 'experimental',
    status: 'demo',
    repoUrl: null,
    productionUrl: null,
    gallery: [
      { type: 'image', src: '/projects/blackjack-table.svg' },
      { type: 'image', src: '/projects/blackjack-probability.svg' },
    ],
    techSlugs: ['typescript', 'nodedotjs'],
  },
];

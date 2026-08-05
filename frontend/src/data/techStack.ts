export type TechCategoryId = 'backend' | 'frontend' | 'tools';

export interface TechCategory {
  id: TechCategoryId;
  slugs: string[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'backend',
    slugs: ['typescript', 'nodedotjs', 'express', 'prisma', 'mysql', 'restapi', 'jwt', 'oauth'],
  },
  {
    id: 'frontend',
    slugs: ['react', 'angular', 'vite', 'tailwindcss', 'html5', 'css'],
  },
  {
    id: 'tools',
    slugs: ['git', 'github', 'postman', 'docker', 'playwright'],
  },
];

export const TECH_STACK = TECH_CATEGORIES.flatMap((c) => c.slugs);

import type { Locale } from '../lib/prefs';

export type ProjectStatus = 'production' | 'private' | 'development' | 'demo';

export interface ProjectCaseStudyCopy {
  title: string;
  tagline: string;
  accentLabel: string;
  paragraphs: string[];
  problem: string;
  role: string;
  stackNote: string;
  features: string[];
  limitations: string;
  statusLabel: string;
  statusDescription: string;
  galleryAlts: string[];
  technical: {
    architecture: string;
    dataFlow: string;
    endpoints: string[];
    schema: string;
    auth: string;
    snippet: string;
  };
}

export interface Translation {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  skipToContent: string;
  sidebar: {
    home: string;
    about: string;
    stack: string;
    projects: string;
    contact: string;
    language: string;
    theme: string;
    switchToEn: string;
    switchToEs: string;
    lightMode: string;
    darkMode: string;
  };
  hero: {
    label: string;
    role: string;
    headline: string;
    subline: string;
    ctaProjects: string;
    ctaContact: string;
    ctaGithub: string;
    ctaLinkedin: string;
    ctaEmail: string;
    ctaCv: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    paragraphs: string[];
    highlights: string[];
  };
  technologies: {
    label: string;
    title: string;
    description: string;
    categories: Record<'backend' | 'frontend' | 'tools', string>;
    categoryNotes: Record<'backend' | 'frontend' | 'tools', string>;
  };
  projects: {
    label: string;
    title: string;
    description: string;
    production: string;
    repository: string;
    viewProduction: string;
    viewRepository: string;
    privateRepo: string;
    expandDetails: string;
    collapseDetails: string;
    sections: {
      problem: string;
      role: string;
      stack: string;
      features: string;
      limitations: string;
      status: string;
      architecture: string;
      dataFlow: string;
      endpoints: string;
      schema: string;
      auth: string;
      snippet: string;
    };
    status: Record<ProjectStatus, string>;
    items: Record<string, ProjectCaseStudyCopy>;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
    cv: string;
    availability: string;
    configureLinks: string;
  };
  lightbox: {
    close: string;
    previous: string;
    next: string;
    view: string;
  };
  mobile: {
    readMore: string;
    readLess: string;
    swipeGallery: string;
  };
}

export const translations: Record<Locale, Translation> = {
  es: {
    meta: {
      title: 'Antonio Orgaz Ramón — Fullstack Developer (Backend)',
      description:
        'Portfolio de Antonio Orgaz Ramón. Desarrollador Fullstack con foco en backend, APIs REST, SaaS multi-tenant, Prisma/MySQL y automatización.',
      ogTitle: 'Antonio Orgaz Ramón — Fullstack Developer',
      ogDescription:
        'Backend, APIs, SaaS y automatización. Proyectos reales con TypeScript, Node.js, Express, React y Prisma.',
    },
    skipToContent: 'Saltar al contenido',
    sidebar: {
      home: 'Inicio',
      about: 'Perfil',
      stack: 'Stack',
      projects: 'Proyectos',
      contact: 'Contacto',
      language: 'Idioma',
      theme: 'Tema',
      switchToEn: 'Cambiar a inglés',
      switchToEs: 'Cambiar a español',
      lightMode: 'Modo claro',
      darkMode: 'Modo oscuro',
    },
    hero: {
      label: 'Fullstack · Backend-first',
      role: 'Desarrollador Fullstack (enfoque Backend)',
      headline: 'Construyo APIs, backends SaaS y automatizaciones con TypeScript y Node.js.',
      subline:
        'Busco oportunidades como Junior / Junior avanzado Fullstack con foco en backend, arquitectura de APIs y producto SaaS.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contacto',
      ctaGithub: 'GitHub',
      ctaLinkedin: 'LinkedIn',
      ctaEmail: 'Email',
      ctaCv: 'Descargar CV',
    },
    about: {
      label: 'Perfil',
      title: 'Sobre mí',
      description: 'Backend, APIs y producto — con criterio técnico y honestidad sobre el nivel.',
      paragraphs: [
        'Soy Antonio Orgaz Ramón, desarrollador Fullstack con foco en backend. Trabajo con TypeScript, Node.js, Express, Prisma y MySQL para construir APIs, lógica de negocio y flujos automatizados.',
        'Me interesa el diseño de sistemas mantenibles: separación por capas, multi-tenant cuando el producto lo exige, autenticación clara y endpoints documentados y probables con Postman.',
        'He participado en proyectos reales de reservas, CRM comercial y plataformas SaaS. Prefiero explicar qué construí y con qué limitaciones, antes que vender un producto más grande de lo verificable.',
      ],
      highlights: [
        'APIs REST con Express y validación de entrada',
        'Modelado con Prisma + MySQL (incl. multi-tenant)',
        'Auth JWT, roles y OAuth Google en flujos reales',
        'Automatización con scripts, cron y Playwright (PDF)',
        'Frontend funcional con React / Angular cuando el producto lo requiere',
      ],
    },
    technologies: {
      label: 'Stack',
      title: 'Tecnologías',
      description: 'Stack que uso en proyectos reales — no una lista inflada.',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        tools: 'Herramientas',
      },
      categoryNotes: {
        backend: 'Donde concentro la mayor parte del trabajo.',
        frontend: 'Interfaces funcionales al servicio del producto.',
        tools: 'Flujo diario de desarrollo y despliegue.',
      },
    },
    projects: {
      label: 'Trabajo',
      title: 'Proyectos',
      description: 'Case studies con contexto técnico, limitaciones honestas y estado verificable.',
      production: 'Producción',
      repository: 'Repositorio',
      viewProduction: 'Ver producción de',
      viewRepository: 'Ver repositorio de',
      privateRepo: 'Código privado — disponible en entrevista',
      expandDetails: 'Ver detalle técnico',
      collapseDetails: 'Ocultar detalle técnico',
      sections: {
        problem: 'Problema',
        role: 'Qué hice yo',
        stack: 'Stack',
        features: 'Funcionalidades clave',
        limitations: 'Limitaciones',
        status: 'Estado',
        architecture: 'Arquitectura',
        dataFlow: 'Flujo de datos',
        endpoints: 'Endpoints de ejemplo',
        schema: 'Modelo de datos',
        auth: 'Autenticación',
        snippet: 'Fragmento de código',
      },
      status: {
        production: 'En producción',
        private: 'Privado',
        development: 'En desarrollo',
        demo: 'Demo / experimental',
      },
      items: {
        nakedcode: {
          title: 'Sistema Digital para Restaurantes',
          tagline: 'Reservas, carta digital y analítica de conversión en canal propio.',
          accentLabel: 'Producto',
          paragraphs: [
            'Sistema digital orientado a restaurantes diseñado para centralizar reservas, cartas digitales y analítica de comportamiento dentro del canal web propio del negocio.',
            'La plataforma fue desarrollada con un enfoque data-driven, permitiendo analizar cómo interactúan los usuarios con la web antes de realizar una reserva: navegación sobre la carta, puntos de abandono, tiempo de interacción y conversión dentro del funnel.',
            'El objetivo del sistema es mejorar la experiencia del cliente y ayudar al restaurante a recuperar control sobre sus reservas y datos, reduciendo dependencia de plataformas externas.',
            'La arquitectura combina frontend interactivo, sistemas de tracking personalizados y automatizaciones operativas para facilitar escalabilidad, medición y evolución continua del producto.',
            'Desarrollado como una arquitectura fullstack modular utilizando TypeScript, Node.js y Angular.',
          ],
          problem:
            'El restaurante dependía de plataformas externas para reservas y no tenía visibilidad sobre cómo los clientes navegaban la carta antes de reservar.',
          role:
            'Desarrollé el backend en Node.js/TypeScript, diseñé endpoints de reservas y carta, integré tracking de eventos en frontend Angular y preparé consultas para analizar conversión del funnel.',
          stackNote: 'TypeScript · Node.js · Angular · MySQL · REST · Postman',
          features: [
            'Carta digital con categorías y disponibilidad',
            'Flujo de reservas con validación server-side',
            'Eventos de navegación (vistas, clics, abandono)',
            'Panel básico de métricas por periodo',
          ],
          limitations:
            'Repositorio privado. No hay panel enterprise ni integraciones POS. El tracking es custom, no Google Analytics completo.',
          statusLabel: 'En producción',
          statusDescription: 'Desplegado en lapeatonal.nakedcode.es',
          galleryAlts: [
            'Carta digital interactiva',
            'Flujo de reservas y conversión',
            'Panel de analítica y comportamiento',
          ],
          technical: {
            architecture:
              'Frontend Angular → API REST Node.js → MySQL. Capas: routes → services → repositories.',
            dataFlow:
              'Usuario navega carta → evento POST /analytics/events → agregación en MySQL → consulta en panel interno.',
            endpoints: [
              'GET  /api/menu/categories',
              'POST /api/reservations',
              'GET  /api/reservations/availability?date=YYYY-MM-DD',
              'POST /api/analytics/events',
            ],
            schema: `Reservation { id, date, time, guests, name, phone, status }
MenuItem    { id, categoryId, name, price, available }
AnalyticsEvent { id, type, payload, sessionId, createdAt }`,
            auth: 'Rutas públicas para carta/reservas. Panel interno con sesión protegida (rol admin).',
            snippet: `// Validación de reserva antes de persistir
const reservation = reservationSchema.parse(req.body);
const slot = await availabilityService.findOpenSlot(
  reservation.date,
  reservation.time,
  reservation.guests
);
if (!slot) return res.status(409).json({ error: 'SLOT_UNAVAILABLE' });`,
          },
        },
        atlas: {
          title: 'Travel SaaS',
          tagline: 'SaaS multi-tenant con ingestión PDF y motor de recomendación determinista.',
          accentLabel: 'Arquitectura',
          paragraphs: [
            'Plataforma SaaS multi-tenant orientada a automatizar el flujo comercial de agencias de viajes, desde la captación de leads hasta la generación de propuestas comerciales.',
            'El sistema permite procesar catálogos turísticos en PDF y transformarlos en datos estructurados consultables en tiempo real. A partir de esa información, se desarrolló un recommendation engine capaz de sugerir viajes según variables como presupuesto, duración, destinos o preferencias del cliente.',
            'La lógica de recomendación combina reglas deterministas, scoring multicriterio y recuperación contextual para mantener control y trazabilidad sobre las propuestas generadas, evitando depender completamente de modelos de IA.',
            'La arquitectura está desarrollada en TypeScript utilizando Node.js, Express y React, con Prisma ORM y MySQL para la gestión multiempresa y aislamiento por tenant. El sistema también integra autenticación JWT, roles jerárquicos, Google OAuth y automatizaciones comerciales.',
          ],
          problem:
            'Las agencias gestionaban catálogos en PDF y propuestas manuales. Necesitaban centralizar leads y acelerar la primera propuesta comercial.',
          role:
            'Diseñé el modelo multi-tenant en Prisma, implementé API REST (leads, catálogo, propuestas), auth JWT + OAuth Google y un motor de recomendación basado en reglas y scoring — sin depender de LLMs.',
          stackNote: 'TypeScript · Node.js · Express · React · Prisma · MySQL · JWT · OAuth',
          features: [
            'Aislamiento por tenant en base de datos',
            'Ingestión PDF → JSON estructurado (pipeline batch)',
            'Motor de recomendación con scoring multicriterio',
            'Roles: admin agencia, comercial, viewer',
          ],
          limitations:
            'Sin despliegue público ni repo abierto. La ingestión PDF cubre formatos acotados, no cualquier documento. Recomendaciones basadas en reglas, no ML.',
          statusLabel: 'Privado · en desarrollo',
          statusDescription: 'Demo funcional en entorno local/staging',
          galleryAlts: [
            'Dashboard comercial de Travel SaaS',
            'Motor de recomendación y scoring',
            'Pipeline de ingestión PDF y propuestas',
          ],
          technical: {
            architecture:
              'React (panel) + Express API + Prisma/MySQL. Tenant resuelto por subdominio/header → middleware → scope en queries.',
            dataFlow:
              'PDF upload → parser → CatalogItem → Lead + criterios → RecommendationService → Proposal draft.',
            endpoints: [
              'POST /api/auth/login',
              'GET  /api/leads?status=open',
              'POST /api/catalog/import',
              'POST /api/recommendations/generate',
            ],
            schema: `Tenant { id, slug, name }
Lead { id, tenantId, budget, destinations[], status }
CatalogItem { id, tenantId, destination, duration, priceRange }
Proposal { id, leadId, items[], score, status }`,
            auth: 'JWT en Authorization header. OAuth Google para login inicial. tenantId inyectado desde token, nunca desde body.',
            snippet: `// Scope multi-tenant en Prisma middleware
prisma.$use(async (params, next) => {
  if (params.model && TENANT_MODELS.has(params.model)) {
    params.args.where = { ...params.args.where, tenantId: ctx.tenantId };
  }
  return next(params);
});`,
          },
        },
        nexus: {
          title: 'Nexus CRM',
          tagline: 'Pipeline comercial B2B con automatización PDF e integraciones Google.',
          accentLabel: 'Workflow',
          paragraphs: [
            'Plataforma SaaS multi-tenant orientada a la automatización de procesos comerciales B2B.',
            'El sistema centraliza captación de leads, gestión de pipeline, reuniones, propuestas y seguimiento comercial dentro de un entorno multiempresa escalable.',
            'La arquitectura se compone de una API REST desarrollada con Node.js, Express y TypeScript, un panel CRM construido en React + Vite y una aplicación pública de captación conectada directamente al backend mediante formularios inteligentes.',
            'La plataforma implementa autenticación JWT, aislamiento por tenant utilizando Prisma ORM y MySQL, además de sistemas de scoring, detección de duplicados y automatización comercial sobre el pipeline de ventas.',
            'El núcleo operativo integra agentes automatizados capaces de clasificar leads, coordinar reuniones, generar seguimiento comercial y construir propuestas dinámicas en PDF utilizando Playwright, reduciendo carga operativa en procesos internos de venta.',
            'También incorpora integración con Google APIs para sincronización de reuniones, envío automatizado de propuestas y gestión documental, manteniendo trazabilidad completa sobre las actividades e interacciones comerciales del CRM.',
          ],
          problem:
            'Equipos comerciales pequeños perdían leads entre formularios, email y hojas de cálculo. Necesitaban un pipeline único con seguimiento.',
          role:
            'Construí la API REST, modelos Prisma con tenant isolation, formulario público conectado al backend, scoring básico de leads y generación de PDF con Playwright a partir de plantillas.',
          stackNote: 'TypeScript · Express · React · Vite · Prisma · MySQL · Playwright · Google APIs',
          features: [
            'Captación pública → creación automática de lead',
            'Pipeline kanban con estados configurables',
            'Detección simple de duplicados por email/dominio',
            'PDF de propuesta generado server-side (Playwright)',
          ],
          limitations:
            'Sin producción pública. Automatizaciones son scripts programados, no “agentes IA”. Integración Google limitada a calendar/email en flujos concretos.',
          statusLabel: 'Privado',
          statusDescription: 'Proyecto completo en entorno de desarrollo',
          galleryAlts: [
            'Pipeline comercial y gestión de leads',
            'Generación automática de propuestas PDF',
            'Formulario público de captación',
          ],
          technical: {
            architecture:
              '3 superficies: landing captación (React), panel CRM (React/Vite), API Express. Cola simple para jobs PDF.',
            dataFlow:
              'Formulario público → POST /public/leads → scoring → pipeline → acción “generar PDF” → Playwright → almacenamiento → email.',
            endpoints: [
              'POST /public/leads',
              'PATCH /api/leads/:id/stage',
              'POST /api/proposals/:id/generate-pdf',
              'GET  /api/meetings?leadId=:id',
            ],
            schema: `Lead { id, tenantId, email, company, score, stage, source }
Proposal { id, leadId, templateId, pdfUrl, sentAt }
Meeting { id, leadId, scheduledAt, externalEventId }`,
            auth: 'JWT + roles por tenant. Endpoints /public/* con rate limit y honeypot, sin auth.',
            snippet: `// Generación PDF (simplificado)
await page.setContent(renderProposalHtml(proposal));
const pdf = await page.pdf({ format: 'A4' });
await storage.save(\`proposals/\${proposal.id}.pdf\`, pdf);`,
          },
        },
        blackjack: {
          title: 'Blackjack Probability System',
          tagline: 'Simulación probabilística y evaluación algorítmica de decisiones.',
          accentLabel: 'Experimental',
          paragraphs: [
            'Sistema experimental orientado al análisis probabilístico de partidas de blackjack mediante conteo estadístico y evaluación dinámica del estado de juego.',
            'El proyecto analizaba cartas visibles, distribución restante del mazo e histórico de partidas para calcular probabilidades en tiempo real y estimar escenarios favorables durante la toma de decisiones.',
            'Desarrollado como experimento enfocado en algoritmos y simulación, el sistema exploraba conceptos relacionados con análisis estadístico, lógica probabilística y procesamiento de estados aplicado a entornos dinámicos.',
          ],
          problem:
            'Quería entender cómo cambian las probabilidades de bust/blackjack según cartas visibles y cartas restantes en el mazo.',
          role:
            'Implementé el motor de simulación en TypeScript, estado de mesa, barajado Fisher-Yates y cálculo de probabilidades por escenario.',
          stackNote: 'TypeScript · Node.js · algoritmos / simulación',
          features: [
            'Estado de mesa reproducible',
            'Simulación Monte Carlo por decisión',
            'Conteo Hi-Lo básico',
            'Export de resultados a JSON',
          ],
          limitations:
            'Proyecto experimental, no vinculado a producto comercial. Sin despliegue ni interfaz de producción pulida.',
          statusLabel: 'Demo / experimental',
          statusDescription: 'Útil como prueba de lógica y algoritmos',
          galleryAlts: [
            'Simulación de mesa y estados de partida',
            'Motor probabilístico y conteo de cartas',
          ],
          technical: {
            architecture: 'CLI + módulos: deck, table, simulator, stats. Sin backend persistente.',
            dataFlow: 'Config escenario → N simulaciones → agregación → informe de probabilidades.',
            endpoints: ['N/A — aplicación local / CLI'],
            schema: `GameState { deck[], playerHand[], dealerUpcard, trueCount }
SimulationResult { trials, wins, losses, pushes, bustRate }`,
            auth: 'No aplica.',
            snippet: `function bustProbability(hand: Card[], deck: Card[]): number {
  let busts = 0;
  for (let i = 0; i < TRIALS; i++) {
    const trial = drawUntilStand(hand, cloneDeck(deck));
    if (handValue(trial) > 21) busts++;
  }
  return busts / TRIALS;
}`,
          },
        },
      },
    },
    contact: {
      label: 'Contacto',
      title: 'Hablemos',
      description:
        'Busco rol Junior / Junior avanzado Fullstack con foco backend. Escríbeme o revisa el código en GitHub.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'CV',
      availability: 'Disponible para entrevistas técnicas y prueba de código.',
      configureLinks:
        'Configura email, GitHub, LinkedIn y CV en src/data/profile.ts',
    },
    lightbox: {
      close: 'Cerrar',
      previous: 'Anterior',
      next: 'Siguiente',
      view: 'Ver',
    },
    mobile: {
      readMore: 'Leer descripción completa',
      readLess: 'Mostrar menos',
      swipeGallery: 'Desliza para explorar',
    },
  },
  en: {
    meta: {
      title: 'Antonio Orgaz Ramón — Fullstack Developer (Backend)',
      description:
        'Portfolio of Antonio Orgaz Ramón. Fullstack developer focused on backend, REST APIs, multi-tenant SaaS, Prisma/MySQL and automation.',
      ogTitle: 'Antonio Orgaz Ramón — Fullstack Developer',
      ogDescription:
        'Backend, APIs, SaaS and automation. Real projects with TypeScript, Node.js, Express, React and Prisma.',
    },
    skipToContent: 'Skip to content',
    sidebar: {
      home: 'Home',
      about: 'Profile',
      stack: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
      language: 'Language',
      theme: 'Theme',
      switchToEn: 'Switch to English',
      switchToEs: 'Switch to Spanish',
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
    },
    hero: {
      label: 'Fullstack · Backend-first',
      role: 'Fullstack Developer (Backend-focused)',
      headline: 'I build APIs, SaaS backends and automations with TypeScript and Node.js.',
      subline:
        'Looking for Junior / Advanced Junior Fullstack roles focused on backend, API architecture and SaaS products.',
      ctaProjects: 'View projects',
      ctaContact: 'Contact',
      ctaGithub: 'GitHub',
      ctaLinkedin: 'LinkedIn',
      ctaEmail: 'Email',
      ctaCv: 'Download CV',
    },
    about: {
      label: 'Profile',
      title: 'About me',
      description: 'Backend, APIs and product — with technical clarity and honest scope.',
      paragraphs: [
        'I am Antonio Orgaz Ramón, a Fullstack developer focused on backend. I work with TypeScript, Node.js, Express, Prisma and MySQL to build APIs, business logic and automated workflows.',
        'I care about maintainable system design: layered separation, multi-tenant when the product requires it, clear authentication and endpoints that can be tested with Postman.',
        'I have contributed to real projects in reservations, commercial CRM and SaaS platforms. I prefer explaining what I built and its limits rather than overselling the product.',
      ],
      highlights: [
        'REST APIs with Express and input validation',
        'Prisma + MySQL modeling (incl. multi-tenant)',
        'JWT auth, roles and Google OAuth in real flows',
        'Automation with scripts, cron and Playwright (PDF)',
        'Functional frontend with React / Angular when needed',
      ],
    },
    technologies: {
      label: 'Stack',
      title: 'Technologies',
      description: 'Stack I use in real projects — not an inflated list.',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        tools: 'Tools',
      },
      categoryNotes: {
        backend: 'Where most of my work happens.',
        frontend: 'Functional UI in service of the product.',
        tools: 'Day-to-day development and deployment workflow.',
      },
    },
    projects: {
      label: 'Work',
      title: 'Projects',
      description: 'Case studies with technical context, honest limits and verifiable status.',
      production: 'Live',
      repository: 'Repository',
      viewProduction: 'View production for',
      viewRepository: 'View repository for',
      privateRepo: 'Private code — available on request in interviews',
      expandDetails: 'View technical details',
      collapseDetails: 'Hide technical details',
      sections: {
        problem: 'Problem',
        role: 'What I built',
        stack: 'Stack',
        features: 'Key features',
        limitations: 'Limitations',
        status: 'Status',
        architecture: 'Architecture',
        dataFlow: 'Data flow',
        endpoints: 'Example endpoints',
        schema: 'Data model',
        auth: 'Authentication',
        snippet: 'Code snippet',
      },
      status: {
        production: 'In production',
        private: 'Private',
        development: 'In development',
        demo: 'Demo / experimental',
      },
      items: {
        nakedcode: {
          title: 'Digital Restaurant System',
          tagline: 'Reservations, digital menu and conversion analytics on owned channels.',
          accentLabel: 'Product',
          paragraphs: [
            'Digital system for restaurants designed to centralize reservations, digital menus and behavior analytics within the business\'s own web channel.',
            'The platform was developed with a data-driven approach, analyzing how users interact with the website before making a reservation: menu navigation, drop-off points, interaction time and funnel conversion.',
            'The goal is to improve the customer experience and help restaurants regain control over their reservations and data, reducing dependence on external platforms.',
            'The architecture combines an interactive frontend, custom tracking systems and operational automations to support scalability, measurement and continuous product evolution.',
            'Built as a modular fullstack architecture using TypeScript, Node.js and Angular.',
          ],
          problem:
            'The restaurant relied on external platforms for bookings and had no visibility into how customers browsed the menu before reserving.',
          role:
            'I built the Node.js/TypeScript backend, designed reservation and menu endpoints, integrated event tracking in the Angular frontend and prepared queries to analyze funnel conversion.',
          stackNote: 'TypeScript · Node.js · Angular · MySQL · REST · Postman',
          features: [
            'Digital menu with categories and availability',
            'Reservation flow with server-side validation',
            'Navigation events (views, clicks, drop-off)',
            'Basic metrics panel by period',
          ],
          limitations:
            'Private repository. No enterprise dashboard or POS integrations. Tracking is custom, not full Google Analytics.',
          statusLabel: 'In production',
          statusDescription: 'Deployed at lapeatonal.nakedcode.es',
          galleryAlts: [
            'Interactive digital menu',
            'Reservation and conversion flow',
            'Analytics and behavior dashboard',
          ],
          technical: {
            architecture:
              'Angular frontend → Node.js REST API → MySQL. Layers: routes → services → repositories.',
            dataFlow:
              'User browses menu → POST /analytics/events → aggregation in MySQL → internal panel query.',
            endpoints: [
              'GET  /api/menu/categories',
              'POST /api/reservations',
              'GET  /api/reservations/availability?date=YYYY-MM-DD',
              'POST /api/analytics/events',
            ],
            schema: `Reservation { id, date, time, guests, name, phone, status }
MenuItem    { id, categoryId, name, price, available }
AnalyticsEvent { id, type, payload, sessionId, createdAt }`,
            auth: 'Public routes for menu/reservations. Internal panel with protected session (admin role).',
            snippet: `// Reservation validation before persist
const reservation = reservationSchema.parse(req.body);
const slot = await availabilityService.findOpenSlot(
  reservation.date,
  reservation.time,
  reservation.guests
);
if (!slot) return res.status(409).json({ error: 'SLOT_UNAVAILABLE' });`,
          },
        },
        atlas: {
          title: 'Travel SaaS',
          tagline: 'Multi-tenant SaaS with PDF ingestion and deterministic recommendation engine.',
          accentLabel: 'Architecture',
          paragraphs: [
            'Multi-tenant SaaS platform focused on automating the commercial workflow of travel agencies, from lead capture to commercial proposal generation.',
            'The system processes travel catalogs in PDF format and transforms them into structured data queryable in real time. From that information, a recommendation engine was developed to suggest trips based on variables such as budget, duration, destinations or client preferences.',
            'The recommendation logic combines deterministic rules, multi-criteria scoring and contextual retrieval to maintain control and traceability over generated proposals, avoiding full dependence on AI models.',
            'The architecture is built in TypeScript using Node.js, Express and React, with Prisma ORM and MySQL for multi-company management and tenant isolation. The system also integrates JWT authentication, hierarchical roles, Google OAuth and commercial automations.',
          ],
          problem:
            'Agencies managed catalogs in PDF and manual proposals. They needed to centralize leads and speed up the first commercial proposal.',
          role:
            'I designed the multi-tenant Prisma model, implemented REST API (leads, catalog, proposals), JWT + Google OAuth auth and a recommendation engine based on rules and scoring — without LLM dependency.',
          stackNote: 'TypeScript · Node.js · Express · React · Prisma · MySQL · JWT · OAuth',
          features: [
            'Tenant isolation in the database',
            'PDF → structured JSON ingestion (batch pipeline)',
            'Recommendation engine with multi-criteria scoring',
            'Roles: agency admin, sales, viewer',
          ],
          limitations:
            'No public deployment or open repo. PDF ingestion covers limited formats, not any document. Rule-based recommendations, not ML.',
          statusLabel: 'Private · in development',
          statusDescription: 'Functional demo in local/staging environment',
          galleryAlts: [
            'Travel SaaS commercial dashboard',
            'Recommendation engine and scoring',
            'PDF ingestion pipeline and proposals',
          ],
          technical: {
            architecture:
              'React (panel) + Express API + Prisma/MySQL. Tenant resolved by subdomain/header → middleware → scoped queries.',
            dataFlow:
              'PDF upload → parser → CatalogItem → Lead + criteria → RecommendationService → proposal draft.',
            endpoints: [
              'POST /api/auth/login',
              'GET  /api/leads?status=open',
              'POST /api/catalog/import',
              'POST /api/recommendations/generate',
            ],
            schema: `Tenant { id, slug, name }
Lead { id, tenantId, budget, destinations[], status }
CatalogItem { id, tenantId, destination, duration, priceRange }
Proposal { id, leadId, items[], score, status }`,
            auth: 'JWT in Authorization header. Google OAuth for initial login. tenantId from token, never from body.',
            snippet: `// Multi-tenant scope in Prisma middleware
prisma.$use(async (params, next) => {
  if (params.model && TENANT_MODELS.has(params.model)) {
    params.args.where = { ...params.args.where, tenantId: ctx.tenantId };
  }
  return next(params);
});`,
          },
        },
        nexus: {
          title: 'Nexus CRM',
          tagline: 'B2B sales pipeline with PDF automation and Google integrations.',
          accentLabel: 'Workflow',
          paragraphs: [
            'Multi-tenant SaaS platform focused on automating B2B commercial processes.',
            'The system centralizes lead capture, pipeline management, meetings, proposals and commercial follow-up within a scalable multi-company environment.',
            'The architecture consists of a REST API built with Node.js, Express and TypeScript, a CRM panel in React + Vite and a public capture application connected directly to the backend through smart forms.',
            'The platform implements JWT authentication, tenant isolation using Prisma ORM and MySQL, plus scoring systems, duplicate detection and commercial automation over the sales pipeline.',
            'The operational core integrates automated agents capable of classifying leads, coordinating meetings, generating commercial follow-up and building dynamic PDF proposals using Playwright, reducing operational load in internal sales processes.',
            'It also incorporates Google APIs integration for meeting synchronization, automated proposal delivery and document management, maintaining full traceability over CRM commercial activities and interactions.',
          ],
          problem:
            'Small sales teams lost leads across forms, email and spreadsheets. They needed a single pipeline with follow-up.',
          role:
            'I built the REST API, Prisma models with tenant isolation, public form connected to backend, basic lead scoring and PDF generation with Playwright from templates.',
          stackNote: 'TypeScript · Express · React · Vite · Prisma · MySQL · Playwright · Google APIs',
          features: [
            'Public capture → automatic lead creation',
            'Kanban pipeline with configurable stages',
            'Simple duplicate detection by email/domain',
            'Server-side proposal PDF (Playwright)',
          ],
          limitations:
            'No public production. Automations are scheduled scripts, not “AI agents”. Google integration limited to specific calendar/email flows.',
          statusLabel: 'Private',
          statusDescription: 'Complete project in development environment',
          galleryAlts: [
            'Commercial pipeline and lead management',
            'Automatic PDF proposal generation',
            'Public lead capture form',
          ],
          technical: {
            architecture:
              '3 surfaces: capture landing (React), CRM panel (React/Vite), Express API. Simple queue for PDF jobs.',
            dataFlow:
              'Public form → POST /public/leads → scoring → pipeline → “generate PDF” action → Playwright → storage → email.',
            endpoints: [
              'POST /public/leads',
              'PATCH /api/leads/:id/stage',
              'POST /api/proposals/:id/generate-pdf',
              'GET  /api/meetings?leadId=:id',
            ],
            schema: `Lead { id, tenantId, email, company, score, stage, source }
Proposal { id, leadId, templateId, pdfUrl, sentAt }
Meeting { id, leadId, scheduledAt, externalEventId }`,
            auth: 'JWT + tenant roles. /public/* endpoints with rate limit and honeypot, no auth.',
            snippet: `// PDF generation (simplified)
await page.setContent(renderProposalHtml(proposal));
const pdf = await page.pdf({ format: 'A4' });
await storage.save(\`proposals/\${proposal.id}.pdf\`, pdf);`,
          },
        },
        blackjack: {
          title: 'Blackjack Probability System',
          tagline: 'Probabilistic simulation and algorithmic decision evaluation.',
          accentLabel: 'Experimental',
          paragraphs: [
            'Experimental system focused on probabilistic analysis of blackjack games through statistical counting and dynamic evaluation of game state.',
            'The project analyzed visible cards, remaining deck distribution and game history to calculate probabilities in real time and estimate favorable scenarios during decision-making.',
            'Developed as an algorithm and simulation experiment, the system explored concepts related to statistical analysis, probabilistic logic and state processing applied to dynamic environments.',
          ],
          problem:
            'I wanted to understand how bust/blackjack probabilities change based on visible cards and remaining deck composition.',
          role:
            'I implemented the simulation engine in TypeScript, table state, Fisher-Yates shuffle and scenario probability calculation.',
          stackNote: 'TypeScript · Node.js · algorithms / simulation',
          features: [
            'Reproducible table state',
            'Monte Carlo simulation per decision',
            'Basic Hi-Lo counting',
            'JSON results export',
          ],
          limitations:
            'Experimental project, not tied to commercial product. No deployment or polished production UI.',
          statusLabel: 'Demo / experimental',
          statusDescription: 'Useful as logic and algorithms proof',
          galleryAlts: [
            'Table simulation and game states',
            'Probability engine and card counting',
          ],
          technical: {
            architecture: 'CLI + modules: deck, table, simulator, stats. No persistent backend.',
            dataFlow: 'Scenario config → N simulations → aggregation → probability report.',
            endpoints: ['N/A — local / CLI application'],
            schema: `GameState { deck[], playerHand[], dealerUpcard, trueCount }
SimulationResult { trials, wins, losses, pushes, bustRate }`,
            auth: 'N/A.',
            snippet: `function bustProbability(hand: Card[], deck: Card[]): number {
  let busts = 0;
  for (let i = 0; i < TRIALS; i++) {
    const trial = drawUntilStand(hand, cloneDeck(deck));
    if (handValue(trial) > 21) busts++;
  }
  return busts / TRIALS;
}`,
          },
        },
      },
    },
    contact: {
      label: 'Contact',
      title: 'Get in touch',
      description:
        'Looking for Junior / Advanced Junior Fullstack roles with backend focus. Email me or check GitHub.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'CV',
      availability: 'Available for technical interviews and coding exercises.',
      configureLinks: 'Configure email, GitHub, LinkedIn and CV in src/data/profile.ts',
    },
    lightbox: {
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
      view: 'View',
    },
    mobile: {
      readMore: 'Read full description',
      readLess: 'Show less',
      swipeGallery: 'Swipe to explore',
    },
  },
};

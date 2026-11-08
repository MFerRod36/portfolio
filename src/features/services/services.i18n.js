export const servicesContent = {
  es: {
    badge: 'Lo que construyo para vos',
    headingNeutral: 'SERVICIOS',
    slideLabel: (title, current, total) => `Ir a ${title} (${current} de ${total})`,
    services: [
      {
        number: '01',
        title: 'Diseño UX/UI',
        description:
          'Interfaces de alta fidelidad que respetan los sistemas de diseño. Wireframes, prototipos y handoff técnico sin fricción.',
        tags: ['Figma', 'Wireframes', 'Prototipos'],
      },
      {
        number: '02',
        title: 'Desarrollo Front-End',
        description:
          'React, Vite, Tailwind. Componentes con performance real: animaciones, accesibilidad y código que escala.',
        tags: ['React', 'Tailwind', 'Accesibilidad'],
      },
      {
        number: '03',
        title: 'CM & Identidad',
        description:
          'Estrategia de contenido y presencia digital con sustento. Identidad visual, copy y comunidad alineados al negocio.',
        tags: ['Branding', 'Contenido', 'Copywriting'],
      },
    ],
  },
  en: {
    badge: 'What I build for you',
    headingNeutral: 'SERVICES',
    slideLabel: (title, current, total) => `Go to ${title} (${current} of ${total})`,
    services: [
      {
        number: '01',
        title: 'UX/UI Design',
        description:
          'High-fidelity interfaces that respect design systems. Wireframes, prototypes, and frictionless technical handoff.',
        tags: ['Figma', 'Wireframes', 'Prototypes'],
      },
      {
        number: '02',
        title: 'Front-End Development',
        description:
          'React, Vite, Tailwind. Components with real performance: animations, accessibility, and code that scales.',
        tags: ['React', 'Tailwind', 'Accessibility'],
      },
      {
        number: '03',
        title: 'CM & Brand Identity',
        description:
          'Content strategy and digital presence with substance. Visual identity, copy, and community aligned to the business.',
        tags: ['Branding', 'Content', 'Copywriting'],
      },
    ],
  },
}

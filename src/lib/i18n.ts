export type Language = 'en' | 'es';

export interface Translations {
  navbar: {
    services: string;
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    headingItalic: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    items: {
      customDevelopment: { title: string; description: string };
      automationIntegrations: { title: string; description: string };
      strategicWeb: { title: string; description: string };
      standardSolutions: { title: string; description: string };
    };
  };
  work: {
    eyebrow: string;
    heading: string;
    projects: {
      meridian: { title: string; description: string };
      aura: { title: string; description: string };
      nomad: { title: string; description: string };
    };
  };
  about: {
    eyebrow: string;
    heading: string;
    team: {
      santiago: { role: string; bio: string };
      bruno: { role: string; bio: string };
      gino: { role: string; bio: string };
      martin: { role: string; bio: string };
    };
    closingStatement: string;
  };
  contact: {
    heading: string;
    subheading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    validation: {
      nameMin: string;
      emailInvalid: string;
      messageMin: string;
    };
  };
  footer: {
    services: string;
    work: string;
    about: string;
    contact: string;
    copyright: string;
    tagline: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      services: 'Services',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Software Development Studio',
      heading: 'We build software that moves your business',
      headingItalic: 'forward',
      body: 'A boutique studio of two developers who partner with businesses to design, build, and ship custom software products — from web apps to APIs and everything in between.',
      ctaPrimary: 'See our work',
      ctaSecondary: 'Get in touch',
    },
    services: {
      eyebrow: 'What we do',
      heading: 'Services',
      items: {
        customDevelopment: {
          title: 'Custom Development',
          description:
            'Tailored digital solutions built around your business model. From internal systems to scalable SaaS platforms.',
        },
        automationIntegrations: {
          title: 'Automation & Integrations',
          description:
            'Process automation and seamless system integrations that reduce manual work and improve operational efficiency.',
        },
        strategicWeb: {
          title: 'Strategic Web Development',
          description:
            'High-performance websites and web platforms designed with business goals, conversion, and scalability in mind.',
        },
        standardSolutions: {
          title: 'Standardized Digital Solutions',
          description:
            'Pre-built, structured digital systems ready to be implemented and adapted to your operational needs.',
        },
      },
    },
    work: {
      eyebrow: 'Selected projects',
      heading: 'Our Work',
      projects: {
        meridian: {
          title: 'Meridian Finance',
          description:
            'A comprehensive financial dashboard for a fintech startup. Real-time data visualization, portfolio tracking, and automated reporting.',
        },
        aura: {
          title: 'Aura Health',
          description:
            'Patient management platform for a digital health company. Appointment scheduling, telehealth integration, and secure records.',
        },
        nomad: {
          title: 'Nomad Logistics',
          description:
            'Supply chain management tool with real-time shipment tracking, route optimization, and warehouse inventory management.',
        },
      },
    },
    about: {
      eyebrow: 'Who we are',
      heading: 'The Team',
      team: {
        santiago: {
          role: 'Co-Founder · Architecture & Development',
          bio: 'Software Engineering student focused on scalable product design and solid system architecture.',
        },
        bruno: {
          role: 'Co-Founder · Strategy & Development',
          bio: 'University Programming Technician. Combines strategic vision with technical execution and product-driven thinking.',
        },
        gino: {
          role: 'Fullstack Developer',
          bio: 'Data Science student focused on performance, security, and project reliability.',
        },
        martin: {
          role: 'Frontend Developer',
          bio: 'Software Engineering student focused on user experience and interface design.',
        },
      },
      closingStatement:
        'We believe high-quality software is born from the combination of strategic vision and technical excellence. We work as an extension of your team, building solid digital solutions designed to grow.',
    },
    contact: {
      heading: 'Have a project in mind?',
      subheading: "Let's talk about how we can bring your idea to life.",
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Tell us about your project...',
      submitButton: 'Send message',
      submitting: 'Sending…',
      successMessage: "Message sent! We'll be in touch soon.",
      errorMessage: 'Something went wrong. Please try again.',
      validation: {
        nameMin: 'Name must be at least 2 characters.',
        emailInvalid: 'Please enter a valid email address.',
        messageMin: 'Message must be at least 10 characters.',
      },
    },
    footer: {
      services: 'Services',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      copyright: 'All rights reserved.',
      tagline: 'Crafting digital excellence.',
    },
  },
  es: {
    navbar: {
      services: 'Servicios',
      work: 'Proyectos',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Estudio de Desarrollo de Software',
      heading: 'Construimos software que impulsa tu negocio',
      headingItalic: 'hacia adelante',
      body: 'Un estudio boutique de dos desarrolladores que se asocian con empresas para diseñar, construir y lanzar productos de software a medida — desde aplicaciones web hasta APIs y todo lo que hay entre medio.',
      ctaPrimary: 'Ver nuestro trabajo',
      ctaSecondary: 'Contáctanos',
    },
    services: {
      eyebrow: 'Lo que hacemos',
      heading: 'Servicios',
      items: {
        customDevelopment: {
          title: 'Desarrollo a Medida',
          description:
            'Soluciones digitales diseñadas en función de tu modelo de negocio. Desde sistemas internos hasta plataformas SaaS escalables.',
        },
        automationIntegrations: {
          title: 'Automatización e Integraciones',
          description:
            'Automatización de procesos e integración de sistemas para reducir tareas manuales y optimizar la eficiencia operativa.',
        },
        strategicWeb: {
          title: 'Desarrollo Web Estratégico',
          description:
            'Sitios y plataformas web de alto rendimiento diseñados con foco en objetivos de negocio, conversión y escalabilidad.',
        },
        standardSolutions: {
          title: 'Soluciones Digitales Estandarizadas',
          description:
            'Sistemas digitales estructurados y listos para implementar, adaptables a las necesidades operativas de tu empresa.',
        },
      },
    },
    work: {
      eyebrow: 'Proyectos seleccionados',
      heading: 'Nuestro Trabajo',
      projects: {
        meridian: {
          title: 'Meridian Finance',
          description:
            'Dashboard financiero integral para una startup fintech. Visualización de datos en tiempo real, seguimiento de portafolios e informes automatizados.',
        },
        aura: {
          title: 'Aura Health',
          description:
            'Plataforma de gestión de pacientes para una empresa de salud digital. Agendamiento, integración de telemedicina y registros seguros.',
        },
        nomad: {
          title: 'Nomad Logistics',
          description:
            'Herramienta de gestión de cadena de suministro con seguimiento de envíos en tiempo real, optimización de rutas y gestión de inventario.',
        },
      },
    },
    about: {
      eyebrow: 'Quiénes somos',
      heading: 'El Equipo',
      team: {
        santiago: {
          role: 'Co-Fundador · Arquitectura y Desarrollo',
          bio: 'Estudiante de Ingeniería en Sistemas, enfocado en el diseño de productos escalables y arquitectura sólida.',
        },
        bruno: {
          role: 'Co-Fundador · Estrategia y Desarrollo',
          bio: 'Técnico Universitario en Programación. Combina visión estratégica con ejecución técnica.',
        },
        gino: {
          role: 'Desarrollador Fullstack',
          bio: 'Estudiante de Ciencia de Datos enfocado en rendimiento, seguridad y confiabilidad de los proyectos.',
        },
        martin: {
          role: 'Desarrollador Frontend',
          bio: 'Estudiante de Ingeniería de Sistemas con enfoque en experiencia de usuario y diseño de interfaces.',
        },
      },
      closingStatement:
        'Creemos que el software de calidad nace de la combinación entre visión estratégica y excelencia técnica. Trabajamos como una extensión de tu equipo, construyendo soluciones digitales sólidas y pensadas para crecer.',
    },
    contact: {
      heading: '¿Tienes un proyecto en mente?',
      subheading: 'Hablemos sobre cómo podemos dar vida a tu idea.',
      namePlaceholder: 'Nombre',
      emailPlaceholder: 'Correo electrónico',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto...',
      submitButton: 'Enviar mensaje',
      submitting: 'Enviando…',
      successMessage: '¡Mensaje enviado! Te contactaremos pronto.',
      errorMessage: 'Algo salió mal. Por favor, intentá de nuevo.',
      validation: {
        nameMin: 'El nombre debe tener al menos 2 caracteres.',
        emailInvalid: 'Por favor ingresá un email válido.',
        messageMin: 'El mensaje debe tener al menos 10 caracteres.',
      },
    },
    footer: {
      services: 'Servicios',
      work: 'Proyectos',
      about: 'Nosotros',
      contact: 'Contacto',
      copyright: 'Todos los derechos reservados.',
      tagline: 'Artesanía digital de excelencia.',
    },
  },
};

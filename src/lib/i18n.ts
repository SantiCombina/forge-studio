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
    subheading: string;
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
      gomezProducciones: { title: string; description: string };
      talkeezi: { title: string; description: string };
      beepsystem: { title: string; description: string };
      radiante: { title: string; description: string };
      sadonetech: { title: string; description: string };
      pedana: { title: string; description: string };
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
      body: 'A boutique software studio that partners with businesses to design, build, and ship high-quality digital products — from complex web platforms and internal tools to the systems and integrations that power them.',
      ctaPrimary: 'See our work',
      ctaSecondary: 'Get in touch',
    },
    services: {
      eyebrow: 'What we do',
      heading: 'Services',
      subheading:
        'From web platforms and internal tools to automations and integrations — we cover everything your business needs to move forward.',
      items: {
        customDevelopment: {
          title: 'Custom Development',
          description:
            'We design and build software that fits your exact workflows — internal tools, dashboards, SaaS platforms, and anything in between.',
        },
        automationIntegrations: {
          title: 'Automation & Integrations',
          description:
            'We connect your tools and automate repetitive tasks so your team can focus on what actually matters.',
        },
        strategicWeb: {
          title: 'Strategic Web Development',
          description:
            'Marketing sites and web platforms built to convert — fast, polished, and aligned with your business goals.',
        },
        standardSolutions: {
          title: 'Standardized Digital Solutions',
          description:
            'Proven, structured solutions for common business needs — faster to deploy, easier to maintain, built to last.',
        },
      },
    },
    work: {
      eyebrow: 'Selected projects',
      heading: 'Our Work',
      projects: {
        gomezProducciones: {
          title: 'Gomez Producciones',
          description:
            'News portal for a local audiovisual production company. Admins publish articles; visitors browse regional news.',
        },
        talkeezi: {
          title: 'Talkeezi',
          description:
            'Voice and video chat platform for language learning. Connect with speakers of the language you want to practice and have real conversations.',
        },
        beepsystem: {
          title: 'Beep Informática',
          description:
            'Quoting system for a print shop. Configurable pricing, real-time cost calculation by print options, PDF export and ticket printing.',
        },
        radiante: {
          title: 'Radiante Pizzeria',
          description:
            'Website for a pizzeria and vermouth bar in Recoleta, Buenos Aires. Showcases the food and drinks menu and centralizes reservations.',
        },
        sadonetech: {
          title: 'Sadone Tech',
          description:
            "Landing page for a furniture marketing agency. Presents the owner's brand and services, with a contact form for potential clients.",
        },
        pedana: {
          title: 'Morteros Shooting Club',
          description:
            "Tournament registration system for a shooting club. Form entries sync automatically to Google Sheets, streamlining the organizers' workflow.",
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
      body: 'Un estudio de software boutique que se asocia con empresas para diseñar, construir y lanzar productos digitales de alta calidad — desde plataformas web complejas y herramientas internas hasta los sistemas e integraciones que los hacen funcionar.',
      ctaPrimary: 'Ver nuestro trabajo',
      ctaSecondary: 'Contáctanos',
    },
    services: {
      eyebrow: 'Lo que hacemos',
      heading: 'Servicios',
      subheading:
        'Desde plataformas web y herramientas internas hasta automatizaciones e integraciones — cubrimos todo lo que tu negocio necesita para avanzar.',
      items: {
        customDevelopment: {
          title: 'Desarrollo a medida',
          description:
            'Diseñamos y construimos software que se adapta a tus procesos exactos — herramientas internas, dashboards, plataformas SaaS y todo lo que haga falta.',
        },
        automationIntegrations: {
          title: 'Automatización e integraciones',
          description:
            'Conectamos tus herramientas y automatizamos tareas repetitivas para que tu equipo se enfoque en lo que realmente importa.',
        },
        strategicWeb: {
          title: 'Desarrollo web estratégico',
          description:
            'Sitios y plataformas web diseñados para convertir — rápidos, bien terminados y alineados con tus objetivos de negocio.',
        },
        standardSolutions: {
          title: 'Soluciones digitales estandarizadas',
          description:
            'Soluciones probadas para necesidades habituales de negocio — más rápidas de implementar, más fáciles de mantener, construidas para durar.',
        },
      },
    },
    work: {
      eyebrow: 'Proyectos seleccionados',
      heading: 'Nuestro Trabajo',
      projects: {
        gomezProducciones: {
          title: 'Gomez Producciones',
          description:
            'Portal de noticias para una productora audiovisual local. Los administradores publican artículos y los usuarios consultan las noticias de la zona.',
        },
        talkeezi: {
          title: 'Talkeezi',
          description:
            'Plataforma de voz y videochat para aprender idiomas. Conectá con hablantes del idioma que querés practicar y conversá en tiempo real.',
        },
        beepsystem: {
          title: 'Beep Informática',
          description:
            'Sistema de cotización para un comercio de impresión. Precios configurables, cálculo en tiempo real según las opciones, exportación a PDF e impresión de tickets.',
        },
        radiante: {
          title: 'Pizzería Radiante',
          description:
            'Sitio web para una pizzería y vermutería en Recoleta, Buenos Aires. Exhibe la carta de comida y tragos y centraliza las reservas.',
        },
        sadonetech: {
          title: 'Sadone Tech',
          description:
            'Landing page para una agencia de marketing especializada en mueblerías. Presenta la marca y servicios del propietario, con formulario de contacto.',
        },
        pedana: {
          title: 'Pedana Morteros',
          description:
            'Sistema de inscripción a torneos para una pedana de tiro. Los formularios se sincronizan automáticamente con Google Sheets, agilizando la gestión.',
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

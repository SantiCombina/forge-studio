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
      webApps: { title: string; description: string };
      customSoftware: { title: string; description: string };
      apiIntegrations: { title: string; description: string };
      uxUiDesign: { title: string; description: string };
    };
  };
  work: {
    eyebrow: string;
    heading: string;
    viewProject: string;
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
  techStack: {
    heading: string;
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
        webApps: {
          title: 'Web Applications',
          description:
            'Modern, performant web apps built with cutting-edge frameworks. From dashboards to SaaS platforms.',
        },
        customSoftware: {
          title: 'Custom Software',
          description: 'Tailored solutions engineered from the ground up to solve your specific business challenges.',
        },
        apiIntegrations: {
          title: 'API & Integrations',
          description: 'Robust APIs and seamless third-party integrations that connect your systems and data.',
        },
        uxUiDesign: {
          title: 'UX/UI Design & Dev',
          description: 'User-centered design paired with pixel-perfect development for experiences that convert.',
        },
      },
    },
    work: {
      eyebrow: 'Selected projects',
      heading: 'Our Work',
      viewProject: 'View project',
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
          role: 'Full-Stack Developer & Co-Founder',
          bio: 'Passionate about building scalable systems. Loves turning complex problems into elegant, maintainable solutions.',
        },
        bruno: {
          role: 'Full-Stack Developer & Co-Founder',
          bio: 'Deep expertise in cloud infrastructure, CI/CD pipelines, and backend performance optimization.',
        },
        gino: {
          role: 'Frontend Developer',
          bio: 'UI craftsman with a keen eye for design systems and interactive experiences. React and animation enthusiast.',
        },
        martin: {
          role: 'Backend Developer',
          bio: 'Databases, APIs, and system architecture are his playground. Focused on reliability and security.',
        },
      },
      closingStatement:
        "We believe great software is built through craftsmanship and close partnership. We don't just ship code — we embed ourselves in your vision, working as an extension of your team to create products that last.",
    },
    techStack: {
      heading: 'Technologies we work with',
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
        webApps: {
          title: 'Aplicaciones Web',
          description:
            'Apps web modernas y eficientes construidas con frameworks de vanguardia. Desde dashboards hasta plataformas SaaS.',
        },
        customSoftware: {
          title: 'Software a Medida',
          description:
            'Soluciones personalizadas diseñadas desde cero para resolver los desafíos específicos de tu negocio.',
        },
        apiIntegrations: {
          title: 'APIs e Integraciones',
          description: 'APIs robustas e integraciones con terceros que conectan tus sistemas y datos sin fricciones.',
        },
        uxUiDesign: {
          title: 'Diseño y Desarrollo UX/UI',
          description:
            'Diseño centrado en el usuario combinado con desarrollo pixel-perfect para experiencias que convierten.',
        },
      },
    },
    work: {
      eyebrow: 'Proyectos seleccionados',
      heading: 'Nuestro Trabajo',
      viewProject: 'Ver proyecto',
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
          role: 'Desarrollador Full-Stack & Co-Fundador',
          bio: 'Apasionado por construir sistemas escalables. Le encanta convertir problemas complejos en soluciones elegantes y mantenibles.',
        },
        bruno: {
          role: 'Desarrollador Full-Stack & Co-Fundador',
          bio: 'Profunda experiencia en infraestructura cloud, pipelines CI/CD y optimización de rendimiento backend.',
        },
        gino: {
          role: 'Desarrollador Frontend',
          bio: 'Artesano de UI con ojo agudo para sistemas de diseño y experiencias interactivas. Entusiasta de React y las animaciones.',
        },
        martin: {
          role: 'Desarrollador Backend',
          bio: 'Las bases de datos, APIs y la arquitectura de sistemas son su territorio. Enfocado en confiabilidad y seguridad.',
        },
      },
      closingStatement:
        'Creemos que el gran software se construye a través del oficio y la colaboración cercana. No solo enviamos código — nos sumergimos en tu visión, trabajando como una extensión de tu equipo para crear productos que perduran.',
    },
    techStack: {
      heading: 'Tecnologías con las que trabajamos',
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
    },
  },
};

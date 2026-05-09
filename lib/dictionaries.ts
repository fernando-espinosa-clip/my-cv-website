export type Dictionary = typeof en

export const en = {
  nav: {
    home: "HOME",
    about: "ABOUT",
    skills: "SKILLS",
    achievements: "ACHIEVEMENTS",
    experience: "EXPERIENCE",
    contact: "CONTACT",
    rights: "ALL RIGHTS RESERVED."
  },
  hero: {
    slide1: {
      title: "HELLO, I'M",
      name: "FERNANDO ESPINOSA",
      subtitle: "SENIOR FULL STACK ENGINEER"
    },
    slide2: {
      title: "ARCHITECTING",
      name: "SCALABLE SOLUTIONS",
      subtitle: "MICRO-FRONTENDS & DESIGN SYSTEMS"
    },
    slide3: {
      title: "DRIVING",
      name: "ENGINEERING EXCELLENCE",
      subtitle: "LEADERSHIP & MENTORSHIP"
    }
  },
  about: {
    title: "ABOUT",
    personalInfo: "PERSONAL INFO",
    name: "Name:",
    email: "Email:",
    phone: "Phone:",
    location: "Location:",
    website: "Website:",
    downloadResume: "DOWNLOAD RESUME",
    professionalProfile: "PROFESSIONAL PROFILE",
    p1: "Full Stack Engineer driven by Front-end development and performance optimization, with proven experience in implementing Design Systems and successfully managing teams. Over 14 years of experience architecting scalable web applications.",
    p2: "Expert in modernizing legacy systems (Monolith to Micro-frontends) and leading technical teams to deliver high-quality software using Agile methodologies.",
    p3: "Currently serving as Tech Lead at CLIP, spearheading Design Systems and Micro-frontends architecture."
  },
  skills: {
    title: "SKILLS",
    subtitle: "JUST MY AWESOME SKILLS",
    description: "Specialized in Front-End Architecture, Design Systems & Performance Optimization. Expert in modernizing legacy systems and leading technical teams.",
    circular: [
      { title: "React / JS", subtitle: "Expert, 8 years", percentage: 95 },
      { title: "Architecture", subtitle: "Micro-frontends", percentage: 85 },
      { title: "Node.js", subtitle: "Advanced", percentage: 80 },
      { title: "Design Systems", subtitle: "Storybook / UI", percentage: 88 }
    ],
    knowledgeTitle: "KNOWLEDGE",
    knowledgeList: [
      "JavaScript (ES6+)", "TypeScript", "React (Hooks, Context)", 
      "Redux / React Query", "Module Federation", "Webpack / Rspack",
      "TailwindCSS", "Node.js / Express", "CI/CD Pipelines", "Unit Testing"
    ],
    languagesTitle: "LANGUAGES",
    languages: [
      { name: "Spanish", level: "Native", percentage: 100 },
      { name: "English", level: "B2", percentage: 70 }
    ]
  },
  achievements: {
    title: "KEY ACHIEVEMENTS",
    subtitle: "CAREER HIGHLIGHTS",
    items: [
      {
        title: "Micro-frontends Architecture",
        description: "Spearheaded the strategic migration of a critical monolith to a Micro-frontend ecosystem using Module Federation, enabling 6 teams to deploy independently and reducing integration conflicts."
      },
      {
        title: "Design Systems Leadership",
        description: "Co-led the corporate visual unification by architecting a scalable Design System documented in Storybook, ensuring brand consistency across multiple products and reducing UI dev time."
      },
      {
        title: "Ecosystem Standardization",
        description: "Defined the organizational Front-end stack (Linters, Testing Coverage, and TypeScript migration strategies), elevating code quality and developer mobility across projects."
      },
      {
        title: "Performance Optimization",
        description: "Modernized legacy application performance by implementing Rspack/Webpack optimizations and Service Workers, significantly improving load times and user experience."
      },
      {
        title: "Engineering Culture",
        description: "Structured and formalized the Front-end Career Path and hiring criteria, aligning technical growth expectations and improving recruitment processes."
      }
    ]
  },
  experience: {
    title: "EXPERIENCE",
    subtitle: "14+ Years Experience!",
    description: "A journey through full stack development, architecture, and leadership.",
    jobs: [
      {
        role: "Tech Lead - Core Team",
        company: "CLIP | Mexico (Remote)",
        period: "2023 – Present",
        points: [
          "Design Systems Leadership: Spearheaded the collaboration with UI/UX leadership to architect and implement a unified Design System. Authored comprehensive documentation in Storybook, resulting in consistent visual identity across all company projects.",
          "Engineering Culture & Standardization: Defined and implemented the official Front-end Engineering profile/career path, aligning technologies and hiring criteria across the organization.",
          "Developer Experience (DX): Engineered a suite of support libraries to standardize development, including unified Linters, Unit Testing coverage requirements, and a '3-Level TypeScript' adoption strategy to facilitate smoother JS-to-TS migrations.",
          "Micro-frontends Architecture: Created the standard project template pre-configured with Module Federation, enabling rapid bootstrapping of new Micro-frontends.",
          "Performance Optimization: Consulted for resource-constrained teams to modernize legacy projects, implementing Webpack/Rspack optimizations and Service Workers for advanced caching strategies."
        ],
        iconName: "Briefcase"
      },
      {
        role: "Senior Full Stack Engineer",
        company: "CLIP | Mexico",
        period: "2019 – 2023",
        points: [
          "Architecture Evolution: Proposed and led the strategic migration from a monolithic architecture to Micro-frontends using Module Federation. This allowed the massive merchant-facing system (managed by 6 teams) to be split into independent deployable units and integrated into native mobile apps via WebViews.",
          "Product Development: Led the development of the Merchant Dashboard and the B2B Developer Portal, including public API documentation and SDK integration guides.",
          "Performance Tuning: Standardized the implementation of React Hooks and React Query across teams to handle server state and caching efficiently. Implemented Webpack asset compression, significantly reducing load times.",
          "Mentorship: Acted as a key technical mentor, training other teams on modern React patterns and performance best practices."
        ],
        iconName: "Code"
      },
      {
        role: "Software Engineer",
        company: "TIEMPO DEVELOPMENT",
        period: "2017 – 2019",
        points: [
          "Led the critical migration of a legacy Xojo application to a modern React.js architecture, significantly improving maintainability.",
          "Designed a desktop application using ElectronJs and Material-UI, establishing the foundational UI patterns for the product.",
          "Optimized data flow by implementing Redux and custom middleware, automating complex API interactions."
        ],
        iconName: "Terminal"
      },
      {
        role: "Software Engineer",
        company: "NEUROTRONIX",
        period: "2016 – 2017",
        points: [
          "Architected real-time communication protocols for IoT parking devices using Node.js (sockets/serial ports).",
          "Coordinated a cross-functional team (C# & PHP developers), aligning hardware and software integration for payment systems."
        ],
        iconName: "Server"
      },
      {
        role: "Full Stack Developer",
        company: "JAGUAR LABS",
        period: "2015 – 2016",
        points: [
          "Project Waterlink: Developed a responsive SPA using Angular. Engineered a custom drag-and-drop calendar feature.",
          "Project Elio Motors: Built an interactive 3D car configurator (Angular/Laravel), enabling real-time feature customization.",
          "Modernization: Migrated legacy Front-end code (Dojo to jQuery) and implemented responsive frameworks."
        ],
        iconName: "Code"
      },
      {
        role: "eBusiness Manager & Senior Web Developer",
        company: "CLUB SOLARIS",
        period: "2007 – 2015",
        points: [
          "Directed the full software lifecycle for e-commerce platforms and internal call center systems.",
          "Managed IT and Design teams using Scrum. Pioneered the migration of static sites to dynamic PHP/AngularJS frameworks."
        ],
        iconName: "Briefcase"
      }
    ]
  },
  contact: {
    title: "CONTACT",
    subtitle1: "LET'S KEEP IN TOUCH",
    description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    addressTitle: "ADDRESS",
    phoneTitle: "PHONE",
    emailTitle: "EMAIL",
    subtitle2: "DROP ME A LINE",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    button: "SAY HELLO!",
    sending: "SENDING...",
    successMessage: "Message sent successfully! I'll get back to you soon.",
    errorMessage: "Failed to send message. Please try again.",
    errors: {
      nameRequired: "Name is required",
      nameLength: "Name must be less than 150 characters",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      messageRequired: "Message is required",
      messageLength: "Message must be less than 1000 characters"
    }
  }
}

export const es: Dictionary = {
  nav: {
    home: "INICIO",
    about: "SOBRE MÍ",
    skills: "HABILIDADES",
    achievements: "LOGROS",
    experience: "EXPERIENCIA",
    contact: "CONTACTO",
    rights: "TODOS LOS DERECHOS RESERVADOS."
  },
  hero: {
    slide1: {
      title: "HOLA, SOY",
      name: "FERNANDO ESPINOSA",
      subtitle: "INGENIERO FULL STACK SENIOR"
    },
    slide2: {
      title: "ARQUITECTURA DE",
      name: "SOLUCIONES ESCALABLES",
      subtitle: "MICRO-FRONTENDS Y SISTEMAS DE DISEÑO"
    },
    slide3: {
      title: "IMPULSANDO LA",
      name: "EXCELENCIA EN INGENIERÍA",
      subtitle: "LIDERAZGO Y MENTORÍA"
    }
  },
  about: {
    title: "SOBRE MÍ",
    personalInfo: "INFORMACIÓN PERSONAL",
    name: "Nombre:",
    email: "Email:",
    phone: "Teléfono:",
    location: "Ubicación:",
    website: "Sitio Web:",
    downloadResume: "DESCARGAR CV",
    professionalProfile: "PERFIL PROFESIONAL",
    p1: "Ingeniero Full Stack impulsado por el desarrollo Front-end y la optimización del rendimiento, con experiencia probada en la implementación de Sistemas de Diseño y gestión exitosa de equipos. Más de 14 años de experiencia arquitectando aplicaciones web escalables.",
    p2: "Experto en modernizar sistemas heredados (Monolito a Micro-frontends) y liderar equipos técnicos para entregar software de alta calidad utilizando metodologías Ágiles.",
    p3: "Actualmente sirviendo como Tech Lead en CLIP, encabezando la arquitectura de Sistemas de Diseño y Micro-frontends."
  },
  skills: {
    title: "HABILIDADES",
    subtitle: "MIS HABILIDADES DESTACADAS",
    description: "Especializado en Arquitectura Front-End, Sistemas de Diseño y Optimización de Rendimiento. Experto en modernizar sistemas heredados y liderar equipos técnicos.",
    circular: [
      { title: "React / JS", subtitle: "Experto, 8 años", percentage: 95 },
      { title: "Arquitectura", subtitle: "Micro-frontends", percentage: 85 },
      { title: "Node.js", subtitle: "Avanzado", percentage: 80 },
      { title: "Sistemas de Diseño", subtitle: "Storybook / UI", percentage: 88 }
    ],
    knowledgeTitle: "CONOCIMIENTOS",
    knowledgeList: [
      "JavaScript (ES6+)", "TypeScript", "React (Hooks, Context)", 
      "Redux / React Query", "Module Federation", "Webpack / Rspack",
      "TailwindCSS", "Node.js / Express", "CI/CD Pipelines", "Pruebas Unitarias"
    ],
    languagesTitle: "IDIOMAS",
    languages: [
      { name: "Español", level: "Nativo", percentage: 100 },
      { name: "Inglés", level: "B2", percentage: 70 }
    ]
  },
  achievements: {
    title: "LOGROS CLAVE",
    subtitle: "DESTACADOS PROFESIONALES",
    items: [
      {
        title: "Arquitectura de Micro-frontends",
        description: "Lideré la migración estratégica de un monolito crítico a un ecosistema de Micro-frontends utilizando Module Federation, permitiendo a 6 equipos desplegar de forma independiente y reduciendo conflictos de integración."
      },
      {
        title: "Liderazgo en Sistemas de Diseño",
        description: "Co-lideré la unificación visual corporativa arquitectando un Sistema de Diseño escalable documentado en Storybook, asegurando consistencia de marca en múltiples productos y reduciendo tiempo de desarrollo UI."
      },
      {
        title: "Estandarización del Ecosistema",
        description: "Definí el stack Front-end organizacional (Linters, Cobertura de Pruebas y estrategias de migración TypeScript), elevando la calidad del código y la movilidad de desarrolladores entre proyectos."
      },
      {
        title: "Optimización de Rendimiento",
        description: "Modernicé el rendimiento de aplicaciones legacy implementando optimizaciones Rspack/Webpack y Service Workers, mejorando significativamente tiempos de carga y experiencia de usuario."
      },
      {
        title: "Cultura de Ingeniería",
        description: "Estructuré y formalicé el Plan de Carrera Front-end y criterios de contratación, alineando expectativas de crecimiento técnico y mejorando procesos de reclutamiento."
      }
    ]
  },
  experience: {
    title: "EXPERIENCIA",
    subtitle: "¡Más de 14 años de experiencia!",
    description: "Una trayectoria a través del desarrollo full stack, arquitectura y liderazgo.",
    jobs: [
      {
        role: "Líder Técnico - Equipo Core",
        company: "CLIP | México (Remoto)",
        period: "2023 – Presente",
        points: [
          "Liderazgo en Sistemas de Diseño: Encabecé la colaboración con el liderazgo de UI/UX para arquitectar e implementar un Sistema de Diseño unificado. Redacté documentación completa en Storybook, resultando en una identidad visual consistente en todos los proyectos de la empresa.",
          "Cultura de Ingeniería y Estandarización: Definí e implementé el perfil/trayectoria profesional oficial de Ingeniería Front-end, alineando tecnologías y criterios de contratación en toda la organización.",
          "Experiencia del Desarrollador (DX): Diseñé un conjunto de bibliotecas de soporte para estandarizar el desarrollo, incluyendo Linters unificados, requisitos de cobertura de Pruebas Unitarias y una estrategia de adopción de 'TypeScript de 3 Niveles' para facilitar migraciones de JS a TS más fluidas.",
          "Arquitectura de Micro-frontends: Creé la plantilla de proyecto estándar preconfigurada con Module Federation, permitiendo el arranque rápido de nuevos Micro-frontends.",
          "Optimización del Rendimiento: Consulté para equipos con recursos limitados para modernizar proyectos heredados, implementando optimizaciones de Webpack/Rspack y Service Workers para estrategias de caché avanzadas."
        ],
        iconName: "Briefcase"
      },
      {
        role: "Ingeniero Full Stack Senior",
        company: "CLIP | Mexico",
        period: "2019 – 2023",
        points: [
          "Evolución de la Arquitectura: Propuse y lideré la migración estratégica de una arquitectura monolítica a Micro-frontends usando Module Federation. Esto permitió que el sistema masivo orientado al comerciante (gestionado por 6 equipos) se dividiera en unidades desplegables independientes e integradas en aplicaciones móviles nativas a través de WebViews.",
          "Desarrollo de Producto: Lideré el desarrollo del Panel de Comerciantes y el Portal de Desarrolladores B2B, incluyendo documentación pública de API y guías de integración de SDK.",
          "Ajuste de Rendimiento: Estandaricé la implementación de React Hooks y React Query en todos los equipos para manejar el estado del servidor y el almacenamiento en caché de manera eficiente. Implementé compresión de activos Webpack, reduciendo significativamente los tiempos de carga.",
          "Mentoría: Actué como mentor técnico clave, capacitando a otros equipos en patrones modernos de React y mejores prácticas de rendimiento."
        ],
        iconName: "Code"
      },
      {
        role: "Ingeniero de Software",
        company: "TIEMPO DEVELOPMENT",
        period: "2017 – 2019",
        points: [
          "Lideré la migración crítica de una aplicación heredada en Xojo a una arquitectura moderna en React.js, mejorando significativamente la mantenibilidad.",
          "Diseñé una aplicación de escritorio usando ElectronJs y Material-UI, estableciendo los patrones de UI fundamentales para el producto.",
          "Optimicé el flujo de datos implementando Redux y middleware personalizado, automatizando interacciones complejas de API."
        ],
        iconName: "Terminal"
      },
      {
        role: "Ingeniero de Software",
        company: "NEUROTRONIX",
        period: "2016 – 2017",
        points: [
          "Arquitecté protocolos de comunicación en tiempo real para dispositivos de estacionamiento IoT usando Node.js (sockets/puertos serie).",
          "Coordiné un equipo multifuncional (desarrolladores C# y PHP), alineando la integración de hardware y software para sistemas de pago."
        ],
        iconName: "Server"
      },
      {
        role: "Desarrollador Full Stack",
        company: "JAGUAR LABS",
        period: "2015 – 2016",
        points: [
          "Proyecto Waterlink: Desarrollé una SPA responsiva usando Angular. Diseñé una función personalizada de calendario de arrastrar y soltar.",
          "Proyecto Elio Motors: Construí un configurador de autos 3D interactivo (Angular/Laravel), permitiendo la personalización de características en tiempo real.",
          "Modernización: Migré código Front-end heredado (Dojo a jQuery) e implementé frameworks responsivos."
        ],
        iconName: "Code"
      },
      {
        role: "Gerente de eBusiness y Desarrollador Web Senior",
        company: "CLUB SOLARIS",
        period: "2007 – 2015",
        points: [
          "Dirigí el ciclo de vida completo del software para plataformas de comercio electrónico y sistemas internos de call center.",
          "Gestioné equipos de TI y Diseño usando Scrum. Fui pionero en la migración de sitios estáticos a frameworks dinámicos PHP/AngularJS."
        ],
        iconName: "Briefcase"
      }
    ]
  },
  contact: {
    title: "CONTACTO",
    subtitle1: "MANTENGÁMONOS EN CONTACTO",
    description: "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.",
    addressTitle: "DIRECCIÓN",
    phoneTitle: "TELÉFONO",
    emailTitle: "EMAIL",
    subtitle2: "ESCRÍBEME",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Email",
    messagePlaceholder: "Mensaje",
    button: "¡HOLA!",
    sending: "ENVIANDO...",
    successMessage: "¡Mensaje enviado con éxito! Te responderé pronto.",
    errorMessage: "Error al enviar el mensaje. Por favor intenta de nuevo.",
    errors: {
      nameRequired: "El nombre es obligatorio",
      nameLength: "El nombre debe tener menos de 150 caracteres",
      emailRequired: "El email es obligatorio",
      emailInvalid: "Por favor ingresa un email válido",
      messageRequired: "El mensaje es obligatorio",
      messageLength: "El mensaje debe tener menos de 1000 caracteres"
    }
  }
}

export const dictionaries = { en, es }

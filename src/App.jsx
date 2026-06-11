import { useEffect, useRef, useState } from 'react'
import './App.css'
import profileImage from './assets/profile.jpg'
import { useMemo } from 'react'

const content = {
  en: {
    nav: {
      hero: 'Hero',
      projects: 'Projects',
      profile: 'Profile',
      contact: 'Contact',
      downloadCv: 'DOWNLOAD_CV',
      language: 'ES',
    },
    hero: {
      title: '<JUAN DAVID TOVAR/>',
      subtitle:
        'Full Stack Developer focused on creating scalable digital products. Experienced in React, Node.js, NestJS, and database design, transforming complex business requirements into reliable software solutions.',
      actions: {
        projects: 'Projects',
        profile: 'Profile',
        contact: 'Contact',
      },
    },
    projectsSection: {
      kicker: 'DEPLOYMENT_HISTORY',
      title: 'SELECTED_PROJECTS',
      description:
        'Iterative prototypes and production-ready architectures built for high-performance and scalability. Explore the neural network of my development journey.',
    },
    projects: [
      {
        code: '0x01 // SYSTEM_ORCHESTRATOR',
        title: 'Nebula Backend Engine',
        description:
          'High-availability microservices architecture designed for real-time data processing and asynchronous task management. Implements complex event-driven patterns with fault-tolerant recovery protocols.',
        tags: ['Node.js', 'NestJS', 'SQL', 'AWS'],
        actions: [
          { label: 'LIVE_DEMO', icon: 'terminal', variant: 'primary' },
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBUZQSygAZGUsBFjOELr58uSb7a4iTMmbQSLJ14PHaoI9xSkpyOQYI8p9J06rVLbouUUZeqllaGYtyFELlsvhQ7PE7Zj1mPZ18sjN-bl-qXl-6EJMN1FA9U2Wz4ODOTnBBO54hZQpFGVmiPT4e-UhK7uJPAtkRcwFJeT4R2oWLEinhJKH8f4m0CCGRHtMFV8B7vVf98VBcyM-C98T_dQik6dCcLcr8eS3ktIWkpx1haFueGbXjyykr6N5970PlpfUjTXFJviQY1qak',
      },
      {
        code: '0x02 // CONTAINER_X',
        title: 'Hydra Ops',
        description:
          'Automated CI/CD pipeline manager with multi-cloud deployment capabilities and runtime monitoring.',
        tags: ['Docker', 'AWS'],
        actions: [
          { label: 'REPO', icon: 'terminal', variant: 'primary' },
          { label: 'DOCS', icon: 'description', variant: 'ghost' },
        ],
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB5DYn4-L8mebDtMnBEy7C9Iu3-mpa_9Xjev8gIOOkpDSjzHGobdIGEeAAcFnTW9L1ff9ghiZeq_XowjhomsulLkFqTBl7qjK1LNuMadl3MujTMp-kb6ggg3oUrGiTYdaQ_RcybRMnsNd6hpiM_nSI6-jPOsBkWYW7A08-Lvn00jh4Iow9AwXQBZ11EQbYtQZk-USxzjQv35QQW2D6HARDHPAeur1lAepYA-814TXkNqBjPKcY_JGjEV21mCSzoisGyb_LmF0vzu1U',
      },
      {
        code: '0x03 // DATA_VAULT',
        title: 'Encryption API',
        description:
          'Enterprise-grade RESTful API specialized in military-grade encryption for sensitive metadata handling and secure handshake protocols.',
        tags: ['NestJS', 'SQL', 'Node.js'],
        actions: [{ label: 'VIEW_REPOSITORY', icon: 'terminal', variant: 'primary' }],
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC_UlWfHb0UDxL6dGyiBOXkzJbXiIvRIxiPRXw5fE9mY4M5Y-6DZJNoT4BbUle0YKptbzJ7dc3fV1eXxroEEydP1XAeZM9IDCXMr9ODOWqBBa37F3WZJZlTl6NThvyyWukF58DHFU7pQFjnm_1-582RS61StFm5Wm5jcsgtjUq7yYfKBcGztXsd_puX6akP_x8vCo12E7PDxFlOMjYgOp1np10aq9lp8TuKPu0dD-WAhX1EmiGXtTi3J9JPtfqVvEbKQ_tvyivs8ms',
      },
      {
        code: '0x04 // CLOUD_SYNC',
        title: 'S3 Auto-Proxy',
        description:
          'Dynamic proxy server for AWS S3 buckets allowing on-the-fly image optimization and secure credential-less public access management.',
        tags: ['AWS', 'Docker', 'Node.js'],
        actions: [{ label: 'VIEW_REPOSITORY', icon: 'terminal', variant: 'primary' }],
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDERO1qxIGdtV0OgN7oNwdcbGITq1_nvOW025LbEGJ2pUGXDZL8pJm_02L5Y9EU-ojS3GtDEkBAjqXiT8KREDYrq2VhwE2pFSjeNYG5ysOdZJLfwIt0JE-I_a5zNpdCir-_yEJOmff5PGDgYysAwDlWZ_-B1acJfH8BFLcmMDRF5inN2WsHdnzz5v8mdZyUGUqiDRIJ4vV78RhAI_pDMLLWLEOsvqgqRTyeNgVshfseLbZfJ1QV6Qg9YRgbCBUTpBlkMVJEZxoRlRk',
      },
    ],
    profileSection: {
      title: 'PROFESSIONAL EXPERIENCE',
      description: 'Full Stack Developer with expertise in modern web technologies and scalable architectures.',
      coreCompetencies: 'CORE COMPETENCIES',
      executionHistory: 'PROFESSIONAL HISTORY',
    },
    competencies: {
      advanced: ['JavaScript', 'React.js', 'Node.js', 'Express', 'Sequelize.js', 'PostgreSQL', 'Tailwind CSS', 'Git'],
      intermediate: ['NestJS', 'Angular', 'Vite', 'SQL Server', 'MySQL', 'TypeORM', 'MongoDB / Mongoose', 'Redux.js', 'CSS3 / HTML5'],
      basic: ['RxJS', 'NgRx', 'Next.js', 'Three.js / React-Three-Fiber'],
    },
    timeline: [
      {
        period: 'Dec 2025 - Mar 2026',
        role: 'Full-Stack Developer',
        title: 'Levva IA Software (Freelance)',
        description:
          'Desarrollo de un proyecto SaaS desde cero (greenfield), definiendo la arquitectura del sistema y bases técnicas enfocadas en escalabilidad, seguridad y flujos orientados a agentes de IA. Diseño e implementación de modelos de datos relacionales con MySQL y Sequelize. Creación de funcionalidades completas utilizando NestJS, React, Vite y Tailwind (sistemas de reportes, notificaciones y servicios de correo). Implementación de mecanismos de seguridad como RBAC, MFA y encriptación.',
        highlights: [
          'Desarrollo de un proyecto SaaS desde cero (greenfield), definiendo la arquitectura del sistema y bases técnicas enfocadas en escalabilidad, seguridad y flujos orientados a agentes de IA.',
          'Diseño e implementación de modelos de datos relacionales con MySQL y Sequelize.',
          'Creación de funcionalidades completas utilizando NestJS, React, Vite y Tailwind (sistemas de reportes, notificaciones y servicios de correo).',
          'Implementación de mecanismos de seguridad como RBAC (control de acceso basado en roles), MFA y encriptación de datos en tránsito y en reposo.',
        ],
      },
      {
        period: 'Apr 2024 - Dec 2025',
        role: 'Full-Stack Developer Jr',
        title: 'Justo Pago',
        description:
          'Desarrollo de nuevas funcionalidades y optimización de consultas en la base de datos para asegurar sincronización en tiempo real con SQL Server y TypeORM. Implementación de una función de chat interactivo integrando React, Tailwind, NestJS y MongoDB. Diseño de sistemas de notificaciones automatizadas por WhatsApp y email bajo una arquitectura guiada por eventos (pub/sub). Creación y actualización de interfaces de usuario dinámicas empleando Next.js, React y NestJS.',
        highlights: [
          'Desarrollo de nuevas funcionalidades y optimización de consultas en la base de datos para asegurar sincronización en tiempo real con SQL Server y TypeORM.',
          'Implementación de una función de chat interactivo integrando React, Tailwind, NestJS y MongoDB.',
          'Diseño de sistemas de notificaciones automatizadas por WhatsApp y email bajo una arquitectura guiada por eventos (pub/sub).',
          'Creación y actualización de interfaces de usuario dinámicas empleando Next.js, React y NestJS.',
        ],
      },
      {
        period: 'Aug 2023 - Nov 2023',
        role: 'Full-Stack Developer',
        title: 'Xirectds',
        description:
          'Contribución desde cero en la creación del Producto Mínimo Viable (MVP) para la plataforma web de gestión de prospectos Soxial Leads. Desarrollo y maquetación de la interfaz de usuario utilizando Next.js, React y NestJS. Modificaciones a nivel de base de datos e interacciones mediante TypeORM y SQL Server.',
        highlights: [
          'Contribución desde cero en la creación del Producto Mínimo Viable (MVP) para la plataforma web de gestión de prospectos Soxial Leads.',
          'Desarrollo y maquetación de la interfaz de usuario utilizando Next.js, React y NestJS.',
          'Modificaciones a nivel de base de datos e interacciones mediante TypeORM y SQL Server.',
        ],
      },
      {
        period: 'Aug 2022 - Feb 2023',
        role: 'Full-Stack Developer Jr',
        title: 'Kargoru',
        description:
          'Desarrollo de la interfaz de usuario y vistas web con alta interactividad utilizando Angular, RxJS y NgRx. Integración y automatización de notificaciones por correo y WhatsApp conectando lógicas en NestJS y Mongoose. Integración de plataformas, APIs y pasarelas externas, incluyendo WordPress y pasarelas de carga.',
        highlights: [
          'Desarrollo de la interfaz de usuario y vistas web con alta interactividad utilizando Angular, RxJS y NgRx.',
          'Integración y automatización de notificaciones por correo y WhatsApp conectando lógicas en NestJS y Mongoose.',
          'Integración de plataformas, APIs y pasarelas externas, incluyendo WordPress y pasarelas de carga (sucarga.com).',
        ],
      },
    ],
    contactSection: {
      aboutTitle: 'ABOUT_ME',
      aboutP1:
        'I am a Full Stack Developer with 3 years of experience, specialized in building and optimizing web applications using technologies such as React, Node.js, Express, Sequelize, PostgreSQL, and Git. I have experience applying agile methodologies like SCRUM to deliver efficient and high-quality solutions.',
      aboutP2:
        'I am a Systems Engineer with a strong focus on web development, a path I chose from my academic background. Throughout this trajectory, I have worked on diverse projects that have strengthened my technical profile and provided me with practical experience with modern technologies such as Vite, Redis, and React.',
      github: 'GITHUB',
      linkedin: 'LINKEDIN',
      cv: 'CV_ARCHIVE',
      techStack: 'TECH_STACK',
      experience: 'EXPERIENCE',
      role: 'FULL_STACK',
      years: '12_YEARS',
      contactTitle: 'CONTACT',
      userId: 'USER_ID',
      namePlaceholder: 'Enter your name...',
      accessPoint: 'ACCESS_POINT',
      emailPlaceholder: 'your@email.com',
      dataPayload: 'DATA_PAYLOAD',
      messagePlaceholder: 'Write your message here...',
      send: 'EXECUTE_TRANSMISSION',
    },
    heroTicker: ['REACT.JS', 'NODE.JS', 'TYPESCRIPT', 'NEST.JS', 'VITE'],
    footerLeft: '© 2024 SYSTEM_ARCHITECT. EXECUTE_SUCCESS.',
    footerLinks: ['GITHUB', 'LINKEDIN', 'TERMINAL'],
  },
  es: {
    nav: {
      hero: 'Inicio',
      projects: 'Proyectos',
      profile: 'Perfil',
      contact: 'Contacto',
      downloadCv: 'DESCARGAR_CV',
      language: 'EN',
    },
    hero: {
      title: '<JUAN DAVID TOVAR/>',
      subtitle:
        'Desarrollador Full Stack enfocado en la creación de productos escalables. Con experiencia en React, Node.js, NestJS y diseño de bases de datos, transformando requerimientos de negocio complejos en soluciones de software confiables.',
      actions: {
        projects: 'Proyectos',
        profile: 'Perfil',
        contact: 'Contacto',
      },
    },
    projectsSection: {
      kicker: 'HISTORIAL_DESPLIEGUE',
      title: 'PROYECTOS_SELECCIONADOS',
      description:
        'Prototipos iterativos y arquitecturas listas para produccion construidas para alto rendimiento y escalabilidad. Explora la red neuronal de mi trayectoria de desarrollo.',
    },
    projects: [
      {
        code: '0x01 // SYSTEM_ORCHESTRATOR',
        title: 'Nebula Backend Engine',
        description:
          'Arquitectura de microservicios de alta disponibilidad diseñada para procesamiento de datos en tiempo real y gestion asincrona de tareas. Implementa patrones complejos orientados a eventos con protocolos de recuperacion tolerantes a fallos.',
        tags: ['Node.js', 'NestJS', 'SQL', 'AWS'],
        actions: [
          { label: 'DEMO_EN_VIVO', icon: 'terminal', variant: 'primary' },
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBUZQSygAZGUsBFjOELr58uSb7a4iTMmbQSLJ14PHaoI9xSkpyOQYI8p9J06rVLbouUUZeqllaGYtyFELlsvhQ7PE7Zj1mPZ18sjN-bl-qXl-6EJMN1FA9U2Wz4ODOTnBBO54hZQpFGVmiPT4e-UhK7uJPAtkRcwFJeT4R2oWLEinhJKH8f4m0CCGRHtMFV8B7vVf98VBcyM-C98T_dQik6dCcLcr8eS3ktIWkpx1haFueGbXjyykr6N5970PlpfUjTXFJviQY1qak',
      },
      {
        code: '0x02 // CONTAINER_X',
        title: 'Hydra Ops',
        description:
          'Gestor automatizado de pipelines CI/CD con despliegue multicloud y monitorizacion en tiempo de ejecucion.',
        tags: ['Docker', 'AWS'],
        actions: [
          { label: 'REPO', icon: 'terminal', variant: 'primary' },
          { label: 'DOCS', icon: 'description', variant: 'ghost' },
        ],
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB5DYn4-L8mebDtMnBEy7C9Iu3-mpa_9Xjev8gIOOkpDSjzHGobdIGEeAAcFnTW9L1ff9ghiZeq_XowjhomsulLkFqTBl7qjK1LNuMadl3MujTMp-kb6ggg3oUrGiTYdaQ_RcybRMnsNd6hpiM_nSI6-jPOsBkWYW7A08-Lvn00jh4Iow9AwXQBZ11EQbYtQZk-USxzjQv35QQW2D6HARDHPAeur1lAepYA-814TXkNqBjPKcY_JGjEV21mCSzoisGyb_LmF0vzu1U',
      },
      {
        code: '0x03 // DATA_VAULT',
        title: 'Encryption API',
        description:
          'API RESTful de nivel empresarial especializada en cifrado de grado militar para el manejo de metadatos sensibles y protocolos de handshake seguros.',
        tags: ['NestJS', 'SQL', 'Node.js'],
        actions: [{ label: 'VER_REPOSITORIO', icon: 'terminal', variant: 'primary' }],
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC_UlWfHb0UDxL6dGyiBOXkzJbXiIvRIxiPRXw5fE9mY4M5Y-6DZJNoT4BbUle0YKptbzJ7dc3fV1eXxroEEydP1XAeZM9IDCXMr9ODOWqBBa37F3WZJZlTl6NThvyyWukF58DHFU7pQFjnm_1-582RS61StFm5Wm5jcsgtjUq7yYfKBcGztXsd_puX6akP_x8vCo12E7PDxFlOMjYgOp1np10aq9lp8TuKPu0dD-WAhX1EmiGXtTi3J9JPtfqVvEbKQ_tvyivs8ms',
      },
      {
        code: '0x04 // CLOUD_SYNC',
        title: 'S3 Auto-Proxy',
        description:
          'Servidor proxy dinamico para buckets de AWS S3 que permite optimizacion de imagenes sobre la marcha y gestion segura de acceso publico sin credenciales.',
        tags: ['AWS', 'Docker', 'Node.js'],
        actions: [{ label: 'VER_REPOSITORIO', icon: 'terminal', variant: 'primary' }],
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDERO1qxIGdtV0OgN7oNwdcbGITq1_nvOW025LbEGJ2pUGXDZL8pJm_02L5Y9EU-ojS3GtDEkBAjqXiT8KREDYrq2VhwE2pFSjeNYG5ysOdZJLfwIt0JE-I_a5zNpdCir-_yEJOmff5PGDgYysAwDlWZ_-B1acJfH8BFLcmMDRF5inN2WsHdnzz5v8mdZyUGUqiDRIJ4vV78RhAI_pDMLLWLEOsvqgqRTyeNgVshfseLbZfJ1QV6Qg9YRgbCBUTpBlkMVJEZxoRlRk',
      },
    ],
    profileSection: {
      title: 'EXPERIENCIA PROFESIONAL',
      description: 'Desarrollador Full Stack con experiencia en tecnologías web modernas y arquitecturas escalables.',
      coreCompetencies: 'COMPETENCIAS CLAVE',
      executionHistory: 'HISTORIAL PROFESIONAL',
    },
    competencies: {
      advanced: ['JavaScript', 'React.js', 'Node.js', 'Express', 'Sequelize.js', 'PostgreSQL', 'Tailwind CSS', 'Git'],
      intermediate: ['NestJS', 'Angular', 'Vite', 'SQL Server', 'MySQL', 'TypeORM', 'MongoDB / Mongoose', 'Redux.js', 'CSS3 / HTML5'],
      basic: ['RxJS', 'NgRx', 'Next.js', 'Three.js / React-Three-Fiber'],
    },
    timeline: [
      {
        period: 'Dic 2025 - Mar 2026',
        role: 'Desarrollador Full-Stack',
        title: 'Levva IA Software (Freelance)',
        description:
          'Desarrollo de un proyecto SaaS desde cero (greenfield), definiendo la arquitectura del sistema y bases técnicas enfocadas en escalabilidad, seguridad y flujos orientados a agentes de IA. Diseño e implementación de modelos de datos relacionales con MySQL y Sequelize. Creación de funcionalidades completas utilizando NestJS, React, Vite y Tailwind (sistemas de reportes, notificaciones y servicios de correo). Implementación de mecanismos de seguridad como RBAC, MFA y encriptación.',
        highlights: [
          'Desarrollo de un proyecto SaaS desde cero (greenfield), definiendo la arquitectura del sistema y bases técnicas enfocadas en escalabilidad, seguridad y flujos orientados a agentes de IA.',
          'Diseño e implementación de modelos de datos relacionales con MySQL y Sequelize.',
          'Creación de funcionalidades completas utilizando NestJS, React, Vite y Tailwind (sistemas de reportes, notificaciones y servicios de correo).',
          'Implementación de mecanismos de seguridad como RBAC (control de acceso basado en roles), MFA y encriptación de datos en tránsito y en reposo.',
        ],
      },
      {
        period: 'Abr 2024 - Dic 2025',
        role: 'Desarrollador Full-Stack Jr',
        title: 'Justo Pago',
        description:
          'Desarrollo de nuevas funcionalidades y optimización de consultas en la base de datos para asegurar sincronización en tiempo real con SQL Server y TypeORM. Implementación de una función de chat interactivo integrando React, Tailwind, NestJS y MongoDB. Diseño de sistemas de notificaciones automatizadas por WhatsApp y email bajo una arquitectura guiada por eventos (pub/sub). Creación y actualización de interfaces de usuario dinámicas empleando Next.js, React y NestJS.',
        highlights: [
          'Desarrollo de nuevas funcionalidades y optimización de consultas en la base de datos para asegurar sincronización en tiempo real con SQL Server y TypeORM.',
          'Implementación de una función de chat interactivo integrando React, Tailwind, NestJS y MongoDB.',
          'Diseño de sistemas de notificaciones automatizadas por WhatsApp y email bajo una arquitectura guiada por eventos (pub/sub).',
          'Creación y actualización de interfaces de usuario dinámicas empleando Next.js, React y NestJS.',
        ],
      },
      {
        period: 'Ago 2023 - Nov 2023',
        role: 'Desarrollador Full-Stack',
        title: 'Xirectds',
        description:
          'Contribución desde cero en la creación del Producto Mínimo Viable (MVP) para la plataforma web de gestión de prospectos Soxial Leads. Desarrollo y maquetación de la interfaz de usuario utilizando Next.js, React y NestJS. Modificaciones a nivel de base de datos e interacciones mediante TypeORM y SQL Server.',
        highlights: [
          'Contribución desde cero en la creación del Producto Mínimo Viable (MVP) para la plataforma web de gestión de prospectos Soxial Leads.',
          'Desarrollo y maquetación de la interfaz de usuario utilizando Next.js, React y NestJS.',
          'Modificaciones a nivel de base de datos e interacciones mediante TypeORM y SQL Server.',
        ],
      },
      {
        period: 'Ago 2022 - Feb 2023',
        role: 'Desarrollador Full-Stack Jr',
        title: 'Kargoru',
        description:
          'Desarrollo de la interfaz de usuario y vistas web con alta interactividad utilizando Angular, RxJS y NgRx. Integración y automatización de notificaciones por correo y WhatsApp conectando lógicas en NestJS y Mongoose. Integración de plataformas, APIs y pasarelas externas, incluyendo WordPress y pasarelas de carga.',
        highlights: [
          'Desarrollo de la interfaz de usuario y vistas web con alta interactividad utilizando Angular, RxJS y NgRx.',
          'Integración y automatización de notificaciones por correo y WhatsApp conectando lógicas en NestJS y Mongoose.',
          'Integración de plataformas, APIs y pasarelas externas, incluyendo WordPress y pasarelas de carga (sucarga.com).',
        ],
      },
    ],
    contactSection: {
      aboutTitle: 'SOBRE_MI',
      aboutP1:
        'Soy Desarrollador Full Stack con 3 años de experiencia, especializado en la construcción y optimización de aplicaciones web utilizando tecnologías como React, Node.js, Express, Sequelize, PostgreSQL y Git. Cuento con experiencia en la aplicación de metodologías ágiles como SCRUM para entregar soluciones eficientes y de alta calidad.',
      aboutP2:
        'Soy Ingeniero de Sistemas con un fuerte enfoque en el desarrollo web, un camino que elegí desde mi formación académica. A lo largo de esta trayectoria, he trabajado en diversos proyectos que han fortalecido mi perfil técnico y me han brindado experiencia práctica con tecnologías modernas como Vite, Redis y React.',
      github: 'GITHUB',
      linkedin: 'LINKEDIN',
      cv: 'CV_ARCHIVE',
      techStack: 'TECH_STACK',
      experience: 'EXPERIENCE',
      role: 'FULL_STACK',

      contactTitle: 'CONTACTO',
      userId: 'USER_ID',
      namePlaceholder: 'Ingresa tu nombre...',
      accessPoint: 'ACCESS_POINT',
      emailPlaceholder: 'tu@email.com',
      dataPayload: 'DATA_PAYLOAD',
      messagePlaceholder: 'Escribe tu mensaje aqui...',
      send: 'EXECUTE_TRANSMISSION',
    },
    heroTicker: ['REACT.JS', 'NODE.JS', 'TYPESCRIPT', 'NEST.JS', 'VITE'],
    footerLeft: '© 2024 SYSTEM_ARCHITECT. EXECUTE_SUCCESS.',
    footerLinks: ['GITHUB', 'LINKEDIN', 'TERMINAL'],
  },
}

function App() {
  const canvasRef = useRef(null)
  const [activeView, setActiveView] = useState('hero')
  const [language, setLanguage] = useState('en')

  const locale = content[language]

  // 1. Memoize the year calculation
  const yearsOfExperience = useMemo(() => {
    const startDate = Temporal.PlainDate.from('2022-08-01')
    const today = Temporal.Now.plainDateISO()
    const duration = startDate.until(today, { largestUnit: 'month' })
    return Math.floor(duration.months / 12)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const fontSize = 16
    const alphabet =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const colors = ['#a855f7', '#6366f1', '#c084fc', '#818cf8']
    let width = 0
    let height = 0
    let columns = 0
    let rainDrops = []
    let animationFrame = 0

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      columns = Math.floor(width / fontSize)
      rainDrops = Array.from({ length: columns }, () => 1)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`

      for (let i = 0; i < rainDrops.length; i += 1) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize)

        if (rainDrops[i] * fontSize > height && Math.random() > 0.975) {
          rainDrops[i] = 0
        }
        rainDrops[i] += 1
      }

      animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  const handleViewChange = (view) => () => setActiveView(view)
  const toggleLanguage = () =>
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'es' : 'en'))

  const renderView = () => {
    switch (activeView) {
      case 'projects':
        return (
          <section className="section projects">
            <header className="section-header">
              <div className="kicker">
                <span className="kicker-dot" />
                <span>{locale.projectsSection.kicker}</span>
              </div>
              <h2>{locale.projectsSection.title}</h2>
              <p>{locale.projectsSection.description}</p>
            </header>
            <div className="projects-grid">
              {locale.projects.map((project) => (
                <article className="project-card glass" key={project.title}>
                  <div className="project-body">
                    <div>
                      <div className="project-code">{project.code}</div>
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      {project.actions.map((action) => (
                        <button
                          key={action.label}
                          className={action.variant === 'ghost' ? 'cta-ghost' : 'cta-fill'}
                          type="button"
                        >
                          <span className="material-symbols-outlined">{action.icon}</span>
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="project-media">
                    <img src={project.image} alt={project.title} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        )
      case 'profile':
        return (
          <section className="section profile">
            <header className="section-header">
              <h2>{locale.profileSection.title}</h2>
              <p>{locale.profileSection.description}</p>
            </header>
            <div className="profile-grid">
              <div className="profile-skills">
                <div className="glass panel">
                  <h3 className="panel-title">
                    <span className="material-symbols-outlined">terminal</span>
                    {locale.profileSection.coreCompetencies}
                  </h3>
                  <div className="competencies-container">
                    <div className="competency-group">
                      <h4 className="competency-level">Advanced</h4>
                      <div className="competency-list">
                        {locale.competencies.advanced.map((tech) => (
                          <span key={tech} className="competency-tag">
                            `{tech}`
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="competency-group">
                      <h4 className="competency-level">Intermediate</h4>
                      <div className="competency-list">
                        {locale.competencies.intermediate.map((tech) => (
                          <span key={tech} className="competency-tag">
                            `{tech}`
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="competency-group">
                      <h4 className="competency-level">Basic</h4>
                      <div className="competency-list">
                        {locale.competencies.basic.map((tech) => (
                          <span key={tech} className="competency-tag">
                            `{tech}`
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass panel timeline">
                <h3 className="panel-title">
                  <span className="material-symbols-outlined">history_edu</span>
                  {locale.profileSection.executionHistory}
                </h3>
                <div className="timeline-list">
                  {locale.timeline.map((item) => (
                    <div className="timeline-item" key={item.title}>
                      <span className="timeline-dot" />
                      <div className="timeline-meta">
                        <span>{item.period}</span>
                        <span>{item.role}</span>
                      </div>
                      <h4>{item.title}</h4>
                      {item.highlights ? (
                        <ul className="highlights-list">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      ) : (
                          <p>{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      case 'contact':
        return (
          <section className="section contact">
            <div className="contact-grid">
              <div className="glass panel about">
                <div className="panel-heading">
                  <span className="material-symbols-outlined">terminal</span>
                  <h2>{locale.contactSection.aboutTitle}</h2>
                </div>
                <p>{locale.contactSection.aboutP1.replace('3', yearsOfExperience)}</p>
                <p>{locale.contactSection.aboutP2}</p>
                <div className="about-actions">
                  <a className="cta-ghost" href="#">
                    <span className="material-symbols-outlined">code</span>
                    {locale.contactSection.github}
                  </a>
                  <a className="cta-ghost" href="#">
                    <span className="material-symbols-outlined">share</span>
                    {locale.contactSection.linkedin}
                  </a>
                  <a className="cta-fill" href="#">
                    <span className="material-symbols-outlined">download</span>
                    {locale.contactSection.cv}
                  </a>
                </div>
                <div className="about-metrics">
                  <div>
                    <span>// {locale.contactSection.techStack}</span>
                    <strong>{locale.contactSection.role}</strong>
                  </div>
                  <div>
                    <span>// {locale.contactSection.experience}</span>
                    <strong>{yearsOfExperience}_YEARS</strong>
                  </div>
                </div>
              </div>

              <div className="glass panel contact-panel">
                <div className="panel-heading">
                  <span className="material-symbols-outlined">alternate_email</span>
                  <h2>{locale.contactSection.contactTitle}</h2>
                </div>
                <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                  <label>
                    <span>{locale.contactSection.userId}</span>
                    <input placeholder={locale.contactSection.namePlaceholder} type="text" />
                  </label>
                  <label>
                    <span>ACCESS_POINT</span>
                    <input placeholder={locale.contactSection.emailPlaceholder} type="email" />
                  </label>
                  <label>
                    <span>{locale.contactSection.dataPayload}</span>
                    <textarea placeholder={locale.contactSection.messagePlaceholder} rows="5" />
                  </label>
                  <button className="cta-fill" type="submit">
                    <span>{locale.contactSection.send}</span>
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              </div>
            </div>
          </section>
        )
      case 'hero':
      default:
        return (
          <section className="section hero">
            <div className="hero-card glass">
              <div className="hero-avatar">
                <img
                  src={profileImage}
                  alt="Developer portrait"
                />
                <span className="avatar-badge material-symbols-outlined">terminal</span>
              </div>
              <h1 className="hero-title">{locale.hero.title}</h1>
              <p className="hero-subtitle">{locale.hero.subtitle}</p>
              <div className="hero-actions">
                <button className="cta-fill" type="button" onClick={handleViewChange('projects')}>
                  <span className="material-symbols-outlined">folder_open</span>
                  {locale.hero.actions.projects}
                </button>
                <button className="cta-ghost" type="button" onClick={handleViewChange('profile')}>
                  <span className="material-symbols-outlined">person</span>
                  {locale.hero.actions.profile}
                </button>
                <button className="cta-ghost" type="button" onClick={handleViewChange('contact')}>
                  <span className="material-symbols-outlined">alternate_email</span>
                  {locale.hero.actions.contact}
                </button>
              </div>
              <div className="hero-ticker">
                {locale.heroTicker.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </section>
        )
    }
  }

  return (
    <div className="app">
      <canvas className="matrix-canvas" ref={canvasRef} aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-bar">
          <div className="brand">{"FULLSTACK "}</div>
          <div className="nav-actions">
            <div className="nav-links">
              <button
                className={activeView === 'hero' ? 'active' : ''}
                type="button"
                onClick={handleViewChange('hero')}
              >
                {locale.nav.hero}
              </button>
              <button
                className={activeView === 'projects' ? 'active' : ''}
                type="button"
                onClick={handleViewChange('projects')}
              >
                {locale.nav.projects}
              </button>
              <button
                className={activeView === 'profile' ? 'active' : ''}
                type="button"
                onClick={handleViewChange('profile')}
              >
                {locale.nav.profile}
              </button>
              <button
                className={activeView === 'contact' ? 'active' : ''}
                type="button"
                onClick={handleViewChange('contact')}
              >
                {locale.nav.contact}
              </button>
            </div>
            <div className="nav-utilities">
              <button
                className="cta-outline language-toggle"
                type="button"
                onClick={toggleLanguage}
                aria-label={
                  language === 'en' ? 'Switch language to Spanish' : 'Cambiar idioma a inglés'
                }
              >
                {locale.nav.language}
              </button>
              <button className="cta-outline" type="button">
                {locale.nav.downloadCv}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="view-stage">
        <div className="view" key={activeView}>
          {renderView()}
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-left">{locale.footerLeft}</div>
        <div className="footer-links">
          {locale.footerLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App

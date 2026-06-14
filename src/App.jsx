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
        code: '0x01 // LSC_TRANSLATOR',
        title: 'colombian_snl_traductor',
        description: 'Colombian Sign Language (LSC) translator that uses computer vision and deep learning (LSTM models) to translate vowels, numbers, and gestures in real time through the webcam.',
        tags: ['React', 'MUI', 'Flask', 'TensorFlow', 'MediaPipe', 'OpenCV', 'Python'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/methodology/refs/heads/main/images/project-1-snl_translator.png',
      },
      {
        code: '0x02 // WEATHER_ASSISTANT',
        title: 'WeatherAssistant',
        description: 'Intelligent weather assistant for Cali, Colombia with voice recognition, 7-day history, weather-based suggestions, and automatic notifications.',
        tags: ['React', 'Vite', 'Material Tailwind', 'FastAPI', 'Whisper (STT)', 'WeatherAPI'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/methodology/refs/heads/main/images/project-2-weather.jpeg',
      },
      {
        code: '0x03 // WHATSAPP_API',
        title: 'whatsapp-web-api',
        description: 'REST API to send WhatsApp messages using a queuing system with Redis, avoiding blocks due to mass sending. Includes QR authentication, reports, and automatic processing.',
        tags: ['Node.js', 'Express', 'Redis', 'Puppeteer'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/whatsapp-web-api/refs/heads/main/src/whatsapp-api-server.png',
      },
      {
        code: '0x04 // OBRA_APP',
        title: 'app-gestion-de-obra',
        description: 'Mobile app for construction project management. It allows creating projects, recording income/expenses, viewing pie charts, and managing budgets with local persistence and Firebase.',
        tags: ['React Native', 'Expo', 'Firebase', 'SQLite', 'AsyncStorage', 'react-native-chart-kit'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/jenestiven/app-gestion-de-obra/refs/heads/final_details/assets/preview.png',
      },
      {
        code: '0x05 // DUOLINGO_MANUAL',
        title: 'manual-duolingo',
        description: 'Duolingo user manual in Spanish. It contains detailed tutorials about introduction, getting started guide, interface, lessons, leagues, streaks, shop, challenges, and more.',
        tags: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
        actions: [
          { label: 'LIVE_DEMO', icon: 'terminal', variant: 'primary' },
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/manual-duolingo/refs/heads/main/manual-web/src/assets/preview.png',
      },
      {
        code: '0x06 // WUFWUF',
        title: 'WufWuf',
        description: 'Appointment system for animal adoption with microservices. It manages appointments, catalogs animals with photos, and ensures secure authentication. It uses an API Gateway with a reverse proxy.',
        tags: ['Node.js', 'Express', 'Docker', 'http-proxy-middleware'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/methodology/refs/heads/main/images/wufwuf.png',
      },
      {
        code: '0x07 // MEDICAL_IMG_PROC',
        title: 'M-image-processor',
        description: 'Medical image processor (NIfTI format). Tools: segmentation (region growing), k-means, thresholding, histogram equalization, z-score transformation, edge detection, and image registration.',
        tags: ['React', 'Vite', 'Tailwind', 'Flask', 'NiBabel', 'SimpleITK', 'SciPy', 'Matplotlib'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/M-image-processor/refs/heads/main/preview.png',
      },
      {
        code: '0x08 // CONFLICT_CHATBOT',
        title: 'colombian-conflict-chatbot',
        description: 'RAG chatbot about the Colombian armed conflict using JEP reports. Fine-tuned models (Llama-3.2, Mistral) published on HuggingFace. Custom dataset on HuggingFace.',
        tags: ['Python', 'Jupyter', 'Llama', 'Mistral', 'LangChain', 'FAISS', 'Gradio', 'HuggingFace'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/colombian-conflict-chatbot/refs/heads/main/docs/schema.png',
      },
      {
        code: '0x09 // VISUAL_NOVEL',
        title: 'Visual Novel',
        description: '3D visual novel "Virtual Odyssey". In the year 2055, Xander must save his grandmother by entering the world of hacking and the Virtual World. Includes 3D characters, interactive scenarios, and a dialogue system.',
        tags: ['React', 'Three.js', 'React Three Fiber', '@react-three/rapier', 'Tailwind CSS'],
        actions: [
          { label: 'LIVE_DEMO', icon: 'terminal', variant: 'primary' },
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://proyecto-integrador-liard.vercel.app/images/gameplay1.png',
      },
      {
        code: '0x0A // FIVE_TO_FLY',
        title: 'five-to-fly',
        description: 'Travel recommendation app. Users answer a questionnaire and the system calculates weights to recommend personalized tourist destinations. Includes registration, login, and result rating.',
        tags: ['React', 'Vite', 'Tailwind', 'Django REST', 'PostgreSQL', 'Docker'],
        actions: [
          { label: 'LIVE_DEMO', icon: 'terminal', variant: 'primary' },
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/five-to-fly/refs/heads/main/five-to-fly.png',
      },
      {
        code: '0x0B // PORTFOLIO_3D',
        title: 'juanda-portfolio-3d',
        description: 'Personal 3D portfolio of Juan David Tovar (Iron-mind), deployed on Vercel. Displays projects and skills with 3D visual effects.',
        tags: ['React', 'JavaScript', 'CSS', 'React Three Fiber', 'Three.js'],
        actions: [
          { label: 'LIVE_DEMO', icon: 'terminal', variant: 'primary' },
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/juanda-portfolio-3d/refs/heads/main/preview.png',
      },
      {
        code: '0x0C // RENAULT_APP',
        title: 'renault_app',
        description: 'Application to manage a Renault electric car dealership. It allows managing vehicles, quotes, and customers. 4 contributors.',
        tags: ['React', 'Next.js', 'Django', 'Python', 'JavaScript'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/renault_app/refs/heads/main/readme_imgs/allcars.png',
      },
      {
        code: '0x0D // VIDEOGAMES_PI',
        title: 'PI-videogames',
        description: 'Individual project: video game website with search, filtering by genre/rating, game creation, and details. Consumes the RAWG API. Deployed on GitHub Pages and Heroku.',
        tags: ['React', 'Redux', 'Express', 'Sequelize', 'PostgreSQL'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/PI-videogames/refs/heads/main/home.png',
      },
      {
        code: '0x0E // MARVEL_APP',
        title: 'MarvelApp',
        description: 'Mobile app to search for Marvel characters and explore their comics. Includes infinite scroll, search, and character details. Downloadable as APK.',
        tags: ['React Native', 'Expo', 'JavaScript', 'Marvel API'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/MarvelApp/refs/heads/main/imgs/abomb.png',
      },
      {
        code: '0x0F // ECOMMERCE_FRONT',
        title: 'FrontEcommerce',
        description: 'E-commerce frontend with 6 contributors. Modern interface for an online store with reusable components and styles using SCSS.',
        tags: ['React', 'SCSS', 'JavaScript', 'Express', 'PostgreSQL'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/NicoRob92/FrontEcommerce/refs/heads/dev/imgs/home.jpeg',
      },
      {
        code: '0x10 // PACMAN',
        title: 'Pacman_Juego-2.0',
        description: 'Improved version of the classic Pac-Man developed in pure JavaScript with the Processing library. Playable from Replit.',
        tags: ['JavaScript', 'Processing (p5.js)', 'HTML', 'CSS'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/Pacman_Juego-2.0/refs/heads/master/pacman-preview.png',
      },
      {
        code: '0x11 // CPP_GAME',
        title: 'videojuego-cpp',
        description: 'Classic brain game of crossing a fox, a rabbit, and a lettuce to the other side of the river using a boat. It runs via console using OOP in pure C++.',
        tags: ['C++', 'Programación Orientada a Objetos'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://user-images.githubusercontent.com/63685121/103682243-9aedf580-4f56-11eb-895a-2b249a7416bb.png',
      },
      {
        code: '0x12 // BOMBERO_AI',
        title: '"Bombero Inteligente"',
        description: 'Artificial Intelligence project from Universidad del Valle. It implements 5 search algorithms (Breadth-First, Uniform Cost, Depth-First, Greedy, and A*) to solve a problem.',
        tags: ['Python', 'Pygame', 'Tkinter'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://github.com/danielcaicedo98/ProyectoIA/assets/61769073/6ebb662e-1541-4fac-afe2-9009ed8d5e63',
      },
      {
        code: '0x13 // YOSHI_BATTLE',
        title: "Yoshi's Battle",
        description: 'Artificial Intelligence project from Universidad del Valle. It implements the Minimax algorithm with pruning for an adversarial game between two Yoshis that move like chess knights on a board. They must collect regular coins (1 pt) and special coins (3 pts). It features 3 difficulty levels (beginner depth 2, intermediate depth 4, expert depth 6). Same 3 contributors: Daniel Caicedo, Juan David Tovar, and Julian Alvarez.',
        tags: ['Python', 'Pygame'],
        actions: [
          { label: 'SOURCE_CODE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://github.com/user-attachments/assets/acd1c35c-c70f-4bfe-9129-32f53390dadc',
      },
    ],
    profileSection: {
      title: 'PROFESSIONAL EXPERIENCE',
      description: 'Full Stack Developer focused on transforming business requirements into scalable digital products. Experienced in designing and developing end-to-end solutions using React, NestJS, SQL databases, and modern cloud-based architectures.',
      coreCompetencies: 'CORE COMPETENCIES',
      executionHistory: 'PROFESSIONAL HISTORY',
    },
    competencies: {
      advanced: ['JavaScript', 'React.js', 'Node.js', 'Express', 'Sequelize.js', 'PostgreSQL', 'Tailwind CSS', 'Git'],
      intermediate: ['NestJS', 'Angular', 'Vite', 'SQL Server', 'MySQL', 'TypeORM', 'MongoDB / Mongoose', 'Redux.js', 'CSS3 / HTML5'],
    },
    timeline: [
      {
        period: 'Dec 2025 - Mar 2026',
        role: 'Full-Stack Developer',
        title: 'Levva IA Software (Freelance)',
        description:
          'Built a greenfield SaaS platform from scratch, defining the system architecture and technical foundations focused on scalability, security, and AI-agent-driven workflows. Designed and implemented relational data models using MySQL and Sequelize. Developed end-to-end features with NestJS, React, Vite, and Tailwind, including reporting systems, notifications, and email services. Implemented security mechanisms such as RBAC, MFA, and data encryption.',

        highlights: [
          'Built a greenfield SaaS platform from scratch, defining the architecture and technical foundations focused on scalability, security, and AI-agent-driven workflows.',
          'Designed and implemented relational data models using MySQL and Sequelize.',
          'Developed complete features using NestJS, React, Vite, and Tailwind, including reporting systems, notifications, and email services.',
          'Implemented security mechanisms such as RBAC (Role-Based Access Control), MFA, and encryption for data both in transit and at rest.',
        ],
      },
      {
        period: 'Apr 2024 - Dec 2025',
        role: 'Full-Stack Developer Jr',
        title: 'Justo Pago',
        description:
          'Developed new platform features and optimized database queries to ensure real-time synchronization using SQL Server and TypeORM. Implemented an interactive chat feature integrating React, Tailwind, NestJS, and MongoDB. Designed automated WhatsApp and email notification systems based on an event-driven (pub/sub) architecture. Created and maintained dynamic user interfaces using Next.js, React, and NestJS.',

        highlights: [
          'Developed new features and optimized database queries to ensure real-time synchronization using SQL Server and TypeORM.',
          'Implemented an interactive chat feature integrating React, Tailwind, NestJS, and MongoDB.',
          'Designed automated WhatsApp and email notification systems using an event-driven (pub/sub) architecture.',
          'Created and maintained dynamic user interfaces with Next.js, React, and NestJS.',
        ],
      },
      {
        period: 'Aug 2023 - Nov 2023',
        role: 'Full-Stack Developer',
        title: 'Xirectds',
        description:
          'Contributed from the ground up to the development of the Minimum Viable Product (MVP) for the Soxial Leads prospect management platform. Built and implemented the user interface using Next.js, React, and NestJS. Performed database modifications and interactions through TypeORM and SQL Server.',

        highlights: [
          'Contributed from scratch to the development of the MVP for the Soxial Leads prospect management platform.',
          'Developed and implemented the user interface using Next.js, React, and NestJS.',
          'Worked on database modifications and integrations using TypeORM and SQL Server.',
        ],
      },
      {
        period: 'Aug 2022 - Feb 2023',
        role: 'Full-Stack Developer Jr',
        title: 'Kargoru',
        description:
          'Developed highly interactive web interfaces and views using Angular, RxJS, and NgRx. Integrated and automated email and WhatsApp notifications through NestJS and Mongoose-based services. Connected external platforms, APIs, and third-party services, including WordPress and logistics gateways.',

        highlights: [
          'Developed highly interactive web interfaces using Angular, RxJS, and NgRx.',
          'Integrated and automated email and WhatsApp notifications through NestJS and Mongoose services.',
          'Integrated external platforms, APIs, and third-party services, including WordPress and logistics gateways (sucarga.com).',
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
        code: '0x01 // LSC_TRANSLATOR',
        title: 'colombian_snl_traductor',
        description: 'Traductor de Lengua de Señas Colombiana (LSC) que utiliza visión por computadora y deep learning (modelos LSTM) para traducir vocales, números y gestos en tiempo real a través de la cámara web.',
        tags: ['React', 'MUI', 'Flask', 'TensorFlow', 'MediaPipe', 'OpenCV', 'Python'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/methodology/refs/heads/main/images/project-1-snl_translator.png',
      },
      {
        code: '0x02 // WEATHER_ASSISTANT',
        title: 'WeatherAssistant',
        description: 'Asistente meteorológico inteligente para Cali, Colombia con reconocimiento de voz, historial de 7 días, sugerencias basadas en clima y notificaciones automáticas.',
        tags: ['React', 'Vite', 'Material Tailwind', 'FastAPI', 'Whisper (STT)', 'WeatherAPI'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/methodology/refs/heads/main/images/project-2-weather.jpeg',
      },
      {
        code: '0x03 // WHATSAPP_API',
        title: 'whatsapp-web-api',
        description: 'API REST para enviar mensajes de WhatsApp mediante un sistema de colas con Redis, evitando bloqueos por envío masivo. Incluye autenticación QR, reportes y procesamiento automático.',
        tags: ['Node.js', 'Express', 'Redis', 'Puppeteer'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/whatsapp-web-api/refs/heads/main/src/whatsapp-api-server.png',
      },
      {
        code: '0x04 // OBRA_APP',
        title: 'app-gestion-de-obra',
        description: 'App móvil para gestión de obras de construcción. Permite crear proyectos, registrar ingresos/gastos, visualizar gráficos circulares y gestionar presupuestos con persistencia local y Firebase.',
        tags: ['React Native', 'Expo', 'Firebase', 'SQLite', 'AsyncStorage', 'react-native-chart-kit'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/jenestiven/app-gestion-de-obra/refs/heads/final_details/assets/preview.png',
      },
      {
        code: '0x05 // DUOLINGO_MANUAL',
        title: 'manual-duolingo',
        description: 'Manual de usuario en español de Duolingo. Contiene tutoriales detallados sobre introducción, guía de inicio, interfaz, lecciones, ligas, rachas, tienda, desafíos y más.',
        tags: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
        actions: [
          { label: 'DEMO_EN_VIVO', icon: 'terminal', variant: 'primary' },
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/manual-duolingo/refs/heads/main/manual-web/src/assets/preview.png',
      },
      {
        code: '0x06 // WUFWUF',
        title: 'WufWuf',
        description: 'Sistema de citas para adopción de animales con microservicios. Gestiona citas, cataloga animales con fotos y garantiza autenticación segura. Utiliza un API Gateway con proxy inverso.',
        tags: ['Node.js', 'Express', 'Docker', 'http-proxy-middleware'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/methodology/refs/heads/main/images/wufwuf.png',
      },
      {
        code: '0x07 // MEDICAL_IMG_PROC',
        title: 'M-image-processor',
        description: 'Procesador de imágenes médicas (formato NIfTI). Herramientas: segmentación (region growing), k-means, umbralizado, ecualización de histogramas, transformación z-score, detección de bordes y registro de imágenes.',
        tags: ['React', 'Vite', 'Tailwind', 'Flask', 'NiBabel', 'SimpleITK', 'SciPy', 'Matplotlib'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/M-image-processor/refs/heads/main/preview.png',
      },
      {
        code: '0x08 // CONFLICT_CHATBOT',
        title: 'colombian-conflict-chatbot',
        description: 'Chatbot RAG sobre el conflicto armado colombiano usando informes de la JEP. Modelos fine-tuneados (Llama-3.2, Mistral) publicados en HuggingFace. Dataset propio en HuggingFace.',
        tags: ['Python', 'Jupyter', 'Llama', 'Mistral', 'LangChain', 'FAISS', 'Gradio', 'HuggingFace'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/colombian-conflict-chatbot/refs/heads/main/docs/schema.png',
      },
      {
        code: '0x09 // VISUAL_NOVEL',
        title: 'Visual Novel',
        description: 'Novela visual 3D "Virtual Odyssey". En el año 2055, Xander debe salvar a su abuela adentrándose en el mundo del hacking y el Mundo Virtual. Incluye personajes 3D, escenarios interactivos y sistema de diálogos.',
        tags: ['React', 'Three.js', 'React Three Fiber', '@react-three/rapier', 'Tailwind CSS'],
        actions: [
          { label: 'DEMO_EN_VIVO', icon: 'terminal', variant: 'primary' },
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://proyecto-integrador-liard.vercel.app/images/gameplay1.png',
      },
      {
        code: '0x0A // FIVE_TO_FLY',
        title: 'five-to-fly',
        description: 'App de recomendación de viajes. Los usuarios responden un cuestionario y el sistema calcula ponderaciones para recomendar destinos turísticos personalizados. Incluye registro, login y valoración de resultados.',
        tags: ['React', 'Vite', 'Tailwind', 'Django REST', 'PostgreSQL', 'Docker'],
        actions: [
          { label: 'DEMO_EN_VIVO', icon: 'terminal', variant: 'primary' },
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/five-to-fly/refs/heads/main/five-to-fly.png',
      },
      {
        code: '0x0B // PORTFOLIO_3D',
        title: 'juanda-portfolio-3d',
        description: 'Portafolio 3D personal de Juan David Tovar (Iron-mind), desplegado en Vercel. Muestra proyectos y habilidades con efectos visuales 3D.',
        tags: ['React', 'JavaScript', 'CSS', 'React Three Fiber', 'Three.js'],
        actions: [
          { label: 'DEMO_EN_VIVO', icon: 'terminal', variant: 'primary' },
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/juanda-portfolio-3d/refs/heads/main/preview.png',
      },
      {
        code: '0x0C // RENAULT_APP',
        title: 'renault_app',
        description: 'Aplicación para administrar un concesionario de autos eléctricos Renault. Permite gestionar vehículos, cotizaciones y clientes. 4 contribuidores.',
        tags: ['React', 'Next.js', 'Django', 'Python', 'JavaScript'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/renault_app/refs/heads/main/readme_imgs/allcars.png',
      },
      {
        code: '0x0D // VIDEOGAMES_PI',
        title: 'PI-videogames',
        description: 'Proyecto individual: web de videojuegos con búsqueda, filtrado por género/rating, creación de juegos y detalle. Consume la API de RAWG. Desplegado en GitHub Pages y Heroku.',
        tags: ['React', 'Redux', 'Express', 'Sequelize', 'PostgreSQL'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/PI-videogames/refs/heads/main/home.png',
      },
      {
        code: '0x0E // MARVEL_APP',
        title: 'MarvelApp',
        description: 'App móvil para buscar personajes de Marvel y explorar sus cómics. Incluye scroll infinito, búsqueda y detalle de personajes. Descargable como APK.',
        tags: ['React Native', 'Expo', 'JavaScript', 'Marvel API'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/MarvelApp/refs/heads/main/imgs/abomb.png',
      },
      {
        code: '0x0F // ECOMMERCE_FRONT',
        title: 'FrontEcommerce',
        description: 'Frontend de e-commerce con 6 contribuidores. Interfaz moderna para tienda online con componentes reutilizables y estilos con SCSS.',
        tags: ['React', 'SCSS', 'JavaScript', 'Express', 'PostgreSQL'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/NicoRob92/FrontEcommerce/refs/heads/dev/imgs/home.jpeg',
      },
      {
        code: '0x10 // PACMAN',
        title: 'Pacman_Juego-2.0',
        description: 'Versión mejorada del clásico Pac-Man desarrollado en JavaScript puro con la librería Processing. Jugable desde Replit.',
        tags: ['JavaScript', 'Processing (p5.js)', 'HTML', 'CSS'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://raw.githubusercontent.com/Iron-mind/Pacman_Juego-2.0/refs/heads/master/pacman-preview.png',
      },
      {
        code: '0x11 // CPP_GAME',
        title: 'videojuego-cpp',
        description: 'Clásico juego mental de cruzar un zorro, un conejo y una lechuga al otro lado del río usando una barca. Funciona por consola con POO en C++ puro.',
        tags: ['C++', 'Programación Orientada a Objetos'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://user-images.githubusercontent.com/63685121/103682243-9aedf580-4f56-11eb-895a-2b249a7416bb.png',
      },
      {
        code: '0x12 // BOMBERO_AI',
        title: '"Bombero Inteligente"',
        description: 'Proyecto de Inteligencia Artificial de la Universidad del Valle. Implementa 5 algoritmos de búsqueda (Amplitud, Costo Uniforme, Profundidad, Ávara y A*) para resolver el problema un problema.',
        tags: ['Python', 'Pygame', 'Tkinter'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://github.com/danielcaicedo98/ProyectoIA/assets/61769073/6ebb662e-1541-4fac-afe2-9009ed8d5e63',
      },
      {
        code: '0x13 // YOSHI_BATTLE',
        title: "Yoshi's Battle",
        description: 'Proyecto de Inteligencia Artificial de la Universidad del Valle. Implementa el algoritmo Minimax con poda para un juego adversarial entre dos Yoshis que se mueven como caballos de ajedrez en un tablero. Deben recolectar monedas normales (1 pt) y especiales (3 pts). Tiene 3 niveles de dificultad (principiante prof. 2, intermedio prof. 4, experto prof. 6). Mismos 3 colaboradores: Daniel Caicedo, Juan David Tovar y Julian Alvarez.',
        tags: ['Python', 'Pygame'],
        actions: [
          { label: 'CODIGO_FUENTE', icon: 'code', variant: 'ghost' },
        ],
        image: 'https://github.com/user-attachments/assets/acd1c35c-c70f-4bfe-9129-32f53390dadc',
      },
    ],
    profileSection: {
      title: 'EXPERIENCIA PROFESIONAL',
      description: 'Desarrollador Full Stack enfocado en convertir necesidades de negocio en productos digitales escalables. Experiencia en el diseño y desarrollo de soluciones de extremo a extremo utilizando React, NestJS, bases de datos SQL y arquitecturas modernas en la nube.',
      coreCompetencies: 'COMPETENCIAS CLAVE',
      executionHistory: 'HISTORIAL PROFESIONAL',
    },
    competencies: {
      advanced: ['JavaScript', 'React.js', 'Node.js', 'Express', 'Sequelize.js', 'PostgreSQL', 'Tailwind CSS', 'Git'],
      intermediate: ['NestJS', 'Angular', 'Vite', 'SQL Server', 'MySQL', 'TypeORM', 'MongoDB / Mongoose', 'Redux.js', 'CSS3 / HTML5'],
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

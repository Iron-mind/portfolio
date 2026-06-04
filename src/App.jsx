import { useEffect, useRef } from 'react'
import './App.css'

const projects = [
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
]

const skills = [
  { label: 'BACKEND_ARCH', value: 92 },
  { label: 'CLOUD_INFRA', value: 85 },
  { label: 'CYBER_SECURITY', value: 78 },
  { label: 'NEURAL_NETS', value: 64 },
]

const timeline = [
  {
    period: '2022 - PRESENT',
    role: 'LEAD_ARCHITECT',
    title: 'Virtual Ticketing Systems Corp.',
    description:
      'Despliegue de infraestructuras distribuidas y optimizacion de latencia para sistemas de control de acceso biometrico a escala global.',
  },
  {
    period: '2019 - 2022',
    role: 'SENIOR_DEV',
    title: 'Neural Link Logistics',
    description:
      'Implementacion de modelos de vision artificial para la automatizacion de almacenes inteligentes y trazabilidad de activos.',
  },
  {
    period: '2015 - 2019',
    role: 'ACADEMIC_INIT',
    title: 'Technical Institute of Cybernetics',
    description:
      'Grado Superior en Desarrollo de Aplicaciones Multiplataforma con especializacion en seguridad de sistemas operativos.',
  },
]

const techTicker = ['REACT.JS', 'NODE.JS', 'TYPESCRIPT', 'RUST', 'KUBERNETES']

function App() {
  const canvasRef = useRef(null)

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

  return (
    <div className="app">
      <canvas className="matrix-canvas" ref={canvasRef} aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-bar">
          <div className="brand">MATRIX_DEV</div>
          <div className="nav-links">
            <a href="#hero">Hero</a>
            <a href="#projects">Projects</a>
            <a href="#profile">Profile</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="cta-outline" type="button">
            DOWNLOAD_CV
          </button>
        </nav>
      </header>

      <main>
        <section className="section hero" id="hero">
          <div className="hero-card glass">
            <div className="hero-avatar">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLF936j3NestePlVg75jevnaRDtnIBdNccnwwxN5qaC9hYmnQoLz_39RwFdaSC3-hUt3E-mVqHon_xoSJDHbk9BmXkSQ_QJ0-pTVWrs2haYolUtMlE20U1T3WE9K1T5wjnl21zQrkEqP3Xg0W6S0tV7kG0KQ0ZLK6r1ii8zq1cKQxxON9ApbEx7YnWcZoQ90asQfqXRl-GE0-MIejcIO0kwhuiqpGSTBn0SoewYoXzN3CscrPpIP5XOdilzqJAXpu1TG3sAWT-OIU"
                alt="Developer portrait"
              />
              <span className="avatar-badge material-symbols-outlined">terminal</span>
            </div>
            <h1 className="hero-title">&lt;NEO_DEV/&gt;</h1>
            <p className="hero-subtitle">
              Expert in distributed systems and high-performance architectures. Building the
              next generation of digital infrastructure within the matrix of modern
              technology.
            </p>
            <div className="hero-actions">
              <a className="cta-fill" href="#projects">
                <span className="material-symbols-outlined">folder_open</span>
                Projects
              </a>
              <a className="cta-ghost" href="#profile">
                <span className="material-symbols-outlined">person</span>
                Profile
              </a>
              <a className="cta-ghost" href="#contact">
                <span className="material-symbols-outlined">alternate_email</span>
                Contact
              </a>
            </div>
            <div className="hero-ticker">
              {techTicker.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <header className="section-header">
            <div className="kicker">
              <span className="kicker-dot" />
              <span>DEPLOYMENT_HISTORY</span>
            </div>
            <h2>SELECTED_PROJECTS</h2>
            <p>
              Iterative prototypes and production-ready architectures built for
              high-performance and scalability. Explore the neural network of my
              development journey.
            </p>
          </header>
          <div className="projects-grid">
            {projects.map((project) => (
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

        <section className="section profile" id="profile">
          <header className="section-header">
            <h2>SYSTEM_PROFILE</h2>
            <p>
              Desarrollo de sistema virtual de fichaje y gestion de arquitectura de datos
              critica para entornos de alta disponibilidad.
            </p>
          </header>
          <div className="profile-grid">
            <div className="profile-skills">
              <div className="glass panel">
                <h3 className="panel-title">
                  <span className="material-symbols-outlined">terminal</span>
                  CORE_COMPETENCIES
                </h3>
                <div className="skill-list">
                  {skills.map((skill) => (
                    <div className="skill" key={skill.label}>
                      <div className="skill-labels">
                        <span>{skill.label}</span>
                        <span>{skill.value}%</span>
                      </div>
                      <div className="skill-track">
                        <div className="skill-bar" style={{ width: `${skill.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass panel media-panel">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnGkiYmaqK5mSjOBG0qv6jXYOWi0WThbf80OhBtN9JjEaQ1wLHKRpfbarUlXjUt9RZSBhDzpAd8Q0CHzj_Mu6HYZrCmAHwhW_KyKiQ3oSqvosi6ybHgKpEU_Ewpf9cEFLR_DpK2Zom3E1c9uX6Kj7Ds3ReWB6mwrDyFMU2xWoa0gYBu88L3De7wt3XFecsJXpJNIm3P0pRknxyxgwGnZMj630mxhmjHGiBlICKFr7UIxws_RiI6x4iSU75hhh0KC3Vh9s2vwiV6gs"
                  alt="System core"
                />
                <div className="media-caption">
                  <span>SYSTEM_STATUS:</span>
                  <strong>OPERATIONAL_EXCELLENCE</strong>
                </div>
              </div>
            </div>
            <div className="glass panel timeline">
              <h3 className="panel-title">
                <span className="material-symbols-outlined">history_edu</span>
                EXECUTION_HISTORY
              </h3>
              <div className="timeline-list">
                {timeline.map((item) => (
                  <div className="timeline-item" key={item.title}>
                    <span className="timeline-dot" />
                    <div className="timeline-meta">
                      <span>{item.period}</span>
                      <span>{item.role}</span>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-grid">
            <div className="glass panel about">
              <div className="panel-heading">
                <span className="material-symbols-outlined">terminal</span>
                <h2>SOBRE_MÍ</h2>
              </div>
              <p>
                Especialista en arquitectura de sistemas con una obsesion por la eficiencia
                del codigo y el diseno de interfaces de alto rendimiento. Mi enfoque se
                centra en la interseccion entre la estetica brutalista y la ingenieria de
                precision.
              </p>
              <p>
                He pasado la ultima decada descifrando problemas complejos y transformandolos
                en soluciones digitales elegantes. Para mi, el codigo no es solo una
                herramienta, es un lenguaje artistico que permite redefinir la realidad
                digital.
              </p>
              <div className="about-actions">
                <a className="cta-ghost" href="#">
                  <span className="material-symbols-outlined">code</span>
                  GITHUB
                </a>
                <a className="cta-ghost" href="#">
                  <span className="material-symbols-outlined">share</span>
                  LINKEDIN
                </a>
                <a className="cta-fill" href="#">
                  <span className="material-symbols-outlined">download</span>
                  CV_ARCHIVE
                </a>
              </div>
              <div className="about-metrics">
                <div>
                  <span>// TECH_STACK</span>
                  <strong>FULL_STACK</strong>
                </div>
                <div>
                  <span>// EXPERIENCE</span>
                  <strong>12_YEARS</strong>
                </div>
              </div>
            </div>

            <div className="glass panel contact-panel">
              <div className="panel-heading">
                <span className="material-symbols-outlined">alternate_email</span>
                <h2>CONTACTO</h2>
              </div>
              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <label>
                  <span>USER_ID</span>
                  <input placeholder="Ingresa tu nombre..." type="text" />
                </label>
                <label>
                  <span>ACCESS_POINT</span>
                  <input placeholder="tu@email.com" type="email" />
                </label>
                <label>
                  <span>DATA_PAYLOAD</span>
                  <textarea placeholder="Escribe tu mensaje aqui..." rows="5" />
                </label>
                <button className="cta-fill" type="submit">
                  <span>EXECUTE_TRANSMISSION</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-left">© 2024 SYSTEM_ARCHITECT. EXECUTE_SUCCESS.</div>
        <div className="footer-links">
          <a href="#">GITHUB</a>
          <a href="#">LINKEDIN</a>
          <a href="#">TERMINAL</a>
        </div>
      </footer>
    </div>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import './App.css'
import profileImage from './assets/profile.jpg'
import { useMemo } from 'react'
import * as content from "./assets/content.json"


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
    let frameTick = 0
    const MOVE_INTERVAL = 2

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

      frameTick++
      const moveDrops = frameTick % MOVE_INTERVAL === 0

      for (let i = 0; i < rainDrops.length; i += 1) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize)

        if (moveDrops) {
          if (rainDrops[i] * fontSize > height && Math.random() > 0.975) {
            rainDrops[i] = 0
          }
          rainDrops[i] += 1
        }
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
                  <div>
                    <div className="project-code">{project.code}</div>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-media">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-body">
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
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="competency-group">
                      <h4 className="competency-level">Intermediate</h4>
                      <div className="competency-list">
                        {locale.competencies.intermediate.map((tech) => (
                          <span key={tech} className="competency-tag">
                            {tech}
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

import { useLanguage } from '../context/useLanguage'
import styles from './Projects.module.css'

export default function Projects() {
  const { locale } = useLanguage()

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.kicker}>
          <span className={styles.kickerDot} />
          <span>{locale.projectsSection.kicker}</span>
        </div>
        <h2>{locale.projectsSection.title}</h2>
        <p>{locale.projectsSection.description}</p>
      </header>
      <div className={styles.grid}>
        {locale.projects.map((project) => (
          <article className={styles.card} key={project.title}>
            <div>
              <div className={styles.code}>{project.code}</div>
              <h3>{project.title}</h3>
            </div>
            <div className={styles.media}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.body}>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.projectActions}>
                {project.actions.map((action) => (
                  <button
                    key={action.label}
                    className={
                      action.variant === 'ghost' ? styles.ctaGhost : styles.ctaFill
                    }
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
}

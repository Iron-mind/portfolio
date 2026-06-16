import { useLanguage } from '../context/useLanguage'
import styles from './About.module.css'

export default function About() {
  const { locale } = useLanguage()

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2>{locale.profileSection.title}</h2>
        <p>{locale.profileSection.description}</p>
      </header>
      <div className={styles.grid}>
        <div className={styles.skills}>
          <div className={styles.panel}>
            <h3 className={styles.panelTitle}>
              <span className="material-symbols-outlined">terminal</span>
              {locale.profileSection.coreCompetencies}
            </h3>
            <div className={styles.competencies}>
              <div className={styles.competencyGroup}>
                <h4 className={styles.competencyLevel}>Advanced</h4>
                <div className={styles.competencyList}>
                  {locale.competencies.advanced.map((tech) => (
                    <span key={tech} className={styles.competencyTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.competencyGroup}>
                <h4 className={styles.competencyLevel}>Intermediate</h4>
                <div className={styles.competencyList}>
                  {locale.competencies.intermediate.map((tech) => (
                    <span key={tech} className={styles.competencyTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>
            <span className="material-symbols-outlined">history_edu</span>
            {locale.profileSection.executionHistory}
          </h3>
          <div className={styles.timelineList}>
            {locale.timeline.map((item) => (
              <div className={styles.timelineItem} key={item.title}>
                <span className={styles.timelineDot} />
                <div className={styles.timelineMeta}>
                  <span>{item.period}</span>
                  <span>{item.role}</span>
                </div>
                <h4>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h4>
                {item.highlights ? (
                  <ul className={styles.highlights}>
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
}

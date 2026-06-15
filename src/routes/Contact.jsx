import { useLanguage } from '../context/useLanguage'
import styles from './Contact.module.css'

export default function Contact() {
  const { locale, yearsOfExperience } = useLanguage()

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.panel}>
          <div className={styles.heading}>
            <span className="material-symbols-outlined">terminal</span>
            <h2>{locale.contactSection.aboutTitle}</h2>
          </div>
          <div className={styles.aboutActions}>
            <a className={styles.ctaGhost} href="#">
              <span className="material-symbols-outlined">code</span>
              {locale.contactSection.github}
            </a>
            <a className={styles.ctaGhost} href="#">
              <span className="material-symbols-outlined">share</span>
              {locale.contactSection.linkedin}
            </a>
            <a className={styles.ctaFill} href="#">
              <span className="material-symbols-outlined">download</span>
              {locale.contactSection.cv}
            </a>
          </div>
          <a className={styles.emailLink} href="mailto:davidtovar.dev@gmail.com">
            <span className="material-symbols-outlined">mail</span>
            davidtovar.dev@gmail.com
          </a>
          <div className={styles.metrics}>
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

        <div className={styles.panel}>
          <div className={styles.heading}>
            <span className="material-symbols-outlined">alternate_email</span>
            <h2>{locale.contactSection.contactTitle}</h2>
          </div>
          <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
            <label>
              <span>{locale.contactSection.userId}</span>
              <input placeholder={locale.contactSection.namePlaceholder} type="text" />
            </label>
            <label>
              <span>{locale.contactSection.accessPoint}</span>
              <input placeholder={locale.contactSection.emailPlaceholder} type="email" />
            </label>
            <label>
              <span>{locale.contactSection.dataPayload}</span>
              <textarea placeholder={locale.contactSection.messagePlaceholder} rows="5" />
            </label>
            <button className={styles.ctaFill} type="submit">
              <span>{locale.contactSection.send}</span>
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

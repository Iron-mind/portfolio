import { useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import styles from './Contact.module.css'

function EmailButton() {
  const [copied, setCopied] = useState(false)
  const email = 'davidtovar.dev@gmail.com'

  const isTouchDevice =
    typeof window !== 'undefined' &&
    (navigator.maxTouchPoints > 0 || 'ontouchstart' in window)

  const handleClick = async () => {
    if (isTouchDevice) {
      window.location.href = `mailto:${email}`
      return
    }
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback for older browsers
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      className={`${styles.emailButton} ${copied ? styles.emailCopied : ''}`}
      type="button"
      onClick={handleClick}
      title={isTouchDevice ? `Send email to ${email}` : `Copy ${email} to clipboard`}
    >
      <span className="material-symbols-outlined">mail</span>
      {copied ? '✓ Copied!' : email}
    </button>
  )
}

export default function Contact() {
  const { locale } = useLanguage()

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.panel}>
          <div className={styles.heading}>
            <span className="material-symbols-outlined">terminal</span>
            <h2>{locale.contactSection.aboutTitle}</h2>
          </div>
          <p>{locale.contactSection.aboutDescription}</p>
          <div className={styles.aboutActions}>
            <a
              className={styles.ctaGhost}
              href="https://github.com/Iron-mind"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">code</span>
              {locale.contactSection.github}
            </a>
            <a
              className={styles.ctaGhost}
              href="https://www.linkedin.com/in/david-tmontoya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">share</span>
              {locale.contactSection.linkedin}
            </a>
            <a
              className={styles.ctaFill}
              href="https://drive.google.com/file/d/18bjGHiS35nPFY2H5A9ah-sYpoh6vfhin/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">download</span>
              {locale.contactSection.cv}
            </a>
          </div>
          <EmailButton />
          {/* <div className={styles.metrics}>
            <div>
              <span>// {locale.contactSection.techStack}</span>
              <strong>{locale.contactSection.role}</strong>
            </div>
            <div>
              <span>// {locale.contactSection.experience}</span>
              <strong>{yearsOfExperience}_YEARS</strong>
            </div>
          </div> */}
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

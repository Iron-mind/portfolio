import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import profileImage from '../assets/profile.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  const { locale } = useLanguage()

  return (
    <section className={styles.hero}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          <img src={profileImage} alt="Developer portrait" />
          <span className={`material-symbols-outlined ${styles.badge}`}>terminal</span>
        </div>
        <h1 className={styles.title}>{locale.hero.title}</h1>
        <p className={styles.subtitle}>{locale.hero.subtitle}</p>
        <div className={styles.actions}>
          <Link to="/projects" className={styles.ctaGhost}>
            <span className="material-symbols-outlined">folder_open</span>
            {locale.hero.actions.projects}
          </Link>
          <Link to="/about" className={styles.ctaGhost}>
            <span className="material-symbols-outlined">person</span>
            {locale.hero.actions.profile}
          </Link>
          <Link to="/contact" className={styles.ctaGhost}>
            <span className="material-symbols-outlined">alternate_email</span>
            {locale.hero.actions.contact}
          </Link>
        </div>
        <div className={styles.ticker}>
          {locale.heroTicker.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

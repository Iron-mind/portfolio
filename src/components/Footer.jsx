import { useLanguage } from '../context/useLanguage'
import styles from './Footer.module.css'

export default function Footer() {
  const { locale } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>{locale.footerLeft}</div>
      <div className={styles.links}>
        {locale.footerLinks.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

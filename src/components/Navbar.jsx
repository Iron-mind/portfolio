import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { locale, language, toggleLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.brand}>FULLSTACK</div>

        <button
          className={styles.hamburger}
          type="button"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={styles.actions}>
          <div className={styles.links}>
            <NavLink to="/" end onClick={closeMenu}>
              {locale.nav.hero}
            </NavLink>
            <NavLink to="/projects" onClick={closeMenu}>
              {locale.nav.projects}
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              {locale.nav.profile}
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              {locale.nav.contact}
            </NavLink>
          </div>

          <div className={styles.utilities}>
            <button
              className={styles.langToggle}
              type="button"
              onClick={toggleLanguage}
              aria-label={
                language === 'en'
                  ? 'Switch language to Spanish'
                  : 'Cambiar idioma a inglés'
              }
            >
              {locale.nav.language}
            </button>
            <a
              className={styles.langToggle}
              href="https://drive.google.com/file/d/18bjGHiS35nPFY2H5A9ah-sYpoh6vfhin/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale.nav.downloadCv}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

import { useReducer, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import MatrixCanvas from './components/MatrixCanvas'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './routes/Hero'
import Projects from './routes/Projects'
import About from './routes/About'
import Contact from './routes/Contact'
import styles from './App.module.css'

/* ── Scroll to top on route change ── */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/* ── Route transition wrapper ── */
function pageTransitionReducer(state, action) {
  switch (action.type) {
    case 'NAVIGATE': {
      if (action.pathname === state.displayPathname) return state
      return { ...state, nextPathname: action.pathname, stage: 'fadeOut' }
    }
    case 'ANIMATION_END': {
      if (state.stage === 'fadeOut') {
        return { ...state, displayPathname: state.nextPathname, stage: 'fadeIn' }
      }
      if (state.stage === 'fadeIn') {
        return { ...state, stage: '' }
      }
      return state
    }
    default:
      return state
  }
}

function PageTransition() {
  const location = useLocation()

  const [state, dispatch] = useReducer(pageTransitionReducer, {
    displayPathname: location.pathname,
    nextPathname: location.pathname,
    stage: 'fadeIn',
  })

  // Detect route changes during render (safe conditional dispatch)
  if (location.pathname !== state.displayPathname && state.stage !== 'fadeOut') {
    dispatch({ type: 'NAVIGATE', pathname: location.pathname })
  }

  const handleAnimationEnd = () => {
    dispatch({ type: 'ANIMATION_END' })
  }

  const animClass =
    state.stage === 'fadeOut'
      ? styles.fadeOut
      : state.stage === 'fadeIn'
        ? styles.fadeIn
        : ''

  return (
    <main className={`${styles.stage} ${animClass}`} onAnimationEnd={handleAnimationEnd}>
      <Routes location={{ ...location, pathname: state.displayPathname }}>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className={styles.app}>
          <MatrixCanvas />
          <Navbar />

          <PageTransition />

          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

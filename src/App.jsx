import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import MatrixCanvas from './components/MatrixCanvas'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './routes/Hero'
import Projects from './routes/Projects'
import About from './routes/About'
import Contact from './routes/Contact'
import styles from './App.module.css'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className={styles.app}>
          <MatrixCanvas />
          <Navbar />

          <main className={styles.stage}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

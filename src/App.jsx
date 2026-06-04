import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

function SummaryPage() {
  return (
    <section className="view">
      <h1>Summary</h1>
      <p>
        I am a web developer focused on building fast, accessible, and user-friendly
        digital experiences.
      </p>
    </section>
  )
}

function ProjectsPage() {
  return (
    <section className="view">
      <h1>Projects</h1>
      <ul>
        <li>Portfolio website</li>
        <li>Landing page system</li>
        <li>Internal dashboard UI</li>
      </ul>
    </section>
  )
}

function ProfilePage() {
  return (
    <section className="view">
      <h1>Profile</h1>
      <p>
        I specialize in React, modern CSS, and JavaScript tooling with a strong
        emphasis on clean UI architecture.
      </p>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="view">
      <h1>Contact</h1>
      <p>Email: dev@example.com</p>
      <p>LinkedIn: linkedin.com/in/web-developer</p>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="site-header">
          <h2>My Portfolio</h2>
          <nav aria-label="Main navigation">
            <NavLink to="/" end>
              Summary
            </NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<SummaryPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

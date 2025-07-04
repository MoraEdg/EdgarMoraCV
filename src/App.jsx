import { useEffect, useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className="container">
      <header className="header">
        <h1>Edgar Francisco Mora Zhiñin</h1>
        <img
          src={`${import.meta.env.BASE_URL}foto.jpg`}
          alt="Fotografía de Edgar Mora"
          className="profile-img"
        />
      </header>

      <main className="fade-in">
        <About />
        <Projects />
        <Skills />
      </main>

      <footer>
        <p>© 2025 Edgar Mora — Portafolio personal. Todos los derechos reservados.</p>
      </footer>

      <button
        className="toggle-theme"
        onClick={() => setDarkMode(prev => !prev)}
        aria-label="Cambiar modo claro/oscuro"
        title="Cambiar modo claro/oscuro"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

export default App;

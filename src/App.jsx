import { useEffect, useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import HeatmapControls from './components/HeatmapControls';
// No necesitas importar 'index.css' aquí, Vite ya lo maneja a través de main.jsx

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <>
      
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

        {/* Esta sección estará oculta por defecto y aparecerá al final del contenido principal. */}
        <section id="heatmap-section">
                <h2>Mapa de Calor de Eye Tracking</h2>
                <p>Esta visualización muestra las áreas de la página que más captaron tu atención.</p>
                {/* El contenedor real donde heatmap.js dibujará el canvas */}
                <div id="heatmap-container"></div>
            </section>

        <footer>
          <p>© 2025 Edgar Mora — Portafolio personal. Todos los derechos reservados.</p>
        </footer>

        <button
          className="toggle-theme"
          onClick={() => setDarkMode(prev =>!prev)}
          aria-label="Cambiar modo claro/oscuro"
          title="Cambiar modo claro/oscuro"
        >
          {darkMode? '☀️' : '🌙'}
        </button>
      </div>

      {/* Los controles del Heatmap */}
       <HeatmapControls 
        onShowHeatmap={() => setShowHeatmap(true)}
        onHideHeatmap={() => setShowHeatmap(false)}
      />
    </>
  );
}

export default App;
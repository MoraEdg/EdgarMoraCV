// src/App.jsx
import './App.css';

function App() {
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

      <main>
        <section aria-labelledby="presentacion">
          <h2 id="presentacion">Presentación</h2>
          <p className="description">
            Soy estudiante de Ingeniería en Software de la Universidad Internacional SEK, apasionado por la tecnología. 
            Me interesan especialmente las áreas de análisis de datos, el machine learning y la inteligencia artificial, 
            ya que mi curiosidad por los patrones ocultos y la posibilidad de construir soluciones innovadoras que mejoren 
            la vida de las personas me motivan a querer crear sistemas que resuelvan problemas reales.
          </p>
        </section>

        <section aria-labelledby="proyectos" className="projects">
          <h2 id="proyectos">Proyectos destacados</h2>
          <div className="cards-container">
            <article className="card" tabIndex="0">
              <img
                src={`${import.meta.env.BASE_URL}itil.png`}
                alt="Icono representativo de prácticas ITIL"
                className="card-icon"
              />
              <h3>Optimización de Procesos ITIL</h3>
              <p>
                Identificación de oportunidades de mejora siguiendo normas usando métricas y prácticas de ITIL 4.
              </p>
            </article>

            <article className="card" tabIndex="0">
              <img
                src={`${import.meta.env.BASE_URL}oracle.png`}
                alt="Icono representativo de Oracle RightNow"
                className="card-icon"
              />
              <h3>Base de Conocimientos Automatizada</h3>
              <p>
                Actualización automatizada de base de conocimientos en Oracle RightNow para sistema Mesa de Servicios.
              </p>
            </article>

            <article className="card" tabIndex="0">
              <img
                src={`${import.meta.env.BASE_URL}python.png`}
                alt="Icono del lenguaje Python"
                className="card-icon"
              />
              <h3>Análisis de Datos</h3>
              <p>
                Desarrollo de sistema de minería de texto (NLP) para análisis de feedback de clientes usando Python y scikit-learn.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Edgar Mora — Portafolio personal. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

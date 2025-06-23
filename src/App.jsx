// src/App.jsx
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="/foto.jpg" alt="Foto de perfil" className="profile-img" />
        <h1>Edgar Francisco Mora Zhiñin</h1>
        <p className="description">
          Soy estudiante de Ingeniería en Software de la Universidad Internacional SEK, apasionado por la tecnología. 
          Me interesan especialmente las áreas de análisis de datos, el machine learning y la inteligencia artificial, 
          ya que mi curiosidad por los patrones ocultos y la posibilidad de construir soluciones innovadoras que mejoren 
          la vida de las personas me motivan a querer crear sistemas que resuelvan problemas reales.
        </p>
      </header>

      <section className="projects">
        <h2>PROYECTOS</h2>
        <div className="cards-container">
          <div className="card">
            <img src="/itil.png" alt="ITIL" className="card-icon" />
            <h3>Optimización de Procesos ITIL</h3>
            <p>Identificación de oportunidades de mejora siguiendo Normas usando métricas y prácticas de ITIL 4.</p>
          </div>

          <div className="card">
            <img src="/oracle.png" alt="Oracle RightNow" className="card-icon" />
            <h3>Base de Conocimientos Automatizada</h3>
            <p>Actualización automatizada de base de conocimientos en Oracle RightNow para Sistema Mesa de Servicios.</p>
          </div>

          <div className="card">
            <img src="/python.png" alt="Python" className="card-icon" />
            <h3>Análisis de Datos</h3>
            <p>Desarrollo de sistema de minería de texto (NLP) para análisis de feedback de clientes usando Python y scikit-learn.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

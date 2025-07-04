import React from 'react';

const projects = [
  {
    title: 'Optimización de Procesos ITIL',
    description: 'Identificación de oportunidades de mejora siguiendo normas usando métricas y prácticas de ITIL 4.',
    icon: 'itil.png',
  },
  {
    title: 'Base de Conocimientos Automatizada',
    description: 'Actualización automatizada de base de conocimientos en Oracle RightNow para sistema Mesa de Servicios.',
    icon: 'oracle.png',
  },
  {
    title: 'Análisis de Datos',
    description: 'Desarrollo de sistema de minería de texto (NLP) para análisis de feedback de clientes usando Python y scikit-learn.',
    icon: 'python.png',
  },
];

const Projects = () => (
  <section aria-labelledby="proyectos" className="projects">
    <h2 id="proyectos">Proyectos destacados</h2>
    <div className="cards-container">
      {projects.map((project, index) => (
        <article className="card" tabIndex="0" key={index}>
          <img
            src={`${import.meta.env.BASE_URL}${project.icon}`}
            alt={`Icono de ${project.title}`}
            className="card-icon"
          />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;

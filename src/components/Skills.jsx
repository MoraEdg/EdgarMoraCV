import React from 'react';

const skills = [
  'Análisis de datos',
  'Machine Learning',
  'Python',
  'SQL / PostgreSQL',
  'NoSQL / MongoDB',
  'Power BI',
  'Prácticas ITIL',
  'Modelado de Datos',
];

const Skills = () => (
  <section aria-labelledby="skills">
    <h2 id="skills">Habilidades</h2>
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index} className="skill-item">{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
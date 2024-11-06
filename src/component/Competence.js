import React from 'react';
import './Competence.css';

const skills = {
  "Langages Web": [
    { name: 'HTML', level: 90, description: 'Expérience avancée en HTML5' },
    { name: 'CSS', level: 85, description: 'Maîtrise de CSS3, flexbox, grid, et animations.' },
    { name: 'PHP', level: 85, description: 'Maîtrise de PHP' },
    { name: 'JavaScript', level: 80, description: 'Manipulation du DOM et API.' },
  ],
  "Langages Orientés Objet": [
    { name: 'Java', level: 70, description: 'Bonne connaissance de Java SE et développement orienté objet.' },
  ],
  "Frameworks": [
    { name: 'React', level: 75, description: 'Expérience avec hooks, context, et gestion d\'état.' },
    { name: 'NextJs', level: 50, description: 'Connaisance de base' },
  ],
  "Bases de Données": [
    { name: 'MySQL', level: 75, description: 'Connaissance avancée de MySQL.' },
  ],
  "Outils de Versionnage": [
    { name: 'GitLab/GitHub', level: 70, description: 'Connaisance de base pour GitHub , pour GitLab : connaissance des commandes de bases'},
  ]
};

const Competences = () => {
  return (
    <div className="competences-container">
      <h2>Mes Compétences</h2>
      {Object.keys(skills).map((category) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-columns">
            {skills[category].map((skill, index) => (
              <div key={index} className="skill">
                <span className="skill-name">{skill.name}</span>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="progress-percentage">{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-description">
                  {skill.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Competences;

import React, { useState } from 'react';
import './Competence.css';

const skills = {
  "Langages Web": [
    { name: 'HTML', level: 90, description: 'Expérience avancée en HTML5', icon: 'html5' },
    { name: 'CSS', level: 85, description: 'Maîtrise de CSS3, flexbox, grid, et animations.', icon: 'css3' },
    { name: 'PHP', level: 85, description: 'Maîtrise de PHP', icon: 'php' },
    { name: 'JavaScript', level: 80, description: 'Manipulation du DOM et API.', icon: 'javascript' },
  ],
  "Langages Orientés Objet": [
    { name: 'Java', level: 70, description: 'Bonne connaissance de Java SE et développement orienté objet.', icon: 'java' },
  ],
  "Frameworks": [
    { name: 'React', level: 75, description: 'Expérience avec hooks, context, et gestion d\'état.', icon: 'react' },
    { name: 'NextJs', level: 50, description: 'Connaisance de base', icon: 'nextjs' },
  ],
  "Bases de Données": [
    { name: 'MySQL', level: 75, description: 'Connaissance avancée de MySQL.', icon: 'database' },
  ],
  "Outils de Versionnage": [
    { name: 'GitLab/GitHub', level: 70, description: 'Connaisance de base pour GitHub, pour GitLab : connaissance des commandes de bases', icon: 'git' },
  ]
};

const Competences = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0]);

  // Pour déterminer le niveau de compétence en texte
  const getLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Avancé";
    if (level >= 60) return "Intermédiaire";
    if (level >= 40) return "Basique";
    return "Débutant";
  };

  // Pour déterminer la couleur en fonction du niveau
  const getLevelColor = (level) => {
    if (level >= 85) return "#2ecc71"; // Vert pour expert
    if (level >= 70) return "#3498db"; // Bleu pour avancé
    if (level >= 50) return "#f1c40f"; // Jaune pour intermédiaire
    return "#e74c3c"; // Rouge pour basique/débutant
  };

  return (
    <div className="competences-container" id="competences">
      <h2 className="section-title">
        <span className="highlight">Mes Compétences</span> 
      </h2>
      
      <div className="categories-tabs">
        {Object.keys(skills).map((category) => (
          <button 
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="skills-display">
        {Object.keys(skills).map((category) => (
          <div 
            key={category} 
            className={`skills-category ${activeCategory === category ? 'active' : ''}`}
          >
            <div className="skills-grid">
              {skills[category].map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <div className="skill-icon">
                      <i className={`icon-${skill.icon}`}></i>
                    </div>
                    <div className="skill-info">
                      <h3 className="skill-name">{skill.name}</h3>
                      <span className="skill-level" style={{ color: getLevelColor(skill.level) }}>
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: getLevelColor(skill.level)
                        }}
                      ></div>
                      <div className="progress-markers">
                        <span className="marker" style={{ left: '25%' }}></span>
                        <span className="marker" style={{ left: '50%' }}></span>
                        <span className="marker" style={{ left: '75%' }}></span>
                      </div>
                    </div>
                    <span className="progress-percentage">{skill.level}%</span>
                  </div>
                  
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;
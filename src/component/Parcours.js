import React from 'react';
import './Parcours.css';

const Parcours = () => {
  return (
    <div className="parcours-container">
      <div className="parcours-box">
        <h2>🎓 Parcours Études</h2>
        <div className="sub-box">
          <h3>Lycée : 2020 - 2023</h3>
          <p>
            Étudiant au <span className="highlight">Lycée Bossuet</span> à Meaux, avec spécialités en Mathématiques,
            Sciences Économiques et Sociales (SES) et Anglais Contemporain. Option <span className="highlight">Cinéma Audio-Visuel</span>.
          </p>
        </div>
        <div className="sub-box">
          <h3>BTS : 2023 - 2025</h3>
          <p>
            Étudiant en deuxième année de <span className="highlight">BTS SIO</span> à l'IPSSI, Marne-la-Vallée,
            spécialité <span className="highlight">SLAM</span> (Solutions Logicielles et Applications Métier).
          </p>
        </div>
      </div>

      <div className="parcours-box">
        <h2>💼 Parcours Professionnel</h2>
        <div className="sub-box">
          <h3>Stage Faseya : Mai - Juin 2024</h3>
          <p>Expérience dans une entreprise spécialisée en solutions web :</p>
          <ul>
            <li>Apprentissage de TypeScript, React, Next.js</li>
            <li>Utilisation des API et Endpoints</li>
            <li>Travail en équipe agile (16 collaborateurs)</li>
            <li>Présentation à <span className="highlight">VivaTech 2024</span></li>
            <li>Montée en compétences en communication et gestion de projet</li>
          </ul>
        </div>
        <div className="sub-box">
          <h3>Alternance 2024 - 2025</h3>
          <p>
            Intégré au projet <span className="highlight">Yatouze</span>, plateforme tout-en-un :
          </p>
          <ul>
            <li>Modules : RH, gestion, projets, communication, comptabilité</li>
            <li>Approfondissement en React & TypeScript</li>
            <li>Développement d'applications métiers</li>
            <li>Renforcement de l'expertise en gestion de projet</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Parcours;

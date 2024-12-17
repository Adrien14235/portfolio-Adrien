// src/component/Parcours.js

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
            Étudiant au <strong>Lycée Bossuet</strong> à Meaux, j'ai suivi un
            cursus général avec des spécialités en <span className="highlight">Mathématiques</span>, <span className="highlight">Sciences
            Économiques et Sociales (SES)</span>, et <span className="highlight">Anglais Contemporain</span>. J'ai également développé une sensibilité artistique à travers l'option <span className="highlight">Cinéma Audio-Visuel</span>.
          </p>
        </div>
        <div className="sub-box">
          <h3>BTS : 2023 - 2025</h3>
          <p>
            Actuellement en deuxième année de <strong>BTS SIO</strong> à l'école 
            <span className="highlight"> IPSSI</span> à Marne-la-Vallée, je me spécialise en 
            <span className="highlight">SLAM</span> (Solutions Logicielles et Applications Métier).
          </p>
        </div>
      </div>

      <div className="parcours-box">
        <h2>💼 Parcours Professionnel</h2>
        <div className="sub-box">
          <h3>Stage Faseya : Mai - Juin 2024</h3>
          <p>
            Lors de mon stage chez <strong>Faseya</strong>, une entreprise polyvalente spécialisée dans les solutions web et logicielles, j'ai pu :
          </p>
          <ul>
            <li>
              Apprendre les bases de <span className="highlight">TypeScript</span>, <span className="highlight">React</span>, et <span className="highlight">Next.js</span>.
            </li>
            <li>
              Découvrir et utiliser les <span className="highlight">API</span> et <span className="highlight">Endpoints</span>.
            </li>
            <li>
              Travailler en équipe avec 16 collaborateurs en suivant un mode projet structuré.
            </li>
            <li>
              Participer au salon <strong>VivaTech 2024</strong>, où j'ai présenté une application web devant des clients et visiteurs.
            </li>
            <li>
              Développer des compétences en communication et gestion de projet.
            </li>
          </ul>
        </div>
        <div className="sub-box">
          <h3>Alternance 2024 - 2025</h3>
          <p>
            Suite à mon stage chez <strong>Faseya</strong>, j'ai eu l'opportunité de poursuivre mon parcours au sein de la même entreprise. J'intègre ainsi le projet <strong>"Yatouze"</strong>, une plateforme de gestion d'entreprise tout-en-un. Cette application web centralise les ressources humaines, la gestion commerciale, les projets, les communications (chat et visioconférence), ainsi que la comptabilité.
          </p>
          <ul>
            <li>
              Je continue de travailler en mode projet avec une équipe dynamique et d'approfondir mes connaissances en <span className="highlight">React</span> et <span className="highlight">TypeScript</span>.
            </li>
            <li>
              J'acquiers de nouvelles compétences en développement d'applications métiers tout en contribuant activement à l'amélioration du produit.
            </li>
            <li>
              Cette expérience m'apporte une expertise renforcée dans l'intégration de solutions logicielles et la gestion de projet.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Parcours;

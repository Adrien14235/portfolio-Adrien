// src/component/Parcours.js

import React from 'react';
import './Parcours.css';

const Parcours = () => {
  return (
    <div className="parcours-container">
      <div className="parcours-box">
        <h2>Parcours Études</h2>
        <div className="sub-box">
          <h3>Lycée : 2020 - 2023</h3>
          <p>Lycée Général à Bossuet situé à Meaux . Les spécialités choisis étaient Math , SES , Anglais Comtemporain avec option Cinéma Audio-Visuel</p>
        </div>
        <div className="sub-box">
          <h3>BTS : 2023 - 2025</h3>
          <p>BTS effectué à l'école Ipssi situé à Marne la Vallée . La spécialité choisit est SLAM </p>
        </div>
        {/* Ajoutez d'autres sous-boîtes pour d'autres segments d'études si nécessaire */}
      </div>
      <div className="parcours-box">
        <h2>Parcours Professionnel</h2>
        <div className="sub-box">
          <h3>Stage Faseya : 2024</h3>
          <p>Stage de 2 mois effectué entre Mai et Juin 2024 dans l'entreprise Faseya. Une entreprise polyvalent , que ce soit web ou logiciel c'est la première expériences en entreprise en tant que développeur informatique .</p>
        </div>
        <div className="sub-box">
          <h3>Alternance 2024 - 2025</h3>
          <p></p>
        </div>
        {/* Ajoutez d'autres sous-boîtes pour d'autres expériences professionnelles si nécessaire */}
      </div>
    </div>
  );
};

export default Parcours;

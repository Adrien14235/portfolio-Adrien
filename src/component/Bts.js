import React from 'react';
import './Bts.css';
import logoIPSSI from '../projets/Ippsi.png'; // Remplacez par le chemin réel du logo

const Bts = () => {
    return (
        <div className="bts-container">
            {/* Présentation du BTS SIO */}
            <section className="bts-section">
                <h1 className="bts-title">Présentation du BTS SIO</h1>
                <p>
                    Le <strong>BTS SIO</strong> (Services Informatiques aux Organisations) est une formation spécialisée dans le domaine de l’informatique, destinée à préparer les étudiants 
                    à intégrer le marché du travail ou à poursuivre leurs études dans le secteur des technologies numériques. 
                    Ce diplôme propose deux options : SISR (Solutions d’Infrastructure, Systèmes et Réseaux) et SLAM (Solutions Logicielles et Applications Métier). 
                    Le cursus est axé sur la gestion de projets informatiques, le développement de logiciels, l’administration de réseaux, et la résolution de problèmes techniques en entreprise.
                </p>
            </section>

            {/* Présentation de l'option SLAM */}
            <section className="slam-section">
                <h2 className="slam-title">Option SLAM</h2>
                <p>
                    L’option <strong>SLAM</strong> (Solutions Logicielles et Applications Métier) s’adresse aux passionnés de développement informatique. 
                    Elle forme les étudiants à concevoir, développer et maintenir des applications adaptées aux besoins des organisations. 
                    Les compétences acquises incluent la maîtrise des langages de programmation (JavaScript, HTML/CSS, PHP, etc.), la création de bases de données relationnelles, 
                    et l’utilisation de frameworks modernes pour le développement web et mobile. Les diplômés de cette option trouvent souvent des débouchés en tant que développeurs, 
                    analystes-programmeurs, ou chefs de projet junior.
                </p>
            </section>

            {/* Présentation de l'école IPSSI */}
            <section className="ipssi-section">
                <h2 className="ipssi-title">L'École IPSSI</h2>
                <div className="ipssi-content">
                    <a href="https://ecole-ipssi.com/ecole-informatique-marne-la-vallee" target="_blank" rel="noopener noreferrer">
                    <img src={logoIPSSI} alt="Logo IPSSI" className="ipssi-logo" /></a>
                    <p>
                        L'<strong>IPSSI</strong> est une école supérieure reconnue pour ses formations dans les domaines de l’informatique, du digital, et de la cybersécurité. 
                        Située en région parisienne, elle propose des cursus adaptés au marché de l’emploi, allant du BTS jusqu’aux Mastères spécialisés. 
                        Forte de son réseau de partenaires et de son approche pédagogique innovante, l’IPSSI accompagne ses étudiants dans leur réussite professionnelle. 
                        Les projets collaboratifs, les stages en entreprise et les conférences professionnelles sont au cœur de la formation.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Bts;

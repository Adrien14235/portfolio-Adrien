import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'; // Importation des icônes
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-box">
                <div className="profile">
                    <img src="/IMG_1882.jpg" alt="Adrien Antunes" className="profile-image" />
                    <h1>Adrien Antunes</h1>
                    <p>Je suis en deuxième année de BTS à IPSSI Marne-la-Vallée</p>
                    <a 
                        href="/antunes-adrien-cv (11).pdf" 
                        className="btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Consulter mon CV
                    </a>
                    <a 
                        href="/E4 ,ew.pdf" 
                        className="btn1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Consulter l'E4
                    </a>
                    
                    <div className="info-box">
                        <h4>MES INFORMATIONS :</h4>
                        <ul>
                            <li>Adrien Antunes - Saint-Germain-sur-Morin, France</li>
                            <li>Âge : 19 ans</li>
                            <li>Email : adrienantunes05@gmail.com</li>
                        </ul>
                    </div>

                    {/* Liens vers les réseaux sociaux */}
                    <div className="social-links">
                        <a href="https://github.com/Adrien14235" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} color="#fff" className="social-icon" />
                        </a>
                        <a href="https://gitlab.com/AdrienIpssi" target="_blank" rel="noopener noreferrer">
                            <FaGitlab size={30} color="#fff" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/adrien-antunes-8308312a5/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} color="#fff" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="about-box">
                <h3>À propos de moi</h3>
                <p>
                    Je suis Adrien Antunes, étudiant en première année de BTS SIO 
                    (Services Informatiques aux Organisations), Option SLAM 
                    (Solutions Logicielles et Applications Métiers), l'option spécialisée pour le développement, 
                    à IPSSI, Marne-la-Vallée.
                </p>
                <p>
                    J'ai développé une passion pour l'informatique depuis que j'ai commencé mes études en BTS SIO. 
                    C'est ainsi que j'ai découvert le développement web et le monde de l'informatique. 
                    Je souhaite poursuivre mes études vers un bachelor en SLAM et dans un futur proche, 
                    continuer sur un master en Big Data et Intelligence Artificielle.
                </p>
            </div>
        </div>
    );
};

export default Profile;

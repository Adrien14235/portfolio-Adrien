import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-box">
                <div className="profile">
                    <img src="/IMG_1882.jpg" alt="Adrien Antunes" className="profile-image" />
                    <h1>Adrien Antunes</h1>
                    <p>Je suis en première année de BTS à Ipssi Marne La Vallée</p>
                    <a href="/antunes-adrien-cv (11).pdf" className="btn">Consulter mon CV</a>
                    <a href="/E4.pdf" className="btn1">Consulter l'E4</a>
                    
                    <div className="info-box">
                        <h4>MES INFORMATIONS :</h4>
                        <ul>
                            <li>Adrien Antunes - Saint Germain-sur-Morin, France</li>
                            <li>(+33) 6 09 53 22 12 - Age : 18 ans</li>
                            <li>mail : adrienantunes05@gmail.com </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-box">
                <h3>A propos de moi</h3>
                <p>Je suis Adrien Antunes, étudiant en première année de BTS SIO (Services Informatiques aux Organisations), Option SLAM (Solutions Logicielles et Application Métier) l'option spécialisée pour le développement, à IPSSI, Marne La Vallée.</p>
                <p>J'ai développé une passion pour l'informatique depuis que j'ai commencé mes études en BTS SIO. C'est ainsi que j'ai découvert le développement web et j'ai décidé d'en faire mon futur métier.</p>
                <p>Je compte toutefois continuer vers le master afin de me diriger vers autre chose que le web !</p>
            </div>
        </div>
    );
};

export default Profile;

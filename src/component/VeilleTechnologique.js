import React, { useState } from 'react';
import './VeilleTechnologique.css';

import img1 from '../projets/veille/1.png';
import img2 from '../projets/veille/2.png';
import img3 from '../projets/veille/3.jpg';
import img4 from '../projets/veille/4.png';

const data = [
  {
    image: img1,
    text: "Imaginez un monde où nos appareils électroniques sont capables de prendre des décisions, dapprendre de nouvelles choses, et même de nous aider dans nos tâches quotidiennes sans intervention humaine. C'est le monde de l'intelligence artificielle, ou IA pour faire court. Tout d'abord, l'intelligence artificielle. L'IA se réfère à la capacité des machines à effectuer des tâches qui nécessitent normalement l'intelligence humaine. Cela inclut des choses comme la reconnaissance vocale, la prise de décision, l'apprentissage et bien plus encore. Aujourd'hui, l'IA est omniprésente dans notre vie quotidienne, des assistants virtuels sur nos smartphones aux algorithmes de recommandation sur les plateformes de streaming en ligne. Maintenant, parlons de la cybersécurité. La cybersécurité concerne la protection des systèmes informatiques, des réseaux et des données contre les attaques, les dommages ou l'accès non autorisé. Avec la montée en puissance des technologies numériques, la cybersécurité est devenue une préoccupation majeure pour les entreprises, les gouvernements et les individus du monde entier."
  },
  {
    image: img2,
    text: "Avec l'essor de l'IA, nous avons vu une augmentation significative de son utilisation dans le domaine de la cybersécurité. Des algorithmes d'IA sont maintenant déployés pour détecter les menaces, analyser les vulnérabilités et répondre aux attaques en temps réel."
  },
  {
    image: img3,
    text: "Cependant aujourd'hui nous prouvons tromper les IA de type faible avec par exemple l'Adversarial AI : Des attaquants peuvent utiliser des perturbations subtiles pour tromper les systèmes de détection basés sur l'IA, comme des attaques adversariales contre des modèles de reconnaissance d'images ou des systèmes de détection d'intrusion. Implication : Il est crucial de développer des modèles robustes capables de résister à ces perturbations. De plus l'Évolutivité et la complexité Des systèmes de cybersécurité doivent gérer des volumes massifs de données en temps réel, rendant la tâche complexe et exigeante en ressources. Implication : La scalabilité des solutions d'IA est un défi majeur, nécessitant des infrastructures puissantes et optimisées. Pour finir la question de Vie privée et éthique car l'utilisation des données personnelles pour entraîner des modèles d'IA, soulèvent des préoccupations en matière de confidentialité. Dans ce sens nous avons besoin de politiques strictes et de technologies de préservation de la vie privée pour assurer la protection des données."
  },
  {
    image: img4,
    text: "bien que l'IA offre des avantages significatifs en matière de cybersécurité, tels que la détection des menaces et la réponse automatisée aux incidents, elle introduit également de nouveaux défis complexes qui doivent être surmontés pour assurer la sécurité des systèmes informatiques et des données dans un monde de plus en plus numérique et interconnecté. La complexité accrue des attaques , les éfis de gestion des données et les besoin de compétences spécialisées en sont quelques exemples"
  }
  // Ajoutez autant d'images et de textes que nécessaire
];

const VeilleTechnologique = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === data.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="veille-technologique">
      <h2>Veille Technologique</h2>
      <div className="carousel-and-text">
        <div className="carousel-container">
          <button onClick={prevSlide} className="carousel-button">Précédent</button>
          <div className="carousel-content">
            <img src={data[currentIndex].image} alt={`Slide ${currentIndex}`} className="carousel-image" />
          </div>
          <button onClick={nextSlide} className="carousel-button">Suivant</button>
        </div>
        <div className="text-box">
          <p>{data[currentIndex].text}</p>
        </div>
      </div>
    </div>
  );
};

export default VeilleTechnologique;

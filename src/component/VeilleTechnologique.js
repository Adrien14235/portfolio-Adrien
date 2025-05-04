import React, { useState } from 'react';
import './VeilleTechnologique.css';

// Import images (conservés de votre code original)
import img1 from '../projets/veille/1.png';
import img2 from '../projets/veille/2.png';
import img3 from '../projets/veille/3.jpg';
import img4 from '../projets/veille/4.png';

// Données pour la veille technologique n°1 (IA et cybersécurité)
const veilleData1 = [
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
];

// Données pour la veille technologique n°2 (exemple avec des données fictives à remplacer)
const veilleData2 = [
  {
    image: img1, // À remplacer par une image d'IA ou de code
    text: "L’intelligence artificielle générative (IA générative) est une branche de l’IA capable de produire du contenu nouveau (texte, code, images…). Dans le développement web, elle permet de générer, corriger ou compléter du code via des modèles comme GPT (OpenAI) ou Codex. Elle transforme la façon de coder en proposant une assistance intelligente."
  },
  {
    image: img2, // Par exemple : logo de GitHub Copilot ou ChatGPT
    text: "Outils populaires : GitHub Copilot, ChatGPT, Amazon CodeWhisperer, Tabnine. Cas d’usage : génération de composants, refactorisation de code, création de tests, documentation automatique. Avantages : gain de temps, aide aux débutants, meilleure productivité. Limites : sécurité, dépendance, code parfois incorrect ou flou juridiquement."
  },
  {
    image: img3, // Image illustrant l’IA en entreprise ou un IDE
    text: "L’IA générative est adoptée en entreprise pour accélérer les livraisons, faciliter l’apprentissage, automatiser les tests, ou générer des prototypes. Elle ouvre la voie à un nouveau rôle du développeur : pilote et superviseur de la génération assistée par IA. Cette technologie est en plein essor et redéfinit les pratiques du développement."
  }
];


// Données pour la méthode de veille
const methodeVeilleData = [
  {
    image: img4, // À remplacer par une image illustrant votre méthode
    text: "Ma méthode de veille technologique consiste en plusieurs étapes clés pour rester à jour dans mon domaine. Tout d'abord, j'identifie les sources d'information pertinentes comme les blogs spécialisés, les newsletters techniques, les podcasts et les communautés en ligne."
  },
  {
    image: img1, // À remplacer
    text: "Je m'abonne à des newsletters techniques spécialisées et je consacre du temps chaque semaine pour explorer les nouveautés. J'utilise des outils d'agrégation comme Feedly pour centraliser toutes mes sources et ne rien manquer d'important dans mon domaine."
  },
  {
    image: img2, // À remplacer
    text: "Je participe activement à des forums et communautés techniques comme Stack Overflow, GitHub et des groupes spécialisés sur LinkedIn et Discord. Cela me permet d'échanger avec d'autres professionnels et de découvrir de nouvelles tendances et solutions."
  },
  {
    image: img3, // À remplacer
    text: "Pour approfondir mes connaissances, je suis régulièrement des cours en ligne, des webinaires et j'assiste à des conférences virtuelles. Je garde un carnet de notes et des documents organisés pour faciliter la consultation ultérieure de ces informations."
  }
];

const VeilleTechnologique = () => {
  // État pour suivre l'option sélectionnée (veille1, veille2 ou methode)
  const [selectedOption, setSelectedOption] = useState('veille1');
  
  // État pour suivre l'index actuel dans le carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour obtenir les données actuelles en fonction de l'option sélectionnée
  const getCurrentData = () => {
    switch (selectedOption) {
      case 'veille1':
        return veilleData1;
      case 'veille2':
        return veilleData2;
      case 'methode':
        return methodeVeilleData;
      default:
        return veilleData1;
    }
  };

  // Fonctions pour la navigation dans le carousel
  const prevSlide = () => {
    const data = getCurrentData();
    const newIndex = (currentIndex === 0) ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const data = getCurrentData();
    const newIndex = (currentIndex === data.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Fonction pour changer l'option sélectionnée
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setCurrentIndex(0); // Réinitialiser l'index du carousel lors du changement d'option
  };

  // Obtenir les données actuelles
  const currentData = getCurrentData();

  return (
    <div className="veille-technologique">
      <h2>Veille Technologique</h2>
      
      {/* Menu de sélection */}
      <div className="veille-options">
        <button 
          className={`option-button ${selectedOption === 'veille1' ? 'active' : ''}`}
          onClick={() => handleOptionChange('veille1')}
        >
          Veille N°1: IA et Cybersécurité
        </button>
        <button 
          className={`option-button ${selectedOption === 'veille2' ? 'active' : ''}`}
          onClick={() => handleOptionChange('veille2')}
        >
          L’intelligence artificielle générative dans le développement web
        </button>
        <button 
          className={`option-button ${selectedOption === 'methode' ? 'active' : ''}`}
          onClick={() => handleOptionChange('methode')}
        >
          Ma Méthode de Veille
        </button>
      </div>
      
      {/* Titre dynamique basé sur la sélection */}
      <h3 className="veille-subtitle">
        {selectedOption === 'veille1' ? 'IA et Cybersécurité' : 
         selectedOption === 'veille2' ? 'Titre de Votre Veille N°2' : 
         'Comment j\'effectue ma veille technologique'}
      </h3>
      
      {/* Carousel et texte */}
      <div className="carousel-and-text">
        <div className="carousel-container">
          <button onClick={prevSlide} className="carousel-button">Précédent</button>
          <div className="carousel-content">
            <img 
              src={currentData[currentIndex].image} 
              alt={`Slide ${currentIndex}`} 
              className="carousel-image" 
            />
          </div>
          <button onClick={nextSlide} className="carousel-button">Suivant</button>
        </div>
        <div className="text-box">
          <p>{currentData[currentIndex].text}</p>
        </div>
      </div>
      
      {/* Indicateur de progression */}
      <div className="carousel-indicators">
        {currentData.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VeilleTechnologique;
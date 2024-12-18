import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectCarousel from './ProjectCarrousel';
import ProjectDetailcss from '../component/ProjectDetail.css'

import img1 from '../projets/respirestatetu1.png';
import img2 from '../projets/respirestatetu2.png';
import img3 from '../projets/respirestatetu3.png';
import img7 from '../projets/plante.png';
import img8 from '../projets/movie1.png';
import img9 from '../projets/movie2.png';
import img10 from '../projets/movie3.png';
import img11 from '../projets/Bibli1.png';
import img12 from '../projets/Bibli2.png';
import img13 from '../projets/Bibli3.png';
import img14 from '../projets/gamehub2.png';
import img15 from '../projets/gamehub3.png';
import img16 from '../projets/gamehub1.png';
import img17 from '../projets/Yatouze/RH.png';
import img18 from '../projets/Yatouze/GC.png';
import img19 from '../projets/Yatouze/devis.png';
import img20 from '../projets/Yatouze/Suivi du Temps.png'
import img21 from '../projets/Yatouze/BV.png'
import img22 from '../projets/Yatouze/asana.png'

import doc1 from '../projets/cdc_biblio.pdf'
import zip1 from '../projets/respirestatetug03.zip';
import zip2 from '../projets/gamehub.zip';
import zip from '../projets/yatouzedoc.zip'

const projects = [
  { id: 1, title: 'RespireStatEtu', images: [img1, img2, img3], description: 'En tant que développeur nous devions recensés les polluants au abords des crèches et des écoles en Île de France ', file: zip1  },
  { id: 3, title: 'La Maison Jungle', images: [img7], description: "En arrivant dans mon stage j'ai du apprendre de nouveau language telle que React.", },
  { id: 4, title: 'Liste de Film', images: [img8, img9, img10], description: "Le projet dans lequel je suis arrivé pour mon stage fonctionnait autour d'API.",  },
  { id: 5, title: 'Bibliothèque Virtuel V2', images: [img11, img12, img13], description: "Le projet Bibliothèque Virtuel V2 est un projet consistant à améliorer la précédente bibliothèque.",file: doc1 },
  { id: 6, title: 'Gamehub', images: [img16, img14, img15], description: "", file: zip2 },
  { id: 7, title: 'Yatouze', images: [img17, img18,img19, img20, img21, img22], description: "", file:zip}
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id, 10));

  const handleDownload = () => {
    if (project && project.file) {
      const link = document.createElement('a');
      link.href = project.file; // Chemin vers le fichier (zip ou pdf)
      const fileExtension = project.file.split('.').pop(); // Récupère l'extension du fichier
      const filename = `${project.title.replace(/\s+/g, '_')}.${fileExtension}`;
      link.download = filename; // Nom de fichier dynamique
      link.click();
    }
  };

  return (
    <div className="project-details">
      {project ? (
        <>
          <h2>{project.title}</h2>
          <ProjectCarousel images={project.images} />
          <p>{project.description}</p>

          {/* Bouton unique */}
          {project.file && (
            <button 
              onClick={handleDownload} 
              className="download-button"
            >
              Télécharger les Ressources
            </button>
          )}
        </>
      ) : (
        <p>Projet non trouvé</p>
      )}
    </div>
  );
};

export default ProjectDetails;


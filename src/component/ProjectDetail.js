/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { useState } from 'react';
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
import img23 from '../projets/zsqd1.png'
import img24 from '../projets/zsqd2.png'
import img25 from '../projets/zsqd3.png'
import img26 from '../projets/zsqd4.png'
import img27 from '../projets/zsqd5.png'

import doc1 from '../projets/cdc_biblio.pdf'
import doc2 from '../projets/respirestatetu/Respirstat.pdf'
import doc3 from '../projets/gamehubDoc/Doc.pdf'
import doc4 from '../projets/zsqd-doc/zsqd-doc.pdf'

const projects = [
  { id: 1, title: 'RespireStatEtu', images: [img1, img2, img3], description: 'En tant que développeur nous devions recensés les polluants au abords des crèches et des écoles en Île de France ', file: doc2  },
  { id: 3, title: 'La Maison Jungle', images: [img7], description: "En arrivant dans mon stage j'ai du apprendre de nouveau language telle que React.", },
  { id: 4, title: 'Liste de Film', images: [img8, img9, img10], description: "Le projet dans lequel je suis arrivé pour mon stage fonctionnait autour d'API.",  },
  { id: 5, title: 'Bibliothèque Virtuel V2', images: [img11, img12, img13], description: "Le projet Bibliothèque Virtuel V2 est un projet consistant à améliorer la précédente bibliothèque.",file: doc1 },
  { id: 6, title: 'Gamehub', images: [img16, img14, img15], description: "M2L souhaite développer un site Web pour la création de tournois E-Sport en Lorraine .", file: doc3 },
  { id: 7, title: 'Yatouze', images: [img17, img18,img19, img20, img21, img22], description: ""},
  { id: 8, title: 'ZQSD', images: [img23, img24, img25, img26, img27], description: "M2L souhaite développer une application mobile pour la création de paris lié à l’E-Sport", file: doc4 },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const [showPreview, setShowPreview] = useState(false);

  const project = projects.find((p) => p.id === parseInt(id, 10));

  const handleDownload = () => {
    if (project?.file) {
      const link = document.createElement("a");
      link.href = project.file;
      link.download = project.file.split("/").pop(); // Nom du fichier
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

          {project.file && project.file.endsWith(".pdf") && (
            <div className="button-group">
              <button onClick={() => setShowPreview(!showPreview)} className="preview-button">
                {showPreview ? "Masquer l'Aperçu" : "Prévisualiser le Document"}
              </button>
              <button onClick={handleDownload} className="download-button">
                Télécharger le Document
              </button>
            </div>
          )}
          
          {showPreview && project.file && (
            <iframe src={project.file} width="100%" height="600px" className="border rounded-md shadow-md mt-4" />
          )}
        </>
      ) : (
        <p>Projet non trouvé</p>
      )}
    </div>
  );
};

export default ProjectDetails;
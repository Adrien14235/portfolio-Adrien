import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectCarousel from './ProjectCarrousel';
import img1 from '../projets/respirestatetu1.png';
import img2 from '../projets/respirestatetu2.png';
import img3 from '../projets/respirestatetu3.png';
import img4 from '../projets/bv1.png';
import img5 from '../projets/bv2.png';
import img6 from '../projets/bv3.png';
import img7 from '../projets/plante.png'
import img8 from '../projets/movie1.png'
import img9 from '../projets/movie2.png'
import img10 from '../projets/movie3.png'
import img11 from '../projets/Bibli1.png'
import img12 from '../projets/Bibli2.png'
import img13 from '../projets/Bibli3.png'

 
const projects = [
  { id: 1, title: 'RespireStatEtu', images: [img1, img2, img3], description: 'En tant que développeur nous devions recensés les polluants au abords des crèches et des écoles en Île de France ' },
  { id: 2, title: 'Bibliothèque Virtuel V1', images: [img4, img5, img6], description: "L'objectif de ce premier projet était de mettre en oeuvre ce que nous faisions en cours , dès lors toute les 2 semaines nous devions améliorer cette bibliothèque avec de nouvelle connaissance. Nous avons commencée avec du HTML/CSS et finient avec du PHP/JS/CSS/SQL" },
  { id: 3, title: 'La Maison Jungle', images: [img7], description: "En arrivant dans mon stage j'ai du apprendre de nouveau language telle que React , de ce fait j'ai appris les fondamentaux avec ce projet." },
  { id: 4, title: 'Liste de Film', images: [img8 , img9 , img10], description: "Le projet dans lequel je suis arrivé pour mon stage fonctionnait autour d'API , de ce faite j'ai fais un tout petit projet afin de pouvoir manipuler une API"},
  { id: 5, title: 'Bibliothèque Virtuel V2', images: [img11 , img12, img13], description: "Le projet Bibliothèque Virtuel V2 est un projet consistant à améliorer la précédente bibliothèque virtuel . Ce projet est le fil rouge de notre second semestre , nous devions respecter un cahier des charges créer avec un client fictif ." },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id, 10));

  return (
    <div className="project-details">
      {project ? (
        <>
          <h2>{project.title}</h2>
          <ProjectCarousel images={project.images} />
          <p>{project.description}</p>
        </>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default ProjectDetails;

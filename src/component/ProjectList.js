import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css';
import img1 from '../projets/respirestatetu1.png';
//import img2 from '../projets/respirestatetu2.png';
//import img3 from '../projets/respirestatetu3.png';
import img4 from '../projets/bv1.png';
import img5 from '../projets/plante.png';
//import img6 from '../projets/bv3.png';
import img7 from '../projets/movie1.png'
import img8 from '../projets/Bibli1.png'
import img9 from '../projets/gamehub1.png'
import img10 from '../projets/Yatouze1.png'

const schoolProjects = [
  { id: 1, title: 'RespireStatEtu', image: img1 },
  { id: 5, title: 'Bibliothèque Virtuel V2', image: img8 },
  { id: 6, title: 'Gamehub', image: img9 },
  { id: 8, title: 'ZSQD', image: img9 },

  // Ajoutez d'autres projets scolaires ici
];

const internshipProjects = [
  { id: 3, title: 'La Maison Jungle', image: img5 },
  { id: 4, title: 'Découverte API',  image: img7 },
  { id: 7, title: 'Yatouze', image: img10}
  //{ id: 5, title: 'Projet 5',  image: img2 },
  //{ id: 6, title: 'Projet 6', image: img3 },
  // Ajoutez d'autres projets de stage/alternance ici
];

const ProjectList = () => {
  return (
    <div className="project-list">
      <h2>Projects</h2>

      <div className="project-section">
        <h3>Projets Scolaire / Atelier de Professionalisation</h3>
        <div className="project-grid">
          {schoolProjects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-box">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h3>Projets de Stage / Alternance</h3>
        <div className="project-grid">
          {internshipProjects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-box">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

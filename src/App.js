import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Competences from './component/Competence';
import Projets from './component/ProjectCarrousel';
import Parcours from './component/Parcours';
import VeilleTechnologique from './component/VeilleTechnologique';
import Profile from './component/Profile';
import ProjectList from './component/ProjectList';
import ProjectDetails from './component/ProjectDetail';
import Bts from './component/Bts'
import './App.css';

const App = () => {
  const project = {
    title: "RespireStatEtu",
    images: [
      "./projets/respirestatetu1.png",
      "./projets/respirestatetu2.png",
      "./projets/respirestatetu3.png"
    ],
    description: "Notre objectif était de créer un logiciel permettant de répertorier les polluants aux abords des crèches et des écoles en Île-de-France"
  };

  return (
    <Router>
      <div className="App">
        <video autoPlay loop muted className="background-video">
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/projets" element={<ProjectList />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets project={project} />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/veille-technologique" element={<VeilleTechnologique />} />
            
            <Route path="/Bts" element={<Bts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

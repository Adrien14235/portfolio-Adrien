import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className="logo">
        A.A
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/competences" activeClassName="active">
              <i className="material-icons">Skills</i> 
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink to="/projets" activeClassName="active">
              <i className="material-icons">Work</i> 
              Projet Pro
            </NavLink>
          </li>
          <li>
            <NavLink to="/parcours" activeClassName="active">
              <i className="material-icons">School</i> 
              Parcours
            </NavLink>
          </li>
          <li>
            <NavLink to="/veille-technologique" activeClassName="active">
              <i className="material-icons">Search</i> 
              Veille Technologique
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              <i className="material-icons">Mail</i> 
              Page Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="footer">
        Adrien Antunes
      </div>
    </div>
  );
};

export default Sidebar;

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
            <NavLink to="/parcours" activeClassName="active">
              <i className="material-icons">Parcours</i> 
              School
            </NavLink>
          </li>
          <li>
            <NavLink to="/competences" activeClassName="active">
              <i className="material-icons">Compétences</i> 
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projets" activeClassName="active">
              <i className="material-icons">Projet Pro</i> 
               Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/veille-technologique" activeClassName="active">
              <i className="material-icons">Veille Technologique</i> 
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              <i className="material-icons">Page Contact</i> 
              Mail
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

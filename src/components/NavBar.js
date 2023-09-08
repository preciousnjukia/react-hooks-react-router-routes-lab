import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li className="nav-item"> 
      <NavLink 
           exact to="/" className="nav-link" activeClassName="active">
            Home
        </NavLink>
        </li>
       <li className="nav-item"> 
        <NavLink 
           exact to="/movies" className="nav-link" activeClassName="active">
            Movies 
        </NavLink>
        </li>
        <li className="nav-item"> 
        <NavLink 
         exact to="/directors" className="nav-link" activeClassName="active">
           Directors
        </NavLink>
        </li>
        <li className="nav-item"> 
        <NavLink 
          exact to="/actors" className="nav-link" activeClassName="active">
           Actors
        </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

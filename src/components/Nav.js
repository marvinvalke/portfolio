import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className="hover">
          <li>Home</li>
        </NavLink>

        <li className="nav-portfolio">
          <NavLink to="/project-1" className="hover">
            <li>Portfolio</li>
          </NavLink>
          <ul className="nav-projects">
            <NavLink to="/project-1" className="hover">
              <li>Chasing Manish</li>
            </NavLink>
            <NavLink to="/project-2" className="hover">
              <li>WoD[i] WoD-Picker</li>
            </NavLink>
            <NavLink to="/project-3" className="hover">
              <li>Hal_O World</li>
            </NavLink>
            <NavLink to="/project-4" className="hover">
              <li>Smoovies</li>
            </NavLink>
            <NavLink to="/project-5" className="hover">
              <li>Coup 2 Pression</li>
            </NavLink>
          </ul>
        </li>

        <NavLink to="/contact" className="hover">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;

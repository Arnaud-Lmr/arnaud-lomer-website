/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div className="pageNav">
      <NavLink className="navLink" to="/">
        <h3>Arnaud Lomer</h3>
      </NavLink>
      <div className="links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navLink activeLink" : "navLink"
          }
          to="/"
        >
          Accueil
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "navLink activeLink" : "navLink"
          }
          to="/about"
        >
          A propos
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "navLink activeLink" : "navLink"
          }
          to="/skills"
        >
          Front-end skills
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "navLink activeLink" : "navLink"
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "navLink activeLink" : "navLink"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default PageNav;

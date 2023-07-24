import React from "react";
import { useContext } from "react";
import ThemeContext from "../Hooks/themeContext";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={"navbar-fixed"}>
      <nav
        className={`${theme} ${
          theme === "light" ? "blue lighten-4" : "blue darken-4"
        }`}
      >
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <i className="material-icons">devices</i>
          </Link>
          <button
            className="waves-effect waves-teal btn-flat"
            onClick={toggleTheme}
          >
            {theme === "light" ? "dark" : "light"}
          </button>

          <Link to="/resume" className="btn-flat waves-effect waves-light"> Résumé</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

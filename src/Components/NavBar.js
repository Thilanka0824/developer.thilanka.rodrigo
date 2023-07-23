import React from "react";
import { useContext } from "react";
import ThemeContext from "../Hooks/themeContext";
import "./NavBar.css";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={"navbar-fixed"}>
      <nav
        className={`${theme} ${
          theme === "light" ? "blue lighten-4" : "blue darken-4"
        }`}
      >
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            <i class="material-icons">devices</i>
          </a>
          <button
            className="waves-effect waves-teal btn-flat"
            onClick={toggleTheme}
          >
            {theme === "light" ? "dark" : "light"}
          </button>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../Hooks/themeContext';

const NavBar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className="navbar-fixed">
      <nav className=" light-green accent-3">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Logo
          </a>
          <button onClick={toggleTheme}>Toggle {theme} theme</button>
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
}

export default NavBar
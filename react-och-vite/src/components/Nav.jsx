import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logotype from "../../public/images/logotype.svg";
import dark from "../../public/images/logotype-dark.svg";
import hamburger from "../../public/images/icons/hamburger.svg";
import user from "../../public/images/icons/user.svg";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="main-nav" aria-label="main navigation">
      <NavLink to="#main" className="skip-link">
        skip to main content
      </NavLink>

      <div className="container">
        <NavLink to="/">
          <img className="show-light" src={logotype} alt="silicon logotype" />
          <img
            className="show-dark"
            src={dark}
            alt="silicon logotype dark mode"
          />
        </NavLink>

        <div className="darkmode-toggle">
          <p>Dark Mode</p>
          <label className="toggle">
            <input
              type="checkbox"
              id="darkmode-switch"
              checked={isDarkMode}
              onChange={handleDarkModeToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <button
          className={`menu-btn ${showMenu ? "active" : ""}`}
          aria-controls="main-menu"
          onClick={toggleMenu}
        >
          <img src={hamburger} alt="menu button" />
        </button>

        <ul
          id="main-menu"
          className={`main-menu ${showMenu ? "show" : "hide"}`}
        >
          <div className="nav-links">
            <li>
              <NavLink to="/features" className="nav-link">
                features
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                contact
              </NavLink>
            </li>
          </div>
          <li>
            <NavLink to="/sign-in" className="btn btn-primary">
              <img src={user} alt="sign-in or sign-up icon" />
              <span>sign in / up</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

import React, { useEffect, useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedThemeMode = localStorage.getItem("themeMode");
    if (
      storedThemeMode === "dark" ||
      (!storedThemeMode &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.detItem("themeMode", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      localStorage.detItem("themeMode", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <nav className="main-nav" aria-label="main navigation">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="container">
        <a href="/">
          <img
            className="show-light"
            src="images/logotype.svg"
            alt="Silicon logotype"
          />
          <img
            className="show-dark"
            src="images/logotype-dark.svg"
            alt="Silicon logotype"
          />
        </a>

        <div className="darkmode-toggle">
          <p>Dark Mode</p>
          <label className="toggle">
            <input
              type="checkbox"
              id="darkmode-switch"
              checked={isDarkMode}
              onChange={handleThemeToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <button
          className="menu-btn"
          aria-controls="main-menu"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <img src="images/icons/hamburger.svg" alt="" />
        </button>

        <ul id="main-menu" className="main-menu hide">
          <li>
            <a href="#" className="nav-link">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-primary">
              <img src="images/icons/user.svg" alt="" />
              <span>Sign in / up</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

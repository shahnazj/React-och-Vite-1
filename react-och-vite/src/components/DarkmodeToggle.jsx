import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme === "on") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (savedTheme === "off") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDarkScheme) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const themeChangeListener = (e) => {
      const prefersDark = e.matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
    };

    mediaQuery.addEventListener("change", themeChangeListener);

    return () => {
      mediaQuery.removeEventListener("change", themeChangeListener);
    };
  }, []);

  const handleToggle = (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "on");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "off");
    }
    setIsDarkMode(isChecked);
  };

  return (
    <div className="darkmode-toggle">
      <p>Dark Mode</p>
      <label className="toggle">
        <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />{" "}
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;

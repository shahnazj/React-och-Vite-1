import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbPaths = pathnames.map((_, index) => {
    return "/" + pathnames.slice(0, index + 1).join("/");
  });

  const formatPathname = (pathname) => {
    return pathname
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb-content">
        <li>
          <Link to="/" className="home-link">
            <Home className="home-icon" />
            <span>Home</span>
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name}>
              <span className="separator" aria-hidden="true">
                &raquo;
              </span>

              {isLast ? (
                <span className="current-page" aria-current="page">
                  {formatPathname(name)}
                </span>
              ) : (
                <Link to={breadcrumbPaths[index]} className="breadcrumb-link">
                  {formatPathname(name)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

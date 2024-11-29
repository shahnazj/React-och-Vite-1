import React from "react";

const SocialMedias = () => {
  return (
    <div className="socialmedia">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://facebook.com/silicon2"
        className="social-icon facebook"
        aria-label="Follow us on Facebook"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://x.com/silicon2"
        className="social-icon twitter"
        aria-label="Follow us on Twitter"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://instagram.com/silicon2"
        className="social-icon instagram"
        aria-label="Follow us on Instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://youtube.com/silicon2"
        className="social-icon youtube"
        aria-label="Follow us on Youtube"
      >
        <i className="fa-brands fa-youtube"></i>
      </a>
    </div>
  );
};

export default SocialMedias;

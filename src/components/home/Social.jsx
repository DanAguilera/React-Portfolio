import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/danaguileradev"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://dribbble.com/_dannyaguilera"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-dribbble"></i>
      </a>

      <a
        href="https://github.com/danaguilera"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;

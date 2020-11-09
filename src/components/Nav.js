import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "react-dark-mode-toggle";

const Nav = ({ setLibraryStatus, libraryStatus, setIsDark, isDark }) => {
  return (
    <div>
      <nav>
        <h1>Wavey</h1>
        <button
          className={`library-button ${
            isDark ? "library-button-dark-mode" : ""
          }`}
          onClick={() => setLibraryStatus(!libraryStatus)}
        >
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
        <DarkModeToggle onChange={setIsDark} checked={isDark} size={70} />
      </nav>
    </div>
  );
};
export default Nav;

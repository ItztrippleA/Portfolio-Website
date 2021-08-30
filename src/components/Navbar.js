import React, { useState } from "react";

function Navbar() {
  const [touch, setTouch] = useState(false);

  const handleClick = (e) => {
    // e.preventDefault();
    touch === false ? setTouch(true) : setTouch(false);
  };

  const toggle = (value) => {
    // value ? "nav__menu show_menu" : "nav__menu";
    if (value === true) {
      return "nav__menu show_menu";
    }
    return "nav__menu";
  };
  return (
    <div className="header" id="header">
      {/* <!-- react component navbar should be a div with nav className--> */}
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Adam
        </a>

        <div className={toggle(touch)} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item" onClick={handleClick}>
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <a href="#about " className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contactme
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            id="nav__close"
            onClick={handleClick}
          ></i>
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

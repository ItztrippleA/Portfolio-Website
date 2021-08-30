import React, { Component } from "react";
import SvgBlob from "./SvgBlob";
import About from "./About";
import Skills from "./Skills";

export class Body extends Component {
  render() {
    return (
      <div className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/abdullahi-adam/"
                  className="home__social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-linkedin-alt"></i>
                </a>
                <a
                  href="https://github.com/ItztrippleA"
                  className="home__social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-github-alt"></i>
                </a>
                <a
                  href="https://stackoverflow.com/users/15810739/abdullahi-adam"
                  className="home__social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-instagram"></i>
                </a>
              </div>
              <div className="home__img">
                <SvgBlob />
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi, I'am Adam</h1>
                <h3 className="home__subtitle">Software Engineer</h3>
                <p className="home__description">
                  High level experience in web design knowledge, producing
                  quality work.
                </p>
                <a href="#contact" className="button button--flex">
                  Contact Me <i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                <span className="home__scroll-name">Scroll down</span>
                <i class="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>
        <About />
        <Skills />
      </div>
    );
  }
}

export default Body;

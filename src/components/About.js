import React, { Component } from "react";
import ado from "../assets/img/Ado.jpg";
import Alexa from "../assets/pdf/AlexaCv.pdf";

export default class About extends Component {
  render() {
    return (
      <section className="about section" id="about">
        <h2 className="section__title">About Me </h2>
        <span className="section__subtitle">My Introduction</span>
        <div class="about__container container grid">
          <img src={ado} alt="" class="about__img" />
          <div class="about_data">
            <p class="about_description">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work.
            </p>
            <div class="about__info">
              <div>
                <span class="about__info-title">07+</span>
                <span class="about__info-name">
                  Years <br /> Experience
                </span>
              </div>
              <div>
                <span class="about__info-title">20+</span>
                <span class="about__info-name">
                  Completed <br /> Project
                </span>
              </div>
              <div>
                <span class="about__info-title">04+</span>
                <span class="about__info-name">
                  Companies <br /> Worked
                </span>
              </div>
            </div>
            <div class="about__buttons">
              <a download="" href={Alexa} class="button button--flex">
                Download CV<i class="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

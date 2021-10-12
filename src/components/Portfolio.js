import React from "react";
import screen from "../assets/img/shot.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import ado from "../assets/img/Ado.jpg";

SwiperCore.use([Navigation, Pagination]);

const Portfolio = () => {
  return (
    <section class="portfolio section" id="portfolio">
      <h2 class="section__title">Portfolio</h2>
      <span class="section__subtitle"> Most recent work</span>

      <div class="portfolio__container container">
        <div>
          {/* portfolio 1 */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <div class="portfolio__content grid">
                <img src={screen} alt="" class="portfolio__img" />
                <div class="portfolio__data">
                  <h3 class="portfolio__title">Modern Website</h3>
                  <p class="portfolio__description">
                    Website adaptable to all devices, with and animated
                    interactions.
                  </p>
                  <a class="button button--flex button--small portfolio__button">
                    Demo
                    <i class="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="portfolio__content grid">
                <img src={screen} alt="" class="portfolio__img" />
                <div class="portfolio__data">
                  <h3 class="portfolio__title">Modern Website</h3>
                  <p class="portfolio__description">
                    Website adaptable to all devices, with and animated
                    interactions.
                  </p>
                  <a class="button button--flex button--small portfolio__button">
                    Demo
                    <i class="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="portfolio__content grid">
                <img src={screen} alt="" class="portfolio__img" />
                <div class="portfolio__data">
                  <h3 class="portfolio__title">Modern Website</h3>
                  <p class="portfolio__description">
                    Website adaptable to all devices, with and animated
                    interactions.
                  </p>
                  <a class="button button--flex button--small portfolio__button">
                    Demo
                    <i class="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="portfolio__content grid">
                <img src={screen} alt="" class="portfolio__img" />
                <div class="portfolio__data">
                  <h3 class="portfolio__title">Modern Website</h3>
                  <p class="portfolio__description">
                    Website adaptable to all devices, with and animated
                    interactions.
                  </p>
                  <a class="button button--flex button--small portfolio__button">
                    Demo
                    <i class="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <section class="project section">
            <div class="project__bg">
              <div class="project__container container grid">
                <div class="project__data">
                  <h2 class="project__title">You have a new project</h2>
                  <p class="project__description">
                    Contact me now and get a 30% discoun
                  </p>
                  <a href="#contact" class="button button--flex button--white">
                    Contact Me
                    <i class="uil uil-message project_icon button__icon"></i>
                  </a>
                </div>
                <img src={ado} alt="" class="about__img" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

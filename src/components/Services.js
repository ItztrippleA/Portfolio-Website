import React from "react";

export const Services = () => {
  return (
    <section class="services section" id="services">
      <h2 class="section__title">Services</h2>
      <span class="section__subtitle">What i offer</span>
      <div class="services__container container grid">
        {/* <--==**===*==*========E SERVICES 1 ====***==*********** */}
        <div class="services__content">
          <div>
            <i class="uil uil-web-grid services__icon"></i>
            <h3 class="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>
          <span class="button button--flex button--small button--link services__button">
            View More
            <i class="uil uil-arrow-right button__icon"></i>
          </span>

          <div class="services__modal">
            <div class="services__modal-content">
              <h4 class="services__modal-title">
                Ui/Ux <br /> Designer
              </h4>
              <i class="uil uil-times services__modal-close"></i>
              <ul class="services modal-services grid">
                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <--==**===*==*========E SERVICES 2 ====***==*********** */}
        <div class="services__content">
          <div>
            <i class="uil uil-arrow services__icon"></i>
            <h3 class="services__title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span class="button button--flex button--small button--link services__button">
            View More
            <i class="uil uil-arrow-right button__icon"></i>
          </span>

          <div class="services__modal">
            <div class="services__modal-content">
              <h4 class="services__modal-title">
                FrontEnd <br /> Developer
              </h4>
              <i class="uil uil-times services__modal-close"></i>
              <ul class="services modal-services grid">
                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <--==**===*==*========E SERVICES 3 ====***==*********** */}
        <div class="services__content">
          <div>
            <i class="uil uil-pen services__icon"></i>
            <h3 class="services_title">
              Branding <br /> Designer
            </h3>
          </div>

          <span class="button button--flex button--small button--link services__button">
            View More
            <i class="uil uil-arrow-right button__icon"></i>
          </span>

          <div class="services__modal">
            <div class="services__modal-content">
              <h4 class="services__modal-title">
                Branding <br /> Design
              </h4>
              <i class="uil uil-times services__modal-close"></i>
              <ul class="services modal-services grid">
                <li class="services__modal-service">
                  <i class="uil uil-check-circle services modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <--==**===*==*========E SERVICES 3 ====***==*********** */}
        <div class="services__content">
          <div>
            <i class="uil uil-pen services__icon"></i>
            <h3 class="services__title">
              Game <br /> Developer
            </h3>
          </div>

          <span class="button button--flex button--small button--link services__button">
            View More
            <i class="uil uil-arrow-right button__icon"></i>
          </span>

          <div class="services__modal">
            <div class="services__modal-content">
              <h4 class="services__modal-title">
                Game <br /> Design
              </h4>
              <i class="uil uil-times services__modal-close"></i>
              <ul class="services modal-services grid">
                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li class="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

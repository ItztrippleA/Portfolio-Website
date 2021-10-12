import React from "react";

const ContactMe = () => {
  return (
    <section class="contact section" id="contact">
      <h2 class="section__title">Contact Me</h2>
      <span class="section__subtitle">Get in touch</span>

      <div class="contact__container container grid">
        <div>
          <div class="contact information">
            <i class="uil uil-phone contact__icon"></i>
            <div>
              <h3 class="contact__title">Call Me</h3>
              <span class="contact__subtitle">999-777-666</span>
            </div>
          </div>

          <div class="contact information">
            <i class="uil uil-phone contact__icon"></i>
            <div>
              <h3 class="contact__title">Call Me</h3>
              <span class="contact__subtitle">999-777-666</span>
            </div>
          </div>

          <div class="contact information">
            <i class="uil uil-phone contact__icon"></i>
            <div>
              <h3 class="contact__title">Call Me</h3>
              <span class="contact__subtitle">999-777-666</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

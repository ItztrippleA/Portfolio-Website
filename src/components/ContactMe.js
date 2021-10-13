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

        <form action="" class="contact_form grid">
          <div class="contact__inputs grid">
            <div class="contact content">
              <label for="" class="contact label">
                Name
              </label>
              <input type="text" class="contact__input" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;

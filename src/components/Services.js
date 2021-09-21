import React from "react";
import Service from "./Service";
import { services_Rendered } from "../data";

export const Services = () => {
  return (
    <section class="services section" id="services">
      <h2 class="section__title">Services</h2>
      <span class="section__subtitle">What i offer</span>
      <div class="services__container container grid">
        {/* <--==**===*==*========E SERVICES 1 ====***==*********** */}
        {services_Rendered.map((item, i) => {
          return <Service item={item} key={i} />;
        })}
        {/* <--==**===*==*========E SERVICES 2 ====***==*********** */}
      </div>
    </section>
  );
};

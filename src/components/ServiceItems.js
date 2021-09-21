import React, { useState } from "react";

const ServiceItems = ({ item, handleToggleOn }) => {
  return (
    <div className="services__modal" onClick={handleToggleOn}>
      <div className="services__modal-content">
        <h4 className="services__modal-title">
          {/* title */}
          {item.title} <br /> {item.subtitle}
        </h4>
        <i
          class="uil uil-times services__modal-close"
          onClick={handleToggleOn}
        ></i>
        <ul class="services modal-services grid">
          {/* wah i do  */}
          {item.skillUnder.map((item, i) => {
            return (
              <li class="services__modal-service" key={i}>
                <i class="uil uil-check-circle services__modal-icon"></i>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServiceItems;

import { useState } from "react";
import Modal from "react-modal";
import ServiceItems from "./ServiceItems";

const Service = ({ item }) => {
  const [openModal, setopenModal] = useState(false);

  const handleToggleOn = () => {
    setopenModal(false);
    console.log(openModal);
  };

  return (
    <div className="services__content">
      <div>
        <i className="uil uil-web-grid services__icon"></i>
        <h3 className="services__title">
          {/* title */}
          {item.title} <br /> {item.subtitle}
        </h3>
      </div>
      <span
        className="button button--flex button--small button--link services__button"
        onClick={() => {
          setopenModal(true);
        }}
      >
        View More
        <i class="uil uil-arrow-right button__icon"></i>
      </span>

      {openModal ? (
        <ServiceItems item={item} handleToggleOn={handleToggleOn} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Service;

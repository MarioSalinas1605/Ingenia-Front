import React from "react";
import "../../assets/styles/components/PlaceCard.scss";
import ubicationIcon from "../../assets/icons/icon_places.png";

const PlaceCard = ({ city, direction }) => {
  return (
    <div className={direction}>
      <section className="place-card-title-section">
        <h6 className="place-card-title">{city.namePlace}</h6>
        <img
          className="place-card-image"
          src={ubicationIcon}
          alt="Ubication icon"
        />
      </section>
      <section className="place-card-information-section">
        <p className="place-card-address">{city.address}</p>
        <p className="place-card-description">{city.description}</p>
      </section>
    </div>
  );
};

export default PlaceCard;

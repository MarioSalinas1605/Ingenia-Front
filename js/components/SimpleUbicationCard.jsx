import React from "react";
import "../../assets/styles/components/SimpleUbicationCard.scss";

let SimpleUbicationCard = ({ data }) => {
  return (
    <div className="simple-ubication-card-container">
      <h5>{data.country}</h5>
      <p>
        {data.address}
        <br />
        {data.phone}
      </p>
    </div>
  );
};

export default SimpleUbicationCard;

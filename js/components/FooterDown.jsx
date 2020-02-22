import React from "react";
import "../../assets/styles/components/FooterDown.scss";
import SimpleUbicationCard from "./SimpleUbicationCard.jsx";

let FooterDown = () => {
  let ubications = {
    USA: {
      country: "USA",
      address: "1200 18th Street, NW Suite 700 Washington DC 20036 USA",
      phone: "50220900"
    },
    MX: {
      country: "MÈXICO",
      address: "Anatole France 311 Polanco Miguel Hidalgo 11560 México D.F. ",
      phone: "50220900"
    }
  };
  return (
    <div className="footer-down-container">
      <div className="footer-down-cards-container">
        <SimpleUbicationCard data={ubications.USA}></SimpleUbicationCard>
        <SimpleUbicationCard data={ubications.MX}></SimpleUbicationCard>
      </div>
      <div className="footer-down-right-elements">
        <h3>Here will go my right elements</h3>
      </div>
    </div>
  );
};

export default FooterDown;

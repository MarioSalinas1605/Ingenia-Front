import React from "react";
import "../../assets/styles/components/ContactCard.scss";

const ContactCard = props => {
  return (
    <div className="card">
      {/* <h1>This a card {props.cardInfo}</h1> */}
      <img className="bgImageCard" src={props.bg} alt="Backgorund of city" />
      <div className="infoCard">
        <h1>{props.cardInfo.city}</h1>
        <section className="adressCard">
          <div className="mainAdress">{props.cardInfo.address}</div>
          <span className="secondAdress">
            {props.cardInfo.addressSecondPart}
          </span>
          <div className="phone">{props.cardInfo.phone}</div>
        </section>
      </div>
    </div>
  );
};

export default ContactCard;

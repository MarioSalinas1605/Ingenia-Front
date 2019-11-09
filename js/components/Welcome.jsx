import React from "react";
import Header from "./Header.jsx";
import ContactCard from "./ContactCard.jsx";
import "../../assets/styles/components/Welcome.scss";
import bgMexico from "../../assets/bg/bg_mexico_city.png";
import bgWashington from "../../assets/bg/bg_washington.png";

const Welcome = () => {
  const cards = [
    {
      id: 1,
      city: "Mexico City",
      address: "Anatole France 311",
      addressSecondPart: "Polanco Miguel Hidalgo, 11560 México DF",
      phone: "50 22 09 00"
    },
    {
      id: 2,
      city: "Washington D.C.",
      address: "1200 18TH Street, nw",
      addressSecondPart: "Suite 700 Washinton DC 20036 USA",
      phone: "50 22 09 00"
    }
  ];
  return (
    <section className="welcome">
      <div className="welcome-header">
        <Header />
      </div>
      <div className="welcome-card">
        <ContactCard cardInfo={cards[0]} bg={bgMexico} />
      </div>
      <div className="welcome-card">
        <ContactCard cardInfo={cards[1]} bg={bgWashington} />
      </div>
    </section>
  );
};

export default Welcome;

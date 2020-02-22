import React from "react";
import FooterUp from "../components/FooterUp.jsx";
import Footerdown from "../components/FooterDown.jsx";
import "../../assets/styles/components/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <FooterUp></FooterUp>
      <Footerdown></Footerdown>
    </div>
  );
};
export default Footer;

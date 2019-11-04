import React from "react";
import logo from "../../assets/logo_ingenia.png";
import "../../assets/styles/components/Headers.scss";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo of Ingenia" />
      <ul>
        <li>about us</li>
        <li>our work</li>
        <li>contact</li>
        <li>manifiesto</li>
      </ul>
    </header>
  );
};

export default Header;

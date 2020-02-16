import React from "react";
import logo from "../../assets/logo_ingenia.png";
import "../../assets/styles/components/Headers.scss";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo of Ingenia" />
      <ul className="ul-header">
        <li className="li-header">about us</li>
        <li className="li-header">our work</li>
        <li className="li-header">contact</li>
        <li className="li-header">manifiesto</li>
      </ul>
    </header>
  );
};

export default Header;

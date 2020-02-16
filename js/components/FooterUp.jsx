import React from "react";
import "../../assets/styles/components/FooterUp.scss";

const FooterUp = () => {
  return (
    <section className="footer-up">
      <p className="footer-up-rights">©2017 Ingenia Group</p>
      <ul className="footer-up-buttons">
        <li className="footer-up-li">About Us</li>
        <li className="footer-up-li">Our Work</li>
        <li className="footer-up-li">Blog</li>
        <li className="footer-up-li">Jobs</li>
        <li className="footer-up-li">Contact</li>
      </ul>
    </section>
  );
};

export default FooterUp;

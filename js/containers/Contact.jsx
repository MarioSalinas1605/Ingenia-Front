import React from "react";
import Welcome from "../components/Welcome";
import ContactUs from "./ContactUs.jsx";
import Places from "./Places.jsx";
import Footer from "./Footer.jsx";
import "../../assets/styles/App.scss";

const Contact = () => {
  return (
    <React.Fragment>
      <Welcome />
      <ContactUs />
      <Places />
      <Footer />
    </React.Fragment>
  );
};

export default Contact;

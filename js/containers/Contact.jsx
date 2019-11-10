import React from "react";
import Welcome from "../components/Welcome";
import ContactUs from "./ContactUs.jsx";
import "../../assets/styles/App.scss";

const Contact = () => {
  return (
    <React.Fragment>
      <Welcome />
      <ContactUs />
    </React.Fragment>
  );
};

export default Contact;

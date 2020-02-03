import React from "react";
import ContactBanner from "../components/ContactBanner.jsx";
import ContactForm from "../components/ContactForm.jsx";
import CenterWrapper from "./CenterWrapper.jsx";

class ContactUs extends React.Component {
  render() {
    return (
      <section>
        <ContactBanner />
        <CenterWrapper>
          <ContactForm />
        </CenterWrapper>
      </section>
    );
  }
}

export default ContactUs;

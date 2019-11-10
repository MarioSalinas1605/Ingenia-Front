import React from "react";
import ContactBanner from "../components/ContactBanner.jsx";
import ContactForm from "../components/ContactForm.jsx";

class ContactUs extends React.Component {
  render() {
    return (
      <section>
        <ContactBanner />
        <ContactForm />
      </section>
    );
  }
}

export default ContactUs;

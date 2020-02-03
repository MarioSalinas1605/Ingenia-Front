import React from "react";
import "../../assets/styles/components/ContactForm.scss";

const ContactForm = props => {
  return (
    <form>
      <div className="fieldsRow">
        <div className="twoFieldsItem">
          <p className="requiredTag">*Required filed</p>
          <label className="numberIcon">1</label>
          <input
            className="inputTwoFieldsItem"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="twoFieldsItem">
          <input
            className="inputTwoFieldsItem"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="twoFieldsRow">
        <div className="twoFieldsItem">
          <label className="numberIcon">2</label>
          <input
            className="inputTwoFieldsItem"
            type="text"
            placeholder="E-mail"
          />
        </div>
        <div className="twoFieldsItem">
          <input
            className="inputTwoFieldsItem"
            type="text"
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="oneFieldsRow">
        <label className="numberIcon">3</label>
        <label className="labelForm">
          Tell us about youy challenge or oportunity
        </label>
        <input className="bigFormInput" type="text" />
      </div>
      <div className="buttonRow">
        <button className="buttonForm">send</button>
      </div>
    </form>
  );
};

export default ContactForm;

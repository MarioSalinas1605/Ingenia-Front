import React from "react";
import "../../assets/styles/components/VisitSelector.scss";

const VisitSelector = props => {
  return (
    <div className="visitSelectorContainer">
      <p>
        <span>Coming to visit us?</span> Here are some of our favorite places
        around the town to
      </p>
      <select
        className="visitSelect"
        value={props.selectDefaultOption}
        onChange={props.handleChange}
      >
        <option value="read">A quiet place to read a book</option>
        <option value="party">A crazy party</option>
      </select>
    </div>
  );
};

export default VisitSelector;

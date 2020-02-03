import React from "react";
import "../../assets/styles/components/CenterWrapper.scss";

const CenterWrapper = props => {
  return (
    <div className="wrapperContainer">
      <div className="centerContainer">{props.children}</div>
    </div>
  );
};

export default CenterWrapper;

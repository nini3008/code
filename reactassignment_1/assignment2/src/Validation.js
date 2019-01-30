import React from "react";

const Validation = props => {
  let validationMessage = "text is too short";
  if (props.inputLength > 5) {
    validationMessage = "text is long enough";
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default Validation;

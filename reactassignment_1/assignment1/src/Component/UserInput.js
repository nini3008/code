import React from "react";

const UserInput = props => {
  return (
    <div>
      <input type="text" onChange={props.handleInput} />
    </div>
  );
};

export default UserInput;

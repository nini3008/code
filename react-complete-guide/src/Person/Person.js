import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and {props.age} years old
        {props.children}
      </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;

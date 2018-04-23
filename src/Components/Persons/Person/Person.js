import React from "react";
import Class from "./Person.css";

const person = (props) => {
    const inputStyle = {
      textAlign: "center",
      padding: "4px",
      margin: "10px"
    };

    return (
      <div className={Class.Person}>
        <h4 onClick={props.click}>
          {" "}
          I'm a {props.name} and I'm {props.age} old
        </h4>
        <input
          style={inputStyle}
          onChange={props.changed}
          value={props.name}
          type="text"
        />
        <input
          style={inputStyle}
          onChange={props.changedAge}
          value={props.age}
          type="number"
        />
      </div>
    );
  }

export default person;

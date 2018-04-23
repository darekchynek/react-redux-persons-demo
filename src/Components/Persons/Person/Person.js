import React from "react";
import Class from "./Person.css";

const person = (props) => {
    const inputStyle = {
      textAlign: "center",
      padding: "4px",
      margin: "10px"
    };

    return <div className={Class.Person}>
        <h4>
          {" "}
          {props.name}, {props.age} old, Role: {props.role}
        </h4>
        <input style={inputStyle} onChange={props.changed} value={props.name} type="text" />
        <input style={inputStyle} onChange={props.changedAge} value={props.age} type="number" />
        <button type="button" className="btn btn-danger" onClick={props.click}>
          Delete
        </button>
      </div>;
  }

export default person;

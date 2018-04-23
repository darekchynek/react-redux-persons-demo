import React from "react";
import Class from "./Admin.css";
import AdminImg from "../../../../assets/admin.png";

const admin = props => {
  return <div className={Class.Admin + " row"}>
        <img src={AdminImg} alt="Admin Img" className={Class.photo} />
      <div className={Class.info}>
        <h3>Name: {props.name}</h3>
        <h4>Age: {props.age}</h4>
      </div>
    </div>;
};

export default admin;

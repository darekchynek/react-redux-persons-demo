import React from "react";
import Class from "./Admin.css";
import AdminImg from "../../../../assets/admin.png";

const admin = props => {
  return <div className={Class.Admin + " row"}>
      <div className="col-sm-4">
        <img src={AdminImg} alt="Admin Img" className={Class.photo} />
      </div>
      <div className="col-sm-8" style={{ textAlign: "left" }}>
        <h3>Name: {props.name}</h3>
        <h4>Age: {props.age}</h4>
      </div>
    </div>;
};

export default admin;

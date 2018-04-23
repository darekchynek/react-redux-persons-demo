import React from "react";
import Class from "./AdminsView.css";

const adminsView = props => {
  return (
    <div className={Class.admin}>
      <h1 className={Class.h1Users}>Administrators</h1>
      <p>This is list of administrators</p>
    </div>
  );
};

export default adminsView;

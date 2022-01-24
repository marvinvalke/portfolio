import React from "react";
import { NavLink } from "react-router-dom";

function ButtonBottom(props) {
  return (
    <div className="scroll-bottom">
      <div className="sb-main">
        {props.left && (
          <NavLink to={props.left} className="left hover">
            <p className="center">Go back</p>
          </NavLink>
        )}
        {props.right && (
          <NavLink to={props.right} className="right hover">
            <p className="center">Go next</p>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default ButtonBottom;

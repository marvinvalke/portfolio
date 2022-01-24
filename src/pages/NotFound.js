import React from "react";
import ButtonBottom from "../components/ButtonBottom";
import Mouse from "../components/Mouse";

const NotFound = () => {
  return (
    <div className="home">
      <Mouse />
      <div className="home-main">
        <div className="main-content">
          <h2>404 PAGE NOT FOUND</h2>
        </div>
        <ButtonBottom left={"/"} />
      </div>
    </div>
  );
};

export default NotFound;

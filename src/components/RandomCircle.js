import React from "react";

function RandomCircle() {
  let left = Math.floor(Math.random() * 200 + 700) + "px";
  let top = Math.floor(Math.random() * 200 + 150) + "px";
  let size = "scale (" + (Math.random() + 0.7) + ")";
  return <span
  className="random-circle"
  style={{ left, top, transforom: size }}
></span>;
}

export default RandomCircle;

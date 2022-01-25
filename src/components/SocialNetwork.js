import React from "react";
import Cv from "../assets/img/Marvin_Valke_CV_En.pdf";
function SocialNetwork() {
  function anim() {
    let navLinks = document.querySelectorAll(".social-network a");
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", (elem) => {
        let xAxis = elem.offsetX - 20;
        let yAxis = elem.offsetY - 10;
        link.style.transform = `translate(${xAxis}px , ${yAxis}px)`;
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = ``;
      });
    });
  }
  return (
    <div className="social-network">
      <ul>
        <a
          onMouseOver={anim}
          href="https://www.linkedin.com/in/marvin-valke-web-dev-fullstack/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-linkedin"></i>
          </li>
        </a>
        <a
          onMouseOver={anim}
          href="https://github.com/marvinvalke"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-github"></i>
          </li>
        </a>
        <a onMouseOver={anim} href={Cv} download="marvin_valke_resume" className="hover">
          <li>
            <i className="fas fa-file"></i>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default SocialNetwork;

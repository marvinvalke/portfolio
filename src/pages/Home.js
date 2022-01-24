import React from "react";
import DynamicText from "../components/DynamicText";
import Nav from "../components/Nav";
import SocialNetwork from "../components/SocialNetwork";
import ButtonBottom from "../components/ButtonBottom";
import RandomCircle from "../components/RandomCircle";


function Home() {
  return (
    <div className="home">
      <Nav />
      <SocialNetwork />
      <RandomCircle />
      <div className="home-main">
        <div className="main-content">
          <h1>Marvin Valke</h1>
          <h2>
            <DynamicText />
          </h2>
        </div>
        <ButtonBottom right={"/project-1"}/>
      </div>
    </div>
  );
}

export default Home;

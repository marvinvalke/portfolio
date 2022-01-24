import React from "react";
import ButtonBottom from "../components/ButtonBottom";
import Nav from "../components/Nav";
import Project from "../components/Project";
import RandomCircle from "../components/RandomCircle";

export const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Nav />
        <Project projectNumber={0} />
        <RandomCircle />
        <ButtonBottom left={"/"} right={"/project-2"} />
      </div>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <div className="project">
        <Nav />
        <Project projectNumber={1} />
        <RandomCircle />
        <ButtonBottom left={"/project-1"} right={"/project-3"} />
      </div>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      <div className="project">
        <Nav />
        <Project projectNumber={2} />
        <RandomCircle />
        <ButtonBottom left={"/project-2"} right={"/project-4"} />
      </div>
    </main>
  );
};

export const Project4 = () => {
  return (
    <main>
      <div className="project">
        <Nav />
        <Project projectNumber={3} />
        <RandomCircle />
        <ButtonBottom left={"/project-3"} right={"/project-5"} />
      </div>
    </main>
  );
};

export const Project5 = () => {
  return (
    <main>
      <div className="project">
        <Nav />
        <Project projectNumber={4} />
        <RandomCircle />
        <ButtonBottom left={"/project-4"} right={"/contact"} />
      </div>
    </main>
  );
};

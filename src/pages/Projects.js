import React from "react";
import ButtonBottom from "../components/ButtonBottom";
import Nav from "../components/Nav";
import Project from "../components/Project";

export const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Nav />
        <Project projectNumber={0} />
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
        <ButtonBottom left={"/project-4"} right={"/contact"} />
      </div>
    </main>
  );
};

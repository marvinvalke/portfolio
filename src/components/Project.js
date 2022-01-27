import { useState } from "react";
import { projectsData } from "../data/projectsData";

function Project(props) {
  const [currentProject] = useState(projectsData);
  const project = currentProject[props.projectNumber];

  return (
    <div className="project-main">
      <div className="project-content">
        <h1>{project.title}</h1>
        <p className="date">{project.date}</p>
        <ul className="languages">
          {project.languages.map((elem) => {
            return <li key={elem}>{elem}</li>;
          })}
        </ul>
      </div>
      <div className="img-content">
        <div className="img-container hover">
          <span>
            <h3>{project.title}</h3>
            <p> {project.infos}</p>
          </span>
          <img src={project.img} alt={project.title}></img>
        </div>
        <div className="button-container">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <span className="button">Voir le site</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

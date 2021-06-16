import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <span className="project-list">
        <div className="project">
          <h5>Fancrop</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>

        <div className="project">
          <h5>Lumnergy</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>

        <div className="project">
          <h5>Aeydar</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
        </div>
      </span>
    </div>
  );
};

export default Projects;

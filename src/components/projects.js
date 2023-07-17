import React from "react";
import "../styles/projects.css";

const projectlist = [
  {
    name: "#Aeydar",
    description: `Find healthcare closest to you`,
    technologies: ["Postgres", "Express", "React", "Redux", "serverless"],
    url: "https://aeydar.netlify.app",
  },
  {
    name: "#Bundans",
    description: ` Scale small medium size businesses with simple but powerful invoices that
    turn customers into patrons.`,
    technologies: ["React", "Redux", "Postgres", "Express", "Sequelize"],
    url: "https://bundans.netlify.app",
  },
  {
    name: "#WebVr Demo",
    description: ` A virtual reality demo to showcase how objects can be viewed in vr`,
    technologies: ["Html", "javaScript", "Aframe"],
    url: "https://webblaster.github.io/demo_vr",
  },
  {
    name: "#Spendbox",
    description: `Software infrastructure for small and medium businesses`,
    technologies: ["React", "Redux", "Express", "Sequelize", "Postgres", "AWS"],
    url: "https://spendbox.ng",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <span className="project-list">
        {projectlist.map((project) => {
          return (
            <div className="project" key={project.name}>
              <h5>{project.name}</h5>
              <p>{project.description}</p>

              <div className="technologies">
                {project.technologies.map((tech) => {
                  return <p key={tech}>{tech}</p>;
                })}
              </div>
              <a target="_blank" rel="noreferrer" href={project.url}>
                See Live Project
              </a>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Projects;

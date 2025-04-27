import React from "react";
import "../styles/projects.css";
import aeydar from "../assets/aeydar.png";
import bundans from "../assets/bundans.png";
//import hearty from "../assets/hearty.png";
import vr from "../assets/vr.png";
import path from "../assets/path.png";

const projectlist = [
  {
    name: "Path",
    image: path,
    description: `Build a network of loyal and valuable customers`,
    technologies: [],
    url: "https://path.ng",
  },
  {
    name: "Aeydar",
    image: aeydar,
    description: `Find healthcare closest to you`,
    technologies: [],
    url: "https://aeydar.netlify.app",
  },
  {
    name: "Bundans",
    image: bundans,
    description: ` Scale small medium size businesses with simple but powerful invoices that
    turn customers into patrons.`,
    technologies: [],
    url: "https://bundans.netlify.app",
  },
  {
    name: "WebVr Demo",
    image: vr,
    description: ` A virtual reality demo to showcase how objects can be viewed in vr`,
    technologies: [],
    url: "https://webblaster.github.io/demo_vr",
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
              <img src={project.image} alt={`${project.name}`} />
              <p>{project.description}</p>

              <div className="technologies">
                {project.technologies.map((tech) => {
                  return <p key={tech}>{tech}</p>;
                })}
              </div>
              <a target="_blank" rel="noreferrer" href={project.url}>
                See Project
              </a>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Projects;

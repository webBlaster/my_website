import React from "react";
import "../styles/projects.css";
import aeydar from "../assets/aeydar.png";
import vr from "../assets/vr.png";
import syndicate from "../assets/syndicatebio.jpeg";
import glomehealth from "../assets/glomehealth.jpeg";
import resonna from "../assets/resonna.jpeg";

const projectlist = [
  {
    name: "SyndicateBio Dashboard",
    image: syndicate,
    description: `Dashboard for SyndicateBio, to automate and manage processes for Doctors, Test Centers, Admins and Patients.`,
    technologies: [],
    url: "https://directbysb-dashboard-xeuljowsha-ue.a.run.app/",
  },
  {
    name: "Aeydar",
    image: aeydar,
    description: `Find healthcare closest to you`,
    technologies: [],
    url: "https://aeydar.netlify.app",
  },
  {
    name: "Resonna",
    image: resonna,
    description: `Information website for investors and clients of Resonna`,
    technologies: [],
    url: "https://resonna.com",
  },
  {
    name: "Glome Health",
    image: glomehealth,
    description: `Landing page for Glome Health`,
    technologies: [],
    url: "https://glome-staging.netlify.app/",
  },

  {
    name: "WebVr Experience",
    image: vr,
    description: ` A virtual reality demo to showcase how objects can be viewed in vr`,
    technologies: [],
    url: "https://webblaster.github.io/demo_vr",
  },
];

const Projects = () => {
  return (
    <div className="projects animate-on-scroll animate__animated">
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

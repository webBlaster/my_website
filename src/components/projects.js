import React from "react";
import "../styles/projects.css";

const projectlist = [
  {
    name: "#Bundans",
    description: ` Scale with simple but powerful invoices that
    turn customers into patrons.`,
    technologies: ["React", "Redux", "Postgres", "Express", "Sequelize"],
    url: "https://pealeap.netlify.app",
  },
  {
    name: "#Aeydar",
    description: `Web app that list hospitals using geolocation and provide
  information about them within a radius of your current location`,
    technologies: ["Postgres", "Express", "React", "Redux"],
    url: "https://aeydar.com",
  },
  {
    name: "#Fancrop",
    description: ` A web app that allows content creators receive support from
    consumers, friends & others in form of small donations, shares etc.
    (Its similar to patreon)`,
    technologies: ["Postgres", "Elasticsearch", "Flask", "React", "Redux"],
    url: "https://fancrop.com",
  },
  {
    name: "#Match Reveal",
    description: `A subscription based sport prediction software as a service`,
    technologies: ["Mysql", "PHP", "Angularjs"],
    url: "https://matchreveal.herokuapp.com",
  },
  {
    name: "#Match Reveal",
    description: `web app for diagnosing symptoms and returning probable causes`,
    technologies: ["React", "Express", "Mongodb", "Elasticsearch", "Redis"],
    url: "https://symp-diagnosis.netlify.app/",
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

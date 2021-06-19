import React from "react";
import "../styles/projects.css";

const projectlist = [
  {
    name: "#Fancrop",
    description: ` A web app that allows content creators receive support from
    consumers, friends & others in form of small donations, shares etc.
    (Its similar to patron)`,
    technologies: [
      "Postgres",
      "Elasticsearch",
      "Flask",
      "React",
      "Redux",
    ],
    url: "https://fancrop.com",
  },
  {
    name: "#Lumnergy",
    description: ` Lumnergy is a power solutions company that looks to tackle the power
  problems faced by the everyday consumer and help them reach their
  required power related goals at a reasonable cost.`,
    technologies: ["Postgres", "React", "Redux"],
    url: "https://lumnergy.netlify.com",
  },
  {
    name: "#Aeydar",
    description: `Web app that list hospitals using geolocation and provide
  information about them within a radius of your current location`,
    technologies: ["Postgres", "Node", "Express", "React", "Redux"],
    url: "https://aeydar.com",
  },
  {
    name: "#Match Reveal",
    description: `Web app that list hospitals using geolocation and provide
  information about them within a radius of your current location`,
    technologies: ["Mysql", "PHP", "Angularjs"],
    url: "https://matchreveal.herokuapp.com",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <span className="project-list">
        {projectlist.map((project) => {
          return (
            <div className="project">
              <h5>{project.name}</h5>
              <p>{project.description}</p>

              <div className="technologies">
                {project.technologies.map((tech) => {
                  return <p>{tech}</p>;
                })}
              </div>
              <a href={project.url}>See Live Project</a>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Projects;

import React from "react";
import "../styles/experience.css";

const Experience = () => {
  let experienceList = [
    {
      name: "Mirapayments",
      role: "Frontend Engineer",
      summary: ``,
      technologies: ["React", "Redux", "Jest", "Cypress", "AWS", "Gitlab"],
    },
    {
      name: "Aeydar",
      role: "JavaScript Engineer",
      summary: ``,
      technologies: ["React", "Redux", "Node.js", "Postgres", "Github", "GCP"],
    },
    {
      name: "Goshen Point Diagnostics",
      role: "JavaScript Engineer",
      summary: ``,
      technologies: ["Postgres", "Elasticsearch", "Flask", "React", "Redux"],
    },
    {
      name: "Unigold",
      role: "Backend Engineer",
      summary: ``,
      technologies: ["Node.js", "Express", "Mongodb", "Github", "Heroku"],
    },
  ];
  return (
    <div className="experiences">
      <h1>Experience</h1>
      <span className="experience-list">
        {experienceList.map((experience) => {
          return (
            <div className="experience" key={experience?.name}>
              <h5>{experience?.name}</h5>
              <h4>{experience?.role}</h4>
              <p>{experience?.summary}</p>

              <div className="technologies">
                {experience.technologies.map((tech) => {
                  return <p key={tech}>{tech}</p>;
                })}
              </div>
              {/* <hr /> */}
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Experience;

import React from "react";
import "../styles/experience.css";

const Experience = () => {
  let experienceList = [
    {
      name: "Mirapayments",
      role: "Frontend Engineer",
      summary: ``,
    },
    {
      name: "Aeydar",
      role: "JavaScript Engineer",
      summary: ``,
    },
    {
      name: "Goshen Point Diagnostics",
      role: "JavaScript Engineer",
      summary: ``,
    },
    {
      name: "Unigold",
      role: "Backend Engineer",
      summary: ``,
    },
  ];
  return (
    <div className="experiences animate-on-scroll animate__animated">
      <h1>Work Experience</h1>
      <span className="experience-list">
        {experienceList.map((experience) => {
          return (
            <div className="experience" key={experience?.name}>
              <h4>{experience?.name}</h4>
              <h5>{experience?.role}</h5>
              <p>{experience?.summary}</p>

              {/* <hr /> */}
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Experience;

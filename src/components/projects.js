import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <span className="project-list">
        <div className="project">
          <h5>#Fancrop</h5>
          <p>
            A web app that allows content creators receive support from
            consumers, friends & others in form of small donations, shares etc.
            (Its similar to patron)
          </p>
          <div className="technologies">
            <p>Postgres</p>
            <p>Elasticsearch</p>
            <p>Flask</p>
            <p>React</p>
            <p>Redux</p>
          </div>
          <a href="https://fancrop.com">See Live Project</a>
        </div>

        <div className="project">
          <h5>#Lumnergy</h5>
          <p>
            Lumnergy is a power solutions company that looks to tackle the power
            problems faced by the everyday consumer and help them reach their
            required power related goals at a reasonable cost.
          </p>

          <div className="technologies">
            <p>React</p>
            <p>Redux</p>
            <p>Go</p>
          </div>
          <a href="https://lumnergy.netlify.com">See Live Project</a>
        </div>

        <div className="project">
          <h5>#Aeydar</h5>
          <p>
            Web app that list hospitals using geolocation and provide
            information about them within a radius of your current location
          </p>

          <div className="technologies">
            <p>Sass</p>
            <p>Nodejs</p>
            <p>Express</p>
            <p>React</p>
            <p>Redux</p>
          </div>
          <a href="https://aeydar.com">See Live Project</a>
        </div>
      </span>
    </div>
  );
};

export default Projects;

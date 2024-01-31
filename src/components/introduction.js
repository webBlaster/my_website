import React from "react";
import "../styles/introduction.css";

const Introduction = () => {
  return (
    <>
      <div className="intro animate__animated animate__fadeInLeft">
        <div className="about">
          <p className="greet">Hi, I'm Ajibola Yekinni</p>
          <h1>
            Software Engineer
            <br /> From Lagos Nigeria.
          </h1>
          <p className="elevator-pitch">
            with extensive experience developing robust software solutions,
            highly proficient in JavaScript(TypeScript) and its tooling, team
            player with solid collaboration and communication skills
          </p>
        </div>
        <p></p>
      </div>
    </>
  );
};

export default Introduction;

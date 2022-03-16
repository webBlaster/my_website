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
            I'm passionate about building highly accessible and scalable
            software for the web
          </p>
        </div>
        <p></p>
      </div>
    </>
  );
};

export default Introduction;

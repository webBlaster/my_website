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
            with over 5 years of experience, highly proficient in JavaScript and
            its tooling,I have solid understanding of modern development
            processes and tools, solid communication and collaboration skills.
          </p>
        </div>
        <p></p>
      </div>
    </>
  );
};

export default Introduction;

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
            I am a software engineer with over 4 years of experience,with
            proficiency in JavaScript and its related tooling. I am also
            comfortable with Python, which adds versatility to my skill set. I
            have a good understanding of modern development processes and tools
            and I am always keeping up with the latest technology.
          </p>
        </div>
        <p></p>
      </div>
    </>
  );
};

export default Introduction;

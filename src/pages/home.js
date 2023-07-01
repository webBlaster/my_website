import React from "react";
import Baloons from "../components/baloons.js";
import Contact from "../components/contact.js";
import Introduction from "../components/introduction.js";
import Projects from "../components/projects.js";

const Home = () => {
  return (
    <>
      <Introduction />
      <Projects />
      <Contact />
      <Baloons />
    </>
  );
};

export default Home;

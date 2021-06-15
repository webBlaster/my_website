import React from "react";
import Introduction from "../components/introduction.js";
import Projects from "../components/projects.js";
import Baloons from "../components/baloons.js";
import Contact from "../components/contact.js";

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

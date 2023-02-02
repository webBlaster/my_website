import React from "react";
import Baloons from "../components/baloons.js";
import Contact from "../components/contact.js";
import Experience from "../components/experience.js";
import Introduction from "../components/introduction.js";

const Home = () => {
  return (
    <>
      <Introduction />
      <Experience />
      <Contact />
      <Baloons />
    </>
  );
};

export default Home;

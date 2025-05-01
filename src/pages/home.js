import React from "react";
import Introduction from "../components/introduction.js";
import Projects from "../components/projects.js";

import useAnimateOnScroll from "../hooks/useFadeInOnScroll.js";

const Home = () => {
  useAnimateOnScroll();
  return (
    <>
      <Introduction />
      <Projects />
    </>
  );
};

export default Home;

import React from "react";
import { motion } from "framer-motion";
const Introduction = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="intro"
      >
        <h1>Ajibola Yekinni</h1>
        <p>
          Software Engineer
          <br /> building Products with JavaScript and Python
        </p>
      </motion.div>
    </>
  );
};

export default Introduction;

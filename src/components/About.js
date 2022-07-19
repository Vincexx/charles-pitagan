import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mx-2">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          y: { type: "tween", stiffness: 100 },
          default: { duration: 1 },
        }}
        className="bg-card pt-8 pb-2 px-10 shadow-lg"
      >
        <div className="flex items-center mb-3">
          <FontAwesomeIcon icon={faUser} className="text-primary mr-2" />
          <h2 className="text-primary font-extrabold">ABOUT</h2>
        </div>
        <p className="text-desc">
          A <span className="font-bold">software engineer</span> with hands-on
          experience in all-levels of testing, including performance,
          functional, integration, system and user acceptance.
        </p>

        <p className="text-sub text-xs mt-4 text-right">SOFTWARE ENGINEER</p>
      </motion.div>
    </div>
  );
};

export default About;

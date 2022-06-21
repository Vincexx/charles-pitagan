import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="md:mx-8 mx-2">
      <div className="text-title text-sm py-4">
        <p className="h-2.5 w-8 bg-primary"></p>
        <p className="h-2 w-8 bg-title"></p>
      </div>

      <div className="bg-card pt-8 pb-2 px-10">
        <div className="grid grid-cols-2 items-center w-12 mb-3 ">
          <FontAwesomeIcon icon={faUser} className="text-primary" />
          <h2 className="text-primary font-bold ">ABOUT</h2>
        </div>
        <p className="text-desc">
          A <span className="font-bold">software engineer</span> with hands-on
          experience in all-levels of testing, including performance,
          functional, integration, system and user acceptance.
        </p>

        <p className="text-sub text-xs mt-4 text-right">SOFTWARE ENGINEER</p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Skills = ({ primary_color }) => {
  return (
    <div className="mx-2 mb-6">
      <div className="bg-card pt-8 pb-2 px-10">
        <div className="flex items-center mb-3">
          <FontAwesomeIcon icon={faUser} className="text-primary mr-2" />
          <h2 className="text-primary font-bold">SKILLS</h2>
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

export default Skills;

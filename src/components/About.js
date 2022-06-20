import React from "react";

const About = ({ primary_color }) => {
  return (
    <div className="mb-8">
      <h2 className={`${primary_color} font-bold text-xl`}>About Me</h2>
      <p className="text-sm text-gray-500 mt-2">
        A <span className="font-bold">software engineer</span> with hands-on
        experience in all-levels of testing, including performance, functional,
        integration, system and user acceptance.
      </p>
    </div>
  );
};

export default About;

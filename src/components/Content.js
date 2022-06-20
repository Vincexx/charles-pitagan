import React from "react";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

const Content = ({ primary_color }) => {
  return (
    <div class="flex-1 flex overflow-hidden items-start">
      <div class="flex-1 md:overflow-y-scroll md:px-4 py-8">
        <About primary_color={primary_color} />
        <Education primary_color={primary_color} />
        <Skills primary_color={primary_color} />
        <Projects primary_color={primary_color} />
      </div>
    </div>
  );
};

export default Content;

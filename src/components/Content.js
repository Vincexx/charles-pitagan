import React, { useState } from "react";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Showcase from "./Showcase";
import Skills from "./Skills";

const Content = ({ primary_color }) => {
  return (
    <div class="flex-1 flex overflow-hidden bg-bg">
      <div class="flex-1 md:overflow-y-scroll">
        <div className="container max-w-2xl mx-auto">
          <About />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Content;

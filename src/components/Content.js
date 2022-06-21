import React, { useState } from "react";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Showcase from "./Showcase";
import Skills from "./Skills";

const Content = ({ primary_color }) => {
  const defaultBtn =
    "bg-cyan-500 text-white py-2 hover:bg-white hover:text-black hover:shadow-md";
  const activeBtn = "font-bold text-black bg-white shadow-md";
  const [showContent, setShowContent] = useState("");

  return (
    <div class="flex-1 flex overflow-hidden bg-bg">
      <div class="flex-1 md:overflow-y-scroll">
        <About />
        {/* <Education primary_color={primary_color} />
        <Skills primary_color={primary_color} />
        <Projects primary_color={primary_color} /> */}
      </div>
    </div>
  );
};

export default Content;

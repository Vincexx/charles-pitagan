import React from "react";

const Projects = ({ primary_color }) => {
  return (
    <div className="mb-8">
      <h2 className={`${primary_color} font-bold text-xl`}>Projects</h2>
      <div className="mt-3 grid grid-cols-3">
        <div className="relative">
          <img src="img/movie.png"></img>
          <div className="absolute top-0 left-0 hover:bg-red-200 h-full w-full transition-colors delay-1000 duration-1000">
              <p>Link</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

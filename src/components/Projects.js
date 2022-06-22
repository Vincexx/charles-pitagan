import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ primary_color }) => {
  return (
    <div className="mx-2 mb-6">
      <div className="bg-card">
        <div className="flex items-center mb-6 pt-6 px-10">
          <FontAwesomeIcon
            icon={faProjectDiagram}
            className="text-primary mr-2"
          />
          <h2 className="text-primary font-extrabold">PROJECTS</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-2 justify-items-center">
          <a href="https://vincexx.github.io/React-Movie-App/" target="__blank">
            <img
              className="transform transition duration-500 hover:scale-110 grayscale hover:grayscale-0 w-full"
              src="img/projects/movie.PNG"
              alt="movie"
            ></img>
          </a>
          <a href="https://vincexx.github.io/medtech/" target="__blank">
            <img
              className="transform transition duration-500 hover:scale-110 grayscale hover:grayscale-0 w-full"
              src="img/projects/medtech.PNG"
              alt="movie"
            ></img>
          </a>
          <a href="https://vincexx.github.io/growthUpsExam/" target="__blank">
            <img
              className="transform transition duration-500 hover:scale-110 grayscale hover:grayscale-0 w-full"
              src="img/projects/growthups.PNG"
              alt="movie"
            ></img>
          </a>
          <a href="https://vincexx.github.io/cafenr/" target="__blank">
            <img
              className="transform transition duration-500 hover:scale-110 grayscale hover:grayscale-0 w-full"
              src="img/projects/cafenr.png"
              alt="movie"
            ></img>
          </a>
        </div>

        <p className="text-sub text-xs mt-4 text-right py-3 mr-10">
          SOFTWARE ENGINEER
        </p>
      </div>
    </div>
  );
};

export default Projects;

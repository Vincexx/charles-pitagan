import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Projects = () => {
  const data = [
    {
      link: "https://vincexx.github.io/React-Movie-App/",
      img: "/img/projects/movie.PNG",
      github: "",
    },
    {
      link: "https://www.youtube.com/watch?v=jrIDlcemUso",
      img: "/img/projects/blog.png",
      github: "",
    },
    {
      link: "https://vincexx.github.io/medtech/",
      img: "/img/projects/medtech.PNG",
      github: "",
    },
    {
      link: "https://vincexx.github.io/growthUpsExam/",
      img: "/img/projects/growthups.PNG",
      github: "",
    },
  ];

  return (
    <div className="mx-2 mb-6">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          y: { type: "tween", stiffness: 100 },
          default: { duration: 1 },
        }}
        className="bg-card shadow-md"
      >
        <div className="flex items-center mb-6 pt-6 px-10">
          <FontAwesomeIcon
            icon={faProjectDiagram}
            className="text-primary mr-2"
          />
          <h2 className="text-primary font-extrabold">PROJECTS</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-2 justify-center">
          {data.map((item) => (
            <a href={item.link} target="__blank">
              <img
                className="transform transition duration-500 hover:scale-110 grayscale hover:grayscale-0 w-full"
                src={process.env.PUBLIC_URL + item.img}
                alt="movie"
              ></img>
            </a>
          ))}
        </div>

        <p className="text-sub text-xs mt-4 text-right py-3 mr-10">
          SOFTWARE ENGINEER
        </p>
      </motion.div>
    </div>
  );
};

export default Projects;

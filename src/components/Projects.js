import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const data = [
    {
      link: "https://vincexx.github.io/vince-claud-wedding-invitation/",
      img: "/img/projects/rsvp.PNG",
    },
    {
      link: "https://www.650homes.com.ph/",
      img: "/img/projects/650homes.PNG",
    },
    {
      link: "https://wellingtonresidences.duravillerealty.com/",
      img: "/img/projects/wellington.PNG",
      github: "https://github.com/Vincexx/React-Movie-App",
    },
    {
      link: "https://vincexx.github.io/React-Movie-App/",
      img: "/img/projects/movie.PNG",
      github: "https://github.com/Vincexx/React-Movie-App",
    },
    {
      link: "https://vincexx.github.io/medtech/",
      img: "/img/projects/medtech.PNG",
      github: "https://github.com/Vincexx/medtech",
    },
    {
      link: "https://www.youtube.com/watch?v=jrIDlcemUso",
      img: "/img/projects/blog.png",
      github: "https://github.com/Vincexx/VnxeBlog",
    },
  ];

  return (
    <div className="mb-3">
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
          {data.map((item, id) => (
            <div key={id} className="relative">
              <div className="group absolute w-full h-full flex items-center justify-center hover:bg-primary transition-all duration-500">
                <div className="hidden group-hover:block">
                  <div className="flex">
                    <a href={item.link} target="__blank">
                      <FaLink className="text-xl hover:scale-110" />
                    </a>
                  </div>
                </div>
              </div>
              <img
                src={process.env.PUBLIC_URL + item.img}
                alt="movie"
                className="w-full"
              ></img>
            </div>
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

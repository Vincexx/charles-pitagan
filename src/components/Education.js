import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Education = () => {
  const details = [
    {
      date: "Jan 2023 - Present",
      position: "Fullstack Engineer | Wordpress Developer",
      company: "Freelancing",
    },
    {
      date: "Nov 2024 - Present",
      position: "Java Engineer",
      company: "Security Bank Corporation",
    },
    {
      date: "Jan 2023 - Nov 2024",
      position: "Backend Software Engineer",
      company: "Manulife Philippines",
    },
    {
      date: "May 2022 - Dec 2022",
      position: "Software Engineer",
      company: "Norima Consulting Inc.",
    },
    {
      date: "Aug 2019 - May 2022",
      position: "Full Stack Engineer",
      company: "Cavite State University",
    }
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
        className="bg-card pt-8 pb-2 px-10 shadow-md"
      >
        <div className="md:mb-3 mb-5 flex items-center">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-primary mr-2"
          />
          <h2 className="text-primary font-extrabold">
            EDUCATION & EXPERIENCE
          </h2>
        </div>

        {details.map((item, id) => {
          return (
            <div className="md:grid grid-cols-2 mb-3" key={id}>
              <p className="text-desc">{item.date}</p>
              <div>
                <p className="text-desc font-bold">
                  {item.position} <span className="font-thin">at</span>
                </p>
                <p className="text-desc font-thin">{item.company}</p>
              </div>
            </div>
          );
        })}

        <p className="text-sub text-xs mt-4 text-right">SOFTWARE ENGINEER</p>
      </motion.div>
    </div>
  );
};

export default Education;

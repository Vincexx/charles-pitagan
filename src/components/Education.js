import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Education = () => {
  const details = [
    {
      date: "May 2022 - Present",
      position: "Java Developer",
      company: "Norima Consulting Inc.",
    },
    {
      date: "Nov 2021 - May 2022",
      position: "Backend Software Engineer",
      company: "Multisys Technologies Corporation",
    },
    {
      date: "June 2021 - Nov 2021",
      position: "Frontend Software Engineer",
      company: "Iservice Technology",
    },
    {
      date: "Aug 2019 - June 2021",
      position: "IT Instructor",
      company: "CvSU Tanza",
    },
    {
      date: "Dec 2020 - Jan 2021",
      position: "Freelance Web Developer",
      company: "CvSU Main",
    },
    {
      date: "June 2015 - June 2019",
      position: "Graduated of BS in Computer Science",
      company: "CvSU CCAT",
    },
  ];

  return (
    <div className="mx-2 mb-6">
      <div className="text-title text-sm py-4">
        <p className="h-2.5 w-12 bg-primary"></p>
        <p className="h-2 w-8 bg-title"></p>
      </div>

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

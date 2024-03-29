import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Skills = () => {
  const details = [
    {
      title: "Frontend",
      skills: "HTML,CSS,JS,Tailwind,Vue,React",
    },
    {
      title: "Backend",
      skills: "PHP,Laravel,Adonis,Java, SpringBoot",
    },
    {
      title: "Database",
      skills: "MySQL,PostgreSQL",
    },
    {
      title: "Environment",
      skills: "Docker,WAMP",
    },
    {
      title: "Cloud Server",
      skills: "Digitalocean,AWS",
    },
  ];

  return (
    <div className="mb-3">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          y: { type: "tween", stiffness: 100 },
          default: { duration: 1 },
        }}
        className="bg-card pt-8 pb-2 px-10 shadow-md"
      >
        <div className="flex items-center md:mb-3 mb-5">
          <FontAwesomeIcon icon={faCogs} className="text-primary mr-2" />
          <h2 className="text-primary font-extrabold">SKILLS</h2>
        </div>
        <div className="md:flex md:justify-between gap-2 flex-wrap">
          {details.map((item, id) => (
            <div className="mb-3" key={id}>
              <p className="text-title font-bold">{item.title}</p>
              <div className="flex md:flex-col">
                {item.skills.split(",").map((skill, id) => (
                  <p key={id} className="text-desc mr-2">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sub text-xs mt-4 text-right">SOFTWARE ENGINEER</p>
      </motion.div>
    </div>
  );
};

export default Skills;

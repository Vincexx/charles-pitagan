import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

const Skills = ({ primary_color }) => {
  const details = [
    {
      title: "Frontend",
      skills: "HTML,CSS,JS,Tailwind,Vue,React",
    },
    {
      title: "Backend",
      skills: "PHP,Laravel,Adonis",
    },
    {
      title: "Database",
      skills: "MySQL",
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
    <div className="mx-2 mb-6">
      <div className="bg-card pt-8 pb-2 px-10">
        <div className="flex items-center md:mb-3 mb-5">
          <FontAwesomeIcon icon={faCogs} className="text-primary mr-2" />
          <h2 className="text-primary font-extrabold">SKILLS</h2>
        </div>
        <div className="md:flex md:justify-between gap-2">
          {details.map((item) => (
            <div className="mb-3">
              <p className="text-title font-bold">{item.title}</p>
              <div className="flex md:flex-col">
                {item.skills.split(",").map((skill) => (
                  <p className="text-title mr-2">{skill}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sub text-xs mt-4 text-right">SOFTWARE ENGINEER</p>
      </div>
    </div>
  );
};

export default Skills;

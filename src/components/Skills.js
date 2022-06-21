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
        <div className="flex items-center mb-3">
          <FontAwesomeIcon icon={faCogs} className="text-primary mr-2" />
          <h2 className="text-primary font-bold">SKILLS</h2>
        </div>
        <div className="flex justify-between">
          {details.map((item) => (
            <div>
              <p className="text-title font-bold">{item.title}</p>
              {item.skills.split(",").map((skill) => (
                <p className="text-title">{skill}</p>
              ))}
            </div>
          ))}
        </div>

        <p className="text-sub text-xs mt-4 text-right">SOFTWARE ENGINEER</p>
      </div>
    </div>
  );
};

export default Skills;

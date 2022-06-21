import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  const details = [
    {
      date: "May 2022 - Present",
      position: "Software Engineer",
      company: "Norima Technologies",
    },
    {
      date: "Nov 2021 - June 2022",
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
    <div className="mx-2">
      <div className="bg-card pt-8 pb-2 px-10">
        <div className="mb-3 flex items-center">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-primary mr-2"
          />
          <h2 className="text-primary font-bold">EDUCATION & EXPERIENCE</h2>
        </div>

        {details.map((item) => {
          return (
            <div className="grid grid-cols-2 gap-2 mb-2">
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
      </div>
    </div>
  );
};

export default Education;

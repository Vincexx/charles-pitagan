import React from "react";

const Education = ({ primary_color }) => {
  const details = [
    {
      date: "Nov 2021 - Present",
      position: "Backend Software Engineer",
    },
    {
      date: "June 2021 - Nov 2021",
      position: "Frontend Software Engineer",
    },
    {
      date: "Aug 2019 - June 2021",
      position: "IT Instructor",
    },
    {
      date: "Dec 2020 - Jan 2021",
      position: "Freelance Web Developer",
    },
    {
      date: "June 2015 - June 2019",
      position: "Graduated of BS in Computer Science",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className={`${primary_color} font-bold text-xl`}>
        Education & Experience
      </h2>

      {details.map((item) => {
        return (
          <div className="mt-2 grid grid-cols-2 gap-2">
            <p className="font-bold text-gray-500 text-xs md:text-sm">
              {item.date}
            </p>
            <p className="text-gray-500 text-xs md:text-sm">{item.position}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;

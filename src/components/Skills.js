import React from "react";

const Skills = ({ primary_color }) => {
  return (
    <div className="mb-8">
      <h2 className={`${primary_color} font-bold text-xl`}>Skills</h2>
      <div className="mt-3">
        <div className="mb-5">
          <p className={`${primary_color} text-sm text-center mb-3`}>
            Frontend
          </p>
          <div className="grid grid-cols-3 gap-3 justify-items-center md:grid-cols-6">
            <img src="img/html.png" alt="vue"></img>
            <img src="img/css.png" alt="vue"></img>
            <img src="img/js.jpg" alt="vue"></img>
            <img src="img/vue.png" alt="vue"></img>
            <img src="img/react.png" alt="react"></img>
            <img src="img/tailwind.jpg" alt="react"></img>
          </div>
        </div>

        <div>
          <p className={`${primary_color} text-sm text-center mb-3`}>
            Backend & Database
          </p>
          <div className="grid grid-cols-2 gap-3 justify-items-center md:grid-cols-6">
            <img src="img/php.png" alt="vue"></img>
            <img src="img/laravel.png" alt="vue"></img>
            <img src="img/adonis.png" alt="vue"></img>
            <img src="img/mysql.png" alt="vue"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

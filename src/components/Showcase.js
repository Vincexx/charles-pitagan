import React from "react";
import TypeAnimation from "react-type-animation";

const Showcase = ({ primary_color }) => {
  return (
    <div class="bg-black md:w-1/2 text-white">
      <div className="container mx-auto md:px-8 relative">
        <div className="py-4">
          <p className={`font-bold text-sm ${primary_color}`}>FutureSrDev</p>
        </div>

        <div className="px-3 py-32">
          <div className="text-center">
            <span>
              <h2>--</h2>
              <TypeAnimation
                cursor={true}
                sequence={["Hi, I am", 4000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </span>
            <h1 className={`font-bold md:text-5xl text-2xl ${primary_color}`}>
              Charles Pitagan{" "}
            </h1>
            <p className="text-gray-400 my-1 text-md">Software Engineer</p>
            <p className="text-gray-400 text-sm">
              "The expert in anything was once a beginner"
            </p>
          </div>
          <div className="grid grid-cols-1 justify-items-center">
            <img src="img/profile.png" alt="profile"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

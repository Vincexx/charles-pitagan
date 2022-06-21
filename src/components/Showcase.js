import React from "react";
import TypeAnimation from "react-type-animation";

const Showcase = ({ primary_color }) => {
  return (
    <div class="bg-bg md:w-1/2 text-white">
      <div className="container mx-auto md:px-8 relative">
        <div className="py-4 mx-2">
          <p className={`font-extrabold text-sm text-primary`}>FUTURESRDEV</p>
        </div>

        <div className="py-32 bg-card mx-2">
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
            <h1 className={`font-bold md:text-5xl text-2xl text-primary`}>
              Charles Pitagan{" "}
            </h1>
            <p className="my-1 text-md text-title font-bold">
              Software Engineer
            </p>
            <p className="text-desc text-sm">
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

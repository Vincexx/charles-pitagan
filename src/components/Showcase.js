import React from "react";
import TypeAnimation from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobileAndroid } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Showcase = () => {
  return (
    <>
      <div
        className="bg-bg md:w-1/2 text-white 
    "
      >
        <div className="container mx-auto relative">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              y: { type: "tween", stiffness: 100 },
              default: { duration: 1 },
            }}
            className="bg-card pt-6 shadow-lg md:h-screen flex flex-col justify-between px-3"
          >
            <div className="">
              <p className={`font-extrabold text-sm text-primary`}>
                VINCEDEV
              </p>
            </div>

            <div>
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
                  Charles Vincent Pitagan{" "}
                </h1>
                <p className="my-1 text-md text-title font-bold">
                  Software Engineer
                </p>
                <p className="text-desc text-sm">
                  "The expert in anything was once a beginner"
                </p>
              </div>
              <div className="grid grid-cols-1 justify-items-center">
                <img
                  src={process.env.PUBLIC_URL + "/img/profile.png"}
                  alt="profile"
                ></img>
              </div>
            </div>

            <div className="flex justify-between md:mt-3 mt-12 pb-4 items-center">
              <div className="">
                <div className="flex items-center mb-1">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 text-primary"
                  />
                  <p className="text-desc text-sm">cvpitagan@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMobileAndroid}
                    className="mr-3 text-primary"
                  />
                  <p className="text-desc text-sm">(+63) 976-265-3524</p>
                </div>
              </div>
              <div className="flex">
                <a href="https://github.com/Vincexx" target="__blank">
                  <FaGithub className="text-3xl mr-2 text-primary  hover:scale-110" />
                </a>
                <a
                  href="https://www.linkedin.com/in/charles-vincent-pitagan-28818a190/"
                  target="__blank"
                >
                  <FaLinkedin className="text-3xl text-primary hover:scale-110" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Showcase;

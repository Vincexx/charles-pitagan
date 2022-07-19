import React from "react";
import TypeAnimation from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobileAndroid } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import About from "./About";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Showcase = () => {
  return (
    <>
      <div
        className="bg-bg md:w-1/2 text-white 
    "
      >
        <div className="container mx-auto md:px-8 relative">
          <div className="py-4 mx-2">
            <p className={`font-extrabold text-sm text-primary`}>FUTURESRDEV</p>
          </div>

          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              y: { type: "tween", stiffness: 100 },
              default: { duration: 1 },
            }}
            className="bg-card mx-2 md:px-3 md:pt-8 pt-6 mb-6 shadow-lg"
          >
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
              <img
                src={process.env.PUBLIC_URL + "/img/profile.png"}
                alt="profile"
              ></img>
            </div>

            <div className="flex justify-between md:mt-3 mt-12 px-4 pb-4 items-center">
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
                  <p className="text-desc text-sm">(+63) 975-634-8605</p>
                </div>
              </div>
              <div className="flex">
                <a href="https://github.com/Vincexx" target="__blank">
                  <FaGithub className="text-3xl mr-2 text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/charles-pitagan-28818a190/"
                  target="__blank"
                >
                  <FaLinkedin className="text-3xl text-primary" />
                </a>
              </div>
            </div>
          </motion.div>

          <About />
        </div>
      </div>
    </>
  );
};

export default Showcase;

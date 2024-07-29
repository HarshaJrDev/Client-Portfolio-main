import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoNodejs, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiFirebase } from "react-icons/si";
import { FaReact, FaAndroid, FaApple } from "react-icons/fa";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills" className="p-4">
      <div className="container mx-auto mt-10">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-4">
          <h3 className="text-2xl font-bold text-gray-600 sm:text-xl">
            My Skills
          </h3>
          <span className="h-[1px] right-0 absolute w-[80%] bg-gray-300 block"></span>
        </div>
        {/* content */}
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left box */}
          <div className="left flex-1 md:w-1/2 mb-4 md:mb-0">
            <p data-aos="fade-up" className="text-gray-600 font-medium mb-4">
              Here are my skills.
            </p>
            <div
              data-aos="zoom-in"
              className="progress flex flex-col gap-2"
            >
              <ProgressBar logo={<FaReact />} name={"React Native"} value={95} />
              <ProgressBar logo={<IoLogoNodejs />} name={"Node.js"} value={90} />
              <ProgressBar logo={<SiMongodb />} name={"MongoDB"} value={85} />
              <ProgressBar logo={<SiExpress />} name={"Express.js"} value={80} />
              <ProgressBar logo={<SiFirebase />} name={"Firebase"} value={75} />
              <ProgressBar logo={<FaAndroid />} name={"Android"} value={70} />
              <ProgressBar logo={<FaApple />} name={"iOS"} value={70} />
            </div>
          </div>
          {/* Right box */}
          <div className="right flex-1 md:w-1/2 flex flex-wrap gap-4 items-center justify-center">
            <SkillBox
              logo={<IoLogoNodejs />}
              black={"white"}
              white={"black"}
              skill={"Node.js"}
            />
            <SkillBox
              logo={<SiMongodb />}
              black={"white"}
              white={"black"}
              skill={"MongoDB"}
            />
            <SkillBox
              logo={<SiExpress />}
              black={"white"}
              white={"black"}
              skill={"Express.js"}
            />
            <SkillBox
              logo={<FaReact />}
              black={"black"}
              white={"white"}
              skill={"React Native"}
            />
            <SkillBox
              logo={<SiFirebase />}
              black={"black"}
              white={"white"}
              skill={"Firebase"}
            />
            <SkillBox
              logo={<FaAndroid />}
              black={"black"}
              white={"white"}
              skill={"Android"}
            />
            <SkillBox
              logo={<FaApple />}
              black={"black"}
              white={"white"}
              skill={"iOS"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

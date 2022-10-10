import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        src="https://play-lh.googleusercontent.com/9Sk8BRBUGXjqX5gSI1LX8AZF1W8KjqdWSTjmBxxEmvR4Ec2PN2wd4HcufuJ3Sd5LDg=w240-h480-rw"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-24 filter group-hover:grayscale transition duration 300 ease-in-out md:w-28 md:h-28"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100 ">NAME</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

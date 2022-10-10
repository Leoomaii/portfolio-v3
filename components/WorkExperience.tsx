import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>
      <div>
        <ExpCard/>
        <ExpCard/>
        <ExpCard/>
        <ExpCard/>
        
      </div>
    </motion.div>
  );
}
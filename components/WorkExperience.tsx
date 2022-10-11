import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";
import { Experience } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
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
      <div className=" flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#009DCF]/80">
        {experiences.map((experience) => (
          <ExpCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

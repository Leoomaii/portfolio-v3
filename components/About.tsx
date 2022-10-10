import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
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
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://scontent.fmel7-1.fna.fbcdn.net/v/t1.15752-9/305063425_1067534920631564_3183756314689132314_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RvCzlAfZcscAX_1ZvHl&_nc_oc=AQnAcBp1d4w-8ndKKO-LruG8ck8b0grg_sGz0nptknjqmhX3Boc_VQZItZwtSrbKRZ0&_nc_ht=scontent.fmel7-1.fna&oh=03_AVL_Lav0VCnlqoM9LWKOM_Gt6q02we5PoyCLyP5JTiVMlA&oe=63695B5A"
        className="md:h-95 -mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />
      <div className="space-y-10 px-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#009DCF]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Im Leo 💫! An experienced Insights Analyst with a demonstrated history
          of working in the technology and service industries. Passionate for
          solving problems through building responsive and systematic web
          applications with engaging user experiences 🚀🚀🚀 Skilled in React,
          Node.js, Redux, HTML5, CSS3, JavaScript ES6+ and typescript🤔
        </p>
      </div>
    </motion.div>
  );
}

export default About;

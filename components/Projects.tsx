import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#009DCF]/80">
        {projects.map((project, i) => (
          <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://play-lh.googleusercontent.com/9Sk8BRBUGXjqX5gSI1LX8AZF1W8KjqdWSTjmBxxEmvR4Ec2PN2wd4HcufuJ3Sd5LDg=w240-h480-rw"
              alt=""
            />
            <div className="max-w-6 space-y-10 px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                <span className="underline decoration-[#009DCF]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Netflix Clone
              </h4>
              <p className="text-center text-lg md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                iste, recusandae tenetur harum quis ea voluptatem rem officiis
                reiciendis? Sequi quidem impedit quaerat officiis ratione. Totam
                explicabo adipisci neque suscipit repellendus nostrum assumenda
                ipsum, aliquid, vitae, eveniet sequi! Inventore neque esse
                commodi, excepturi numquam enim alias odit delectus! Fugit,
                molestiae!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute  top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#009DCF]/10" />
    </motion.div>
  );
}

export default Projects;

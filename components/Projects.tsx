import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
type Props = {
projects: Project[]

};

function Projects({projects}: Props) {
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

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#009DCF]/80">
        {projects.map((project, i) => (
          <div key={project._id} 
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen lg:p-80">
            <a href={project.linkToBuild} rel="noreferrer" target="_blank" className="pb-8 text-center text-4xl font-semibold md:text-6xl cursor-pointer underline decoration-[#009DCF]/50">{project.title}</a>
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="rounded-xl lg:h-[550px] lg:w-[1500px]"
            />
            <div className="max-w-6 space-y-10 px-0 md:px-10">
              <h4 className="text-center text-2xl font-semibold md:text-4xl">
                <span className="underline decoration-[#009DCF]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
              {project?.technologies.map(technology => (
                <img 
                className="h-10 w-10"
                key={technology._id}
                src={urlFor(technology?.image).url()}
                alt=""
                />
              ))}
              </div>
              <p className="text-xs text-center md:text-lg md:text-left">
              {project?.summary}
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

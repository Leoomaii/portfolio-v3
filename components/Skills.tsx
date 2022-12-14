import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';
import { Skill as SkillType } from '../typings';


type Props = {
  skills: SkillType[]
}

function Skills({skills}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:spacey-0 mx-auto items-center'>
        <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
            Skills
        </h3>
        <div className='grid grid-cols-4 gap-5'>
            {skills?.slice(0, skills.length / 2).map(skill => (
            <Skill key={skill._id} skill={skill}/>
            ))}
            {skills?.slice(skills.length / 2, skills.length).map(skill => (
            <Skill key={skill._id} skill={skill} directionLeft/>
            ))}
        </div>
    </motion.div>
  )
}

export default Skills
import React from "react";
import { motion } from "framer-motion";

function ExpCard() {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="h32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src="https://play-lh.googleusercontent.com/9Sk8BRBUGXjqX5gSI1LX8AZF1W8KjqdWSTjmBxxEmvR4Ec2PN2wd4HcufuJ3Sd5LDg=w240-h480-rw"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Customer Insights Analyst</h4>
        <p className="font-bold text-2xl mt-1">nib Health Group</p>
        <div className="flex space-x-2 my-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="" className="h-10 w-10 rounded-full"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="" className="h-10 w-10 rounded-full"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="" className="h-10 w-10 rounded-full"/>
        </div>
        <p className="uppercase py-5 text-gray-300">Start....End date</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>summary points</li>
            <li>summary points</li>
            <li>summary points</li>
            <li>summary points</li>
            <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExpCard;

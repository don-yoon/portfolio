import React from "react"
import Cards from "./Cards"
import { projectInternship, coursework } from "./ProjectInfo"
import { motion } from "framer-motion"

const divAnimationFromRight = {
  offscreen: {opacity: 0, x:100},
  onscreen: {
    opacity: 1, 
    x:0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1.5,
    }
  }
}

const Projects: React.FC = () => {
  return (
    <>
      <motion.div id="projects" className="flex flex-col w-[100vw] items-center py-5"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.8}}
        transition={{staggerChildren: 0.6}}>
        <motion.div
          variants={divAnimationFromRight}
        >
          <h2 className="text-2xl text-blue-900">Projects</h2>
        </motion.div>
        <motion.div className="flex w-full select-none items-center justify-center bg-slate-100 p-10 text-xl sm:text-base"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true, amount:0.8}}
          transition={{staggerChildren: 0.6, delayChildren: 0.6}}    
        >
          <motion.div
            variants={divAnimationFromRight}   
          >
            <Cards cardData={projectInternship.project_one}/>
          </motion.div>
          <motion.div
            variants={divAnimationFromRight}
          >
            <Cards cardData={projectInternship.project_two}/>
          </motion.div>
        </motion.div>
      
      </motion.div>
      
      <motion.div className="flex flex-col w-[100vw] items-center"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren: 0.6}}>
        <motion.div
          variants={divAnimationFromRight}
        >
          <h2 className="text-2xl text-blue-900">Coursework</h2>
        </motion.div>
        <div className="flex flex-wrap w-full select-none items-center justify-center bg-slate-100 p-10 text-xl sm:text-base"
        >
          <motion.div className="relative border-blue-900"
            variants={divAnimationFromRight}   
          >
            <Cards cardData={coursework.course_one}/>
          </motion.div>
          <motion.div className="relative border-blue-900"
            variants={divAnimationFromRight}
          >
            <Cards cardData={coursework.course_two}/>
          </motion.div>
          <motion.div className="relative border-blue-900"
            variants={divAnimationFromRight}
          >
            <Cards cardData={coursework.course_three}/>
          </motion.div>
          <motion.div className="relative border-blue-900"
            variants={divAnimationFromRight}
          >
            <Cards cardData={coursework.course_four}/>
          </motion.div>
          <motion.div className="relative border-blue-900"
            variants={divAnimationFromRight}
          >
            <Cards cardData={coursework.course_five}/>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Projects

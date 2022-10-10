import React from "react"
import Image from "next/image"
import TheDon from "./TheDon"
import { motion } from "framer-motion"

const divAnimationFromLeft = {
  offscreen: {opacity: 0, x:-100},
  onscreen: {
    opacity: 1, 
    x:0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 3
    }
  }
}

const divAnimationFromRight = {
  offscreen: {opacity: 0, x:100},
  onscreen: {
    opacity: 1, 
    x:0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 3
    }
  }
}
const AboutMe: React.FC = () => {
  return (
    <motion.div className="pointer-events-none flex h-[90vh] select-none items-center justify-center rounded-md bg-slate-100 object-fill p-10 text-xl sm:text-base"
      initial={"offscreen"}
      animate={"onscreen"}
      transition={{staggerChildren: 0.6}}
    >
      
      <motion.div className="relative h-52 w-52 overflow-hidden rounded-full border border-blue-900"
        variants={divAnimationFromLeft}
      >
        <Image
          src="/profile.png"
          alt="profile picture"
          layout="fill"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </motion.div>
      <div className="m-4 w-1/2 flex flex-col">
        <motion.div
          variants={divAnimationFromRight}
        >
          <TheDon />
        </motion.div>
        <motion.div
          variants={divAnimationFromRight}
        >
        Hi, I&apos;m Don, a full stack developer from Chicago, IL. Given my
        background as both an educator and US Army Veteran, I can provide unique
        solutions to unique problems in the industry. I am passionate about
        creating a better experience through understanding the nuances of any
        given task and creating the optimal solution. I&apos;m always eager to
        learn more and continue expanding the limits of my capabilities. Thanks
        for stopping by and let&apos;s talk!
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutMe

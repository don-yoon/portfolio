import React from "react"
import { motion } from "framer-motion"


interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

const variant = {
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  right: {
    opacity: 0,
    x: 200,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  left: {
    opacity: 0,
    x: -200,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

const Transition = ({ children }: ChildrenProps) => {
  
  return (
    <div className="overflow-hidden">
      
      <motion.div
        initial="right"
        whileInView="inactive"
        viewport={{once:true, amount:0.8}}
        transition={{staggerChildren: 1}}
      >
        <motion.div
          variants={variant}
        >
          {children}
        </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Transition

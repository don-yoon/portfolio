import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

const variant = {
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

const Transition = ({ children }: ChildrenProps) => {
  const { asPath } = useRouter()
  return (
    <div className="overflow-hidden">
      <AnimatePresence >
        <motion.div
          key={asPath}
          variants={variant}
          initial="in"
          animate="inactive"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Transition

import { motion } from "framer-motion"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import TechStack from "./TechStack"

interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}
const variant = {
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    },
  },
  right: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  left: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}
const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden no-scrollbar flex-col bg-slate-100 font-Raleway">
      <div className="w-full">
        <Header />
      </div>
      <div>
        { children }
      </div>
      <div className="w-full">
        <TechStack/>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

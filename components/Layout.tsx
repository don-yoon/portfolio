import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Transition from "./Transition"

interface ChildrenProps {
    children: JSX.Element | JSX.Element[]
}

const Layout = ({children}:ChildrenProps) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="w-full">
        <Header/>
      </div>
      <div className="flex flex-grow">
        <Transition>
          { children }
        </Transition>
      </div>
      <div className="w-full">
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
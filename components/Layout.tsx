import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Transition from "./Transition"

interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-100 font-Raleway">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex grow">
        <Transition>{children}</Transition>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Layout

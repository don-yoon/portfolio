import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import TechStack from "./TechStack"

interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
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

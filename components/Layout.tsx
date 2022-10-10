import React from "react"
import Footer from "./Footer"
import Header from "./Header"

interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden no-scrollbar flex-col bg-slate-100 font-Raleway">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex grow">
        { children }
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Layout

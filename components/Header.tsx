import React from "react"
import Link from "next/link"

const Header = () => {
  return (
    <div className="flex w-full h-[10vh] bg-blue-900 text-white select-none">
      <div className="bg-white text-3xl text-blue-900 ml-10 my-auto px-2 rounded-xl cursor-default">
        <div>theDon</div>
      </div>
      <div className="flex flex-row space-x-10 text-lg ml-auto mr-10 my-auto">
        <div className="transform transition duration-400 hover:scale-110">
          <Link href="/projects">
            Projects
          </Link>
        </div>
        <div className="transform transition duration-400 hover:scale-110">
          <Link href="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}


export default Header
import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className="flex h-[10vh] bg-blue-900 text-white items-center select-none">
        <div className="text-white cursor-default ml-10">
          &copy; theDon
        </div>
        <div className="flex ml-auto mr-10 space-x-5 ">
          <div className="w-10 h-10 transform transition duration-400 hover:scale-110">
            <Link href="https://github.com/don-yoon" target="_blank">
              <a><img src="/github.svg" alt="github" /></a>
            </Link>
          </div>
          <div className="w-10 h-10 transform transition duration-400 hover:scale-110">
            <Link href=""  target="_blank">
              <a><img src="/gmail.svg" alt="contact" /></a>
            </Link>
          </div>
          <div className="w-10 h-10 transform transition duration-400 hover:scale-110">
            <Link href="https://linkedin.com/in/don-yoon" target="_blank">
              <a><img src="/linkedin.svg" alt="linkedin" /></a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


export default Footer
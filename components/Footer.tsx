import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className="flex h-[10vh] select-none items-center bg-blue-900 text-white">
        <div className="ml-10 cursor-default text-white">&copy; theDon</div>
        <div className="ml-auto mr-10 flex space-x-5 ">
          <div className="h-10 w-10 transition duration-[400] hover:scale-110">
            <Link href="https://github.com/don-yoon" target="_blank">
              <a>
                <img src="/github.svg" alt="github" />
              </a>
            </Link>
          </div>
          <div className="h-10 w-10 transition duration-[400] hover:scale-110">
            <Link href="" target="_blank">
              <a>
                <img src="/gmail.svg" alt="contact" />
              </a>
            </Link>
          </div>
          <div className="h-10 w-10 transition duration-[400] hover:scale-110">
            <Link href="https://linkedin.com/in/don-yoon" target="_blank">
              <a>
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

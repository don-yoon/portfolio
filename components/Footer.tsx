import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-end space-x-5 p-5">
        <div className="w-10 h-10">
          <Link href="https://github.com/don-yoon">
            <a><img src="/github.svg" alt="github" /></a>
          </Link>
        </div>
        <div className="w-10 h-10">
          <Link href="">
            <a><img src="/gmail.svg" alt="contact" /></a>
          </Link>
        </div>
        <div className="w-10 h-10">
          <Link href="https://linkedin.com/in/don-yoon">
            <a><img src="/linkedin.svg" alt="linkedin" /></a>
          </Link>
        </div>
      </div>
    </>
  )
}


export default Footer
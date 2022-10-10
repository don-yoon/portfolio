import React from "react"
// import Link from "next/link"

const Header = () => {
  return (
    <div className="flex h-[10vh] w-full select-none bg-blue-900 text-white">
      <div className="my-auto ml-10 cursor-default rounded-xl bg-white px-2 text-3xl text-blue-900">
        <div>theDon</div>
      </div>
      <div className="my-auto ml-auto mr-10 flex flex-row space-x-10 text-lg">
        <div className="transition duration-[400] hover:scale-110">
          {/* <Link href="/projects">Projects</Link> */}
          {"Projects"}
        </div>
        <div className="transition duration-[400] hover:scale-110">
          {/* <Link href="/">Home</Link> */}
          {"Home"}
        </div>
      </div>
    </div>
  )
}

export default Header

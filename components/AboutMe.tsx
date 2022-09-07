import React from "react"
import Image from "next/image"

const AboutMe = () => {
  return (
    <div className="flex flex-row justify-center items-start m-2">
      <div className="overflow-hidden  w-[20vw] h-[40vh] relative">
        <Image src="/profile.png" alt="profile picture" layout="fill" width="100%" height="100%"/>
      </div>
      <div className="w-1/2 mt-10 p-10 bg-slate-100 relative">
          Hi, I&apos;m Don, a full stack developer from Chicago, IL. Given my background as both an educator and US Army Veteran, I can provide unique solutions to unique problems in the industry. I am passionate about creating a better experience through understanding the nuances of any given task and creating the optimal solution. I&apos;m always eager to learn more and continue expanding the limits of my capabilities. Thanks for stopping by and let&apos;s talk!
      </div>
    </div>
  )
}

export default AboutMe
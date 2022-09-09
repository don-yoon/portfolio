import React from "react"
import Image from "next/image"

const AboutMe = () => {
  return (
    <div className="flex justify-center h-[80vh] p-10 bg-slate-100 rounded-md items-center select-none pointer-events-none object-fill">
      <div className="overflow-hidden w-52 h-52 relative rounded-full border border-blue-900">
        <Image src="/profile.png" alt="profile picture" layout="fill" objectFit="cover" width="100%" height="100%"/>
      </div>
      <div className="w-1/2 m-4">
          Hi, I&apos;m Don, a full stack developer from Chicago, IL. Given my background as both an educator and US Army Veteran, I can provide unique solutions to unique problems in the industry. I am passionate about creating a better experience through understanding the nuances of any given task and creating the optimal solution. I&apos;m always eager to learn more and continue expanding the limits of my capabilities. Thanks for stopping by and let&apos;s talk!
      </div>
    </div>   
  )
}

export default AboutMe
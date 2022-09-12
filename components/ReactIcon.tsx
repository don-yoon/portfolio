import Image from "next/image"
import React from "react"

interface TechProps {
  logo: string;
}

const ReactIcon: React.FC<TechProps> = ({ logo }) => {
  const path: string = `/${logo}.svg`
  return (
    <div className="relative h-[10vh] w-[10vw]">
      <Image src={path} layout="fill" alt={`${logo} logo`} />
    </div>
  )
}

export default ReactIcon

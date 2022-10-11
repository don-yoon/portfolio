import Image from "next/image"
import React from "react"
import github from "../public/github.svg"

type CardDataProps = {
  cardData: {
    appName:string,
    appDescription:string,
    appLink:string
    } 
}

const Cards: React.FC<CardDataProps> = ({cardData}: CardDataProps) => {
  const { appName, appDescription, appLink } = cardData
  return (
    <>
      <div className="flex flex-col w-[30vw] m-5 transition duration-[400] hover:scale-110">
        <div className="text-2xl text-center my-4 bg-blue-900  text-white"> {appName} </div>
        <p className="h-[20vh] text-lg"> {appDescription} </p>
        <a href={ appLink }
          target="_blank"
          rel="noreferrer"
          className="bg-blue-900 flex justify-center mb-0">
          <Image src={github} height={40} width={40}/>
        </a>
      </div>
    </>
  )
}

export default Cards
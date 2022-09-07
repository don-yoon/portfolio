import React from "react"
import ReactIcon from "./ReactIcon"
import { Carousel } from "flowbite-react"

const TechStack = () => {
  
  return (
    <>
      <div className="flex justify-center text-center text-3xl relative m-20">
        <div className="w-[20vw]  h-[20vh]">
          <div>Front</div> 
          <Carousel indicators={false} leftControl=" " rightControl=" ">
            <ReactIcon logo={"javascript"}/>
            <ReactIcon logo={"typescript"}/>
            <ReactIcon logo={"react"}/>
            <ReactIcon logo={"nextjs"}/>
            <ReactIcon logo={"css3"}/>
            <ReactIcon logo={"tailwind"}/>
            <ReactIcon logo={"html5"}/>
            <ReactIcon logo={"bootstrap"}/>
          </Carousel>
        </div>
        <div className="w-[20vw] h-[20vh]">
          <div>Back</div>
          <Carousel indicators={false} leftControl=" " rightControl=" ">
            <ReactIcon logo={"ruby"}/>
            <ReactIcon logo={"rails"}/>
            <ReactIcon logo={"postgresql"}/>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default TechStack
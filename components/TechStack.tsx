import React, { useEffect } from "react"
import ReactIcon from "./ReactIcon"
import { useSpringCarousel } from "react-spring-carousel"

const TechStack = () => {
  const techArray: {tech: string, id: number}[] = [
    {"tech":"javascript", "id":1},
    {"tech":"typescript", "id":2},
    {"tech":"react", "id":3},
    {"tech":"nextjs","id":4},
    {"tech":"css3", "id":5},
    {"tech":"tailwind", "id":6},
    {"tech":"html5", "id":7},
    {"tech":"bootstrap","id":8},
    {"tech":"ruby", "id":9},
    {"tech":"rails", "id":10},
    {"tech":"postgresql", "id":11}
  ]

  const { 
    carouselFragment,
    slideToNextItem
  } = useSpringCarousel({
    slideType:"fluid",
    withLoop: true,
    items: techArray.map((techObj) => ({
      id: `item-${techObj.id}`,
      renderItem: (
        <div className="transform transition duration-400 hover:scale-150">
          <ReactIcon logo={techObj.tech}/>
        </div>
      ),
    })),
  })
  useEffect(() => {
    const timer = setInterval(() => {
      slideToNextItem()
    }, 1500)
    return () => {
      window.clearInterval(timer)
    }
  }, [slideToNextItem])

  
  return (
    <>
      <div className="overflow-x-hidden p-20">
        { carouselFragment }
      </div>
    </>
  )
}

export default TechStack
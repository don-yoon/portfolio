import type { NextPage } from "next"
import React from "react"
import Link from "next/link"
import TechStack from "../components/TechStack"

const projects: NextPage = () => {
  return (
    <div className="flex flex-col h-[80vh]">
      <div className="grid grid-cols-3 m-auto gap-10">
        <div className="max-w-md">
          <div className="h-full bg-slate-100 p-10 transform transition duration-400 hover:scale-110">
            <div className="text-2xl mb-2 cursor-pointer">
              <a href="https://github.com/learn-academy-2022-charlie/apartment-app-don-yoon" target="_blank" rel="noreferrer">Apartment App</a>
            </div>
            <p className="flex-1">First solo full stack application utilizing react in rails and further practice using REST apis and TDD.</p>
          </div>
        </div>
        <div className="max-w-md">
          <div className="h-full bg-slate-100 p-10 transform transition duration-400 hover:scale-110">
            <Link href="https://github.com/learn-academy-2022-charlie/cat-tinder-frontend-bengal-lati">
              <div className="text-2xl mb-2 cursor-pointer"><a>Cinder</a></div>
            </Link>
            <p className="grow">
              First full stack application utilizing CRUD functionality using a rails backend.
            </p>
          </div>
        </div>
        <div className="max-w-md">
          <div className="h-full bg-slate-100 p-10 transform transition duration-400 hover:scale-110">
            <Link href="">
              <div className="text-2xl mb-2 cursor-pointer"><a>Ruby Text Based Game</a></div>
            </Link>
            <p>
                My first foray into Ruby. Learned Ruby syntax and created a simple text based game using methods and conditionals.
            </p>
          </div>
        </div>
        <div className="max-w-md">
          <div className="h-full bg-slate-100 p-10 transform transition duration-400 hover:scale-110">
            <Link href="https://github.com/learn-academy-2022-charlie/pig-latin-teamaltered">
              <div className="text-2xl mb-2 cursor-pointer"><a >Pig Latin Translator</a></div>
            </Link>
            <p>
              Using higher order functions within REACT components to parse user input string and perform manipulations.
            </p>
          </div>
        </div>
        <div className="max-w-md">
          <div className="h-full bg-slate-100 p-10 transform transition duration-400 hover:scale-110">
            <Link href="https://github.com/learn-academy-2022-charlie/tic-tac-toe-tic-tac-wood">
              <div className="text-2xl mb-2 cursor-pointer"><a>Tic Tac Toe</a></div>
            </Link>
            <p>
              First time using REACT to provide simple functionality to a webpage
            </p>
          </div>
        </div>
      </div>
      <div>
        <TechStack/>
      </div>
    </div>
  )
}

export default projects
import type { NextPage } from "next"
import React from "react"
import { Card } from "flowbite-react"
import Link from "next/link"
import TechStack from "../components/TechStack"
import Header from "../components/Header"
import Footer from "../components/Footer"

const projects: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Header/>
      <div className="container grid grid-cols-3 items-stretch mx-auto gap-4">
        <div className="max-w-md">
          <div className="">
            <Link href="https://github.com/learn-academy-2022-charlie/apartment-app-don-yoon">
              <div className="text-2xl mb-2"><a>Apartment App</a></div>
            </Link>
            <p className="flex-1">First solo full stack application utilizing react in rails and further practice using REST apis and TDD.</p>
          </div>
        </div>
        <div className="max-w-md">
          <div>
            <Link href="https://github.com/learn-academy-2022-charlie/cat-tinder-frontend-bengal-lati">
              <div className="text-2xl mb-2"><a>Cinder</a></div>
            </Link>
            First full stack application utilizing CRUD functionality using a rails backend.
          </div>
        </div>
        <div className="max-w-md">
          <div>
            <Link href="">
              <a>Ruby Text Based Game</a>
            </Link>
            My first foray into Ruby. Learned Ruby syntax and created a simple text based game using methods and conditionals.
          </div>
        </div>
        <div className="max-w-md">
          <div>
            <Link href="https://github.com/learn-academy-2022-charlie/pig-latin-teamaltered">
              <a >Pig Latin Translator</a>
            </Link>
            Using higher order functions within REACT components to parse user input string and perform manipulations.
          </div>
        </div>
        <div className="max-w-md">
          <div>
            <Link href="https://github.com/learn-academy-2022-charlie/tic-tac-toe-tic-tac-wood">
              <a>Tic Tac Toe</a>
            </Link>
            First time using REACT to provide simple functionality to a webpage
          </div>
        </div>
      </div>
      <div>
        <TechStack/>
      </div>
      <Footer/>
    </div>
  )
}

export default projects
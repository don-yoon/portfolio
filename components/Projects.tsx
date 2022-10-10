import React from "react"

const Projects: React.FC = () => {
  return (
    
    <div className="flex w-[100vw] select-none flex-col py-10">
      <div className="m-auto w-1/5 bg-blue-900 text-center text-3xl text-white">Internship</div>
      <div className="m-auto grid grid-cols-3 gap-10 pt-10 sm:grid-cols-1 md:grid-cols-2 ">
        <div className="max-w-[25vw]">
          <div className="h-full border-2 bg-slate-100 p-10 transition duration-[400] hover:scale-110">
            <div className="mb-2 cursor-pointer bg-blue-900 px-2 text-center text-2xl text-white">
              <a
                href="https://github.com/LEARNAcademy/classroom"
                target="_blank"
                rel="noreferrer"
              >
              Student CRM Admin Backend
              </a>
            </div>
            <p className="px-2">
            Created a fullstack rails application for the backend. Will allow future instructors to update student progress throughout a course, including assessment reviews and attendance status. Utilized Jumpstart gem with devise authentication.
            </p>
          </div>
        </div>
        <div className="max-w-[25vw]">
          <div className="h-full border-2 bg-slate-100 p-10 transition duration-[400] hover:scale-110">
            <div className="mb-2 cursor-pointer bg-blue-900 px-2 text-center text-2xl text-white">
              <a
                href="https://github.com/LEARNAcademy/student-application"
                target="_blank"
                rel="noreferrer"
              >
              Student CRM Frontend
              </a>
            </div>
            <p className="px-2">
          Student CRM Student Frontend created a portal for students to login and see the current status of the course. Used a functional component REACT application along with Tailwind CSS. Next will work on APIs to connect the front and back together.
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto mt-10 w-1/5 bg-blue-900 text-center text-3xl text-white">Coursework</div>
      <div className="m-auto grid grid-cols-3 gap-10 py-10 sm:grid-cols-1 md:grid-cols-2 ">
        <div className="max-w-[25vw]">
          <div className="h-full border-2 bg-slate-100 p-10 transition duration-[400] hover:scale-110">
            <div className="mb-2 cursor-pointer bg-blue-900 px-2 text-center text-2xl text-white">
              <a
                href="https://github.com/learn-academy-2022-charlie/apartment-app-don-yoon"
                target="_blank"
                rel="noreferrer"
              >
              Apartment App
              </a>
            </div>
            <p className="px-2">
            First solo full stack application utilizing react in rails and
            further practice using REST apis and TDD.
            </p>
          </div>
        </div>
        <div className="max-w-[25vw]">
          <div className="h-full border-2 bg-slate-100 p-10 transition duration-[400] hover:scale-110">
            <div className="mb-2 cursor-pointer bg-blue-900 px-2 text-center text-2xl text-white">
              <a
                href="https://github.com/learn-academy-2022-charlie/cat-tinder-frontend-bengal-lati"
                target="_blank"
                rel="noreferrer"
              >
                  Cinder
              </a>
            </div>
            <p className="px-2">
            First full stack application utilizing CRUD functionality using a
            rails backend.
            </p>
          </div>
        </div>
        <div className="max-w-[25vw]">
          <div className="h-full border-2 bg-slate-100 p-10 transition duration-[400] hover:scale-110">
            <div className="mb-2 cursor-pointer bg-blue-900 px-2 text-center text-2xl text-white">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                  Ruby Text Based Game
              </a>
            </div>
            <p className="px-2">
            My first foray into Ruby. Learned Ruby syntax and created a simple
            text based game using methods and conditionals.
            </p>
          </div>
        </div>
        <div className="max-w-[25vw]">
          <div className="h-full border-2 bg-slate-100 p-10 transition duration-[400] hover:scale-110">
            
            <div className="mb-2 cursor-pointer bg-blue-900 px-2 text-center text-2xl text-white">
              <a
                href="https://github.com/learn-academy-2022-charlie/pig-latin-teamaltered"
                target="_blank"
                rel="noreferrer"
              >
                  Pig Latin Translator
              </a>
            </div>
            <p className="px-2">
            Using higher order functions within REACT components to parse user
            input string and perform manipulations.
            </p>
          </div>
        </div>
        <div className="max-w-[25vw]">
          <div className="h-full border-2 bg-slate-100 p-10 transition duration-[400] hover:scale-110">        
            <div className="mb-2 cursor-pointer bg-blue-900 px-2 text-center text-2xl text-white">
              <a
                href="https://github.com/learn-academy-2022-charlie/tic-tac-toe-tic-tac-wood"
                target="_blank"
                rel="noreferrer"
              >
                  Tic Tac Toe
              </a>
            </div>
            <p className="px-2">
            First time using REACT to provide simple functionality to a
            webpage
            </p>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default Projects

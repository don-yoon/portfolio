import type { NextPage } from "next"
import Head from "next/head"
import React from "react"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Don&apos;s Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="./dlogo2.svg" />
      </Head>
      <div className="scroll-smooth">
        <main>
          <AboutMe/>  
          <Projects/>
        </main>
      </div>
    </>
  )
}

export default Home

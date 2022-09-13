import type { NextPage } from "next"
import Head from "next/head"
import React from "react"
import AboutMe from "../components/AboutMe"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Don&apos;s Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="./dlogo2.svg" />
      </Head>
      <div>
        <main>
          <AboutMe />
        </main>
      </div>
    </>
  )
}

export default Home

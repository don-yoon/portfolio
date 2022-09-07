import type { NextPage } from "next"
import Head from "next/head"
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AboutMe from "../components/AboutMe"


const Home: NextPage = () => {
  return (
    <div className="min-h-full  ">
      <Head>
        <title>Don Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Header/>
        <main>
          <AboutMe/>
        </main>
        <div className="sticky-bottom">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home

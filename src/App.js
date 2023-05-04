import React from "react"
import Header from "./component/Head/Header"
import Home from "./component/home/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Skills from "./component/skills/Skills"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App

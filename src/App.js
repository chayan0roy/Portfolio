import React from "react"
import Header from "./component/header/Header"
import Home from "./pages/home/Home"
import Skills from "./pages/skills/Skills"
import Portfolio from "./pages/portfolio/Portfolio"
import Contact from "./pages/contact/Contact"
import Footer from "./component/footer/Footer"
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

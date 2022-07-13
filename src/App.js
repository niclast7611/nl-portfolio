import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import SkillStack from './components/SkillStack'
import Footer from './components/Footer'
import Project from './components/Project'
import Contact from './components/Contact'
import './App.css'


 class Portfolio extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Intro/>
      <About/>  
      <SkillStack/>
      <Project/>
      <Contact/>
      <Footer/>
      </>
    )
  }
}
export default Portfolio

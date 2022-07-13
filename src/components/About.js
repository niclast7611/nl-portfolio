import React, { Component } from 'react'

import './About.css'

class About extends Component {
  render() {
    return (
      <>
      <div id="about">
        <div id= 'about-container'>
            <div id='about-body'>
              <h2 id='title'>About Me </h2>
              <p>Hi, my name is Nicolas Last. I am a Junior Full Stack Developer currently honing my skills in Ruby and React at LEARN Academy. Right out of highschool I jumped into the tech industry by self teaching myself HTML, CSS, and JS. I am driven by my love for building things from scratch and learning new subjects. I have great communication skills from working in the restaurant industry for 2 years and am quick to pick up new things. I am a team worker and a hard worker, doing every task to the best of my ability. 
              </p>
            </div>
            <div id= 'future-image'>
          <img id='pic-of-me'src="/images/donuts.jpeg" alt="Nic Last"/>
          </div>
        </div>
      </div>
      </>
    )
  }
}
export default About
import React, { useState } from 'react'

import './Project.css'

const Project = () => {


  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 200) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? <span id='read-more-less' className="link"> ... Read More</span> : <span id='read-more-less' className="link"> ... Read Less</span>}
        </span>
      </p>
    );
  };

    return (
      <>
      <div id='projects'>    
        <h2 className='title'>Projects</h2>
        <div id='project-container'>
          <div id='project'>
            <div id='project-body'>
             <img id='project-image' src="/images/piglatin-photo.png" alt="Piglatin application"/>
              <h4 className='project-title'>Pig Latin Translator</h4>
             
               <p id='project-p'>
               <ReadMore>
                Do you have friends that speak pig latin and you just can't communicate with them like you'd like. Well this translator developed by myself and my partner Stephen OMarrah allows the average person to type in a sentence in english and have it translated into PigLatin. 
                </ReadMore>
                <a className="link" target='_blank' rel="noreferrer" href="https://github.com/niclast7611/pig-latin-translator">View Repo</a> 
              </p> 
              <div id='lang-tags'>
              <span id='tag'>JavaScript</span>
                <span id='tag'>React</span>
                <span id='tag'>CSS</span>
                <span id='tag'>HTML</span>
              </div>
            </div>
          </div>
          <div id='project'>
            <div id='project-body'>
              <img id='project-image' src="/images/portfolio.png" alt=""/>
              <h4 className='project-title'>This Portfolio</h4>
              <p id='project-p'>
                <ReadMore>
                  I created this Portfolio to show off my front end skills and to display all my projects in one convienient site. I aimed for a minimal and modern website. I created this project from scratch and really enjoyed the progress. I will forever modify and change this website as long as I am a developer.
                </ReadMore>
                  <a className="link" target= '_blank' rel="noreferrer" href="https://github.com/niclast7611/nic-last-portfolio">View Repo</a>
              </p>
              <div id='lang-tags'>
                <span id='tag'>JavaScript</span>
                <span id='tag'>React</span>
                <span id='tag'>CSS</span>
                <span id='tag'>HTML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }

export default Project
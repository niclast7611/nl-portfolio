import React, { Component } from 'react'
import { FaRegCopyright } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <>
      <footer>
        <div id = 'footer-container'>
          <div className='copyright'>
            <p id = 'footer-p'><span><FaRegCopyright id = 'copyright'/></span> My Portfolio - Nic Last 2022</p>
          </div>
          <div className='link-icons'>
           <a target='_blank' href="https://github.com/niclast7611"><AiFillGithub id = 'github'/></a>
           <a target='_blank' href="https://www.linkedin.com/in/nicolas-last-095099239/"><AiFillLinkedin id = 'linkedin'/></a>
          
          </div>
        </div>
     </footer>

      </>
    )
  }
}
export default Footer
import React, { Component } from 'react'
import { SiJavascript, SiCss3, SiPostgresql, SiRubyonrails, SiJest } from 'react-icons/si'
import { TiHtml5 } from 'react-icons/ti';
import { DiRuby } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';

import './SkillStack.css'

 class SkillStack extends Component {
  render() {
    return (
      <>
      <div id='skill-stack'>
        <div id="ss-container">
          <h2 className="ss-title">Skill Stack</h2>
          <div id="ss-body">
              <div id="lang-container">
                
                <div id="languages">
                <div className="logo-label">
                  <SiJavascript id={'ss-icons'} />
                    <label>JavaScript</label>
                  </div>
                  <div className="logo-label">
                  <TiHtml5 id={'ss-icons'} />
                    <label>HTML</label>
                  </div>
                  <div className="logo-label">
                  <SiCss3 id={'ss-icons'} />
                    <label>CSS</label>
                  </div>
                  <div className="logo-label">
                  <DiRuby id={'ss-icons'} />
                    <label>Ruby</label>
                  </div>
                  <div className="logo-label">
                  <SiPostgresql id={'ss-icons'} />
                    <label>SQL</label>
                    </div>
                  <div className="logo-label">
                  <FaReact id={'ss-icons'} />
                    <label>React </label>
                    </div>
                  <div className="logo-label">
                <SiRubyonrails id={'ss-icons'} />
                  <label>Ruby On Rails</label>
                </div>
                <div className="logo-label">
                <SiJest id={'ss-icons'} />
                  <label>Jest</label>
                </div>
                <div className="logo-label">
                <BiGitBranch id={'ss-icons'} />
                  <label>Git</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
export default SkillStack


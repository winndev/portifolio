import React from 'react'
import './About.css'
import profile_img from './../../assets/profile_img.jpeg'
const About = () => {
  return (
    <div className='about'>
      <div className="about-tittle">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Aspiring web developer with foundational experience in crafting responsive websites</p>
          <p>Passionate aspiring web developer dedicated to crafting websites and interactive applications, eager to grow skills and collaborate on innovative projects.</p>

          </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>HTML & CSS</p>
            <hr  style={{width:"70%"}}/>
          </div>
            <div className="about-skill">
            <p>Exress And NodeJS</p>
            <hr  style={{width:"50%"}}/>
          </div>
            <div className="about-skill">
            <p>React JS</p>
            <hr  style={{width:"60%"}}/>
          </div>
            <div className="about-skill">
            <p>JavaScript</p>
            <hr  style={{width:"60%"}}/>
          </div>
        </div>
        </div>
      </div>
       <div className="about-achiviement">
          <div className="about-achievements">
            <h1>10+</h1>
            <p>YEARS OF EXPERINCE</p>
            <hr style={{width:"30%"}}/>
          </div>
           <div className="about-achievements">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
            <hr style={{width:"30%"}}/>
          </div>
           <div className="about-achievements">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
            <hr style={{width:"30%"}}/>
          </div>


        </div>
    </div>
  )
}

export default About

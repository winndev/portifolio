import React from 'react'
import './about.css'
import profile_img from '../../assets/profile_img.jpeg'
const About = () => {
  return (
    <div className='about'>
      <div className='about-tittle'>
        <h1>About Me</h1>
    
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Aspiring web developer with foundational experience in crafting responsive websites</p>
                <p>Passionate aspiring web developer dedicated to crafting websites and interactive applications, eager to grow skills and collaborate on innovative projects.</p>
                <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JavaScript </p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Exress And NodeJS</p><hr style={{width:"50%"}}/></div>

                </div>

            </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr /> 
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
          <hr />
           

        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
       <h1><span>I'm Benitha Kubana,</span> Web Developer based in Rwanda.  </h1>
       <p>Entry-level web developer experienced in building responsive sites and interactive apps, eager to advance skills and collaborate on innovative projects.</p>
       <div className="hero-action">
        <div className="hero-connect">Connect With me</div>
        <div className="hero-resume">My Resume</div>
       </div>
    </div>
  ) 
}
   
export default Hero

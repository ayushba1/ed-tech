import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setplayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setplayState(true)}}/>
      </div>
      <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tommorows Leader Today</h2>
      <p>
      "In the heart of a university, we discover not only answers but the courage to question,
       to think beyond the present, and to create the future."
      </p>
      <p>
      "Universities nurture the light within each student, igniting minds to chase truth, challeng
      e the status quo, and illuminate the path forward."
      </p>
      <p>
      Here, in the halls of universities, we find not jus
      t classrooms but worlds waiting to be explored, where every do
      or opened leads to endless possibilities."


      </p>
      </div>
    </div>
  )
}

export default About

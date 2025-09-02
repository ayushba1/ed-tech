import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from  '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider=useRef();
    let tx=0;
    const slideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    

    }
    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }



  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
      <ul ref={slider}>
        <li><div className='slide'>
            <div className="user-info">
                <img src={user_1} alt=""/>
                <div>
                    <h3>Chut Ka Chakkar</h3>
                    <span>Bihar,India</span>
                </div>
            </div>
            <p>Highlight the strong reputation of NITPY for its quality education and faculty.
            Mention the good placement records and industry 
            connections that can lead to job opportunities. 
            Talk about the state-of-the-art facilities, libraries, and labs th
            at enhance your learning experience.
            Emphasize the vibrant campus life, clubs, and extracurricular activities 
            that foster personal growth and networking.
            </p>
        </div>
        </li>
        <li><div className='slide'>
            <div className="user-info">
                <img src={user_2} alt=""/>
                <div>
                    <h3>jhantu</h3>
                    <span>Bihar,India</span>
                </div>
            </div>
            <p>Highlight the strong reputation of NITPY for its quality education and faculty.
            Mention the good placement records and industry 
            connections that can lead to job opportunities. 
            Talk about the state-of-the-art facilities, libraries, and labs th
            at enhance your learning experience.
            Emphasize the vibrant campus life, clubs, and extracurricular activities 
            that foster personal growth and networking.
            </p>
        </div>
        </li>
        <li><div className='slide'>
            <div className="user-info">
                <img src={user_3} alt=""/>
                <div>
                    <h3>Lauda Ka Sarkar</h3>
                    <span>Bihar,India</span>
                </div>
            </div>
            <p>Highlight the strong reputation of NITPY for its quality education and faculty.
            Mention the good placement records and industry 
            connections that can lead to job opportunities. 
            Talk about the state-of-the-art facilities, libraries, and labs th
            at enhance your learning experience.
            Emphasize the vibrant campus life, clubs, and extracurricular activities 
            that foster personal growth and networking.
            </p>
        </div>
        </li>
        <li><div className='slide'>
            <div className="user-info">
                <img src={user_4} alt=""/>
                <div>
                    <h3>Jhant Ka Baal</h3>
                    <span>Bihar,India</span>
                </div>
            </div>
            <p>Highlight the strong reputation of NITPY for its quality education and faculty.
            Mention the good placement records and industry 
            connections that can lead to job opportunities. 
            Talk about the state-of-the-art facilities, libraries, and labs th
            at enhance your learning experience.
            Emphasize the vibrant campus life, clubs, and extracurricular activities 
            that foster personal growth and networking.
            </p>
        </div>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Testimonials

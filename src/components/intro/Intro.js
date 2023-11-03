import React from 'react'
import './Intro.css'
// import man from '../images/image.png'
import backImg from '../images/import-icons/back-image.png'

const Intro = ()=>{
    return (
        <section id='intro'>
            <div className="introText">
                <span className='intro-1'>Hello,</span>
                <span className='intro-2'>I'm <span>Pranjal Sonkar</span></span>
                <p className='intro-3'>A proficient web developer with a strong aptitide for data structures and algorithms</p>
            </div>
            <img src={backImg} alt="intro image" className="introImg" />
        </section>
    );
}

export default Intro;
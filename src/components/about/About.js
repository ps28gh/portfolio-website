import React from 'react'
import './About.css'
import webdev from '../images/webdev-large.png'
import dsa from '../images/DSA.png'
import dbms from '../images/import-icons/icons8-database-94.png'
import os from '../images/import-icons/icons8-operating-system-windows-11-color (1)/icons8-operating-system-48.png'

const About = ()=>{
  return (
    <section id="about">
      <span className='about-head'>About Me</span>
      <p className='about-intro'>I have a great understanding of HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Bootstrap. I also have a firm grasp on Data Structures and Algorithms(DSA) in C++ and solved over 500+ questions across platforms. Along with this, I am also well-versed with concepts of Object-Oriented Programming(OOPS), Operarting Systems(OS), Database Management System(DBMS) and little knowledge on Computer Networks(CN) as well</p>

      <div className="skill-list">
        
        <Skill image = {webdev} head = "Web Development" text = "Full stack development using MERN stack"/>
        <Skill image = {dsa} head = "Data Structures & Algorithms" text = "Proficient understanding of important Data Strucutre and Algorithms concepts in C++"/>
        <Skill image = {dbms} head = "Database Management System" text = "Gained understanding of DBMS and SQL queries"/>
        <Skill image = {os} head = "Operating Systems" text = "Thorough understanding of working of computer"/>
        
      </div>
      
    </section>
  );
}

const Skill = (props)=>{
  return (
    <div className="skill">
      <img src={props.image} alt="skillImage" className="skill-image" />
      <div className="skill-info">
        <h2>{props.head}</h2>
        <p className='skill-text'>{props.text}</p>
      </div>
    </div>
  );
}

export default About

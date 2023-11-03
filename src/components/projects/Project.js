import './Project.css'
import React from 'react'
// import image1 from '../images/portfolio-1.png'
// import image2 from '../images/portfolio-2.png'
// import image3 from '../images/portfolio-3.png'
// import image4 from '../images/portfolio-4.png'


import image1 from '../images/text-utils.png'
import image2 from '../images/news-app.png'
import image3 from '../images/notes-app.png'
import image4 from '../images/to-do-list-new.png'


const Project = () => {
  return (
    <section id='projects'>
      
      <h2 className='proj-head'>My Projects</h2>
      <span className="proj-desc">I have been learning Web Development for several months and made various projects. Below are some of my projects</span>
      
      <div className="all-proj">
        <Single title = 'PlayWithText' image = {image1} linked = {"https://ps28gh.github.io/PlayWithText/"}/>
        <Single title = 'NewsApp' image = {image2} linked = {"https://github.com/ps28gh/NewsApp"}/>
        <Single title = 'NotesApp' image = {image3} linked = {"https://ps28gh.github.io/NotesApp.github.io/"}/>
        <Single title = 'To-do List' image = {image4} linked = {"https://ps28gh.github.io/to-do-list.github-io/"}/>
      </div>

       <a href="https://github.com/ps28gh"><button className="see-more-btn">View Github</button></a>
       
    </section>
  );
}

const Single = (props) => {
    return (
      <div className="proj">
          <a href={props.linked}><img src={props.image} alt="proj img"/></a>
          <span>{props.title}</span>
      </div>
        
    );
}

export default Project

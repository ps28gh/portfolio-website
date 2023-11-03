import React, { useRef } from 'react'
import './Contact.css'
import linkedin from '../images/import-icons/link-small.png'
import github from '../images/import-icons/icons8-github-60.png'
import leetcode from '../images/import-icons/leetcode.png'
import gfg from '../images/import-icons/geek.png'
import interviewbit from '../images/import-icons/inter-bit.png'
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();


  const sendEmail = e =>{
    e.preventDefault();

    emailjs.sendForm('service_p3hyxxf','template_lpkjce3',e.target,'XdiLk8ayipQGzXCQi')
    .then(res =>{
      e.target.reset();
      console.log(res.text);
      alert("Your message has been sent");
    })
    .catch(err =>{
      console.log(err);
    })
  }

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm("service_p3hyxxf", "template_lpkjce3", form.current, "yZoGJi-WGwsCtsZFi")
  //     .then((result) => {
  //         console.log(result.text);
  //         e.target.reset();
  //         alert("Email Sent");
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  return (
    <section id="contact">
        <h2>Contact Me</h2>
        <span className='contact-desc'>Fill the form below to email me and I will get back to you</span>
        <form className="form" onSubmit={sendEmail} ref={form}>
            <input type="text" name="user_name" className="user_name" placeholder='Enter your name'/>
            <input type="text" name="user_email" className="user_email" placeholder='Enter your e-mail'/>
            <textarea name="message" rows="6" className="message" placeholder='Write your message'/>
            <input type="submit" value="Submit" className='submit' />

            <div className="links">
                <a href="https://www.linkedin.com/in/pranjal-sonkar-401525219/"><img src={linkedin} alt="" className="linkedin" /></a>
                <a href="https://github.com/ps28gh"><img src={github} alt="" className="github" /></a>
                <a href="https://leetcode.com/pranjal_28/"><img src={leetcode} alt="" className="leetcode" /></a>
                <a href="https://auth.geeksforgeeks.org/user/pranjal_s28"><img src={gfg} alt="" className="gfg" /></a>
                <a href="https://www.interviewbit.com/profile/pranjal-sonkar"><img src={interviewbit} alt="" className="interviewbit" /></a>
            </div>
        </form>
    </section>
  )
}

export default Contact
